/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _router = __webpack_require__(1);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _home = __webpack_require__(3);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _list = __webpack_require__(10);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//引入list模块
	//引入路引器
	var router = new _router2.default({
	  container: '#container'
	}); //引入home模块
	/**
	 * Created by Admini on 2016/8/22.
	 */
	
	router.push(_home2.default).push(_list2.default).setDefault('/home').init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * router v0.1.0 (https://github.com/progrape/router)
	 * Copyright 2016
	 * Licensed under the  MIT license
	 */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Router = t() : e.Router = t();
	}(undefined, function () {
	  return function (e) {
	    function t(r) {
	      if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t, n) {
	    "use strict";
	    function r(e) {
	      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
	        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
	      }return t["default"] = e, t;
	    }function o(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(t, "__esModule", { value: !0 });var i = Object.assign || function (e) {
	      for (var t = 1; t < arguments.length; t++) {
	        var n = arguments[t];for (var r in n) {
	          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	        }
	      }return e;
	    },
	        a = function () {
	      function e(e, t) {
	        for (var n = 0; n < t.length; n++) {
	          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }return function (t, n, r) {
	        return n && e(t.prototype, n), r && e(t, r), t;
	      };
	    }(),
	        u = n(1),
	        s = r(u),
	        l = function () {
	      function e(t) {
	        o(this, e), this._options = { container: "#container", enter: "enter", enterTimeout: 0, leave: "leave", leaveTimeout: 0 }, this._index = 1, this._$container = null, this._routes = [], this._default = null, this._options = i({}, this._options, t), this._$container = document.querySelector(this._options.container);
	      }return a(e, [{ key: "init", value: function value() {
	          var e = this;window.addEventListener("hashchange", function (t) {
	            var n = s.getHash(t.newURL),
	                r = history.state || {};e.go(n, r._index <= e._index);
	          }, !1), history.state && history.state._index && (this._index = history.state._index), this._index--;var t = s.getHash(location.href),
	              n = s.getRoute(this._routes, t);return this.go(n ? t : this._default), this;
	        } }, { key: "push", value: function value(e) {
	          var t = this._routes.filter(function (t) {
	            return t.url === e.url;
	          })[0];if (t) throw new Error("route " + e.url + " is existed");return e = i({}, { url: "*", className: "", render: s.noop, bind: s.noop }, e), this._routes.push(e), this;
	        } }, { key: "setDefault", value: function value(e) {
	          return this._default = e, this;
	        } }, { key: "go", value: function value(e) {
	          var t = this,
	              n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
	              r = s.getRoute(this._routes, e);if (!r) throw new Error("url " + e + " was not found");return !function () {
	            var o = function o(e) {
	              e && !function () {
	                var e = t._$container.children[0];n && e.classList.add(t._options.leave), t._options.leaveTimeout > 0 ? setTimeout(function () {
	                  e.parentNode.removeChild(e);
	                }, t._options.leaveTimeout) : e.parentNode.removeChild(e);
	              }();
	            },
	                i = function i(o, _i) {
	              var a = document.createElement("div");r.className && a.classList.add(r.className), a.innerHTML = _i, t._$container.appendChild(a), !n && t._options.enter && o && a.classList.add(t._options.enter), t._options.enterTimeout > 0 ? setTimeout(function () {
	                a.classList.remove(t._options.enter);
	              }, t._options.enterTimeout) : a.classList.remove(t._options.enter), location.hash = "#" + e;try {
	                n ? t._index-- : t._index++, history.replaceState && history.replaceState({ _index: t._index }, "", location.href);
	              } catch (u) {}"function" == typeof r.bind && r.bind.call(a);
	            },
	                a = s.hasChildren(t._$container);o(a);var u = function u(e) {
	              var t = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];if (e) throw e;i(a, t);
	            },
	                l = r.render(u);l && "function" == typeof l.then ? l.then(function (e) {
	              u(null, e);
	            }, u) : 0 === r.render.length && u(null, l);
	          }(), this;
	        } }]), e;
	    }();t["default"] = l, e.exports = t["default"];
	  }, function (e, t, n) {
	    "use strict";
	    function r(e) {
	      return e && e.__esModule ? e : { "default": e };
	    }function o(e) {
	      return -1 !== e.indexOf("#") ? e.substring(e.indexOf("#") + 1) : "/";
	    }function i(e, t) {
	      for (var n = 0, r = e.length; r > n; n++) {
	        var o = e[n],
	            i = [],
	            a = (0, l["default"])(o.url, i),
	            u = a.exec(t);if (u) {
	          o.params = {};for (var s = 0, c = i.length; c > s; s++) {
	            var f = i[s],
	                p = f.name;o.params[p] = u[s + 1];
	          }return o;
	        }
	      }return null;
	    }function a(e) {
	      var t = e.children;return t.length > 0;
	    }function u() {}Object.defineProperty(t, "__esModule", { value: !0 }), t.getHash = o, t.getRoute = i, t.hasChildren = a, t.noop = u;var s = n(2),
	        l = r(s);
	  }, function (e, t, n) {
	    function r(e) {
	      for (var t, n = [], r = 0, o = 0, i = ""; null != (t = x.exec(e));) {
	        var a = t[0],
	            u = t[1],
	            l = t.index;if (i += e.slice(o, l), o = l + a.length, u) i += u[1];else {
	          var c = e[o],
	              f = t[2],
	              p = t[3],
	              h = t[4],
	              d = t[5],
	              v = t[6],
	              g = t[7];null != f && null != c && c !== f && (i += f, f = null), i && (n.push(i), i = "");var y = "+" === v || "*" === v,
	              _ = "?" === v || "*" === v,
	              m = t[2] || "/",
	              w = h || d || (g ? ".*" : "[^" + m + "]+?");n.push({ name: p || r++, prefix: f || "", delimiter: m, optional: _, repeat: y, pattern: s(w) });
	        }
	      }return o < e.length && (i += e.substr(o)), i && n.push(i), n;
	    }function o(e) {
	      return a(r(e));
	    }function i(e) {
	      return encodeURI(e).replace(/[\/?#'"]/g, function (e) {
	        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
	      });
	    }function a(e) {
	      for (var t = new Array(e.length), n = 0; n < e.length; n++) {
	        "object" == _typeof(e[n]) && (t[n] = new RegExp("^" + e[n].pattern + "$"));
	      }return function (n, r) {
	        for (var o = "", a = n || {}, u = r || {}, s = u.pretty ? i : encodeURIComponent, l = 0; l < e.length; l++) {
	          var c = e[l];if ("string" != typeof c) {
	            var f,
	                p = a[c.name];if (null == p) {
	              if (c.optional) continue;throw new TypeError('Expected "' + c.name + '" to be defined');
	            }if (g(p)) {
	              if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received "' + p + '"');if (0 === p.length) {
	                if (c.optional) continue;throw new TypeError('Expected "' + c.name + '" to not be empty');
	              }for (var h = 0; h < p.length; h++) {
	                if (f = s(p[h]), !t[l].test(f)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received "' + f + '"');o += (0 === h ? c.prefix : c.delimiter) + f;
	              }
	            } else {
	              if (f = s(p), !t[l].test(f)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + f + '"');o += c.prefix + f;
	            }
	          } else o += c;
	        }return o;
	      };
	    }function u(e) {
	      return e.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
	    }function s(e) {
	      return e.replace(/([=!:$\/()])/g, "\\$1");
	    }function l(e, t) {
	      return e.keys = t, e;
	    }function c(e) {
	      return e.sensitive ? "" : "i";
	    }function f(e, t) {
	      var n = e.source.match(/\((?!\?)/g);if (n) for (var r = 0; r < n.length; r++) {
	        t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, pattern: null });
	      }return l(e, t);
	    }function p(e, t, n) {
	      for (var r = [], o = 0; o < e.length; o++) {
	        r.push(v(e[o], t, n).source);
	      }var i = new RegExp("(?:" + r.join("|") + ")", c(n));return l(i, t);
	    }function h(e, t, n) {
	      for (var o = r(e), i = d(o, n), a = 0; a < o.length; a++) {
	        "string" != typeof o[a] && t.push(o[a]);
	      }return l(i, t);
	    }function d(e, t) {
	      t = t || {};for (var n = t.strict, r = t.end !== !1, o = "", i = e[e.length - 1], a = "string" == typeof i && /\/$/.test(i), s = 0; s < e.length; s++) {
	        var l = e[s];if ("string" == typeof l) o += u(l);else {
	          var f = u(l.prefix),
	              p = l.pattern;l.repeat && (p += "(?:" + f + p + ")*"), p = l.optional ? f ? "(?:" + f + "(" + p + "))?" : "(" + p + ")?" : f + "(" + p + ")", o += p;
	        }
	      }return n || (o = (a ? o.slice(0, -2) : o) + "(?:\\/(?=$))?"), o += r ? "$" : n && a ? "" : "(?=\\/|$)", new RegExp("^" + o, c(t));
	    }function v(e, t, n) {
	      return t = t || [], g(t) ? n || (n = {}) : (n = t, t = []), e instanceof RegExp ? f(e, t) : g(e) ? p(e, t, n) : h(e, t, n);
	    }var g = n(3);e.exports = v, e.exports.parse = r, e.exports.compile = o, e.exports.tokensToFunction = a, e.exports.tokensToRegExp = d;var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
	  }, function (e, t) {
	    e.exports = Array.isArray || function (e) {
	      return "[object Array]" == Object.prototype.toString.call(e);
	    };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _template = __webpack_require__(4);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _hammer = __webpack_require__(5);
	
	var _hammer2 = _interopRequireDefault(_hammer);
	
	var _common = __webpack_require__(6);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _home = __webpack_require__(7);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _alert = __webpack_require__(8);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _data = __webpack_require__(9);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//数据
	//
	//touch手势插件
	/**
	 * Created by Admini on 2016/8/24.
	 */
	exports.default = {
	    url: '/home',
	    className: 'home',
	    render: function render() {
	        var html = _template2.default.compile(_home2.default)({ list: _data2.default });
	        return new Promise(function (resolve, reject) {
	            resolve(html + _alert2.default);
	        });
	    },
	    bind: function bind() {
	        var aList = _common2.default.getElement('listContainer'),
	            oPanelListItem = _common2.default.getElement('panel_list_item'),
	            dialog = _common2.default.getElement('dialog-alert'),
	            tapDialog = new _hammer2.default(dialog),
	            aLiItem = oPanelListItem.children;
	        // oMore=common.getElement('more')
	        //  oMore.addEventListener('click',function () {
	        //     common.createElement(aList,{
	        //         attr:'href',
	        //         attrName:'javascript:void(0);',
	        //         domClass:'className',
	        //         className:'weui_media_box weui_media_appmsg',
	        //         inner:'innerHTML',
	        //         template:templateMore
	        //     })
	        // },false);
	        // for(let i=0;i<aLiItem.length;i++){
	        //     new Hammer(aLiItem[i]).on('panleft panright',function (ev) {
	        //         if(ev.type=='panleft'){
	        //         console.log(ev.type)
	        //         common.move3(aLiItem[i],{webkitTransform:'translate(-'+document.documentElement.clientWidth/3+'px)'},{duration:100,complete:function () {
	        //         }});
	        //         };
	        //         if(ev.type=='panright'){
	        //             console.log(ev.type)
	        //             common.move3(aLiItem[i],{webkitTransform:'translate(0)'},{duration:100,complete:function () {
	        //             }});
	        //         }
	        //     })
	        //
	        // }
	        oPanelListItem.addEventListener('click', function (ev) {
	            var ev = ev || window.event;
	            var target = ev.target || ev.srcElement;
	            if (target.nodeName.toLowerCase() == "img") {
	                alert(target.outerHTML);
	                ev.preventDefault();
	            }
	            if (target.nodeName.toLowerCase() == 'i') {
	                ev.cancelBubble = true; //取消冒泡
	
	                _common2.default.move3(dialog, { webkitTransform: 'translate(0)' }, { duration: 300, complete: function complete() {
	                        //   move3(this,{height:'300px'})
	                        // window.location.href='http://m.xgqq.com/index.html#find/view~id=125&showHeader=0';
	                        //target.data-id
	                        for (var i = 0; i < _data2.default.length; i++) {
	                            if (target.id == _data2.default[i].id) {
	                                // data[i].title=data[i].title+'12312321';
	                            }
	                        }
	                    } });
	                /// common.removeElement(target.parentNode.parentNode)//
	                ev.preventDefault();
	            }
	        }, false);
	        tapDialog.on("tap", function (ev) {
	            _common2.default.move3(dialog, { webkitTransform: 'translate(-100%)' }, { duration: 300 });
	            ev.preventDefault();
	        });
	        dialog.addEventListener('touchstart', function (ev) {
	            ev.preventDefault();
	        }, false);
	    }
	}; //
	//共公方法
	//JS模版引擎

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
	!function () {
	  function a(a) {
	    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
	  }function b(a) {
	    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
	  }function c(c, d) {
	    function e(a) {
	      return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a;
	    }function f(b) {
	      var c = m;if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
	        return m++, "$line=" + m + ";";
	      })), 0 === b.indexOf("=")) {
	        var e = l && !/^=[=#]/.test(b);if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
	          var f = b.replace(/\s*\([^\)]+\)/, "");n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
	        } else b = "$string(" + b + ")";b = s[1] + b + s[2];
	      }return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
	        if (a && !p[a]) {
	          var b;b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0;
	        }
	      }), b + "\n";
	    }var g = d.debug,
	        h = d.openTag,
	        i = d.closeTag,
	        j = d.parser,
	        k = d.compress,
	        l = d.escape,
	        m = 1,
	        p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
	        q = "".trim,
	        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
	        t = q ? "$out+=text;return $out;" : "$out.push(text);",
	        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
	        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
	        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
	        x = s[0],
	        y = "return new String(" + s[3] + ");";r(c.split(h), function (a) {
	      a = a.split(i);var b = a[0],
	          c = a[1];1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
	    });var z = w + x + y;g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try {
	      var A = new Function("$data", "$filename", z);return A.prototype = n, A;
	    } catch (B) {
	      throw B.temp = "function anonymous($data,$filename) {" + z + "}", B;
	    }
	  }var d = function d(a, b) {
	    return "string" == typeof b ? q(b, { filename: a }) : g(a, b);
	  };d.version = "3.0.0", d.config = function (a, b) {
	    e[a] = b;
	  };var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
	      f = d.cache = {};d.render = function (a, b) {
	    return q(a, b);
	  };var g = d.renderFile = function (a, b) {
	    var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });return b ? c(b) : c;
	  };d.get = function (a) {
	    var b;if (f[a]) b = f[a];else if ("object" == (typeof document === "undefined" ? "undefined" : _typeof(document))) {
	      var c = document.getElementById(a);if (c) {
	        var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");b = q(d, { filename: a });
	      }
	    }return b;
	  };var h = function h(a, b) {
	    return "string" != typeof a && (b = typeof a === "undefined" ? "undefined" : _typeof(a), "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a;
	  },
	      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
	      j = function j(a) {
	    return i[a];
	  },
	      k = function k(a) {
	    return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
	  },
	      l = Array.isArray || function (a) {
	    return "[object Array]" === {}.toString.call(a);
	  },
	      m = function m(a, b) {
	    var c, d;if (l(a)) for (c = 0, d = a.length; d > c; c++) {
	      b.call(a, a[c], c, a);
	    } else for (c in a) {
	      b.call(a, a[c], c);
	    }
	  },
	      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };d.helper = function (a, b) {
	    o[a] = b;
	  };var o = d.helpers = n.$helpers;d.onerror = function (a) {
	    var b = "Template Error\n\n";for (var c in a) {
	      b += "<" + c + ">\n" + a[c] + "\n\n";
	    }"object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.error(b);
	  };var p = function p(a) {
	    return d.onerror(a), function () {
	      return "{Template Error}";
	    };
	  },
	      q = d.compile = function (a, b) {
	    function d(c) {
	      try {
	        return new i(c, h) + "";
	      } catch (d) {
	        return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
	      }
	    }b = b || {};for (var g in e) {
	      void 0 === b[g] && (b[g] = e[g]);
	    }var h = b.filename;try {
	      var i = c(a, b);
	    } catch (j) {
	      return j.filename = h || "anonymous", j.name = "Syntax Error", p(j);
	    }return d.prototype = i.prototype, d.toString = function () {
	      return i.toString();
	    }, h && b.cache && (f[h] = d), d;
	  },
	      r = n.$each,
	      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
	      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
	      u = /[^\w$]+/g,
	      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
	      w = /^\d[^,]*|,\d[^,]*/g,
	      x = /^,+|,+$/g,
	      y = /^$|,+/;e.openTag = "{{", e.closeTag = "}}";var z = function z(a, b) {
	    var c = b.split(":"),
	        d = c.shift(),
	        e = c.join(":") || "";return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")";
	  };e.parser = function (a) {
	    a = a.replace(/^\s/, "");var b = a.split(" "),
	        c = b.shift(),
	        e = b.join(" ");switch (c) {case "if":
	        a = "if(" + e + "){";break;case "else":
	        b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";break;case "/if":
	        a = "}";break;case "each":
	        var f = b[0] || "$data",
	            g = b[1] || "as",
	            h = b[2] || "$value",
	            i = b[3] || "$index",
	            j = h + "," + i;"as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";break;case "/each":
	        a = "});";break;case "echo":
	        a = "print(" + e + ");";break;case "print":case "include":
	        a = c + "(" + b.join(",") + ");";break;default:
	        if (/^\s*\|\s*[\w\$]/.test(e)) {
	          var k = !0;0 === a.indexOf("#") && (a = a.substr(1), k = !1);for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) {
	            o = z(o, m[l]);
	          }a = (k ? "=" : "=#") + o;
	        } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a;}return a;
	  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return d;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = d : this.template = d;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*! Hammer.JS - v2.0.8 - 2016-04-23
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function (window, document, exportName, undefined) {
	    'use strict';
	
	    var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	    var TEST_ELEMENT = document.createElement('div');
	
	    var TYPE_FUNCTION = 'function';
	
	    var round = Math.round;
	    var abs = Math.abs;
	    var now = Date.now;
	
	    /**
	     * set a timeout with a given scope
	     * @param {Function} fn
	     * @param {Number} timeout
	     * @param {Object} context
	     * @returns {number}
	     */
	    function setTimeoutContext(fn, timeout, context) {
	        return setTimeout(bindFn(fn, context), timeout);
	    }
	
	    /**
	     * if the argument is an array, we want to execute the fn on each entry
	     * if it aint an array we don't want to do a thing.
	     * this is used by all the methods that accept a single and array argument.
	     * @param {*|Array} arg
	     * @param {String} fn
	     * @param {Object} [context]
	     * @returns {Boolean}
	     */
	    function invokeArrayArg(arg, fn, context) {
	        if (Array.isArray(arg)) {
	            each(arg, context[fn], context);
	            return true;
	        }
	        return false;
	    }
	
	    /**
	     * walk objects and arrays
	     * @param {Object} obj
	     * @param {Function} iterator
	     * @param {Object} context
	     */
	    function each(obj, iterator, context) {
	        var i;
	
	        if (!obj) {
	            return;
	        }
	
	        if (obj.forEach) {
	            obj.forEach(iterator, context);
	        } else if (obj.length !== undefined) {
	            i = 0;
	            while (i < obj.length) {
	                iterator.call(context, obj[i], i, obj);
	                i++;
	            }
	        } else {
	            for (i in obj) {
	                obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	            }
	        }
	    }
	
	    /**
	     * wrap a method with a deprecation warning and stack trace
	     * @param {Function} method
	     * @param {String} name
	     * @param {String} message
	     * @returns {Function} A new function wrapping the supplied method.
	     */
	    function deprecate(method, name, message) {
	        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	        return function () {
	            var e = new Error('get-stack-trace');
	            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	            var log = window.console && (window.console.warn || window.console.log);
	            if (log) {
	                log.call(window.console, deprecationMessage, stack);
	            }
	            return method.apply(this, arguments);
	        };
	    }
	
	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} target
	     * @param {...Object} objects_to_assign
	     * @returns {Object} target
	     */
	    var assign;
	    if (typeof Object.assign !== 'function') {
	        assign = function assign(target) {
	            if (target === undefined || target === null) {
	                throw new TypeError('Cannot convert undefined or null to object');
	            }
	
	            var output = Object(target);
	            for (var index = 1; index < arguments.length; index++) {
	                var source = arguments[index];
	                if (source !== undefined && source !== null) {
	                    for (var nextKey in source) {
	                        if (source.hasOwnProperty(nextKey)) {
	                            output[nextKey] = source[nextKey];
	                        }
	                    }
	                }
	            }
	            return output;
	        };
	    } else {
	        assign = Object.assign;
	    }
	
	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} dest
	     * @param {Object} src
	     * @param {Boolean} [merge=false]
	     * @returns {Object} dest
	     */
	    var extend = deprecate(function extend(dest, src, merge) {
	        var keys = Object.keys(src);
	        var i = 0;
	        while (i < keys.length) {
	            if (!merge || merge && dest[keys[i]] === undefined) {
	                dest[keys[i]] = src[keys[i]];
	            }
	            i++;
	        }
	        return dest;
	    }, 'extend', 'Use `assign`.');
	
	    /**
	     * merge the values from src in the dest.
	     * means that properties that exist in dest will not be overwritten by src
	     * @param {Object} dest
	     * @param {Object} src
	     * @returns {Object} dest
	     */
	    var merge = deprecate(function merge(dest, src) {
	        return extend(dest, src, true);
	    }, 'merge', 'Use `assign`.');
	
	    /**
	     * simple class inheritance
	     * @param {Function} child
	     * @param {Function} base
	     * @param {Object} [properties]
	     */
	    function inherit(child, base, properties) {
	        var baseP = base.prototype,
	            childP;
	
	        childP = child.prototype = Object.create(baseP);
	        childP.constructor = child;
	        childP._super = baseP;
	
	        if (properties) {
	            assign(childP, properties);
	        }
	    }
	
	    /**
	     * simple function bind
	     * @param {Function} fn
	     * @param {Object} context
	     * @returns {Function}
	     */
	    function bindFn(fn, context) {
	        return function boundFn() {
	            return fn.apply(context, arguments);
	        };
	    }
	
	    /**
	     * let a boolean value also be a function that must return a boolean
	     * this first item in args will be used as the context
	     * @param {Boolean|Function} val
	     * @param {Array} [args]
	     * @returns {Boolean}
	     */
	    function boolOrFn(val, args) {
	        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == TYPE_FUNCTION) {
	            return val.apply(args ? args[0] || undefined : undefined, args);
	        }
	        return val;
	    }
	
	    /**
	     * use the val2 when val1 is undefined
	     * @param {*} val1
	     * @param {*} val2
	     * @returns {*}
	     */
	    function ifUndefined(val1, val2) {
	        return val1 === undefined ? val2 : val1;
	    }
	
	    /**
	     * addEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function addEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.addEventListener(type, handler, false);
	        });
	    }
	
	    /**
	     * removeEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function removeEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.removeEventListener(type, handler, false);
	        });
	    }
	
	    /**
	     * find if a node is in the given parent
	     * @method hasParent
	     * @param {HTMLElement} node
	     * @param {HTMLElement} parent
	     * @return {Boolean} found
	     */
	    function hasParent(node, parent) {
	        while (node) {
	            if (node == parent) {
	                return true;
	            }
	            node = node.parentNode;
	        }
	        return false;
	    }
	
	    /**
	     * small indexOf wrapper
	     * @param {String} str
	     * @param {String} find
	     * @returns {Boolean} found
	     */
	    function inStr(str, find) {
	        return str.indexOf(find) > -1;
	    }
	
	    /**
	     * split string on whitespace
	     * @param {String} str
	     * @returns {Array} words
	     */
	    function splitStr(str) {
	        return str.trim().split(/\s+/g);
	    }
	
	    /**
	     * find if a array contains the object using indexOf or a simple polyFill
	     * @param {Array} src
	     * @param {String} find
	     * @param {String} [findByKey]
	     * @return {Boolean|Number} false when not found, or the index
	     */
	    function inArray(src, find, findByKey) {
	        if (src.indexOf && !findByKey) {
	            return src.indexOf(find);
	        } else {
	            var i = 0;
	            while (i < src.length) {
	                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
	                    return i;
	                }
	                i++;
	            }
	            return -1;
	        }
	    }
	
	    /**
	     * convert array-like objects to real arrays
	     * @param {Object} obj
	     * @returns {Array}
	     */
	    function toArray(obj) {
	        return Array.prototype.slice.call(obj, 0);
	    }
	
	    /**
	     * unique array with objects based on a key (like 'id') or just by the array's value
	     * @param {Array} src [{id:1},{id:2},{id:1}]
	     * @param {String} [key]
	     * @param {Boolean} [sort=False]
	     * @returns {Array} [{id:1},{id:2}]
	     */
	    function uniqueArray(src, key, sort) {
	        var results = [];
	        var values = [];
	        var i = 0;
	
	        while (i < src.length) {
	            var val = key ? src[i][key] : src[i];
	            if (inArray(values, val) < 0) {
	                results.push(src[i]);
	            }
	            values[i] = val;
	            i++;
	        }
	
	        if (sort) {
	            if (!key) {
	                results = results.sort();
	            } else {
	                results = results.sort(function sortUniqueArray(a, b) {
	                    return a[key] > b[key];
	                });
	            }
	        }
	
	        return results;
	    }
	
	    /**
	     * get the prefixed property
	     * @param {Object} obj
	     * @param {String} property
	     * @returns {String|Undefined} prefixed
	     */
	    function prefixed(obj, property) {
	        var prefix, prop;
	        var camelProp = property[0].toUpperCase() + property.slice(1);
	
	        var i = 0;
	        while (i < VENDOR_PREFIXES.length) {
	            prefix = VENDOR_PREFIXES[i];
	            prop = prefix ? prefix + camelProp : property;
	
	            if (prop in obj) {
	                return prop;
	            }
	            i++;
	        }
	        return undefined;
	    }
	
	    /**
	     * get a unique id
	     * @returns {number} uniqueId
	     */
	    var _uniqueId = 1;
	    function uniqueId() {
	        return _uniqueId++;
	    }
	
	    /**
	     * get the window object of an element
	     * @param {HTMLElement} element
	     * @returns {DocumentView|Window}
	     */
	    function getWindowForElement(element) {
	        var doc = element.ownerDocument || element;
	        return doc.defaultView || doc.parentWindow || window;
	    }
	
	    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	    var SUPPORT_TOUCH = 'ontouchstart' in window;
	    var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	    var INPUT_TYPE_TOUCH = 'touch';
	    var INPUT_TYPE_PEN = 'pen';
	    var INPUT_TYPE_MOUSE = 'mouse';
	    var INPUT_TYPE_KINECT = 'kinect';
	
	    var COMPUTE_INTERVAL = 25;
	
	    var INPUT_START = 1;
	    var INPUT_MOVE = 2;
	    var INPUT_END = 4;
	    var INPUT_CANCEL = 8;
	
	    var DIRECTION_NONE = 1;
	    var DIRECTION_LEFT = 2;
	    var DIRECTION_RIGHT = 4;
	    var DIRECTION_UP = 8;
	    var DIRECTION_DOWN = 16;
	
	    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	    var PROPS_XY = ['x', 'y'];
	    var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	    /**
	     * create new input type manager
	     * @param {Manager} manager
	     * @param {Function} callback
	     * @returns {Input}
	     * @constructor
	     */
	    function Input(manager, callback) {
	        var self = this;
	        this.manager = manager;
	        this.callback = callback;
	        this.element = manager.element;
	        this.target = manager.options.inputTarget;
	
	        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	        // so when disabled the input events are completely bypassed.
	        this.domHandler = function (ev) {
	            if (boolOrFn(manager.options.enable, [manager])) {
	                self.handler(ev);
	            }
	        };
	
	        this.init();
	    }
	
	    Input.prototype = {
	        /**
	         * should handle the inputEvent data and trigger the callback
	         * @virtual
	         */
	        handler: function handler() {},
	
	        /**
	         * bind the events
	         */
	        init: function init() {
	            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        },
	
	        /**
	         * unbind the events
	         */
	        destroy: function destroy() {
	            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        }
	    };
	
	    /**
	     * create new input type manager
	     * called by the Manager constructor
	     * @param {Hammer} manager
	     * @returns {Input}
	     */
	    function createInputInstance(manager) {
	        var Type;
	        var inputClass = manager.options.inputClass;
	
	        if (inputClass) {
	            Type = inputClass;
	        } else if (SUPPORT_POINTER_EVENTS) {
	            Type = PointerEventInput;
	        } else if (SUPPORT_ONLY_TOUCH) {
	            Type = TouchInput;
	        } else if (!SUPPORT_TOUCH) {
	            Type = MouseInput;
	        } else {
	            Type = TouchMouseInput;
	        }
	        return new Type(manager, inputHandler);
	    }
	
	    /**
	     * handle input events
	     * @param {Manager} manager
	     * @param {String} eventType
	     * @param {Object} input
	     */
	    function inputHandler(manager, eventType, input) {
	        var pointersLen = input.pointers.length;
	        var changedPointersLen = input.changedPointers.length;
	        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
	        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
	
	        input.isFirst = !!isFirst;
	        input.isFinal = !!isFinal;
	
	        if (isFirst) {
	            manager.session = {};
	        }
	
	        // source event is the normalized value of the domEvents
	        // like 'touchstart, mouseup, pointerdown'
	        input.eventType = eventType;
	
	        // compute scale, rotation etc
	        computeInputData(manager, input);
	
	        // emit secret event
	        manager.emit('hammer.input', input);
	
	        manager.recognize(input);
	        manager.session.prevInput = input;
	    }
	
	    /**
	     * extend the data with some usable properties like scale, rotate, velocity etc
	     * @param {Object} manager
	     * @param {Object} input
	     */
	    function computeInputData(manager, input) {
	        var session = manager.session;
	        var pointers = input.pointers;
	        var pointersLength = pointers.length;
	
	        // store the first input to calculate the distance and direction
	        if (!session.firstInput) {
	            session.firstInput = simpleCloneInputData(input);
	        }
	
	        // to compute scale and rotation we need to store the multiple touches
	        if (pointersLength > 1 && !session.firstMultiple) {
	            session.firstMultiple = simpleCloneInputData(input);
	        } else if (pointersLength === 1) {
	            session.firstMultiple = false;
	        }
	
	        var firstInput = session.firstInput;
	        var firstMultiple = session.firstMultiple;
	        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	        var center = input.center = getCenter(pointers);
	        input.timeStamp = now();
	        input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	        input.angle = getAngle(offsetCenter, center);
	        input.distance = getDistance(offsetCenter, center);
	
	        computeDeltaXY(session, input);
	        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	        input.overallVelocityX = overallVelocity.x;
	        input.overallVelocityY = overallVelocity.y;
	        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
	
	        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
	
	        computeIntervalInputData(session, input);
	
	        // find the correct target
	        var target = manager.element;
	        if (hasParent(input.srcEvent.target, target)) {
	            target = input.srcEvent.target;
	        }
	        input.target = target;
	    }
	
	    function computeDeltaXY(session, input) {
	        var center = input.center;
	        var offset = session.offsetDelta || {};
	        var prevDelta = session.prevDelta || {};
	        var prevInput = session.prevInput || {};
	
	        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	            prevDelta = session.prevDelta = {
	                x: prevInput.deltaX || 0,
	                y: prevInput.deltaY || 0
	            };
	
	            offset = session.offsetDelta = {
	                x: center.x,
	                y: center.y
	            };
	        }
	
	        input.deltaX = prevDelta.x + (center.x - offset.x);
	        input.deltaY = prevDelta.y + (center.y - offset.y);
	    }
	
	    /**
	     * velocity is calculated every x ms
	     * @param {Object} session
	     * @param {Object} input
	     */
	    function computeIntervalInputData(session, input) {
	        var last = session.lastInterval || input,
	            deltaTime = input.timeStamp - last.timeStamp,
	            velocity,
	            velocityX,
	            velocityY,
	            direction;
	
	        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	            var deltaX = input.deltaX - last.deltaX;
	            var deltaY = input.deltaY - last.deltaY;
	
	            var v = getVelocity(deltaTime, deltaX, deltaY);
	            velocityX = v.x;
	            velocityY = v.y;
	            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
	            direction = getDirection(deltaX, deltaY);
	
	            session.lastInterval = input;
	        } else {
	            // use latest velocity info if it doesn't overtake a minimum period
	            velocity = last.velocity;
	            velocityX = last.velocityX;
	            velocityY = last.velocityY;
	            direction = last.direction;
	        }
	
	        input.velocity = velocity;
	        input.velocityX = velocityX;
	        input.velocityY = velocityY;
	        input.direction = direction;
	    }
	
	    /**
	     * create a simple clone from the input used for storage of firstInput and firstMultiple
	     * @param {Object} input
	     * @returns {Object} clonedInputData
	     */
	    function simpleCloneInputData(input) {
	        // make a simple copy of the pointers because we will get a reference if we don't
	        // we only need clientXY for the calculations
	        var pointers = [];
	        var i = 0;
	        while (i < input.pointers.length) {
	            pointers[i] = {
	                clientX: round(input.pointers[i].clientX),
	                clientY: round(input.pointers[i].clientY)
	            };
	            i++;
	        }
	
	        return {
	            timeStamp: now(),
	            pointers: pointers,
	            center: getCenter(pointers),
	            deltaX: input.deltaX,
	            deltaY: input.deltaY
	        };
	    }
	
	    /**
	     * get the center of all the pointers
	     * @param {Array} pointers
	     * @return {Object} center contains `x` and `y` properties
	     */
	    function getCenter(pointers) {
	        var pointersLength = pointers.length;
	
	        // no need to loop when only one touch
	        if (pointersLength === 1) {
	            return {
	                x: round(pointers[0].clientX),
	                y: round(pointers[0].clientY)
	            };
	        }
	
	        var x = 0,
	            y = 0,
	            i = 0;
	        while (i < pointersLength) {
	            x += pointers[i].clientX;
	            y += pointers[i].clientY;
	            i++;
	        }
	
	        return {
	            x: round(x / pointersLength),
	            y: round(y / pointersLength)
	        };
	    }
	
	    /**
	     * calculate the velocity between two points. unit is in px per ms.
	     * @param {Number} deltaTime
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Object} velocity `x` and `y`
	     */
	    function getVelocity(deltaTime, x, y) {
	        return {
	            x: x / deltaTime || 0,
	            y: y / deltaTime || 0
	        };
	    }
	
	    /**
	     * get the direction between two points
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Number} direction
	     */
	    function getDirection(x, y) {
	        if (x === y) {
	            return DIRECTION_NONE;
	        }
	
	        if (abs(x) >= abs(y)) {
	            return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	        }
	        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	    }
	
	    /**
	     * calculate the absolute distance between two points
	     * @param {Object} p1 {x, y}
	     * @param {Object} p2 {x, y}
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} distance
	     */
	    function getDistance(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];
	
	        return Math.sqrt(x * x + y * y);
	    }
	
	    /**
	     * calculate the angle between two coordinates
	     * @param {Object} p1
	     * @param {Object} p2
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} angle
	     */
	    function getAngle(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];
	        return Math.atan2(y, x) * 180 / Math.PI;
	    }
	
	    /**
	     * calculate the rotation degrees between two pointersets
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} rotation
	     */
	    function getRotation(start, end) {
	        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	    }
	
	    /**
	     * calculate the scale factor between two pointersets
	     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} scale
	     */
	    function getScale(start, end) {
	        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	    }
	
	    var MOUSE_INPUT_MAP = {
	        mousedown: INPUT_START,
	        mousemove: INPUT_MOVE,
	        mouseup: INPUT_END
	    };
	
	    var MOUSE_ELEMENT_EVENTS = 'mousedown';
	    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	    /**
	     * Mouse events input
	     * @constructor
	     * @extends Input
	     */
	    function MouseInput() {
	        this.evEl = MOUSE_ELEMENT_EVENTS;
	        this.evWin = MOUSE_WINDOW_EVENTS;
	
	        this.pressed = false; // mousedown state
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(MouseInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function MEhandler(ev) {
	            var eventType = MOUSE_INPUT_MAP[ev.type];
	
	            // on start we want to have the left mouse button down
	            if (eventType & INPUT_START && ev.button === 0) {
	                this.pressed = true;
	            }
	
	            if (eventType & INPUT_MOVE && ev.which !== 1) {
	                eventType = INPUT_END;
	            }
	
	            // mouse must be down
	            if (!this.pressed) {
	                return;
	            }
	
	            if (eventType & INPUT_END) {
	                this.pressed = false;
	            }
	
	            this.callback(this.manager, eventType, {
	                pointers: [ev],
	                changedPointers: [ev],
	                pointerType: INPUT_TYPE_MOUSE,
	                srcEvent: ev
	            });
	        }
	    });
	
	    var POINTER_INPUT_MAP = {
	        pointerdown: INPUT_START,
	        pointermove: INPUT_MOVE,
	        pointerup: INPUT_END,
	        pointercancel: INPUT_CANCEL,
	        pointerout: INPUT_CANCEL
	    };
	
	    // in IE10 the pointer types is defined as an enum
	    var IE10_POINTER_TYPE_ENUM = {
	        2: INPUT_TYPE_TOUCH,
	        3: INPUT_TYPE_PEN,
	        4: INPUT_TYPE_MOUSE,
	        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	    };
	
	    var POINTER_ELEMENT_EVENTS = 'pointerdown';
	    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	    // IE10 has prefixed support, and case-sensitive
	    if (window.MSPointerEvent && !window.PointerEvent) {
	        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	    }
	
	    /**
	     * Pointer events input
	     * @constructor
	     * @extends Input
	     */
	    function PointerEventInput() {
	        this.evEl = POINTER_ELEMENT_EVENTS;
	        this.evWin = POINTER_WINDOW_EVENTS;
	
	        Input.apply(this, arguments);
	
	        this.store = this.manager.session.pointerEvents = [];
	    }
	
	    inherit(PointerEventInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function PEhandler(ev) {
	            var store = this.store;
	            var removePointer = false;
	
	            var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	            var isTouch = pointerType == INPUT_TYPE_TOUCH;
	
	            // get index of the event in the store
	            var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	            // start and mouse must be down
	            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	                if (storeIndex < 0) {
	                    store.push(ev);
	                    storeIndex = store.length - 1;
	                }
	            } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	                removePointer = true;
	            }
	
	            // it not found, so the pointer hasn't been down (so it's probably a hover)
	            if (storeIndex < 0) {
	                return;
	            }
	
	            // update the event in the store
	            store[storeIndex] = ev;
	
	            this.callback(this.manager, eventType, {
	                pointers: store,
	                changedPointers: [ev],
	                pointerType: pointerType,
	                srcEvent: ev
	            });
	
	            if (removePointer) {
	                // remove from the store
	                store.splice(storeIndex, 1);
	            }
	        }
	    });
	
	    var SINGLE_TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };
	
	    var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	    var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	    /**
	     * Touch events input
	     * @constructor
	     * @extends Input
	     */
	    function SingleTouchInput() {
	        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	        this.started = false;
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(SingleTouchInput, Input, {
	        handler: function TEhandler(ev) {
	            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	            // should we handle the touch events?
	            if (type === INPUT_START) {
	                this.started = true;
	            }
	
	            if (!this.started) {
	                return;
	            }
	
	            var touches = normalizeSingleTouches.call(this, ev, type);
	
	            // when done, reset the started state
	            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	                this.started = false;
	            }
	
	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });
	
	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function normalizeSingleTouches(ev, type) {
	        var all = toArray(ev.touches);
	        var changed = toArray(ev.changedTouches);
	
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            all = uniqueArray(all.concat(changed), 'identifier', true);
	        }
	
	        return [all, changed];
	    }
	
	    var TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };
	
	    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	    /**
	     * Multi-user touch events input
	     * @constructor
	     * @extends Input
	     */
	    function TouchInput() {
	        this.evTarget = TOUCH_TARGET_EVENTS;
	        this.targetIds = {};
	
	        Input.apply(this, arguments);
	    }
	
	    inherit(TouchInput, Input, {
	        handler: function MTEhandler(ev) {
	            var type = TOUCH_INPUT_MAP[ev.type];
	            var touches = getTouches.call(this, ev, type);
	            if (!touches) {
	                return;
	            }
	
	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });
	
	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function getTouches(ev, type) {
	        var allTouches = toArray(ev.touches);
	        var targetIds = this.targetIds;
	
	        // when there is only one touch, the process can be simplified
	        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	            targetIds[allTouches[0].identifier] = true;
	            return [allTouches, allTouches];
	        }
	
	        var i,
	            targetTouches,
	            changedTouches = toArray(ev.changedTouches),
	            changedTargetTouches = [],
	            target = this.target;
	
	        // get target touches from touches
	        targetTouches = allTouches.filter(function (touch) {
	            return hasParent(touch.target, target);
	        });
	
	        // collect touches
	        if (type === INPUT_START) {
	            i = 0;
	            while (i < targetTouches.length) {
	                targetIds[targetTouches[i].identifier] = true;
	                i++;
	            }
	        }
	
	        // filter changed touches to only contain touches that exist in the collected target ids
	        i = 0;
	        while (i < changedTouches.length) {
	            if (targetIds[changedTouches[i].identifier]) {
	                changedTargetTouches.push(changedTouches[i]);
	            }
	
	            // cleanup removed touches
	            if (type & (INPUT_END | INPUT_CANCEL)) {
	                delete targetIds[changedTouches[i].identifier];
	            }
	            i++;
	        }
	
	        if (!changedTargetTouches.length) {
	            return;
	        }
	
	        return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
	    }
	
	    /**
	     * Combined touch and mouse input
	     *
	     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	     * This because touch devices also emit mouse events while doing a touch.
	     *
	     * @constructor
	     * @extends Input
	     */
	
	    var DEDUP_TIMEOUT = 2500;
	    var DEDUP_DISTANCE = 25;
	
	    function TouchMouseInput() {
	        Input.apply(this, arguments);
	
	        var handler = bindFn(this.handler, this);
	        this.touch = new TouchInput(this.manager, handler);
	        this.mouse = new MouseInput(this.manager, handler);
	
	        this.primaryTouch = null;
	        this.lastTouches = [];
	    }
	
	    inherit(TouchMouseInput, Input, {
	        /**
	         * handle mouse and touch events
	         * @param {Hammer} manager
	         * @param {String} inputEvent
	         * @param {Object} inputData
	         */
	        handler: function TMEhandler(manager, inputEvent, inputData) {
	            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
	                isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
	
	            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	                return;
	            }
	
	            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	            if (isTouch) {
	                recordTouches.call(this, inputEvent, inputData);
	            } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	                return;
	            }
	
	            this.callback(manager, inputEvent, inputData);
	        },
	
	        /**
	         * remove the event listeners
	         */
	        destroy: function destroy() {
	            this.touch.destroy();
	            this.mouse.destroy();
	        }
	    });
	
	    function recordTouches(eventType, eventData) {
	        if (eventType & INPUT_START) {
	            this.primaryTouch = eventData.changedPointers[0].identifier;
	            setLastTouch.call(this, eventData);
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            setLastTouch.call(this, eventData);
	        }
	    }
	
	    function setLastTouch(eventData) {
	        var touch = eventData.changedPointers[0];
	
	        if (touch.identifier === this.primaryTouch) {
	            var lastTouch = { x: touch.clientX, y: touch.clientY };
	            this.lastTouches.push(lastTouch);
	            var lts = this.lastTouches;
	            var removeLastTouch = function removeLastTouch() {
	                var i = lts.indexOf(lastTouch);
	                if (i > -1) {
	                    lts.splice(i, 1);
	                }
	            };
	            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	        }
	    }
	
	    function isSyntheticEvent(eventData) {
	        var x = eventData.srcEvent.clientX,
	            y = eventData.srcEvent.clientY;
	        for (var i = 0; i < this.lastTouches.length; i++) {
	            var t = this.lastTouches[i];
	            var dx = Math.abs(x - t.x),
	                dy = Math.abs(y - t.y);
	            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	                return true;
	            }
	        }
	        return false;
	    }
	
	    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	    // magical touchAction value
	    var TOUCH_ACTION_COMPUTE = 'compute';
	    var TOUCH_ACTION_AUTO = 'auto';
	    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	    var TOUCH_ACTION_NONE = 'none';
	    var TOUCH_ACTION_PAN_X = 'pan-x';
	    var TOUCH_ACTION_PAN_Y = 'pan-y';
	    var TOUCH_ACTION_MAP = getTouchActionProps();
	
	    /**
	     * Touch Action
	     * sets the touchAction property or uses the js alternative
	     * @param {Manager} manager
	     * @param {String} value
	     * @constructor
	     */
	    function TouchAction(manager, value) {
	        this.manager = manager;
	        this.set(value);
	    }
	
	    TouchAction.prototype = {
	        /**
	         * set the touchAction value on the element or enable the polyfill
	         * @param {String} value
	         */
	        set: function set(value) {
	            // find out the touch-action by the event handlers
	            if (value == TOUCH_ACTION_COMPUTE) {
	                value = this.compute();
	            }
	
	            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	                this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	            }
	            this.actions = value.toLowerCase().trim();
	        },
	
	        /**
	         * just re-set the touchAction value
	         */
	        update: function update() {
	            this.set(this.manager.options.touchAction);
	        },
	
	        /**
	         * compute the value for the touchAction property based on the recognizer's settings
	         * @returns {String} value
	         */
	        compute: function compute() {
	            var actions = [];
	            each(this.manager.recognizers, function (recognizer) {
	                if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                    actions = actions.concat(recognizer.getTouchAction());
	                }
	            });
	            return cleanTouchActions(actions.join(' '));
	        },
	
	        /**
	         * this method is called on each input cycle and provides the preventing of the browser behavior
	         * @param {Object} input
	         */
	        preventDefaults: function preventDefaults(input) {
	            var srcEvent = input.srcEvent;
	            var direction = input.offsetDirection;
	
	            // if the touch action did prevented once this session
	            if (this.manager.session.prevented) {
	                srcEvent.preventDefault();
	                return;
	            }
	
	            var actions = this.actions;
	            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	            if (hasNone) {
	                //do not prevent defaults if this is a tap gesture
	
	                var isTapPointer = input.pointers.length === 1;
	                var isTapMovement = input.distance < 2;
	                var isTapTouchTime = input.deltaTime < 250;
	
	                if (isTapPointer && isTapMovement && isTapTouchTime) {
	                    return;
	                }
	            }
	
	            if (hasPanX && hasPanY) {
	                // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	                return;
	            }
	
	            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
	                return this.preventSrc(srcEvent);
	            }
	        },
	
	        /**
	         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	         * @param {Object} srcEvent
	         */
	        preventSrc: function preventSrc(srcEvent) {
	            this.manager.session.prevented = true;
	            srcEvent.preventDefault();
	        }
	    };
	
	    /**
	     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	     * @param {String} actions
	     * @returns {*}
	     */
	    function cleanTouchActions(actions) {
	        // none
	        if (inStr(actions, TOUCH_ACTION_NONE)) {
	            return TOUCH_ACTION_NONE;
	        }
	
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	        // if both pan-x and pan-y are set (different recognizers
	        // for different directions, e.g. horizontal pan but vertical swipe?)
	        // we need none (as otherwise with pan-x pan-y combined none of these
	        // recognizers will work, since the browser would handle all panning
	        if (hasPanX && hasPanY) {
	            return TOUCH_ACTION_NONE;
	        }
	
	        // pan-x OR pan-y
	        if (hasPanX || hasPanY) {
	            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	        }
	
	        // manipulation
	        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	            return TOUCH_ACTION_MANIPULATION;
	        }
	
	        return TOUCH_ACTION_AUTO;
	    }
	
	    function getTouchActionProps() {
	        if (!NATIVE_TOUCH_ACTION) {
	            return false;
	        }
	        var touchMap = {};
	        var cssSupports = window.CSS && window.CSS.supports;
	        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
	
	            // If css.supports is not supported but there is native touch-action assume it supports
	            // all values. This is the case for IE 10 and 11.
	            touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	        });
	        return touchMap;
	    }
	
	    /**
	     * Recognizer flow explained; *
	     * All recognizers have the initial state of POSSIBLE when a input session starts.
	     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	     * Example session for mouse-input: mousedown -> mousemove -> mouseup
	     *
	     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	     * which determines with state it should be.
	     *
	     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	     * POSSIBLE to give it another change on the next cycle.
	     *
	     *               Possible
	     *                  |
	     *            +-----+---------------+
	     *            |                     |
	     *      +-----+-----+               |
	     *      |           |               |
	     *   Failed      Cancelled          |
	     *                          +-------+------+
	     *                          |              |
	     *                      Recognized       Began
	     *                                         |
	     *                                      Changed
	     *                                         |
	     *                                  Ended/Recognized
	     */
	    var STATE_POSSIBLE = 1;
	    var STATE_BEGAN = 2;
	    var STATE_CHANGED = 4;
	    var STATE_ENDED = 8;
	    var STATE_RECOGNIZED = STATE_ENDED;
	    var STATE_CANCELLED = 16;
	    var STATE_FAILED = 32;
	
	    /**
	     * Recognizer
	     * Every recognizer needs to extend from this class.
	     * @constructor
	     * @param {Object} options
	     */
	    function Recognizer(options) {
	        this.options = assign({}, this.defaults, options || {});
	
	        this.id = uniqueId();
	
	        this.manager = null;
	
	        // default is enable true
	        this.options.enable = ifUndefined(this.options.enable, true);
	
	        this.state = STATE_POSSIBLE;
	
	        this.simultaneous = {};
	        this.requireFail = [];
	    }
	
	    Recognizer.prototype = {
	        /**
	         * @virtual
	         * @type {Object}
	         */
	        defaults: {},
	
	        /**
	         * set options
	         * @param {Object} options
	         * @return {Recognizer}
	         */
	        set: function set(options) {
	            assign(this.options, options);
	
	            // also update the touchAction, in case something changed about the directions/enabled state
	            this.manager && this.manager.touchAction.update();
	            return this;
	        },
	
	        /**
	         * recognize simultaneous with an other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        recognizeWith: function recognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	                return this;
	            }
	
	            var simultaneous = this.simultaneous;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (!simultaneous[otherRecognizer.id]) {
	                simultaneous[otherRecognizer.id] = otherRecognizer;
	                otherRecognizer.recognizeWith(this);
	            }
	            return this;
	        },
	
	        /**
	         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	                return this;
	            }
	
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            delete this.simultaneous[otherRecognizer.id];
	            return this;
	        },
	
	        /**
	         * recognizer can only run when an other is failing
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        requireFailure: function requireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	                return this;
	            }
	
	            var requireFail = this.requireFail;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (inArray(requireFail, otherRecognizer) === -1) {
	                requireFail.push(otherRecognizer);
	                otherRecognizer.requireFailure(this);
	            }
	            return this;
	        },
	
	        /**
	         * drop the requireFailure link. it does not remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	                return this;
	            }
	
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            var index = inArray(this.requireFail, otherRecognizer);
	            if (index > -1) {
	                this.requireFail.splice(index, 1);
	            }
	            return this;
	        },
	
	        /**
	         * has require failures boolean
	         * @returns {boolean}
	         */
	        hasRequireFailures: function hasRequireFailures() {
	            return this.requireFail.length > 0;
	        },
	
	        /**
	         * if the recognizer can recognize simultaneous with an other recognizer
	         * @param {Recognizer} otherRecognizer
	         * @returns {Boolean}
	         */
	        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
	            return !!this.simultaneous[otherRecognizer.id];
	        },
	
	        /**
	         * You should use `tryEmit` instead of `emit` directly to check
	         * that all the needed recognizers has failed before emitting.
	         * @param {Object} input
	         */
	        emit: function emit(input) {
	            var self = this;
	            var state = this.state;
	
	            function emit(event) {
	                self.manager.emit(event, input);
	            }
	
	            // 'panstart' and 'panmove'
	            if (state < STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }
	
	            emit(self.options.event); // simple 'eventName' events
	
	            if (input.additionalEvent) {
	                // additional event(panleft, panright, pinchin, pinchout...)
	                emit(input.additionalEvent);
	            }
	
	            // panend and pancancel
	            if (state >= STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }
	        },
	
	        /**
	         * Check that all the require failure recognizers has failed,
	         * if true, it emits a gesture event,
	         * otherwise, setup the state to FAILED.
	         * @param {Object} input
	         */
	        tryEmit: function tryEmit(input) {
	            if (this.canEmit()) {
	                return this.emit(input);
	            }
	            // it's failing anyway
	            this.state = STATE_FAILED;
	        },
	
	        /**
	         * can we emit?
	         * @returns {boolean}
	         */
	        canEmit: function canEmit() {
	            var i = 0;
	            while (i < this.requireFail.length) {
	                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                    return false;
	                }
	                i++;
	            }
	            return true;
	        },
	
	        /**
	         * update the recognizer
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            // make a new copy of the inputData
	            // so we can change the inputData without messing up the other recognizers
	            var inputDataClone = assign({}, inputData);
	
	            // is is enabled and allow recognizing?
	            if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	                this.reset();
	                this.state = STATE_FAILED;
	                return;
	            }
	
	            // reset when we've reached the end
	            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	                this.state = STATE_POSSIBLE;
	            }
	
	            this.state = this.process(inputDataClone);
	
	            // the recognizer has recognized a gesture
	            // so trigger an event
	            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	                this.tryEmit(inputDataClone);
	            }
	        },
	
	        /**
	         * return the state of the recognizer
	         * the actual recognizing happens in this method
	         * @virtual
	         * @param {Object} inputData
	         * @returns {Const} STATE
	         */
	        process: function process(inputData) {}, // jshint ignore:line
	
	        /**
	         * return the preferred touch-action
	         * @virtual
	         * @returns {Array}
	         */
	        getTouchAction: function getTouchAction() {},
	
	        /**
	         * called when the gesture isn't allowed to recognize
	         * like when another is being recognized or it is disabled
	         * @virtual
	         */
	        reset: function reset() {}
	    };
	
	    /**
	     * get a usable string, used as event postfix
	     * @param {Const} state
	     * @returns {String} state
	     */
	    function stateStr(state) {
	        if (state & STATE_CANCELLED) {
	            return 'cancel';
	        } else if (state & STATE_ENDED) {
	            return 'end';
	        } else if (state & STATE_CHANGED) {
	            return 'move';
	        } else if (state & STATE_BEGAN) {
	            return 'start';
	        }
	        return '';
	    }
	
	    /**
	     * direction cons to string
	     * @param {Const} direction
	     * @returns {String}
	     */
	    function directionStr(direction) {
	        if (direction == DIRECTION_DOWN) {
	            return 'down';
	        } else if (direction == DIRECTION_UP) {
	            return 'up';
	        } else if (direction == DIRECTION_LEFT) {
	            return 'left';
	        } else if (direction == DIRECTION_RIGHT) {
	            return 'right';
	        }
	        return '';
	    }
	
	    /**
	     * get a recognizer by name if it is bound to a manager
	     * @param {Recognizer|String} otherRecognizer
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer}
	     */
	    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	        var manager = recognizer.manager;
	        if (manager) {
	            return manager.get(otherRecognizer);
	        }
	        return otherRecognizer;
	    }
	
	    /**
	     * This recognizer is just used as a base for the simple attribute recognizers.
	     * @constructor
	     * @extends Recognizer
	     */
	    function AttrRecognizer() {
	        Recognizer.apply(this, arguments);
	    }
	
	    inherit(AttrRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof AttrRecognizer
	         */
	        defaults: {
	            /**
	             * @type {Number}
	             * @default 1
	             */
	            pointers: 1
	        },
	
	        /**
	         * Used to check if it the recognizer receives valid input, like input.distance > 10.
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {Boolean} recognized
	         */
	        attrTest: function attrTest(input) {
	            var optionPointers = this.options.pointers;
	            return optionPointers === 0 || input.pointers.length === optionPointers;
	        },
	
	        /**
	         * Process the input and return the state for the recognizer
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {*} State
	         */
	        process: function process(input) {
	            var state = this.state;
	            var eventType = input.eventType;
	
	            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	            var isValid = this.attrTest(input);
	
	            // on cancel input and we've recognized before, return STATE_CANCELLED
	            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	                return state | STATE_CANCELLED;
	            } else if (isRecognized || isValid) {
	                if (eventType & INPUT_END) {
	                    return state | STATE_ENDED;
	                } else if (!(state & STATE_BEGAN)) {
	                    return STATE_BEGAN;
	                }
	                return state | STATE_CHANGED;
	            }
	            return STATE_FAILED;
	        }
	    });
	
	    /**
	     * Pan
	     * Recognized when the pointer is down and moved in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PanRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	
	        this.pX = null;
	        this.pY = null;
	    }
	
	    inherit(PanRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PanRecognizer
	         */
	        defaults: {
	            event: 'pan',
	            threshold: 10,
	            pointers: 1,
	            direction: DIRECTION_ALL
	        },
	
	        getTouchAction: function getTouchAction() {
	            var direction = this.options.direction;
	            var actions = [];
	            if (direction & DIRECTION_HORIZONTAL) {
	                actions.push(TOUCH_ACTION_PAN_Y);
	            }
	            if (direction & DIRECTION_VERTICAL) {
	                actions.push(TOUCH_ACTION_PAN_X);
	            }
	            return actions;
	        },
	
	        directionTest: function directionTest(input) {
	            var options = this.options;
	            var hasMoved = true;
	            var distance = input.distance;
	            var direction = input.direction;
	            var x = input.deltaX;
	            var y = input.deltaY;
	
	            // lock to axis?
	            if (!(direction & options.direction)) {
	                if (options.direction & DIRECTION_HORIZONTAL) {
	                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                    hasMoved = x != this.pX;
	                    distance = Math.abs(input.deltaX);
	                } else {
	                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	                    hasMoved = y != this.pY;
	                    distance = Math.abs(input.deltaY);
	                }
	            }
	            input.direction = direction;
	            return hasMoved && distance > options.threshold && direction & options.direction;
	        },
	
	        attrTest: function attrTest(input) {
	            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
	        },
	
	        emit: function emit(input) {
	
	            this.pX = input.deltaX;
	            this.pY = input.deltaY;
	
	            var direction = directionStr(input.direction);
	
	            if (direction) {
	                input.additionalEvent = this.options.event + direction;
	            }
	            this._super.emit.call(this, input);
	        }
	    });
	
	    /**
	     * Pinch
	     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PinchRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(PinchRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'pinch',
	            threshold: 0,
	            pointers: 2
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },
	
	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	        },
	
	        emit: function emit(input) {
	            if (input.scale !== 1) {
	                var inOut = input.scale < 1 ? 'in' : 'out';
	                input.additionalEvent = this.options.event + inOut;
	            }
	            this._super.emit.call(this, input);
	        }
	    });
	
	    /**
	     * Press
	     * Recognized when the pointer is down for x ms without any movement.
	     * @constructor
	     * @extends Recognizer
	     */
	    function PressRecognizer() {
	        Recognizer.apply(this, arguments);
	
	        this._timer = null;
	        this._input = null;
	    }
	
	    inherit(PressRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PressRecognizer
	         */
	        defaults: {
	            event: 'press',
	            pointers: 1,
	            time: 251, // minimal time of the pointer to be pressed
	            threshold: 9 // a minimal movement is ok, but keep it low
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_AUTO];
	        },
	
	        process: function process(input) {
	            var options = this.options;
	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTime = input.deltaTime > options.time;
	
	            this._input = input;
	
	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
	                this.reset();
	            } else if (input.eventType & INPUT_START) {
	                this.reset();
	                this._timer = setTimeoutContext(function () {
	                    this.state = STATE_RECOGNIZED;
	                    this.tryEmit();
	                }, options.time, this);
	            } else if (input.eventType & INPUT_END) {
	                return STATE_RECOGNIZED;
	            }
	            return STATE_FAILED;
	        },
	
	        reset: function reset() {
	            clearTimeout(this._timer);
	        },
	
	        emit: function emit(input) {
	            if (this.state !== STATE_RECOGNIZED) {
	                return;
	            }
	
	            if (input && input.eventType & INPUT_END) {
	                this.manager.emit(this.options.event + 'up', input);
	            } else {
	                this._input.timeStamp = now();
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });
	
	    /**
	     * Rotate
	     * Recognized when two or more pointer are moving in a circular motion.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function RotateRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(RotateRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof RotateRecognizer
	         */
	        defaults: {
	            event: 'rotate',
	            threshold: 0,
	            pointers: 2
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },
	
	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	        }
	    });
	
	    /**
	     * Swipe
	     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function SwipeRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }
	
	    inherit(SwipeRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof SwipeRecognizer
	         */
	        defaults: {
	            event: 'swipe',
	            threshold: 10,
	            velocity: 0.3,
	            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	            pointers: 1
	        },
	
	        getTouchAction: function getTouchAction() {
	            return PanRecognizer.prototype.getTouchAction.call(this);
	        },
	
	        attrTest: function attrTest(input) {
	            var direction = this.options.direction;
	            var velocity;
	
	            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	                velocity = input.overallVelocity;
	            } else if (direction & DIRECTION_HORIZONTAL) {
	                velocity = input.overallVelocityX;
	            } else if (direction & DIRECTION_VERTICAL) {
	                velocity = input.overallVelocityY;
	            }
	
	            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	        },
	
	        emit: function emit(input) {
	            var direction = directionStr(input.offsetDirection);
	            if (direction) {
	                this.manager.emit(this.options.event + direction, input);
	            }
	
	            this.manager.emit(this.options.event, input);
	        }
	    });
	
	    /**
	     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	     * a single tap.
	     *
	     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	     * multi-taps being recognized.
	     * @constructor
	     * @extends Recognizer
	     */
	    function TapRecognizer() {
	        Recognizer.apply(this, arguments);
	
	        // previous time and center,
	        // used for tap counting
	        this.pTime = false;
	        this.pCenter = false;
	
	        this._timer = null;
	        this._input = null;
	        this.count = 0;
	    }
	
	    inherit(TapRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'tap',
	            pointers: 1,
	            taps: 1,
	            interval: 300, // max time between the multi-tap taps
	            time: 250, // max time of the pointer to be down (like finger on the screen)
	            threshold: 9, // a minimal movement is ok, but keep it low
	            posThreshold: 10 // a multi-tap can be a bit off the initial position
	        },
	
	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_MANIPULATION];
	        },
	
	        process: function process(input) {
	            var options = this.options;
	
	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTouchTime = input.deltaTime < options.time;
	
	            this.reset();
	
	            if (input.eventType & INPUT_START && this.count === 0) {
	                return this.failTimeout();
	            }
	
	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (validMovement && validTouchTime && validPointers) {
	                if (input.eventType != INPUT_END) {
	                    return this.failTimeout();
	                }
	
	                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
	                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	                this.pTime = input.timeStamp;
	                this.pCenter = input.center;
	
	                if (!validMultiTap || !validInterval) {
	                    this.count = 1;
	                } else {
	                    this.count += 1;
	                }
	
	                this._input = input;
	
	                // if tap count matches we have recognized it,
	                // else it has began recognizing...
	                var tapCount = this.count % options.taps;
	                if (tapCount === 0) {
	                    // no failing requirements, immediately trigger the tap event
	                    // or wait as long as the multitap interval to trigger
	                    if (!this.hasRequireFailures()) {
	                        return STATE_RECOGNIZED;
	                    } else {
	                        this._timer = setTimeoutContext(function () {
	                            this.state = STATE_RECOGNIZED;
	                            this.tryEmit();
	                        }, options.interval, this);
	                        return STATE_BEGAN;
	                    }
	                }
	            }
	            return STATE_FAILED;
	        },
	
	        failTimeout: function failTimeout() {
	            this._timer = setTimeoutContext(function () {
	                this.state = STATE_FAILED;
	            }, this.options.interval, this);
	            return STATE_FAILED;
	        },
	
	        reset: function reset() {
	            clearTimeout(this._timer);
	        },
	
	        emit: function emit() {
	            if (this.state == STATE_RECOGNIZED) {
	                this._input.tapCount = this.count;
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });
	
	    /**
	     * Simple way to create a manager with a default set of recognizers.
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Hammer(element, options) {
	        options = options || {};
	        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	        return new Manager(element, options);
	    }
	
	    /**
	     * @const {string}
	     */
	    Hammer.VERSION = '2.0.8';
	
	    /**
	     * default settings
	     * @namespace
	     */
	    Hammer.defaults = {
	        /**
	         * set if DOM events are being triggered.
	         * But this is slower and unused by simple implementations, so disabled by default.
	         * @type {Boolean}
	         * @default false
	         */
	        domEvents: false,
	
	        /**
	         * The value for the touchAction property/fallback.
	         * When set to `compute` it will magically set the correct value based on the added recognizers.
	         * @type {String}
	         * @default compute
	         */
	        touchAction: TOUCH_ACTION_COMPUTE,
	
	        /**
	         * @type {Boolean}
	         * @default true
	         */
	        enable: true,
	
	        /**
	         * EXPERIMENTAL FEATURE -- can be removed/changed
	         * Change the parent input target element.
	         * If Null, then it is being set the to main element.
	         * @type {Null|EventTarget}
	         * @default null
	         */
	        inputTarget: null,
	
	        /**
	         * force an input class
	         * @type {Null|Function}
	         * @default null
	         */
	        inputClass: null,
	
	        /**
	         * Default recognizer setup when calling `Hammer()`
	         * When creating a new Manager these will be skipped.
	         * @type {Array}
	         */
	        preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']], [PressRecognizer]],
	
	        /**
	         * Some CSS properties can be used to improve the working of Hammer.
	         * Add them to this method and they will be set when creating a new Manager.
	         * @namespace
	         */
	        cssProps: {
	            /**
	             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userSelect: 'none',
	
	            /**
	             * Disable the Windows Phone grippers when pressing an element.
	             * @type {String}
	             * @default 'none'
	             */
	            touchSelect: 'none',
	
	            /**
	             * Disables the default callout shown when you touch and hold a touch target.
	             * On iOS, when you touch and hold a touch target such as a link, Safari displays
	             * a callout containing information about the link. This property allows you to disable that callout.
	             * @type {String}
	             * @default 'none'
	             */
	            touchCallout: 'none',
	
	            /**
	             * Specifies whether zooming is enabled. Used by IE10>
	             * @type {String}
	             * @default 'none'
	             */
	            contentZooming: 'none',
	
	            /**
	             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userDrag: 'none',
	
	            /**
	             * Overrides the highlight color shown when the user taps a link or a JavaScript
	             * clickable element in iOS. This property obeys the alpha value, if specified.
	             * @type {String}
	             * @default 'rgba(0,0,0,0)'
	             */
	            tapHighlightColor: 'rgba(0,0,0,0)'
	        }
	    };
	
	    var STOP = 1;
	    var FORCED_STOP = 2;
	
	    /**
	     * Manager
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Manager(element, options) {
	        this.options = assign({}, Hammer.defaults, options || {});
	
	        this.options.inputTarget = this.options.inputTarget || element;
	
	        this.handlers = {};
	        this.session = {};
	        this.recognizers = [];
	        this.oldCssProps = {};
	
	        this.element = element;
	        this.input = createInputInstance(this);
	        this.touchAction = new TouchAction(this, this.options.touchAction);
	
	        toggleCssProps(this, true);
	
	        each(this.options.recognizers, function (item) {
	            var recognizer = this.add(new item[0](item[1]));
	            item[2] && recognizer.recognizeWith(item[2]);
	            item[3] && recognizer.requireFailure(item[3]);
	        }, this);
	    }
	
	    Manager.prototype = {
	        /**
	         * set options
	         * @param {Object} options
	         * @returns {Manager}
	         */
	        set: function set(options) {
	            assign(this.options, options);
	
	            // Options that need a little more setup
	            if (options.touchAction) {
	                this.touchAction.update();
	            }
	            if (options.inputTarget) {
	                // Clean up existing event listeners and reinitialize
	                this.input.destroy();
	                this.input.target = options.inputTarget;
	                this.input.init();
	            }
	            return this;
	        },
	
	        /**
	         * stop recognizing for this session.
	         * This session will be discarded, when a new [input]start event is fired.
	         * When forced, the recognizer cycle is stopped immediately.
	         * @param {Boolean} [force]
	         */
	        stop: function stop(force) {
	            this.session.stopped = force ? FORCED_STOP : STOP;
	        },
	
	        /**
	         * run the recognizers!
	         * called by the inputHandler function on every movement of the pointers (touches)
	         * it walks through all the recognizers and tries to detect the gesture that is being made
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            var session = this.session;
	            if (session.stopped) {
	                return;
	            }
	
	            // run the touch-action polyfill
	            this.touchAction.preventDefaults(inputData);
	
	            var recognizer;
	            var recognizers = this.recognizers;
	
	            // this holds the recognizer that is being recognized.
	            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	            // if no recognizer is detecting a thing, it is set to `null`
	            var curRecognizer = session.curRecognizer;
	
	            // reset when the last recognizer is recognized
	            // or when we're in a new session
	            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
	                curRecognizer = session.curRecognizer = null;
	            }
	
	            var i = 0;
	            while (i < recognizers.length) {
	                recognizer = recognizers[i];
	
	                // find out if we are allowed try to recognize the input for this one.
	                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	                //      that is being recognized.
	                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	                //      this can be setup with the `recognizeWith()` method on the recognizer.
	                if (session.stopped !== FORCED_STOP && ( // 1
	                !curRecognizer || recognizer == curRecognizer || // 2
	                recognizer.canRecognizeWith(curRecognizer))) {
	                    // 3
	                    recognizer.recognize(inputData);
	                } else {
	                    recognizer.reset();
	                }
	
	                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	                // current active recognizer. but only if we don't already have an active recognizer
	                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                    curRecognizer = session.curRecognizer = recognizer;
	                }
	                i++;
	            }
	        },
	
	        /**
	         * get a recognizer by its event name.
	         * @param {Recognizer|String} recognizer
	         * @returns {Recognizer|Null}
	         */
	        get: function get(recognizer) {
	            if (recognizer instanceof Recognizer) {
	                return recognizer;
	            }
	
	            var recognizers = this.recognizers;
	            for (var i = 0; i < recognizers.length; i++) {
	                if (recognizers[i].options.event == recognizer) {
	                    return recognizers[i];
	                }
	            }
	            return null;
	        },
	
	        /**
	         * add a recognizer to the manager
	         * existing recognizers with the same event name will be removed
	         * @param {Recognizer} recognizer
	         * @returns {Recognizer|Manager}
	         */
	        add: function add(recognizer) {
	            if (invokeArrayArg(recognizer, 'add', this)) {
	                return this;
	            }
	
	            // remove existing
	            var existing = this.get(recognizer.options.event);
	            if (existing) {
	                this.remove(existing);
	            }
	
	            this.recognizers.push(recognizer);
	            recognizer.manager = this;
	
	            this.touchAction.update();
	            return recognizer;
	        },
	
	        /**
	         * remove a recognizer by name or instance
	         * @param {Recognizer|String} recognizer
	         * @returns {Manager}
	         */
	        remove: function remove(recognizer) {
	            if (invokeArrayArg(recognizer, 'remove', this)) {
	                return this;
	            }
	
	            recognizer = this.get(recognizer);
	
	            // let's make sure this recognizer exists
	            if (recognizer) {
	                var recognizers = this.recognizers;
	                var index = inArray(recognizers, recognizer);
	
	                if (index !== -1) {
	                    recognizers.splice(index, 1);
	                    this.touchAction.update();
	                }
	            }
	
	            return this;
	        },
	
	        /**
	         * bind event
	         * @param {String} events
	         * @param {Function} handler
	         * @returns {EventEmitter} this
	         */
	        on: function on(events, handler) {
	            if (events === undefined) {
	                return;
	            }
	            if (handler === undefined) {
	                return;
	            }
	
	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                handlers[event] = handlers[event] || [];
	                handlers[event].push(handler);
	            });
	            return this;
	        },
	
	        /**
	         * unbind event, leave emit blank to remove all handlers
	         * @param {String} events
	         * @param {Function} [handler]
	         * @returns {EventEmitter} this
	         */
	        off: function off(events, handler) {
	            if (events === undefined) {
	                return;
	            }
	
	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                if (!handler) {
	                    delete handlers[event];
	                } else {
	                    handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	                }
	            });
	            return this;
	        },
	
	        /**
	         * emit event to the listeners
	         * @param {String} event
	         * @param {Object} data
	         */
	        emit: function emit(event, data) {
	            // we also want to trigger dom events
	            if (this.options.domEvents) {
	                triggerDomEvent(event, data);
	            }
	
	            // no handlers, so skip it all
	            var handlers = this.handlers[event] && this.handlers[event].slice();
	            if (!handlers || !handlers.length) {
	                return;
	            }
	
	            data.type = event;
	            data.preventDefault = function () {
	                data.srcEvent.preventDefault();
	            };
	
	            var i = 0;
	            while (i < handlers.length) {
	                handlers[i](data);
	                i++;
	            }
	        },
	
	        /**
	         * destroy the manager and unbinds all events
	         * it doesn't unbind dom events, that is the user own responsibility
	         */
	        destroy: function destroy() {
	            this.element && toggleCssProps(this, false);
	
	            this.handlers = {};
	            this.session = {};
	            this.input.destroy();
	            this.element = null;
	        }
	    };
	
	    /**
	     * add/remove the css properties as defined in manager.options.cssProps
	     * @param {Manager} manager
	     * @param {Boolean} add
	     */
	    function toggleCssProps(manager, add) {
	        var element = manager.element;
	        if (!element.style) {
	            return;
	        }
	        var prop;
	        each(manager.options.cssProps, function (value, name) {
	            prop = prefixed(element.style, name);
	            if (add) {
	                manager.oldCssProps[prop] = element.style[prop];
	                element.style[prop] = value;
	            } else {
	                element.style[prop] = manager.oldCssProps[prop] || '';
	            }
	        });
	        if (!add) {
	            manager.oldCssProps = {};
	        }
	    }
	
	    /**
	     * trigger dom event
	     * @param {String} event
	     * @param {Object} data
	     */
	    function triggerDomEvent(event, data) {
	        var gestureEvent = document.createEvent('Event');
	        gestureEvent.initEvent(event, true, true);
	        gestureEvent.gesture = data;
	        data.target.dispatchEvent(gestureEvent);
	    }
	
	    assign(Hammer, {
	        INPUT_START: INPUT_START,
	        INPUT_MOVE: INPUT_MOVE,
	        INPUT_END: INPUT_END,
	        INPUT_CANCEL: INPUT_CANCEL,
	
	        STATE_POSSIBLE: STATE_POSSIBLE,
	        STATE_BEGAN: STATE_BEGAN,
	        STATE_CHANGED: STATE_CHANGED,
	        STATE_ENDED: STATE_ENDED,
	        STATE_RECOGNIZED: STATE_RECOGNIZED,
	        STATE_CANCELLED: STATE_CANCELLED,
	        STATE_FAILED: STATE_FAILED,
	
	        DIRECTION_NONE: DIRECTION_NONE,
	        DIRECTION_LEFT: DIRECTION_LEFT,
	        DIRECTION_RIGHT: DIRECTION_RIGHT,
	        DIRECTION_UP: DIRECTION_UP,
	        DIRECTION_DOWN: DIRECTION_DOWN,
	        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	        DIRECTION_ALL: DIRECTION_ALL,
	
	        Manager: Manager,
	        Input: Input,
	        TouchAction: TouchAction,
	
	        TouchInput: TouchInput,
	        MouseInput: MouseInput,
	        PointerEventInput: PointerEventInput,
	        TouchMouseInput: TouchMouseInput,
	        SingleTouchInput: SingleTouchInput,
	
	        Recognizer: Recognizer,
	        AttrRecognizer: AttrRecognizer,
	        Tap: TapRecognizer,
	        Pan: PanRecognizer,
	        Swipe: SwipeRecognizer,
	        Pinch: PinchRecognizer,
	        Rotate: RotateRecognizer,
	        Press: PressRecognizer,
	
	        on: addEventListeners,
	        off: removeEventListeners,
	        each: each,
	        merge: merge,
	        extend: extend,
	        assign: assign,
	        inherit: inherit,
	        bindFn: bindFn,
	        prefixed: prefixed
	    });
	
	    // this prevents errors when Hammer is loaded in the presence of an AMD
	    //  style loader but by script tag, not by the loader.
	    var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
	    freeGlobal.Hammer = Hammer;
	
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Hammer;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != 'undefined' && module.exports) {
	        module.exports = Hammer;
	    } else {
	        window[exportName] = Hammer;
	    }
	})(window, document, 'Hammer');

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Admini on 2016/8/29.
	 */
	//公共库，常用方法
	exports.default = {
	    getElement: function getElement(obj) {
	        return document.getElementById(obj);
	    }, //根据ID选择元素
	    createElement: function createElement(parent, json) {
	        json = json || {};
	        json.count = json.count || 1; //默认每次创建十条
	        json.ele = json.ele || 'a'; //默认创建的是A标签
	        for (var i = 0; i < json.count; i++) {
	            var aObj = document.createElement(json.ele);
	            aObj[json.attr] = json.attrName;
	            aObj[json.domClass] = json.className;
	            aObj[json.inner] = json.template;
	            parent.appendChild(aObj);
	        }
	    }, //创建元素
	    removeElement: function removeElement(_element) {
	        var _parentElement = _element.parentNode;
	        if (_parentElement) {
	            _parentElement.removeChild(_element);
	        }
	    }, //删除元素
	    getStyle: function getStyle(obj, attr) {
	        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	    }, //获取样式
	    move3: function move3(obj, json, options) {
	        options = options || {};
	        options.duration = options.duration || 500;
	        options.easing = options.easing || 'ease';
	
	        obj.style.transition = options.duration + 'ms all ' + options.easing;
	
	        for (var name in json) {
	            obj.style[name] = json[name];
	        }
	
	        function fnEnd() {
	            obj.removeEventListener('transitionend', fnEnd, false);
	
	            options.complete && options.complete.call(obj);
	        }
	        obj.addEventListener('transitionend', fnEnd, false);
	    }, //CSS3动画小型框架
	    preloader: function preloader(images) {
	        var aImg = document.getElementsByTagName(images),
	            n = 0,
	            This = this;
	        function scrollFn() {
	            var winH = document.documentElement.clientHeight;
	            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	
	            for (var i = 0; i < aImg.length; i++) {
	                if (aImg[i].b) continue;
	
	                if (scrollTop + winH > This.getPos(aImg[i]).top) {
	
	                    //aImg[i].src=aImg[i].getAttribute('_src');
	
	                    aImg[i].b = true; //代表已经换过了
	
	                    n++;
	                    //是不是所有的图片都加载完了
	                    if (n == aImg.length) {
	                        window.onscroll = null;
	                    };
	
	                    //等图片下载完再切换
	
	                    (function (index) {
	
	                        var oImg = new Image();
	                        oImg.onload = function () {
	
	                            aImg[index].src = this.src;
	                        };
	                        oImg.src = aImg[i].getAttribute('_src');
	                    })(i);
	                };
	            };
	        };
	
	        window.onscroll = function () {
	            scrollFn();
	        };
	        scrollFn();
	    }, //图片预加载
	    getPos: function getPos(obj) {
	        var l = 0;
	        var t = 0;
	        while (obj) {
	            l += obj.offsetLeft;
	            t += obj.offsetTop;
	            obj = obj.offsetParent;
	        };
	        return { left: l, top: t };
	    } //找父级，返回他的left,top值
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<!--首页-->\n<div style=\"transform: translateY(0);\">\n<div id=\"panel_list_item\">\n    {{each list as item i}}\n    <a href=\"#/list\" class=\"weui_panel\">\n        <div class=\"weui_panel_hd\">\n            <h4 class=\"weui_media_title\">\n            {{item.title}}\n        </h4>\n            <i id=\"{{item.id}}\" style=\"position: absolute;right: 10px;top: 0;padding: 10px\" class=\"iconfont icon-down\"></i></div>\n        <div class=\"weui_panel_bd\">\n            <div class=\"weui_media_box weui_media_text\">\n\n                <p class=\"weui_media_desc\">{{item.summary}}</p>\n                <ul class=\"weui_media_info\">\n                    <li class=\"weui_media_info_meta\">发布日期：{{item.date}}</li>\n                </ul>\n            </div>\n        </div>\n    </a>\n    {{/each}}\n\n</div>\n<span class=\"weui_panel_ft_bottom\">我是有底线的</span>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<!--弹出层alert-->\n<div class=\"weui_panel_hd_dialog\" id=\"dialog-alert\">\n    <div class=\"weui_dialog\">\n        <div class=\"weui_dialog_hd\"><strong class=\"weui_dialog_title\">弹窗标题</strong></div>\n        <div class=\"weui_dialog_bd\">弹窗内容，告知当前页面信息等</div>\n        <div class=\"weui_dialog_ft\">\n            <a href=\"javascript:;\" class=\"weui_btn_dialog primary\">确定</a>\n        </div>\n    </div>\n</div>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Admini on 2016/8/22.
	 */
	exports.default = [{
	    id: 1,
	    title: '微信Web App开发最佳实践',
	    date: '2016-08-31',
	    cover: 'https://mmrb.github.io/avatar/kl.jpg',
	    summary: '组内小伙伴 jf 去 Feday 广州站的分享，有蛮多干货，都是微信 web app 开发者们关注的一些问题。 不做过多介绍，没有去现场听得朋友可以下载ppt来看。 感兴趣的朋友也可以下载广州站的所有ppt，以及关注接下来的 Feday 日程。'
	}, {
	    id: 2,
	    title: 'X5即将升级内核到Blink',
	    date: '2016-08-28',
	    cover: 'https://mmrb.github.io/avatar/shenfei.jpg',
	    summary: '我们从QQ浏览器团队得到消息，X5已经完成升级到Blink的开发工作，最近已经开始下发到客户端中，而X5内核的更新是热更新，也就是说不需要用户更新微信客户端，在良好的网络环境下(比如WiFi)会在后台静默更新。 根据我们拿到的版本，X5用的Blink版本是Chrome 37。虽然'
	}, {
	    id: 3,
	    title: 'WeUI的设计稿开源',
	    date: '2016-08-26',
	    cover: 'https://mmrb.github.io/avatar/bear.jpg',
	    summary: '自从 WeUI 开源后，已经收到 7000 多 star ，将近 2000 的 fork，我们在欣喜之余，也收到了蛮多有价值的意见与建议，其中之一就是将设计稿开源——好吧，其实设计稿叫『开放下载』更合适一些。 那我们今天开放了基于 WeUI 0.4 版本的设计稿 sketch 文'
	}, {
	    id: 4,
	    title: 'HTML5+CSS3 loading 效果收集',
	    date: '2016-08-25',
	    cover: 'https://mmrb.github.io/avatar/gaby.jpg',
	    summary: '用gif图片来做loading的时代已经过去了，它显得太low了，而用HTML5/CSS3以及SVG和canvas来做加载动画显得既炫酷又逼格十足。这已经成为一种趋势。 这里收集了几十个用html5和css3实现的loading效果，以供学习参考。 01. CSS Rainbow'
	}, {
	    id: 5,
	    title: '微信网页开发者工具发布',
	    date: '2016-08-24',
	    cover: 'https://mmrb.github.io/avatar/xx.jpg',
	    summary: '兄弟团队内测已久的微信网页开发者工具终于在今天的微信公开课Pro大会上发布了，喜大普奔。 这个工具有主要有3个功能： 使用真实用户身份，调试微信网页授权。 校验页面的 JSSDK 权限，以及模拟大部分 SDK 的输入和输出。 利用集成的 Chrome DevTools 和基本'
	}];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _common = __webpack_require__(6);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _list = __webpack_require__(11);
	
	var _list2 = _interopRequireDefault(_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Admini on 2016/8/22.
	 */
	//var data=require('../data/data');
	exports.default = {
	    url: '/list',
	    className: 'list',
	    render: function render() {
	        return new Promise(function (resolve, reject) {
	            resolve(_list2.default);
	        });
	    },
	    bind: function bind() {
	        // common.preloader('img');//图片预加载
	
	
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"hd\">\n        <h1 class=\"page_title\">Article</h1>\n    </div>\n    <div class=\"bd\">\n        <article class=\"weui_article\">\n            <h1>大标题</h1>\n            <section>\n                <h2 class=\"title\">章标题</h2>\n                <section>\n                    <h3>1.1 节标题</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                        consequat. Duis aute</p>\n                    <p>\n                        <img src=\"./images/1.jpg\" alt=\"img1\" >\n                        <img src=\"./images/2.jpg\" alt=\"img2\" >\n                    </p>\n                </section>\n                <section>\n                    <h3>1.2 节标题</h3>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                </section>\n            </section>\n        </article>\n    </div>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map