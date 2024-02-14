// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(t){return"string"==typeof t}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===f.call(t.specifier)?f.call(n):s.call(n)}function _(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function j(t,r,e){var n=r-t.length;return n<0?t:t=e?t+_(n):_(n)+t}var O=String.fromCharCode,S=isNaN,E=Array.isArray;function T(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function x(t){var r,e,n,o,a,l,s,f,p;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",s=1,f=0;f<t.length;f++)if(c(n=t[f]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function I(t){var r,e,n,i;for(e=[],i=0,n=A.exec(t);n;)(r=t.slice(i,A.lastIndex-n[0].length)).length&&e.push(r),e.push(k(n)),i=A.lastIndex,n=A.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function P(t){return"string"==typeof t}function V(t){var r,e;if(!P(t))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[I(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return x.apply(null,r)}var F,N=Object.prototype,C=N.toString,$=N.__defineGetter__,B=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;F=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(R.call(t,r)||G.call(t,r)?(n=t.__proto__,t.__proto__=N,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(t,r,e.get),a&&B&&B.call(t,r,e.set),t};var L=F;function M(t,r,e){L(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Z(t){return"number"==typeof t}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(t,r){return null!=t&&Y.call(t,r)}var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"",D=U()?function(t){var r,e,n;if(null==t)return X.call(t);e=t[J],r=q(t,J);try{t[J]=void 0}catch(r){return X.call(t)}return n=X.call(t),r?t[J]=e:delete t[J],n}:function(t){return X.call(t)},H=Number,K=H.prototype.toString,Q=U();function tt(t){return"object"==typeof t&&(t instanceof H||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===D(t)))}function rt(t){return Z(t)||tt(t)}M(rt,"isPrimitive",Z),M(rt,"isObject",tt);var et=Number.POSITIVE_INFINITY,nt=H.NEGATIVE_INFINITY;function it(t){return t==t&&t>nt&&t<et}function ot(t){return Z(t)&&it(t)}function at(t){return tt(t)&&it(t.valueOf())}function ut(t){return ot(t)||at(t)}M(ut,"isPrimitive",ot),M(ut,"isObject",at);var ct="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,lt=Math.floor;function st(t){return Math.abs(t)}var ft=2220446049250313e-31;function pt(t){return this.next=null,this.prev=null,this.value=t,this}function ht(){return this instanceof ht?(this._length=0,this._first=null,this._last=null,this):new ht}M(ht.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),M(ht.prototype,"first",(function(){if(this._length)return this._first.value})),M(ht.prototype,"iterator",(function(){var t,r,e,n,i;return e=this,i=-1,t=this.toArray(),M(r={},"next",(function(){return i+=1,n||i>=t.length?{done:!0}:{value:t[i],done:!1}})),M(r,"return",(function(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}})),ct&&M(r,ct,(function(){return e.iterator()})),r})),M(ht.prototype,"last",(function(){if(this._length)return this._last.value})),function(t,r,e){L(t,r,{configurable:!1,enumerable:!1,get:e})}(ht.prototype,"length",(function(){return this._length})),M(ht.prototype,"pop",(function(){var t;return this._length&&(t=this._first.value,this._first.next?(this._first=this._first.next,this._first.prev=null):(this._first=null,this._last=null),this._length-=1),t})),M(ht.prototype,"push",(function(t){var r;return r=new pt(t),0===this._length?(this._first=r,this._last=r):(r.prev=this._last,this._last.next=r,this._last=r),this._length+=1,this})),M(ht.prototype,"toArray",(function(){var t,r,e;for(r=[],t=this._first,e=0;e<this._length;e++)r.push(t.value),t=t.next;return r})),M(ht.prototype,"toJSON",(function(){var t={type:"fifo"};return t.data=this.toArray(),t}));var gt=Object.prototype.toString,yt="function"==typeof z?z.toStringTag:"",dt=U()?function(t){var r,e,n;if(null==t)return gt.call(t);e=t[yt],r=q(t,yt);try{t[yt]=void 0}catch(r){return gt.call(t)}return n=gt.call(t),r?t[yt]=e:delete t[yt],n}:function(t){return gt.call(t)},vt=Array.isArray?Array.isArray:function(t){return"[object Array]"===dt(t)},bt=/./;function mt(t){return"boolean"==typeof t}var wt=Object.prototype.toString,_t="function"==typeof z?z.toStringTag:"",jt=U()?function(t){var r,e,n;if(null==t)return wt.call(t);e=t[_t],r=q(t,_t);try{t[_t]=void 0}catch(r){return wt.call(t)}return n=wt.call(t),r?t[_t]=e:delete t[_t],n}:function(t){return wt.call(t)},Ot=Boolean,St=Boolean.prototype.toString,Et=U();function Tt(t){return"object"==typeof t&&(t instanceof Ot||(Et?function(t){try{return St.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===jt(t)))}function xt(t){return mt(t)||Tt(t)}function At(){return new Function("return this;")()}M(xt,"isPrimitive",mt),M(xt,"isObject",Tt);var kt="object"==typeof self?self:null,It="object"==typeof window?window:null,Pt="object"==typeof globalThis?globalThis:null,Vt=function(t){if(arguments.length){if(!mt(t))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return At()}if(Pt)return Pt;if(kt)return kt;if(It)return It;throw new Error("unexpected error. Unable to resolve global object.")}(),Ft=Vt.document&&Vt.document.childNodes,Nt=Int8Array,Ct=Object.prototype.toString,$t="function"==typeof z?z.toStringTag:"",Bt=U()?function(t){var r,e,n;if(null==t)return Ct.call(t);e=t[$t],r=q(t,$t);try{t[$t]=void 0}catch(r){return Ct.call(t)}return n=Ct.call(t),r?t[$t]=e:delete t[$t],n}:function(t){return Ct.call(t)};function Rt(){return/^\s*function\s*([^(]*)/i}var Gt=/^\s*function\s*([^(]*)/i;M(Rt,"REGEXP",Gt);var Lt=Object.prototype.toString,Mt="function"==typeof z?z.toStringTag:"",Zt=U()?function(t){var r,e,n;if(null==t)return Lt.call(t);e=t[Mt],r=q(t,Mt);try{t[Mt]=void 0}catch(r){return Lt.call(t)}return n=Lt.call(t),r?t[Mt]=e:delete t[Mt],n}:function(t){return Lt.call(t)},Wt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Zt(t)};function Ut(t){return null!==t&&"object"==typeof t}function Xt(t){var r,e,n,i;if(("Object"===(e=Bt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Gt.exec(n.toString()))return r[1]}return Ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}M(Ut,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Wt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Ut));var Yt="function"==typeof bt||"object"==typeof Nt||"function"==typeof Ft?function(t){return Xt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?Xt(t).toLowerCase():r};function qt(t){return"function"===Yt(t)}var zt,Jt=Object,Dt=Object.getPrototypeOf,Ht=Object.prototype.toString,Kt="function"==typeof z?z.toStringTag:"",Qt=U()?function(t){var r,e,n;if(null==t)return Ht.call(t);e=t[Kt],r=q(t,Kt);try{t[Kt]=void 0}catch(r){return Ht.call(t)}return n=Ht.call(t),r?t[Kt]=e:delete t[Kt],n}:function(t){return Ht.call(t)};zt=qt(Object.getPrototypeOf)?Dt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===Qt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var tr=zt,rr=Object.prototype.toString,er="function"==typeof z?z.toStringTag:"",nr=U()?function(t){var r,e,n;if(null==t)return rr.call(t);e=t[er],r=q(t,er);try{t[er]=void 0}catch(r){return rr.call(t)}return n=rr.call(t),r?t[er]=e:delete t[er],n}:function(t){return rr.call(t)},ir=Object.prototype;function or(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!vt(t)}(t)&&(r=function(t){return null==t?null:(t=Jt(t),tr(t))}(t),!r||!q(t,"constructor")&&q(r,"constructor")&&qt(r.constructor)&&"[object Function]"===nr(r.constructor)&&q(r,"isPrototypeOf")&&qt(r.isPrototypeOf)&&(r===ir||function(t){var r;for(r in t)if(!q(t,r))return!1;return!0}(t)))}function ar(t){return t<et&&t>nt&&lt(r=t)===r;var r}function ur(t){return Z(t)&&ar(t)}function cr(t){return tt(t)&&ar(t.valueOf())}function lr(t){return ur(t)||cr(t)}function sr(t){return ur(t)&&t>=0}function fr(t){return cr(t)&&t.valueOf()>=0}function pr(t){return sr(t)||fr(t)}M(lr,"isPrimitive",ur),M(lr,"isObject",cr),M(pr,"isPrimitive",sr),M(pr,"isObject",fr);var hr=["terms","convergents","*"];function gr(t,r){return or(r)?q(r,"iter")&&(t.iter=r.iter,!sr(r.iter))?new TypeError(V("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",r.iter)):q(r,"tol")&&(t.tol=r.tol,!ot(r.tol)||r.tol<=0)?new TypeError(V("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",r.tol)):q(r,"returns")&&(t.returns=r.returns,-1===hr.indexOf(r.returns))?new TypeError(V('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",hr.join('", "'),r.returns)):null:new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}var yr=1e-50,dr={terms:function(t,r,e){return e&&t>0?-t:t},convergents:function(t,r,e){return e&&t>0?-r:r},"*":function(t,r,e){return e&&t>0?[-t,-r]:[t,r]}};return function t(r,e){var n,i,o,a,u,c,l,s,f,p,h,g,y,d,v;if(!ot(r))throw new TypeError(V("invalid argument. First argument must be a finite number. Value: `%s`.",r));if(a={iter:1e308,tol:ft,returns:"terms"},arguments.length>1&&(l=gr(a,e)))throw l;return n=dr[a.returns],c=0,o=r,r<0?(s=!0,r=-r):s=!1,v=0,M(u={},"next",m),M(u,"return",w),ct&&M(u,ct,_),y=new ht,f=lt(r),y.push([f,f]),f===r||0===f&&(f=lt(r=1/r),y.push([f,1/f]),f===r)?(c=1,u):(d=1/(r-f),h=p=f,g=0,y.push(b()),y.push(b()),u);function b(){var t=p;return f=lt(d),d=1/(d-f),0===(g+=f)&&(g=yr),0===(h=f+1/h)&&(h=yr),p*=i=h*(g=1/g),st(i-1)<=a.tol&&(c=1,t===p)?[-1,p]:[f,p]}function m(){var t,r,e;return v+=1,c>0?1===c&&y.length>0?(r=(t=y.pop())[0],e=t[1],-1===r?{done:!0}:(t=y.first(),2===y.length&&1===t[0]&&(r+=1,e=t[1],y.clear()),{value:n(r,e,s),done:!1})):(c=2,{done:!0}):v===a.iter?(r=(t=y.pop())[0],e=t[1],1===(t=y.first())[0]&&(r+=1,e=t[1]),y.clear(),c=2,{value:n(r,e,s),done:!1}):(t=y.push(b()).pop(),{value:n(t[0],t[1],s),done:!1})}function w(t){return c=2,arguments.length?{value:t,done:!0}:{done:!0}}function _(){return t(o,a)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterContinuedFractionSeq=r();
//# sourceMappingURL=browser.js.map
