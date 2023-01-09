import{aJ as t}from"./index-6c60ffba.js";const n="../api/backend/core/jod-convert/doc",s="../api/backend/core/jod-convert/library",o=async()=>(await t.get("/backend/core/jod-convert/enabled")).data,d=async a=>(await t.get("/backend/core/channel",{params:a})).data,r=async a=>(await t.get(`/backend/core/channel/${a}`)).data,i=async a=>(await t.post("/backend/core/channel",a)).data,l=async a=>(await t.post("/backend/core/channel?_method=put",a)).data,p=async a=>(await t.post("/backend/core/channel/order?_method=put",a)).data,y=async a=>(await t.post("/backend/core/channel?_method=delete",a)).data,k=async()=>(await t.get("/backend/core/channel/channel-permissions")).data,b=async()=>(await t.get("/backend/core/channel/channel-templates")).data,m=async()=>(await t.get("/backend/core/channel/article-templates")).data,h=async a=>(await t.get("/backend/core/article",{params:a})).data,w=async a=>(await t.get(`/backend/core/article/${a}`)).data,u=async a=>(await t.post("/backend/core/article",a)).data,g=async a=>(await t.post("/backend/core/article?_method=put",a)).data,A=async(a,e)=>(await t.post("/backend/core/article/sticky?_method=put",{ids:a,sticky:e})).data,_=async a=>(await t.post("/backend/core/article/delete?_method=put",a)).data,q=async a=>(await t.post("/backend/core/article/submit?_method=put",a)).data,C=async a=>(await t.post("/backend/core/article/archive?_method=put",a)).data,v=async a=>(await t.post("/backend/core/article/offline?_method=put",a)).data,f=async a=>(await t.post("/backend/core/article?_method=delete",a)).data,x=async a=>(await t.post("/backend/core/article-review/pass?_method=put",a)).data,D=async(a,e)=>(await t.post("/backend/core/article-review/reject?_method=put",{ids:a,reason:e})).data,j=async a=>(await t.get("/backend/core/block-item",{params:a})).data,B=async a=>(await t.get(`/backend/core/block-item/${a}`)).data,I=async a=>(await t.post("/backend/core/block-item",a)).data,L=async a=>(await t.post("/backend/core/block-item?_method=put",a)).data,$=async a=>(await t.post("/backend/core/block-item/order?_method=put",a)).data,O=async a=>(await t.post("/backend/core/block-item?_method=delete",a)).data,P=async a=>(await t.get("/backend/core/dict",{params:a})).data,E=async(a,e)=>(await t.get("/backend/core/dict/list-by-alias",{params:{alias:a,name:e}})).data,H=async a=>(await t.get(`/backend/core/dict/${a}`)).data,J=async a=>(await t.post("/backend/core/dict",a)).data,R=async a=>(await t.post("/backend/core/dict?_method=put",a)).data,T=async a=>(await t.post("/backend/core/dict/order?_method=put",a)).data,U=async a=>(await t.post("/backend/core/dict?_method=delete",a)).data,z=async()=>(await t.post("/backend/core/generator/fulltext-reindex-all")).data,F=async()=>(await t.post("/backend/core/generator/fulltext-reindex-site")).data,G=async()=>(await t.post("/backend/core/generator/html-all")).data,K=async()=>(await t.post("/backend/core/generator/html-home")).data,M=async()=>(await t.post("/backend/core/generator/html-channel")).data,N=async()=>(await t.post("/backend/core/generator/html-article")).data;export{y as A,b as B,k as C,p as D,j as E,$ as F,H as G,J as H,R as I,U as J,T as K,z as L,F as M,G as N,K as O,M as P,N as Q,n as a,f as b,u as c,o as d,E as e,d as f,m as g,_ as h,C as i,s as j,h as k,A as l,O as m,B as n,v as o,x as p,w as q,D as r,q as s,I as t,g as u,L as v,P as w,r as x,i as y,l as z};
