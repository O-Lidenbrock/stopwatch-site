const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Cd8IT4_o.js","../chunks/DxxeemtE.js","../chunks/7XQ4I-1F.js","../nodes/1.DQfcdqTI.js","../chunks/BQyUZdjK.js","../chunks/BiiydcW9.js","../chunks/BVth6Yqe.js","../chunks/CQlC3KIS.js","../chunks/2hpZ2oDL.js","../nodes/2.BGFz8gd5.js","../chunks/DUkhKkEx.js","../assets/2.D3S3sL53.css","../nodes/3.c7tJJLoJ.js","../assets/3.jbIdEbHm.css","../nodes/4.t0WAEaj5.js"])))=>i.map(i=>d[i]);
var K=t=>{throw TypeError(t)};var Q=(t,e,r)=>e.has(t)||K("Cannot "+r);var m=(t,e,r)=>(Q(t,e,"read from private field"),r?r.call(t):e.get(t)),j=(t,e,r)=>e.has(t)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),V=(t,e,r,f)=>(Q(t,e,"write to private field"),f?f.call(t,r):e.set(t,r),r);import{D as k,Y as ne,z as ie,E as fe,a6 as he,a7 as ve,X as me,W as p,a8 as $,A as Z,a9 as X,F as oe,U as ge,aa as Ee,ab as ye,y as J,ac as Pe,S as ue,g as be,ad as Re,ae as Se,af as Ae,ag as Ie,d as g,c as q,ah as Oe,ai as Te,N as ee,aj as we,w as Le,ak as xe,al as De,am as ce,u as N,an as Ce,ao as le,e as te,ap as ke,aq as qe,L as Ne,p as Be,H as Fe,x as Ue,ar as je,G as F,k as Ve,q as Y,m as Ye,l as Ge,r as He,t as ze}from"../chunks/7XQ4I-1F.js";import{h as Me,m as We,u as Ze,s as Xe}from"../chunks/BiiydcW9.js";import{a as L,t as de,c as G,d as Je}from"../chunks/DxxeemtE.js";import{p as _e}from"../chunks/DUkhKkEx.js";import{o as Ke}from"../chunks/2hpZ2oDL.js";function H(t,e,r=!1){k&&ne();var f=t,i=null,n=null,s=ge,a=r?fe:0,l=!1;const o=(y,d=!0)=>{l=!0,E(d,y)},E=(y,d)=>{if(s===(s=y))return;let _=!1;if(k){const P=f.data===he;!!s===P&&(f=ve(),me(f),p(!1),_=!0)}s?(i?$(i):d&&(i=Z(()=>d(f))),n&&X(n,()=>{n=null})):(n?$(n):d&&(n=Z(()=>d(f))),i&&X(i,()=>{i=null})),_&&p(!0)};ie(()=>{l=!1,e(o),l||E(null,null)},a),k&&(f=oe)}function z(t,e,r){k&&ne();var f=t,i,n;ie(()=>{i!==(i=e())&&(n&&(X(n),n=null),i&&(n=Z(()=>r(f,i))))},fe),k&&(f=oe)}function re(t,e){return t===e||(t==null?void 0:t[ue])===e}function M(t={},e,r,f){return Ee(()=>{var i,n;return ye(()=>{i=n,n=[],J(()=>{t!==r(...n)&&(e(t,...n),i&&re(r(...i),t)&&e(null,...i))})}),()=>{Pe(()=>{n&&re(r(...n),t)&&e(null,...n)})}}),t}let U=!1;function Qe(t){var e=U;try{return U=!1,[t(),U]}finally{U=e}}function ae(t){for(var e=te,r=te;e!==null&&!(e.f&(Oe|Te));)e=e.parent;try{return ee(e),t()}finally{ee(r)}}function W(t,e,r,f){var x;var i=(r&we)!==0,n=!Le||(r&xe)!==0,s=(r&De)!==0,a=(r&ke)!==0,l=!1,o;s?[o,l]=Qe(()=>t[e]):o=t[e];var E=ue in t||ce in t,y=s&&(((x=be(t,e))==null?void 0:x.set)??(E&&e in t&&(c=>t[e]=c)))||void 0,d=f,_=!0,P=!1,u=()=>(P=!0,_&&(_=!1,a?d=J(f):d=f),d);o===void 0&&f!==void 0&&(y&&n&&Re(),o=u(),y&&y(o));var h;if(n)h=()=>{var c=t[e];return c===void 0?u():(_=!0,P=!1,c)};else{var I=ae(()=>(i?N:Ce)(()=>t[e]));I.f|=Se,h=()=>{var c=g(I);return c!==void 0&&(d=void 0),c===void 0?d:c}}if(!(r&Ae))return h;if(y){var T=t.$$legacy;return function(c,O){return arguments.length>0?((!n||!O||T||l)&&y(O?h():c),c):h()}}var R=!1,S=!1,v=le(o),w=ae(()=>N(()=>{var c=h(),O=g(v);return R?(R=!1,S=!0,O):(S=!1,v.v=c)}));return i||(w.equals=Ie),function(c,O){if(arguments.length>0){const D=O?g(w):n&&s?_e(c):c;return w.equals(D)||(R=!0,q(v,D),P&&d!==void 0&&(d=D),J(()=>g(w))),c}return g(w)}}function pe(t){return class extends $e{constructor(e){super({component:t,...e})}}}var A,b;class $e{constructor(e){j(this,A);j(this,b);var n;var r=new Map,f=(s,a)=>{var l=le(a);return r.set(s,l),l};const i=new Proxy({...e.props||{},$$events:{}},{get(s,a){return g(r.get(a)??f(a,Reflect.get(s,a)))},has(s,a){return a===ce?!0:(g(r.get(a)??f(a,Reflect.get(s,a))),Reflect.has(s,a))},set(s,a,l){return q(r.get(a)??f(a,l),l),Reflect.set(s,a,l)}});V(this,b,(e.hydrate?Me:We)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((n=e==null?void 0:e.props)!=null&&n.$$host)||e.sync===!1)&&qe(),V(this,A,i.$$events);for(const s of Object.keys(m(this,b)))s==="$set"||s==="$destroy"||s==="$on"||Ne(this,s,{get(){return m(this,b)[s]},set(a){m(this,b)[s]=a},enumerable:!0});m(this,b).$set=s=>{Object.assign(i,s)},m(this,b).$destroy=()=>{Ze(m(this,b))}}$set(e){m(this,b).$set(e)}$on(e,r){m(this,A)[e]=m(this,A)[e]||[];const f=(...i)=>r.call(this,...i);return m(this,A)[e].push(f),()=>{m(this,A)[e]=m(this,A)[e].filter(i=>i!==f)}}$destroy(){m(this,b).$destroy()}}A=new WeakMap,b=new WeakMap;const et="modulepreload",tt=function(t,e){return new URL(t,e).href},se={},C=function(e,r,f){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(r.map(o=>{if(o=tt(o,f),o in se)return;se[o]=!0;const E=o.endsWith(".css"),y=E?'[rel="stylesheet"]':"";if(!!f)for(let P=s.length-1;P>=0;P--){const u=s[P];if(u.href===o&&(!E||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${y}`))return;const _=document.createElement("link");if(_.rel=E?"stylesheet":et,E||(_.as="script"),_.crossOrigin="",_.href=o,l&&_.setAttribute("nonce",l),document.head.appendChild(_),E)return new Promise((P,u)=>{_.addEventListener("load",P),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},_t={};var rt=de('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),at=de("<!> <!>",1);function st(t,e){Be(e,!0);let r=W(e,"components",23,()=>[]),f=W(e,"data_0",3,null),i=W(e,"data_1",3,null);Fe(()=>e.stores.page.set(e.page)),Ue(()=>{e.stores,e.page,e.constructors,r(),e.form,f(),i(),e.stores.page.notify()});let n=Y(!1),s=Y(!1),a=Y(null);Ke(()=>{const u=e.stores.page.subscribe(()=>{g(n)&&(q(s,!0),je().then(()=>{q(a,_e(document.title||"untitled page"))}))});return q(n,!0),u});const l=N(()=>e.constructors[1]);var o=at(),E=F(o);{var y=u=>{var h=G();const I=N(()=>e.constructors[0]);var T=F(h);z(T,()=>g(I),(R,S)=>{M(S(R,{get data(){return f()},get form(){return e.form},children:(v,w)=>{var x=G(),c=F(x);z(c,()=>g(l),(O,D)=>{M(D(O,{get data(){return i()},get form(){return e.form}}),B=>r()[1]=B,()=>{var B;return(B=r())==null?void 0:B[1]})}),L(v,x)},$$slots:{default:!0}}),v=>r()[0]=v,()=>{var v;return(v=r())==null?void 0:v[0]})}),L(u,h)},d=u=>{var h=G();const I=N(()=>e.constructors[0]);var T=F(h);z(T,()=>g(I),(R,S)=>{M(S(R,{get data(){return f()},get form(){return e.form}}),v=>r()[0]=v,()=>{var v;return(v=r())==null?void 0:v[0]})}),L(u,h)};H(E,u=>{e.constructors[1]?u(y):u(d,!1)})}var _=Ye(E,2);{var P=u=>{var h=rt(),I=Ge(h);{var T=R=>{var S=Je();ze(()=>Xe(S,g(a))),L(R,S)};H(I,R=>{g(s)&&R(T)})}He(h),L(u,h)};H(_,u=>{g(n)&&u(P)})}L(t,o),Ve()}const ht=pe(st),vt=[()=>C(()=>import("../nodes/0.Cd8IT4_o.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>C(()=>import("../nodes/1.DQfcdqTI.js"),__vite__mapDeps([3,1,2,4,5,6,7,8]),import.meta.url),()=>C(()=>import("../nodes/2.BGFz8gd5.js"),__vite__mapDeps([9,1,2,5,10,6,7,8,11]),import.meta.url),()=>C(()=>import("../nodes/3.c7tJJLoJ.js"),__vite__mapDeps([12,1,2,4,13]),import.meta.url),()=>C(()=>import("../nodes/4.t0WAEaj5.js"),__vite__mapDeps([14,1,2,4]),import.meta.url)],mt=[],gt={"/":[2],"/about":[3],"/howdy":[4]},nt={handleError:({error:t})=>{console.error(t)},reroute:()=>{},transport:{}},it=Object.fromEntries(Object.entries(nt.transport).map(([t,e])=>[t,e.decode])),Et=!1,yt=(t,e)=>it[t](e);export{yt as decode,it as decoders,gt as dictionary,Et as hash,nt as hooks,_t as matchers,vt as nodes,ht as root,mt as server_loads};
