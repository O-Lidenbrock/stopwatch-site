const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.-C8IWa3U.js","../chunks/2tZYoyhY.js","../chunks/CwCus_bt.js","../nodes/1.VfP5iLg0.js","../chunks/DYzqPx99.js","../chunks/Dwej5o1f.js","../chunks/CfLyLRAm.js","../chunks/BX_dMYSb.js","../chunks/CBxDMFDd.js","../nodes/2.Bsm2ALnh.js","../chunks/V448jyUU.js","../assets/2.DpmerCZe.css","../nodes/3.441Ffb44.js","../assets/3.jbIdEbHm.css","../nodes/4.DhlCx8cl.js"])))=>i.map(i=>d[i]);
var J=t=>{throw TypeError(t)};var Q=(t,e,r)=>e.has(t)||J("Cannot "+r);var m=(t,e,r)=>(Q(t,e,"read from private field"),r?r.call(t):e.get(t)),V=(t,e,r)=>e.has(t)?J("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),j=(t,e,r,f)=>(Q(t,e,"write to private field"),f?f.call(t,r):e.set(t,r),r);import{C as k,X as ne,y as ie,E as fe,a5 as ve,a6 as he,W as me,V as p,a7 as $,z as Z,a8 as K,D as oe,U as ge,a9 as Ee,aa as ye,x as X,ab as Pe,S as ce,g as be,ac as Re,ad as Se,ae as Ae,af as Ie,d as g,c as q,ag as Oe,ah as Te,M as ee,ai as we,v as Le,aj as xe,ak as Ce,al as ue,q as B,am as De,an as le,e as te,ao as ke,ap as qe,K as Be,p as Ne,G as Fe,w as Ue,aq as Ve,F,k as je,n as Y,m as Ye,l as Ge,r as Me,t as ze}from"../chunks/CwCus_bt.js";import{h as He,m as We,u as Ze,s as Ke}from"../chunks/Dwej5o1f.js";import{a as L,t as de,c as G,d as Xe}from"../chunks/2tZYoyhY.js";import{p as _e}from"../chunks/V448jyUU.js";import{o as Je}from"../chunks/CBxDMFDd.js";function M(t,e,r=!1){k&&ne();var f=t,i=null,n=null,s=ge,a=r?fe:0,l=!1;const o=(y,d=!0)=>{l=!0,E(d,y)},E=(y,d)=>{if(s===(s=y))return;let _=!1;if(k){const P=f.data===ve;!!s===P&&(f=he(),me(f),p(!1),_=!0)}s?(i?$(i):d&&(i=Z(()=>d(f))),n&&K(n,()=>{n=null})):(n?$(n):d&&(n=Z(()=>d(f))),i&&K(i,()=>{i=null})),_&&p(!0)};ie(()=>{l=!1,e(o),l||E(null,null)},a),k&&(f=oe)}function z(t,e,r){k&&ne();var f=t,i,n;ie(()=>{i!==(i=e())&&(n&&(K(n),n=null),i&&(n=Z(()=>r(f,i))))},fe),k&&(f=oe)}function re(t,e){return t===e||(t==null?void 0:t[ce])===e}function H(t={},e,r,f){return Ee(()=>{var i,n;return ye(()=>{i=n,n=[],X(()=>{t!==r(...n)&&(e(t,...n),i&&re(r(...i),t)&&e(null,...i))})}),()=>{Pe(()=>{n&&re(r(...n),t)&&e(null,...n)})}}),t}let U=!1;function Qe(t){var e=U;try{return U=!1,[t(),U]}finally{U=e}}function ae(t){for(var e=te,r=te;e!==null&&!(e.f&(Oe|Te));)e=e.parent;try{return ee(e),t()}finally{ee(r)}}function W(t,e,r,f){var x;var i=(r&we)!==0,n=!Le||(r&xe)!==0,s=(r&Ce)!==0,a=(r&ke)!==0,l=!1,o;s?[o,l]=Qe(()=>t[e]):o=t[e];var E=ce in t||ue in t,y=s&&(((x=be(t,e))==null?void 0:x.set)??(E&&e in t&&(u=>t[e]=u)))||void 0,d=f,_=!0,P=!1,c=()=>(P=!0,_&&(_=!1,a?d=X(f):d=f),d);o===void 0&&f!==void 0&&(y&&n&&Re(),o=c(),y&&y(o));var v;if(n)v=()=>{var u=t[e];return u===void 0?c():(_=!0,P=!1,u)};else{var I=ae(()=>(i?B:De)(()=>t[e]));I.f|=Se,v=()=>{var u=g(I);return u!==void 0&&(d=void 0),u===void 0?d:u}}if(!(r&Ae))return v;if(y){var T=t.$$legacy;return function(u,O){return arguments.length>0?((!n||!O||T||l)&&y(O?v():u),u):v()}}var R=!1,S=!1,h=le(o),w=ae(()=>B(()=>{var u=v(),O=g(h);return R?(R=!1,S=!0,O):(S=!1,h.v=u)}));return i||(w.equals=Ie),function(u,O){if(arguments.length>0){const C=O?g(w):n&&s?_e(u):u;return w.equals(C)||(R=!0,q(h,C),P&&d!==void 0&&(d=C),X(()=>g(w))),u}return g(w)}}function pe(t){return class extends $e{constructor(e){super({component:t,...e})}}}var A,b;class $e{constructor(e){V(this,A);V(this,b);var n;var r=new Map,f=(s,a)=>{var l=le(a);return r.set(s,l),l};const i=new Proxy({...e.props||{},$$events:{}},{get(s,a){return g(r.get(a)??f(a,Reflect.get(s,a)))},has(s,a){return a===ue?!0:(g(r.get(a)??f(a,Reflect.get(s,a))),Reflect.has(s,a))},set(s,a,l){return q(r.get(a)??f(a,l),l),Reflect.set(s,a,l)}});j(this,b,(e.hydrate?He:We)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((n=e==null?void 0:e.props)!=null&&n.$$host)||e.sync===!1)&&qe(),j(this,A,i.$$events);for(const s of Object.keys(m(this,b)))s==="$set"||s==="$destroy"||s==="$on"||Be(this,s,{get(){return m(this,b)[s]},set(a){m(this,b)[s]=a},enumerable:!0});m(this,b).$set=s=>{Object.assign(i,s)},m(this,b).$destroy=()=>{Ze(m(this,b))}}$set(e){m(this,b).$set(e)}$on(e,r){m(this,A)[e]=m(this,A)[e]||[];const f=(...i)=>r.call(this,...i);return m(this,A)[e].push(f),()=>{m(this,A)[e]=m(this,A)[e].filter(i=>i!==f)}}$destroy(){m(this,b).$destroy()}}A=new WeakMap,b=new WeakMap;const et="modulepreload",tt=function(t,e){return new URL(t,e).href},se={},D=function(e,r,f){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(o=>{if(o=tt(o,f),o in se)return;se[o]=!0;const E=o.endsWith(".css"),y=E?'[rel="stylesheet"]':"";if(!!f)for(let P=s.length-1;P>=0;P--){const c=s[P];if(c.href===o&&(!E||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${y}`))return;const _=document.createElement("link");if(_.rel=E?"stylesheet":et,E||(_.as="script"),_.crossOrigin="",_.href=o,l&&_.setAttribute("nonce",l),document.head.appendChild(_),E)return new Promise((P,c)=>{_.addEventListener("load",P),_.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},_t={};var rt=de('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),at=de("<!> <!>",1);function st(t,e){Ne(e,!0);let r=W(e,"components",23,()=>[]),f=W(e,"data_0",3,null),i=W(e,"data_1",3,null);Fe(()=>e.stores.page.set(e.page)),Ue(()=>{e.stores,e.page,e.constructors,r(),e.form,f(),i(),e.stores.page.notify()});let n=Y(!1),s=Y(!1),a=Y(null);Je(()=>{const c=e.stores.page.subscribe(()=>{g(n)&&(q(s,!0),Ve().then(()=>{q(a,_e(document.title||"untitled page"))}))});return q(n,!0),c});const l=B(()=>e.constructors[1]);var o=at(),E=F(o);{var y=c=>{var v=G();const I=B(()=>e.constructors[0]);var T=F(v);z(T,()=>g(I),(R,S)=>{H(S(R,{get data(){return f()},get form(){return e.form},children:(h,w)=>{var x=G(),u=F(x);z(u,()=>g(l),(O,C)=>{H(C(O,{get data(){return i()},get form(){return e.form}}),N=>r()[1]=N,()=>{var N;return(N=r())==null?void 0:N[1]})}),L(h,x)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),L(c,v)},d=c=>{var v=G();const I=B(()=>e.constructors[0]);var T=F(v);z(T,()=>g(I),(R,S)=>{H(S(R,{get data(){return f()},get form(){return e.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),L(c,v)};M(E,c=>{e.constructors[1]?c(y):c(d,!1)})}var _=Ye(E,2);{var P=c=>{var v=rt(),I=Ge(v);{var T=R=>{var S=Xe();ze(()=>Ke(S,g(a))),L(R,S)};M(I,R=>{g(s)&&R(T)})}Me(v),L(c,v)};M(_,c=>{g(n)&&c(P)})}L(t,o),je()}const vt=pe(st),ht=[()=>D(()=>import("../nodes/0.-C8IWa3U.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>D(()=>import("../nodes/1.VfP5iLg0.js"),__vite__mapDeps([3,1,2,4,5,6,7,8]),import.meta.url),()=>D(()=>import("../nodes/2.Bsm2ALnh.js"),__vite__mapDeps([9,1,2,5,10,6,7,8,11]),import.meta.url),()=>D(()=>import("../nodes/3.441Ffb44.js"),__vite__mapDeps([12,1,2,4,13]),import.meta.url),()=>D(()=>import("../nodes/4.DhlCx8cl.js"),__vite__mapDeps([14,1,2,4]),import.meta.url)],mt=[],gt={"/":[2],"/about":[3],"/howdy":[4]},nt={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},it=Object.fromEntries(Object.entries(nt.transport).map(([t,e])=>[t,e.decode])),Et=!1,yt=(t,e)=>it[t](e);export{yt as decode,it as decoders,gt as dictionary,Et as hash,nt as hooks,_t as matchers,ht as nodes,vt as root,mt as server_loads};
