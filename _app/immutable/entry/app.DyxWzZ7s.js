function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.BF2veLWP.js","_app/immutable/chunks/disclose-version.BqvBVD5E.js","_app/immutable/chunks/runtime.CPifUbz4.js","_app/immutable/chunks/props.DMnKHxAa.js","_app/immutable/chunks/string.Ccf_hGHk.js","_app/immutable/chunks/this.C3WnbkiB.js","_app/immutable/chunks/index-client.CxNqbTfH.js","_app/immutable/chunks/size.dGxJRTW-.js","_app/immutable/assets/0.CUGMQgqk.css","_app/immutable/nodes/1.K-TKsNn8.js","_app/immutable/chunks/stores.AKcCJGgj.js","_app/immutable/chunks/entry.CzeSTvxY.js","_app/immutable/nodes/2.CzYKrPGQ.js","_app/immutable/chunks/logos.CmxoeiaJ.js","_app/immutable/assets/logos.CtNwUba2.css","_app/immutable/assets/2.BY05CfUz.css","_app/immutable/nodes/3.C_1oToM8.js","_app/immutable/assets/3.CZFwu5eM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var U=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var f=(s,t,e)=>(U(s,t,"read from private field"),e?e.call(s):t.get(s)),C=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},L=(s,t,e,a)=>(U(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e);import{B as J,C as G,A as H,I as Q,K as Y,J as Z,h as _,n as x,$ as p,a0 as M,X as N,p as $,a1 as tt,g as et,f as k,a as rt,a2 as st,s as nt,a3 as O,c as at,t as ot,b as it,i as S}from"../chunks/runtime.CPifUbz4.js";import{h as ct,m as lt,u as ut,c as I,a as b,t as W,b as ft,s as dt}from"../chunks/disclose-version.BqvBVD5E.js";import{p as T,i as B,a as mt}from"../chunks/props.DMnKHxAa.js";import{b as D}from"../chunks/this.C3WnbkiB.js";import{o as ht}from"../chunks/index-client.CxNqbTfH.js";function V(s,t,e){J&&G();var a=s,o,c;H(()=>{o!==(o=t())&&(c&&(Z(c),c=null),o&&(c=Q(()=>e(a,o))))}),J&&(a=Y)}function _t(s){return class extends vt{constructor(t){super({component:s,...t})}}}var v,d;class vt{constructor(t){C(this,v,void 0);C(this,d,void 0);var c;var e=new Map,a=(r,n)=>{var i=N(n);return e.set(r,i),i};const o=new Proxy({...t.props||{},$$events:{}},{get(r,n){return _(e.get(n)??a(n,Reflect.get(r,n)))},has(r,n){return _(e.get(n)??a(n,Reflect.get(r,n))),Reflect.has(r,n)},set(r,n,i){return x(e.get(n)??a(n,i),i),Reflect.set(r,n,i)}});L(this,d,(t.hydrate?ct:lt)(t.component,{target:t.target,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&p(),L(this,v,o.$$events);for(const r of Object.keys(f(this,d)))r==="$set"||r==="$destroy"||r==="$on"||M(this,r,{get(){return f(this,d)[r]},set(n){f(this,d)[r]=n},enumerable:!0});f(this,d).$set=r=>{Object.assign(o,r)},f(this,d).$destroy=()=>{ut(f(this,d))}}$set(t){f(this,d).$set(t)}$on(t,e){f(this,v)[t]=f(this,v)[t]||[];const a=(...o)=>e.call(this,...o);return f(this,v)[t].push(a),()=>{f(this,v)[t]=f(this,v)[t].filter(o=>o!==a)}}$destroy(){f(this,d).$destroy()}}v=new WeakMap,d=new WeakMap;const gt="modulepreload",yt=function(s){return"/"+s},K={},w=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){const c=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),n=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(e.map(i=>{if(i=yt(i),i in K)return;K[i]=!0;const g=i.endsWith(".css"),P=g?'[rel="stylesheet"]':"";if(!!a)for(let u=c.length-1;u>=0;u--){const h=c[u];if(h.href===i&&(!g||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${P}`))return;const l=document.createElement("link");if(l.rel=g?"stylesheet":gt,g||(l.as="script",l.crossOrigin=""),l.href=i,n&&l.setAttribute("nonce",n),document.head.appendChild(l),g)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})},Ot={};var bt=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Et=W("<!> <!>",1);function Pt(s,t){$(t,!0);let e=T(t,"components",23,()=>[]),a=T(t,"data_0",3,null),o=T(t,"data_1",3,null);tt(()=>t.stores.page.set(t.page)),et(()=>{t.stores,t.page,t.constructors,e(),t.form,a(),o(),t.stores.page.notify()});let c=O(!1),r=O(!1),n=O(null);ht(()=>{const l=t.stores.page.subscribe(()=>{_(c)&&(x(r,!0),st().then(()=>{x(n,mt(document.title||"untitled page"))}))});return x(c,!0),l});const i=S(()=>t.constructors[1]);var g=Et(),P=k(g);B(P,()=>t.constructors[1],l=>{var u=I();const h=S(()=>t.constructors[0]);var E=k(u);V(E,()=>_(h),(y,A)=>{D(A(y,{get data(){return a()},get form(){return t.form},children:(m,Rt)=>{var q=I(),X=k(q);V(X,()=>_(i),(z,F)=>{D(F(z,{get data(){return o()},get form(){return t.form}}),R=>e()[1]=R,()=>{var R;return(R=e())==null?void 0:R[1]})}),b(m,q)},$$slots:{default:!0}}),m=>e()[0]=m,()=>{var m;return(m=e())==null?void 0:m[0]})}),b(l,u)},l=>{var u=I();const h=S(()=>t.constructors[0]);var E=k(u);V(E,()=>_(h),(y,A)=>{D(A(y,{get data(){return a()},get form(){return t.form}}),m=>e()[0]=m,()=>{var m;return(m=e())==null?void 0:m[0]})}),b(l,u)});var j=nt(P,2);B(j,()=>_(c),l=>{var u=bt(),h=at(u);B(h,()=>_(r),E=>{var y=ft();ot(()=>dt(y,_(n))),b(E,y)}),it(u),b(l,u)}),b(s,g),rt()}const St=_t(Pt),It=[()=>w(()=>import("../nodes/0.BF2veLWP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),()=>w(()=>import("../nodes/1.K-TKsNn8.js"),__vite__mapDeps([9,1,2,10,11])),()=>w(()=>import("../nodes/2.CzYKrPGQ.js"),__vite__mapDeps([12,1,2,3,13,4,14,10,11,7,6,15])),()=>w(()=>import("../nodes/3.C_1oToM8.js"),__vite__mapDeps([16,1,2,4,3,10,11,13,14,17]))],Tt=[],Bt={"/":[2],"/about":[3]},Dt={handleError:({error:s})=>{console.error(s)},reroute:()=>{}};export{Bt as dictionary,Dt as hooks,Ot as matchers,It as nodes,St as root,Tt as server_loads};
