import{S as D,o as Y,j as K,k as w,m as C,n as I,v as A,U as c,h as g,w as F,x as k,y as z,z as G,A as H,B as N,C as V,H as Z,D as $,E as J,F as x,G as L,I as j,J as q,K as Q,L as W,M as X,N as ee,P as re,O as ne,Q as te,R as ae,T as ie,u as fe,i as B,V as se,W as ue,X as le,Y as T}from"./runtime.MNSK3z1j.js";function E(n,d=null,s){if(typeof n!="object"||n===null||D in n)return n;const a=z(n);if(a!==Y&&a!==K)return n;var i=new Map,v=G(n),y=w(0);v&&i.set("length",w(n.length));var o;return new Proxy(n,{defineProperty(t,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&C();var f=i.get(e);return f===void 0?(f=w(r.value),i.set(e,f)):I(f,E(r.value,o)),!0},deleteProperty(t,e){var r=i.get(e);return r===void 0?e in t&&i.set(e,w(c)):(I(r,c),M(y)),!0},get(t,e,r){var h;if(e===D)return n;var f=i.get(e),u=e in t;if(f===void 0&&(!u||(h=A(t,e))!=null&&h.writable)&&(f=w(E(u?t[e]:c,o)),i.set(e,f)),f!==void 0){var l=g(f);return l===c?void 0:l}return Reflect.get(t,e,r)},getOwnPropertyDescriptor(t,e){var r=Reflect.getOwnPropertyDescriptor(t,e);if(r&&"value"in r){var f=i.get(e);f&&(r.value=g(f))}else if(r===void 0){var u=i.get(e),l=u==null?void 0:u.v;if(u!==void 0&&l!==c)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return r},has(t,e){var l;if(e===D)return!0;var r=i.get(e),f=r!==void 0&&r.v!==c||Reflect.has(t,e);if(r!==void 0||F!==null&&(!f||(l=A(t,e))!=null&&l.writable)){r===void 0&&(r=w(f?E(t[e],o):c),i.set(e,r));var u=g(r);if(u===c)return!1}return f},set(t,e,r,f){var O;var u=i.get(e),l=e in t;if(v&&e==="length")for(var h=r;h<u.v;h+=1){var R=i.get(h+"");R!==void 0?I(R,c):h in t&&(R=w(c),i.set(h+"",R))}u===void 0?(!l||(O=A(t,e))!=null&&O.writable)&&(u=w(void 0),I(u,E(r,o)),i.set(e,u)):(l=u.v!==c,I(u,E(r,o)));var P=Reflect.getOwnPropertyDescriptor(t,e);if(P!=null&&P.set&&P.set.call(f,r),!l){if(v&&typeof e=="string"){var m=i.get("length"),b=Number(e);Number.isInteger(b)&&b>=m.v&&I(m,b+1)}M(y)}return!0},ownKeys(t){g(y);var e=Reflect.ownKeys(t).filter(u=>{var l=i.get(u);return l===void 0||l.v!==c});for(var[r,f]of i)f.v!==c&&!(r in t)&&e.push(r);return e},setPrototypeOf(){k()}})}function M(n,d=1){I(n,n.v+d)}function _e(n,d,s,a=null,i=!1){N&&V();var v=n,y=null,o=null,t=null,e=i?W:0;H(()=>{if(t===(t=!!d()))return;let r=!1;if(N){const f=v.data===Z;t===f&&(v=$(),J(v),x(!1),r=!0)}t?(y?L(y):y=j(()=>s(v)),o&&q(o,()=>{o=null})):(o?L(o):a&&(o=j(()=>a(v))),y&&q(y,()=>{y=null})),r&&x(!0)},e),N&&(v=Q)}const de={get(n,d){let s=n.props.length;for(;s--;){let a=n.props[s];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&d in a)return a[d]}},getOwnPropertyDescriptor(n,d){let s=n.props.length;for(;s--;){let a=n.props[s];if(T(a)&&(a=a()),typeof a=="object"&&a!==null&&d in a){const i=A(a,d);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,d){for(let s of n.props)if(T(s)&&(s=s()),s!=null&&d in s)return!0;return!1},ownKeys(n){const d=[];for(let s of n.props){T(s)&&(s=s());for(const a in s)d.includes(a)||d.push(a)}return d}};function oe(...n){return new Proxy({props:n},de)}function ce(n,d,s,a){var O;var i=(s&te)!==0,v=(s&ae)!==0,y=(s&ie)!==0,o=(s&ue)!==0,t=n[d],e=(O=A(n,d))==null?void 0:O.set,r=a,f=!0,u=()=>(o&&f&&(f=!1,r=fe(a)),r);t===void 0&&a!==void 0&&(e&&v&&X(),t=u(),e&&e(t));var l;if(v)l=()=>{var _=n[d];return _===void 0?u():(f=!0,_)};else{var h=(i?B:se)(()=>n[d]);h.f|=ee,l=()=>{var _=g(h);return _!==void 0&&(r=void 0),_===void 0?r:_}}if(!(s&re))return l;if(e){var R=n.$$legacy;return function(_,S){return arguments.length>0?((!v||!S||R)&&e(S?l():_),_):l()}}var P=!1,m=le(t),b=B(()=>{var _=l(),S=g(m);return P?(P=!1,S):m.v=_});return i||(b.equals=ne),function(_,S){var U=g(b);if(arguments.length>0){const p=S?g(b):v&&y?E(_):_;return b.equals(p)||(P=!0,I(m,p),g(b)),_}return U}}export{E as a,_e as i,ce as p,oe as s};
