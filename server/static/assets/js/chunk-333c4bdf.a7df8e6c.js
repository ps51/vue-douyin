(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-333c4bdf"],{"0e42":function(t,s,i){},1803:function(t,s,i){"use strict";var a=i("f1a3"),e=i.n(a);e.a},"1cb8":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"spinner7"},[i("div",{staticClass:"spinner-container container1"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})]),i("div",{staticClass:"spinner-container container2"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})]),i("div",{staticClass:"spinner-container container3"},[i("div",{staticClass:"circle1"}),i("div",{staticClass:"circle2"}),i("div",{staticClass:"circle3"}),i("div",{staticClass:"circle4"})])])}],c={},n=c,l=(i("6aab"),i("2877")),o=Object(l["a"])(n,a,e,!1,null,"578604de",null);o.options.__file="loading.vue";s["a"]=o.exports},"2c78":function(t,s,i){},"6aab":function(t,s,i){"use strict";var a=i("0e42"),e=i.n(a);e.a},"89d4":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myList"},[i("div",{staticClass:"topBar"},[i("span",{staticClass:"backbtn iconfont icon-left",on:{click:t.GoBack}}),i("p",{staticClass:"title"},[t._v(t._s(t.Title))])]),i("scroll",{staticClass:"scroll-wrap",class:{"scroll-wrap-bottom":t.needBottomMargin},attrs:{pullup:!0},on:{scrollToEnd:t.scrollToEnd}},[i("ul",[t._t("default")],2)])],1)},e=[],c=i("e9fc"),n={props:{Title:{type:String,required:!0},needBottomMargin:{type:Boolean,default:!1}},methods:{GoBack:function(){this.$router.back()},scrollToEnd:function(){this.$emit("scrollToEnd")}},components:{Scroll:c["a"]}},l=n,o=(i("e20e"),i("2877")),r=Object(o["a"])(l,a,e,!1,null,"3ec6e589",null);r.options.__file="myList.vue";s["a"]=r.exports},"9be9":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("my-list",{attrs:{Title:t.title},on:{scrollToEnd:t.scrollToEnd}},[t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"list-item",on:{click:function(i){t.chooseUser(i,s.userId)}}},[i("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+s.userAvatar,width:"45",height:"45",alt:""}}),i("div",{staticClass:"main"},[i("p",{staticClass:"name"},[t._v(t._s(s.userNickname))]),i("p",{staticClass:"desc"},[t._v(t._s(s.userDesc))])]),i("div",{staticClass:"btn"},[t._v("关注")])])}),t.isLoading?i("loading"):i("no-more",{staticClass:"no-more"})],2)],1)},e=[],c=i("be94"),n=(i("6762"),i("2fdb"),i("89d4")),l=i("41ea"),o=i("bc3a"),r=i.n(o),d=i("d94a"),u=i("2f62"),f=i("1cb8"),v=21,p={activated:function(){this.list=[],this.page=0,this.isEnd=!1,this.fetchInterestList()},data:function(){return{list:[],isLoading:!1,page:0,isEnd:!1,baseURL:l["a"]}},methods:{fetchInterestList:function(){var t=this;if(!this.isEnd){var s="me"===this.$route.params.id?this.loginInfo.userId:this.$route.params.id;this.isLoading=!0,this.page++,r.a.get("/api/user/".concat(s,"/Fans/page/").concat(this.page),{baseURL:l["a"],withCredentials:!0}).then(function(s){t.isLoading=!1,s.data.data.length<v&&(t.isEnd=!0),t.list=t.list.concat(s.data.data)})}},chooseUser:function(t,s){t.target.className.includes("btn")||this.$router.push("/profile/".concat(s))},scrollToEnd:function(){this.fetchInterestList()}},computed:Object(c["a"])({title:function(){return"me"===this.$route.params.id?"我的粉丝":"TA的粉丝"}},Object(u["c"])(["loginInfo"])),components:{MyList:n["a"],Loading:f["a"],NoMore:d["a"]}},h=p,m=(i("1803"),i("2877")),C=Object(m["a"])(h,a,e,!1,null,"699d91ab",null);C.options.__file="FanList.vue";s["default"]=C.exports},e20e:function(t,s,i){"use strict";var a=i("2c78"),e=i.n(a);e.a},f1a3:function(t,s,i){}}]);