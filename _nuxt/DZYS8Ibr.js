import{d as c,P as r,N as u,r as m,R as i,v as p,Q as _,t as f}from"./C10Td7hP.js";import{u as d}from"./r4fKVtUg.js";const h={class:"fe-layout-game"},g="https://cdn.fe1024.com/webstatic/fe1024/games",x=c({__name:"game",async setup(v){let e,a;const s=(r().fullPath||"").replace(/\/$/,"").split("/").slice(-1),{data:t}=([e,a]=u(()=>d(`/api/game/detail/${s}`,"$ttksBi17gI")),e=await e,a(),e),o=t.value.url?t.value.url:`${g}/${t.value.name}/index.html`,l=m({data:t,src:o});return i("game",l),(n,P)=>(f(),p("div",h,[_(n.$slots,"default")]))}});export{x as default};
