import{h as c,u as g}from"./useAuth-2ec42edf.js";import{u as y}from"./useAuthButtons-9e7fcd42.js";import{a9 as N,d as T,r as w,a as r,o as p,c as U,e as n,g as a,Q as l,b as u,f as b,i as f}from"./index-e1b9afb8.js";function v(o){return N.get(`/admin/application/videoTag/list/${o.pageSize}/${o.pageNum}`,{name:o.name})}const B=T({__name:"index",setup(o){const{BUTTONS:s}=y(),_=[{prop:"id",label:"编号",width:80},{prop:"name",label:"标签名称",width:120,search:{el:"input",props:{placeholder:"请输入标签名称"}},render:({row:t})=>n(r("el-tag"),null,{default:()=>[t.name]})},{prop:"createTime",label:"创建时间"},{prop:"status",label:"状态",width:100,render:({row:t})=>n(r("el-switch"),{modelValue:t.status,"onUpdate:modelValue":e=>t.status=e},null)},{prop:"mark",label:"备注"},{prop:"operation",label:"操作",fixed:"right",width:180}],h=w(),m=async t=>{const e=t==="新增"?c("btn.UserNormal.add1"):c("btn.UserNormal.update2");await g(e)};return(t,e)=>{const i=r("el-button"),k=r("ProTable");return p(),U("div",null,[n(k,{ref_key:"proTable",ref:h,columns:_,requestApi:l(v)},{tableHeader:a(()=>[n(i,{type:"primary",icon:"Plus",disabled:!l(s)["btn.UserNormal.add"],onClick:e[0]||(e[0]=d=>m("新增"))},{default:a(()=>[u(" 新增 ")]),_:1},8,["disabled"])]),operation:a(d=>[d.row.status!==1?(p(),b(i,{key:0,type:"primary",link:"",icon:"Edit",disabled:!l(s)["btn.UserNormal.update"],onClick:e[1]||(e[1]=x=>m("编辑"))},{default:a(()=>[u(" 编辑 ")]),_:1},8,["disabled"])):f("",!0),d.row.status!==1?(p(),b(i,{key:1,type:"primary",link:"",icon:"Delete",disabled:!l(s)["btn.UserNormal.view"]},{default:a(()=>[u(" 删除 ")]),_:1},8,["disabled"])):f("",!0)]),_:1},8,["requestApi"])])}}});export{B as default};
