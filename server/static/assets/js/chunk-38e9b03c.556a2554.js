(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e9b03c"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,c,o=String(i(e)),u=r(n),l=o.length;return u<0||u>=l?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===l||(c=o.charCodeAt(u+1))<56320||c>57343?t?o.charAt(u):a:t?o.slice(u,u+2):c-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),c=n("be13"),o=n("2b4c"),u=n("520a"),l=o("species"),s=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var v=o(t),d=!a(function(){var e={};return e[v]=function(){return 7},7!=""[t](e)}),p=d?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[v](""),!e}):void 0;if(!d||!p||"replace"===t&&!s||"split"===t&&!f){var h=/./[v],g=n(c,v,""[t],function(t,e,n,r,i){return e.exec===u?d&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),x=g[0],b=g[1];r(String.prototype,t,x),i(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,o="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],s=u||l;s&&(c=function(t){var e,n,c,s,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(e=f[o]),c=i.call(f,t),u&&c&&(f[o]=f.global?c.index+c[0].length:e),l&&c&&c.length>1&&a.call(c[0],n,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)}),c}),t.exports=c},"586e":function(t,e,n){},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"63ac":function(t,e,n){"use strict";var r=n("586e"),i=n.n(r);i.a},a481:function(t,e,n){"use strict";var r=n("cb7c"),i=n("4bf8"),a=n("9def"),c=n("4588"),o=n("0390"),u=n("5f1b"),l=Math.max,s=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(r,i){var a=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=h(n,t,this,e);if(i.done)return i.value;var f=r(t),v=String(this),d="function"===typeof e;d||(e=String(e));var x=f.global;if(x){var b=f.unicode;f.lastIndex=0}var m=[];while(1){var y=u(f,v);if(null===y)break;if(m.push(y),!x)break;var w=String(y[0]);""===w&&(f.lastIndex=o(v,a(f.lastIndex),b))}for(var S="",E=0,k=0;k<m.length;k++){y=m[k];for(var $=String(y[0]),_=l(s(c(y.index),v.length),0),A=[],R=1;R<y.length;R++)A.push(p(y[R]));var C=y.groups;if(d){var I=[$].concat(A,_,v);void 0!==C&&I.push(C);var j=String(e.apply(void 0,I))}else j=g($,v,_,A,C,e);_>=E&&(S+=v.slice(E,_)+j,E=_+$.length)}return S+v.slice(E)}];function g(t,e,r,a,c,o){var u=r+t.length,l=a.length,s=d;return void 0!==c&&(c=i(c),s=v),n.call(o,s,function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":o=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>l){var v=f(s/10);return 0===v?n:v<=l?void 0===a[v-1]?i.charAt(1):a[v-1]+i.charAt(1):n}o=a[s-1]}return void 0===o?"":o})}})},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage_page fillcontain"},[n("el-row",{staticStyle:{height:"100%"}},[n("el-col",{staticStyle:{"min-height":"100%","background-color":"#324057"},attrs:{span:4}},[n("el-menu",{staticStyle:{"min-height":"100%"},attrs:{"default-active":t.defaultActive,"text-color":"#bfcbd9","background-color":"#324057",router:""}},[n("el-menu-item",{attrs:{index:"index"}},[n("i",{staticClass:"el-icon-menu"}),t._v("首页")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-document"}),t._v("数据管理")]),n("el-menu-item",{attrs:{index:"userList"}},[t._v("用户列表")]),n("el-menu-item",{attrs:{index:"videoList"}},[t._v("视频列表")])],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-plus"}),t._v("添加数据")]),n("el-menu-item",{attrs:{index:"addUser"}},[t._v("添加用户")]),n("el-menu-item",{attrs:{index:"addVideo"}},[t._v("添加视频")])],2)],1)],1),n("el-col",{staticStyle:{height:"100%",overflow:"auto"},attrs:{span:20}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)},i=[],a=(n("a481"),{activated:function(){},data:function(){return{}},computed:{defaultActive:function(){return this.$route.path.replace("/","")}}}),c=a,o=(n("63ac"),n("2877")),u=Object(o["a"])(c,r,i,!1,null,"6908c47e",null);e["default"]=u.exports}}]);