(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{586:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue-组件粒度精确更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件粒度精确更新"}},[t._v("#")]),t._v(" Vue 组件粒度精确更新")]),t._v(" "),a("p",[t._v("当 vue 对组件实例进行更新时，对于不是组件的元素节点，会通过 patchVnode 方式进行更新；对于子组件节点，则会调用 prepatch - updateChildComponent 方法对子组件的 props、listenters 等进行更新，不会直接更新子组件。")]),t._v(" "),a("p",[t._v("因为在父组件渲染子组件的时候，会将 props 传递给子组件，保存在子组件的 _props 中，在子组件初始化时会对 props 做响应式处理，子组件对 props 的获取触发了 getter，这样 props 就收集到了子组件的 render-watcher。")]),t._v(" "),a("p",[t._v("当父组件 _update 的时候，重新计算 props，触发了 props 的 setter，进而通知自组件 render-watcher 更新。")]),t._v(" "),a("p",[a("code",[t._v("$forceUpdate")]),t._v(" 实际上只是触发了 render-watcher 的重新执行，和修改一个响应式属性触发更新的原理是一样的，都是调用 _watcher.update()。【门面模式】")]),t._v(" "),a("h2",{attrs:{id:"vue-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期"}},[t._v("#")]),t._v(" Vue 生命周期")]),t._v(" "),a("h3",{attrs:{id:"beforecreate-created-实现-vue-实例的初始化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-created-实现-vue-实例的初始化。"}},[t._v("#")]),t._v(" beforeCreate / created：实现 Vue 实例的初始化。")]),t._v(" "),a("p",[t._v("beforeCreate：初始化组件的生命周期、事件机制和 render 函数。")]),t._v(" "),a("p",[t._v("created：初始化 props、data、method 等，完成数据响应式处理。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"beforemount-mounted-实现-vue-实例的挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-mounted-实现-vue-实例的挂载"}},[t._v("#")]),t._v(" beforeMount / mounted：实现 Vue 实例的挂载")]),t._v(" "),a("p",[t._v("beforeMount：在 "),a("code",[t._v("$mount->mountComponent")]),t._v("一开始就调用执行了，这时还没实例化渲染 Watcher，也就是还没调用 render 函数创建 vnode 和调用 update 执行 patch。")]),t._v(" "),a("p",[t._v("mounted：已实例化渲染 Watcher，也就是调用了 render 函数创建 vnode 和调用 update 执行 patch 并挂载到生成实际的DOM 元素了。")]),t._v(" "),a("h3",{attrs:{id:"beforeupdate-update-响应式数据更新时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate-update-响应式数据更新时触发"}},[t._v("#")]),t._v(" beforeUpdate / update：响应式数据更新时触发")]),t._v(" "),a("p",[t._v("响应式数据更新时，通知对应的 Watcher 执行对应的更新操作。（通过异步队列缓存进行异步更新 DOM）")]),t._v(" "),a("h3",{attrs:{id:"beforedestroy-destroyed-组件销毁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-destroyed-组件销毁"}},[t._v("#")]),t._v(" beforeDestroy & destroyed：组件销毁")]),t._v(" "),a("h3",{attrs:{id:"activated-deactivated-keep-alive-使用的相关钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activated-deactivated-keep-alive-使用的相关钩子"}},[t._v("#")]),t._v(" activated & deactivated：keep-alive 使用的相关钩子")]),t._v(" "),a("h3",{attrs:{id:"父子组件的生命周期执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件的生命周期执行顺序"}},[t._v("#")]),t._v(" 父子组件的生命周期执行顺序")]),t._v(" "),a("p",[t._v("mounted: 先子后父。"),a("code",[t._v("父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted")])])])}),[],!1,null,null,null);e.default=n.exports}}]);