(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{522:function(s,t,r){s.exports=r.p+"assets/img/web-safe-01.b361404b.png"},582:function(s,t,r){"use strict";r.r(t);var e=r(18),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"csrf-cross-site-request-forgery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#csrf-cross-site-request-forgery"}},[s._v("#")]),s._v(" CSRF : Cross Site Request Forgery")]),s._v(" "),e("p",[e("strong",[s._v("CSRF")]),s._v(" 跨站请求伪造。\n是一种劫持受信任用户向服务器发送非预期请求的攻击方式。简而言之：用户在登录的情况下访问了钓鱼网站，钓鱼网站通过用户向其他网站发送请求，这样就达到了模拟用户的目的。具体实现如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:r(522),alt:"image.png"}})]),s._v(" "),e("h4",{attrs:{id:"防御手段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防御手段"}},[s._v("#")]),s._v(" 防御手段")]),s._v(" "),e("ul",[e("li",[s._v("验证码实现用户验证。验证码强制用户必须与应用进行交互，才能完成最终的请求。")]),s._v(" "),e("li",[s._v("通过 referer 实现用户验证。根据 "),e("strong",[s._v("HTTP")]),s._v(" 协议，在 "),e("strong",[s._v("HTTP")]),s._v(" 头中有一个字段叫 "),e("strong",[s._v("Referer")]),s._v("，它记录了该 "),e("strong",[s._v("HTTP")]),s._v(" 请求的 "),e("strong",[s._v("来源地址")]),s._v("。通过 "),e("strong",[s._v("Referer Check")]),s._v('，可以检查请求是否来自合法的"源"。')]),s._v(" "),e("li",[s._v("通过 token 实现用户验证。")]),s._v(" "),e("li",[s._v("尽量不要在页面的链接中暴露用户隐私信息。")]),s._v(" "),e("li",[s._v("对于用户修改删除等操作最好都使用 post 操作。")]),s._v(" "),e("li",[s._v("避免全站通用的 cookie，严格设置 cookie 的域。")])]),s._v(" "),e("h2",{attrs:{id:"xss-cross-site-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss-cross-site-script"}},[s._v("#")]),s._v(" XSS : Cross Site Script")]),s._v(" "),e("p",[e("strong",[s._v("XSS")]),s._v(" 跨站脚本攻击。\n攻击者向用户的网站嵌入的 js 脚本代码，当用户访问该网站的时候，该 js 脚本代码就会被执行，从而达到攻击用户的目的。")]),s._v(" "),e("h4",{attrs:{id:"反射型-xss-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射型-xss-攻击"}},[s._v("#")]),s._v(" 反射型 XSS 攻击")]),s._v(" "),e("p",[s._v("又称非持久性跨站脚本攻击。发出请求时，XSS 代码出现在 "),e("strong",[s._v("URL")]),s._v(" 中，作为输入提交到服务器端，服务器端解析后响应，XSS 随响应内容一起返回给浏览器，最后浏览器解析执行 XSS 代码。漏洞产生的原因是攻击者注入的数据反映在响应中。一个典型的非持久性 XSS 包含一个带 XSS 攻击向量的链接(即每次攻击需要用户的点击)。\n比如：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://www.test.com/message.php?send=<script>alert(‘foolish!’)<\/script>！\n")])])]),e("h4",{attrs:{id:"存储型-xss-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储型-xss-攻击"}},[s._v("#")]),s._v(" 存储型 XSS 攻击")]),s._v(" "),e("p",[s._v("XSS 提交的代码会存储在服务器端（数据库，内存，文件系统等），下次请求目标页面时不用再提交 XSS 代码。这种攻击方式的稳定性很好。\n比如：")]),s._v(" "),e("blockquote",[e("p",[s._v("攻击者在 value 填写"),e("code",[s._v("<script>alert(‘foolish!’)<\/script>")]),s._v("【或者 html 其他标签（破坏样式。。。）、一段攻击型代码】；将数据存储到数据库中；其他用户取出数据显示的时候，将会执行这些攻击性代码。")])]),s._v(" "),e("h4",{attrs:{id:"具体方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体方式"}},[s._v("#")]),s._v(" 具体方式")]),s._v(" "),e("ul",[e("li",[s._v("攻击者向服务器注入 js 代码。")]),s._v(" "),e("li",[s._v("诱导用户访问受到攻击的网站。")]),s._v(" "),e("li",[s._v("用户访问受到攻击的网站，执行注入的 js 代码。")])]),s._v(" "),e("h4",{attrs:{id:"xss-防御方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xss-防御方式"}},[s._v("#")]),s._v(" XSS 防御方式")]),s._v(" "),e("ul",[e("li",[s._v("HttpOnly")]),s._v(" "),e("li",[s._v("输入检查")]),s._v(" "),e("li",[s._v("输出检查")])]),s._v(" "),e("p",[s._v("参考链接：")]),s._v(" "),e("ul",[e("li",[s._v("https://www.cnblogs.com/shytong/p/5308667.html")]),s._v(" "),e("li",[s._v("https://github.com/dwqs/blog/issues/68")]),s._v(" "),e("li",[s._v("https://www.cnblogs.com/phpstudy2015-6/p/6767032.html#_label3")])])])}),[],!1,null,null,null);t.default=v.exports}}]);