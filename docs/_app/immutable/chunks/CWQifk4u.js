import{T as b,V as E,W as V,f as O,X as Y,Y as H,Z as P,j,_ as S,a0 as q,a1 as B,a2 as C,a3 as m,p as w,n as D,m as $,v as p,a4 as K,a5 as X,a6 as Z,a7 as z,a8 as F,a9 as G,aa as J,t as Q,K as U,l as L,M as x,w as rr}from"./Dyycu7HR.js";import{b as tr}from"./yJHd5m0H.js";const er=["touchstart","touchmove"];function ar(r){return er.includes(r)}function nr(r){var t=V,a=O;b(null),E(null);try{return r()}finally{b(t),E(a)}}const k=new Set,N=new Set;function ir(r,t,a,o={}){function i(e){if(o.capture||y.call(t,e),!e.cancelBubble)return nr(()=>a==null?void 0:a.call(this,e))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?H(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function fr(r,t,a,o,i){var e={capture:o,passive:i},u=ir(r,t,a,e);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(r,u,e)})}function cr(r){for(var t=0;t<r.length;t++)k.add(r[t]);for(var a of N)a(r)}function y(r){var A;var t=this,a=t.ownerDocument,o=r.type,i=((A=r.composedPath)==null?void 0:A.call(r))||[],e=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(e=i[u]||r.target,e!==t){P(r,"currentTarget",{configurable:!0,get(){return e||a}});var T=V,f=O;b(null),E(null);try{for(var n,s=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var d=e["__"+o];if(d!==void 0&&!e.disabled)if(j(d)){var[M,...W]=d;M.apply(e,[r,...W])}else d.call(e,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||c===t||c===null)break;e=c}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function lr(r,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=a,r.nodeValue=a==null?"":a+"")}function sr(r,t){return I(r,t)}function dr(r,t){S(),t.intro=t.intro??!1;const a=t.target,o=L,i=p;try{for(var e=q(a);e&&(e.nodeType!==8||e.data!==B);)e=C(e);if(!e)throw m;w(!0),D(e),$();const u=I(r,{...t,anchor:e});if(p===null||p.nodeType!==8||p.data!==K)throw X(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&Z(),S(),z(a),w(!1),sr(r,t);throw u}finally{w(o),D(i)}}const v=new Map;function I(r,{target:t,anchor:a,props:o={},events:i,context:e,intro:u=!0}){S();var _=new Set,l=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var c=ar(s);t.addEventListener(s,y,{passive:c});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:c}),v.set(s,1)):v.set(s,d+1)}}};l(F(k)),N.add(l);var h=void 0,T=G(()=>{var f=a??t.appendChild(J());return Q(()=>{if(e){U({});var n=rr;n.c=e}i&&(o.$$events=i),L&&tr(f,null),h=r(f,o)||{},L&&(O.nodes_end=p),e&&x()}),()=>{var c;for(var n of _){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}N.delete(l),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(h,T),h}let R=new WeakMap;function _r(r,t){const a=R.get(r);return a?(R.delete(r),a(t)):Promise.resolve()}export{cr as d,fr as e,dr as h,sr as m,lr as s,_r as u};
