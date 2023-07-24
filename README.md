<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cosm1

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute `cos(x) - 1`.



<section class="usage">

## Usage

```javascript
import cosm1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cosm1@esm/index.mjs';
```

#### cosm1( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][@stdlib/math/base/special/cos] of a `number` (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```javascript
import PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs';

var v = cosm1( 0.0 );
// returns 0.0

v = cosm1( PI/4.0 );
// returns ~-0.293

v = cosm1( -PI/6.0 );
// returns ~-0.134

v = cosm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs';
import cosm1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cosm1@esm/index.mjs';

var x = linspace( 0.0, 2.0*PI, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( cosm1( x[ i ] ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cosm1.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cosm1

[test-image]: https://github.com/stdlib-js/math-base-special-cosm1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cosm1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cosm1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cosm1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cosm1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cosm1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cosm1/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cosm1/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cosm1/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cosm1/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
