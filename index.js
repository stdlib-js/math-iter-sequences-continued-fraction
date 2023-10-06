// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterContinuedFractionSeq=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,y,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===f.call(t.specifier)?f.call(n):l.call(n)}function _(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function j(t,r,e){var n=r-t.length;return n<0?t:t=e?t+_(n):_(n)+t}var E=String.fromCharCode,O=isNaN,x=Array.isArray;function S(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function T(t){var r,e,n,o,a,s,l,f,p;if(!x(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",l=1,f=0;f<t.length;f++)if(c(n=t[f]))s+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function I(t){var r,e,n,i;for(e=[],i=0,n=k.exec(t);n;)(r=t.slice(i,k.lastIndex-n[0].length)).length&&e.push(r),e.push(A(n)),i=k.lastIndex,n=k.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function P(t){return"string"==typeof t}function F(t){var r,e,n;if(!P(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=I(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var V,C=Object.prototype,N=C.toString,G=C.__defineGetter__,Z=C.__defineSetter__,$=C.__lookupGetter__,R=C.__lookupSetter__;V=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&($.call(t,r)||R.call(t,r)?(n=t.__proto__,t.__proto__=C,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(t,r,e.get),a&&Z&&Z.call(t,r,e.set),t};var B=V;function L(t,r,e){B(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function M(t){return"number"==typeof t}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function J(t,r){return null!=t&&D.call(t,r)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=W()?function(t){var r,e,n;if(null==t)return X.call(t);e=t[q],r=J(t,q);try{t[q]=void 0}catch(r){return X.call(t)}return n=X.call(t),r?t[q]=e:delete t[q],n}:function(t){return X.call(t)},Q=Number,H=Q.prototype.toString;var K=W();function tt(t){return"object"==typeof t&&(t instanceof Q||(K?function(t){try{return H.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function rt(t){return M(t)||tt(t)}L(rt,"isPrimitive",M),L(rt,"isObject",tt);var et=Number.POSITIVE_INFINITY,nt=Q.NEGATIVE_INFINITY;function it(t){return t==t&&t>nt&&t<et}function ot(t){return M(t)&&it(t)}function at(t){return tt(t)&&it(t.valueOf())}function ut(t){return ot(t)||at(t)}L(ut,"isPrimitive",ot),L(ut,"isObject",at);var ct="function"==typeof Y&&"symbol"==typeof Y("foo")&&J(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null;function st(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var lt=Math.floor;function ft(t){return Math.abs(t)}var pt=2220446049250313e-31;function ht(t){return this.next=null,this.prev=null,this.value=t,this}function gt(){return this instanceof gt?(this._length=0,this._first=null,this._last=null,this):new gt}L(gt.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),L(gt.prototype,"first",(function(){if(this._length)return this._first.value})),L(gt.prototype,"iterator",(function(){var t,r,e,n,i;return e=this,i=-1,t=this.toArray(),L(r={},"next",(function(){if(i+=1,n||i>=t.length)return{done:!0};return{value:t[i],done:!1}})),L(r,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),ct&&L(r,ct,(function(){return e.iterator()})),r})),L(gt.prototype,"last",(function(){if(this._length)return this._last.value})),function(t,r,e){B(t,r,{configurable:!1,enumerable:!1,get:e})}(gt.prototype,"length",(function(){return this._length})),L(gt.prototype,"pop",(function(){var t;return this._length&&(t=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),t})),L(gt.prototype,"push",(function(t){var r;return r=new ht(t),0===this._length?(this._first=r,this._last=r):(r.prev=this._last,this._last.next=r,this._last=r),this._length+=1,this})),L(gt.prototype,"toArray",(function(){var t,r,e;for(r=[],t=this._first,e=0;e<this._length;e++)r.push(t.value),t=t.next;return r})),L(gt.prototype,"toJSON",(function(){var t={type:"fifo"};return t.data=this.toArray(),t}));var vt=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};var yt=/./;function dt(t){return"boolean"==typeof t}var bt=Boolean,wt=Boolean.prototype.toString;var mt=W();function _t(t){return"object"==typeof t&&(t instanceof bt||(mt?function(t){try{return wt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function jt(t){return dt(t)||_t(t)}function Et(){return new Function("return this;")()}L(jt,"isPrimitive",dt),L(jt,"isObject",_t);var Ot="object"==typeof self?self:null,xt="object"==typeof window?window:null,St="object"==typeof global?global:null,Tt="object"==typeof globalThis?globalThis:null;var kt=function(t){if(arguments.length){if(!dt(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Et()}if(Tt)return Tt;if(Ot)return Ot;if(xt)return xt;if(St)return St;throw new Error("unexpected error. Unable to resolve global object.")}(),At=kt.document&&kt.document.childNodes,It=Int8Array;function Pt(){return/^\s*function\s*([^(]*)/i}var Ft=/^\s*function\s*([^(]*)/i;function Vt(t){return null!==t&&"object"==typeof t}function Ct(t){var r,e,n,i;if(("Object"===(e=z(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ft.exec(n.toString()))return r[1]}return Vt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}L(Pt,"REGEXP",Ft),L(Vt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!vt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Vt));var Nt="function"==typeof yt||"object"==typeof It||"function"==typeof At?function(t){return Ct(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Ct(t).toLowerCase():r};function Gt(t){return"function"===Nt(t)}var Zt,$t=Object,Rt=Object.getPrototypeOf;Zt=Gt(Object.getPrototypeOf)?Rt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Bt=Zt;var Lt=Object.prototype;function Mt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!vt(t)}(t)&&(r=function(t){return null==t?null:(t=$t(t),Bt(t))}(t),!r||!J(t,"constructor")&&J(r,"constructor")&&Gt(r.constructor)&&"[object Function]"===z(r.constructor)&&J(r,"isPrototypeOf")&&Gt(r.isPrototypeOf)&&(r===Lt||function(t){var r;for(r in t)if(!J(t,r))return!1;return!0}(t)))}function Ut(t){return t<et&&t>nt&&lt(r=t)===r;var r}function Wt(t){return M(t)&&Ut(t)}function Xt(t){return tt(t)&&Ut(t.valueOf())}function Dt(t){return Wt(t)||Xt(t)}function Jt(t){return Wt(t)&&t>=0}function Yt(t){return Xt(t)&&t.valueOf()>=0}function qt(t){return Jt(t)||Yt(t)}L(Dt,"isPrimitive",Wt),L(Dt,"isObject",Xt),L(qt,"isPrimitive",Jt),L(qt,"isObject",Yt);var zt=["terms","convergents","*"];function Qt(t,r){return Mt(r)?J(r,"iter")&&(t.iter=r.iter,!Jt(r.iter))?new TypeError(st("0Zv2t,G9","iter",r.iter)):J(r,"tol")&&(t.tol=r.tol,!ot(r.tol)||r.tol<=0)?new TypeError(st("0Zv4R,G8","tol",r.tol)):J(r,"returns")&&(t.returns=r.returns,-1===zt.indexOf(r.returns))?new TypeError(st("0Zv2X,3g,4S,GD,Gg,Jm","returns",zt.join('", "'),r.returns)):null:new TypeError(st("0Zv2V,FD",r))}var Ht=1e-50,Kt={terms:function(t,r,e){return e&&t>0?-t:t},convergents:function(t,r,e){return e&&t>0?-r:r},"*":function(t,r,e){return e&&t>0?[-t,-r]:[t,r]}};return function t(r,e){var n,i,o,a,u,c,s,l,f,p,h,g,v,y,d;if(!ot(r))throw new TypeError(st("0Zv4Q,GC",r));if(a={iter:1e308,tol:pt,returns:"terms"},arguments.length>1&&(s=Qt(a,e)))throw s;return n=Kt[a.returns],c=0,o=r,r<0?(l=!0,r=-r):l=!1,d=0,L(u={},"next",w),L(u,"return",m),ct&&L(u,ct,_),v=new gt,f=lt(r),v.push([f,f]),f===r||0===f&&(f=lt(r=1/r),v.push([f,1/f]),f===r)?(c=1,u):(y=1/(r-f),h=p=f,g=0,v.push(b()),v.push(b()),u);function b(){var t=p;return f=lt(y),y=1/(y-f),0===(g+=f)&&(g=Ht),0===(h=f+1/h)&&(h=Ht),p*=i=h*(g=1/g),ft(i-1)<=a.tol&&(c=1,t===p)?[-1,p]:[f,p]}function w(){var t,r,e;return d+=1,c>0?1===c&&v.length>0?(r=(t=v.pop())[0],e=t[1],-1===r?{done:!0}:(t=v.first(),2===v.length&&1===t[0]&&(r+=1,e=t[1],v.clear()),{value:n(r,e,l),done:!1})):(c=2,{done:!0}):d===a.iter?(r=(t=v.pop())[0],e=t[1],1===(t=v.first())[0]&&(r+=1,e=t[1]),v.clear(),c=2,{value:n(r,e,l),done:!1}):(t=v.push(b()).pop(),{value:n(t[0],t[1],l),done:!1})}function m(t){return c=2,arguments.length?{value:t,done:!0}:{done:!0}}function _(){return t(o,a)}}}));
//# sourceMappingURL=index.js.map
