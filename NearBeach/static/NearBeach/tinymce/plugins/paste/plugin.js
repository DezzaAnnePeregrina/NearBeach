!function(){"use strict";var t,e,n,r=function(t){var e=t;return{get:function(){return e},set:function(t){e=t}}},o=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=("array",function(t){return n=typeof(e=t),"array"===(null===e?"null":"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n);var e,n}),a=function(t){return!function(t){return null==t}(t)},u=function(t){return"function"==typeof t},s=function(){},c=function(t){return function(){return t}},l=c(!1),f=c(!0),d=function(){return p},p={fold:function(t,e){return t()},isSome:l,isNone:f,getOr:e=function(t){return t},getOrThunk:t=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:e,orThunk:t,map:d,each:s,bind:d,exists:l,forall:f,filter:function(){return d()},toArray:function(){return[]},toString:c("none()")},m=function(t){var e=c(t),n=function(){return o},r=function(e){return e(t)},o={fold:function(e,n){return n(t)},isSome:f,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return m(e(t))},each:function(e){e(t)},bind:r,exists:r,forall:r,filter:function(e){return e(t)?o:p},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return o},g={some:m,none:d,from:function(t){return null==t?p:m(t)}},v=Array.prototype.slice,h=Array.prototype.push,y=function(t,e){for(var n=0,r=t.length;n<r;n++)if(e(t[n],n))return!0;return!1},b=function(t,e){for(var n=t.length,r=new Array(n),o=0;o<n;o++){var i=t[o];r[o]=e(i,o)}return r},x=function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)},w=u(Array.from)?Array.from:function(t){return v.call(t)},P=function(){return P=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},P.apply(this,arguments)},_=function(){var t=function(t){var e=r(g.none()),n=function(){return e.get().each(t)};return{clear:function(){n(),e.set(g.none())},isSet:function(){return e.get().isSome()},get:function(){return e.get()},set:function(t){n(),e.set(g.some(t))}}}(s);return P(P({},t),{on:function(e){return t.get().each(e)}})},C=function(t,e,n){return""===e||t.length>=e.length&&t.substr(n,n+e.length)===e},T=tinymce.util.Tools.resolve("tinymce.Env"),D=tinymce.util.Tools.resolve("tinymce.util.Delay"),k=tinymce.util.Tools.resolve("tinymce.util.Promise"),O=tinymce.util.Tools.resolve("tinymce.util.VK"),S=function(t,e){return t.fire("PastePlainTextToggle",{state:e})},j=tinymce.util.Tools.resolve("tinymce.util.Tools"),A=function(t){return t.getParam("paste_data_images",!1)},R=function(t){return t.getParam("paste_merge_formats",!0)},I=function(t){return t.getParam("paste_retain_style_properties")},F=function(t){return t.getParam("validate")},E=function(t){return t.getParam("allow_html_data_urls",!1,"boolean")},M=function(t){return t.getParam("paste_data_images",!1,"boolean")},B=function(t){return j.explode(t.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},L="\x3c!-- x-tinymce/html --\x3e",N=function(t){return-1!==t.indexOf(L)},H=c("x-tinymce/html"),$=Object.hasOwnProperty,z=function(t,e){return $.call(t,e)},U=tinymce.util.Tools.resolve("tinymce.html.Entities"),V=tinymce.util.Tools.resolve("tinymce.html.DomParser"),K=tinymce.util.Tools.resolve("tinymce.html.Serializer"),X=" ",W=tinymce.util.Tools.resolve("tinymce.html.Node"),Y=tinymce.util.Tools.resolve("tinymce.html.Schema"),Z=function(t,e){return j.each(e,(function(e){t=e.constructor===RegExp?t.replace(e,""):t.replace(e[0],e[1])})),t},q=function(t){return Z(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(t,e,n){return e||n?X:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},G=function(t){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(t)||/class="OutlineElement/.test(t)||/id="?docs\-internal\-guid\-/.test(t)},J=function(t){var e=!1;return t=t.replace(/^[\u00a0 ]+/,""),j.each([/^[IVXLMCD]+\.[ \u00a0]/,/^[ivxlmcd]+\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(t))return e=!0,!1})),e},Q=function(t,e,n,r){var o={},i=t.dom.parseStyle(r);return j.each(i,(function(i,a){switch(a){case"mso-list":var u=/\w+ \w+([0-9]+)/i.exec(r);u&&(n._listLevel=parseInt(u[1],10)),/Ignore/i.test(i)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0);break;case"horiz-align":a="text-align";break;case"vert-align":a="vertical-align";break;case"font-color":case"mso-foreground":a="color";break;case"mso-background":case"mso-highlight":a="background";break;case"font-weight":case"font-style":return void("normal"!==i&&(o[a]=i));case"mso-element":if(/^(comment|comment-list)$/i.test(i))return void n.remove()}0!==a.indexOf("mso-comment")?0!==a.indexOf("mso-")&&("all"===I(t)||e&&e[a])&&(o[a]=i):n.remove()})),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new W("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new W("i",1))),t.dom.serializeStyle(o,n.name)||null},tt=function(t,e){return{content:t,cancelled:e}},et=function(t,e,n){var r=G(e),o=r?function(t,e){return function(t){return t.getParam("paste_enable_default_filters",!0)}(t)?function(t,e){var n,r=I(t);r&&(n=j.makeMap(r.split(/[, ]/))),e=Z(e,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,X],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(t,e){return e.length>0?e.replace(/./," ").slice(Math.floor(e.length/2)).split("").join(X):""}]]);var o=function(t){return t.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")}(t),i=Y({valid_elements:o,valid_children:"-li[p]"});j.each(i.elements,(function(t){t.attributes.class||(t.attributes.class={},t.attributesOrder.push("class")),t.attributes.style||(t.attributes.style={},t.attributesOrder.push("style"))}));var a=V({},i);a.addAttributeFilter("style",(function(e){for(var r,o=e.length;o--;)(r=e[o]).attr("style",Q(t,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),a.addAttributeFilter("class",(function(t){for(var e,n,r=t.length;r--;)n=(e=t[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&e.remove(),e.attr("class",null)})),a.addNodeFilter("del",(function(t){for(var e=t.length;e--;)t[e].remove()})),a.addNodeFilter("a",(function(t){for(var e,n,r,o=t.length;o--;)if(n=(e=t[o]).attr("href"),r=e.attr("name"),n&&-1!==n.indexOf("#_msocom_"))e.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){e.unwrap();continue}e.attr({href:n,name:r})}else e.unwrap()}));var u=a.parse(e);return function(t){return t.getParam("paste_convert_word_fake_lists",!0)}(t)&&function(t){for(var e,n,r=1,o=function(t){var e="";if(3===t.type)return t.value;if(t=t.firstChild)do{e+=o(t)}while(t=t.next);return e},i=function(t,e){if(3===t.type&&e.test(t.value))return t.value=t.value.replace(e,""),!1;if(t=t.firstChild)do{if(!i(t,e))return!1}while(t=t.next);return!0},a=function(t){if(t._listIgnore)t.remove();else if(t=t.firstChild)do{a(t)}while(t=t.next)},u=function(t,o,u){var s=t._listLevel||r;s!==r&&(s<r?e&&(e=e.parent.parent):(n=e,e=null)),e&&e.name===o?e.append(t):(n=n||e,e=new W(o,1),u>1&&e.attr("start",""+u),t.wrap(e)),t.name="li",s>r&&n&&n.lastChild.append(e),r=s,a(t),i(t,/^\u00a0+/),i(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),i(t,/^\u00a0+/)},s=[],c=t.firstChild;null!=c;)if(s.push(c),null!==(c=c.walk()))for(;void 0!==c&&c.parent!==t;)c=c.walk();for(var l=0;l<s.length;l++)if("p"===(t=s[l]).name&&t.firstChild){var f=o(t);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){u(t,"ul");continue}if(J(f)){var d=/([0-9]+)\./.exec(f),p=1;d&&(p=parseInt(d[1],10)),u(t,"ol",p);continue}if(t._listLevel){u(t,"ul",1);continue}e=null}else n=e,e=null}(u),K({validate:F(t)},i).serialize(u)}(t,e):e}(t,e):e;return function(t,e,n,r){var o=function(t,e,n,r){return t.fire("PastePreProcess",{content:e,internal:n,wordContent:r})}(t,e,n,r),i=function(t,e){var n=V({},t.schema);n.addNodeFilter("meta",(function(t){j.each(t,(function(t){t.remove()}))}));var r=n.parse(e,{forced_root_block:!1,isRootContent:!0});return K({validate:F(t)},t.schema).serialize(r)}(t,o.content);return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?function(t,e,n,r){var o=t.dom.create("div",{style:"display:none"},e),i=function(t,e,n,r){return t.fire("PastePostProcess",{node:e,internal:n,wordContent:r})}(t,o,n,r);return tt(i.node.innerHTML,i.isDefaultPrevented())}(t,i,n,r):tt(i,o.isDefaultPrevented())}(t,o,n,r)},nt=function(t,e){return t.insertContent(e,{merge:R(t),paste:!0}),!0},rt=function(t){return/^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(t)},ot=function(t,e,n){return!(!1!==t.selection.isCollapsed()||!rt(e))&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.execCommand("mceInsertLink",!1,e)})),!0}(t,e,n)},it=function(t,e,n){return!!function(t,e){return rt(e)&&y(B(t),(function(t){return n=e.toLowerCase(),r="."+t.toLowerCase(),C(n,r,n.length-r.length);var n,r}))}(t,e)&&function(t,e,n){return t.undoManager.extra((function(){n(t,e)}),(function(){t.insertContent('<img src="'+e+'">')})),!0}(t,e,n)},at=function(t){return"\n"===t||"\r"===t},ut=function(t,e,n,r){var o=et(t,e,n);!1===o.cancelled&&function(t,e,n){n||!1===function(t){return t.getParam("smart_paste",!0)}(t)?nt(t,e):function(t,e){j.each([ot,it,nt],(function(n){return!0!==n(t,e,nt)}))}(t,e)}(t,o.content,r)},st=function(t,e,n){var r=n||N(e);ut(t,function(t){return t.replace(L,"")}(e),r,!1)},ct=function(t,e){var n=t.dom.encode(e).replace(/\r\n/g,"\n"),r=function(t,e,n){return e?function(t,e,n){var r=t.split(/\n\n/),o=function(t,e){var n=[],r="<"+t;if("object"==typeof e){for(var o in e)z(e,o)&&n.push(o+'="'+U.encodeAllRaw(e[o])+'"');n.length&&(r+=" "+n.join(" "))}return r+">"}(e,n),i="</"+e+">",a=j.map(r,(function(t){return t.split(/\n/).join("<br />")}));return 1===a.length?a[0]:j.map(a,(function(t){return o+t+i})).join("")}(t,!0===e?"p":e,n):function(t){return t.replace(/\r?\n/g,"<br>")}(t)}(function(t,e){var n,r,o,i=(n=function(t){return t.getParam("paste_tab_spaces",4,"number")}(t),n<=0?"":new Array(n+1).join(" ")),a=e.replace(/\t/g,i),u=(r=function(t,e){return function(t){return-1!==" \f\t\v".indexOf(t)}(e)||e===X?t.pcIsSpace||""===t.str||t.str.length===a.length-1||function(t,e){return e<t.length&&e>=0&&at(t[e])}(a,t.str.length+1)?{pcIsSpace:!1,str:t.str+X}:{pcIsSpace:!0,str:t.str+" "}:{pcIsSpace:at(e),str:t.str+e}},o={pcIsSpace:!1,str:""},x(a,(function(t,e){o=r(o,t)})),o);return u.str}(t,n),function(t){return t.getParam("forced_root_block")}(t),function(t){return t.getParam("forced_root_block_attrs")}(t));ut(t,r,!1,!0)},lt=function(t){var e={};if(t){if(t.getData){var n=t.getData("Text");n&&n.length>0&&-1===n.indexOf("data:text/mce-internal,")&&(e["text/plain"]=n)}if(t.types)for(var r=0;r<t.types.length;r++){var o=t.types[r];try{e[o]=t.getData(o)}catch(t){e[o]=""}}}return e},ft=function(t,e){return e in t&&t[e].length>0},dt=function(t){return ft(t,"text/html")||ft(t,"text/plain")},pt=("mceclip",n=0,function(){return"mceclip"+n++}),mt=function(t,e,n){var r,o="paste"===e.type?e.clipboardData:e.dataTransfer;if(M(t)&&o){var u=function(t,e){var n,r=e.items?(n=w(e.items),function(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!i(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);h.apply(e,t[n])}return e}(b(n,(function(t){return"file"===t.kind?[t.getAsFile()]:[]})))):[],o=e.files?w(e.files):[];return function(t,e){for(var n=[],r=0,o=t.length;r<o;r++){var i=t[r];e(i,r)&&n.push(i)}return n}(r.length>0?r:o,function(t){var e=B(t);return function(t){return n=t.type,C(n,"image/",0)&&y(e,(function(e){return n=e.toLowerCase(),r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(j.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===t.type;var n,r}));var n}}(t))}(t,o);if(u.length>0)return e.preventDefault(),(r=u,k.all(b(r,(function(t){return new k((function(e){var n=function(t){return a(t.getAsFile)}(t)?t.getAsFile():t,r=new window.FileReader;r.onload=function(){e({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))).then((function(e){n&&t.selection.setRng(n),x(e,(function(e){!function(t,e){var n,r,o=(n=e.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),i=o.data,u=o.type,s=pt(),c=e.blob,l=new Image;if(l.src=e.uri,function(t,e){var n=function(t){return t.getParam("images_dataimg_filter")}(t);return!n||n(e)}(t,l)){var f=t.editorUpload.blobCache,d=void 0,p=f.getByData(i,u);if(p)d=p;else{var m=function(t){return t.getParam("images_reuse_filename")}(t)&&a(c.name),g=m?function(t,e){var n=e.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);return a(n)?t.dom.encode(n[1]):null}(t,c.name):s,v=m?c.name:void 0;d=f.create(s,c,i,g,v),f.add(d)}st(t,'<img src="'+d.blobUri()+'">',!1)}else st(t,'<img src="'+e.uri+'">',!1)}(t,e)}))})),!0}return!1},gt=function(t){return O.metaKeyPressed(t)&&86===t.keyCode||t.shiftKey&&45===t.keyCode},vt=function(t){return T.ie&&t.inline?document.body:t.getBody()},ht=function(t){return t.dom.get("mcepastebin")},yt=function(t,e){return e===t},bt=function(t,e){var n,r=ht(t);return(n=r)&&"mcepastebin"===n.id&&yt(e,r.innerHTML)},xt=function(t){var e=r(null),n="%MCEPASTEBIN%";return{create:function(){return function(t,e,n){var r=t.dom,o=t.getBody();e.set(t.selection.getRng());var i=t.dom.add(vt(t),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(T.ie||T.gecko)&&r.setStyle(i,"left","rtl"===r.getStyle(o,"direction",!0)?65535:-65535),r.bind(i,"beforedeactivate focusin focusout",(function(t){t.stopPropagation()})),function(t,e,n){(function(t){return vt(t)!==t.getBody()})(t)&&t.dom.bind(e,"paste keyup",(function(e){bt(t,n)||t.fire("paste")}))}(t,i,n),i.focus(),t.selection.select(i,!0)}(t,e,n)},remove:function(){return function(t,e){if(ht(t)){for(var n=void 0,r=e.get();n=t.dom.get("mcepastebin");)t.dom.remove(n),t.dom.unbind(n);r&&t.selection.setRng(r)}e.set(null)}(t,e)},getEl:function(){return ht(t)},getHtml:function(){return function(t){var e=function(e,n){e.appendChild(n),t.dom.remove(n,!0)},n=j.grep(vt(t).childNodes,(function(t){return"mcepastebin"===t.id})),r=n.shift();j.each(n,(function(t){e(r,t)}));for(var o=t.dom.select("div[id=mcepastebin]",r),i=o.length-1;i>=0;i--){var a=t.dom.create("div");r.insertBefore(a,o[i]),e(a,o[i])}return r?r.innerHTML:""}(t)},getLastRng:e.get,isDefault:function(){return bt(t,n)},isDefaultContent:function(t){return yt(n,t)}}},wt=function(t,e){var n=xt(t);return t.on("PreInit",(function(){return function(t,e,n){var r;(function(t,e,n){var r,o=_(),i=_();t.on("keyup",i.clear),t.on("keydown",(function(n){var a=function(t){gt(t)&&!t.isDefaultPrevented()&&e.remove()};if(gt(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&T.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return;if(n.stopImmediatePropagation(),o.set(n),i.set(!0),T.ie&&r)return n.preventDefault(),void function(t,e){t.fire("paste",{ieFake:!0})}(t);e.remove(),e.create(),t.once("keyup",a),t.once("paste",(function(){t.off("keyup",a)}))}}));var a=function(t,n,r,o,i){var a;ft(n,"text/html")?a=n["text/html"]:(a=e.getHtml(),i=i||N(a),e.isDefaultContent(a)&&(o=!0)),a=q(a),e.remove();var u,s,c,l,f,d,p,m,g=!1===i&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(a),v=rt(a);(!a.length||g&&!v)&&(o=!0),(o||v)&&(a=ft(n,"text/plain")&&g?n["text/plain"]:(u=a,s=Y(),c=V({},s),l="",f=s.getShortEndedElements(),d=j.makeMap("script noscript style textarea video audio iframe object"," "),p=s.getBlockElements(),m=function(t){var e=t.name,n=t;if("br"!==e){if("wbr"!==e)if(f[e]&&(l+=" "),d[e])l+=" ";else{if(3===t.type&&(l+=t.value),!t.shortEnded&&(t=t.firstChild))do{m(t)}while(t=t.next);p[e]&&n.next&&(l+="\n","p"===e&&(l+="\n"))}}else l+="\n"},u=Z(u,[/<!\[[^\]]+\]>/g]),m(c.parse(u)),l)),e.isDefaultContent(a)?r||t.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):o?ct(t,a):st(t,a,i)};t.on("paste",(function(u){var s=o.isSet()||i.isSet();s&&o.clear();var c=function(t,e){return lt(e.clipboardData||t.getDoc().dataTransfer)}(t,u),l="text"===n.get()||r,f=ft(c,H());r=!1,u.isDefaultPrevented()||function(t){var e=t.clipboardData;return-1!==navigator.userAgent.indexOf("Android")&&e&&e.items&&0===e.items.length}(u)?e.remove():dt(c)||!mt(t,u,e.getLastRng()||t.selection.getRng())?(s||u.preventDefault(),!T.ie||s&&!u.ieFake||ft(c,"text/html")||(e.create(),t.dom.bind(e.getEl(),"paste",(function(t){t.stopPropagation()})),t.getDoc().execCommand("Paste",!1,null),c["text/html"]=e.getHtml()),ft(c,"text/html")?(u.preventDefault(),f||(f=N(c["text/html"])),a(t,c,s,l,f)):D.setEditorTimeout(t,(function(){a(t,c,s,l,f)}),0)):e.remove()}))})(t,e,n),t.parser.addNodeFilter("img",(function(e,n,o){var i,a=function(t){return 0===t.indexOf("webkit-fake-url")},u=function(t){return 0===t.indexOf("data:")};if(!M(t)&&function(t){return t.data&&!0===t.data.paste}(o))for(var s=e.length;s--;)(r=e[s].attr("src"))&&(a(r)||!E(t)&&u(r))&&((i=e[s]).attr("data-mce-object")||r===T.transparentSrc||i.remove())}))}(t,n,e)})),{pasteFormat:e,pasteHtml:function(e,n){return st(t,e,n)},pasteText:function(e){return ct(t,e)},pasteImageData:function(e,n){return mt(t,e,n)},getDataTransferItems:lt,hasHtmlOrText:dt,hasContentType:ft}},Pt=function(t,e,n,r){!function(t,e,n){if(!function(t){return!1===T.iOS&&"function"==typeof(null==t?void 0:t.setData)}(t))return!1;try{return t.clearData(),t.setData("text/html",e),t.setData("text/plain",n),t.setData(H(),e),!0}catch(t){return!1}}(t.clipboardData,e.html,e.text)?n(e.html,r):(t.preventDefault(),r())},_t=function(t){return function(e,n){var r=function(t){return L+t}(e),o=t.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),i=t.dom.create("div",{contenteditable:"true"},r);t.dom.setStyles(o,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),o.appendChild(i),t.dom.add(t.getBody(),o);var a=t.selection.getRng();i.focus();var u=t.dom.createRng();u.selectNodeContents(i),t.selection.setRng(u),D.setTimeout((function(){t.selection.setRng(a),o.parentNode.removeChild(o),n()}),0)}},Ct=function(t){return{html:t.selection.getContent({contextual:!0}),text:t.selection.getContent({format:"text"})}},Tt=function(t){return!t.selection.isCollapsed()||function(t){return!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody())}(t)},Dt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),kt=function(t,e){return Dt.getCaretRangeFromPoint(e.clientX,e.clientY,t.getDoc())},Ot=function(t,e){t.focus(),t.selection.setRng(e)},St=function(t,e){t.on("PastePreProcess",(function(n){n.content=e(t,n.content,n.internal,n.wordContent)}))},jt=function(t,e){if(!G(e))return e;var n=[];j.each(t.schema.getBlockElements(),(function(t,e){n.push(e)}));var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return e=Z(e,[[r,"$1"]]),Z(e,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])},At=function(t,e,n,r){if(r||n)return e;var o,i=function(t){return t.getParam("paste_webkit_styles")}(t);if(!1===function(t){return t.getParam("paste_remove_styles_if_webkit",!0)}(t)||"all"===i)return e;if(i&&(o=i.split(/[, ]/)),o){var a=t.dom,u=t.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(t,e,n,r){var i=a.parseStyle(a.decode(n)),s={};if("none"===o)return e+r;for(var c=0;c<o.length;c++){var l=i[o[c]],f=a.getStyle(u,o[c],!0);/color/.test(o[c])&&(l=a.toHex(l),f=a.toHex(f)),f!==l&&(s[o[c]]=l)}var d=a.serializeStyle(s,"span");return d?e+' style="'+d+'"'+r:e+r}))}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(t,e,n,r){return e+' style="'+n+'"'+r})),e},Rt=function(t,e){t.$("a",e).find("font,u").each((function(e,n){t.dom.remove(n,!0)}))},It=function(t,e){return function(n){n.setActive("text"===e.pasteFormat.get());var r=function(t){return n.setActive(t.state)};return t.on("PastePlainTextToggle",r),function(){return t.off("PastePlainTextToggle",r)}}};o.add("paste",(function(t){if(!1===function(t){return!!t.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)}(t)){var e=r(!1),n=r(function(t){return t.getParam("paste_as_text",!1)}(t)?"text":"html"),o=wt(t,n);return function(t){T.webkit&&St(t,At),T.ie&&(St(t,jt),function(t,e){t.on("PastePostProcess",(function(n){e(t,n.node)}))}(t,Rt))}(t),function(t,e){var n=function(){return t.execCommand("mceTogglePlainTextPaste")};t.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:n,onSetup:It(t,e)}),t.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:n,onSetup:It(t,e)})}(t,o),function(t,e){t.addCommand("mceTogglePlainTextPaste",(function(){!function(t,e){"text"===e.pasteFormat.get()?(e.pasteFormat.set("html"),S(t,!1)):(e.pasteFormat.set("text"),S(t,!0)),t.focus()}(t,e)})),t.addCommand("mceInsertClipboardContent",(function(t,n){n.content&&e.pasteHtml(n.content,n.internal),n.text&&e.pasteText(n.text)}))}(t,o),function(t){var e=t.plugins.paste,n=function(t){return t.getParam("paste_preprocess")}(t);n&&t.on("PastePreProcess",(function(t){n.call(e,e,t)}));var r=function(t){return t.getParam("paste_postprocess")}(t);r&&t.on("PastePostProcess",(function(t){r.call(e,e,t)}))}(t),function(t){t.on("cut",function(t){return function(e){Tt(t)&&Pt(e,Ct(t),_t(t),(function(){if(T.browser.isChrome()||T.browser.isFirefox()){var e=t.selection.getRng();D.setEditorTimeout(t,(function(){t.selection.setRng(e),t.execCommand("Delete")}),0)}else t.execCommand("Delete")}))}}(t)),t.on("copy",function(t){return function(e){Tt(t)&&Pt(e,Ct(t),_t(t),s)}}(t))}(t),function(t,e,n){(function(t){return t.getParam("paste_block_drop",!1)})(t)&&t.on("dragend dragover draggesture dragdrop drop drag",(function(t){t.preventDefault(),t.stopPropagation()})),A(t)||t.on("drop",(function(t){var e=t.dataTransfer;e&&e.files&&e.files.length>0&&t.preventDefault()})),t.on("drop",(function(r){var o=kt(t,r);if(!r.isDefaultPrevented()&&!n.get()){var i,a=e.getDataTransferItems(r.dataTransfer),u=e.hasContentType(a,H());if((e.hasHtmlOrText(a)&&(!(i=a["text/plain"])||0!==i.indexOf("file://"))||!e.pasteImageData(r,o))&&o&&function(t){return t.getParam("paste_filter_drop",!0)}(t)){var s=a["mce-internal"]||a["text/html"]||a["text/plain"];s&&(r.preventDefault(),D.setEditorTimeout(t,(function(){t.undoManager.transact((function(){a["mce-internal"]&&t.execCommand("Delete"),Ot(t,o),s=q(s),a["text/html"]?e.pasteHtml(s,u):e.pasteText(s)}))})))}}})),t.on("dragstart",(function(t){n.set(!0)})),t.on("dragover dragend",(function(e){A(t)&&!1===n.get()&&(e.preventDefault(),Ot(t,kt(t,e))),"dragend"===e.type&&n.set(!1)}))}(t,o,e),function(t){return{clipboard:t}}(o)}}))}();