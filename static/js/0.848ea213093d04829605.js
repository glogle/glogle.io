webpackJsonp([0],{"/5L7":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"homePage",props:["winWidth","winHeight"],data:function(){return{bgImg2:e("Ng85"),swiperOption:{pagination:{el:".swiper-pagination"}},swiperSlides:[{id:"001",color:"#eee",img:""},{id:"002",color:"#eee",img:""},{id:"003",color:"#eee",img:""}]}},mounted:function(){var t=this;setInterval(function(){t.swiperSlides.length<t.swiperSlides.length&&t.swiperSlides.push(t.swiperSlides.length+1)},3e3)}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"homePage",style:{minHeight:t.winHeight+"px",backgroundImage:"url("+t.bgImg2+")"}},[e("div",{staticClass:"bannerBox"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperSlides,function(i,s){return e("swiper-slide",{key:s},[e("div",{staticClass:"viewItem"},[t._v("\r\n          "+t._s(i.index)+"\r\n        ")])])}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"},[e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),e("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})])],2)],1)])},staticRenderFns:[]};var r=e("C7Lr")(s,n,!1,function(t){e("wthr")},null,null);i.default=r.exports},Ng85:function(t,i,e){t.exports=e.p+"static/img/bgImg2.6ba543f.jpg"},wthr:function(t,i){}});
//# sourceMappingURL=0.848ea213093d04829605.js.map