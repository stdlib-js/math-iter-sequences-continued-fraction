// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterContinuedFractionSeq=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,l=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(l.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),s="get"in n,p="set"in n,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var c=r;function a(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function b(t,r){return null!=t&&v.call(t,r)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var d=y()?function(t){var r,n,e;if(null==t)return h.call(t);n=t[_],r=b(t,_);try{t[_]=void 0}catch(r){return h.call(t)}return e=h.call(t),r?t[_]=n:delete t[_],e}:function(t){return h.call(t)},g=Number,m=g.prototype.toString;var j=y();function w(t){return"object"==typeof t&&(t instanceof g||(j?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function O(t){return s(t)||w(t)}a(O,"isPrimitive",s),a(O,"isObject",w);var S=Number.POSITIVE_INFINITY,E=g.NEGATIVE_INFINITY;function T(t){return t==t&&t>E&&t<S}function P(t){return s(t)&&T(t)}function x(t){return w(t)&&T(t.valueOf())}function A(t){return P(t)||x(t)}a(A,"isPrimitive",P),a(A,"isObject",x);var I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function N(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}var B=Math.floor;function F(t){return Math.abs(t)}var V=2220446049250313e-31;function C(t){return this.next=null,this.prev=null,this.value=t,this}function H(){return this instanceof H?(this._length=0,this._first=null,this._last=null,this):new H}a(H.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),a(H.prototype,"first",(function(){if(this._length)return this._first.value})),a(H.prototype,"iterator",(function(){var t,r,n,e,o;return n=this,o=-1,t=this.toArray(),a(r={},"next",(function(){if(o+=1,e||o>=t.length)return{done:!0};return{value:t[o],done:!1}})),a(r,"return",(function(t){if(e=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),I&&a(r,I,(function(){return n.iterator()})),r})),a(H.prototype,"last",(function(){if(this._length)return this._last.value})),function(t,r,n){c(t,r,{configurable:!1,enumerable:!1,get:n})}(H.prototype,"length",(function(){return this._length})),a(H.prototype,"pop",(function(){var t;return this._length&&(t=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),t})),a(H.prototype,"push",(function(t){var r;return r=new C(t),0===this._length?(this._first=r,this._last=r):(r.prev=this._last,this._last.next=r,this._last=r),this._length+=1,this})),a(H.prototype,"toArray",(function(){var t,r,n;for(r=[],t=this._first,n=0;n<this._length;n++)r.push(t.value),t=t.next;return r})),a(H.prototype,"toJSON",(function(){var t={type:"fifo"};return t.data=this.toArray(),t}));var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===d(t)};var M=/./;function k(t){return"boolean"==typeof t}var L=Boolean.prototype.toString;var R=y();function U(t){return"object"==typeof t&&(t instanceof Boolean||(R?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===d(t)))}function Y(t){return k(t)||U(t)}function q(){return new Function("return this;")()}a(Y,"isPrimitive",k),a(Y,"isObject",U);var J="object"==typeof self?self:null,X="object"==typeof window?window:null,z="object"==typeof global?global:null;var D=function(t){if(arguments.length){if(!k(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return q()}if(J)return J;if(X)return X;if(z)return z;throw new Error("unexpected error. Unable to resolve global object.")}(),K=D.document&&D.document.childNodes,Q=Int8Array;function W(){return/^\s*function\s*([^(]*)/i}var Z=/^\s*function\s*([^(]*)/i;function $(t){return null!==t&&"object"==typeof t}function tt(t){var r,n,e,o;if(("Object"===(n=d(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=Z.exec(e.toString()))return r[1]}return $(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}a(W,"REGEXP",Z),a($,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!G(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}($));var rt="function"==typeof M||"object"==typeof Q||"function"==typeof K?function(t){return tt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?tt(t).toLowerCase():r};function nt(t){return"function"===rt(t)}var et,ot=Object.getPrototypeOf;et=nt(Object.getPrototypeOf)?ot:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===d(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ut=et;var it=Object.prototype;function lt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!G(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),ut(t))}(t),!r||!b(t,"constructor")&&b(r,"constructor")&&nt(r.constructor)&&"[object Function]"===d(r.constructor)&&b(r,"isPrototypeOf")&&nt(r.isPrototypeOf)&&(r===it||function(t){var r;for(r in t)if(!b(t,r))return!1;return!0}(t)))}function ft(t){return t<S&&t>E&&B(r=t)===r;var r}function ct(t){return s(t)&&ft(t)}function at(t){return w(t)&&ft(t.valueOf())}function st(t){return ct(t)||at(t)}function pt(t){return ct(t)&&t>=0}function yt(t){return at(t)&&t.valueOf()>=0}function ht(t){return pt(t)||yt(t)}a(st,"isPrimitive",ct),a(st,"isObject",at),a(ht,"isPrimitive",pt),a(ht,"isObject",yt);var vt=["terms","convergents","*"];function bt(t,r){return lt(r)?b(r,"iter")&&(t.iter=r.iter,!pt(r.iter))?new TypeError(N("0Hs35","iter",r.iter)):b(r,"tol")&&(t.tol=r.tol,!P(r.tol)||r.tol<=0)?new TypeError(N("0Hs4e","tol",r.tol)):b(r,"returns")&&(t.returns=r.returns,-1===vt.indexOf(r.returns))?new TypeError(N("0Hs3t","returns",vt.join('", "'),r.returns)):null:new TypeError(N("0Hs2h",r))}var _t=1e-50,dt={terms:function(t,r,n){return n&&t>0?-t:t},convergents:function(t,r,n){return n&&t>0?-r:r},"*":function(t,r,n){return n&&t>0?[-t,-r]:[t,r]}};return function t(r,n){var e,o,u,i,l,f,c,s,p,y,h,v,b,_,d;if(!P(r))throw new TypeError(N("0Hs4d",r));if(i={iter:1e308,tol:V,returns:"terms"},arguments.length>1&&(c=bt(i,n)))throw c;return e=dt[i.returns],f=0,u=r,r<0?(s=!0,r=-r):s=!1,d=0,a(l={},"next",m),a(l,"return",j),I&&a(l,I,w),b=new H,p=B(r),b.push([p,p]),p===r||0===p&&(p=B(r=1/r),b.push([p,1/p]),p===r)?(f=1,l):(_=1/(r-p),h=y=p,v=0,b.push(g()),b.push(g()),l);function g(){var t=y;return p=B(_),_=1/(_-p),0===(v+=p)&&(v=_t),0===(h=p+1/h)&&(h=_t),y*=o=h*(v=1/v),F(o-1)<=i.tol&&(f=1,t===y)?[-1,y]:[p,y]}function m(){var t,r,n;return d+=1,f>0?1===f&&b.length>0?(r=(t=b.pop())[0],n=t[1],-1===r?{done:!0}:(t=b.first(),2===b.length&&1===t[0]&&(r+=1,n=t[1],b.clear()),{value:e(r,n,s),done:!1})):(f=2,{done:!0}):d===i.iter?(r=(t=b.pop())[0],n=t[1],1===(t=b.first())[0]&&(r+=1,n=t[1]),b.clear(),f=2,{value:e(r,n,s),done:!1}):(t=b.push(g()).pop(),{value:e(t[0],t[1],s),done:!1})}function j(t){return f=2,arguments.length?{value:t,done:!0}:{done:!0}}function w(){return t(u,i)}}}));
//# sourceMappingURL=index.js.map
