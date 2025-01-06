// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,v,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,h,"e-0$1"),t.alternate&&(n=f.call(n,g,"$1."),n=f.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===l.call(t.specifier)?l.call(n):s.call(n)}function m(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}var _=String.fromCharCode,j=Array.isArray;function E(t){return t!=t}function O(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function x(t){var r,e,n,o,a,c,s,l,f,p,h,g,d;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",s=1,l=0;l<t.length;l++)if("string"==typeof(n=t[l]))c+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,h=n.width,g=n.padRight,d=void 0,(d=h-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function k(t){var r,e,n,i;for(e=[],i=0,n=S.exec(t);n;)(r=t.slice(i,S.lastIndex-n[0].length)).length&&e.push(r),e.push(T(n)),i=S.lastIndex,n=S.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function I(t){var r,e;if("string"!=typeof t)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[k(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return x.apply(null,r)}var A,P=Object.prototype,V=P.toString,F=P.__defineGetter__,C=P.__defineSetter__,N=P.__lookupGetter__,Z=P.__lookupSetter__;A=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(N.call(t,r)||Z.call(t,r)?(n=t.__proto__,t.__proto__=P,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(t,r,e.get),a&&C&&C.call(t,r,e.set),t};var $=A;function R(t,r,e){$(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function B(t){return"number"==typeof t}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return G&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,U=Object.prototype.hasOwnProperty;function W(t,r){return null!=t&&U.call(t,r)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=L()?function(t){var r,e,n;if(null==t)return M.call(t);e=t[Y],r=W(t,Y);try{t[Y]=void 0}catch(r){return M.call(t)}return n=M.call(t),r?t[Y]=e:delete t[Y],n}:function(t){return M.call(t)},z=Number,J=z.prototype.toString,Q=L();function D(t){return"object"==typeof t&&(t instanceof z||(Q?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object Number]"===q(t)))}function H(t){return B(t)||D(t)}R(H,"isPrimitive",B),R(H,"isObject",D);var K=Number.POSITIVE_INFINITY,tt=z.NEGATIVE_INFINITY;function rt(t){return t==t&&t>tt&&t<K}function et(t){return B(t)&&rt(t)}function nt(t){return D(t)&&rt(t.valueOf())}function it(t){return et(t)||nt(t)}R(it,"isPrimitive",et),R(it,"isObject",nt);var ot="function"==typeof X&&"symbol"==typeof X("foo")&&W(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;function at(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}var ut=Math.floor;function ct(t){return this.next=null,this.prev=null,this.value=t,this}function st(){return this instanceof st?(this._length=0,this._first=null,this._last=null,this):new st}R(st.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),R(st.prototype,"first",(function(){if(this._length)return this._first.value})),R(st.prototype,"iterator",(function(){var t,r,e,n,i;return e=this,i=-1,t=this.toArray(),R(r={},"next",(function(){return i+=1,n||i>=t.length?{done:!0}:{value:t[i],done:!1}})),R(r,"return",(function(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}})),ot&&R(r,ot,(function(){return e.iterator()})),r})),R(st.prototype,"last",(function(){if(this._length)return this._last.value})),function(t,r,e){$(t,r,{configurable:!1,enumerable:!1,get:e})}(st.prototype,"length",(function(){return this._length})),R(st.prototype,"pop",(function(){var t;return this._length&&(t=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),t})),R(st.prototype,"push",(function(t){var r;return r=new ct(t),0===this._length?(this._first=r,this._last=r):(r.prev=this._last,this._last.next=r,this._last=r),this._length+=1,this})),R(st.prototype,"toArray",(function(){var t,r,e;for(r=[],t=this._first,e=0;e<this._length;e++)r.push(t.value),t=t.next;return r})),R(st.prototype,"toJSON",(function(){var t={type:"fifo"};return t.data=this.toArray(),t}));var lt=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)},ft=/./;function pt(t){return"boolean"==typeof t}var ht=Boolean,gt=Boolean.prototype.toString,dt=L();function yt(t){return"object"==typeof t&&(t instanceof ht||(dt?function(t){try{return gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function vt(t){return pt(t)||yt(t)}R(vt,"isPrimitive",pt),R(vt,"isObject",yt);var bt="object"==typeof self?self:null,wt="object"==typeof window?window:null,mt="object"==typeof globalThis?globalThis:null,_t=function(t){if(arguments.length){if(!pt(t))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(mt)return mt;if(bt)return bt;if(wt)return wt;throw new Error("unexpected error. Unable to resolve global object.")}(),jt=_t.document&&_t.document.childNodes,Et=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var xt=/^\s*function\s*([^(]*)/i;function St(t){return null!==t&&"object"==typeof t}function Tt(t){var r,e,n,i;if(("Object"===(e=q(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=xt.exec(n.toString()))return r[1]}return St(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}R(Ot,"REGEXP",xt),R(St,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!lt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(St));var kt="function"==typeof ft||"object"==typeof Et||"function"==typeof jt?function(t){return Tt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?Tt(t).toLowerCase():r};function It(t){return"function"===kt(t)}var At,Pt=Object,Vt=Object.getPrototypeOf;At=It(Object.getPrototypeOf)?Vt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===q(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ft=At,Ct=Object.prototype;function Nt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!lt(t)}(t)&&(r=function(t){return null==t?null:(t=Pt(t),Ft(t))}(t),!r||!W(t,"constructor")&&W(r,"constructor")&&It(r.constructor)&&"[object Function]"===q(r.constructor)&&W(r,"isPrototypeOf")&&It(r.isPrototypeOf)&&(r===Ct||function(t){var r;for(r in t)if(!W(t,r))return!1;return!0}(t)))}function Zt(t){return t<K&&t>tt&&ut(r=t)===r;var r}function $t(t){return B(t)&&Zt(t)}function Rt(t){return D(t)&&Zt(t.valueOf())}function Bt(t){return $t(t)||Rt(t)}function Gt(t){return $t(t)&&t>=0}function Lt(t){return Rt(t)&&t.valueOf()>=0}function Mt(t){return Gt(t)||Lt(t)}R(Bt,"isPrimitive",$t),R(Bt,"isObject",Rt),R(Mt,"isPrimitive",Gt),R(Mt,"isObject",Lt);var Ut=["terms","convergents","*"],Wt={terms:function(t,r,e){return e&&t>0?-t:t},convergents:function(t,r,e){return e&&t>0?-r:r},"*":function(t,r,e){return e&&t>0?[-t,-r]:[t,r]}};return function t(r,e){var n,i,o,a,u,c,s,l,f,p,h,g,d,y,v;if(!et(r))throw new TypeError(at("0Zv4Q",r));if(a={iter:1e308,tol:2220446049250313e-31,returns:"terms"},arguments.length>1&&(s=function(t,r){return Nt(r)?W(r,"iter")&&(t.iter=r.iter,!Gt(r.iter))?new TypeError(at("0Zv2t","iter",r.iter)):W(r,"tol")&&(t.tol=r.tol,!et(r.tol)||r.tol<=0)?new TypeError(at("0Zv4R","tol",r.tol)):W(r,"returns")&&(t.returns=r.returns,-1===Ut.indexOf(r.returns))?new TypeError(at("0Zv4S","returns",Ut.join('", "'),r.returns)):null:new TypeError(at("0Zv2V",r))}(a,e)))throw s;return n=Wt[a.returns],c=0,o=r,r<0?(l=!0,r=-r):l=!1,v=0,R(u={},"next",(function(){var t,r,e;return v+=1,c>0?1===c&&d.length>0?(r=(t=d.pop())[0],e=t[1],-1===r?{done:!0}:(t=d.first(),2===d.length&&1===t[0]&&(r+=1,e=t[1],d.clear()),{value:n(r,e,l),done:!1})):(c=2,{done:!0}):v===a.iter?(r=(t=d.pop())[0],e=t[1],1===(t=d.first())[0]&&(r+=1,e=t[1]),d.clear(),c=2,{value:n(r,e,l),done:!1}):(t=d.push(b()).pop(),{value:n(t[0],t[1],l),done:!1})})),R(u,"return",(function(t){return c=2,arguments.length?{value:t,done:!0}:{done:!0}})),ot&&R(u,ot,(function(){return t(o,a)})),d=new st,f=ut(r),d.push([f,f]),f===r||0===f&&(f=ut(r=1/r),d.push([f,1/f]),f===r)?(c=1,u):(y=1/(r-f),h=p=f,g=0,d.push(b()),d.push(b()),u);function b(){var t=p;return f=ut(y),y=1/(y-f),0===(g+=f)&&(g=1e-50),0===(h=f+1/h)&&(h=1e-50),p*=i=h*(g=1/g),function(t){return Math.abs(t)}(i-1)<=a.tol&&(c=1,t===p)?[-1,p]:[f,p]}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterContinuedFractionSeq=r();
//# sourceMappingURL=browser.js.map
