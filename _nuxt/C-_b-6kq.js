import{m as B,s as a,o as i,v as _,w as t,d as c,q as L,b as n,c as C,x as N,F as S,a as d,t as u}from"./ScRmQDb8.js";const V={style:{height:"160px",overflow:"hidden"}},F=["src"],U={style:{position:"relative",padding:"8px 0"}},q=B({__name:"index",props:{list:{type:Array,default:()=>[]},title:{type:String,default:""},moreLink:{type:String,default:""},type:{type:String,default:"game"}},setup(l){const g=l,x={game:"/online/games/",crm:"/online/crm/"},m=(o,e)=>{if(console.log(11,o,e),o[e]&&/^http/.test(o[e]))return o[e];const r=x[g.type];return r?r+o[e]:""};return(o,e)=>{const r=a("a-link"),h=a("a-button"),f=a("a-descriptions-item"),y=a("a-descriptions"),b=a("a-card-meta"),p=a("a-card"),k=a("a-col"),v=a("a-row");return i(),_(p,{class:"fe-card-items",title:l.title,bordered:!1},{extra:t(()=>[l.moreLink?(i(),_(r,{key:0,href:l.moreLink},{default:t(()=>e[0]||(e[0]=[c("查看更多")])),_:1},8,["href"])):L("",!0)]),default:t(()=>[n(v,{gutter:20},{default:t(()=>[(i(!0),C(S,null,N(l.list,(s,w)=>(i(),_(k,{md:12,lg:10,xl:8,xxl:6,style:{marginBottom:"20px"},key:w},{default:t(()=>[n(p,{hoverable:"",style:{minWidth:"320px",maxWidth:"480px"}},{cover:t(()=>[d("div",V,[d("img",{style:{width:"100%",transform:"translateY(-20px)"},src:m(s,"cover")},null,8,F)])]),default:t(()=>[n(b,null,{title:t(()=>[d("div",U,[d("span",null,u(s.title),1),n(r,{href:m(s,"name"),target:"_blank",style:{position:"absolute",right:"0",top:"2px","font-weight":"normal"}},{default:t(()=>[n(h,{type:"text"},{default:t(()=>e[1]||(e[1]=[c("去玩玩")])),_:1})]),_:2},1032,["href"])])]),description:t(()=>[n(y,{column:1},{default:t(()=>[n(f,{label:"Github"},{default:t(()=>[n(r,{target:"_blank",href:s.repository},{default:t(()=>[c(u(s.name),1)]),_:2},1032,["href"])]),_:2},1024),n(f,{label:"License"},{default:t(()=>[c(u(s.license),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["title"])}}});export{q as _};