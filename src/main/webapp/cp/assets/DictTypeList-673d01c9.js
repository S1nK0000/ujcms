import{d as j,r as p,a as m,c as g,e as U,w as l,i as u,h as e,I as A,a8 as X,a7 as Z,k as y,t as $,u as G,X as H,o as J,b as K,j as E,f as W,aD as Y,aI as x,E as ee,cw as ae,as as I,a4 as le,a1 as te}from"./index-6c60ffba.js";import{Z as se,_ as oe,$ as ne,a0 as M,a1 as de,j as ie,a2 as ue}from"./config-d89d22f7.js";import{a as re,_ as pe,b as me,c as ce}from"./QueryItem.vue_vue_type_script_setup_true_lang-b16aac13.js";import{_ as be}from"./ListMove.vue_vue_type_script_setup_true_lang-abbfedd1.js";import{_ as fe}from"./DialogForm.vue_vue_type_script_setup_true_lang-e536e4f0.js";const ve={name:"DictTypeForm"},ye=j({...ve,props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(B){const q=p(),o=p({}),c=d=>d.id>=100;return(d,t)=>{const b=m("el-input"),f=m("el-form-item"),T=m("el-radio"),k=m("el-radio-group"),S=m("el-switch");return g(),U(fe,{name:d.$t("menu.config.dictType"),queryBean:u(se),createBean:u(oe),updateBean:u(ne),deleteBean:u(M),beanId:B.beanId,beanIds:B.beanIds,focus:q.value,initValues:()=>({scope:0}),toValues:r=>({...r}),disableDelete:r=>!c(r),perms:"dictType",values:o.value,"onUpdate:values":t[5]||(t[5]=r=>o.value=r),"model-value":B.modelValue,"onUpdate:modelValue":t[6]||(t[6]=r=>d.$emit("update:modelValue",r)),onFinished:t[7]||(t[7]=r=>d.$emit("finished"))},{default:l(({bean:r,isEdit:D})=>[e(f,{prop:"name",label:d.$t("dictType.name"),rules:{required:!0,message:()=>d.$t("v.required")}},{default:l(()=>[e(b,{modelValue:o.value.name,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.name=s),ref_key:"focus",ref:q,maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(f,{prop:"alias",label:d.$t("dictType.alias"),rules:[{required:!0,message:()=>d.$t("v.required")},{asyncValidator:async(s,w,C)=>{w!==r.alias&&await u(de)(w,o.value.scope)&&C(d.$t("dictType.error.aliasExist")),C()}}]},{default:l(()=>[e(b,{modelValue:o.value.alias,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.alias=s),disabled:D&&!c(o.value),maxlength:"50"},null,8,["modelValue","disabled"])]),_:2},1032,["label","rules"]),e(f,{prop:"remark",label:d.$t("dictType.remark")},{default:l(()=>[e(b,{modelValue:o.value.remark,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.remark=s),type:"textarea",rows:2,maxlength:"255"},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{prop:"scope",label:d.$t("dictType.scope"),rules:{required:!0,message:()=>d.$t("v.required")}},{default:l(()=>[e(k,{modelValue:o.value.scope,"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.scope=s),disabled:D&&!c(o.value)},{default:l(()=>[(g(),A(Z,null,X([0,2],s=>e(T,{key:s,label:s},{default:l(()=>[y($(d.$t(`dictType.scope.${s}`)),1)]),_:2},1032,["label"])),64))]),_:2},1032,["modelValue","disabled"])]),_:2},1032,["label","rules"]),e(f,{prop:"sys",label:d.$t("dictType.sys")},{default:l(()=>[e(S,{modelValue:o.value.sys,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.sys=s),disabled:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","disableDelete","values","model-value"])}}}),$e={class:"mb-3"},_e={class:"app-block mt-3"},Ve={name:"DictTypeList"},Be=j({...Ve,setup(B){const{t:q}=G(),o=p({}),c=p(),d=p(),t=p([]),b=p([]),f=p(!1),T=p(!1),k=p(),S=H(()=>t.value.map(a=>a.id)),r=p(!1),D=a=>a.id>=100,s=async()=>{f.value=!0;try{t.value=await ie({...Y(o.value),Q_OrderBy:c.value}),r.value=Object.values(o.value).filter(a=>a!==void 0&&a!=="").length>0||c.value!==void 0}finally{f.value=!1}};J(s);const w=({column:a,prop:i,order:v})=>{var _;i?c.value=((_=a.sortBy)!=null?_:i)+(v==="descending"?"_desc":""):c.value=void 0,s()},C=()=>s(),N=()=>{d.value.clearSort(),x(o.value),c.value=void 0,s()},O=()=>{k.value=void 0,T.value=!0},F=a=>{k.value=a,T.value=!0},L=async a=>{await M(a),s(),ee.success(q("success"))},R=async(a,i)=>{const v=ae(a,t.value,i);await ue(v.map(_=>_.id))};return(a,i)=>{const v=m("el-button"),_=m("el-popconfirm"),V=m("el-table-column"),h=m("el-tag"),P=m("el-table"),Q=K("loading");return g(),A("div",null,[E("div",$e,[e(u(pe),{params:o.value,onSearch:C,onReset:N},{default:l(()=>[e(u(re),{label:a.$t("dictType.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),E("div",null,[e(v,{type:"primary",disabled:u(I)("dictType:create"),icon:u(le),onClick:i[0]||(i[0]=n=>O())},{default:l(()=>[y($(a.$t("add")),1)]),_:1},8,["disabled","icon"]),e(_,{title:a.$t("confirmDelete"),onConfirm:i[1]||(i[1]=n=>L(b.value.map(z=>z.id)))},{reference:l(()=>[e(v,{disabled:b.value.length<=0||u(I)("dictType:delete"),icon:u(te)},{default:l(()=>[y($(a.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(be,{disabled:b.value.length<=0||r.value||u(I)("org:update"),onMove:i[2]||(i[2]=n=>R(b.value,n)),class:"ml-2"},null,8,["disabled"]),e(u(me),{name:"dictType",class:"ml-2"})]),E("div",_e,[W((g(),U(P,{ref_key:"table",ref:d,data:t.value,onSelectionChange:i[3]||(i[3]=n=>b.value=n),onRowDblclick:i[4]||(i[4]=n=>F(n.id)),onSortChange:w},{default:l(()=>[e(u(ce),{name:"dictType"},{default:l(()=>[e(V,{type:"selection",selectable:D,width:"45"}),e(V,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(V,{property:"name",label:a.$t("dictType.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(V,{property:"alias",label:a.$t("dictType.alias"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(V,{property:"scope",label:a.$t("dictType.scope"),sortable:"custom"},{default:l(({row:n})=>[n.scope===2?(g(),U(h,{key:0,type:"success",size:"small"},{default:l(()=>[y($(a.$t(`block.scope.${n.scope}`)),1)]),_:2},1024)):(g(),U(h,{key:1,type:"info",size:"small"},{default:l(()=>[y($(a.$t(`block.scope.${n.scope}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(V,{property:"sys",label:a.$t("dictType.sys"),sortable:"custom"},{default:l(({row:n})=>[e(h,{type:n.sys?"success":"info",size:"small"},{default:l(()=>[y($(a.$t(n.sys?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(V,{label:a.$t("table.action")},{default:l(({row:n})=>[e(v,{type:"primary",disabled:u(I)("dictType:update"),onClick:z=>F(n.id),size:"small",link:""},{default:l(()=>[y($(a.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),e(_,{title:a.$t("confirmDelete"),onConfirm:z=>L([n.id])},{reference:l(()=>[e(v,{type:"primary",disabled:!D(n)||u(I)("dictType:delete"),size:"small",link:""},{default:l(()=>[y($(a.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[Q,f.value]])]),e(ye,{modelValue:T.value,"onUpdate:modelValue":i[5]||(i[5]=n=>T.value=n),beanId:k.value,beanIds:u(S),onFinished:s},null,8,["modelValue","beanId","beanIds"])])}}});export{Be as default};
