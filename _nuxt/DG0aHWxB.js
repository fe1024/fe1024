import{d as g,g as o,t as i,L as y,A as c,z as l,x as n,y as m,v as h,J as k,O as x}from"./C10Td7hP.js";const b=["href"],S={class:"fe-card-items-item-text"},v={class:"fe-card-items-item-title"},B={class:"fe-card-items-item-license"},C={key:0,class:"fe-card-items-item-repo"},V=g({__name:"index",props:{list:{type:Array,default:()=>[]},title:{type:String,default:""},moreLink:{type:String,default:""},type:{type:String,default:"game"}},setup(r){const d=r,_={game:"/online/games/",crm:"/online/crm/"},p=(e,t)=>{if(e[t]&&/^http/.test(e[t]))return e[t];const a=_[d.type];return a?a+e[t]:""};return(e,t)=>{const a=o("icon-github"),f=o("a-list-item"),u=o("a-list");return i(),y(u,{"grid-props":{gutter:[20,20],xs:24,sm:12,md:6,lg:6,xl:4},data:r.list,bordered:!1},{item:c(({item:s})=>[l(f,{class:"fe-card-items-item",style:x(`background-image: url(${s.cover})`)},{default:c(()=>[n("a",{href:p(s,"name"),target:"_blank",class:"fe-card-items-item-link"}," GO ",8,b),n("div",S,[n("h3",v,m(s.title),1)]),n("span",B,m(s.license),1),s.repository?(i(),h("span",C,[l(a)])):k("",!0)]),_:2},1032,["style"])]),_:1},8,["data"])}}});export{V as _};
