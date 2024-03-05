(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{559:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("设计模式，其实就是为软件设计中普遍存在的各种问题所提出的各种方案。")]),t._v(" "),a("h3",{attrs:{id:"单例模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),a("p",[t._v("概念：全局作用域下只会创建一次实例对象，让所有需要调用的地方都共享这一单例对象。")]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[t._v("全局模态框")]),t._v(" "),a("li",[t._v("vuex、vue-router、redux")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" singleton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Singleton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),a("p",[t._v("概念：创建对象的常用设计模式，不暴露创建对象的具体逻辑，而是将逻辑封装在一个函数（工厂）中。")]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[t._v("创建对象")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("原型式继承")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"策略模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),a("p",[t._v("定义一系列算法，并且将它们一个个封装起来，将算法的使用和算法的实现分离开来")]),t._v(" "),a("ul",[a("li",[t._v("策略类：可变。封装不同策略的算法。")]),t._v(" "),a("li",[t._v("环境类：不可变。接收不同的客户请求，将其委托给对应的策略。")])]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("表单验证")]),t._v(" "),a("ul",[a("li",[t._v("策略类：不同的验证逻辑")]),t._v(" "),a("li",[t._v("环境类：接收用户验证要求，委托给不同的策略")])])]),t._v(" "),a("li",[a("p",[t._v("对接不同应用接口，如：对接微信、抖音等不同应用的登录接口")]),t._v(" "),a("ul",[a("li",[t._v("策略类：不同应用的登录接口")]),t._v(" "),a("li",[t._v("环境类：接收不同应用的用户登录请求，委托给不同的策略")])])])]),t._v(" "),a("h3",{attrs:{id:"观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),a("p",[t._v("概念：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("定义了对象之间的一种一对多的依赖关系。当一个对象的状态发生改变时，依赖于它的所有对象都会得到通知，使其自动更新。")])]),t._v(" "),a("li",[a("p",[t._v("行为型模式：关注的是对象之间的通讯（观察者和被观察者之间的通信）")])]),t._v(" "),a("li",[a("p",[t._v("观察者与被观察者直接交互")])]),t._v(" "),a("li",[a("p",[t._v("被观察者知道有哪些观察者")])])]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[t._v("Vue2 响应式实现：观察者模式 + Object.defineProperties\n"),a("ul",[a("li",[t._v("被观察者：data 数据")]),t._v(" "),a("li",[t._v("观察者：各种 Watcher，如：Render Watcher、Computed Watcher 等。")])])])]),t._v(" "),a("h3",{attrs:{id:"发布订阅模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[t._v("#")]),t._v(" 发布订阅模式")]),t._v(" "),a("p",[t._v("概念：")]),t._v(" "),a("ul",[a("li",[t._v("发布订阅是一种消息范式")]),t._v(" "),a("li",[t._v("发布者不会将消息直接发送给订阅者，而是将消息分为不同的类别，无需了解哪些订阅者可能存在（消息代理进行通信）")])]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[t._v("EventBus")])]),t._v(" "),a("h3",{attrs:{id:"观察者模式-vs-发布订阅模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式-vs-发布订阅模式"}},[t._v("#")]),t._v(" 观察者模式 vs 发布订阅模式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("观察者模式")]),t._v(" "),a("ul",[a("li",[t._v("行为式模式")]),t._v(" "),a("li",[t._v("被观察者知道有哪些观察者")]),t._v(" "),a("li",[t._v("被观察者与观察者直接通信")])])]),t._v(" "),a("li",[a("p",[t._v("发布订阅模式")]),t._v(" "),a("ul",[a("li",[t._v("消息范式")]),t._v(" "),a("li",[t._v("发布者不知道有哪些订阅者")]),t._v(" "),a("li",[t._v("发布者和订阅者不会直接通信，")]),t._v(" "),a("li",[t._v("而是将消息分为不同的类别，通过事件代理的方式，通知订阅者")])])])]),t._v(" "),a("h3",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("p",[t._v("概念：为一个对象提供一个代用品或者占位符，控制该对象的访问。")]),t._v(" "),a("p",[t._v("应用：")]),t._v(" "),a("ul",[a("li",[t._v("Proxy 对象")]),t._v(" "),a("li",[t._v("缓存代理：将计算开销比较大的数据进行缓存，二次计算的时候命中缓存直接从缓存里面获取计算结果。")]),t._v(" "),a("li",[t._v("虚拟代理：图片懒加载。")])]),t._v(" "),a("h3",{attrs:{id:"装饰者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式"}},[t._v("#")]),t._v(" 装饰者模式")]),t._v(" "),a("p",[t._v("概念：")]),t._v(" "),a("ul",[a("li",[t._v("在不改变对象自身的基础上，在程序运行期间给对象动态添加额外的方法。")]),t._v(" "),a("li",[t._v("将类的核心职责和装饰功能区分开来。")])]),t._v(" "),a("p",[t._v("应用场景：")]),t._v(" "),a("ul",[a("li",[t._v("动态地扩展对象功能")]),t._v(" "),a("li",[t._v("避免过度子类化：有多个功能相似但略有不同的对象。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);