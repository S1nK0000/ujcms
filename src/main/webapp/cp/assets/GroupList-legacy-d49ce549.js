System.register(["./index-legacy-788fa28c.js","./user-legacy-b3313138.js","./QueryItem.vue_vue_type_script_setup_true_lang-legacy-83f7e729.js","./ListMove.vue_vue_type_script_setup_true_lang-legacy-89a13a06.js","./DialogForm.vue_vue_type_script_setup_true_lang-legacy-13f67a6e.js","./LabelTip.vue_vue_type_script_setup_true_lang-legacy-5b0fbae8.js","./tree-legacy-2fd3b3b5.js","./content-legacy-d410d622.js"],(function(e,l){"use strict";var a,t,u,s,o,d,n,i,r,c,p,m,v,b,y,f,g,_,V,h,k,$,w,C,I,A,P,B,U,j,q,x,D,F,S,z,R,E,N,Q,G,L,H,M,O,T,K;return{setters:[e=>{a=e.d,t=e.r,u=e.a,s=e.c,o=e.e,d=e.w,n=e.i,i=e.h,r=e.I,c=e.a8,p=e.a7,m=e.p,v=e.u,b=e.X,y=e.v,f=e.o,g=e.j,_=e.g,V=e.k,h=e.t,k=e.V,$=e.E,w=e.b,C=e.f,I=e.aD,A=e.aI,P=e.cw,B=e.as,U=e.a4,j=e.a1},e=>{q=e.C,x=e.D,D=e.E,F=e.F,S=e.G,z=e.H,R=e.f,E=e.I},e=>{N=e.a,Q=e._,G=e.b,L=e.c},e=>{H=e._},e=>{M=e._},e=>{O=e._},e=>{T=e.t},e=>{K=e.f}],execute:function(){const l=a({name:"GroupForm",props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0}},emits:{"update:modelValue":null,finished:null},setup(e){const l=t(),a=t({});return(t,m)=>{const v=u("el-input"),b=u("el-form-item"),y=u("el-switch"),f=u("el-option"),g=u("el-select");return s(),o(M,{name:t.$t("menu.user.group"),queryBean:n(q),createBean:n(x),updateBean:n(D),deleteBean:n(F),beanId:e.beanId,beanIds:e.beanIds,focus:l.value,initValues:()=>({type:2,allAccessPermission:!0}),toValues:e=>({...e}),disableDelete:e=>e.id<=10,perms:"group",values:a.value,"onUpdate:values":m[4]||(m[4]=e=>a.value=e),"model-value":e.modelValue,"onUpdate:modelValue":m[5]||(m[5]=e=>t.$emit("update:modelValue",e)),onFinished:m[6]||(m[6]=e=>t.$emit("finished"))},{default:d((({})=>[i(b,{prop:"name",label:t.$t("group.name"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:d((()=>[i(v,{modelValue:a.value.name,"onUpdate:modelValue":m[0]||(m[0]=e=>a.value.name=e),ref_key:"focus",ref:l,maxlength:"50"},null,8,["modelValue"])])),_:1},8,["label","rules"]),i(b,{prop:"description",label:t.$t("group.description")},{default:d((()=>[i(v,{modelValue:a.value.description,"onUpdate:modelValue":m[1]||(m[1]=e=>a.value.description=e),maxlength:"255"},null,8,["modelValue"])])),_:1},8,["label"]),i(b,{prop:"allAccessPermission"},{label:d((()=>[i(O,{message:"group.allAccessPermission"})])),default:d((()=>[i(y,{modelValue:a.value.allAccessPermission,"onUpdate:modelValue":m[2]||(m[2]=e=>a.value.allAccessPermission=e)},null,8,["modelValue"])])),_:1}),i(b,{prop:"type",label:t.$t("group.type"),rules:{required:!0,message:()=>t.$t("v.required")}},{default:d((()=>[i(g,{modelValue:a.value.type,"onUpdate:modelValue":m[3]||(m[3]=e=>a.value.type=e),disabled:1===a.value.type},{default:d((()=>[(s(),r(p,null,c([1,2],(e=>i(f,{key:e,disabled:1===e,label:t.$t(`group.type.${e}`),value:e},null,8,["disabled","label","value"]))),64))])),_:1},8,["modelValue","disabled"])])),_:1},8,["label","rules"])])),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","disableDelete","values","model-value"])}}}),X={class:"border-t"},J={class:"flex justify-between items-center"},W=a({name:"UserPermissionForm",props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number}},emits:{"update:modelValue":null,finished:null},setup(e,{emit:l}){const a=e,{beanId:c,modelValue:w}=m(a),{t:C}=v(),I=t(),A=t({}),P=t({}),B=t(!1),U=t(!0),j=t(!1),x=t(),D=t([]);t([]);const F=b((()=>k.rank>A.value.rank));y(w,(()=>{w.value&&((async()=>{null!=c?.value&&(A.value=await q(c.value),P.value={...A.value})})(),(async()=>{null!=c?.value&&(await z(c.value)).forEach((e=>{x.value?.setChecked(e,!0,!1)}))})())})),f((()=>{(async()=>{D.value=T(await K())})()}));const R=(e,l,a,t)=>{a.forEach((a=>{a.children&&(l.getNode(a[t??"key"]).expanded=e,R(e,l,a.children,t))}))},E=()=>{null!=x.value&&(P.value.accessPermissions=[...x.value.getCheckedNodes(),...x.value.getHalfCheckedNodes()].map((e=>e.id)))};return(a,t)=>{const c=u("el-switch"),m=u("el-form-item"),v=u("el-checkbox"),b=u("el-tree"),y=u("el-form"),f=u("el-tag"),k=u("el-button"),w=u("el-drawer");return s(),o(w,{title:a.$t("permissionSettings"),"model-value":e.modelValue,"onUpdate:modelValue":t[8]||(t[8]=e=>a.$emit("update:modelValue",e)),size:414},{default:d((()=>[i(y,{ref_key:"form",ref:I,model:P.value,disabled:n(F),"label-width":"150px"},{default:d((()=>[i(m,{prop:"allAccessPermission"},{label:d((()=>[i(O,{message:"group.allAccessPermission",help:""})])),default:d((()=>[i(c,{modelValue:P.value.allAccessPermission,"onUpdate:modelValue":t[0]||(t[0]=e=>P.value.allAccessPermission=e)},null,8,["modelValue"])])),_:1}),P.value.allAccessPermission?_("",!0):(s(),r(p,{key:0},[g("div",X,[i(v,{modelValue:U.value,"onUpdate:modelValue":t[1]||(t[1]=e=>U.value=e),onChange:t[2]||(t[2]=e=>R(e,x.value,D.value,"id")),label:a.$t("expand/collapse")},null,8,["modelValue","label"]),i(v,{modelValue:j.value,"onUpdate:modelValue":t[3]||(t[3]=e=>j.value=e),onChange:t[4]||(t[4]=e=>{((e,l,a,t)=>{l.setCheckedKeys(e?a.map((e=>e[t??"key"])):[])})(e,x.value,D.value,"id"),E()}),label:a.$t("checkAll/uncheckAll")},null,8,["modelValue","label"])]),i(b,{ref_key:"accessPermissionTree",ref:x,data:D.value,"node-key":"id",onCheck:t[5]||(t[5]=e=>E()),props:{label:"name"},class:"border rounded","default-expand-all":"","show-checkbox":""},null,8,["data"])],64))])),_:1},8,["model","disabled"])])),footer:d((()=>[g("div",J,[g("div",null,[i(f,null,{default:d((()=>[V(h(P.value?.name),1)])),_:1})]),g("div",null,[i(k,{onClick:t[6]||(t[6]=e=>a.$emit("update:modelValue",!1))},{default:d((()=>[V(h(a.$t("cancel")),1)])),_:1}),i(k,{type:"primary",onClick:t[7]||(t[7]=e=>{I.value.validate((async e=>{if(e){B.value=!0;try{await S(P.value),l("finished"),l("update:modelValue",!1),$.success(C("success"))}finally{B.value=!1}}}))}),loading:B.value,disabled:n(F)},{default:d((()=>[V(h(a.$t("save")),1)])),_:1},8,["loading","disabled"])])])])),_:1},8,["title","model-value"])}}}),Y={class:"mb-3"},Z={class:"app-block mt-3"};e("default",a({name:"GroupList",setup(e){const{t:a}=v(),c=t({}),p=t(),m=t(),y=t([]),q=t([]),x=t(!1),D=t(!1),S=t(!1),z=t(),M=b((()=>y.value.map((e=>e.id)))),O=t(!1),T=async()=>{x.value=!0;try{y.value=await R({...I(c.value),Q_OrderBy:p.value}),O.value=Object.values(c.value).filter((e=>void 0!==e&&""!==e)).length>0||void 0!==p.value}finally{x.value=!1}};f(T);const K=({column:e,prop:l,order:a})=>{p.value=l?(e.sortBy??l)+("descending"===a?"_desc":""):void 0,T()},X=()=>T(),J=()=>{m.value.clearSort(),A(c.value),p.value=void 0,T()},ee=()=>{z.value=void 0,D.value=!0},le=e=>{z.value=e,D.value=!0},ae=e=>e>10,te=async e=>{const l=e.filter((e=>ae(e)));l.length>0&&(await F(l),T(),$.success(a("success")))};return(e,a)=>{const t=u("el-button"),p=u("el-popconfirm"),v=u("el-table-column"),b=u("el-tag"),f=u("el-table"),$=w("loading");return s(),r("div",null,[g("div",Y,[i(n(Q),{params:c.value,onSearch:X,onReset:J},{default:d((()=>[i(n(N),{label:e.$t("group.name"),name:"Q_Contains_name"},null,8,["label"]),i(n(N),{label:e.$t("group.description"),name:"Q_Contains_description"},null,8,["label"])])),_:1},8,["params"])]),g("div",null,[i(t,{type:"primary",disabled:n(B)("group:create"),icon:n(U),onClick:ee},{default:d((()=>[V(h(e.$t("add")),1)])),_:1},8,["disabled","icon"]),i(p,{title:e.$t("confirmDelete"),onConfirm:a[0]||(a[0]=e=>te(q.value.map((e=>e.id))))},{reference:d((()=>[i(t,{disabled:q.value.filter((e=>ae(e.id))).length<=0||n(B)("group:delete"),icon:n(j)},{default:d((()=>[V(h(e.$t("delete")),1)])),_:1},8,["disabled","icon"])])),_:1},8,["title"]),i(H,{class:"ml-2",disabled:q.value.length<=0||O.value||n(B)("org:update"),onMove:a[1]||(a[1]=e=>(async(e,l)=>{const a=P(e,y.value,l);await E(a.map((e=>e.id)))})(q.value,e))},null,8,["disabled"]),i(n(G),{name:"group",class:"ml-2"})]),g("div",Z,[C((s(),o(f,{ref_key:"table",ref:m,data:y.value,onSelectionChange:a[2]||(a[2]=e=>q.value=e),onRowDblclick:a[3]||(a[3]=e=>le(e.id)),onSortChange:K},{default:d((()=>[i(n(L),{name:"group"},{default:d((()=>[i(v,{type:"selection",width:"50"}),i(v,{property:"id",label:"ID",width:"64",sortable:"custom"}),i(v,{property:"name",label:e.$t("group.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),i(v,{property:"description",label:e.$t("group.description"),"min-width":"150",sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),i(v,{property:"allAccessPermission",label:e.$t("group.allAccessPermission"),sortable:"custom"},{default:d((({row:l})=>[i(b,{type:l.allAccessPermission?"success":"info",size:"small"},{default:d((()=>[V(h(e.$t(l.allAccessPermission?"yes":"no")),1)])),_:2},1032,["type"])])),_:1},8,["label"]),i(v,{property:"type",label:e.$t("group.type"),sortable:"custom","show-overflow-tooltip":"",formatter:l=>e.$t(`group.type.${l.type}`)},null,8,["label","formatter"]),i(v,{label:e.$t("table.action")},{default:d((({row:l})=>[i(t,{type:"primary",disabled:n(B)("group:update"),onClick:e=>le(l.id),size:"small",link:""},{default:d((()=>[V(h(e.$t("edit")),1)])),_:2},1032,["disabled","onClick"]),n(k).epRank>0||n(k).epDisplay?(s(),o(t,{key:0,type:"primary",onClick:e=>{return a=l.id,z.value=a,void(S.value=!0);var a},disabled:n(B)("group:updatePermission")||n(k).epRank<=0,title:n(k).epRank<=0?e.$t("error.enterprise.short"):void 0,size:"small",link:""},{default:d((()=>[V(h(e.$t("permissionSettings")),1)])),_:2},1032,["onClick","disabled","title"])):_("",!0),i(p,{title:e.$t("confirmDelete"),onConfirm:e=>te([l.id])},{reference:d((()=>[i(t,{type:"primary",disabled:!ae(l.id)||n(B)("group:delete"),size:"small",link:""},{default:d((()=>[V(h(e.$t("delete")),1)])),_:2},1032,["disabled"])])),_:2},1032,["title","onConfirm"])])),_:1},8,["label"])])),_:1})])),_:1},8,["data"])),[[$,x.value]])]),i(l,{modelValue:D.value,"onUpdate:modelValue":a[4]||(a[4]=e=>D.value=e),beanId:z.value,beanIds:n(M),onFinished:T},null,8,["modelValue","beanId","beanIds"]),i(W,{modelValue:S.value,"onUpdate:modelValue":a[5]||(a[5]=e=>S.value=e),beanId:z.value,onFinished:T},null,8,["modelValue","beanId"])])}}}))}}}));
