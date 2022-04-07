(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{521:function(t,e,a){"use strict";a.r(e);var v=a(35),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),a("p",[t._v("原理：监听浏览器地址变化，渲染对应页面。")]),t._v(" "),a("p",[t._v("浏览器地址变化更改主要有以下三种方式：")]),t._v(" "),a("ul",[a("li",[t._v("浏览器地址改变；")]),t._v(" "),a("li",[t._v("浏览器前进、后退；")]),t._v(" "),a("li",[t._v("刷新页面。")])]),t._v(" "),a("h2",{attrs:{id:"hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash",target:"_blank",rel:"noopener noreferrer"}},[t._v("hash 模式"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原理：监听浏览器地址 hash 的改变，渲染对应页面内容。")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("window.location.hash")]),t._v("获取浏览器地址 hash 值（也称散列值）；")]),t._v(" "),a("li",[t._v("通过"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HashChangeEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("onhashchange")]),a("OutboundLink")],1),t._v("监听浏览器地址 hash 值的改变。触发条件为：\n"),a("ul",[a("li",[t._v("浏览器前进、后退，导致"),a("code",[t._v("window.location.hash")]),t._v("的改变；")]),t._v(" "),a("li",[t._v("浏览器地址携带有 hash 值，页面加载时会先以不带 hash 值的地址 url，请求完成之后将"),a("code",[t._v("window.location.hash")]),t._v("设置为 hash 值；")]),t._v(" "),a("li",[t._v("a 标签的 href 属性设置为某标签 ID，点击该类型 a 标签也会将"),a("code",[t._v("window.location.hash")]),t._v("设置为 hash 值。")])])]),t._v(" "),a("li",[t._v("hash 值的改变会直接反应到浏览器地址，但不会发送到服务器，也不会改变页面内容。")])]),t._v(" "),a("h2",{attrs:{id:"history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("History 模式"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原理：利用 h5 history API 改变浏览器地址，渲染对应页面内容。")]),t._v(" "),a("p",[t._v("该模式需要后端配合进行，当浏览器地址改变并刷新时，因为是拿当前的新地址去发起请求，如果后端没有做好准备的话，就会报错。")]),t._v(" "),a("h3",{attrs:{id:"pushstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushstate"}},[t._v("#")]),t._v(" pushState()")]),t._v(" "),a("p",[t._v("向浏览器历史中添加一条记录，该操作不会触发页面内容的更新，但会直接反应到浏览器地址上。")]),t._v(" "),a("p",[a("code",[t._v("pushState()")]),t._v("需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个 URL。新 URL 必须与当前 URL 同源，否则会抛出一个异常。该参数是可选的，缺省为当前 URL。")]),t._v(" "),a("p",[t._v("该方法可以将 URL 设置为 hash 值，但不会触发 onhashchange 事件。")]),t._v(" "),a("h3",{attrs:{id:"replacestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacestate"}},[t._v("#")]),t._v(" replaceState()")]),t._v(" "),a("p",[t._v("修改浏览器历史中的最后一条记录。")]),t._v(" "),a("p",[t._v("该方法的参数和作用与"),a("code",[t._v("pushState()")]),t._v("基本相同。")]),t._v(" "),a("h3",{attrs:{id:"popstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#popstate"}},[t._v("#")]),t._v(" popState()")]),t._v(" "),a("p",[t._v("引用 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onpopstate",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(" 文档解释：")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("window.onpopstate")]),t._v("是"),a("code",[t._v("popstate")]),t._v("事件在window对象上的事件处理程序。")]),t._v(" "),a("p",[t._v("每当处于"),a("code",[t._v("激活状态的历史记录条目发生变化")]),t._v("时，popstate 事件就会在对应 window 对象上触发。")]),t._v(" "),a("p",[t._v("如果当前处于激活状态的历史记录条目是由"),a("code",[t._v("history.pushState()")]),t._v("方法创建,或者由"),a("code",[t._v("history.replaceState()")]),t._v("方法修改过的, 则"),a("code",[t._v("popstate事件对象的 state")]),t._v("属性包含了这个历史记录条目的 state 对象的一个拷贝。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pushState()")]),t._v("和"),a("code",[t._v("replaceState()")]),t._v("不会触发该方法；")]),t._v(" "),a("li",[t._v("页面第一次加载的时候也不会触发该方法；")]),t._v(" "),a("li",[t._v("触发条件：点击浏览器前进、后退，调用"),a("code",[t._v("history.back()")]),t._v("、"),a("code",[t._v("history.forward()")]),t._v("和"),a("code",[t._v("history.go()")]),t._v("。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("参考文章：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/History_API")])]),t._v(" "),a("li",[a("p",[t._v("https://blog.csdn.net/Charissa2017/article/details/104779412")])]),t._v(" "),a("li",[a("p",[t._v("https://juejin.cn/post/6844903589123457031")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);