import{a9 as f,d as b,r as V,a as u,aa as S,W as B,o as C,f as U,g as a,e as l,b as d,k as m,A as h}from"./index-e1b9afb8.js";function w(){return f.get("/admin/market/advertisementSpaceSetting/list")}function x(p){return f.post("/admin/market/advertisementSpaceSetting/update",p)}const L=m("h3",null,"长视频页",-1),k=m("h3",null,"短视频页",-1),z=m("h3",null,"社区帖子",-1),q=m("h3",null,"直播广告",-1),F={style:{display:"flex","justify-content":"center"}},Y=b({__name:"index",setup(p){const i=V(!1);i.value=!0;const e=V({topAdvertising:!0,swpperBottom:!0,homeAdvertisingFrequency:1,playVideoBottom:!0,commentBottom:!0,forYouCommentAdvertising:1,everyShortVideoAdvertising:1,everyInvitationAdvertising:1,everyLiveCoverAdvertising:1});w().then(r=>{e.value=r.data}).finally(()=>{i.value=!1});const _=()=>{i.value=!0,x(e.value).then(r=>{e.value=r.data,h({type:"success",message:"修改成功"})}).finally(()=>{i.value=!1})};return(r,t)=>{const v=u("el-switch"),n=u("el-form-item"),s=u("el-input-number"),g=u("el-form"),y=u("el-button"),A=u("el-card"),c=S("loading");return B((C(),U(A,null,{default:a(()=>[l(g,{model:e.value,"label-width":"150px"},{default:a(()=>[L,l(n,{label:"顶部广告是否开启"},{default:a(()=>[l(v,{modelValue:e.value.topAdvertising,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.topAdvertising=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"轮播图下方是否开启"},{default:a(()=>[l(v,{modelValue:e.value.swpperBottom,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.swpperBottom=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"首页广告频率"},{default:a(()=>[l(s,{min:1,modelValue:e.value.homeAdvertisingFrequency,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.homeAdvertisingFrequency=o),size:"small"},null,8,["modelValue"]),d("  /每个栏目 ")]),_:1}),l(n,{label:"播放页视频下方"},{default:a(()=>[l(v,{modelValue:e.value.playVideoBottom,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.playVideoBottom=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"评论下方"},{default:a(()=>[l(v,{modelValue:e.value.commentBottom,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.commentBottom=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"为你推荐评率"},{default:a(()=>[l(s,{min:1,modelValue:e.value.forYouCommentAdvertising,"onUpdate:modelValue":t[5]||(t[5]=o=>e.value.forYouCommentAdvertising=o),size:"small"},null,8,["modelValue"]),d("  个视频显示一个广告 ")]),_:1}),k,l(n,{label:"每"},{default:a(()=>[l(s,{min:1,modelValue:e.value.everyShortVideoAdvertising,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value.everyShortVideoAdvertising=o),size:"small"},null,8,["modelValue"]),d("  个视频显示一个广告 ")]),_:1}),z,l(n,{label:"每"},{default:a(()=>[l(s,{min:1,modelValue:e.value.everyShortVideoAdvertising,"onUpdate:modelValue":t[7]||(t[7]=o=>e.value.everyShortVideoAdvertising=o),size:"small"},null,8,["modelValue"]),d("  个帖子显示一个广告 ")]),_:1}),q,l(n,{label:"每"},{default:a(()=>[l(s,{min:1,modelValue:e.value.everyLiveCoverAdvertising,"onUpdate:modelValue":t[8]||(t[8]=o=>e.value.everyLiveCoverAdvertising=o),size:"small"},null,8,["modelValue"]),d("  个直播封面显示一个广告 ")]),_:1})]),_:1},8,["model"]),m("div",F,[l(y,{type:"primary",onClick:_},{default:a(()=>[d("保存")]),_:1})])]),_:1})),[[c,i.value]])}}});export{Y as default};
