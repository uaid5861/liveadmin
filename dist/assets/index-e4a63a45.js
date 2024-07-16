import{a9 as V,d as x,V as L,r as i,a as p,o as C,f as T,g as a,e as l,b,A as N,k as U,Q as y,ac as E,_ as I,c as B,ad as R}from"./index-e1b9afb8.js";import{u as q}from"./useHandleData-9b50ca4a.js";import{g as F,a as S}from"./permission-aaa67ce0.js";function z(d){return V.get(`/admin/acl/role/list/${d.pageSize}/${d.pageNum}`,{roleName:d.roleName})}function A(d){return V.delete(`/admin/acl/role/remove/${d}`)}function H(d){return V.post("/admin/acl/role/save",d)}function j(d){return V.put("/admin/acl/role/update",d)}const K=x({name:"RoleDialog"}),M=x({...K,setup(d,{expose:k}){const c=L({roleName:[{required:!0,message:"请填写角色名称"},{min:2,message:"角色名不能小于2位"}]}),o=i(!1),f=i(!1),r=i({title:""}),g=n=>{r.value=n,o.value=!0},v=i(),u=()=>{v.value.validate(async n=>{if(n)try{f.value=!0,await r.value.api(r.value.rowData),N.success({message:`${r.value.title}用户成功！`}),r.value.getTableList(),o.value=!1,f.value=!1}catch(t){f.value=!1,console.log(t)}})};return k({acceptParams:g}),(n,t)=>{const m=p("el-input"),s=p("el-form-item"),e=p("el-form"),_=p("el-button"),D=p("el-dialog");return C(),T(D,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=w=>o.value=w),title:r.value.title,"destroy-on-close":!0,width:"580px"},{footer:a(()=>[l(_,{onClick:t[1]||(t[1]=w=>o.value=!1)},{default:a(()=>[b("取消")]),_:1}),l(_,{type:"primary",onClick:u,loading:f.value},{default:a(()=>[b(" 确定 ")]),_:1},8,["loading"])]),default:a(()=>[l(e,{ref_key:"ruleFormRef",ref:v,"label-width":"100px","label-suffix":" :",rules:c,model:r.value.rowData},{default:a(()=>[l(s,{label:"角色名称",prop:"roleName"},{default:a(()=>[l(m,{modelValue:r.value.rowData.roleName,"onUpdate:modelValue":t[0]||(t[0]=w=>r.value.rowData.roleName=w),placeholder:"请填写角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue","title"])}}}),Q={class:"tree-border"},G=x({name:"UserDrawer"}),J=x({...G,setup(d,{expose:k}){const c=i(!1),o=i({title:""}),f={children:"children",label:"name"},r=i([]),g=i([]),v=i(!1),u=i(),n=s=>{const{list:e}=s;o.value=s,c.value=!0,r.value=e.data,g.value=t(e.data)},t=(s,e=[])=>(s.forEach(_=>{_.select&&e.push(_.id),_.children&&t(_.children,e)}),e),m=async()=>{var s;try{const e=((s=u.value)==null?void 0:s.getCheckedKeys())||[],_={roleId:o.value.rowData.id,permissionId:e==null?void 0:e.join(",")};v.value=!0,await o.value.api(_),N.success({message:`${o.value.title}成功！`}),o.value.getTableList(),c.value=!1,window.location.reload(),v.value=!1}catch(e){v.value=!0,console.log(e)}};return k({acceptParams:n}),(s,e)=>{const _=p("el-input"),D=p("el-form-item"),w=p("el-form"),$=p("el-button"),P=p("el-drawer");return C(),T(P,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=h=>c.value=h),"destroy-on-close":!0,size:"450px",title:`${o.value.title}`},{footer:a(()=>[l($,{onClick:e[1]||(e[1]=h=>c.value=!1)},{default:a(()=>[b("取消")]),_:1}),l($,{type:"primary",onClick:m,loading:v.value},{default:a(()=>[b(" 确定 ")]),_:1},8,["loading"])]),default:a(()=>[l(w,{"label-width":"100px","label-suffix":" :"},{default:a(()=>[l(D,{label:"角色名称"},{default:a(()=>[l(_,{disabled:"",modelValue:o.value.rowData.roleName,"onUpdate:modelValue":e[0]||(e[0]=h=>o.value.rowData.roleName=h),placeholder:"请填写角色名称",clearable:""},null,8,["modelValue"])]),_:1}),l(D,{label:"权限列表",prop:"permissionId"},{default:a(()=>[U("div",Q,[l(y(E),{ref_key:"treeRef",ref:u,"node-key":"id","show-checkbox":"","default-expand-all":"","default-checked-keys":g.value,data:r.value,props:f},null,8,["default-checked-keys","data"])])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])}}});const O=I(J,[["__scopeId","data-v-182f0d95"]]),Z=x({__name:"index",setup(d){const k=[{type:"index",label:"#",width:80},{prop:"id",label:"id"},{prop:"roleName",label:"角色名称",search:{el:"input",props:{placeholder:"输入角色名称"}}},{prop:"createTime",label:"创建时间",sortable:!0},{prop:"updateTime",label:"更新时间",sortable:!0},{prop:"operation",label:"操作",fixed:"right",width:280}],c=i(),o=i(),f=(u,n={})=>{var m;const t={title:u,rowData:{...n},api:u==="新增"?H:j,getTableList:(m=c.value)==null?void 0:m.getTableList};o.value.acceptParams(t)},r=i(),g=async(u,n)=>{var m;const t={title:u,rowData:n,list:await F(n.id),api:S,getTableList:(m=c.value)==null?void 0:m.getTableList};r.value.acceptParams(t)},v=async u=>{var n;await q(A,u.id,`删除${u.roleName}角色`),(n=c.value)==null||n.getTableList()};return(u,n)=>{const t=p("el-button"),m=p("ProTable");return C(),B("div",null,[l(m,{ref_key:"proTable",ref:c,columns:k,requestApi:y(z)},{tableHeader:a(()=>[l(y(R),{value:["btn.Role.add"]},{default:a(()=>[l(t,{type:"primary",icon:"Plus",onClick:n[0]||(n[0]=s=>f("新增"))},{default:a(()=>[b(" 添加 ")]),_:1})]),_:1})]),operation:a(s=>[l(y(R),{value:["btn.Role.assgin"]},{default:a(()=>[l(t,{type:"primary",link:"",icon:"UserFilled",onClick:e=>g("分配权限",s.row)},{default:a(()=>[b(" 分配权限 ")]),_:2},1032,["onClick"])]),_:2},1024),l(y(R),{value:["btn.Role.update"]},{default:a(()=>[l(t,{type:"primary",link:"",icon:"Edit",onClick:e=>f("编辑",s.row)},{default:a(()=>[b(" 编辑 ")]),_:2},1032,["onClick"])]),_:2},1024),l(y(R),{value:["btn.Role.remove"]},{default:a(()=>[l(t,{type:"primary",link:"",icon:"Delete",onClick:e=>v(s.row)},{default:a(()=>[b(" 删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["requestApi"]),l(M,{ref_key:"DialogRef",ref:o},null,512),l(O,{ref_key:"DrawerRef",ref:r},null,512)])}}});export{Z as default};
