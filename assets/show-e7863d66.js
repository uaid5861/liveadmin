import{a as h,b as g}from"./creator-196af5e0.js";import{d as V,s as B,l as k,r as v,V as x,a,o as P,f as q,g as e,e as t,Q as c,k as w}from"./index-e1b9afb8.js";const A=w("span",{class:"text-large font-600 mr-3"},"【创作者】详情页面",-1),T=V({__name:"show",setup(y){const u=B(),i=k(),o=v("first"),s=x({id:u.params.id}),d=()=>{i.back()},l=[{prop:"id",label:"ID",width:80,fixed:"left"},{prop:"type",label:"视频类型"},{prop:"title",label:"标题"},{prop:"time",label:"时长"},{prop:"authStatus",label:"审核状态"},{prop:"createTime",label:"添加时间"}];return(C,n)=>{const m=a("el-page-header"),r=a("ProTable"),p=a("el-tab-pane"),_=a("el-tabs"),f=a("el-card");return P(),q(f,{shadow:"never","body-style":"border: none;"},{header:e(()=>[t(m,{onBack:d},{content:e(()=>[A]),_:1})]),default:e(()=>[t(_,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=b=>o.value=b)},{default:e(()=>[t(p,{label:"长视频",name:"first"},{default:e(()=>[t(r,{columns:l,toolButton:!1,initParam:s,requestApi:c(h)},null,8,["initParam","requestApi"])]),_:1}),t(p,{label:"短视频",name:"second"},{default:e(()=>[t(r,{columns:l,toolButton:!1,initParam:s,requestApi:c(g)},null,8,["initParam","requestApi"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{T as default};
