import{_ as n}from"./index.cde9b202.js";import{r as _,o as i,c as a,a as e,t as l,b as t,w as p,d as h}from"./vendor.469f8e7c.js";const m={props:{title:String,id:Number}},u={class:"card w-96 bg-base-100 card-compact shadow-xl sm:w-1/3 max-w-sm"},f=["src"],x={class:"card-body"},w={class:"card-title"},b={class:"justify-end card-actions"},g=h("Read");function P(c,r,o,y,$,k){const d=_("RouterLink");return i(),a("div",u,[e("figure",null,[e("img",{width:"400",height:"225",src:`https://picsum.photos/400/225?${o.id}`,alt:"Shoes"},null,8,f)]),e("div",x,[e("h2",w,l(o.title),1),e("div",b,[t(d,{to:`/posts/${o.id}`,class:"btn btn-primary"},{default:p(()=>[g]),_:1},8,["to"])])])])}var s=n(m,[["render",P]]);const v={class:"flex flex-wrap gap-6 justify-center content-start"},C={setup(c){return(r,o)=>(i(),a("div",v,[t(s,{title:"Post 1",id:1}),t(s,{title:"Post 2",id:2}),t(s,{title:"Post 3",id:3}),t(s,{title:"Post 4",id:4}),t(s,{title:"Post 5",id:5}),t(s,{title:"Post 6",id:6})]))}};export{C as default};
