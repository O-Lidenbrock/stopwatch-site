import{S as R,o as k,a as L,s as _,b as q,c as o,U as u,g as T,d as w,f as F,h as H,i as K,j as M,k as U,l as x,m as Y,E as B,H as C,r as Z,n as z,p as A,q as O,t as S,u as D,v as G}from"./Dyycu7HR.js";function g(s,b=null,E){if(typeof s!="object"||s===null||R in s)return s;const v=K(s);if(v!==k&&v!==L)return s;var a=new Map,l=M(s),c=_(0);l&&a.set("length",_(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var r=a.get(e);return r===void 0?(r=_(t.value),a.set(e,r)):o(r,g(t.value,y)),!0},deleteProperty(f,e){var t=a.get(e);if(t===void 0)e in f&&a.set(e,_(u));else{if(l&&typeof e=="string"){var r=a.get("length"),n=Number(e);Number.isInteger(n)&&n<r.v&&o(r,n)}o(t,u),j(c)}return!0},get(f,e,t){var d;if(e===R)return s;var r=a.get(e),n=e in f;if(r===void 0&&(!n||(d=T(f,e))!=null&&d.writable)&&(r=_(g(n?f[e]:u,y)),a.set(e,r)),r!==void 0){var i=w(r);return i===u?void 0:i}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=w(r))}else if(t===void 0){var n=a.get(e),i=n==null?void 0:n.v;if(n!==void 0&&i!==u)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return t},has(f,e){var i;if(e===R)return!0;var t=a.get(e),r=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||F!==null&&(!r||(i=T(f,e))!=null&&i.writable)){t===void 0&&(t=_(r?g(f[e],y):u),a.set(e,t));var n=w(t);if(n===u)return!1}return r},set(f,e,t,r){var I;var n=a.get(e),i=e in f;if(l&&e==="length")for(var d=t;d<n.v;d+=1){var h=a.get(d+"");h!==void 0?o(h,u):d in f&&(h=_(u),a.set(d+"",h))}n===void 0?(!i||(I=T(f,e))!=null&&I.writable)&&(n=_(void 0),o(n,g(t,y)),a.set(e,n)):(i=n.v!==u,o(n,g(t,y)));var m=Reflect.getOwnPropertyDescriptor(f,e);if(m!=null&&m.set&&m.set.call(r,t),!i){if(l&&typeof e=="string"){var P=a.get("length"),N=Number(e);Number.isInteger(N)&&N>=P.v&&o(P,N+1)}j(c)}return!0},ownKeys(f){w(c);var e=Reflect.ownKeys(f).filter(n=>{var i=a.get(n);return i===void 0||i.v!==u});for(var[t,r]of a)r.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){H()}})}function j(s,b=1){o(s,s.v+b)}function Q(s,b,E=!1){x&&Y();var v=s,a=null,l=null,c=u,y=E?B:0,f=!1;const e=(r,n=!0)=>{f=!0,t(n,r)},t=(r,n)=>{if(c===(c=r))return;let i=!1;if(x){const d=v.data===C;!!c===d&&(v=Z(),z(v),A(!1),i=!0)}c?(a?O(a):n&&(a=S(()=>n(v))),l&&D(l,()=>{l=null})):(l?O(l):n&&(l=S(()=>n(v))),a&&D(a,()=>{a=null})),i&&A(!0)};U(()=>{f=!1,b(e),f||t(null,null)},y),x&&(v=G)}export{Q as i,g as p};
