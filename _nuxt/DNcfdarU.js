import{d as h,g as n,t as o,M as k,A as i,z as l,x as r,y as d,v as m,K as _,O as x}from"./BNxn1Vw-.js";const b=["href"],S={class:"fe-card-items-item-text"},v={class:"fe-card-items-item-title"},B={key:0,class:"fe-card-items-item-license"},C={key:1,class:"fe-card-items-item-repo"},V=h({__name:"index",props:{list:{type:Array,default:()=>[]},title:{type:String,default:""},moreLink:{type:String,default:""},type:{type:String,default:"game"}},setup(c){const p=c,f={game:"/online/games/",crm:"/online/crm/"},u=(t,s)=>{if(t[s]&&/^http/.test(t[s]))return t[s];const a=f[p.type];return a?a+t[s]:""};return(t,s)=>{const a=n("icon-github"),g=n("a-list-item"),y=n("a-list");return o(),k(y,{"grid-props":{gutter:[16,16],xs:12,sm:12,md:6,lg:6,xl:4},data:c.list,bordered:!1},{item:i(({item:e})=>[l(g,{class:"fe-card-items-item",style:x(`background-image: url(${e.cover})`)},{default:i(()=>[r("a",{href:u(e,"name"),target:"_blank",class:"fe-card-items-item-link"}," GO ",8,b),r("div",S,[r("h3",v,d(e.title),1)]),e.license?(o(),m("span",B,d(e.license),1)):_("",!0),e.repository?(o(),m("span",C,[l(a)])):_("",!0)]),_:2},1032,["style"])]),_:1},8,["data"])}}});export{V as _};
