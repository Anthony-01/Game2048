webpackJsonp([0],{0:function(t,s){},"8RFg":function(t,s){},"94MW":function(t,s){},"9k1f":function(t,s){},Cfvv:function(t,s,e){"use strict";var a=e("YDjB"),i=e.n(a),o=e("zz5V");var n=function(t){e("9k1f")},r=e("VU/8")(i.a,o.a,!1,n,null,null);s.default=r.exports},Df6L:function(t,s){},EEGV:function(t,s){},LSBg:function(t,s){},Lb5u:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i=e("/ocq"),o=e("GQaK"),n={props:{food:{type:Object}},created:function(){},data:function(){return{}},methods:{addCart:function(t){this.food.count?this.food.count++:a.a.set(this.food,"count",1),console.log(t),console.log(this.food.count),this.$emit("add-event",t.target)},decreaseCart:function(){this.food.count>0&&(this.food.count--,console.log(this.food.count))}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-control"},[e("transition",{attrs:{name:"btn-move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"btn-decrease icon-remove_circle_outline",on:{click:t.decreaseCart}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"btn-add icon-add_circle",on:{click:function(s){return t.addCart(s)}}})],1)},staticRenderFns:[]};var l=e("VU/8")(n,r,!1,function(t){e("net5")},null,null).exports,c={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectedFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectedFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectedFoods.forEach(function(s){t+=s.count}),t},deliDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice>0&&this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},listShow:function(){if(this.totalCount<=0)return this.fold=!0,!1;var t=!this.fold;return t&&(this.scroll?this.scroll.refresh():this.scroll=new o.a(this.$refs.listContent,{click:!0})),t}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,this.dropBalls.push(e),void console.log(this.balls,this.dropBalls)}},dropBeforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClientRect(),i=a.left-32,o=-(window.innerHeight-a.top-22);t.style.display="",t.style.transform="translate3d(0px, "+o+"px, 0)",t.style.webkitTransform="translate3d(0px, "+o+"px, 0)";var n=t.getElementsByClassName("inner")[0];n.style.transform="translate3d("+i+"px, 0, 0)",n.style.webkitTransform="translate3d("+i+"px, 0, 0)"}}},dropEnter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.transform="translate3d(0px, 0, 0)",t.style.webkitTransform="translate3d(0px, 0, 0)";var s=t.getElementsByClassName("inner")[0];s.style.transform="translate3d(0px, 0, 0)",s.style.webkitTransform="translate3d(0px, 0, 0)"})},dropAfterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},foldAfterEnter:function(t){t.style.transform="translate3d(0, -100%, 0)"},foldBeforeLeave:function(t){t.style.transform=""},empty:function(){this.selectedFoods.forEach(function(t){t.count=0})},maskAfterEnter:function(t){t.style.background="rgba(7, 17, 27, 0.6)"},maskBeforeLeave:function(t){t.style.background=""},hiddenMask:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},components:{"cart-control":l}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"mask"},on:{"after-enter":t.maskAfterEnter,"before-leave":t.maskBeforeLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hiddenMask}})]),t._v(" "),e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrap"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:{highlight:t.totalPrice>=t.minPrice}},[t._v("\n        "+t._s(t.deliDesc)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,a){return e("transition",{key:a,attrs:{name:"drop"},on:{"before-enter":t.dropBeforeEnter,"after-enter":t.dropAfterEnter,enter:t.dropEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"item.show"}],staticClass:"ball"},[e("div",{staticClass:"inner"})])])}),1),t._v(" "),e("transition",{attrs:{name:"fold"},on:{"after-enter":t.foldAfterEnter,"before-leave":t.foldBeforeLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("span",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectedFoods,function(s,a){return e("li",{key:a,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cart-control",{attrs:{food:s}})],1)])}),0)])])])],1)},staticRenderFns:[]};var u=e("VU/8")(c,d,!1,function(t){e("Oyeu")},null,null).exports,f={props:{size:{type:Number},score:{type:Number}},data:function(){return{}},computed:{starType:function(){return"star-"+this.size},typeClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=Math.floor(s),a=s%1!=0,i=0;i<e;i++)t.push("on");for(a&&t.push("half");t.length<5;)t.push("off");return t}}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.typeClasses,function(t){return s("span",{staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var v=e("VU/8")(f,h,!1,function(t){e("LSBg")},null,null).exports,p={created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hiddenDetail:function(){this.detailShow=!1}},props:{seller:{type:Object}},components:{star:v}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{alt:"商家图标",width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearFix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"detail-name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{key:a,staticClass:"item-support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.seller.bulletin))])])])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.hiddenDetail}})])]):t._e()])],1)},staticRenderFns:[]};var m={created:function(){var t=this;this.$http.get("/api/seller").then(function(s){t.seller=s.body.data})},data:function(){return{seller:{}}},components:{"my-head":e("VU/8")(p,_,!1,function(t){e("EEGV")},"data-v-63f05ab4",null).exports,"shop-cart":u}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("my-head",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"top border-lpx"},[e("router-link",{staticClass:"route-item",attrs:{to:"/goods"}},[t._v("商品")]),t._v(" "),e("router-link",{staticClass:"route-item",attrs:{to:"/router_1"}},[t._v("评论")]),t._v(" "),e("router-link",{staticClass:"route-item",attrs:{to:"/router_2"}},[t._v("商家")])],1),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var g=e("VU/8")(m,C,!1,function(t){e("t7QE")},"data-v-3619c1d0",null).exports,w=e("8+8L"),y=(e("Lb5u"),{data:function(){return{showFlag:!1}},props:{selectedFood:{type:Object}},watch:{selectedFood:function(t,s){console.log("%c红色:","background:#aaa;color:#bada55"),console.log(this.selectedFood)}},methods:{show:function(){}}}),b={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"foodDetail"})},staticRenderFns:[]};var k=e("VU/8")(y,b,!1,function(t){e("8RFg")},null,null).exports,x={created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("/api/goods").then(function(s){var e=s.body;0==e.errno&&(t.goods=e.data,t.dataCurrent=!0)})},mounted:function(){var t=this;this.mounted=!0,console.log("图片数量:",this.imCount),this.$nextTick(function(){t._initScroll()})},data:function(){return{goods:[],menuScroll:null,foodsScroll:null,heightList:[],foodHeight:0,dataCurrent:!1,mounted:!1,loadNum:0,imgCount:0,selectedFood:{},detailFlag:!1}},computed:{selectedFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count>0&&t.push(s)})}),t},currentIndex:function(){for(var t=0;t<this.heightList.length;t++){var s=this.heightList[t],e=this.heightList[t+1];if(!e||this.foodHeight>=s&&this.foodHeight<e)return t}return 0}},props:{seller:{type:Object}},methods:{loadImg:function(t){var s=this;this.imCount=this.$refs.foodsWrapper.getElementsByClassName("food-img").length,this.loadNum++,this.loadNum==this.imCount&&this.$nextTick().then(function(){s._calculate()})},selectFood:function(t,s){this.selectedFood=t,this.detailFlag=!0},selectedMenu:function(t,s){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)},addEvent:function(t){this.$refs.shopCart.drop(t)},_initScroll:function(){var t=this;this.menuScroll=new o.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new o.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.foodHeight=Math.abs(Math.round(s.y))})},_calculate:function(){var t=0;this.heightList.push(t);var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");console.log(s[0].clientHeight);for(var e=0;e<s.length;e++)t+=s[e].clientHeight,this.heightList.push(t)},getCurrentHeight:function(){}},components:{"shop-cart":u,"cart-control":l,food:k}},E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",{staticClass:"menu"},t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{currentItem:a===t.currentIndex},on:{click:function(s){return t.selectedMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>=0,expression:"item.type >= 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n          "+t._s(s.name)+"\n        ")])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",{staticClass:"food"},t._l(t.goods,function(s,a){return e("li",{key:a,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,a){return e("li",{key:a,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{staticClass:"food-img",attrs:{src:s.icon},on:{load:function(s){return t.loadImg(s)}}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))]),t._v(" "),e("div",{staticClass:"cart-wrapper"},[e("cart-control",{attrs:{food:s},on:{"add-event":t.addEvent}})],1)])])])}),0)])}),0)]),t._v(" "),e("shop-cart",{ref:"shopCart",attrs:{minPrice:t.seller.minPrice,deliveryPrice:t.seller.deliveryPrice,selectedFoods:t.selectedFoods}})],1)},staticRenderFns:[]};var F=e("VU/8")(x,E,!1,function(t){e("Df6L")},null,null).exports,P=e("Cfvv"),N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("路由三")])},staticRenderFns:[]};var $=e("VU/8")({data:function(){return{}},created:function(){}},N,!1,function(t){e("94MW")},null,null).exports;a.a.use(w.a),a.a.use(i.a),a.a.config.productionTip=!1;var B=[{path:"/",redirect:"goods"},{path:"/goods",component:F},{path:"/router_1",component:P.default},{path:"/router_2",component:$}],L=new i.a({routes:B});new a.a({el:"#app",router:L,components:{App:g},template:"<app/>",data:{}})},Oyeu:function(t,s){},YDjB:function(t,s){},net5:function(t,s){},t7QE:function(t,s){},zz5V:function(t,s,e){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("路由二")])},staticRenderFns:[]};s.a=a}},["NHnr"]);
//# sourceMappingURL=app.e134df071c8046f4890f.js.map