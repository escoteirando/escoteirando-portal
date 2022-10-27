import{c as T,h as k,e as G,d as J}from"./render.558c5ded.js";import{c as d,h,r as w,S as A,o as P,t as Q,n as I,q as M,g as R,R as D,k as K,m as $,w as S,v as F,U as Y,V as Z,W as q,X as ee,x as te,_ as ne,y as oe,L as ie,E as ae}from"./index.19c12096.js";import{g as re,a as le,b as se,c as V}from"./scroll.75967ab9.js";var be=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},k(f.default))}}),ye=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},k(f.default))}});function ue(){const e=w(!A.value);return e.value===!1&&P(()=>{e.value=!0}),e}const X=typeof ResizeObserver!="undefined",N=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let n=null,t,i={width:-1,height:-1};function l(s){s===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(clearTimeout(n),n=null,t){const{offsetWidth:s,offsetHeight:a}=t;(s!==i.width||a!==i.height)&&(i={width:s,height:a},f("resize",i))}}const{proxy:g}=R();if(X===!0){let s;const a=m=>{t=g.$el.parentNode,t?(s=new ResizeObserver(l),s.observe(t),c()):m!==!0&&M(()=>{a(!0)})};return P(()=>{a()}),Q(()=>{clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),I}else{let m=function(){clearTimeout(n),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",l,D.passive),a=void 0)},p=function(){m(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",l,D.passive),c())};const s=ue();let a;return P(()=>{M(()=>{t=g.$el,t&&p()})}),Q(m),g.trigger=l,()=>{if(s.value===!0)return h("object",{style:N.style,tabindex:-1,type:"text/html",data:N.url,"aria-hidden":"true",onLoad:p})}}}}),we=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=R(),i=K(F,$);if(i===$)return console.error("QHeader needs to be child of QLayout"),$;const l=w(parseInt(e.heightHint,10)),c=w(!0),g=d(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return c.value===!0?l.value:0;const o=l.value-i.scroll.value.position;return o>0?o:0}),a=d(()=>e.modelValue!==!0||g.value===!0&&c.value!==!0),m=d(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),p=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const o=i.rows.value.top,b={};return o[0]==="l"&&i.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),o[2]==="r"&&i.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),b});function u(o,b){i.update("header",o,b)}function y(o,b){o.value!==b&&(o.value=b)}function O({height:o}){y(l,o),u("size",o)}function _(o){m.value===!0&&y(c,!0),n("focusin",o)}S(()=>e.modelValue,o=>{u("space",o),y(c,!0),i.animate()}),S(s,o=>{u("offset",o)}),S(()=>e.reveal,o=>{o===!1&&y(c,e.modelValue)}),S(c,o=>{i.animate(),n("reveal",o)}),S(i.scroll,o=>{e.reveal===!0&&y(c,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const C={};return i.instances.header=C,e.modelValue===!0&&u("size",l.value),u("space",e.modelValue),u("offset",s.value),Q(()=>{i.instances.header===C&&(i.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const o=G(f.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(B,{debounce:0,onResize:O})),h("header",{class:p.value,style:z.value,onFocusin:_},o)}}}),ze=T({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:n}}=R(),t=K(F,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;Y(Z,!0);const i=d(()=>{const l={};return t.header.space===!0&&(l.paddingTop=`${t.header.size}px`),t.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(l.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),l});return()=>h("div",{class:"q-page-container",style:i.value},k(f.default))}});const{passive:j}=D,ce=["both","horizontal","vertical"];var de=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ce.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,l;S(()=>e.scrollTarget,()=>{s(),g()});function c(){t!==null&&t();const p=Math.max(0,le(i)),z=se(i),u={top:p-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:p,left:z},n.directionChanged=n.direction!==y,n.delta=u,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),f("scroll",{...n})}function g(){i=re(l,e.scrollTarget),i.addEventListener("scroll",a,j),a(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",a,j),i=void 0)}function a(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[z,u]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{u(z),t=null}}}const{proxy:m}=R();return P(()=>{l=m.$el.parentNode,g()}),Q(()=>{t!==null&&t(),s()}),Object.assign(m,{trigger:a,getPosition:()=>n}),I}}),xe=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=R(),i=w(null),l=w(t.screen.height),c=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),a=w(A.value===!0?0:V()),m=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),u=d(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};g.value=v,e.onScroll!==void 0&&n("scroll",v)}}function O(r){const{height:v,width:x}=r;let H=!1;l.value!==v&&(H=!0,l.value=v,e.onScrollHeight!==void 0&&n("scroll-height",v),C()),c.value!==x&&(H=!0,c.value=x),H===!0&&e.onResize!==void 0&&n("resize",r)}function _({height:r}){s.value!==r&&(s.value=r,C())}function C(){if(e.container===!0){const r=l.value>s.value?V():0;a.value!==r&&(a.value=r)}}let o;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:i,height:l,containerHeight:s,scrollbarWidth:a,totalWidth:d(()=>c.value+a.value),rows:d(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:q({size:0,offset:0,space:!1}),right:q({size:300,offset:0,space:!1}),footer:q({size:0,offset:0,space:!1}),left:q({size:300,offset:0,space:!1}),scroll:g,animate(){o!==void 0?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),o=void 0},155)},update(r,v,x){b[r][v]=x}};if(Y(F,b),V()>0){let x=function(){r=null,v.classList.remove("hide-scrollbar")},H=function(){if(r===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},E=function(W){r!==null&&W==="remove"&&(clearTimeout(r),x()),window[`${W}EventListener`]("resize",H)},r=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ee(()=>{E("remove")})}return()=>{const r=J(f.default,[h(de,{onScroll:y}),h(B,{onResize:O})]),v=h("div",{class:m.value,style:p.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(B,{onResize:_}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:u.value},[v])])]):v}}});let U=new Date(0),L=null;function fe(){const e="https://mappa-proxy.fly.dev";function f(){return new Promise(async n=>{if(L&&U>new Date-1e3*60*5){console.debug("getHC: cached data",L),n(L.status=="HEALTHY"?"OK":L.mappa_server.status);return}fetch(`${e}/hc`).then(t=>t.json()).then(t=>{U=new Date,L=t,console.debug("getHC: got data",t),n(t.status=="HEALTHY"?"OK":t.mappa_server.status)}).catch(()=>n("ERROR"))})}return{getHC:f}}const ve=te({name:"ProxyInfo",data(){return{proxyData:w("loading...")}},mounted(){fe().getHC().then(e=>{this.proxyData=e})}});function he(e,f,n,t,i,l){return oe(),ie("div",null,"Proxy "+ae(e.proxyData),1)}var Se=ne(ve,[["render",he]]);export{Se as P,xe as Q,ye as a,be as b,we as c,ze as d};
