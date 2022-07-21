var he=Object.defineProperty,we=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable;var me=(P,y,i)=>y in P?he(P,y,{enumerable:!0,configurable:!0,writable:!0,value:i}):P[y]=i,K=(P,y)=>{for(var i in y||(y={}))Re.call(y,i)&&me(P,i,y[i]);if(de)for(var i of de(y))Ue.call(y,i)&&me(P,i,y[i]);return P},x=(P,y)=>we(P,qe(y));import{g as re,I as d,j as f,o as v,k as q,w as a,l as e,m as t,q as L,C as ne,F,P as C,A as h,t as Ae,u as ve,i as fe,R as Te,M as be,y as N,x as X,Q as ce,ax as De,N as Be,aq as Ie,O as Ne,ap as Se}from"./vendor.7e46e91a.js";import{h as c,m as te,o as Le,w as ze,B as Ee}from"./index.e522d6d8.js";import{r as Me,k as ye,l as He,n as Fe,o as $e,p as Ge,s as je,g as Oe,t as Qe}from"./user.573cecc8.js";import{a as Ke,b as Je,_ as pe,c as We}from"./QueryItem.713a2356.js";import{_ as Xe}from"./ListMove.34265a1e.js";import{_ as Ye}from"./DialogForm.8aa435df.js";import{_ as J}from"./LabelTip.bc63985c.js";import{b as Ze}from"./data.9842cb18.js";import{b as xe,t as el}from"./tree.4a0f1dfa.js";import{f as ll}from"./content.fbe0cd3c.js";const al={name:"RoleForm"},ol=re(x(K({},al),{props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(P){const y=d(),i=d({});return(u,b)=>{const z=f("el-input"),R=f("el-form-item"),G=f("el-input-number"),T=f("el-option"),m=f("el-select"),D=f("el-radio"),W=f("el-radio-group");return v(),q(Ye,{name:u.$t("menu.user.role"),queryBean:t(ye),createBean:t(He),updateBean:t(Fe),deleteBean:t($e),beanId:P.beanId,beanIds:P.beanIds,focus:y.value,initValues:()=>({type:4,rank:t(c).rank+1,scope:0}),toValues:$=>K({},$),disableDelete:$=>$.id<=1,disableEdit:$=>$.global&&!t(c).globalPermission||t(c).rank>$.rank,perms:"role",values:i.value,"onUpdate:values":b[5]||(b[5]=$=>i.value=$),"model-value":P.modelValue,"onUpdate:modelValue":b[6]||(b[6]=$=>u.$emit("update:modelValue",$)),onFinished:b[7]||(b[7]=$=>u.$emit("finished"))},{default:a(({bean:$,disabled:_})=>[e(R,{prop:"name",label:u.$t("role.name"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(z,{modelValue:i.value.name,"onUpdate:modelValue":b[0]||(b[0]=p=>i.value.name=p),ref_key:"focus",ref:y,maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(R,{prop:"description",label:u.$t("role.description")},{default:a(()=>[e(z,{modelValue:i.value.description,"onUpdate:modelValue":b[1]||(b[1]=p=>i.value.description=p),maxlength:"300"},null,8,["modelValue"])]),_:1},8,["label"]),e(R,{prop:"rank",rules:[{required:!0,message:()=>u.$t("v.required")}]},{label:a(()=>[e(J,{message:"role.rank",help:""})]),default:a(()=>[e(G,{modelValue:i.value.rank,"onUpdate:modelValue":b[2]||(b[2]=p=>i.value.rank=p),modelModifiers:{number:!0},min:_?0:t(c).rank,max:32767},null,8,["modelValue","min"])]),_:2},1032,["rules"]),e(R,{prop:"type",rules:[{required:!0,message:()=>u.$t("v.required")},{validator:(p,j,w)=>{[1,2,3].includes(j)&&t(c).epRank<1&&w(u.$t("error.enterprise.short")),w()}}]},{label:a(()=>[e(J,{message:"role.type",help:""})]),default:a(()=>[e(m,{modelValue:i.value.type,"onUpdate:modelValue":b[3]||(b[3]=p=>i.value.type=p)},{default:a(()=>[(v(),L(F,null,ne([1,2,3,4],p=>e(T,{key:p,label:u.$t(`role.type.${p}`),value:p},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(R,{prop:"scope",label:u.$t("block.scope"),rules:[{required:!0,message:()=>u.$t("v.required")},{asyncValidator:async(p,j,w)=>{j!==$.scope&&await t(Me)(i.value.scope)&&w(u.$t("role.error.scopeNotAllowd")),w()}}]},{default:a(()=>[e(W,{modelValue:i.value.scope,"onUpdate:modelValue":b[4]||(b[4]=p=>i.value.scope=p)},{default:a(()=>[(v(),L(F,null,ne([0,2],p=>e(D,{key:p,label:p,disabled:!t(c).globalPermission},{default:a(()=>[C(h(u.$t(`role.scope.${p}`)),1)]),_:2},1032,["label","disabled"])),64))]),_:1},8,["modelValue"])]),_:2},1032,["label","rules"])]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","disableDelete","disableEdit","values","model-value"])}}})),sl={class:"border-t"},tl={class:"border-t"},nl=["innerHTML"],rl=["innerHTML"],il={class:"border-t"},ul=["innerHTML"],dl={class:"flex justify-between items-center"},ml={name:"RolePermissionForm"},pl=re(x(K({},ml),{props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number}},emits:{"update:modelValue":null,finished:null},setup(P,{emit:y}){var ie;const i=P,{beanId:u,modelValue:b}=Ae(i),{t:z}=ve(),R=d("permission"),G=d(),T=d({}),m=d({}),D=d(!1),W=d(!0),$=d(!1),_=d(),p=d(!0),j=d(!1),w=d(),ee=d(!0),le=d(!1),S=d(),E=Ze();xe(E,(ie=c.grantPermissions)!=null?ie:[]);const O=d([]),ae=fe(()=>T.value.global&&!c.globalPermission||c.rank>T.value.rank),s=async()=>{(u==null?void 0:u.value)!=null&&(T.value=await ye(u.value),m.value=K({},T.value),De().then(()=>{var n,l,g,V,A,H;(g=_.value)==null||g.setCheckedKeys((l=(n=T.value.permission)==null?void 0:n.split(","))!=null?l:[]),(H=w.value)==null||H.setCheckedKeys((A=(V=T.value.grantPermission)==null?void 0:V.split(","))!=null?A:[])}))},k=async()=>{(u==null?void 0:u.value)!=null&&(await je(u.value)).forEach(l=>{var g;(g=S.value)==null||g.setChecked(l,!0,!1)})},B=async()=>{O.value=el(await ll())};Te(b,async()=>{b.value&&(await s(),k())}),be(()=>{B()});const M=()=>{G.value.validate(async n=>{if(!!n){D.value=!0;try{Y(),Z(),r(),await Ge(m.value),y("finished"),y("update:modelValue",!1),ce.success(z("success"))}finally{D.value=!1}}})},U=(n,l,g,V)=>{g.forEach(A=>{A.children&&(l.getNode(A[V!=null?V:"key"]).expanded=n,U(n,l,A.children,V))})},I=(n,l,g,V)=>{l.setCheckedKeys(n?g.map(A=>A[V!=null?V:"key"]):[])},Y=()=>{_.value!=null&&(m.value.permission=Q(_.value.getCheckedNodes(),_.value.getHalfCheckedNodes()))},Z=()=>{w.value!=null&&(m.value.grantPermission=Q(w.value.getCheckedNodes(),w.value.getHalfCheckedNodes()))},r=()=>{S.value!=null&&(m.value.articlePermissions=[...S.value.getCheckedNodes(),...S.value.getHalfCheckedNodes()].map(n=>n.id))},Q=(n,l)=>[...n,...l].filter(g=>g.perms).map(g=>{var V;return(V=g.perms)==null?void 0:V.join(",")}).join(",");return(n,l)=>{const g=f("el-alert"),V=f("el-switch"),A=f("el-form-item"),H=f("el-checkbox"),se=f("el-tree"),oe=f("el-tab-pane"),ke=f("el-option"),ge=f("el-select"),Ve=f("el-tabs"),Pe=f("el-form"),_e=f("el-tag"),ue=f("el-button"),Ce=f("el-drawer");return v(),q(Ce,{title:n.$t("permissionSettings"),"with-header":!1,"model-value":P.modelValue,"onUpdate:modelValue":l[23]||(l[23]=o=>n.$emit("update:modelValue",o)),size:576},{default:a(()=>[e(Pe,{ref_key:"form",ref:G,model:m.value,disabled:t(ae),"label-width":"150px"},{default:a(()=>[e(Ve,{modelValue:R.value,"onUpdate:modelValue":l[20]||(l[20]=o=>R.value=o)},{default:a(()=>[e(oe,{label:n.$t("role.permission"),name:"permission"},{default:a(()=>[e(g,{title:n.$t("role.permission.tooltip"),type:"info",closable:!1,"show-icon":""},null,8,["title"]),e(A,{prop:"allPermission"},{label:a(()=>[e(J,{message:"role.allPermission"})]),default:a(()=>[e(V,{modelValue:m.value.allPermission,"onUpdate:modelValue":l[0]||(l[0]=o=>m.value.allPermission=o)},null,8,["modelValue"])]),_:1}),m.value.allPermission?X("",!0):(v(),L(F,{key:0},[N("div",sl,[e(H,{modelValue:W.value,"onUpdate:modelValue":l[1]||(l[1]=o=>W.value=o),onChange:l[2]||(l[2]=o=>U(o,_.value,t(E))),disabled:!1,label:n.$t("expand/collapse")},null,8,["modelValue","label"]),e(H,{modelValue:$.value,"onUpdate:modelValue":l[3]||(l[3]=o=>$.value=o),onChange:l[4]||(l[4]=o=>{I(o,_.value,t(E)),Y()}),label:n.$t("checkAll/uncheckAll")},null,8,["modelValue","label"])]),e(se,{ref_key:"permissionTree",ref:_,data:t(E),"node-key":"key",onCheck:l[5]||(l[5]=o=>Y()),class:"border rounded","default-expand-all":"","show-checkbox":""},null,8,["data"])],64))]),_:1},8,["label"]),t(c).epRank>=1||t(c).epDisplay?(v(),q(oe,{key:0,label:n.$t("role.grantPermission"),name:"grantPermission"},{default:a(()=>[t(c).epRank>=1?(v(),L(F,{key:0},[e(g,{title:n.$t("role.grantPermission.tooltip"),type:"info",closable:!1,"show-icon":""},null,8,["title"]),e(A,{prop:"allGrantPermission",class:"mt-3"},{label:a(()=>[e(J,{message:"role.allGrantPermission"})]),default:a(()=>[e(V,{modelValue:m.value.allGrantPermission,"onUpdate:modelValue":l[6]||(l[6]=o=>m.value.allGrantPermission=o)},null,8,["modelValue"])]),_:1}),m.value.allGrantPermission?X("",!0):(v(),L(F,{key:0},[N("div",tl,[e(H,{modelValue:p.value,"onUpdate:modelValue":l[7]||(l[7]=o=>p.value=o),onChange:l[8]||(l[8]=o=>U(o,w.value,t(E))),label:n.$t("expand/collapse")},null,8,["modelValue","label"]),e(H,{modelValue:j.value,"onUpdate:modelValue":l[9]||(l[9]=o=>j.value=o),onChange:l[10]||(l[10]=o=>{I(o,w.value,t(E)),Z()}),label:n.$t("checkAll/uncheckAll")},null,8,["modelValue","label"])]),e(se,{ref_key:"grantPermissionTree",ref:w,data:t(E),"node-key":"key",onCheck:l[11]||(l[11]=o=>Z()),class:"border rounded","default-expand-all":"","show-checkbox":""},null,8,["data"])],64))],64)):(v(),q(g,{key:1,type:"warning",closable:!1,"show-icon":!0},{title:a(()=>[N("span",{innerHTML:n.$t("error.enterprise.short")},null,8,nl)]),_:1}))]),_:1},8,["label"])):X("",!0),t(c).epRank>=1||t(c).epDisplay?(v(),q(oe,{key:1,label:n.$t("role.dataPermission"),name:"dataPermission"},{default:a(()=>[t(c).epRank>=1?(v(),L(F,{key:0},[e(A,{prop:"globalPermission",rules:{required:!0,message:()=>n.$t("v.required")}},{label:a(()=>[e(J,{message:"role.globalPermission",help:""})]),default:a(()=>[e(V,{modelValue:m.value.globalPermission,"onUpdate:modelValue":l[12]||(l[12]=o=>m.value.globalPermission=o),disabled:!t(c).globalPermission},null,8,["modelValue","disabled"])]),_:1},8,["rules"]),e(A,{prop:"dataScope",rules:[{required:!0,message:()=>n.$t("v.required")}]},{label:a(()=>[e(J,{message:"role.dataScope",help:""})]),default:a(()=>[e(ge,{modelValue:m.value.dataScope,"onUpdate:modelValue":l[13]||(l[13]=o=>m.value.dataScope=o)},{default:a(()=>[(v(),L(F,null,ne([1,2,3],o=>e(ke,{key:o,label:n.$t(`role.dataScope.${o}`),value:o},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["rules"])],64)):(v(),q(g,{key:1,type:"warning",closable:!1,"show-icon":!0},{title:a(()=>[N("span",{innerHTML:n.$t("error.enterprise.short")},null,8,rl)]),_:1}))]),_:1},8,["label"])):X("",!0),t(c).epRank>=1||t(c).epDisplay?(v(),q(oe,{key:2,label:n.$t("role.articlePermission"),name:"articlePermission"},{default:a(()=>[t(c).epRank>=1?(v(),L(F,{key:0},[e(A,{prop:"allArticlePermission"},{label:a(()=>[e(J,{message:"role.allArticlePermission",help:""})]),default:a(()=>[e(V,{modelValue:m.value.allArticlePermission,"onUpdate:modelValue":l[14]||(l[14]=o=>m.value.allArticlePermission=o)},null,8,["modelValue"])]),_:1}),m.value.allArticlePermission?X("",!0):(v(),L(F,{key:0},[N("div",il,[e(H,{modelValue:ee.value,"onUpdate:modelValue":l[15]||(l[15]=o=>ee.value=o),onChange:l[16]||(l[16]=o=>U(o,S.value,O.value,"id")),label:n.$t("expand/collapse")},null,8,["modelValue","label"]),e(H,{modelValue:le.value,"onUpdate:modelValue":l[17]||(l[17]=o=>le.value=o),onChange:l[18]||(l[18]=o=>{I(o,S.value,O.value,"id"),r()}),label:n.$t("checkAll/uncheckAll")},null,8,["modelValue","label"])]),e(se,{ref_key:"articlePermissionTree",ref:S,data:O.value,"node-key":"id",onCheck:l[19]||(l[19]=o=>r()),props:{label:"name"},class:"border rounded","default-expand-all":"","show-checkbox":""},null,8,["data"])],64))],64)):(v(),q(g,{key:1,type:"warning",closable:!1,"show-icon":!0},{title:a(()=>[N("span",{innerHTML:n.$t("error.enterprise.short")},null,8,ul)]),_:1}))]),_:1},8,["label"])):X("",!0)]),_:1},8,["modelValue"])]),_:1},8,["model","disabled"])]),footer:a(()=>[N("div",dl,[N("div",null,[e(_e,null,{default:a(()=>{var o;return[C(h((o=m.value)==null?void 0:o.name),1)]}),_:1})]),N("div",null,[e(ue,{onClick:l[21]||(l[21]=o=>n.$emit("update:modelValue",!1))},{default:a(()=>[C(h(n.$t("cancel")),1)]),_:1}),e(ue,{type:"primary",onClick:l[22]||(l[22]=o=>M()),loading:D.value,disabled:t(ae)},{default:a(()=>[C(h(n.$t("save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["title","model-value"])}}})),vl={class:"mb-3"},fl={name:"RoleList"},wl=re(x(K({},fl),{setup(P){const{t:y}=ve(),i=d({}),u=d(),b=d(),z=d([]),R=d([]),G=d(!1),T=d(!1),m=d(!1),D=d(),W=fe(()=>z.value.map(s=>s.id)),$=d(!1),_=async()=>{G.value=!0;try{z.value=await Oe(x(K({},Le(i.value)),{Q_OrderBy:u.value})),$.value=Object.values(i.value).filter(s=>s!==void 0&&s!=="").length>0||u.value!==void 0}finally{G.value=!1}};be(_);const p=s=>s.global&&!c.globalPermission||c.rank>s.rank,j=({column:s,prop:k,order:B})=>{var M;k?u.value=((M=s.sortBy)!=null?M:k)+(B==="descending"?"_desc":""):u.value=void 0,_()},w=()=>_(),ee=()=>{b.value.clearSort(),ze(i.value),u.value=void 0,_()},le=()=>{D.value=void 0,T.value=!0},S=s=>{D.value=s,T.value=!0},E=s=>{D.value=s,m.value=!0},O=async s=>{await $e(s),_(),ce.success(y("success"))},ae=async(s,k)=>{const B=Ee(s,z.value,k);await Qe(B.map(M=>M.id))};return(s,k)=>{const B=f("el-button"),M=f("el-popconfirm"),U=f("el-table-column"),I=f("el-tag"),Y=f("el-table"),Z=Be("loading");return v(),L("div",null,[N("div",vl,[e(t(Ke),{params:i.value,onSearch:w,onReset:ee},{default:a(()=>[e(t(pe),{label:s.$t("role.name"),name:"Q_Contains_name"},null,8,["label"]),e(t(pe),{label:s.$t("role.description"),name:"Q_Contains_description"},null,8,["label"])]),_:1},8,["params"])]),N("div",null,[e(B,{type:"primary",icon:t(Ie),onClick:le},{default:a(()=>[C(h(s.$t("add")),1)]),_:1},8,["icon"]),e(M,{title:s.$t("confirmDelete"),onConfirm:k[0]||(k[0]=r=>O(R.value.map(Q=>Q.id)))},{reference:a(()=>[e(B,{disabled:R.value.length<=0,icon:t(Se)},{default:a(()=>[C(h(s.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(Xe,{class:"ml-2",disabled:R.value.length<=0||$.value||t(te)("role:update"),onMove:k[1]||(k[1]=r=>ae(R.value,r))},null,8,["disabled"]),e(t(Je),{name:"role",class:"ml-2"})]),Ne((v(),q(Y,{ref_key:"table",ref:b,data:z.value,onSelectionChange:k[2]||(k[2]=r=>R.value=r),onRowDblclick:k[3]||(k[3]=r=>S(r.id)),onSortChange:j,class:"mt-3 shadow bg-white"},{default:a(()=>[e(t(We),{name:"role"},{default:a(()=>[e(U,{type:"selection",selectable:r=>!p(r),width:"50"},null,8,["selectable"]),e(U,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(U,{property:"name",label:s.$t("role.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(U,{property:"description",label:s.$t("role.description"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(U,{property:"rank",label:s.$t("role.rank"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(U,{property:"globalPermission",label:s.$t("role.globalPermission"),sortable:"custom"},{default:a(({row:r})=>[e(I,{type:r.globalPermission?"success":"info",size:"small"},{default:a(()=>[C(h(s.$t(r.globalPermission?"yes":"no")),1)]),_:2},1032,["type"])]),_:1},8,["label"]),e(U,{property:"type",label:s.$t("role.type"),sortable:"custom"},{default:a(({row:r})=>[r.type===1?(v(),q(I,{key:0,size:"small"},{default:a(()=>[C(h(s.$t(`role.type.${r.type}`)),1)]),_:2},1024)):r.type===2?(v(),q(I,{key:1,type:"warning",size:"small"},{default:a(()=>[C(h(s.$t(`role.type.${r.type}`)),1)]),_:2},1024)):r.type===3?(v(),q(I,{key:2,type:"success",size:"small"},{default:a(()=>[C(h(s.$t(`role.type.${r.type}`)),1)]),_:2},1024)):(v(),q(I,{key:3,type:"info",size:"small"},{default:a(()=>[C(h(s.$t(`role.type.${r.type}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(U,{property:"scope",label:s.$t("role.scope"),sortable:"custom"},{default:a(({row:r})=>[r.scope===2?(v(),q(I,{key:0,type:"success",size:"small"},{default:a(()=>[C(h(s.$t(`role.scope.${r.scope}`)),1)]),_:2},1024)):(v(),q(I,{key:1,type:"info",size:"small"},{default:a(()=>[C(h(s.$t(`role.scope.${r.scope}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(U,{label:s.$t("table.action"),width:"160"},{default:a(({row:r})=>[e(B,{type:"primary",onClick:Q=>S(r.id),disabled:t(te)("role:update"),size:"small",link:""},{default:a(()=>[C(h(s.$t("edit")),1)]),_:2},1032,["onClick","disabled"]),e(B,{type:"primary",onClick:Q=>E(r.id),disabled:t(te)("role:updatePermission"),size:"small",link:""},{default:a(()=>[C(h(s.$t("permissionSettings")),1)]),_:2},1032,["onClick","disabled"]),e(M,{title:s.$t("confirmDelete"),onConfirm:Q=>O([r.id])},{reference:a(()=>[e(B,{type:"primary",size:"small",disabled:p(r),link:""},{default:a(()=>[C(h(s.$t("delete")),1)]),_:2},1032,["disabled"])]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[Z,G.value]]),e(ol,{modelValue:T.value,"onUpdate:modelValue":k[4]||(k[4]=r=>T.value=r),beanId:D.value,beanIds:t(W),onFinished:_},null,8,["modelValue","beanId","beanIds"]),e(pl,{modelValue:m.value,"onUpdate:modelValue":k[5]||(k[5]=r=>m.value=r),beanId:D.value,onFinished:_},null,8,["modelValue","beanId"])])}}}));export{wl as default};
