// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-finite@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-fifo@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";var u=["terms","convergents","*"];var v={terms:function(e,t,r){return r&&e>0?-e:e},convergents:function(e,t,r){return r&&e>0?-t:t},"*":function(e,t,r){return r&&e>0?[-e,-t]:[e,t]}};function f(h,j){var a,c,g,b,x,w,y,E,T,Z,O,P,Q,R,S;if(!t(h))throw new TypeError(s("0Zv4Q",h));if(b={iter:1e308,tol:o,returns:"terms"},arguments.length>1&&(y=function(e,r){return l(r)?m(r,"iter")&&(e.iter=r.iter,!p(r.iter))?new TypeError(s("0Zv2t","iter",r.iter)):m(r,"tol")&&(e.tol=r.tol,!t(r.tol)||r.tol<=0)?new TypeError(s("0Zv4R","tol",r.tol)):m(r,"returns")&&(e.returns=r.returns,-1===u.indexOf(r.returns))?new TypeError(s("0Zv4S","returns",u.join('", "'),r.returns)):null:new TypeError(s("0Zv2V",r))}(b,j),y))throw y;return a=v[b.returns],w=0,g=h,h<0?(E=!0,h=-h):E=!1,S=0,e(x={},"next",(function(){var e,t,r;if(S+=1,w>0)return 1===w&&Q.length>0?(t=(e=Q.pop())[0],r=e[1],-1===t?{done:!0}:(e=Q.first(),2===Q.length&&1===e[0]&&(t+=1,r=e[1],Q.clear()),{value:a(t,r,E),done:!1})):(w=2,{done:!0});if(S===b.iter)return t=(e=Q.pop())[0],r=e[1],1===(e=Q.first())[0]&&(t+=1,r=e[1]),Q.clear(),w=2,{value:a(t,r,E),done:!1};return e=Q.push(V()).pop(),{value:a(e[0],e[1],E),done:!1}})),e(x,"return",(function(e){if(w=2,arguments.length)return{value:e,done:!0};return{done:!0}})),r&&e(x,r,(function(){return f(g,b)})),Q=new d,T=n(h),Q.push([T,T]),T===h||0===T&&(T=n(h=1/h),Q.push([T,1/T]),T===h)?(w=1,x):(R=1/(h-T),O=Z=T,P=0,Q.push(V()),Q.push(V()),x);function V(){var e=Z;return T=n(R),R=1/(R-T),0===(P+=T)&&(P=1e-50),0===(O=T+1/O)&&(O=1e-50),Z*=c=O*(P=1/P),i(c-1)<=b.tol&&(w=1,e===Z)?[-1,Z]:[T,Z]}}export{f as default};
//# sourceMappingURL=index.mjs.map