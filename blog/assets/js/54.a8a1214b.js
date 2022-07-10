(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{590:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"引入-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入-vue"}},[t._v("#")]),t._v(" 引入 Vue")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 便于调试，改成：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue/dist/vue.runtime.common.dev.js'")]),t._v("\n")])])]),s("p",[t._v("引入 Vue 对象，主要执行：")]),t._v(" "),s("ul",[s("li",[t._v("往 Vue 函数/对象的原型上挂载初始化方法、全局方法和挂载 Vue 静态方法，做准备工作；")]),t._v(" "),s("li",[t._v("导出 Vue 模块。")])]),t._v(" "),s("p",[t._v("主要源码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stateMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eventsMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lifecycleMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderMixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initGlobalAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"initmixin-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initmixin-函数"}},[t._v("#")]),t._v(" initMixin 函数")]),t._v(" "),s("p",[t._v("主要 Vue 原型上挂载出实例初始化方法"),s("code",[t._v("_init")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"statemixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statemixin"}},[t._v("#")]),t._v(" stateMixin")]),t._v(" "),s("p",[t._v("这一部分主要处理：数据劫持 + 双向数据绑定。")]),t._v(" "),s("h4",{attrs:{id:"eventsmixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventsmixin"}},[t._v("#")]),t._v(" eventsMixin")]),t._v(" "),s("p",[t._v("在 Vue 原型上挂载全局方法："),s("code",[t._v("$on")]),t._v("、"),s("code",[t._v("$once")]),t._v("、"),s("code",[t._v("$off")]),t._v("、"),s("code",[t._v("$emit")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"lifecyclemixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lifecyclemixin"}},[t._v("#")]),t._v(" lifecycleMixin")]),t._v(" "),s("p",[t._v("在 Vue 原型上挂载跟 Vue 实例生命周期有关的方法："),s("code",[t._v("_update")]),t._v("、"),s("code",[t._v("$forceUpdate")]),t._v("、"),s("code",[t._v("$destroy")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"rendermixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendermixin"}},[t._v("#")]),t._v(" renderMixin")]),t._v(" "),s("p",[t._v("在 Vue 原型上挂载跟渲染有关的方法："),s("code",[t._v("$nextTick")]),t._v("、"),s("code",[t._v("_render")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"initglobalapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initglobalapi"}},[t._v("#")]),t._v(" initGlobalAPI")]),t._v(" "),s("p",[t._v("直接往 Vue 上挂载初始化全局 API 静态方法（非原型上挂载），可通过 Vue 直接调用："),s("code",[t._v("set")]),t._v("、"),s("code",[t._v("delete")]),t._v("、"),s("code",[t._v("nextTick")]),t._v("、"),s("code",[t._v("observable")]),t._v("、"),s("code",[t._v("use")]),t._v("、"),s("code",[t._v("mixin")]),t._v("、"),s("code",[t._v("component")]),t._v("、"),s("code",[t._v("directive")]),t._v("、"),s("code",[t._v("filter")]),t._v("。")])])}),[],!1,null,null,null);e.default=n.exports}}]);