import{d as C,r as p,V as T,a as n,o as k,f as V,g as a,e as l,b as v,k as B,ab as L,A as D,a9 as x,aa as R,c as q,W as M,Q as E,F as j}from"./index-e1b9afb8.js";import{u as z}from"./useHandleData-9b50ca4a.js";const A=B("div",{class:"el-upload__tip"}," 文件支持扩展名： .jpg/.png 文件大小限制： 大于2M小于5M ",-1),F=C({__name:"EditModal",setup(s,{expose:m}){const b=p(),f=p(!1),w=p(),h=T({advertisingName:[{required:!0,message:"请填写广告名称"},{max:30,message:"广告名称30字符以内"}],smallPic:[{required:!0,message:"请填排序值"}],price:[{required:!0,message:"请填排序值"}]}),c=p(!1),e=p({title:""}),i=o=>{b.value.clearFiles();const t=o[0];t.uid=L(),b.value.handleStart(t)},u=o=>(console.log("rawFile",o),o.type!=="png/jpeg/jpg"?(D.error("文件格式必须是.jpg或.png!"),!1):o.size/1024/1024>5||o.size/1024/1024<2?(D.error("文件大小应该在2MB-5MB之间!"),!1):!0),_=o=>{o.title==="新增"&&console.log(111),e.value=o,c.value=!0},y=()=>{w.value.validate(async o=>{if(o)try{f.value=!0,await e.value.api(e.value.rowData),D.success({message:`${e.value.title}用户成功！`}),c.value=!1,f.value=!1,e.value.getTableList()}catch(t){f.value=!1,console.log(t)}})};return m({acceptParams:_}),(o,t)=>{const r=n("el-input"),d=n("el-form-item"),P=n("el-button"),U=n("el-upload"),N=n("el-form"),$=n("el-dialog");return k(),V($,{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=g=>c.value=g),"destroy-on-close":!0,size:"450px",title:`${e.value.title}用户`},{footer:a(()=>[l(P,{onClick:t[2]||(t[2]=g=>c.value=!1)},{default:a(()=>[v("取消")]),_:1}),l(P,{type:"primary",onClick:y,loading:f.value},{default:a(()=>[v(" 确定 ")]),_:1},8,["loading"])]),default:a(()=>[l(N,{ref_key:"ruleFormRef",ref:w,"label-width":"100px","label-suffix":" :",rules:h,model:e.value.rowData},{default:a(()=>[l(d,{label:"礼物名称",prop:"advertisingName"},{default:a(()=>[l(r,{modelValue:e.value.rowData.advertisingName,"onUpdate:modelValue":t[0]||(t[0]=g=>e.value.rowData.advertisingName=g),placeholder:"请输入，限制30字符",clearable:""},null,8,["modelValue"])]),_:1}),l(d,{label:"图标",prop:"smallPic"},{default:a(()=>[l(U,{ref_key:"uploadRef",ref:b,class:"upload-demo",limit:1,"on-exceed":i,"before-upload":u,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1},{trigger:a(()=>[l(P,{type:"primary"},{default:a(()=>[v("选择图片")]),_:1})]),tip:a(()=>[A]),_:1},512)]),_:1}),l(d,{label:"价格",prop:"price"},{default:a(()=>[l(r,{modelValue:e.value.rowData.price,"onUpdate:modelValue":t[1]||(t[1]=g=>e.value.rowData.price=g),placeholder:"请输入排序值",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title"])}}});function G(s){return x.get("/admin/market/giftManager/list",s)}function S(s){return x.delete("/admin/market/giftManager/batchDelete",s)}function H(s){return x.put("/admin/market/giftManager/update",s)}function I(s){return x.post("/admin/market/giftManager/add",s)}const J=C({__name:"index",setup(s){const m=p(),b=[{type:"selection",fixed:"left",width:80},{type:"index",label:"序号",width:80},{prop:"id",label:"id"},{prop:"advertisingName",label:"礼物名称",search:{el:"input",props:{placeholder:"输入广告名称"}}},{prop:"smallPic",label:"图标",render:({row:e})=>l(j,null,[l(n("el-avatar"),{size:50,src:e.smallPic},null)])},{prop:"price",label:"价格"},{prop:"createTime",label:"创建时间",sortable:!0,width:120},{prop:"status",label:"状态"},{prop:"operation",label:"操作",fixed:"right",width:80}],f=T({}),w=p(),h=async(e,i={})=>{var _;let u={title:e,rowData:{...i},getTableList:(_=m.value)==null?void 0:_.getTableList,api:e==="新增"?I:H};w.value.acceptParams(u)},c=async e=>{var i,u;await z(S,e,"删除所选用户信息"),(i=m.value)==null||i.clearSelection(),(u=m.value)==null||u.getTableList()};return(e,i)=>{const u=n("el-image"),_=n("el-switch"),y=n("el-button"),o=n("ProTable"),t=R("auth");return k(),q("div",null,[l(o,{ref_key:"proTable",ref:m,columns:b,requestApi:E(G),initParam:f},{smallPic:a(r=>[l(u,{style:{height:"50px"},src:r.row.smallPic,fit:"cover"},null,8,["src"])]),status:a(r=>[l(_,{modelValue:r.row.status,"onUpdate:modelValue":d=>r.row.status=d},null,8,["modelValue","onUpdate:modelValue"])]),tableHeader:a(r=>[M((k(),V(y,{type:"primary",icon:"Plus",onClick:i[0]||(i[0]=d=>h("新增"))},{default:a(()=>[v(" 添加 ")]),_:1})),[[t,["btn.User.add"]]]),M((k(),V(y,{type:"danger",icon:"Delete",plain:"",onClick:d=>c(r.selectedListIds),disabled:!r.isSelected},{default:a(()=>[v(" 批量删除 ")]),_:2},1032,["onClick","disabled"])),[[t,["btn.User.remove"]]])]),operation:a(r=>[M((k(),V(y,{type:"primary",link:"",icon:"Edit",onClick:d=>h("编辑",r.row)},{default:a(()=>[v(" 编辑 ")]),_:2},1032,["onClick"])),[[t,["btn.User.update"]]])]),_:1},8,["requestApi","initParam"]),l(F,{ref_key:"drawerRef",ref:w},null,512)])}}});export{J as default};
