import{Z as D,_ as I}from"./work-detail-8f9720ec.js";import{Z as S}from"./ZyPageHeader-d2c6c3e0.js";import{Z as j}from"./ZySectionHeader-683fa53b.js";import{_ as L,r as v,g as $,w as Z,o as z,a as _,c as u,b as c,k as l,F as g,e as C,z as E,t as B,C as P,A as q,p as V,d as X}from"./index-bec2456b.js";import{a as Y}from"./server-fb688731.js";import"./github-3ac62ad4.js";const F=n=>Y.post("/v1/blog/portfolios/client/list",n);const H=n=>(V("data-v-b035eb4e"),n=n(),X(),n),N={class:"zy-portfolio"},Q={class:"project-list"},R=["title","onClick","onMouseenter","onMousemove","onMouseleave"],T=["data-src"],W={class:"project-item-card__glow"},A={class:"glow-content"},U=H(()=>c("div",{class:"work-info-icon"},[c("i",{class:"iconfont icon-a-thecode"})],-1)),G={class:"work-info-title"},J={__name:"index",setup(n){const d=v([]),p=v(null),o=$({show:{work:!1},portfoliosQuery:{params:{status:!0},pagination:{current:1,pageSize:15}},portfoliosData:[],viewData:{}}),h=()=>{o.show.work=!1},w=t=>{o.viewData=t,o.show.work=!0},f=(t,s)=>{let e=s.getBoundingClientRect();const a=t.clientX,r=t.clientY,k=a-e.x,x=r-e.y,i={x:k-e.width/2,y:x-e.height/2},b=Math.sqrt(i.x**2+i.y**2);s.style.transform=`
            scale(1.02)
            rotate3d(
                ${i.y/100},
                ${i.x/100},
                0,
                ${Math.log(b)*.5}deg
            )
        `;const M=s.querySelector(".project-item-card__glow");M.style.backgroundImage=`
            radial-gradient(
                circle at
                ${i.x*2+e.width/2}px
                ${i.y*2+e.height/2}px,
                #ffffff55,
                #0000000f
            )
        `},m=(t,s)=>{f(t,d.value[s])},y=(t,s)=>{document.removeEventListener("mousemove",f);let e=d.value[s];e.style.transform="";const a=e.querySelector(".project-item-card__glow");a.style.backgroundImage=""};return Z(()=>o.portfoliosData,()=>{P(()=>{d.value=[...p.value],q()})}),(()=>{F(o.portfoliosQuery).then(t=>{o.portfoliosData=t.data.result||[]})})(),z(()=>{}),(t,s)=>(_(),u(g,null,[c("section",N,[l(S,{current:"Portfolio"}),l(j,{title:"作品列表",class:"c-mb-40 c-mt-40",style:{padding:"0 1.8rem"}}),c("div",Q,[(_(!0),u(g,null,C(o.portfoliosData,(e,a)=>(_(),u("div",{class:"project-item-card",title:e.abstract,key:a,onClick:r=>w(e),ref_for:!0,ref_key:"projectItem",ref:p,onMouseenter:r=>m(r,a),onMousemove:r=>m(r,a),onMouseleave:r=>y(r,a)},[c("img",{class:"card-img lazy-image","data-src":e.cover,alt:"pic"},null,8,T),c("div",W,[c("div",A,[U,c("div",G,B(e.title),1)])])],40,R))),128))])]),l(D,{minWidth:350,show:o.show.work,title:"项目详情",key:"ViewUserInfo",onClose:h},{default:E(()=>[l(I,{viewData:o.viewData},null,8,["viewData"])]),_:1},8,["show"])],64))}},re=L(J,[["__scopeId","data-v-b035eb4e"]]);export{re as default};
