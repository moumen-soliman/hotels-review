(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)a=o[d],s[a]&&f.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fdc":function(t,e,n){},"1f1f":function(t,e,n){"use strict";var r=n("0fdc"),s=n.n(r);s.a},"2e47":function(t,e,n){"use strict";var r=n("4530"),s=n.n(r);s.a},"2ef3":function(t,e,n){"use strict";var r=n("3189"),s=n.n(r);s.a},3189:function(t,e,n){},4530:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isLoading?n("loading"):n("router-view")],1)},i=[],a=n("cebc"),o=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading text-center"},[n("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[n("path",{attrs:{opacity:"0.2",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n                            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n                            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),n("path",{attrs:{d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n                            C22.32,8.481,24.301,9.057,26.013,10.047z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])},l=[],u={name:"loading"},d=u,f=(n("2ef3"),n("2877")),h=Object(f["a"])(d,c,l,!1,null,"0b347a44",null),p=h.exports,v={name:"App",components:{loading:p},computed:Object(a["a"])({},Object(o["c"])({isLoading:function(t){return t.hotelsList.isLoading}})),methods:Object(a["a"])({},Object(o["b"])({loadHotelsList:"hotelsList/LOAD_HOTELS_LIST"})),created:function(){this.loadHotelsList()}},g=v,m=(n("5c0b"),Object(f["a"])(g,s,i,!1,null,null,null)),_=m.exports,b=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("list-of-hotels"),n("hotels-details")],1)},y=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hotels-cards"},[n("hotel-card",{attrs:{hotelsList:t.hotelsList,hotelsID:t.hotelsID}})],1)])},O=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.hotelsList,function(e){return n("div",{key:e.id,staticClass:"hotels-cards__item col-sm-12 col-md-4 col-lg-4 text-left"},[n("div",{class:(t.currentSelectedID===e.id?"active ":"")+"hotels-cards__item__inner"},[n("div",{staticClass:"col-12 no-padding"},[n("h6",{on:{click:function(n){t.getSelectedHotelDetails(e.id)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("img",{attrs:{src:e.photo,width:"80"}})]),n("div",{staticClass:"col-8 no-padding"},[n("p",[t._v("\n            "+t._s(t.currentSelectedID===e.id?"$"+t.night*e.pricePerNight+" for "+t.night+" night":"$"+e.pricePerNight+" for 1 night")+"\n          ")]),n("p",[t._v(t._s(e.totalScore)+" "+t._s(t.getScoreOfHotel(e.totalScore)))]),n("p",[t._v(t._s(e.totalReviews+" reviews"))])])])])])}),0)},S=[],D={name:"hotelCard",props:{hotelsList:Array,hotelsID:Array},computed:Object(a["a"])({},Object(o["c"])({night:function(t){return t.price.night}}),{currentSelectedID:function(){var t=this.$store.state.hotelDetails.currentSelectedID;return t||this.hotelsID}}),methods:Object(a["a"])({},Object(o["b"])({getSelectedHotelDetails:"hotelDetails/LOAD_HOTEL_SELECTED_DETAILS_LIST"}),{getScoreOfHotel:function(t){var e;switch(!0){case t>0&&t<=5:e="Not recommended";break;case t>5&&t<=7:e="good";break;case t>7&&t<=8:e="Very good";break;case t>8&&t<=10:e="Excellent";break;default:e="No score yet"}return e}}),created:function(){this.getSelectedHotelDetails(this.hotelsID[0])}},T=D,C=(n("1f1f"),Object(f["a"])(T,E,S,!1,null,"bf761774",null)),I=C.exports,x={name:"listOfHotels",components:{hotelCard:I},computed:Object(a["a"])({},Object(o["c"])({hotelsList:function(t){return t.hotelsList.all},hotelsID:function(t){return t.hotelsList.hotelsIDs}}))},j=x,k=(n("df81"),Object(f["a"])(j,L,O,!1,null,"43473a1a",null)),N=k.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",[n("loading")],1):n("div",[n("div",{staticClass:"selected-hotel"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col text-left"},[n("h1",[t._v(t._s(t.hotelDetails.name))]),n("h4",[t._v("For "),n("night-price"),t._v(" Nights")],1)])]),n("gallery",{attrs:{pictures:t.hotelDetailsImages}}),n("reviews",{attrs:{reviews:t.reviews}})],1)])])},H=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 gallery__main-image"},[n("img",{attrs:{src:t.pictures[t.selectedIndex].photo}})])]),n("div",{staticClass:"wrap"},t._l(t.pictures,function(e,r){return n("div",{key:r,class:{active:r==t.selectedIndex}},[n("div",[n("img",{attrs:{src:e.thumbnail},on:{click:function(e){t.selectedIndex=r}}})])])}),0)])},R=[],$={name:"gallery",props:{pictures:Array},data:function(){return{selectedIndex:0}}},M=$,G=(n("d992"),Object(f["a"])(M,P,R,!1,null,"33141484",null)),B=G.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"reviews col-sm-12 col-md-8 col-lg-8"},[n("h3",{staticClass:"text-left"},[t._v("\n      Reviews "),n("span",{on:{click:function(e){t.sortChecker=!t.sortChecker}}},[n("b",[t._v("↕")])])]),n("div",{staticClass:"reviews__container"},[t._l(t.displayedReviews,function(e){return n("div",{key:e.id},[n("div",{staticClass:"row text-left"},[n("div",{staticClass:"col-1"},[n("span",[t._v(t._s(e.score))])]),n("div",{staticClass:"col-10"},[n("p",[t._v(t._s(e.review))])])])])}),n("br"),n("div",{staticClass:"col-12"},[1!=t.page?n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.page--}}},[t._v("\n          «\n        ")]):t._e(),t._l(t.pages.slice(t.page-1,t.page+5),function(e){return n("button",{key:e,staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(n){t.page=e}}},[t._v("\n          "+t._s(e)+"\n        ")])}),t.page<t.pages.length?n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.page++}}},[t._v("\n          »\n        ")]):t._e()],2)],2)])])},z=[],q=(n("55dd"),{name:"reviews",props:{reviews:Array},data:function(){return{page:1,perPage:3,pages:[],sortChecker:!1}},methods:{setPages:function(){for(var t=Math.floor(this.reviews.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},paginate:function(t){var e=this.page,n=this.perPage,r=e*n-n,s=e*n;return t.slice(r,s)},sortBy:function(t){return function(e,n){return e[t]>n[t]?1:n[t]>e[t]?-1:0}}},computed:{displayedReviews:function(){var t=this.reviews.concat().sort(this.sortBy("score"));return this.sortChecker?this.paginate(t):this.paginate(t.reverse())}},created:function(){this.setPages()}}),J=q,W=(n("2e47"),Object(f["a"])(J,U,z,!1,null,"0da2e014",null)),X=W.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-night form-group"},[n("select",{staticClass:"form-control",domProps:{value:t.night},on:{change:t.updateNight}},t._l(t.nightNumber,function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v("\n      "+t._s(e)+"\n    ")])}),0)])},V=[],K={name:"nightPrice",data:function(){return{nightNumber:[]}},computed:Object(a["a"])({},Object(o["c"])({night:function(t){return t.price.night}})),methods:{updateNight:function(t){this.$store.commit("price/SET_NIGHT_NUMBER",t.target.value)},generateNumber:function(){for(var t=1;t<=99;t++)this.nightNumber.push(t)}},created:function(){this.generateNumber()}},Q=K,Y=(n("bab2"),Object(f["a"])(Q,F,V,!1,null,"36cdd196",null)),Z=Y.exports,tt={name:"hotelsDetails",components:{gallery:B,reviews:X,nightPrice:Z,loading:p},computed:Object(a["a"])({},Object(o["c"])({hotelDetails:function(t){return t.hotelDetails.all},hotelDetailsImages:function(t){return t.hotelDetails.all.pictures},reviews:function(t){return t.hotelDetails.all.reviews},isLoading:function(t){return t.hotelDetails.isLoading}}))},et=tt,nt=(n("b619"),Object(f["a"])(et,A,H,!1,null,"82aec066",null)),rt=nt.exports,st={name:"home",components:{listOfHotels:N,hotelsDetails:rt}},it=st,at=Object(f["a"])(it,w,y,!1,null,null,null),ot=at.exports;r["a"].use(b["a"]);var ct=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:ot}]}),lt={night:1},ut={SET_NIGHT_NUMBER:function(t,e){return t.night=e}},dt={namespaced:!0,state:lt,mutations:ut},ft=(n("96cf"),n("3b8d")),ht=n("bc3a"),pt=n.n(ht),vt=function(){return pt.a.create({baseURL:"https://my-json-server.typicode.com/fly365com/code-challenge",headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"X-Requested-With","Access-Control-Allow-Methods":"GET"}})},gt={all:Array,hotelsIDs:Array,isLoading:Boolean},mt={LOAD_HOTELS_LIST:function(){var t=Object(ft["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("SET_LOADING",!0),t.next=4,pt.a;case 4:vt().get("hotels").then(function(t){return n("SET_HOTELS_LIST",{list:t.data})}).catch(function(t){return t}).finally(function(){return n("SET_LOADING",!1)});case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},_t={SET_HOTELS_LIST:function(t,e){var n=e.list;t.all=n,t.hotelsIDs=n.map(function(t){return t.id})},SET_LOADING:function(t,e){return t.isLoading=e}},bt={namespaced:!0,state:gt,actions:mt,mutations:_t},wt=(n("c5f6"),{all:Array,isLoading:Boolean,currentSelectedID:Number}),yt={LOAD_HOTEL_SELECTED_DETAILS_LIST:function(){var t=Object(ft["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("SET_LOADING",!0),r("SET_CURRENT_ID_SELECTED",n),t.next=5,pt.a;case 5:vt().get("hotelDetails/".concat(n)).then(function(t){return r("SET_HOTEL_DETAILS_LIST",{list:t.data})}).catch(function(t){return t}).finally(function(){return r("SET_LOADING",!1)});case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}()},Lt={SET_HOTEL_DETAILS_LIST:function(t,e){var n=e.list;return t.all=n},SET_CURRENT_ID_SELECTED:function(t,e){return t.currentSelectedID=e},SET_LOADING:function(t,e){return t.isLoading=e}},Ot={namespaced:!0,state:wt,actions:yt,mutations:Lt};r["a"].use(o["a"]);var Et=new o["a"].Store({modules:{price:dt,hotelsList:bt,hotelDetails:Ot}}),St=Et;n("ab8b");r["a"].config.productionTip=!1,new r["a"]({router:ct,store:St,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("8fba"),s=n.n(r);s.a},"8c68":function(t,e,n){},"8fba":function(t,e,n){},b619:function(t,e,n){"use strict";var r=n("8c68"),s=n.n(r);s.a},bab2:function(t,e,n){"use strict";var r=n("f54a"),s=n.n(r);s.a},c840:function(t,e,n){},d992:function(t,e,n){"use strict";var r=n("dbe5"),s=n.n(r);s.a},dbe5:function(t,e,n){},df81:function(t,e,n){"use strict";var r=n("c840"),s=n.n(r);s.a},f54a:function(t,e,n){}});
//# sourceMappingURL=app.c2f0603e.js.map