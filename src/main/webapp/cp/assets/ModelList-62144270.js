import{d as Q,r as y,a as f,c as r,e as U,w as a,i as t,h as e,I as M,a8 as N,a7 as C,k as F,t as I,p as te,u as de,v as pe,g as S,j,l as re,E as oe,H as ne,Z as ie,at as be,_ as ve,X as ce,o as ye,b as Ve,f as ge,aD as _e,aI as $e,cw as ke,as as J,a4 as Ue,a1 as he}from"./index-6c60ffba.js";import{N as ue,O as Te,P as Y,Q as fe,j as Se,q as Me,R as qe}from"./config-d89d22f7.js";import{a as we,_ as Ce,b as Ie,c as Fe}from"./QueryItem.vue_vue_type_script_setup_true_lang-b16aac13.js";import{_ as De}from"./ListMove.vue_vue_type_script_setup_true_lang-abbfedd1.js";import{_ as He}from"./DialogForm.vue_vue_type_script_setup_true_lang-e536e4f0.js";import{g as me,m as G}from"./data-f71c439d.js";import{d as se}from"./BaseUpload.vue_vue_type_style_index_0_scoped_5165bd65_lang-d72bc660.js";import{_ as Be}from"./FieldItem.vue_vue_type_script_setup_true_lang-caaba857.js";import{w as Le}from"./content-6884eca6.js";import{_ as ae}from"./LabelTip.vue_vue_type_script_setup_true_lang-b8070de6.js";import"./BaseUpload-3ff5bbd7.js";const ze={name:"ModelForm"},Ee=Q({...ze,props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0},modelType:{type:String,required:!0}},emits:{"update:modelValue":null,finished:null},setup(H){const W=y(),l=y({});return($,c)=>{const k=f("el-input"),u=f("el-form-item"),o=f("el-radio"),q=f("el-radio-group"),s=f("el-option"),V=f("el-select");return r(),U(He,{name:$.$t("menu.config.model"),queryBean:t(ue),createBean:t(Te),updateBean:t(Y),deleteBean:t(fe),beanId:H.beanId,beanIds:H.beanIds,focus:W.value,initValues:()=>({type:H.modelType,scope:0}),toValues:b=>({...b}),disableDelete:b=>b.id<=10,perms:"model",values:l.value,"onUpdate:values":c[3]||(c[3]=b=>l.value=b),"model-value":H.modelValue,"onUpdate:modelValue":c[4]||(c[4]=b=>$.$emit("update:modelValue",b)),onFinished:c[5]||(c[5]=b=>$.$emit("finished"))},{default:a(({})=>[e(u,{prop:"name",label:$.$t("model.name"),rules:{required:!0,message:()=>$.$t("v.required")}},{default:a(()=>[e(k,{modelValue:l.value.name,"onUpdate:modelValue":c[0]||(c[0]=b=>l.value.name=b),ref_key:"focus",ref:W,maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(u,{prop:"scope",label:$.$t("model.scope"),rules:{required:!0,message:()=>$.$t("v.required")}},{default:a(()=>[e(q,{modelValue:l.value.scope,"onUpdate:modelValue":c[1]||(c[1]=b=>l.value.scope=b),disabled:l.value.id<10},{default:a(()=>[(r(),M(C,null,N([0,2],b=>e(o,{key:b,label:b},{default:a(()=>[F(I($.$t(`model.scope.${b}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label","rules"]),e(u,{prop:"type",label:$.$t("model.type")},{default:a(()=>[e(V,{modelValue:l.value.type,"onUpdate:modelValue":c[2]||(c[2]=b=>l.value.type=b),disabled:""},{default:a(()=>[e(s,{value:H.modelType,label:$.$t(`model.type.${H.modelType}`)},null,8,["value","label"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","disableDelete","values","model-value"])}}}),Oe={class:"mt-3"},Ne={name:"ModelSystemFields"},We=Q({...Ne,props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0}},emits:{"update:modelValue":null},setup(H,{emit:W}){const l=H,{beanId:$,modelValue:c}=te(l),{t:k}=de(),u=y({}),o=y(!1),q=y([]),s=y([]);pe(c,async()=>{var m;if(c.value&&$.value){u.value=await ue($.value);const w=me()[u.value.type];q.value=G(w.mains,u.value.mains,u.value.type),((m=w.asides)==null?void 0:m.length)>0&&(s.value=G(w.asides,u.value.asides,u.value.type))}});const V=async()=>{o.value=!0;try{await Y({...u.value,mains:JSON.stringify(q.value),asides:JSON.stringify(s.value)}),oe.success(k("success"))}finally{o.value=!1,W("update:modelValue",!1)}},b=()=>{var w;const m=me()[u.value.type];q.value=G(m.mains,null,u.value.type),((w=m.asides)==null?void 0:w.length)>0&&(s.value=G(m.asides,null,u.value.type))};return(m,w)=>{const D=f("el-table-column"),g=f("el-input"),E=f("el-switch"),d=f("el-option"),B=f("el-select"),R=f("el-checkbox"),P=f("el-table"),h=f("el-button"),T=f("el-form"),L=f("el-dialog");return r(),U(L,{title:m.$t("model.fun.systemFields"),"model-value":H.modelValue,"onUpdate:modelValue":w[0]||(w[0]=i=>m.$emit("update:modelValue",i)),top:"5vh",width:"1024px"},{default:a(()=>[e(T,null,{default:a(()=>[e(P,{data:q.value},{default:a(()=>[e(D,{prop:"code",label:m.$t("model.field.code"),"min-width":"110"},null,8,["label"]),e(D,{prop:"name",label:m.$t("model.field.name"),"min-width":"140"},{default:a(({row:i})=>[e(g,{modelValue:i.name,"onUpdate:modelValue":p=>i.name=p,placeholder:m.$t(i.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(D,{prop:"show",label:m.$t("model.field.show")},{default:a(({row:i})=>[e(E,{modelValue:i.show,"onUpdate:modelValue":p=>i.show=p,disabled:i.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(D,{prop:"double",label:m.$t("model.field.double")},{default:a(({row:i})=>[e(E,{modelValue:i.double,"onUpdate:modelValue":p=>i.double=p},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),e(D,{prop:"required",label:m.$t("model.field.required")},{default:a(({row:i})=>[e(E,{modelValue:i.required,"onUpdate:modelValue":p=>i.required=p,disabled:i.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(D,{label:m.$t("model.field.attribute"),"min-width":"180"},{default:a(({row:i})=>[i.type==="image"?(r(),M(C,{key:0},[e(g,{modelValue:i.imageHeight,"onUpdate:modelValue":p=>i.imageHeight=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(g,{modelValue:i.imageWidth,"onUpdate:modelValue":p=>i.imageWidth=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(B,{modelValue:i.imageMode,"onUpdate:modelValue":p=>i.imageMode=p,placeholder:m.$t("model.field.imageMode"),class:"w-full"},{default:a(()=>[(r(),M(C,null,N(["manual","cut","resize","none"],p=>e(d,{key:p,value:p,label:m.$t(`model.field.imageMode.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):i.type==="imageList"?(r(),M(C,{key:1},[e(g,{modelValue:i.imageMaxHeight,"onUpdate:modelValue":p=>i.imageMaxHeight=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageMaxHeight")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(g,{modelValue:i.imageMaxWidth,"onUpdate:modelValue":p=>i.imageMaxWidth=p,modelModifiers:{number:!0}},{prepend:a(()=>[F(I(m.$t("model.field.imageMaxWidth")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(B,{modelValue:i.imageListType,"onUpdate:modelValue":p=>i.imageListType=p,placeholder:m.$t("model.field.imageListType"),class:"w-full"},{default:a(()=>[(r(),M(C,null,N(["pictureCard","picture"],p=>e(d,{key:p,value:p,label:m.$t(`model.field.imageListType.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])],64)):i.type==="editor"?(r(),M(C,{key:2},[e(B,{modelValue:i.editorType,"onUpdate:modelValue":p=>i.editorType=p,placeholder:m.$t("model.field.editorType"),class:"w-full"},{default:a(()=>[(r(),M(C,null,N([1,2],p=>e(d,{key:p,value:p,label:m.$t(`model.field.editorType.${p}`)},null,8,["value","label"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),e(R,{modelValue:i.editorSwitch,"onUpdate:modelValue":p=>i.editorSwitch=p},{default:a(()=>[F(I(m.$t("model.field.editorSwitch")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):S("",!0)]),_:1},8,["label"])]),_:1},8,["data"]),s.value.length>0?(r(),U(P,{key:0,data:s.value,class:"mt-5"},{default:a(()=>[e(D,{prop:"code",label:m.$t("model.field.code"),"min-width":"100"},null,8,["label"]),e(D,{prop:"name",label:m.$t("model.field.name"),"min-width":"120"},{default:a(({row:i})=>[e(g,{modelValue:i.name,"onUpdate:modelValue":p=>i.name=p,placeholder:m.$t(i.label),class:"w-11/12"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),e(D,{prop:"show",label:m.$t("model.field.show")},{default:a(({row:i})=>[e(E,{modelValue:i.show,"onUpdate:modelValue":p=>i.show=p,disabled:i.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),e(D,{prop:"required",label:m.$t("model.field.required")},{default:a(({row:i})=>[e(E,{modelValue:i.required,"onUpdate:modelValue":p=>i.required=p,disabled:i.must},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["data"])):S("",!0),j("div",Oe,[e(h,{loading:o.value,onClick:re(V,["prevent"]),type:"primary","native-type":"submit"},{default:a(()=>[F(I(m.$t("save")),1)]),_:1},8,["loading","onClick"]),e(h,{onClick:b},{default:a(()=>[F(I(m.$t("restoreInitialSettings")),1)]),_:1})])]),_:1})]),_:1},8,["title","model-value"])}}}),Ae=Q({__name:"FieldAttribute",props:{selected:{type:Object,required:!0}},setup(H){const W=H,{selected:l}=te(W),$=y([]),c=y([]);ne(async()=>{l.value.type==="date"&&!l.value.dateType&&(l.value.dateType="date"),l.value.type==="switch"&&!l.value.inactiveValue&&(l.value.inactiveValue="0"),l.value.type==="switch"&&!l.value.activeValue&&(l.value.activeValue="1"),["radio","checkbox"].includes(l.value.type)&&!l.value.checkStyle&&(l.value.checkStyle="default"),["checkbox","multipleSelect"].includes(l.value.type)&&!l.value.defaultValue&&(l.value.defaultValue=[]),["checkbox","multipleSelect"].includes(l.value.type)&&(l.value.multiple=!0),["radio","checkbox","select","multipleSelect"].includes(l.value.type)&&($.value=await Se())}),ne(async()=>{l.value.dictTypeId!=null&&(c.value=await Le({typeId:l.value.dictTypeId}))});const k=async()=>{l.value.defaultValue=l.value.multiple?[]:void 0,l.value.defaultValueKey=l.value.multiple?[]:void 0};return(u,o)=>{const q=f("el-input"),s=f("el-form-item"),V=f("el-switch"),b=f("el-input-number"),m=f("el-option"),w=f("el-select"),D=f("el-color-picker"),g=f("el-radio-button"),E=f("el-radio-group");return r(),M(C,null,[e(s,{prop:"code",label:u.$t("model.field.code"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(q,{modelValue:t(l).code,"onUpdate:modelValue":o[0]||(o[0]=d=>t(l).code=d),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(s,{prop:"name",label:u.$t("model.field.name"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(q,{modelValue:t(l).name,"onUpdate:modelValue":o[1]||(o[1]=d=>t(l).name=d),maxlength:"50"},null,8,["modelValue"])]),_:1},8,["label","rules"]),e(s,{prop:"double",label:u.$t("model.field.double")},{default:a(()=>[e(V,{modelValue:t(l).double,"onUpdate:modelValue":o[2]||(o[2]=d=>t(l).double=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"required",label:u.$t("model.field.required")},{default:a(()=>[e(V,{modelValue:t(l).required,"onUpdate:modelValue":o[3]||(o[3]=d=>t(l).required=d)},null,8,["modelValue"])]),_:1},8,["label"]),["text","textarea","number","select","multipleSelect","videoUpload","audioUpload","fileUpload","tinyEditor"].includes(t(l).type)?(r(),U(s,{key:0,prop:"placeholder",label:u.$t("model.field.placeholder")},{default:a(()=>[e(q,{modelValue:t(l).placeholder,"onUpdate:modelValue":o[4]||(o[4]=d=>t(l).placeholder=d),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["text","textarea"].includes(t(l).type)?(r(),M(C,{key:1},[e(s,{prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(q,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[5]||(o[5]=d=>t(l).defaultValue=d),maxlength:"100"},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"minlength",label:u.$t("model.field.minlength")},{default:a(()=>[e(b,{modelValue:t(l).minlength,"onUpdate:modelValue":o[6]||(o[6]=d=>t(l).minlength=d),min:1},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"maxlength",label:u.$t("model.field.maxlength")},{default:a(()=>[e(b,{modelValue:t(l).maxlength,"onUpdate:modelValue":o[7]||(o[7]=d=>t(l).maxlength=d),min:1},null,8,["modelValue"])]),_:1},8,["label"])],64)):S("",!0),["textarea"].includes(t(l).type)?(r(),U(s,{key:2,prop:"rows",label:u.$t("model.field.rows")},{default:a(()=>[e(b,{modelValue:t(l).rows,"onUpdate:modelValue":o[8]||(o[8]=d=>t(l).rows=d)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["number","slider"].includes(t(l).type)?(r(),M(C,{key:3},[e(s,{prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(b,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[9]||(o[9]=d=>t(l).defaultValue=d),min:t(l).min,max:t(l).max},null,8,["modelValue","min","max"])]),_:1},8,["label"]),e(s,{prop:"min",label:u.$t("model.field.min")},{default:a(()=>[e(b,{modelValue:t(l).min,"onUpdate:modelValue":o[10]||(o[10]=d=>t(l).min=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"max",label:u.$t("model.field.max")},{default:a(()=>[e(b,{modelValue:t(l).max,"onUpdate:modelValue":o[11]||(o[11]=d=>t(l).max=d)},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"step",label:u.$t("model.field.step")},{default:a(()=>[e(b,{modelValue:t(l).step,"onUpdate:modelValue":o[12]||(o[12]=d=>t(l).step=d)},null,8,["modelValue"])]),_:1},8,["label"])],64)):S("",!0),["number"].includes(t(l).type)?(r(),U(s,{key:4,prop:"precision",label:u.$t("model.field.precision")},{default:a(()=>[e(b,{modelValue:t(l).precision,"onUpdate:modelValue":o[13]||(o[13]=d=>t(l).precision=d),precision:0,min:0,max:4},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["slider"].includes(t(l).type)?(r(),U(s,{key:5,prop:"showInput",label:u.$t("model.field.showInput")},{default:a(()=>[e(V,{modelValue:t(l).showInput,"onUpdate:modelValue":o[14]||(o[14]=d=>t(l).showInput=d)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["date"].includes(t(l).type)?(r(),U(s,{key:6,prop:"dateType",label:u.$t("model.field.dateType")},{default:a(()=>[e(w,{modelValue:t(l).dateType,"onUpdate:modelValue":o[15]||(o[15]=d=>t(l).dateType=d)},{default:a(()=>[(r(),M(C,null,N(["date","datetime"],d=>e(m,{key:d,label:u.$t(`model.field.dateType.${d}`),value:d},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):S("",!0),["color"].includes(t(l).type)?(r(),U(s,{key:7,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(D,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[16]||(o[16]=d=>t(l).defaultValue=d)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["switch"].includes(t(l).type)?(r(),U(s,{key:8,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(V,{modelValue:t(l).defaultValue,"onUpdate:modelValue":o[17]||(o[17]=d=>t(l).defaultValue=d),"active-value":t(l).activeValue,"inactive-value":t(l).inactiveValue},null,8,["modelValue","active-value","inactive-value"])]),_:1},8,["label"])):S("",!0),["radio","checkbox"].includes(t(l).type)?(r(),U(s,{key:9,prop:"checkStyle",label:u.$t("model.field.checkStyle")},{default:a(()=>[e(E,{modelValue:t(l).checkStyle,"onUpdate:modelValue":o[18]||(o[18]=d=>t(l).checkStyle=d)},{default:a(()=>[(r(),M(C,null,N(["default","button"],d=>e(g,{key:d,label:d},{default:a(()=>[F(I(u.$t(`model.field.checkStyle.${d}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])):S("",!0),["select","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:10,prop:"clearable",label:u.$t("model.field.clearable")},{default:a(()=>[e(V,{modelValue:t(l).clearable,"onUpdate:modelValue":o[19]||(o[19]=d=>t(l).clearable=d)},null,8,["modelValue"])]),_:1},8,["label"])):S("",!0),["radio","checkbox","select","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:11,prop:"dictTypeId",label:u.$t("model.field.dictType"),rules:{required:!0,message:()=>u.$t("v.required")}},{default:a(()=>[e(w,{modelValue:t(l).dictTypeId,"onUpdate:modelValue":o[20]||(o[20]=d=>t(l).dictTypeId=d),onChange:o[21]||(o[21]=d=>k()),class:"w-full"},{default:a(()=>[(r(!0),M(C,null,N($.value,d=>(r(),U(m,{key:d.id,value:d.id,label:`${d.name}(${d.alias})`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label","rules"])):S("",!0),["radio","select"].includes(t(l).type)?(r(),U(s,{key:12,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(w,{modelValue:t(l).defaultValueKey,"onUpdate:modelValue":o[22]||(o[22]=d=>t(l).defaultValueKey=d),onChange:o[23]||(o[23]=d=>{var B;return t(l).defaultValue=(B=c.value.find(R=>R.value===d))==null?void 0:B.name}),clearable:"",class:"w-full"},{default:a(()=>[(r(!0),M(C,null,N(c.value,d=>(r(),U(m,{key:d.id,value:d.value,label:d.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):S("",!0),["checkbox","multipleSelect"].includes(t(l).type)?(r(),U(s,{key:13,prop:"defaultValue",label:u.$t("model.field.defaultValue")},{default:a(()=>[e(w,{modelValue:t(l).defaultValueKey,"onUpdate:modelValue":o[24]||(o[24]=d=>t(l).defaultValueKey=d),onChange:o[25]||(o[25]=d=>t(l).defaultValue=c.value.filter(B=>d.indexOf(B.value)!==-1).map(B=>B.name)),clearable:"",class:"w-full",multiple:""},{default:a(()=>[(r(!0),M(C,null,N(c.value,d=>(r(),U(m,{key:d.id,value:d.value,label:d.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):S("",!0),["imageUpload"].includes(t(l).type)?(r(),M(C,{key:14},[e(s,{prop:"imageWidth",label:u.$t("model.field.imageWidth")},{default:a(()=>[e(b,{modelValue:t(l).imageWidth,"onUpdate:modelValue":o[26]||(o[26]=d=>t(l).imageWidth=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"imageHeight",label:u.$t("model.field.imageHeight")},{default:a(()=>[e(b,{modelValue:t(l).imageHeight,"onUpdate:modelValue":o[27]||(o[27]=d=>t(l).imageHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"imageMode",label:u.$t("model.field.imageMode")},{default:a(()=>[e(w,{modelValue:t(l).imageMode,"onUpdate:modelValue":o[28]||(o[28]=d=>t(l).imageMode=d),clearable:"",class:"w-full"},{default:a(()=>[(r(),M(C,null,N(["cut","resize","manual","none"],d=>e(m,{key:d,value:d,label:u.$t(`model.field.imageMode.${d}`)},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):S("",!0),["imageUpload","videoUpload","audioUpload","fileUpload"].includes(t(l).type)?(r(),M(C,{key:15},[e(s,{prop:"fileAccept"},{label:a(()=>[e(ae,{message:"model.field.fileAccept",help:"","fix-width":!1})]),default:a(()=>[e(q,{modelValue:t(l).fileAccept,"onUpdate:modelValue":o[29]||(o[29]=d=>t(l).fileAccept=d),maxlength:"255"},null,8,["modelValue"])]),_:1}),e(s,{prop:"fileMaxSize",rules:{type:"number",min:0,max:65535,message:()=>u.$t("v.range",{min:0,max:65535})}},{label:a(()=>[e(ae,{message:"model.field.fileMaxSize",help:"","fix-width":!1})]),default:a(()=>[e(q,{modelValue:t(l).fileMaxSize,"onUpdate:modelValue":o[30]||(o[30]=d=>t(l).fileMaxSize=d),modelModifiers:{number:!0},maxlength:"5"},null,8,["modelValue"])]),_:1},8,["rules"])],64)):S("",!0),["tinyEditor"].includes(t(l).type)?(r(),M(C,{key:16},[e(s,{prop:"minHeight",label:u.$t("model.field.minHeight")},{default:a(()=>[e(b,{modelValue:t(l).minHeight,"onUpdate:modelValue":o[31]||(o[31]=d=>t(l).minHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"]),e(s,{prop:"maxHeight",label:u.$t("model.field.maxHeight")},{default:a(()=>[e(b,{modelValue:t(l).maxHeight,"onUpdate:modelValue":o[32]||(o[32]=d=>t(l).maxHeight=d),min:1,max:65535},null,8,["modelValue"])]),_:1},8,["label"])],64)):S("",!0)],64)}}}),Ke={class:"dialog-full"},Re={class:"drag-component"},Je=["onClick"],je=["onClick"],Pe={name:"ModelCustomFields"},Qe=Q({...Pe,props:{modelValue:{type:Boolean,required:!0},beanId:{type:Number}},emits:{"update:modelValue":null},setup(H,{emit:W}){const l=H,{beanId:$,modelValue:c}=te(l),{t:k}=de(),u=y({}),o=y({}),q=y(),s=y(!1),V=y(),b=y(),m=y("attribute"),w=y(!1),D=y([{label:k("model.fieldType.text"),type:"text"},{label:k("model.fieldType.textarea"),type:"textarea"},{label:k("model.fieldType.number"),type:"number"},{label:k("model.fieldType.slider"),type:"slider"},{label:k("model.fieldType.date"),type:"date"},{label:k("model.fieldType.color"),type:"color"},{label:k("model.fieldType.radio"),type:"radio"},{label:k("model.fieldType.checkbox"),type:"checkbox"},{label:k("model.fieldType.select"),type:"select"},{label:k("model.fieldType.multipleSelect"),type:"multipleSelect"},{label:k("model.fieldType.switch"),type:"switch"},{label:k("model.fieldType.imageUpload"),type:"imageUpload"},{label:k("model.fieldType.videoUpload"),type:"videoUpload"},{label:k("model.fieldType.audioUpload"),type:"audioUpload"},{label:k("model.fieldType.fileUpload"),type:"fileUpload"},{label:k("model.fieldType.tinyEditor"),type:"tinyEditor"}]),g=y([]);pe(c,async()=>{c.value&&($==null?void 0:$.value)!=null&&(u.value=await ue($.value),g.value=JSON.parse(u.value.customs||"[]"),g.value.length>0?[V.value]=g.value:V.value=void 0)});const E=async h=>{if(!V.value){V.value=h;return}q.value.validate(T=>{T&&(V.value=h)})},d=h=>{const T={code:`field${new Date().getTime()}`,type:h.type,name:h.label,double:!1};return b.value=T,T},B=h=>{h.from!==h.to&&(V.value=b.value)},R=h=>{const T=g.value.indexOf(h);g.value.splice(T,1);const{length:L}=g.value;L<=0?V.value=void 0:T<L?V.value=g.value[T]:V.value=g.value[L-1]},P=async()=>{w.value=!0;try{g.value.length>0?q.value.validate(async h=>{h&&await Y({...u.value,customs:JSON.stringify(g.value)})}):await Y({...u.value,customs:JSON.stringify(g.value)}),oe.success(k("success"))}finally{w.value=!1,W("update:modelValue",!1)}};return(h,T)=>{const L=f("el-scrollbar"),i=f("el-aside"),p=f("el-button"),v=f("el-header"),_=f("el-form-item"),z=f("el-icon"),A=f("el-col"),X=f("el-form"),x=f("el-main"),K=f("el-container"),Z=f("el-tab-pane"),ee=f("el-tabs"),le=f("el-dialog");return r(),M("div",Ke,[e(le,{title:h.$t("model.fun.customFields"),"model-value":H.modelValue,"onUpdate:modelValue":T[3]||(T[3]=n=>h.$emit("update:modelValue",n)),"destroy-on-close":"",fullscreen:""},{default:a(()=>[e(K,{class:"border-t",style:{height:"calc(100vh - 65px)"}},{default:a(()=>[e(i,{width:"240px"},{default:a(()=>[e(L,{class:"h-full"},{default:a(()=>[e(t(se),{list:D.value,group:{name:"components",pull:"clone",put:!1},sort:!1,clone:d,onEnd:B,"item-key":"label"},{item:a(({element:n})=>[j("div",Re,I(n.label),1)]),_:1},8,["list"])]),_:1})]),_:1}),e(K,{class:"border-r border-l"},{default:a(()=>[e(v,{height:"auto",class:"px-2 py-1"},{default:a(()=>[e(p,{loading:w.value,onClick:re(P,["prevent"]),type:"primary"},{default:a(()=>[F(I(h.$t("save")),1)]),_:1},8,["loading","onClick"])]),_:1}),e(x,{class:"border-t p-0"},{default:a(()=>[e(L,{class:"drawing-board h-full p-2"},{default:a(()=>[e(X,{model:o.value,"label-width":"150px",class:"h-full"},{default:a(()=>[e(t(se),{list:g.value,class:"min-h-full content-start mx-0",tag:"el-row","component-data":{gutter:8},animation:250,onStart:T[0]||(T[0]=n=>s.value=!0),onEnd:T[1]||(T[1]=n=>s.value=!1),group:"components","item-key":"code"},{item:a(({element:n})=>[e(A,{span:n.double?12:24,class:"relative"},{default:a(()=>[e(_,{prop:n.code,required:n.required,class:"mb-0 py-3"},{label:a(()=>[e(ae,{label:n.name},null,8,["label"])]),default:a(()=>[e(Be,{field:n,modelValue:n.defaultValue,"onUpdate:modelValue":O=>n.defaultValue=O,"model-key":n.defaultValueKey,"onUpdate:model-key":O=>n.defaultValueKey=O},null,8,["field","modelValue","onUpdate:modelValue","model-key","onUpdate:model-key"])]),_:2},1032,["prop","required"]),j("div",{class:ie(["drag-mask",!s.value&&V.value!==n?"hover:opacity-10":null,V.value===n?"drag-mask-selected":null]),onClick:O=>E(n)},null,10,Je),j("div",{class:ie(["drag-close",V.value!==n?"hidden":null]),onClick:O=>R(n)},[e(z,{class:"text-danger"},{default:a(()=>[e(t(be))]),_:1})],10,je)]),_:2},1032,["span"])]),_:1},8,["list"])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(i,{class:"right-panel w-64"},{default:a(()=>[e(L,{class:"h-full pt-0.5 pb-3"},{default:a(()=>[e(ee,{modelValue:m.value,"onUpdate:modelValue":T[2]||(T[2]=n=>m.value=n),stretch:""},{default:a(()=>[e(Z,{label:h.$t("model.attribute"),name:"attribute",class:"px-2"},{default:a(()=>[e(X,{model:V.value,ref_key:"selectedForm",ref:q},{default:a(()=>[V.value?(r(),U(Ae,{key:0,selected:V.value},null,8,["selected"])):S("",!0)]),_:1},8,["model"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title","model-value"])])}}});const Xe=ve(Qe,[["__scopeId","data-v-0a7a4411"]]),Ze={class:"mb-3"},Ge={class:"app-block"},Ye={name:"ModelList"},sl=Q({...Ye,setup(H){const{t:W}=de(),l=y({}),$=y("article"),c=y(),k=y(),u=y([]),o=y([]),q=y(!1),s=y(!1),V=y(!1),b=y(!1),m=y(),w=ce(()=>u.value.map(v=>v.id)),D=y(!1),g=async()=>{q.value=!0;try{u.value=await Me({..._e(l.value),type:$.value,Q_OrderBy:c.value}),D.value=Object.values(l.value).filter(v=>v!==void 0&&v!=="").length>0||c.value!==void 0}finally{q.value=!1}};ye(g);const E=({column:v,prop:_,order:z})=>{var A;_?c.value=((A=v.sortBy)!=null?A:_)+(z==="descending"?"_desc":""):c.value=void 0,g()},d=()=>g(),B=()=>{k.value.clearSort(),$e(l.value),c.value=void 0,g()},R=v=>{m.value=v,V.value=!0},P=v=>{m.value=v,b.value=!0},h=()=>{m.value=void 0,s.value=!0},T=v=>{m.value=v,s.value=!0},L=async v=>{await fe(v),g(),oe.success(W("success"))},i=async(v,_)=>{const z=ke(v,u.value,_);await qe(z.map(A=>A.id))},p=v=>v.id>10;return(v,_)=>{const z=f("el-button"),A=f("el-popconfirm"),X=f("el-radio-button"),x=f("el-radio-group"),K=f("el-table-column"),Z=f("el-tag"),ee=f("el-table"),le=Ve("loading");return r(),M("div",null,[j("div",Ze,[e(t(Ce),{params:l.value,onSearch:d,onReset:B},{default:a(()=>[e(t(we),{label:v.$t("model.name"),name:"Q_Contains_name"},null,8,["label"])]),_:1},8,["params"])]),j("div",null,[e(z,{type:"primary",disabled:t(J)("model:create"),icon:t(Ue),onClick:_[0]||(_[0]=n=>h())},{default:a(()=>[F(I(v.$t("add")),1)]),_:1},8,["disabled","icon"]),e(A,{title:v.$t("confirmDelete"),onConfirm:_[1]||(_[1]=n=>L(o.value.map(O=>O.id)))},{reference:a(()=>[e(z,{disabled:o.value.length<=0||t(J)("model:delete"),icon:t(he)},{default:a(()=>[F(I(v.$t("delete")),1)]),_:1},8,["disabled","icon"])]),_:1},8,["title"]),e(De,{disabled:o.value.length<=0||D.value||t(J)("org:update"),onMove:_[2]||(_[2]=n=>i(o.value,n)),class:"ml-2"},null,8,["disabled"]),e(t(Ie),{name:"model",class:"ml-2"})]),e(x,{modelValue:$.value,"onUpdate:modelValue":_[3]||(_[3]=n=>$.value=n),onChange:_[4]||(_[4]=n=>g()),class:"mt-3"},{default:a(()=>[(r(),M(C,null,N(["article","channel","site","global"],n=>e(X,{key:n,label:n},{default:a(()=>[F(I(v.$t(`model.type.${n}`)),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"]),j("div",Ge,[ge((r(),U(ee,{ref_key:"table",ref:k,data:u.value,onSelectionChange:_[5]||(_[5]=n=>o.value=n),onRowDblclick:_[6]||(_[6]=n=>T(n.id)),onSortChange:E},{default:a(()=>[e(t(Fe),{name:"model"},{default:a(()=>[e(K,{type:"selection",selectable:p,width:"45"}),e(K,{property:"id",label:"ID",width:"64",sortable:"custom"}),e(K,{property:"name",label:v.$t("model.name"),sortable:"custom","show-overflow-tooltip":""},null,8,["label"]),e(K,{property:"type",label:v.$t("model.type"),sortable:"custom",formatter:n=>v.$t(`model.type.${n.type}`)},null,8,["label","formatter"]),e(K,{property:"scope",label:v.$t("model.scope"),sortable:"custom"},{default:a(({row:n})=>[n.scope===2?(r(),U(Z,{key:0,type:"success",size:"small"},{default:a(()=>[F(I(v.$t(`model.scope.${n.scope}`)),1)]),_:2},1024)):(r(),U(Z,{key:1,type:"info",size:"small"},{default:a(()=>[F(I(v.$t(`model.scope.${n.scope}`)),1)]),_:2},1024))]),_:1},8,["label"]),e(K,{label:v.$t("table.action")},{default:a(({row:n})=>[e(z,{type:"primary",disabled:t(J)("model:update"),onClick:O=>T(n.id),size:"small",link:""},{default:a(()=>[F(I(v.$t("edit")),1)]),_:2},1032,["disabled","onClick"]),["global","site"].includes(n.type)?S("",!0):(r(),U(z,{key:0,type:"primary",disabled:t(J)("model:update"),onClick:O=>R(n.id),size:"small",link:""},{default:a(()=>[F(I(v.$t("model.fun.systemFields")),1)]),_:2},1032,["disabled","onClick"])),e(z,{type:"primary",disabled:t(J)("model:update"),onClick:O=>P(n.id),size:"small",link:""},{default:a(()=>[F(I(v.$t("model.fun.customFields")),1)]),_:2},1032,["disabled","onClick"]),p(n)?(r(),U(A,{key:1,title:v.$t("confirmDelete"),onConfirm:O=>L([n.id])},{reference:a(()=>[e(z,{type:"primary",disabled:t(J)("model:delete"),size:"small",link:""},{default:a(()=>[F(I(v.$t("delete")),1)]),_:1},8,["disabled"])]),_:2},1032,["title","onConfirm"])):S("",!0)]),_:1},8,["label"])]),_:1})]),_:1},8,["data"])),[[le,q.value]])]),e(Ee,{modelValue:s.value,"onUpdate:modelValue":_[7]||(_[7]=n=>s.value=n),beanId:m.value,beanIds:t(w),modelType:$.value,onFinished:g},null,8,["modelValue","beanId","beanIds","modelType"]),e(We,{modelValue:V.value,"onUpdate:modelValue":_[8]||(_[8]=n=>V.value=n),beanId:m.value},null,8,["modelValue","beanId"]),e(Xe,{modelValue:b.value,"onUpdate:modelValue":_[9]||(_[9]=n=>b.value=n),beanId:m.value},null,8,["modelValue","beanId"])])}}});export{sl as default};
