import{i as u,r as c,e as f,f as v,g as d,h as l,j as i,k as h,l as p}from"./AwtdT6Ml.js";function g(t,a={}){const e=a.head||u();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:v(a)});const r=t.push(n.value,e);return d(n,o=>{r.patch(o)}),p()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}const I=(t,a)=>{const e=t.__vccOpts||t;for(const[s,n]of a)e[s]=n;return e};export{I as _,g as u};
