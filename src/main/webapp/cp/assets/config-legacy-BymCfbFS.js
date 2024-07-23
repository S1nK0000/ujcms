System.register(["./index-legacy-Bt_diN8K.js"],(function(a,t){"use strict";var e;return{setters:[a=>{e=a.a_}],execute:function(){a("i","../api/backend/image-upload"),a("ac","../api/backend/avatar-upload"),a("T","../api/backend/video-upload"),a("S","../api/backend/audio-upload"),a("Q","../api/backend/media-upload"),a("R","../api/backend/doc-upload"),a("f","../api/backend/file-upload"),a("ab",(async a=>(await e.post("/backend/image-crop",a)).data)),a("aa",(async a=>(await e.post("/backend/avatar-crop",a)).data)),a("P",(async a=>(await e.post("/backend/image-fetch",a,{headers:{"Content-Type":"text/plain"}})).data)),a("m",(async()=>(await e.get("/backend/core/config/model")).data)),a("n",(async()=>(await e.get("/backend/core/config")).data)),a("g",(async()=>(await e.get("/backend/core/config/sms")).data)),a("h",(async()=>(await e.get("/backend/core/config/email")).data)),a("j",(async()=>(await e.get("/backend/core/config/upload-storage")).data)),a("k",(async()=>(await e.get("/backend/core/config/html-storage")).data)),a("l",(async()=>(await e.get("/backend/core/config/template-storage")).data)),a("C",(async a=>(await e.post("/backend/core/config/base?_method=put",a)).data)),a("w",(async a=>(await e.post("/backend/core/config/customs?_method=put",a)).data)),a("r",(async a=>(await e.post("/backend/core/config/upload?_method=put",a)).data)),a("t",(async a=>(await e.post("/backend/core/config/register?_method=put",a)).data)),a("v",(async a=>(await e.post("/backend/core/config/security?_method=put",a)).data)),a("x",(async a=>(await e.post("/backend/core/config/sms?_method=put",a)).data)),a("o",(async a=>(await e.post("/backend/core/config/sms/send",a)).data)),a("y",(async a=>(await e.post("/backend/core/config/email?_method=put",a)).data)),a("p",(async a=>(await e.post("/backend/core/config/email/send",a)).data)),a("z",(async a=>(await e.post("/backend/core/config/upload-storage?_method=put",a)).data)),a("A",(async a=>(await e.post("/backend/core/config/html-storage?_method=put",a)).data)),a("B",(async a=>(await e.post("/backend/core/config/template-storage?_method=put",a)).data)),a("s",(async a=>(await e.get("/backend/core/config/storage-path-allowed",{params:{path:a}})).data)),a("E",(async()=>(await e.get("/backend/core/site-settings")).data)),a("J",(async a=>(await e.post("/backend/core/site-settings/base?_method=put",a)).data)),a("I",(async a=>(await e.post("/backend/core/site-settings/customs?_method=put",a)).data)),a("F",(async a=>(await e.post("/backend/core/site-settings/watermark?_method=put",a)).data)),a("G",(async a=>(await e.post("/backend/core/site-settings/editor?_method=put",a)).data)),a("H",(async a=>(await e.post("/backend/core/site-settings/message-board?_method=put",a)).data)),a("d",(async()=>(await e.get("/backend/core/site-settings/html")).data)),a("u",(async a=>(await e.post("/backend/core/site-settings/html?_method=put",a)).data)),a("D",(async()=>(await e.get("/backend/core/site/theme")).data)),a("q",(async a=>(await e.get("/backend/core/model",{params:a})).data)),a("K",(async a=>(await e.get(`/backend/core/model/${a}`)).data)),a("L",(async a=>(await e.post("/backend/core/model",a)).data)),a("M",(async a=>(await e.post("/backend/core/model?_method=put",a)).data)),a("O",(async a=>(await e.post("/backend/core/model/order?_method=put",a)).data)),a("N",(async a=>(await e.post("/backend/core/model?_method=delete",a)).data)),a("c",(async a=>(await e.get("/backend/core/dict-type",{params:a})).data)),a("a0",(async a=>(await e.get(`/backend/core/dict-type/${a}`)).data)),a("a1",(async a=>(await e.post("/backend/core/dict-type",a)).data)),a("a2",(async a=>(await e.post("/backend/core/dict-type?_method=put",a)).data)),a("a4",(async a=>(await e.post("/backend/core/dict-type/order?_method=put",a)).data)),a("a3",(async a=>(await e.post("/backend/core/dict-type?_method=delete",a)).data)),a("$",(async(a,t)=>(await e.get("/backend/core/dict-type/alias-exist",{params:{alias:a,scope:t}})).data)),a("a",(async a=>(await e.get("/backend/core/block",{params:a})).data)),a("W",(async a=>(await e.get(`/backend/core/block/${a}`)).data)),a("X",(async a=>(await e.post("/backend/core/block",a)).data)),a("Y",(async a=>(await e.post("/backend/core/block?_method=put",a)).data)),a("_",(async a=>(await e.post("/backend/core/block/order?_method=put",a)).data)),a("Z",(async a=>(await e.post("/backend/core/block?_method=delete",a)).data)),a("U",(async(a,t)=>(await e.get("/backend/core/block/alias-exist",{params:{alias:a,scope:t}})).data)),a("V",(async(a,t)=>(await e.get("/backend/core/block/scope-not-allowed",{params:{scope:a,blockId:t}})).data)),a("e",(async a=>(await e.get("/backend/ext/message-board-type",{params:a})).data)),a("a5",(async a=>(await e.get(`/backend/ext/message-board-type/${a}`)).data)),a("a6",(async a=>(await e.post("/backend/ext/message-board-type",a)).data)),a("a7",(async a=>(await e.post("/backend/ext/message-board-type?_method=put",a)).data)),a("a9",(async(a,t)=>(await e.post("/backend/ext/message-board-type/update-order",{fromId:a,toId:t})).data)),a("a8",(async a=>(await e.post("/backend/ext/message-board-type?_method=delete",a)).data)),a("b",(async a=>(await e.get("/backend/core/performance-type",{params:a})).data))}}}));
