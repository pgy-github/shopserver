webpackJsonp([9],{"3SAg":function(t,n){},FUHG:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"goods"},[o("van-row",{staticClass:"left_menu",on:{click:t.onClickLeft}},[o("van-icon",{attrs:{name:"arrow-left"}})],1),t._v(" "),o("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,function(t){return o("van-swipe-item",{key:t},[o("img",{attrs:{src:t,width:"100%"}})])}),1),t._v(" "),o("van-cell-group",[o("van-cell",[o("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),t._v(" "),o("div",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))])]),t._v(" "),o("van-cell",{staticClass:"goods-express"},[o("van-col",{attrs:{span:"10"}},[t._v("运费："+t._s(t.goods.express))]),t._v(" "),o("van-col",{attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.remain))])],1)],1),t._v(" "),o("van-cell-group",{staticClass:"goods-cell-group",on:{click:function(n){return t.buy(1)}}},[o("van-cell",{attrs:{value:"",icon:"shop-o","is-link":""},on:{click:t.sorry},scopedSlots:t._u([{key:"title",fn:function(){return[o("span",{staticClass:"van-cell-text"},[t._v("小米11 Pro 8GB+256GB 黑色")])]},proxy:!0}])})],1),t._v(" "),o("van-cell-group",{staticClass:"goods-cell-group"},[o("van-cell",{attrs:{value:"进入店铺",icon:"shop-o","is-link":""},on:{click:t.sorry},scopedSlots:t._u([{key:"title",fn:function(){return[o("span",{staticClass:"van-cell-text"},[t._v("有赞的店")]),t._v(" "),o("van-tag",{staticClass:"goods-tag",attrs:{type:"danger"}},[t._v("官方")])]},proxy:!0}])}),t._v(" "),o("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""},on:{click:t.sorry}})],1),t._v(" "),o("van-cell-group",{staticClass:"goods-cell-group"},[o("van-cell",{attrs:{title:"查看商品详情","is-link":""},on:{click:t.sorry}})],1),t._v(" "),o("van-tabs",{staticStyle:{"min-height":"400px"},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[o("van-tab",{attrs:{title:"商品详情"}},[""==t.content?o("van-empty",{attrs:{image:"search",description:"暂无详情"}}):o("van-row",[t._v("\n        "+t._s(t.content)+"\n      ")])],1),t._v(" "),o("van-tab",{attrs:{title:"商品参数"}},[""==t.content?o("van-empty",{attrs:{image:"error",description:"暂无详情"}}):o("van-row",[t._v("\n        "+t._s(t.can)+"\n      ")])],1),t._v(" "),o("van-tab",{attrs:{title:"买家评论"}},[""==t.pinglun?o("van-empty",{attrs:{image:"search",description:"暂无详情"}}):o("van-row",[t._v("\n        "+t._s(t.pinglun)+"\n      ")])],1)],1),t._v(" "),o("van-goods-action",[o("van-goods-action-icon",{attrs:{icon:"chat-o"},on:{click:t.sorry}},[t._v("\n      客服\n    ")]),t._v(" "),o("van-goods-action-icon",{attrs:{icon:"cart-o"},on:{click:t.onClickCart}},[t._v("\n      购物车\n    ")]),t._v(" "),o("van-goods-action-button",{attrs:{type:"warning"},on:{click:function(n){return t.buy(1)}}},[t._v("\n      加入购物车\n    ")]),t._v(" "),o("van-goods-action-button",{attrs:{type:"danger"},on:{click:function(n){return t.buy(2)}}},[t._v("\n      立即购买\n    ")])],1),t._v(" "),o("van-sku",{attrs:{sku:t.sku,goods:t.goodstype,"goods-id":t.goodsId,quota:t.quota,"quota-used":t.quotaUsed,"hide-stock":t.sku.hide_stock,"message-config":t.messageConfig},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}})],1)},staticRenderFns:[]};var a=o("VU/8")({name:"goods",data:function(){return{active:0,content:"",can:"",pinglun:"",show:!1,sku:{tree:[{k:"颜色",k_s:"s1",v:[{id:"1",name:"红色",imgUrl:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png",previewImgUrl:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png"},{id:"2",name:"蓝色",imgUrl:"https://img01.yzcdn.cn/2.jpg",previewImgUrl:"https://img01.yzcdn.cn/2p.jpg"}],largeImageMode:!0}],list:[{id:2259,s1:"1",s2:"2",price:100,stock_num:110}],price:"1.00",stock_num:227,collection_id:2261,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"1",placeholder:""}],hide_stock:!1},goodstype:{picture:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d3a36269683536a9d46a044392ed37ab.png"},messageConfig:{},goodsId:1,quota:0,quotaUsed:0,goods:{title:"美国伽力果（约680g/3个）",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},methods:{formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onBuyClicked:function(){this.show=!1,this.$router.push("addOrder")},onAddCartClicked:function(){},onClickCart:function(){this.$router.push("cart")},buy:function(t){this.show=!0},onClickLeft:function(){this.$router.go(-1)},sorry:function(){this.$toast("暂无后续逻辑~")}}},s,!1,function(t){o("3SAg")},null,null);n.default=a.exports}});
//# sourceMappingURL=9.a1b797a4a5f46474f6ba.js.map