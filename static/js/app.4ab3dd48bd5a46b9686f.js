webpackJsonp([1],{"09yM":function(t,e){},"3MAQ":function(t,e,i){t.exports=i.p+"static/img/bg_3.6166ef2.jpg"},C4En:function(t,e,i){t.exports=i.p+"static/img/bg_2.ac5f508.jpg"},LeOU:function(t,e,i){t.exports=i.p+"static/img/bg_4.1dd86b0.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("C7Lr")({name:"App"},s,!1,function(t){i("q27d")},null,null).exports,a=i("p7sN"),c={name:"Header",data:function(){return{msg:"Welcome To Wu Chgan Personal Homepage",activeIndex:"1"}},created:function(){this.activeIndex=this.$route.query.index||"1"},methods:{handleSelect:function(t,e){"99"===t?window.open("https://blog.csdn.net/qq_33384191"):"2"===t?this.$router.push({path:"/resume",query:{index:"2"}}):"1"===t?this.$router.push({path:"/",query:{index:"1"}}):"3-1"===t?window.open("http://220.160.52.229:9001/ggfwwt-person/person/home"):"3-2"===t?window.open("https://cx.fjszgjj.com/wsyyt/"):"3-3"===t&&window.open("http://soft.feitc.org.cn/soft/authorize/view/login/login.html")}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"header"}},[i("div",{staticClass:"wf-table"},[t._m(0),t._v(" "),i("div",{staticClass:"wf-td",staticStyle:{width:"100%"}},[i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[t._v("首页")]),t._v(" "),i("el-menu-item",{attrs:{index:"2"}},[t._v("关于我")]),t._v(" "),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[t._v("服务大厅")]),t._v(" "),i("el-menu-item",{attrs:{index:"3-1"}},[t._v("福建省12333公共服务平台")]),t._v(" "),i("el-menu-item",{attrs:{index:"3-2"}},[t._v("福建省住房公积金网上办事大厅")]),t._v(" "),i("el-menu-item",{attrs:{index:"3-3"}},[t._v("福建省计算机技术与软件专业资格水平考试")])],2),t._v(" "),i("el-menu-item",{attrs:{index:"99"}},[t._v("我的博客")])],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wf-td bit-logo-bar",staticStyle:{"padding-left":"50px","padding-right":"50px"},attrs:{id:"branding"}},[e("span",{staticStyle:{color:"rgb(0, 0, 0)","font-family":"georgia","font-size":"34px"}},[e("strong",[this._v("Chgan")])])])}]};var u=i("C7Lr")(c,o,!1,function(t){i("kBTQ"),i("kYGn")},"data-v-255f81fe",null).exports,l=i("rgUp"),m={name:"HelloWorld",components:{Head:u},data:function(){return{msg:"Welcome To Wu Chgan Personal Homepage",urls:[l]}},methods:{}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Head"),this._v(" "),e("div",[e("div",{staticClass:"vc-element"},[e("div",{staticClass:"demo-image__lazy"},this._l(this.urls,function(t){return e("el-image",{key:t,staticClass:"img",attrs:{src:t,lazy:""}})}),1)])])],1)},staticRenderFns:[]};var d=i("C7Lr")(m,p,!1,function(t){i("rpPu")},"data-v-c11d5b26",null).exports,f=i("C4En"),h=i("3MAQ"),g=i("LeOU"),v={components:{Head:u},data:function(){return{imgHeight:"150px",urls:[f,h,g],music:{isPlay:!1,currentTime:0,maxTime:0,volume:100}}},mounted:function(){var t=this;window.addEventListener("resize",function(){t.$refs.imgHeight[0]&&(t.imgHeight=t.$refs.imgHeight[0].height,t.imgLoad())}),this.$nextTick(function(){setInterval(t.listenMusic,1e3)})},methods:{imgLoad:function(){var t=this;this.$nextTick(function(){t.imgHeight=t.$refs.imgHeight[0].height})},listenMusic:function(){this.$refs.music&&(this.$refs.music.readyState&&(this.music.maxTime=this.$refs.music.duration),this.music.isPlay=!this.$refs.music.paused,this.music.currentTime=this.$refs.music.currentTime)},play:function(){this.$refs.music.paused?this.$refs.music.play():this.$refs.music.pause(),this.music.isPlay=!this.$refs.music.paused,this.$nextTick(function(){document.getElementById("play").blur()})},changeTime:function(t){this.$refs.music.currentTime=t},changeVolume:function(t){this.music.volume+=t,this.music.volume>100&&(this.music.volume=100),this.music.volume<0&&(this.music.volume=0),this.$refs.music.volume=this.music.volume/100},formatTime:function(t){var e=parseInt(t),i=parseInt(e/60),n=parseInt(e%60);return(i<10?"0":"")+parseInt(e/60)+":"+(n<10?"0":"")+parseInt(e%60)}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Head"),t._v(" "),n("div",[n("el-row",[n("el-col",{attrs:{span:4}},[n("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-progress",{attrs:{color:"#67C23A",type:"circle",percentage:t.music.volume}}),n("br"),t._v(" "),n("el-button",{attrs:{icon:"el-icon-minus",circle:""},on:{click:function(e){return t.changeVolume(-10)}}}),t._v(" "),n("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:function(e){return t.changeVolume(10)}}})],1),t._v(" "),n("el-button",{attrs:{slot:"reference",id:"play",icon:t.music.isPlay?"el-icon-refresh":"el-icon-caret-right",circle:""},on:{click:t.play},slot:"reference"})],1)],1),t._v(" "),n("el-col",{staticStyle:{"padding-left":"20px"},attrs:{span:14}},[n("el-slider",{staticStyle:{width:"100%"},attrs:{"format-tooltip":t.formatTime,max:t.music.maxTime},on:{change:t.changeTime},model:{value:t.music.currentTime,callback:function(e){t.$set(t.music,"currentTime",e)},expression:"music.currentTime"}})],1),t._v(" "),n("el-col",{staticStyle:{padding:"9px 0px 0px 10px",color:"#909399","font-size":"13px"},attrs:{span:6}},[t._v("\n                "+t._s(t.formatTime(t.music.currentTime))+"/"+t._s(t.formatTime(t.music.maxTime))+"\n            ")])],1),t._v(" "),n("audio",{ref:"music",attrs:{loop:"",autoplay:"",preload:"auto"}},[n("source",{attrs:{src:i("TvFB"),type:"audio/mpeg"}})])],1),t._v(" "),n("div",[n("section",{staticClass:"no-margin",attrs:{id:"main-slider"}},[n("div",{staticClass:"block"},[n("el-carousel",{attrs:{arrow:"never","indicator-position":"none",height:t.imgHeight+"px"}},t._l(t.urls,function(e){return n("el-carousel-item",{key:e},[n("el-row",[n("el-col",[n("img",{ref:"imgHeight",refInFor:!0,staticClass:"bannerImg",staticStyle:{"max-height":"900px"},attrs:{src:e,alt:""},on:{load:t.imgLoad}})])],1)],1)}),1)],1)])])],1)},staticRenderFns:[]};var x=i("C7Lr")(v,_,!1,function(t){i("uuQI")},"data-v-9b016032",null).exports,y=a.a.prototype.push;a.a.prototype.push=function(t){return y.call(this,t).catch(function(t){return t})},n.default.use(a.a);var T=new a.a({routes:[{path:"/",name:"HomePage",component:d},{path:"/resume",name:"Resume",component:x}]}),b=i("TcQY"),w=i.n(b);i("09yM");n.default.config.productionTip=!1,n.default.use(w.a),new n.default({el:"#app",router:T,components:{App:r},template:"<App/>"})},TvFB:function(t,e,i){t.exports=i.p+"static/media/dthsz.96f174b.mp3"},kBTQ:function(t,e){},kYGn:function(t,e){},q27d:function(t,e){},rgUp:function(t,e,i){t.exports=i.p+"static/img/bg_1.3f410ba.jpg"},rpPu:function(t,e){},uuQI:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4ab3dd48bd5a46b9686f.js.map