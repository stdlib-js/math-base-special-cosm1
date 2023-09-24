// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,i="function"==typeof n?n.toStringTag:"";var a=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,o,c,u;if(null==r)return e.call(r);a=r[i],u=i,n=null!=(c=r)&&t.call(c,u);try{r[i]=void 0}catch(t){return e.call(r)}return o=e.call(r),n?r[i]=a:delete r[i],o}:function(r){return e.call(r)},o="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var u,f="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,e,t;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(o&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?f:function(){throw new Error("not implemented")};var s=u,l="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var y,g="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,t;if("function"!=typeof p)return!1;try{e=new p([1,3.14,-3.14,NaN]),t=e,r=(l&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var v=y,d="function"==typeof Uint8Array;var h="function"==typeof Uint8Array?Uint8Array:null;var w,b="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,e,t;if("function"!=typeof h)return!1;try{e=new h(e=[1,3.14,-3.14,256,257]),t=e,r=(d&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Uint16Array;var _="function"==typeof Uint16Array?Uint16Array:null;var E,U="function"==typeof Uint16Array?Uint16Array:void 0;E=function(){var r,e,t;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,65536,65537]),t=e,r=(A&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var I,S={uint16:E,uint8:m};(I=new S.uint16(1))[0]=4660;var k=52===new S.uint8(I.buffer)[0],x=!0===k?1:0,F=new v(1),N=new s(F.buffer);function j(r){return F[0]=r,N[x]}function T(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var O=-.16666666666666632;function V(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(O+i*t):r-(i*(.5*e-n*t)-e-n*O)}var $,G,H=!0===k?0:1,W=new v(1),C=new s(W.buffer);!0===k?($=1,G=0):($=0,G=1);var L={HIGH:$,LOW:G},P=new v(1),R=new s(P.buffer),Z=L.HIGH,M=L.LOW;function X(r,e){return R[Z]=r,R[M]=e,P[0]}var Y=Math.floor,z=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function B(r){return r!=r}function D(r){return r===z||r===q}var J="function"==typeof Object.defineProperty?Object.defineProperty:null;var K=Object.defineProperty;function Q(r){return"number"==typeof r}function rr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function er(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+rr(i):rr(i)+r,n&&(r="-"+r)),r}var tr=String.prototype.toLowerCase,nr=String.prototype.toUpperCase;function ir(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Q(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=er(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=er(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===nr.call(r.specifier)?nr.call(t):tr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ar(r){return"string"==typeof r}var or=Math.abs,cr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase,fr=String.prototype.replace,sr=/e\+(\d)$/,lr=/e-(\d)$/,pr=/^(\d+)$/,yr=/^(\d+)e/,gr=/\.0$/,vr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Q(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":or(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=fr.call(t,dr,"$1e"),t=fr.call(t,vr,"e"),t=fr.call(t,gr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fr.call(t,sr,"e+0$1"),t=fr.call(t,lr,"e-0$1"),r.alternate&&(t=fr.call(t,pr,"$1."),t=fr.call(t,yr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ur.call(r.specifier)?ur.call(t):cr.call(t)}function wr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function br(r,e,t){var n=e-r.length;return n<0?r:r=t?r+wr(n):wr(n)+r}var mr=String.fromCharCode,Ar=isNaN,_r=Array.isArray;function Er(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ur(r){var e,t,n,i,a,o,c,u,f;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(ar(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Er(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ar(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ar(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ir(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ar(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ar(a)?String(n.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=hr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=er(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=br(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function kr(r){var e,t,n,i;for(t=[],i=0,n=Ir.exec(r);n;)(e=r.slice(i,Ir.lastIndex-n[0].length)).length&&t.push(e),t.push(Sr(n)),i=Ir.lastIndex,n=Ir.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function xr(r){return"string"==typeof r}function Fr(r){var e,t,n;if(!xr(r))throw new TypeError(Fr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=kr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Ur.apply(null,t)}var Nr=Object.prototype,jr=Nr.toString,Tr=Nr.__defineGetter__,Or=Nr.__defineSetter__,Vr=Nr.__lookupGetter__,$r=Nr.__lookupSetter__;var Gr,Hr,Wr=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===jr.call(r))throw new TypeError(Fr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===jr.call(t))throw new TypeError(Fr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Vr.call(r,e)||$r.call(r,e)?(n=r.__proto__,r.__proto__=Nr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Tr&&Tr.call(r,e,t.get),o&&Or&&Or.call(r,e,t.set),r};function Cr(r,e,t){Wr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Gr=1,Hr=0):(Gr=0,Hr=1);var Lr={HIGH:Gr,LOW:Hr},Pr=new v(1),Rr=new s(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,t,n){return Pr[0]=r,e[n]=Rr[Zr],e[n+t]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}Cr(Yr,"assign",Xr);var zr=[0,0];function qr(r,e,t,n){return B(r)||D(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Cr((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Br=[0,0],Dr=[0,0];function Jr(r,e){var t,n,i,a,o,c;return 0===e||0===r||B(r)||D(r)?r:(qr(r,Br,1,0),e+=Br[1],e+=function(r){var e=j(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Br[0]),e<-1074?(i=0,a=r,Yr.assign(i,zr,1,0),o=zr[0],o&=2147483647,c=j(a),X(o|=c&=2147483648,zr[1])):e>1023?r<0?q:z:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Yr.assign(r,Dr,1,0),t=Dr[0],t&=2148532223,n*X(t|=e+1023<<20,Dr[1])))}function Kr(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Qr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],re=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ee=5.960464477539063e-8,te=Kr(20),ne=Kr(20),ie=Kr(20),ae=Kr(20);function oe(r,e,t,n,i,a,o,c,u){var f,s,l,p,y,g,v,d,h;for(p=a,h=n[t],d=t,y=0;d>0;y++)s=ee*h|0,ae[y]=h-16777216*s|0,h=n[d-1]+s,d-=1;if(h=Jr(h,i),h-=8*Y(.125*h),h-=v=0|h,l=0,i>0?(v+=y=ae[t-1]>>24-i,ae[t-1]-=y<<24-i,l=ae[t-1]>>23-i):0===i?l=ae[t-1]>>23:h>=.5&&(l=2),l>0){for(v+=1,f=0,y=0;y<t;y++)d=ae[y],0===f?0!==d&&(f=1,ae[y]=16777216-d):ae[y]=16777215-d;if(i>0)switch(i){case 1:ae[t-1]&=8388607;break;case 2:ae[t-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=Jr(1,i)))}if(0===h){for(d=0,y=t-1;y>=a;y--)d|=ae[y];if(0===d){for(g=1;0===ae[a-g];g++);for(y=t+1;y<=t+g;y++){for(u[c+y]=Qr[o+y],s=0,d=0;d<=c;d++)s+=r[d]*u[c+(y-d)];n[y]=s}return oe(r,e,t+=g,n,i,a,o,c,u)}}if(0===h)for(t-=1,i-=24;0===ae[t];)t-=1,i-=24;else(h=Jr(h,-i))>=16777216?(s=ee*h|0,ae[t]=h-16777216*s|0,i+=24,ae[t+=1]=s):ae[t]=0|h;for(s=Jr(1,i),y=t;y>=0;y--)n[y]=s*ae[y],s*=ee;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=re[g]*n[y+g];ie[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ie[y];for(e[0]=0===l?s:-s,s=ie[0]-s,y=1;y<=t;y++)s+=ie[y];return e[1]=0===l?s:-s,7&v}function ce(r,e,t,n){var i,a,o,c,u,f,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),f=a-(o=n-1),s=o+4,u=0;u<=s;u++)te[u]=f<0?0:Qr[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*te[o+(u-f)];ne[u]=i}return 4,oe(r,e,4,ne,c,4,a,o,te)}var ue=Math.round;function fe(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=ue(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(j(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(j(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var se=1.5707963267341256,le=6077100506506192e-26,pe=2*le,ye=4*le,ge=[0,0,0],ve=[0,0];function de(r,e){var t,n,i,a,o,c,u;if((i=2147483647&j(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?fe(r,i,e):i<=1073928572?r>0?(u=r-se,e[0]=u-le,e[1]=u-e[0]-le,1):(u=r+se,e[0]=u+le,e[1]=u-e[0]+le,-1):r>0?(u=r-2*se,e[0]=u-pe,e[1]=u-e[0]-pe,2):(u=r+2*se,e[0]=u+pe,e[1]=u-e[0]+pe,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?fe(r,i,e):r>0?(u=r-3*se,e[0]=u-1.8231301519518578e-10,e[1]=u-e[0]-1.8231301519518578e-10,3):(u=r+3*se,e[0]=u+1.8231301519518578e-10,e[1]=u-e[0]+1.8231301519518578e-10,-3):1075388923===i?fe(r,i,e):r>0?(u=r-4*se,e[0]=u-ye,e[1]=u-e[0]-ye,4):(u=r+4*se,e[0]=u+ye,e[1]=u-e[0]+ye,-4);if(i<1094263291)return fe(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return W[0]=r,C[H]}(r),u=X(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)ge[o]=0|u,u=16777216*(u-ge[o]);for(ge[2]=u,a=3;0===ge[a-1];)a-=1;return c=ce(ge,ve,n,a),r<0?(e[0]=-ve[0],e[1]=-ve[1],-c):(e[0]=ve[0],e[1]=ve[1],c)}var he=[0,0];var we=.7853981633974483;function be(r){var e;return r<-we||r>we?function(r){var e;if(e=j(r),(e&=2147483647)<=1072243195)return e<1044381696?1:T(r,0);if(e>=2146435072)return NaN;switch(3&de(r,he)){case 0:return T(he[0],he[1]);case 1:return-V(he[0],he[1]);case 2:return-T(he[0],he[1]);default:return V(he[0],he[1])}}(r)-1:-.5*(e=r*r)+e*e*function(r){return 0===r?.041666666666666664:.041666666666666664+r*(r*(2480158730157055e-20+r*(r*(2.087675428708152e-9+r*(4737750796424621e-29*r-1147028484342536e-26))-2.755731921499979e-7))-.0013888888888888872)}(e)}export{be as default};
//# sourceMappingURL=mod.js.map
