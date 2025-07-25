/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var linspace = require( '@stdlib/array-base-linspace' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var cos = require( '@stdlib/math-base-special-cos' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var PI = require( '@stdlib/constants-float64-pi' );
var cosm1 = require( './../lib' );


// VARIABLES //

var NPIO4 = -7.85398163397448309616e-1; // -π/4
var PIO4 = 7.85398163397448309616e-1; // π/4


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cosm1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the cosine minus one more accurately inside the interval [-π/4,π/4]', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = cosm1( x[i] );
		t.strictEqual( y, expected[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function computes `cos(x) - 1.0` outside the interval [-π/4,π/4]', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = linspace( PIO4, 4.0*PI, 100 );

	for ( i = 0; i < x.length; i++ ) {
		y = cosm1( x[i] );
		expected = cos( x[i] ) - 1;
		delta = abs( y - expected );
		tol = EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. E: '+expected+'. tol: '+tol+'. Δ: '+delta+'.' );
	}

	x = linspace( -4.0*PI, NPIO4, 100 );

	for ( i = 0; i < x.length; i++ ) {
		y = cosm1( x[i] );
		expected = cos( x[i] ) - 1.0;
		delta = abs( y - expected );
		tol = EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. Value: '+y+'. E: '+expected+'. tol: '+tol+'. Δ: '+delta+'.' );
	}

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = cosm1( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `+infinity`', function test( t ) {
	var v = cosm1( PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `-infinity`', function test( t ) {
	var v = cosm1( NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
