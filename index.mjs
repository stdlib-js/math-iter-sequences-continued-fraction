// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-fifo@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";var u=["terms","convergents","*"];function a(t,n){return l(n)?d(n,"iter")&&(t.iter=n.iter,!p(n.iter))?new TypeError(r("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",n.iter)):d(n,"tol")&&(t.tol=n.tol,!e(n.tol)||n.tol<=0)?new TypeError(r("invalid option. `%s` option must be a positive finite number. Option: `%s`.","tol",n.tol)):d(n,"returns")&&(t.returns=n.returns,-1===u.indexOf(n.returns))?new TypeError(r('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",u.join('", "'),n.returns)):null:new TypeError(r("invalid argument. Options argument must be an object. Value: `%s`.",n))}var v={terms:function(t,e,n){return n&&t>0?-t:t},convergents:function(t,e,n){return n&&t>0?-e:e},"*":function(t,e,n){return n&&t>0?[-t,-e]:[t,e]}};function f(l,d){var p,u,h,j,c,g,b,x,w,y,E,O,T,V,F;if(!e(l))throw new TypeError(r("invalid argument. First argument must be a finite number. Value: `%s`.",l));if(j={iter:1e308,tol:o,returns:"terms"},arguments.length>1&&(b=a(j,d)))throw b;return p=v[j.returns],g=0,h=l,l<0?(x=!0,l=-l):x=!1,F=0,t(c={},"next",k),t(c,"return",q),n&&t(c,n,z),T=new m,w=s(l),T.push([w,w]),w===l||0===w&&(w=s(l=1/l),T.push([w,1/w]),w===l)?(g=1,c):(V=1/(l-w),E=y=w,O=0,T.push(P()),T.push(P()),c);function P(){var t=y;return w=s(V),V=1/(V-w),0===(O+=w)&&(O=1e-50),0===(E=w+1/E)&&(E=1e-50),y*=u=E*(O=1/O),i(u-1)<=j.tol&&(g=1,t===y)?[-1,y]:[w,y]}function k(){var t,e,n;return F+=1,g>0?1===g&&T.length>0?(e=(t=T.pop())[0],n=t[1],-1===e?{done:!0}:(t=T.first(),2===T.length&&1===t[0]&&(e+=1,n=t[1],T.clear()),{value:p(e,n,x),done:!1})):(g=2,{done:!0}):F===j.iter?(e=(t=T.pop())[0],n=t[1],1===(t=T.first())[0]&&(e+=1,n=t[1]),T.clear(),g=2,{value:p(e,n,x),done:!1}):(t=T.push(P()).pop(),{value:p(t[0],t[1],x),done:!1})}function q(t){return g=2,arguments.length?{value:t,done:!0}:{done:!0}}function z(){return f(h,j)}}export{f as default};
//# sourceMappingURL=index.mjs.map