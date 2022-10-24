(function(){"use strict";var t={6876:function(t,i,e){var n=e(6369),o=function(){var t=this,i=t._self._c;return i("div",{staticClass:"app"},[i("div",{ref:"top",staticClass:"top"},t._l(t.cardAll,(function(e,n){return i("div",{key:n,ref:e.id,refInFor:!0,staticClass:"card",style:{left:e.left,top:e.top},attrs:{id:e.id},on:{touchstart:function(i){return t.move(e)}}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.icon}})])])})),0),i("div",{ref:"botton",staticClass:"botton"},t._l(t.removeAll,(function(e,n){return i("div",{key:n,ref:e.id,refInFor:!0,staticClass:"card",class:{scale:e.icon===t.isIcon},style:{left:e.left}},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":e.icon}})])])})),0),i("button",{on:{click:t.restart}},[t._v("重新开始")]),t.isMask?i("div",{staticClass:"end"},[i("span",[t._v(" "+t._s(t.result))]),i("button",{on:{click:t.restart}},[t._v("重新开始")])]):t._e()])},s=[],r=(e(7658),{name:"app",mounted(){this.createCard()},data(){return{icon:[{icon:"#icon-shafaB"},{icon:"#icon-yiziB"},{icon:"#icon-dayinjiB"},{icon:"#icon-xiangjiB"},{icon:"#icon-dianfengshanB"},{icon:"#icon-dianfanbaoB"},{icon:"#icon-shouyinjiB"},{icon:"#icon-chuifengjiB"},{icon:"#icon-yupenB"},{icon:"#icon-dengpaoB"}],iconAll:[],cardAll:[],removeAll:[],canMove:!0,result:"您赢了",isMask:!1,isIcon:""}},methods:{createIconAll(){for(let t=0;t<18;t++)this.iconAll.push(...this.icon);this.iconAll.sort((()=>Math.random()-.5))},createCard(){this.createIconAll();for(let t=5;t>=0;t--)for(let i=0;i<10;i++)for(let e=0;e<7;e++){let n=t%2===0?23.85:0,o=Math.random()>.5&&this.iconAll.pop();o&&this.cardAll.push({id:`m${t}-${i}-${e}`,top:47.7*i+n+"rem",left:47.7*e+n+"rem",icon:o.icon})}this.mask()},mask(){this.cardAll.forEach((async t=>{const i=t.id.substring(1).split("-").map((t=>Number(t))),e=(i[0]-1)%2===0;for(let o=i[0]-1;o>=0;o--){const s=(o-1)%2===0;if(e===s)this.$nextTick((()=>{const e=document.querySelector(`#m${o}-${i[1]}-${i[2]}`);e&&document.querySelector(`#${t.id}`).classList.add("disabled")}));else if(!e&&s){await(0,n.Y3)();const e=[`${o}-${i[1]}-${i[2]}`,`${o}-${i[1]}-${i[2]+1}`,`${o}-${i[1]+1}-${i[2]}`,`${o}-${i[1]+1}-${i[2]+1}`].every((t=>!document.querySelector(`#m${t}`)));if(!e){this.$refs[t.id][0].classList.add("disabled");break}this.$refs[t.id][0].classList.remove("disabled")}else if(e&&!s){await(0,n.Y3)();const e=[`${o}-${i[1]}-${i[2]}`,`${o}-${i[1]}-${i[2]-1}`,`${o}-${i[1]-1}-${i[2]}`,`${o}-${i[1]-1}-${i[2]-1}`].every((t=>!document.querySelector(`#m${t}`)));if(!e){this.$refs[t.id][0].classList.add("disabled");break}this.$refs[t.id][0].classList.remove("disabled")}}}))},move(t){let i=this.$refs[t.id],e=i[0].classList[1],n=this.removeAll.length;if(e||!this.canMove||n>6)return;this.canMove=!1;let o=this.$refs.botton.offsetTop,s=0;n&&(s=47.7*n),i[0].style.top=o+"px",i[0].style.left=s+5+"rem",i[0].transitionNameCount=0,i[0].ontransitionend=()=>{if(i[0].transitionNameCount++,2===i[0].transitionNameCount){t={...t,left:s+"rem"},this.removeAll.push(t),this.$refs[t.id][0].remove();let i=this.removeAll.reduce(((i,e)=>e.icon===t.icon?i+1:i),0);3===i&&(this.removeAll.forEach((i=>{i.icon==t.icon&&(this.isIcon=t.icon)})),setTimeout((()=>{this.isIcon="",this.removeAll=this.removeAll.filter((i=>i.icon!=t.icon)).map(((t,i)=>({...t,left:47.7*i+"rem"})))}),300)),setTimeout((()=>{this.$refs.top.childNodes.length?7===this.removeAll.length&&(this.result="您输了！",this.isMask=!0):(this.result="您赢了！",this.isMask=!0)}),301),this.canMove=!0,this.mask()}}},restart(){this.iconAll=[],this.cardAll=[],this.removeAll=[],this.isMask=!1,this.createCard()}}}),c=r,a=e(1001),l=(0,a.Z)(c,o,s,!1,null,null,null),u=l.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(u)}).$mount("#app")}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var s=i[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(i,n,o,s){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],s=t[u][2];for(var c=!0,a=0;a<n.length;a++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[a])}))?n.splice(a--,1):(c=!1,s<r&&(r=s));if(c){t.splice(u--,1);var l=o();void 0!==l&&(i=l)}}return i}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,o,s]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var o,s,r=n[0],c=n[1],a=n[2],l=0;if(r.some((function(i){return 0!==t[i]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(a)var u=a(e)}for(i&&i(n);l<r.length;l++)s=r[l],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(u)},n=self["webpackChunkdispel"]=self["webpackChunkdispel"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(6876)}));n=e.O(n)})();
//# sourceMappingURL=app.6894bee1.js.map