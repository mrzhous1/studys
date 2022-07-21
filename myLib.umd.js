(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLib"] = factory();
	else
		root["myLib"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=df5a0de8&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('HelloWorld', {
    attrs: {
      "msg": "Welcome to Your Vue.js App"
    }
  })], 1);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=35cdb0e6&scoped=true&
var HelloWorldvue_type_template_id_35cdb0e6_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "hello"
  }, [_c('van-notice-bar', {
    attrs: {
      "left-icon": "volume-o",
      "text": " 一个免费专为教师招聘服务的公益知识分享网站，经常更新最新教育学知识，紧扣考试大纲"
    }
  }), _c('van-notice-bar', {
    attrs: {
      "scrollable": "",
      "left-icon": "volume-o",
      "text": " 睡前饭后每天看一看知识点，轻松超过别人n分"
    }
  }), _c('van-tabs', {
    model: {
      value: _vm.active,
      callback: function ($$v) {
        _vm.active = $$v;
      },
      expression: "active"
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "教育学"
    }
  }, [_c('van-tag', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v(" 学校教育产生的原因和条件")]), _c('p', [_vm._v("⼀是⽣产⼒的发展带来剩余产品的出现，为学校教育的产⽣提供了可能性；")]), _c('p', [_vm._v("⼆是国家的出现、⽂化的发展为学校教育的产⽣提供了必要性；")]), _c('p', [_vm._v("三是⼈类积累了丰富的⽣产和⽣活经验，并且逐步地系统化、抽象化，形成了分门别类的学问，客观上要求有专门的学校教育及专门的⼈员来传递这些学问。")]), _c('van-tag', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v(" 历史基础 客观条件 重要标志")]), _c('p', [_vm._v(" 1.学校教育产⽣的历史基础：⽣产⼒的发展和奴⾪制国家的形成")]), _c('p', [_vm._v(" 2.学校教育产⽣的客观条件：体脑分⼯和专职教师的出现")]), _c('p', [_vm._v(" 3.学校教育产⽣的重要标志：⽂字的产⽣和应⽤")])], 1), _c('van-tab', {
    attrs: {
      "title": "德育"
    }
  }, [_vm._v("敬请期待，后续更新")]), _c('van-tab', {
    attrs: {
      "title": "班主任工作"
    }
  }, [_vm._v(" 敬请期待，后续更新 ")]), _c('van-tab', {
    attrs: {
      "title": "法律法规"
    }
  }, [_vm._v(" 敬请期待，后续更新 ")])], 1)], 1);
};

var HelloWorldvue_type_template_id_35cdb0e6_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      active: 0
    };
  }

});
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=35cdb0e6&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=35cdb0e6&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue



;


/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_35cdb0e6_scoped_true_render,
  HelloWorldvue_type_template_id_35cdb0e6_scoped_true_staticRenderFns,
  false,
  null,
  "35cdb0e6",
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&


/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    HelloWorld: HelloWorld
  }
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=df5a0de8&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=df5a0de8&prod&lang=css&

;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (App);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=myLib.umd.js.map