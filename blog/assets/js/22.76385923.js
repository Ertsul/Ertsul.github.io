(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{459:function(t,v,_){t.exports=_.p+"assets/img/token-01.7b411236.png"},504:function(t,v,_){"use strict";_.r(v);var s=_(56),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("一般的用户认证流程如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(459),alt:"image.png"}})]),t._v(" "),s("p",[t._v("但是，这种模式的扩展性不好。单个服务器没问题，如果多个服务器集群，要求共享 "),s("strong",[t._v("session")]),t._v(" ，每个服务器都能访问到 "),s("strong",[t._v("session")]),t._v(" 。")]),t._v(" "),s("ul",[s("li",[t._v("解决方案一："),s("strong",[t._v("session")]),t._v(" 数据持久化，写入数据库或者其他持久层。各个服务器收到请求后，向持久层发送数据请求。\n"),s("ul",[s("li",[t._v("缺点：工程量大。")])])]),t._v(" "),s("li",[t._v("解决方案二：服务器不保存 "),s("strong",[t._v("session")]),t._v(" 数据，所有的数据保存在客户端，每次请求都发回服务器。如：JWT(Json Web Token)。")])]),t._v(" "),s("h2",{attrs:{id:"jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),s("p",[s("strong",[t._v("JWT")]),t._v(" 服务器不保存 "),s("strong",[t._v("session")]),t._v(" 数据，在服务器认证之后，返回一个 "),s("strong",[t._v("JSON")]),t._v(" 对象。格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "姓名": "zero",\n    "角色": "管理员",\n    "到期时间": "2018年10月6日0点0分"\n}\n')])])]),s("p",[t._v("之后，客户端与服务器的用户认证都靠这个 "),s("strong",[t._v("JSON")]),t._v(" 对象，当然，这个对象后面会加上签名，保证数据不被篡改。")]),t._v(" "),s("h4",{attrs:{id:"jwt-的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的数据结构"}},[t._v("#")]),t._v(" JWT 的数据结构")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("JWT")]),t._v(" 是一个很长的字符串，中间用 "),s("strong",[t._v(".")]),t._v(" 分隔，内部没有换行。")]),t._v(" "),s("li",[t._v("组成由三个部分："),s("strong",[t._v("Header.Payload.Signature")]),t._v(" "),s("ul",[s("li",[t._v("Header：头部。"),s("strong",[t._v("JSON")]),t._v(" 对象，描述 "),s("strong",[t._v("JWT")]),t._v(" 的元数据。")]),t._v(" "),s("li",[t._v("Payload：负载。"),s("strong",[t._v("JSON")]),t._v(" 对象，存放实际需要传递的数据；不加密。")]),t._v(" "),s("li",[t._v("Signature：签名。对 "),s("strong",[t._v("Header")]),t._v(" 和 "),s("strong",[t._v("Payload")]),t._v(" 的签名，防止数据被篡改。")])])])]),t._v(" "),s("p",[t._v("Header 格式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "alg": "HS256",   // 签名的算法\n  "typ": "JWT"      // token 类型\n}\n')])])]),s("p",[t._v("Payload 七个字段：")]),t._v(" "),s("ul",[s("li",[t._v("iss (issuer)：签发人")]),t._v(" "),s("li",[t._v("exp (expiration time)：过期时间")]),t._v(" "),s("li",[t._v("sub (subject)：主题")]),t._v(" "),s("li",[t._v("aud (audience)：受众")]),t._v(" "),s("li",[t._v("nbf (Not Before)：生效时间")]),t._v(" "),s("li",[t._v("iat (Issued At)：签发时间")]),t._v(" "),s("li",[t._v("jti (JWT ID)：编号")])]),t._v(" "),s("h4",{attrs:{id:"jwt-的使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的使用方式"}},[t._v("#")]),t._v(" JWT 的使用方式")]),t._v(" "),s("ul",[s("li",[t._v("存储在 "),s("strong",[t._v("cookie")]),t._v(" 中。")]),t._v(" "),s("li",[t._v("存储在 "),s("strong",[t._v("localStorage")]),t._v(" 中。")]),t._v(" "),s("li",[t._v("客户端每次与服务器进行通信的时候，都会带上 "),s("strong",[t._v("JWT")]),t._v("。")])]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[t._v("http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html")])])])}),[],!1,null,null,null);v.default=a.exports}}]);