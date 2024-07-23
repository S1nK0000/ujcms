import{d as oe,p as ue,r as o,v as ie,b as h,e as G,f as M,w as d,i as e,h as se,j as u,u as me,a3 as R,ac as ve,o as pe,k as N,l as I,t as U,E as be,c as Ve,I as Ce,ak as $e,ah as Pe,as as Y,g as we,aJ as _e,aK as Oe,aM as De}from"./index-BgkR3Um2.js";import{c as Ie,t as le,e as Ue,f as ee,g as qe}from"./tree-MP4T2jDQ.js";import{z as ce,A as Se,B as Te,C as fe,b as te,D as Ee,E as Ae,F as Be,G as Ne,H as Fe}from"./user-BBPTA2_A.js";import{a as x,_ as Re,b as Le,c as ze}from"./QueryItem.vue_vue_type_script_setup_true_lang-SYpjwARX.js";import{_ as Ge}from"./ListMove.vue_vue_type_script_setup_true_lang-DPvxSgMj.js";import{_ as Ke}from"./DialogForm.vue_vue_type_script_setup_true_lang-wtbBfkW1.js";import{b as Qe}from"./data-DYmAP5cj.js";import{m as je}from"./content-D9cimwRS.js";const Me=oe({name:"OrgForm",__name:"OrgForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},beanIds:{type:Array,required:!0},parentId:{type:String,required:!0},showGlobalData:{type:Boolean,required:!0}},emits:{"update:modelValue":null,finished:null},setup(L,{emit:H}){const q=L,{parentId:P,beanId:V,showGlobalData:C,modelValue:w}=ue(q),F=H,_=o(),m=o({}),c=o([]),S=async v=>{c.value=Ie(le(await te({current:!C.value})),v==null?void 0:v.id)},T=async v=>{await S(v),F("finished")};return ie(w,()=>{w.value&&S()}),(v,t)=>{const K=h("el-tree-select"),f=h("el-form-item"),k=h("el-input");return G(),M(Ke,{values:m.value,"onUpdate:values":t[5]||(t[5]=g=>m.value=g),name:v.$t("menu.user.org"),"query-bean":u(ce),"create-bean":u(Se),"update-bean":u(Te),"delete-bean":u(fe),"bean-id":u(V),"bean-ids":L.beanIds,focus:_.value,"init-values":g=>({parentId:u(P)}),"to-values":g=>({...g}),"disable-delete":g=>{var O;return g.id<=1||g.id===((O=c.value[0])==null?void 0:O.id)},perms:"org","model-value":L.modelValue,"onUpdate:modelValue":t[6]||(t[6]=g=>v.$emit("update:modelValue",g)),onFinished:T,onBeanChange:t[7]||(t[7]=()=>S())},{default:d(({isEdit:g})=>{var O;return[!g||m.value.id!==((O=c.value[0])==null?void 0:O.id)?(G(),M(f,{key:0,prop:"parentId",label:v.$t("org.parent"),rules:{required:!0,message:()=>v.$t("v.required")}},{default:d(()=>[e(K,{modelValue:m.value.parentId,"onUpdate:modelValue":t[0]||(t[0]=p=>m.value.parentId=p),data:c.value,"node-key":"id",props:{label:"name",disabled:"disabled"},"default-expanded-keys":c.value.map(p=>p.id),"render-after-expand":!1,"check-strictly":"",class:"w-full"},null,8,["modelValue","data","default-expanded-keys"])]),_:1},8,["label","rules"])):se("",!0),e(f,{prop:"name",label:v.$t("org.name"),rules:{required:!0,message:()=>v.$t("v.required")}},{default:d(()=>[e(k,{ref_key:"focus",ref:_,modelValue:m.value.name,"onUpdate:modelValue":t[1]||(t[1]=p=>m.value.name=p),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(f,{prop:"address",label:v.$t("org.address")},{default:d(()=>[e(k,{modelValue:m.value.address,"onUpdate:modelValue":t[2]||(t[2]=p=>m.value.address=p),maxlength:"255"},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{prop:"phone",label:v.$t("org.phone")},{default:d(()=>[e(k,{modelValue:m.value.phone,"onUpdate:modelValue":t[3]||(t[3]=p=>m.value.phone=p),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),e(f,{prop:"contacts",label:v.$t("org.contacts")},{default:d(()=>[e(k,{modelValue:m.value.contacts,"onUpdate:modelValue":t[4]||(t[4]=p=>m.value.contacts=p),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"])]}),_:1},8,["values","name","query-bean","create-bean","update-bean","delete-bean","bean-id","bean-ids","focus","init-values","to-values","disable-delete","model-value"])}}}),He={class:"border-t"},Je={class:"border-t"},We={class:"border-t"},Xe={class:"flex items-center justify-between"},Ye=oe({name:"OrgPermissionForm",__name:"OrgPermissionForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:String,default:null},showGlobalData:{type:Boolean,required:!0}},emits:{"update:modelValue":null,finished:null},setup(L,{emit:H}){var de;const q=L,P=H,{beanId:V,modelValue:C}=ue(q),{t:w}=me(),F=o("articlePermission"),_=o(),m=o({}),c=o({}),S=o(!1),T=o(!1),v=o(!1),t=o(),K=o(!1),f=o(!1),k=o(),g=o(!1),O=o(!1),p=o(),Z=Qe();Ue(Z,(de=R.grantPermissions)!=null?de:[]);const D=o([]),z=o([]),J=ve(()=>m.value.global&&!R.globalPermission||R.rank>m.value.rank),ae=async()=>{V.value!=null&&(m.value=await ce(V.value),c.value={...m.value})},a=async()=>{var n;if(V.value!=null){const l=await Ae(V.value);(n=t.value)==null||n.setCheckedKeys([]),l.forEach(y=>{var b;(b=t.value)==null||b.setChecked(y,!0,!1)})}},r=async()=>{var n;if(V.value!=null){const l=await Be(V.value);(n=k.value)==null||n.setCheckedKeys([]),l.forEach(y=>{var b;(b=k.value)==null||b.setChecked(y,!0,!1)})}},$=async()=>{var n;if(V.value!=null){const l=await Ne(V.value,q.showGlobalData);(n=p.value)==null||n.setCheckedKeys([]),l.forEach(y=>{var b;(b=p.value)==null||b.setChecked(y,!0,!1)})}},E=async()=>{D.value=le(await je())},W=async()=>{z.value=le(await te({current:!0}))};ie(C,async()=>{C.value&&(ae(),a(),r(),$())}),pe(()=>{E(),W()});const A=()=>{_.value.validate(async n=>{if(n){S.value=!0;try{i(),j(),ne(),await Ee(c.value),P("finished"),P("update:modelValue",!1),be.success(w("success"))}finally{S.value=!1}}})},Q=(n,l,y,b)=>{y.forEach(B=>{B.children&&(l.getNode(B[b!=null?b:"key"]).expanded=n,Q(n,l,B.children,b))})},X=(n,l,y,b)=>{l.setCheckedKeys(n?y.map(B=>B[b!=null?b:"key"]):[])},i=()=>{t.value!=null&&(c.value.articlePermissions=[...t.value.getCheckedNodes(),...t.value.getHalfCheckedNodes()].map(n=>n.id))},j=()=>{k.value!=null&&(c.value.channelPermissions=[...k.value.getCheckedNodes(),...k.value.getHalfCheckedNodes()].map(n=>n.id))},ne=()=>{p.value!=null&&(c.value.orgPermissions=p.value.getCheckedNodes().map(n=>n.id))};return(n,l)=>{const y=h("el-checkbox"),b=h("el-tree"),B=h("el-tab-pane"),ge=h("el-tabs"),ye=h("el-form"),he=h("el-tag"),re=h("el-button"),ke=h("el-drawer");return G(),M(ke,{title:n.$t("permissionSettings"),"with-header":!1,"model-value":L.modelValue,size:576,"onUpdate:modelValue":l[18]||(l[18]=s=>n.$emit("update:modelValue",s))},{default:d(()=>[e(ye,{ref_key:"form",ref:_,model:c.value,disabled:J.value,"label-width":"150px"},{default:d(()=>[e(ge,{modelValue:F.value,"onUpdate:modelValue":l[15]||(l[15]=s=>F.value=s)},{default:d(()=>[e(B,{label:n.$t("org.articlePermission"),name:"articlePermission"},{default:d(()=>[N("div",He,[e(y,{modelValue:T.value,"onUpdate:modelValue":l[0]||(l[0]=s=>T.value=s),label:n.$t("expand/collapse"),onChange:l[1]||(l[1]=s=>Q(s,t.value,D.value,"id"))},null,8,["modelValue","label"]),e(y,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=s=>v.value=s),label:n.$t("checkAll/uncheckAll"),onChange:l[3]||(l[3]=s=>{X(s,t.value,u(ee)(D.value),"id"),i()})},null,8,["modelValue","label"])]),e(b,{ref_key:"articlePermissionTree",ref:t,data:D.value,"node-key":"id",props:{label:"name"},class:"border rounded","show-checkbox":"",onCheck:l[4]||(l[4]=()=>i())},null,8,["data"])]),_:1},8,["label"]),e(B,{label:n.$t("role.channelPermission"),name:"channelPermission"},{default:d(()=>[N("div",Je,[e(y,{modelValue:K.value,"onUpdate:modelValue":l[5]||(l[5]=s=>K.value=s),label:n.$t("expand/collapse"),onChange:l[6]||(l[6]=s=>Q(s,k.value,D.value,"id"))},null,8,["modelValue","label"]),e(y,{modelValue:f.value,"onUpdate:modelValue":l[7]||(l[7]=s=>f.value=s),label:n.$t("checkAll/uncheckAll"),onChange:l[8]||(l[8]=s=>{X(s,k.value,u(ee)(D.value),"id"),j()})},null,8,["modelValue","label"])]),e(b,{ref_key:"channelPermissionTree",ref:k,data:D.value,"node-key":"id",props:{label:"name"},class:"border rounded","check-strictly":"","show-checkbox":"",onCheck:l[9]||(l[9]=()=>j())},null,8,["data"])]),_:1},8,["label"]),e(B,{label:n.$t("org.orgPermission"),name:"orgPermission"},{default:d(()=>[N("div",We,[e(y,{modelValue:g.value,"onUpdate:modelValue":l[10]||(l[10]=s=>g.value=s),label:n.$t("expand/collapse"),onChange:l[11]||(l[11]=s=>Q(s,p.value,z.value,"id"))},null,8,["modelValue","label"]),e(y,{modelValue:O.value,"onUpdate:modelValue":l[12]||(l[12]=s=>O.value=s),label:n.$t("checkAll/uncheckAll"),onChange:l[13]||(l[13]=s=>{X(s,p.value,u(ee)(z.value),"id"),ne()})},null,8,["modelValue","label"])]),e(b,{ref_key:"orgPermissionTree",ref:p,data:z.value,"node-key":"id",props:{label:"name"},class:"border rounded","default-expanded-keys":z.value.map(s=>s.id),"show-checkbox":"","check-strictly":"",onCheck:l[14]||(l[14]=()=>ne())},null,8,["data","default-expanded-keys"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model","disabled"])]),footer:d(()=>[N("div",Xe,[N("div",null,[e(he,null,{default:d(()=>{var s;return[I(U((s=c.value)==null?void 0:s.name),1)]}),_:1})]),N("div",null,[e(re,{onClick:l[16]||(l[16]=()=>n.$emit("update:modelValue",!1))},{default:d(()=>[I(U(n.$t("cancel")),1)]),_:1}),e(re,{type:"primary",loading:S.value,disabled:J.value,onClick:l[17]||(l[17]=()=>A())},{default:d(()=>[I(U(n.$t("save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["title","model-value"])}}}),Ze={class:"mb-3"},xe={class:"mt-3 app-block"},rl=oe({name:"OrgList",__name:"OrgList",setup(L){const{t:H}=me(),q=o({}),P=o(),V=o(),C=o([]),w=o([]),F=o(!1),_=o(!1),m=o(!1),c=o(),S=ve(()=>C.value.map(a=>a.id)),T=o(!1),v=o("1"),t=o(!1),K=o(["1"]),f=async()=>{var a;F.value=!0;try{C.value=await te({..._e(q.value),current:!t.value,Q_OrderBy:P.value}),T.value=Object.values(q.value).filter(r=>r!==void 0&&r!=="").length>0||P.value!==void 0,T.value||(C.value=le(C.value)),v.value=(a=C.value[0])==null?void 0:a.id}finally{F.value=!1}};pe(f);const k=({column:a,prop:r,order:$})=>{var E;r&&$?P.value=((E=a.sortBy)!=null?E:r)+($==="descending"?"_desc":""):P.value=void 0,f()},g=()=>f(),O=()=>{V.value.clearSort(),Oe(q.value),P.value=void 0,f()},p=a=>{c.value=void 0,a!=null&&(v.value=a),_.value=!0},Z=a=>{c.value=a,_.value=!0},D=async a=>{await fe(a),f(),be.success(H("success"))},z=a=>{c.value=a,m.value=!0},J=a=>a.id>1,ae=async(a,r)=>{const $=De(a,ee(C.value),r);await Fe($),await f(),a.forEach(E=>{V.value.toggleRowSelection(qe(C.value,W=>W.id===E.id))})};return(a,r)=>{const $=h("el-button"),E=h("el-popconfirm"),W=h("el-checkbox"),A=h("el-table-column"),Q=h("el-table"),X=Ve("loading");return G(),Ce("div",null,[N("div",Ze,[e(u(Re),{params:q.value,onSearch:g,onReset:O},{default:d(()=>[e(u(x),{label:a.$t("org.name"),name:"Q_Contains_name"},null,8,["label"]),e(u(x),{label:a.$t("org.address"),name:"Q_Contains_address"},null,8,["label"]),e(u(x),{label:a.$t("org.phone"),name:"Q_Contains_phone"},null,8,["label"]),e(u(x),{label:a.$t("org.contacts"),name:"Q_Contains_contacts"},null,8,["label"])]),_:1},8,["params"])]),N("div",null,[e($,{type:"primary",icon:u($e),onClick:r[0]||(r[0]=()=>p())},{default:d(()=>[I(U(a.$t("add")),1)]),_:1},8,["icon"]),e(E,{title:a.$t("confirmDelete"),onConfirm:r[1]||(r[1]=()=>D(w.value.map(i=>i.id)))},{reference:d(()=>[e($,{disabled:w.value.length<=0,icon:u(Pe)},{default:d(()=>[I(U(a.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(Ge,{class:"ml-2",disabled:w.value.length<=0||T.value||u(Y)("org:update"),onMove:r[2]||(r[2]=i=>ae(w.value,i))},null,8,["disabled"]),u(R).globalPermission?(G(),M(W,{key:0,modelValue:t.value,"onUpdate:modelValue":r[3]||(r[3]=i=>t.value=i),class:"ml-2 align-middle",label:a.$t("globalData"),border:!0,onChange:r[4]||(r[4]=()=>f())},null,8,["modelValue","label"])):se("",!0),e(u(Le),{name:"org",class:"ml-2"})]),N("div",xe,[we((G(),M(Q,{ref_key:"table",ref:V,"row-key":"id",data:C.value,"expand-row-keys":K.value,onSelectionChange:r[5]||(r[5]=i=>w.value=i),onRowDblclick:r[6]||(r[6]=i=>Z(i.id)),onSortChange:k},{default:d(()=>[e(u(ze),{name:"org"},{default:d(()=>[e(A,{type:"selection",selectable:J,width:"45"}),e(A,{property:"name",label:a.$t("org.name"),sortable:"custom","min-width":"120"},{default:d(({row:i})=>{var j;return[I(U(T.value?(j=i.names)==null?void 0:j.join(" / "):i.name),1)]}),_:1},8,["label"]),e(A,{property:"address",label:a.$t("org.address"),sortable:"custom",display:"none","min-width":"100"},null,8,["label"]),e(A,{property:"phone",label:a.$t("org.phone"),sortable:"custom","min-width":"100"},null,8,["label"]),e(A,{property:"contacts",label:a.$t("org.contacts"),sortable:"custom"},null,8,["label"]),e(A,{property:"id",label:"ID",width:"170",sortable:"custom"}),e(A,{label:a.$t("table.action"),width:"230"},{default:d(({row:i})=>[e($,{type:"primary",disabled:u(Y)("org:create"),size:"small",link:"",onClick:()=>p(i.id)},{default:d(()=>[I(U(a.$t("addChild")),1)]),_:2},1032,["disabled","onClick"]),e($,{type:"primary",disabled:u(Y)("org:update"),size:"small",link:"",onClick:()=>Z(i.id)},{default:d(()=>[I(U(a.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),u(R).epRank>=3||u(R).epDisplay?(G(),M($,{key:0,title:u(R).epRank<3?a.$t("error.enterprise.short"):void 0,disabled:u(Y)("org:updatePermission")||u(R).epRank<3,type:"primary",size:"small",link:"",onClick:()=>z(i.id)},{default:d(()=>[I(U(a.$t("permissionSettings")),1)]),_:2},1032,["title","disabled","onClick"])):se("",!0),e(E,{title:a.$t("confirmDelete"),onConfirm:()=>D([i.id])},{reference:d(()=>[e($,{type:"primary",disabled:!J(i)||u(Y)("org:delete"),size:"small",link:""},{default:d(()=>[I(U(a.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data","expand-row-keys"])),[[X,F.value]])]),e(Me,{modelValue:_.value,"onUpdate:modelValue":r[7]||(r[7]=i=>_.value=i),"bean-id":c.value,"bean-ids":S.value,"parent-id":v.value,"show-global-data":t.value,onFinished:f},null,8,["modelValue","bean-id","bean-ids","parent-id","show-global-data"]),e(Ye,{modelValue:m.value,"onUpdate:modelValue":r[8]||(r[8]=i=>m.value=i),"bean-id":c.value,"show-global-data":t.value,onFinished:f},null,8,["modelValue","bean-id","show-global-data"])])}}});export{rl as default};
