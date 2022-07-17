"use strict";
var exports = {}

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchIndex = exports.Picker = exports.I18n = exports.FrequentlyUsed = exports.Emoji = exports.Data = void 0;
exports.init = $205291deb9107ba0$export$2cd8252107eb640b;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}

var $11f6c40cee63613b$var$n,
    $11f6c40cee63613b$export$41c562ebe57d11e2,
    $11f6c40cee63613b$var$u,
    $11f6c40cee63613b$export$a8257692ac88316c,
    $11f6c40cee63613b$var$t,
    $11f6c40cee63613b$var$r,
    $11f6c40cee63613b$var$o,
    $11f6c40cee63613b$var$f,
    $11f6c40cee63613b$var$e = {},
    $11f6c40cee63613b$var$c = [],
    $11f6c40cee63613b$var$s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function $11f6c40cee63613b$var$a(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    for (var u in $11f6c40cee63613b$export$41c562ebe57d11e2) {
        n[u] = $11f6c40cee63613b$export$41c562ebe57d11e2[u];
    }

    return n;
}

function $11f6c40cee63613b$var$h(n) {
    var $11f6c40cee63613b$export$41c562ebe57d11e2 = n.parentNode;
    $11f6c40cee63613b$export$41c562ebe57d11e2 && $11f6c40cee63613b$export$41c562ebe57d11e2.removeChild(n);
}

function $11f6c40cee63613b$export$c8a8987d4410bf2d($11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c) {
    var t,
        r,
        o,
        f = {};

    for (o in u) {
        "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    }

    if (arguments.length > 2 && (f.children = arguments.length > 3 ? $11f6c40cee63613b$var$n.call(arguments, 2) : $11f6c40cee63613b$export$a8257692ac88316c), "function" == typeof $11f6c40cee63613b$export$41c562ebe57d11e2 && null != $11f6c40cee63613b$export$41c562ebe57d11e2.defaultProps) for (o in $11f6c40cee63613b$export$41c562ebe57d11e2.defaultProps) {
        void 0 === f[o] && (f[o] = $11f6c40cee63613b$export$41c562ebe57d11e2.defaultProps[o]);
    }
    return $11f6c40cee63613b$var$y($11f6c40cee63613b$export$41c562ebe57d11e2, f, t, r, null);
}

function $11f6c40cee63613b$var$y(n, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o) {
    var f = {
        type: n,
        props: $11f6c40cee63613b$export$a8257692ac88316c,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++$11f6c40cee63613b$var$u : o
    };
    return null == o && null != $11f6c40cee63613b$export$41c562ebe57d11e2.vnode && $11f6c40cee63613b$export$41c562ebe57d11e2.vnode(f), f;
}

function $11f6c40cee63613b$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}

function $11f6c40cee63613b$export$ffb0004e005737fa(n) {
    return n.children;
}

function $11f6c40cee63613b$export$16fa2f45be04daa8(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    this.props = n, this.context = $11f6c40cee63613b$export$41c562ebe57d11e2;
}

function $11f6c40cee63613b$var$k(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    if (null == $11f6c40cee63613b$export$41c562ebe57d11e2) return n.__ ? $11f6c40cee63613b$var$k(n.__, n.__.__k.indexOf(n) + 1) : null;

    for (var u; $11f6c40cee63613b$export$41c562ebe57d11e2 < n.__k.length; $11f6c40cee63613b$export$41c562ebe57d11e2++) {
        if (null != (u = n.__k[$11f6c40cee63613b$export$41c562ebe57d11e2]) && null != u.__e) return u.__e;
    }

    return "function" == typeof n.type ? $11f6c40cee63613b$var$k(n) : null;
}

function $11f6c40cee63613b$var$b(n) {
    var $11f6c40cee63613b$export$41c562ebe57d11e2, u;

    if (null != (n = n.__) && null != n.__c) {
        for (n.__e = n.__c.base = null, $11f6c40cee63613b$export$41c562ebe57d11e2 = 0; $11f6c40cee63613b$export$41c562ebe57d11e2 < n.__k.length; $11f6c40cee63613b$export$41c562ebe57d11e2++) {
            if (null != (u = n.__k[$11f6c40cee63613b$export$41c562ebe57d11e2]) && null != u.__e) {
                n.__e = n.__c.base = u.__e;
                break;
            }
        }

        return $11f6c40cee63613b$var$b(n);
    }
}

function $11f6c40cee63613b$var$m(n) {
    (!n.__d && (n.__d = !0) && $11f6c40cee63613b$var$t.push(n) && !$11f6c40cee63613b$var$g.__r++ || $11f6c40cee63613b$var$o !== $11f6c40cee63613b$export$41c562ebe57d11e2.debounceRendering) && (($11f6c40cee63613b$var$o = $11f6c40cee63613b$export$41c562ebe57d11e2.debounceRendering) || $11f6c40cee63613b$var$r)($11f6c40cee63613b$var$g);
}

function $11f6c40cee63613b$var$g() {
    for (var n1; $11f6c40cee63613b$var$g.__r = $11f6c40cee63613b$var$t.length;) {
        n1 = $11f6c40cee63613b$var$t.sort(function (n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
            return n.__v.__b - $11f6c40cee63613b$export$41c562ebe57d11e2.__v.__b;
        }), $11f6c40cee63613b$var$t = [], n1.some(function (n) {
            var $11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o;
            n.__d && (r = (t = ($11f6c40cee63613b$export$41c562ebe57d11e2 = n).__v).__e, (o = $11f6c40cee63613b$export$41c562ebe57d11e2.__P) && (u = [], ($11f6c40cee63613b$export$a8257692ac88316c = $11f6c40cee63613b$var$a({}, t)).__v = t.__v + 1, $11f6c40cee63613b$var$j(o, t, $11f6c40cee63613b$export$a8257692ac88316c, $11f6c40cee63613b$export$41c562ebe57d11e2.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? $11f6c40cee63613b$var$k(t) : r, t.__h), $11f6c40cee63613b$var$z(u, t), t.__e != r && $11f6c40cee63613b$var$b(t)));
        });
    }
}

function $11f6c40cee63613b$var$w(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o, f, s, a) {
    var h,
        $11f6c40cee63613b$export$c8a8987d4410bf2d,
        $11f6c40cee63613b$export$7d1e3a5e95ceca43,
        $11f6c40cee63613b$export$16fa2f45be04daa8,
        b,
        m,
        g,
        w = $11f6c40cee63613b$export$a8257692ac88316c && $11f6c40cee63613b$export$a8257692ac88316c.__k || $11f6c40cee63613b$var$c,
        $11f6c40cee63613b$export$47e4c5b300681277 = w.length;

    for (u.__k = [], h = 0; h < $11f6c40cee63613b$export$41c562ebe57d11e2.length; h++) {
        if (null != ($11f6c40cee63613b$export$16fa2f45be04daa8 = u.__k[h] = null == ($11f6c40cee63613b$export$16fa2f45be04daa8 = $11f6c40cee63613b$export$41c562ebe57d11e2[h]) || "boolean" == typeof $11f6c40cee63613b$export$16fa2f45be04daa8 ? null : "string" == typeof $11f6c40cee63613b$export$16fa2f45be04daa8 || "number" == typeof $11f6c40cee63613b$export$16fa2f45be04daa8 || "bigint" == typeof $11f6c40cee63613b$export$16fa2f45be04daa8 ? $11f6c40cee63613b$var$y(null, $11f6c40cee63613b$export$16fa2f45be04daa8, null, null, $11f6c40cee63613b$export$16fa2f45be04daa8) : Array.isArray($11f6c40cee63613b$export$16fa2f45be04daa8) ? $11f6c40cee63613b$var$y($11f6c40cee63613b$export$ffb0004e005737fa, {
            children: $11f6c40cee63613b$export$16fa2f45be04daa8
        }, null, null, null) : $11f6c40cee63613b$export$16fa2f45be04daa8.__b > 0 ? $11f6c40cee63613b$var$y($11f6c40cee63613b$export$16fa2f45be04daa8.type, $11f6c40cee63613b$export$16fa2f45be04daa8.props, $11f6c40cee63613b$export$16fa2f45be04daa8.key, null, $11f6c40cee63613b$export$16fa2f45be04daa8.__v) : $11f6c40cee63613b$export$16fa2f45be04daa8)) {
            if ($11f6c40cee63613b$export$16fa2f45be04daa8.__ = u, $11f6c40cee63613b$export$16fa2f45be04daa8.__b = u.__b + 1, null === ($11f6c40cee63613b$export$7d1e3a5e95ceca43 = w[h]) || $11f6c40cee63613b$export$7d1e3a5e95ceca43 && $11f6c40cee63613b$export$16fa2f45be04daa8.key == $11f6c40cee63613b$export$7d1e3a5e95ceca43.key && $11f6c40cee63613b$export$16fa2f45be04daa8.type === $11f6c40cee63613b$export$7d1e3a5e95ceca43.type) w[h] = void 0;else for ($11f6c40cee63613b$export$c8a8987d4410bf2d = 0; $11f6c40cee63613b$export$c8a8987d4410bf2d < $11f6c40cee63613b$export$47e4c5b300681277; $11f6c40cee63613b$export$c8a8987d4410bf2d++) {
                if (($11f6c40cee63613b$export$7d1e3a5e95ceca43 = w[$11f6c40cee63613b$export$c8a8987d4410bf2d]) && $11f6c40cee63613b$export$16fa2f45be04daa8.key == $11f6c40cee63613b$export$7d1e3a5e95ceca43.key && $11f6c40cee63613b$export$16fa2f45be04daa8.type === $11f6c40cee63613b$export$7d1e3a5e95ceca43.type) {
                    w[$11f6c40cee63613b$export$c8a8987d4410bf2d] = void 0;
                    break;
                }

                $11f6c40cee63613b$export$7d1e3a5e95ceca43 = null;
            }
            $11f6c40cee63613b$var$j(n, $11f6c40cee63613b$export$16fa2f45be04daa8, $11f6c40cee63613b$export$7d1e3a5e95ceca43 = $11f6c40cee63613b$export$7d1e3a5e95ceca43 || $11f6c40cee63613b$var$e, t, r, o, f, s, a), b = $11f6c40cee63613b$export$16fa2f45be04daa8.__e, ($11f6c40cee63613b$export$c8a8987d4410bf2d = $11f6c40cee63613b$export$16fa2f45be04daa8.ref) && $11f6c40cee63613b$export$7d1e3a5e95ceca43.ref != $11f6c40cee63613b$export$c8a8987d4410bf2d && (g || (g = []), $11f6c40cee63613b$export$7d1e3a5e95ceca43.ref && g.push($11f6c40cee63613b$export$7d1e3a5e95ceca43.ref, null, $11f6c40cee63613b$export$16fa2f45be04daa8), g.push($11f6c40cee63613b$export$c8a8987d4410bf2d, $11f6c40cee63613b$export$16fa2f45be04daa8.__c || b, $11f6c40cee63613b$export$16fa2f45be04daa8)), null != b ? (null == m && (m = b), "function" == typeof $11f6c40cee63613b$export$16fa2f45be04daa8.type && $11f6c40cee63613b$export$16fa2f45be04daa8.__k === $11f6c40cee63613b$export$7d1e3a5e95ceca43.__k ? $11f6c40cee63613b$export$16fa2f45be04daa8.__d = s = $11f6c40cee63613b$var$x($11f6c40cee63613b$export$16fa2f45be04daa8, s, n) : s = $11f6c40cee63613b$var$P(n, $11f6c40cee63613b$export$16fa2f45be04daa8, $11f6c40cee63613b$export$7d1e3a5e95ceca43, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && $11f6c40cee63613b$export$7d1e3a5e95ceca43.__e == s && s.parentNode != n && (s = $11f6c40cee63613b$var$k($11f6c40cee63613b$export$7d1e3a5e95ceca43));
        }
    }

    for (u.__e = m, h = $11f6c40cee63613b$export$47e4c5b300681277; h--;) {
        null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = $11f6c40cee63613b$var$k($11f6c40cee63613b$export$a8257692ac88316c, h + 1)), $11f6c40cee63613b$var$N(w[h], w[h]));
    }

    if (g) for (h = 0; h < g.length; h++) {
        $11f6c40cee63613b$var$M(g[h], g[++h], g[++h]);
    }
}

function $11f6c40cee63613b$var$x(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u) {
    for (var $11f6c40cee63613b$export$a8257692ac88316c, t = n.__k, r = 0; t && r < t.length; r++) {
        ($11f6c40cee63613b$export$a8257692ac88316c = t[r]) && ($11f6c40cee63613b$export$a8257692ac88316c.__ = n, $11f6c40cee63613b$export$41c562ebe57d11e2 = "function" == typeof $11f6c40cee63613b$export$a8257692ac88316c.type ? $11f6c40cee63613b$var$x($11f6c40cee63613b$export$a8257692ac88316c, $11f6c40cee63613b$export$41c562ebe57d11e2, u) : $11f6c40cee63613b$var$P(u, $11f6c40cee63613b$export$a8257692ac88316c, $11f6c40cee63613b$export$a8257692ac88316c, t, $11f6c40cee63613b$export$a8257692ac88316c.__e, $11f6c40cee63613b$export$41c562ebe57d11e2));
    }

    return $11f6c40cee63613b$export$41c562ebe57d11e2;
}

function $11f6c40cee63613b$export$47e4c5b300681277(n2, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    return $11f6c40cee63613b$export$41c562ebe57d11e2 = $11f6c40cee63613b$export$41c562ebe57d11e2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function (n) {
        $11f6c40cee63613b$export$47e4c5b300681277(n, $11f6c40cee63613b$export$41c562ebe57d11e2);
    }) : $11f6c40cee63613b$export$41c562ebe57d11e2.push(n2)), $11f6c40cee63613b$export$41c562ebe57d11e2;
}

function $11f6c40cee63613b$var$P(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r) {
    var o, f, e;
    if (void 0 !== $11f6c40cee63613b$export$41c562ebe57d11e2.__d) o = $11f6c40cee63613b$export$41c562ebe57d11e2.__d, $11f6c40cee63613b$export$41c562ebe57d11e2.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
        for (f = r, e = 0; (f = f.nextSibling) && e < $11f6c40cee63613b$export$a8257692ac88316c.length; e += 2) {
            if (f == t) break n;
        }

        n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
}

function $11f6c40cee63613b$var$C(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t) {
    var r;

    for (r in u) {
        "children" === r || "key" === r || r in $11f6c40cee63613b$export$41c562ebe57d11e2 || $11f6c40cee63613b$var$H(n, r, null, u[r], $11f6c40cee63613b$export$a8257692ac88316c);
    }

    for (r in $11f6c40cee63613b$export$41c562ebe57d11e2) {
        t && "function" != typeof $11f6c40cee63613b$export$41c562ebe57d11e2[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === $11f6c40cee63613b$export$41c562ebe57d11e2[r] || $11f6c40cee63613b$var$H(n, r, $11f6c40cee63613b$export$41c562ebe57d11e2[r], u[r], $11f6c40cee63613b$export$a8257692ac88316c);
    }
}

function $11f6c40cee63613b$var$$(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u) {
    "-" === $11f6c40cee63613b$export$41c562ebe57d11e2[0] ? n.setProperty($11f6c40cee63613b$export$41c562ebe57d11e2, u) : n[$11f6c40cee63613b$export$41c562ebe57d11e2] = null == u ? "" : "number" != typeof u || $11f6c40cee63613b$var$s.test($11f6c40cee63613b$export$41c562ebe57d11e2) ? u : u + "px";
}

function $11f6c40cee63613b$var$H(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t) {
    var r;

    n: if ("style" === $11f6c40cee63613b$export$41c562ebe57d11e2) {
        if ("string" == typeof u) n.style.cssText = u;else {
            if ("string" == typeof $11f6c40cee63613b$export$a8257692ac88316c && (n.style.cssText = $11f6c40cee63613b$export$a8257692ac88316c = ""), $11f6c40cee63613b$export$a8257692ac88316c) for ($11f6c40cee63613b$export$41c562ebe57d11e2 in $11f6c40cee63613b$export$a8257692ac88316c) {
                u && $11f6c40cee63613b$export$41c562ebe57d11e2 in u || $11f6c40cee63613b$var$$(n.style, $11f6c40cee63613b$export$41c562ebe57d11e2, "");
            }
            if (u) for ($11f6c40cee63613b$export$41c562ebe57d11e2 in u) {
                $11f6c40cee63613b$export$a8257692ac88316c && u[$11f6c40cee63613b$export$41c562ebe57d11e2] === $11f6c40cee63613b$export$a8257692ac88316c[$11f6c40cee63613b$export$41c562ebe57d11e2] || $11f6c40cee63613b$var$$(n.style, $11f6c40cee63613b$export$41c562ebe57d11e2, u[$11f6c40cee63613b$export$41c562ebe57d11e2]);
            }
        }
    } else if ("o" === $11f6c40cee63613b$export$41c562ebe57d11e2[0] && "n" === $11f6c40cee63613b$export$41c562ebe57d11e2[1]) r = $11f6c40cee63613b$export$41c562ebe57d11e2 !== ($11f6c40cee63613b$export$41c562ebe57d11e2 = $11f6c40cee63613b$export$41c562ebe57d11e2.replace(/Capture$/, "")), $11f6c40cee63613b$export$41c562ebe57d11e2 = $11f6c40cee63613b$export$41c562ebe57d11e2.toLowerCase() in n ? $11f6c40cee63613b$export$41c562ebe57d11e2.toLowerCase().slice(2) : $11f6c40cee63613b$export$41c562ebe57d11e2.slice(2), n.l || (n.l = {}), n.l[$11f6c40cee63613b$export$41c562ebe57d11e2 + r] = u, u ? $11f6c40cee63613b$export$a8257692ac88316c || n.addEventListener($11f6c40cee63613b$export$41c562ebe57d11e2, r ? $11f6c40cee63613b$var$T : $11f6c40cee63613b$var$I, r) : n.removeEventListener($11f6c40cee63613b$export$41c562ebe57d11e2, r ? $11f6c40cee63613b$var$T : $11f6c40cee63613b$var$I, r);else if ("dangerouslySetInnerHTML" !== $11f6c40cee63613b$export$41c562ebe57d11e2) {
        if (t) $11f6c40cee63613b$export$41c562ebe57d11e2 = $11f6c40cee63613b$export$41c562ebe57d11e2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== $11f6c40cee63613b$export$41c562ebe57d11e2 && "list" !== $11f6c40cee63613b$export$41c562ebe57d11e2 && "form" !== $11f6c40cee63613b$export$41c562ebe57d11e2 && "tabIndex" !== $11f6c40cee63613b$export$41c562ebe57d11e2 && "download" !== $11f6c40cee63613b$export$41c562ebe57d11e2 && $11f6c40cee63613b$export$41c562ebe57d11e2 in n) try {
            n[$11f6c40cee63613b$export$41c562ebe57d11e2] = null == u ? "" : u;
            break n;
        } catch (n3) {}
        "function" == typeof u || (null != u && (!1 !== u || "a" === $11f6c40cee63613b$export$41c562ebe57d11e2[0] && "r" === $11f6c40cee63613b$export$41c562ebe57d11e2[1]) ? n.setAttribute($11f6c40cee63613b$export$41c562ebe57d11e2, u) : n.removeAttribute($11f6c40cee63613b$export$41c562ebe57d11e2));
    }
}

function $11f6c40cee63613b$var$I(n) {
    this.l[n.type + !1]($11f6c40cee63613b$export$41c562ebe57d11e2.event ? $11f6c40cee63613b$export$41c562ebe57d11e2.event(n) : n);
}

function $11f6c40cee63613b$var$T(n) {
    this.l[n.type + !0]($11f6c40cee63613b$export$41c562ebe57d11e2.event ? $11f6c40cee63613b$export$41c562ebe57d11e2.event(n) : n);
}

function $11f6c40cee63613b$var$j(n4, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o, f, e, c) {
    var s,
        h,
        $11f6c40cee63613b$export$c8a8987d4410bf2d,
        y,
        $11f6c40cee63613b$export$7d1e3a5e95ceca43,
        k,
        b,
        m,
        g,
        x,
        $11f6c40cee63613b$export$47e4c5b300681277,
        P = u.type;
    if (void 0 !== u.constructor) return null;
    null != $11f6c40cee63613b$export$a8257692ac88316c.__h && (c = $11f6c40cee63613b$export$a8257692ac88316c.__h, e = u.__e = $11f6c40cee63613b$export$a8257692ac88316c.__e, u.__h = null, o = [e]), (s = $11f6c40cee63613b$export$41c562ebe57d11e2.__b) && s(u);

    try {
        n: if ("function" == typeof P) {
            if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, $11f6c40cee63613b$export$a8257692ac88316c.__c ? b = (h = u.__c = $11f6c40cee63613b$export$a8257692ac88316c.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new $11f6c40cee63613b$export$16fa2f45be04daa8(m, x), h.constructor = P, h.render = $11f6c40cee63613b$var$O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, $11f6c40cee63613b$export$c8a8987d4410bf2d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $11f6c40cee63613b$var$a({}, h.__s)), $11f6c40cee63613b$var$a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, $11f6c40cee63613b$export$7d1e3a5e95ceca43 = h.state, $11f6c40cee63613b$export$c8a8987d4410bf2d) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
                if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === $11f6c40cee63613b$export$a8257692ac88316c.__v) {
                    h.props = m, h.state = h.__s, u.__v !== $11f6c40cee63613b$export$a8257692ac88316c.__v && (h.__d = !1), h.__v = u, u.__e = $11f6c40cee63613b$export$a8257692ac88316c.__e, u.__k = $11f6c40cee63613b$export$a8257692ac88316c.__k, u.__k.forEach(function (n) {
                        n && (n.__ = u);
                    }), h.__h.length && f.push(h);
                    break n;
                }

                null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
                    h.componentDidUpdate(y, $11f6c40cee63613b$export$7d1e3a5e95ceca43, k);
                });
            }
            h.context = x, h.props = m, h.state = h.__s, (s = $11f6c40cee63613b$export$41c562ebe57d11e2.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n4, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = $11f6c40cee63613b$var$a($11f6c40cee63613b$var$a({}, t), h.getChildContext())), $11f6c40cee63613b$export$c8a8987d4410bf2d || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, $11f6c40cee63613b$export$7d1e3a5e95ceca43)), $11f6c40cee63613b$export$47e4c5b300681277 = null != s && s.type === $11f6c40cee63613b$export$ffb0004e005737fa && null == s.key ? s.props.children : s, $11f6c40cee63613b$var$w(n4, Array.isArray($11f6c40cee63613b$export$47e4c5b300681277) ? $11f6c40cee63613b$export$47e4c5b300681277 : [$11f6c40cee63613b$export$47e4c5b300681277], u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == o && u.__v === $11f6c40cee63613b$export$a8257692ac88316c.__v ? (u.__k = $11f6c40cee63613b$export$a8257692ac88316c.__k, u.__e = $11f6c40cee63613b$export$a8257692ac88316c.__e) : u.__e = $11f6c40cee63613b$var$L($11f6c40cee63613b$export$a8257692ac88316c.__e, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o, f, c);

        (s = $11f6c40cee63613b$export$41c562ebe57d11e2.diffed) && s(u);
    } catch (n) {
        u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), $11f6c40cee63613b$export$41c562ebe57d11e2.__e(n, u, $11f6c40cee63613b$export$a8257692ac88316c);
    }
}

function $11f6c40cee63613b$var$z(n5, u1) {
    $11f6c40cee63613b$export$41c562ebe57d11e2.__c && $11f6c40cee63613b$export$41c562ebe57d11e2.__c(u1, n5), n5.some(function (u) {
        try {
            n5 = u.__h, u.__h = [], n5.some(function (n) {
                n.call(u);
            });
        } catch (n) {
            $11f6c40cee63613b$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}

function $11f6c40cee63613b$var$L($11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c, t, r, o, f, c) {
    var s,
        a,
        $11f6c40cee63613b$export$c8a8987d4410bf2d,
        y = $11f6c40cee63613b$export$a8257692ac88316c.props,
        $11f6c40cee63613b$export$7d1e3a5e95ceca43 = u.props,
        $11f6c40cee63613b$export$ffb0004e005737fa = u.type,
        $11f6c40cee63613b$export$16fa2f45be04daa8 = 0;

    if ("svg" === $11f6c40cee63613b$export$ffb0004e005737fa && (r = !0), null != o) {
        for (; $11f6c40cee63613b$export$16fa2f45be04daa8 < o.length; $11f6c40cee63613b$export$16fa2f45be04daa8++) {
            if ((s = o[$11f6c40cee63613b$export$16fa2f45be04daa8]) && "setAttribute" in s == !!$11f6c40cee63613b$export$ffb0004e005737fa && ($11f6c40cee63613b$export$ffb0004e005737fa ? s.localName === $11f6c40cee63613b$export$ffb0004e005737fa : 3 === s.nodeType)) {
                $11f6c40cee63613b$export$41c562ebe57d11e2 = s, o[$11f6c40cee63613b$export$16fa2f45be04daa8] = null;
                break;
            }
        }
    }

    if (null == $11f6c40cee63613b$export$41c562ebe57d11e2) {
        if (null === $11f6c40cee63613b$export$ffb0004e005737fa) return document.createTextNode($11f6c40cee63613b$export$7d1e3a5e95ceca43);
        $11f6c40cee63613b$export$41c562ebe57d11e2 = r ? document.createElementNS("http://www.w3.org/2000/svg", $11f6c40cee63613b$export$ffb0004e005737fa) : document.createElement($11f6c40cee63613b$export$ffb0004e005737fa, $11f6c40cee63613b$export$7d1e3a5e95ceca43.is && $11f6c40cee63613b$export$7d1e3a5e95ceca43), o = null, c = !1;
    }

    if (null === $11f6c40cee63613b$export$ffb0004e005737fa) y === $11f6c40cee63613b$export$7d1e3a5e95ceca43 || c && $11f6c40cee63613b$export$41c562ebe57d11e2.data === $11f6c40cee63613b$export$7d1e3a5e95ceca43 || ($11f6c40cee63613b$export$41c562ebe57d11e2.data = $11f6c40cee63613b$export$7d1e3a5e95ceca43);else {
        if (o = o && $11f6c40cee63613b$var$n.call($11f6c40cee63613b$export$41c562ebe57d11e2.childNodes), a = (y = $11f6c40cee63613b$export$a8257692ac88316c.props || $11f6c40cee63613b$var$e).dangerouslySetInnerHTML, $11f6c40cee63613b$export$c8a8987d4410bf2d = $11f6c40cee63613b$export$7d1e3a5e95ceca43.dangerouslySetInnerHTML, !c) {
            if (null != o) for (y = {}, $11f6c40cee63613b$export$16fa2f45be04daa8 = 0; $11f6c40cee63613b$export$16fa2f45be04daa8 < $11f6c40cee63613b$export$41c562ebe57d11e2.attributes.length; $11f6c40cee63613b$export$16fa2f45be04daa8++) {
                y[$11f6c40cee63613b$export$41c562ebe57d11e2.attributes[$11f6c40cee63613b$export$16fa2f45be04daa8].name] = $11f6c40cee63613b$export$41c562ebe57d11e2.attributes[$11f6c40cee63613b$export$16fa2f45be04daa8].value;
            }
            ($11f6c40cee63613b$export$c8a8987d4410bf2d || a) && ($11f6c40cee63613b$export$c8a8987d4410bf2d && (a && $11f6c40cee63613b$export$c8a8987d4410bf2d.__html == a.__html || $11f6c40cee63613b$export$c8a8987d4410bf2d.__html === $11f6c40cee63613b$export$41c562ebe57d11e2.innerHTML) || ($11f6c40cee63613b$export$41c562ebe57d11e2.innerHTML = $11f6c40cee63613b$export$c8a8987d4410bf2d && $11f6c40cee63613b$export$c8a8987d4410bf2d.__html || ""));
        }

        if ($11f6c40cee63613b$var$C($11f6c40cee63613b$export$41c562ebe57d11e2, $11f6c40cee63613b$export$7d1e3a5e95ceca43, y, r, c), $11f6c40cee63613b$export$c8a8987d4410bf2d) u.__k = [];else if ($11f6c40cee63613b$export$16fa2f45be04daa8 = u.props.children, $11f6c40cee63613b$var$w($11f6c40cee63613b$export$41c562ebe57d11e2, Array.isArray($11f6c40cee63613b$export$16fa2f45be04daa8) ? $11f6c40cee63613b$export$16fa2f45be04daa8 : [$11f6c40cee63613b$export$16fa2f45be04daa8], u, $11f6c40cee63613b$export$a8257692ac88316c, t, r && "foreignObject" !== $11f6c40cee63613b$export$ffb0004e005737fa, o, f, o ? o[0] : $11f6c40cee63613b$export$a8257692ac88316c.__k && $11f6c40cee63613b$var$k($11f6c40cee63613b$export$a8257692ac88316c, 0), c), null != o) for ($11f6c40cee63613b$export$16fa2f45be04daa8 = o.length; $11f6c40cee63613b$export$16fa2f45be04daa8--;) {
            null != o[$11f6c40cee63613b$export$16fa2f45be04daa8] && $11f6c40cee63613b$var$h(o[$11f6c40cee63613b$export$16fa2f45be04daa8]);
        }
        c || ("value" in $11f6c40cee63613b$export$7d1e3a5e95ceca43 && void 0 !== ($11f6c40cee63613b$export$16fa2f45be04daa8 = $11f6c40cee63613b$export$7d1e3a5e95ceca43.value) && ($11f6c40cee63613b$export$16fa2f45be04daa8 !== y.value || $11f6c40cee63613b$export$16fa2f45be04daa8 !== $11f6c40cee63613b$export$41c562ebe57d11e2.value || "progress" === $11f6c40cee63613b$export$ffb0004e005737fa && !$11f6c40cee63613b$export$16fa2f45be04daa8) && $11f6c40cee63613b$var$H($11f6c40cee63613b$export$41c562ebe57d11e2, "value", $11f6c40cee63613b$export$16fa2f45be04daa8, y.value, !1), "checked" in $11f6c40cee63613b$export$7d1e3a5e95ceca43 && void 0 !== ($11f6c40cee63613b$export$16fa2f45be04daa8 = $11f6c40cee63613b$export$7d1e3a5e95ceca43.checked) && $11f6c40cee63613b$export$16fa2f45be04daa8 !== $11f6c40cee63613b$export$41c562ebe57d11e2.checked && $11f6c40cee63613b$var$H($11f6c40cee63613b$export$41c562ebe57d11e2, "checked", $11f6c40cee63613b$export$16fa2f45be04daa8, y.checked, !1));
    }
    return $11f6c40cee63613b$export$41c562ebe57d11e2;
}

function $11f6c40cee63613b$var$M(n, u, $11f6c40cee63613b$export$a8257692ac88316c) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n6) {
        $11f6c40cee63613b$export$41c562ebe57d11e2.__e(n6, $11f6c40cee63613b$export$a8257692ac88316c);
    }
}

function $11f6c40cee63613b$var$N(n, u, $11f6c40cee63613b$export$a8257692ac88316c) {
    var t, r;

    if ($11f6c40cee63613b$export$41c562ebe57d11e2.unmount && $11f6c40cee63613b$export$41c562ebe57d11e2.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || $11f6c40cee63613b$var$M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            $11f6c40cee63613b$export$41c562ebe57d11e2.__e(n, u);
        }
        t.base = t.__P = null;
    }

    if (t = n.__k) for (r = 0; r < t.length; r++) {
        t[r] && $11f6c40cee63613b$var$N(t[r], u, "function" != typeof n.type);
    }
    $11f6c40cee63613b$export$a8257692ac88316c || null == n.__e || $11f6c40cee63613b$var$h(n.__e), n.__e = n.__d = void 0;
}

function $11f6c40cee63613b$var$O(n, $11f6c40cee63613b$export$41c562ebe57d11e2, u) {
    return this.constructor(n, u);
}

function $11f6c40cee63613b$export$b3890eb0ae9dca99(u, $11f6c40cee63613b$export$a8257692ac88316c, t) {
    var r, o, f;
    $11f6c40cee63613b$export$41c562ebe57d11e2.__ && $11f6c40cee63613b$export$41c562ebe57d11e2.__(u, $11f6c40cee63613b$export$a8257692ac88316c), o = (r = "function" == typeof t) ? null : t && t.__k || $11f6c40cee63613b$export$a8257692ac88316c.__k, f = [], $11f6c40cee63613b$var$j($11f6c40cee63613b$export$a8257692ac88316c, u = (!r && t || $11f6c40cee63613b$export$a8257692ac88316c).__k = $11f6c40cee63613b$export$c8a8987d4410bf2d($11f6c40cee63613b$export$ffb0004e005737fa, null, [u]), o || $11f6c40cee63613b$var$e, $11f6c40cee63613b$var$e, void 0 !== $11f6c40cee63613b$export$a8257692ac88316c.ownerSVGElement, !r && t ? [t] : o ? null : $11f6c40cee63613b$export$a8257692ac88316c.firstChild ? $11f6c40cee63613b$var$n.call($11f6c40cee63613b$export$a8257692ac88316c.childNodes) : null, f, !r && t ? t : o ? o.__e : $11f6c40cee63613b$export$a8257692ac88316c.firstChild, r), $11f6c40cee63613b$var$z(f, u);
}

function $11f6c40cee63613b$export$fa8d919ba61d84db(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    $11f6c40cee63613b$export$b3890eb0ae9dca99(n, $11f6c40cee63613b$export$41c562ebe57d11e2, $11f6c40cee63613b$export$fa8d919ba61d84db);
}

function $11f6c40cee63613b$export$e530037191fcd5d7($11f6c40cee63613b$export$41c562ebe57d11e2, u, $11f6c40cee63613b$export$a8257692ac88316c) {
    var t,
        r,
        o,
        f = $11f6c40cee63613b$var$a({}, $11f6c40cee63613b$export$41c562ebe57d11e2.props);

    for (o in u) {
        "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    }

    return arguments.length > 2 && (f.children = arguments.length > 3 ? $11f6c40cee63613b$var$n.call(arguments, 2) : $11f6c40cee63613b$export$a8257692ac88316c), $11f6c40cee63613b$var$y($11f6c40cee63613b$export$41c562ebe57d11e2.type, f, t || $11f6c40cee63613b$export$41c562ebe57d11e2.key, r || $11f6c40cee63613b$export$41c562ebe57d11e2.ref, null);
}

function $11f6c40cee63613b$export$fd42f52fd3ae1109(n7, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    var u2 = {
        __c: $11f6c40cee63613b$export$41c562ebe57d11e2 = "__cC" + $11f6c40cee63613b$var$f++,
        __: n7,
        Consumer: function Consumer(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
            return n.children($11f6c40cee63613b$export$41c562ebe57d11e2);
        },
        Provider: function Provider(n8) {
            var u, $11f6c40cee63613b$export$a8257692ac88316c;
            return this.getChildContext || (u = [], ($11f6c40cee63613b$export$a8257692ac88316c = {})[$11f6c40cee63613b$export$41c562ebe57d11e2] = this, this.getChildContext = function () {
                return $11f6c40cee63613b$export$a8257692ac88316c;
            }, this.shouldComponentUpdate = function (n) {
                this.props.value !== n.value && u.some($11f6c40cee63613b$var$m);
            }, this.sub = function (n) {
                u.push(n);
                var $11f6c40cee63613b$export$41c562ebe57d11e2 = n.componentWillUnmount;

                n.componentWillUnmount = function () {
                    u.splice(u.indexOf(n), 1), $11f6c40cee63613b$export$41c562ebe57d11e2 && $11f6c40cee63613b$export$41c562ebe57d11e2.call(n);
                };
            }), n8.children;
        }
    };
    return u2.Provider.__ = u2.Consumer.contextType = u2;
}

$11f6c40cee63613b$var$n = $11f6c40cee63613b$var$c.slice, $11f6c40cee63613b$export$41c562ebe57d11e2 = {
    __e: function __e(n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
        for (var u, $11f6c40cee63613b$export$a8257692ac88316c, t; $11f6c40cee63613b$export$41c562ebe57d11e2 = $11f6c40cee63613b$export$41c562ebe57d11e2.__;) {
            if ((u = $11f6c40cee63613b$export$41c562ebe57d11e2.__c) && !u.__) try {
                if (($11f6c40cee63613b$export$a8257692ac88316c = u.constructor) && null != $11f6c40cee63613b$export$a8257692ac88316c.getDerivedStateFromError && (u.setState($11f6c40cee63613b$export$a8257692ac88316c.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
            } catch ($11f6c40cee63613b$export$41c562ebe57d11e2) {
                n = $11f6c40cee63613b$export$41c562ebe57d11e2;
            }
        }

        throw n;
    }
}, $11f6c40cee63613b$var$u = 0, $11f6c40cee63613b$export$a8257692ac88316c = function $11f6c40cee63613b$export$a8257692ac88316c(n) {
    return null != n && void 0 === n.constructor;
}, $11f6c40cee63613b$export$16fa2f45be04daa8.prototype.setState = function (n, $11f6c40cee63613b$export$41c562ebe57d11e2) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = $11f6c40cee63613b$var$a({}, this.state), "function" == typeof n && (n = n($11f6c40cee63613b$var$a({}, u), this.props)), n && $11f6c40cee63613b$var$a(u, n), null != n && this.__v && ($11f6c40cee63613b$export$41c562ebe57d11e2 && this.__h.push($11f6c40cee63613b$export$41c562ebe57d11e2), $11f6c40cee63613b$var$m(this));
}, $11f6c40cee63613b$export$16fa2f45be04daa8.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $11f6c40cee63613b$var$m(this));
}, $11f6c40cee63613b$export$16fa2f45be04daa8.prototype.render = $11f6c40cee63613b$export$ffb0004e005737fa, $11f6c40cee63613b$var$t = [], $11f6c40cee63613b$var$r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $11f6c40cee63613b$var$g.__r = 0, $11f6c40cee63613b$var$f = 0;
var $6c8933bfb6137ffb$var$o = 0;

function $6c8933bfb6137ffb$export$34b9dba7ce09269b(_, $6c8933bfb6137ffb$export$34b9dba7ce09269b, n, t, f) {
    var l,
        s,
        u = {};

    for (s in $6c8933bfb6137ffb$export$34b9dba7ce09269b) {
        "ref" == s ? l = $6c8933bfb6137ffb$export$34b9dba7ce09269b[s] : u[s] = $6c8933bfb6137ffb$export$34b9dba7ce09269b[s];
    }

    var a = {
        type: _,
        props: u,
        key: n,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --$6c8933bfb6137ffb$var$o,
        __source: t,
        __self: f
    };
    if ("function" == typeof _ && (l = _.defaultProps)) for (s in l) {
        void 0 === u[s] && (u[s] = l[s]);
    }
    return $11f6c40cee63613b$export$41c562ebe57d11e2.vnode && $11f6c40cee63613b$export$41c562ebe57d11e2.vnode(a), a;
}

function $3b75e5301c412e02$export$9cb4719e2e525b7a(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every(function (val, index) {
        return val == b[index];
    });
}

function $3b75e5301c412e02$export$e772c8ff12451969() {
    return _$3b75e5301c412e02$export$e772c8ff.apply(this, arguments);
}

function _$3b75e5301c412e02$export$e772c8ff() {
    _$3b75e5301c412e02$export$e772c8ff = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var frames,
            _,
            _args5 = arguments;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        frames = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 1;
                        _context5.t0 = _regeneratorRuntime().keys(_toConsumableArray(Array(frames).keys()));

                    case 2:
                        if ((_context5.t1 = _context5.t0()).done) {
                            _context5.next = 8;
                            break;
                        }

                        _ = _context5.t1.value;
                        _context5.next = 6;
                        return new Promise(requestAnimationFrame);

                    case 6:
                        _context5.next = 2;
                        break;

                    case 8:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5);
    }));
    return _$3b75e5301c412e02$export$e772c8ff.apply(this, arguments);
}

var $d31dac682f2aad9b$exports = {};
$d31dac682f2aad9b$exports = JSON.parse("{\"search\":\"Search\",\"search_no_results_1\":\"Oh no!\",\"search_no_results_2\":\"That emoji couldn’t be found\",\"pick\":\"Pick an emoji…\",\"add_custom\":\"Add custom emoji\",\"categories\":{\"activity\":\"Activity\",\"custom\":\"Custom\",\"flags\":\"Flags\",\"foods\":\"Food & Drink\",\"frequent\":\"Frequently used\",\"nature\":\"Animals & Nature\",\"objects\":\"Objects\",\"people\":\"Smileys & People\",\"places\":\"Travel & Places\",\"search\":\"Search Results\",\"symbols\":\"Symbols\"},\"skins\":{\"1\":\"Default\",\"2\":\"Light\",\"3\":\"Medium-Light\",\"4\":\"Medium\",\"5\":\"Medium-Dark\",\"6\":\"Dark\",\"choose\":\"Choose default skin tone\"}}");

function $d1c485ce7bbdb20f$var$set(key, value) {
    try {
        window.localStorage["emoji-mart.".concat(key)] = JSON.stringify(value);
    } catch (error) {}
}

function $d1c485ce7bbdb20f$var$get(key) {
    try {
        var value = window.localStorage["emoji-mart.".concat(key)];
        if (value) return JSON.parse(value);
    } catch (error) {}
}

var $d1c485ce7bbdb20f$export$2e2bcd8739ae039 = {
    set: $d1c485ce7bbdb20f$var$set,
    get: $d1c485ce7bbdb20f$var$get
};
/**
 * @var {Object} cache
 */

var $3017358c77024766$var$cache = new Map();
/**
 * Check if emoji is supported with cache
 *
 * @params {string} unicode
 * @returns {boolean}
 */

function $3017358c77024766$export$dae07ca4832dbdc4(unicode) {
    if ($3017358c77024766$var$cache.has(unicode)) return $3017358c77024766$var$cache.get(unicode);
    var supported = $3017358c77024766$var$isSupported(unicode);
    $3017358c77024766$var$cache.set(unicode, supported);
    return supported;
}
/**
 * Request to handle cache directly
 *
 * @params {Map} store
 */


function $3017358c77024766$export$1c6773f6f9a99e01(store) {
    $3017358c77024766$var$cache = store;
}
/**
 * Check if the two pixels parts are perfectly the sames
 *
 * @params {string} unicode
 * @returns {boolean}
 */


var $3017358c77024766$var$isSupported = function () {
    var ctx = null;

    try {
        ctx = document.createElement('canvas').getContext('2d');
    } catch (_a) {} // Not in browser env


    if (!ctx) return function () {
        return false;
    };
    var CANVAS_HEIGHT = 25;
    var CANVAS_WIDTH = 20;
    var textSize = Math.floor(CANVAS_HEIGHT / 2); // Initialize convas context

    ctx.font = textSize + 'px Arial, Sans-Serif';
    ctx.textBaseline = 'top';
    ctx.canvas.width = CANVAS_WIDTH * 2;
    ctx.canvas.height = CANVAS_HEIGHT;
    return function (unicode) {
        ctx.clearRect(0, 0, CANVAS_WIDTH * 2, CANVAS_HEIGHT); // Draw in red on the left

        ctx.fillStyle = '#FF0000';
        ctx.fillText(unicode, 0, 22); // Draw in blue on right

        ctx.fillStyle = '#0000FF';
        ctx.fillText(unicode, CANVAS_WIDTH, 22);
        var a = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT).data;
        var count = a.length;
        var i = 0; // Search the first visible pixel

        for (; i < count && !a[i + 3]; i += 4) {
            ;
        } // No visible pixel


        if (i >= count) return false; // Emoji has immutable color, so we check the color of the emoji in two different colors
        // the result show be the same.

        var x = CANVAS_WIDTH + i / 4 % CANVAS_WIDTH;
        var y = Math.floor(i / 4 / CANVAS_WIDTH);
        var b = ctx.getImageData(x, y, 1, 1).data;
        if (a[i] !== b[0] || a[i + 2] !== b[2]) return false; // Some emojis are a contraction of different ones, so if it's not
        // supported, it will show multiple characters

        if (ctx.measureText(unicode).width >= CANVAS_WIDTH) return false; // Supported

        return true;
    };
}();

var $bae69aa06de56369$var$VERSIONS = [{
    v: 14,
    emoji: '🫠'
}, {
    v: 13.1,
    emoji: '😶‍🌫️'
}, {
    v: 13,
    emoji: '🥸'
}, {
    v: 12.1,
    emoji: '🧑‍🦰'
}, {
    v: 12,
    emoji: '🥱'
}, {
    v: 11,
    emoji: '🥰'
}, {
    v: 5,
    emoji: '🤩'
}, {
    v: 4,
    emoji: '👱‍♀️'
}, {
    v: 3,
    emoji: '🤣'
}, {
    v: 2,
    emoji: '👋🏻'
}, {
    v: 1,
    emoji: '🙃'
}];

function $bae69aa06de56369$var$latestVersion() {
    var _iterator = _createForOfIteratorHelper($bae69aa06de56369$var$VERSIONS),
        _step;

    try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                v = _step$value.v,
                emoji = _step$value.emoji;
            if ($3017358c77024766$export$dae07ca4832dbdc4(emoji)) return v;
        }
    } catch (err) {
        _iterator.e(err);
    } finally {
        _iterator.f();
    }
}

function $bae69aa06de56369$var$noCountryFlags() {
    if ($3017358c77024766$export$dae07ca4832dbdc4('🇨🇦')) return false;
    return true;
}

var $bae69aa06de56369$export$2e2bcd8739ae039 = {
    latestVersion: $bae69aa06de56369$var$latestVersion,
    noCountryFlags: $bae69aa06de56369$var$noCountryFlags
};
var $2e94d13d43a3b87d$var$DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart'];
var $2e94d13d43a3b87d$var$Index = null;

function $2e94d13d43a3b87d$var$add(emoji) {
    $2e94d13d43a3b87d$var$Index || ($2e94d13d43a3b87d$var$Index = $d1c485ce7bbdb20f$export$2e2bcd8739ae039.get('frequently') || {});
    var emojiId = emoji.id || emoji;
    if (!emojiId) return;
    $2e94d13d43a3b87d$var$Index[emojiId] || ($2e94d13d43a3b87d$var$Index[emojiId] = 0);
    $2e94d13d43a3b87d$var$Index[emojiId] += 1;
    $d1c485ce7bbdb20f$export$2e2bcd8739ae039.set('last', emojiId);
    $d1c485ce7bbdb20f$export$2e2bcd8739ae039.set('frequently', $2e94d13d43a3b87d$var$Index);
}

function $2e94d13d43a3b87d$var$get(_ref) {
    var maxFrequentRows = _ref.maxFrequentRows,
        perLine = _ref.perLine;
    $2e94d13d43a3b87d$var$Index || ($2e94d13d43a3b87d$var$Index = $d1c485ce7bbdb20f$export$2e2bcd8739ae039.get('frequently'));
    var emojiIds = [];

    if (!$2e94d13d43a3b87d$var$Index) {
        $2e94d13d43a3b87d$var$Index = {};

        for (var i in $2e94d13d43a3b87d$var$DEFAULTS.slice(0, perLine)) {
            var emojiId = $2e94d13d43a3b87d$var$DEFAULTS[i];
            $2e94d13d43a3b87d$var$Index[emojiId] = perLine - i;
            emojiIds.push(emojiId);
        }

        return emojiIds;
    }

    var max = maxFrequentRows * perLine;
    var last = $d1c485ce7bbdb20f$export$2e2bcd8739ae039.get('last');

    for (var _emojiId in $2e94d13d43a3b87d$var$Index) {
        emojiIds.push(_emojiId);
    }

    emojiIds.sort(function (a, b) {
        var aScore = $2e94d13d43a3b87d$var$Index[b];
        var bScore = $2e94d13d43a3b87d$var$Index[a];
        if (aScore == bScore) return a.localeCompare(b);
        return aScore - bScore;
    });

    if (emojiIds.length > max) {
        var removedIds = emojiIds.slice(max);
        emojiIds = emojiIds.slice(0, max);

        var _iterator2 = _createForOfIteratorHelper(removedIds),
            _step2;

        try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var removedId = _step2.value;
                if (removedId == last) continue;
                delete $2e94d13d43a3b87d$var$Index[removedId];
            }
        } catch (err) {
            _iterator2.e(err);
        } finally {
            _iterator2.f();
        }

        if (last && emojiIds.indexOf(last) == -1) {
            delete $2e94d13d43a3b87d$var$Index[emojiIds[emojiIds.length - 1]];
            emojiIds.splice(-1, 1, last);
        }

        $d1c485ce7bbdb20f$export$2e2bcd8739ae039.set('frequently', $2e94d13d43a3b87d$var$Index);
    }

    return emojiIds;
}

var $2e94d13d43a3b87d$export$2e2bcd8739ae039 = {
    add: $2e94d13d43a3b87d$var$add,
    get: $2e94d13d43a3b87d$var$get
};
exports.FrequentlyUsed = $2e94d13d43a3b87d$export$2e2bcd8739ae039;
var $e43013e6209d8d65$var$SHORTCODES_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;

function $e43013e6209d8d65$var$get(emojiId) {
    if (emojiId.id) return emojiId;
    return $205291deb9107ba0$export$2d0294657ab35f1b.emojis[emojiId] || $205291deb9107ba0$export$2d0294657ab35f1b.emojis[$205291deb9107ba0$export$2d0294657ab35f1b.aliases[emojiId]] || $205291deb9107ba0$export$2d0294657ab35f1b.emojis[$205291deb9107ba0$export$2d0294657ab35f1b.natives[emojiId]];
}

var $e43013e6209d8d65$var$Pool = null;

function $e43013e6209d8d65$var$search(_x) {
    return _$e43013e6209d8d65$var$search.apply(this, arguments);
}

function _$e43013e6209d8d65$var$search() {
    _$e43013e6209d8d65$var$search = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
        var _ref12,
            maxResults,
            values,
            pool,
            results,
            scores,
            _iterator12,
            _step12,
            value1,
            _iterator13,
            _step13,
            emoji,
            score,
            _args6 = arguments;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _ref12 = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}, maxResults = _ref12.maxResults;

                        if (!(!value || !value.trim().length)) {
                            _context6.next = 3;
                            break;
                        }

                        return _context6.abrupt("return", null);

                    case 3:
                        maxResults || (maxResults = 90);
                        _context6.next = 6;
                        return $205291deb9107ba0$export$2cd8252107eb640b();

                    case 6:
                        values = value.toLowerCase().replace(/(\w)-/, '$1 ').split(/[\s|,]+/).filter(function (word, i, words) {
                            return word.trim() && words.indexOf(word) == i;
                        });

                        if (values.length) {
                            _context6.next = 9;
                            break;
                        }

                        return _context6.abrupt("return");

                    case 9:
                        pool = $e43013e6209d8d65$var$Pool || ($e43013e6209d8d65$var$Pool = Object.values($205291deb9107ba0$export$2d0294657ab35f1b.emojis));
                        _iterator12 = _createForOfIteratorHelper(values);
                        _context6.prev = 11;

                        _iterator12.s();

                    case 13:
                        if ((_step12 = _iterator12.n()).done) {
                            _context6.next = 45;
                            break;
                        }

                        value1 = _step12.value;

                        if (pool.length) {
                            _context6.next = 17;
                            break;
                        }

                        return _context6.abrupt("break", 45);

                    case 17:
                        results = [];
                        scores = {};
                        _iterator13 = _createForOfIteratorHelper(pool);
                        _context6.prev = 20;

                        _iterator13.s();

                    case 22:
                        if ((_step13 = _iterator13.n()).done) {
                            _context6.next = 34;
                            break;
                        }

                        emoji = _step13.value;

                        if (emoji.search) {
                            _context6.next = 26;
                            break;
                        }

                        return _context6.abrupt("continue", 32);

                    case 26:
                        score = emoji.search.indexOf(",".concat(value1));

                        if (!(score == -1)) {
                            _context6.next = 29;
                            break;
                        }

                        return _context6.abrupt("continue", 32);

                    case 29:
                        results.push(emoji);
                        scores[emoji.id] || (scores[emoji.id] = 0);
                        scores[emoji.id] += emoji.id == value1 ? 0 : score + 1;

                    case 32:
                        _context6.next = 22;
                        break;

                    case 34:
                        _context6.next = 39;
                        break;

                    case 36:
                        _context6.prev = 36;
                        _context6.t0 = _context6["catch"](20);

                        _iterator13.e(_context6.t0);

                    case 39:
                        _context6.prev = 39;

                        _iterator13.f();

                        return _context6.finish(39);

                    case 42:
                        pool = results;

                    case 43:
                        _context6.next = 13;
                        break;

                    case 45:
                        _context6.next = 50;
                        break;

                    case 47:
                        _context6.prev = 47;
                        _context6.t1 = _context6["catch"](11);

                        _iterator12.e(_context6.t1);

                    case 50:
                        _context6.prev = 50;

                        _iterator12.f();

                        return _context6.finish(50);

                    case 53:
                        if (!(results.length < 2)) {
                            _context6.next = 55;
                            break;
                        }

                        return _context6.abrupt("return", results);

                    case 55:
                        results.sort(function (a, b) {
                            var aScore = scores[a.id];
                            var bScore = scores[b.id];
                            if (aScore == bScore) return a.id.localeCompare(b.id);
                            return aScore - bScore;
                        });
                        if (results.length > maxResults) results = results.slice(0, maxResults);
                        return _context6.abrupt("return", results);

                    case 58:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, null, [[11, 47, 50, 53], [20, 36, 39, 42]]);
    }));
    return _$e43013e6209d8d65$var$search.apply(this, arguments);
}

var $e43013e6209d8d65$export$2e2bcd8739ae039 = {
    search: $e43013e6209d8d65$var$search,
    get: $e43013e6209d8d65$var$get,
    SHORTCODES_REGEX: $e43013e6209d8d65$var$SHORTCODES_REGEX
};
exports.SearchIndex = $e43013e6209d8d65$export$2e2bcd8739ae039;
var $793465abcb382f5b$export$bcb25aa587e9cb13 = ['checkered_flag', 'crossed_flags', 'pirate_flag', 'rainbow-flag', 'transgender_flag', 'triangular_flag_on_post', 'waving_black_flag', 'waving_white_flag'];
var $205291deb9107ba0$export$dbe3113d60765c1a = null;
exports.I18n = $205291deb9107ba0$export$dbe3113d60765c1a;
var $205291deb9107ba0$export$2d0294657ab35f1b = null;
exports.Data = $205291deb9107ba0$export$2d0294657ab35f1b;
var $205291deb9107ba0$var$DEFAULT_PROPS = {
    autoFocus: {
        value: false
    },
    emojiButtonColors: {
        value: null
    },
    emojiButtonRadius: {
        value: '100%'
    },
    emojiButtonSize: {
        value: 36
    },
    emojiSize: {
        value: 24
    },
    emojiVersion: {
        value: 14,
        choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14]
    },
    icons: {
        value: 'auto',
        choices: ['auto', 'outline', 'solid']
    },
    locale: {
        value: 'en',
        choices: ['en', 'de', 'fr', 'it', 'pl', 'pt', 'ru', 'zh']
    },
    maxFrequentRows: {
        value: 4
    },
    navPosition: {
        value: 'top',
        choices: ['top', 'bottom', 'none']
    },
    noCountryFlags: {
        value: false
    },
    noResultsEmoji: {
        value: null
    },
    perLine: {
        value: 9
    },
    previewEmoji: {
        value: null
    },
    previewPosition: {
        value: 'bottom',
        choices: ['top', 'bottom', 'none']
    },
    searchPosition: {
        value: 'sticky',
        choices: ['sticky', 'static', 'none']
    },
    set: {
        value: 'native',
        choices: ['native', 'apple', 'facebook', 'google', 'twitter']
    },
    skin: {
        value: 1,
        choices: [1, 2, 3, 4, 5, 6]
    },
    skinTonePosition: {
        value: 'preview',
        choices: ['preview', 'search', 'none']
    },
    stickySearch: {
        deprecated: true,
        value: true
    },
    theme: {
        value: 'auto',
        choices: ['auto', 'light', 'dark']
    }
};

function $205291deb9107ba0$var$fetchJSON(_x2) {
    return _$205291deb9107ba0$var$fetchJSON.apply(this, arguments);
}

function _$205291deb9107ba0$var$fetchJSON() {
    _$205291deb9107ba0$var$fetchJSON = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(src) {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return fetch(src);

                    case 2:
                        response = _context7.sent;
                        _context7.next = 5;
                        return response.json();

                    case 5:
                        return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7);
    }));
    return _$205291deb9107ba0$var$fetchJSON.apply(this, arguments);
}

var $205291deb9107ba0$var$promise = null;
var $205291deb9107ba0$var$initiated = false;
var $205291deb9107ba0$var$initCallback = null;

function $205291deb9107ba0$export$2cd8252107eb640b(options) {
    $205291deb9107ba0$var$promise || ($205291deb9107ba0$var$promise = new Promise(function (resolve) {
        $205291deb9107ba0$var$initCallback = resolve;
    }));

    if (options && !$205291deb9107ba0$var$initiated) {
        $205291deb9107ba0$var$initiated = true;
        $205291deb9107ba0$var$_init(options);
    }

    return $205291deb9107ba0$var$promise;
}

function $205291deb9107ba0$var$_init(_x3, _x4) {
    return _$205291deb9107ba0$var$_init.apply(this, arguments);
}

function _$205291deb9107ba0$var$_init() {
    _$205291deb9107ba0$var$_init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(props, element) {
        var data, i18n, pickerProps, emojiVersion, set, locale, emojis, i, category, prevCategory, ids, _iterator14, _step14, emoji, latestVersionSupport, noCountryFlags, _iterator15, _step15, _loop, alias, emojiId, _emoji;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        data = props.data, i18n = props.i18n;
                        pickerProps = $205291deb9107ba0$var$getProps(props, element);
                        emojiVersion = pickerProps.emojiVersion, set = pickerProps.set, locale = pickerProps.locale;

                        if (!(typeof data === 'function')) {
                            _context8.next = 9;
                            break;
                        }

                        _context8.next = 6;
                        return data();

                    case 6:
                        _context8.t1 = _context8.sent;
                        _context8.next = 10;
                        break;

                    case 9:
                        _context8.t1 = data;

                    case 10:
                        _context8.t0 = _context8.t1;

                        if (_context8.t0) {
                            _context8.next = 15;
                            break;
                        }

                        _context8.next = 14;
                        return $205291deb9107ba0$var$fetchJSON("https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/".concat(emojiVersion, "/").concat(set, ".json"));

                    case 14:
                        _context8.t0 = _context8.sent;

                    case 15:
                        exports.Data = $205291deb9107ba0$export$2d0294657ab35f1b = _context8.t0;

                        if (!(typeof i18n === 'function')) {
                            _context8.next = 22;
                            break;
                        }

                        _context8.next = 19;
                        return i18n();

                    case 19:
                        _context8.t3 = _context8.sent;
                        _context8.next = 23;
                        break;

                    case 22:
                        _context8.t3 = i18n;

                    case 23:
                        _context8.t2 = _context8.t3;

                        if (_context8.t2) {
                            _context8.next = 33;
                            break;
                        }

                        if (!(locale == 'en')) {
                            _context8.next = 29;
                            break;
                        }

                        _context8.t4 = /*@__PURE__*/$parcel$interopDefault($d31dac682f2aad9b$exports);
                        _context8.next = 32;
                        break;

                    case 29:
                        _context8.next = 31;
                        return $205291deb9107ba0$var$fetchJSON("https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/".concat(locale, ".json"));

                    case 31:
                        _context8.t4 = _context8.sent;

                    case 32:
                        _context8.t2 = _context8.t4;

                    case 33:
                        exports.I18n = $205291deb9107ba0$export$dbe3113d60765c1a = _context8.t2;

                        if (pickerProps.maxFrequentRows) {
                            emojis = $2e94d13d43a3b87d$export$2e2bcd8739ae039.get(pickerProps);
                            if (emojis.length) $205291deb9107ba0$export$2d0294657ab35f1b.categories.unshift({
                                id: 'frequent',
                                emojis: emojis
                            });
                        }

                        if (!props.custom) {
                            _context8.next = 71;
                            break;
                        }

                        _context8.t5 = _regeneratorRuntime().keys(props.custom);

                    case 37:
                        if ((_context8.t6 = _context8.t5()).done) {
                            _context8.next = 71;
                            break;
                        }

                        i = _context8.t6.value;
                        i = parseInt(i);
                        category = props.custom[i];
                        prevCategory = props.custom[i - 1];

                        if (!(!category.emojis || !category.emojis.length)) {
                            _context8.next = 44;
                            break;
                        }

                        return _context8.abrupt("continue", 37);

                    case 44:
                        category.id = "custom_".concat(i + 1);
                        category.name || (category.name = $205291deb9107ba0$export$dbe3113d60765c1a.categories.custom);
                        if (prevCategory && !category.icon) category.target = prevCategory.target || prevCategory;
                        $205291deb9107ba0$export$2d0294657ab35f1b.categories.push(category);
                        ids = [];
                        _iterator14 = _createForOfIteratorHelper(category.emojis);
                        _context8.prev = 50;

                        _iterator14.s();

                    case 52:
                        if ((_step14 = _iterator14.n()).done) {
                            _context8.next = 60;
                            break;
                        }

                        emoji = _step14.value;

                        if (!$205291deb9107ba0$export$2d0294657ab35f1b.emojis[emoji.id]) {
                            _context8.next = 56;
                            break;
                        }

                        return _context8.abrupt("continue", 58);

                    case 56:
                        $205291deb9107ba0$export$2d0294657ab35f1b.emojis[emoji.id] = emoji;
                        ids.push(emoji.id);

                    case 58:
                        _context8.next = 52;
                        break;

                    case 60:
                        _context8.next = 65;
                        break;

                    case 62:
                        _context8.prev = 62;
                        _context8.t7 = _context8["catch"](50);

                        _iterator14.e(_context8.t7);

                    case 65:
                        _context8.prev = 65;

                        _iterator14.f();

                        return _context8.finish(65);

                    case 68:
                        category.emojis = ids;
                        _context8.next = 37;
                        break;

                    case 71:
                        if (props.categories) $205291deb9107ba0$export$2d0294657ab35f1b.categories = $205291deb9107ba0$export$2d0294657ab35f1b.categories.filter(function (c) {
                            return props.categories.indexOf(c.id) != -1;
                        }).sort(function (c1, c2) {
                            var i1 = props.categories.indexOf(c1.id);
                            var i2 = props.categories.indexOf(c2.id);
                            return i1 - i2;
                        });
                        latestVersionSupport = null;
                        noCountryFlags = null;

                        if (set == 'native') {
                            latestVersionSupport = $bae69aa06de56369$export$2e2bcd8739ae039.latestVersion();
                            noCountryFlags = pickerProps.noCountryFlags || $bae69aa06de56369$export$2e2bcd8739ae039.noCountryFlags();
                        }

                        $205291deb9107ba0$export$2d0294657ab35f1b.emoticons = {};
                        $205291deb9107ba0$export$2d0294657ab35f1b.natives = {};
                        _iterator15 = _createForOfIteratorHelper($205291deb9107ba0$export$2d0294657ab35f1b.categories);

                        try {
                            _loop = function _loop() {
                                var category = _step15.value;
                                var i = category.emojis.length;
                                var categoryIcons = props.categoryIcons;

                                if (categoryIcons) {
                                    var icon = categoryIcons[category.id];
                                    if (icon && !category.icon) category.icon = icon;
                                }

                                while (i--) {
                                    var _emoji2 = $205291deb9107ba0$export$2d0294657ab35f1b.emojis[category.emojis[i]];

                                    var ignore = function ignore() {
                                        category.emojis.splice(i, 1);
                                    };

                                    if (!_emoji2) {
                                        ignore();
                                        continue;
                                    }

                                    if (latestVersionSupport && _emoji2.version > latestVersionSupport) {
                                        ignore();
                                        continue;
                                    }

                                    if (noCountryFlags && category.id == 'flags') {
                                        if (!$793465abcb382f5b$export$bcb25aa587e9cb13.includes(_emoji2.id)) {
                                            ignore();
                                            continue;
                                        }
                                    }

                                    _emoji2.search = ',' + [[_emoji2.id, false], [_emoji2.name, true], [_emoji2.keywords, false], [_emoji2.emoticons, false]].map(function (_ref13) {
                                        var _ref14 = _slicedToArray(_ref13, 2),
                                            strings = _ref14[0],
                                            split = _ref14[1];

                                        if (!strings) return;
                                        return (Array.isArray(strings) ? strings : [strings]).map(function (string) {
                                            return (split ? string.split(/[-|_|\s]+/) : [string]).map(function (s) {
                                                return s.toLowerCase();
                                            });
                                        }).flat();
                                    }).flat().filter(function (a) {
                                        return a && a.trim();
                                    }).join(',');

                                    if (_emoji2.emoticons) {
                                        var _iterator16 = _createForOfIteratorHelper(_emoji2.emoticons),
                                            _step16;

                                        try {
                                            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                                                var emoticon = _step16.value;
                                                if ($205291deb9107ba0$export$2d0294657ab35f1b.emoticons[emoticon]) continue;
                                                $205291deb9107ba0$export$2d0294657ab35f1b.emoticons[emoticon] = _emoji2.id;
                                            }
                                        } catch (err) {
                                            _iterator16.e(err);
                                        } finally {
                                            _iterator16.f();
                                        }
                                    }

                                    var skinIndex = 0;

                                    var _iterator17 = _createForOfIteratorHelper(_emoji2.skins),
                                        _step17;

                                    try {
                                        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                                            var skin = _step17.value;
                                            if (!skin) continue;
                                            skinIndex++;
                                            var native = skin.native;

                                            if (native) {
                                                $205291deb9107ba0$export$2d0294657ab35f1b.natives[native] = _emoji2.id;
                                                _emoji2.search += ",".concat(native);
                                            }

                                            var skinShortcodes = skinIndex == 1 ? '' : ":skin-tone-".concat(skinIndex, ":");
                                            skin.shortcodes = ":".concat(_emoji2.id, ":").concat(skinShortcodes);
                                        }
                                    } catch (err) {
                                        _iterator17.e(err);
                                    } finally {
                                        _iterator17.f();
                                    }
                                }
                            };

                            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                                _loop();
                            }
                        } catch (err) {
                            _iterator15.e(err);
                        } finally {
                            _iterator15.f();
                        }

                        _context8.t8 = _regeneratorRuntime().keys($205291deb9107ba0$export$2d0294657ab35f1b.aliases);

                    case 80:
                        if ((_context8.t9 = _context8.t8()).done) {
                            _context8.next = 90;
                            break;
                        }

                        alias = _context8.t9.value;
                        emojiId = $205291deb9107ba0$export$2d0294657ab35f1b.aliases[alias];
                        _emoji = $205291deb9107ba0$export$2d0294657ab35f1b.emojis[emojiId];

                        if (_emoji) {
                            _context8.next = 86;
                            break;
                        }

                        return _context8.abrupt("continue", 80);

                    case 86:
                        _emoji.aliases || (_emoji.aliases = []);

                        _emoji.aliases.push(alias);

                        _context8.next = 80;
                        break;

                    case 90:
                        $205291deb9107ba0$var$initCallback(pickerProps);

                    case 91:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, null, [[50, 62, 65, 68]]);
    }));
    return _$205291deb9107ba0$var$_init.apply(this, arguments);
}

function $205291deb9107ba0$var$getProps(props, element) {
    props || (props = {});

    function get(propName) {
        var defaults = $205291deb9107ba0$var$DEFAULT_PROPS[propName];
        var value = element && element.getAttribute(propName) || props[propName];

        if (value != null && defaults.value && _typeof(defaults.value) != _typeof(value)) {
            if (typeof defaults.value == 'boolean') value = value == 'false' ? false : true;else value = defaults.value.constructor(value);
        }

        if (value == null || defaults.choices && defaults.choices.indexOf(value) == -1) value = defaults.value;
        return value;
    }

    var _props = {};

    for (var k in $205291deb9107ba0$var$DEFAULT_PROPS) {
        _props[k] = get(k);
    }

    return _props;
}

var $67f44820177a3d2c$var$categories = {
    activity: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
            })
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
            })
        })
    },
    custom: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
            d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
    }),
    flags: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
            })
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
            })
        })
    },
    foods: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
            })
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
            })
        })
    },
    frequent: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
            })]
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
            })
        })
    },
    nature: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
            })]
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 576 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
            })
        })
    },
    objects: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
            })]
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
            })
        })
    },
    people: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
            })]
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
            })
        })
    },
    places: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
            })]
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
            })
        })
    },
    symbols: {
        outline: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
            })
        }),
        solid: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
                d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
            })
        })
    }
};
var $67f44820177a3d2c$var$search = {
    loupe: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
            d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
    }),
    delete: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
    })
};
var $67f44820177a3d2c$export$2e2bcd8739ae039 = {
    categories: $67f44820177a3d2c$var$categories,
    search: $67f44820177a3d2c$var$search
};

function $39dd3be3baae5f42$export$2e2bcd8739ae039(props) {
    var id = props.id,
        skin = props.skin,
        shortcodes = props.shortcodes,
        emoji = props.emoji;

    if (!emoji && !id && shortcodes) {
        var matches = shortcodes.match($e43013e6209d8d65$export$2e2bcd8739ae039.SHORTCODES_REGEX);

        if (matches) {
            id = matches[1];
            if (matches[2]) skin = matches[2];
        }
    }

    emoji || (emoji = $e43013e6209d8d65$export$2e2bcd8739ae039.get(id));
    if (!emoji) return props.fallback;
    var emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
    var imageSrc = emojiSkin.src || (props.set != 'native' && !props.spritesheet ? typeof props.getImageURL === 'function' ? props.getImageURL(props.set, emojiSkin.unified) : "https://cdn.jsdelivr.net/npm/emoji-datasource-".concat(props.set, "@14.0.0/img/").concat(props.set, "/64/").concat(emojiSkin.unified, ".png") : undefined);
    var spritesheetSrc = typeof props.getSpritesheetURL === 'function' ? props.getSpritesheetURL(props.set) : "https://cdn.jsdelivr.net/npm/emoji-datasource-".concat(props.set, "@14.0.0/img/").concat(props.set, "/sheets-256/64.png");
    return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
        class: "emoji-mart-emoji",
        "data-emoji-set": props.set,
        children: imageSrc ? /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("img", {
            style: {
                height: props.size || '1em',
                width: 'auto',
                display: 'inline-block',
                position: 'relative',
                top: '.1em'
            },
            alt: emojiSkin.native || emojiSkin.shortcodes,
            src: imageSrc
        }) : props.set == 'native' ? /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
            style: {
                fontSize: props.size,
                fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
            },
            children: emojiSkin.native
        }) : /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
            style: {
                display: 'block',
                width: props.size,
                height: props.size,
                backgroundImage: "url(".concat(spritesheetSrc, ")"),
                backgroundSize: "".concat(100 * $205291deb9107ba0$export$2d0294657ab35f1b.sheet.cols, "% ").concat(100 * $205291deb9107ba0$export$2d0294657ab35f1b.sheet.rows, "%"),
                backgroundPosition: "".concat(100 / ($205291deb9107ba0$export$2d0294657ab35f1b.sheet.cols - 1) * emojiSkin.x, "% ").concat(100 / ($205291deb9107ba0$export$2d0294657ab35f1b.sheet.rows - 1) * emojiSkin.y, "%")
            }
        })
    });
}

var $1cb32edf1a7282b8$export$2e2bcd8739ae039 = /*#__PURE__*/function (_window$HTMLElement) {
    _inherits($1cb32edf1a7282b8$export$2e2bcd8739ae039, _window$HTMLElement);

    var _super = _createSuper($1cb32edf1a7282b8$export$2e2bcd8739ae039);

    function $1cb32edf1a7282b8$export$2e2bcd8739ae039() {
        var _this;

        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, $1cb32edf1a7282b8$export$2e2bcd8739ae039);

        _this = _super.call(this);
        _this.props = props;

        if (props.parent || props.ref) {
            var parent = props.parent || props.ref && props.ref.current;
            if (parent) parent.appendChild(_assertThisInitialized(_this));
        }

        return _this;
    }

    return _createClass($1cb32edf1a7282b8$export$2e2bcd8739ae039);
}(window.HTMLElement);

var $f09270c1f574f0a4$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$1cb32edf1a7282b8$ex) {
    _inherits($f09270c1f574f0a4$export$2e2bcd8739ae039, _$1cb32edf1a7282b8$ex);

    var _super2 = _createSuper($f09270c1f574f0a4$export$2e2bcd8739ae039);

    function $f09270c1f574f0a4$export$2e2bcd8739ae039(props) {
        var _this2;

        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            styles = _ref2.styles;

        _classCallCheck(this, $f09270c1f574f0a4$export$2e2bcd8739ae039);

        _this2 = _super2.call(this, props);

        _this2.setShadow();

        _this2.injectStyles(styles);

        return _this2;
    }

    _createClass($f09270c1f574f0a4$export$2e2bcd8739ae039, [{
        key: "setShadow",
        value: function setShadow() {
            this.attachShadow({
                mode: 'open'
            });
        }
    }, {
        key: "injectStyles",
        value: function injectStyles(styles) {
            if (!styles) return;
            var style = document.createElement('style');
            style.textContent = styles;
            this.shadowRoot.insertBefore(style, this.shadowRoot.firstChild);
        }
    }]);

    return $f09270c1f574f0a4$export$2e2bcd8739ae039;
}($1cb32edf1a7282b8$export$2e2bcd8739ae039);

var $8b28a44b07620e42$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$1cb32edf1a7282b8$ex2) {
    _inherits($8b28a44b07620e42$export$2e2bcd8739ae039, _$1cb32edf1a7282b8$ex2);

    var _super3 = _createSuper($8b28a44b07620e42$export$2e2bcd8739ae039);

    function $8b28a44b07620e42$export$2e2bcd8739ae039() {
        _classCallCheck(this, $8b28a44b07620e42$export$2e2bcd8739ae039);

        return _super3.apply(this, arguments);
    }

    _createClass($8b28a44b07620e42$export$2e2bcd8739ae039, [{
        key: "connectedCallback",
        value: function () {
            var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var pickerProps, native, emoji, props;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return $205291deb9107ba0$export$2cd8252107eb640b();

                            case 2:
                                pickerProps = _context.sent;
                                native = this.getAttribute('native');
                                emoji = null;
                                if (native) emoji = $e43013e6209d8d65$export$2e2bcd8739ae039.get(native);
                                props = _objectSpread(_objectSpread({}, pickerProps), {}, {
                                    emoji: emoji,
                                    id: this.getAttribute('id'),
                                    set: this.getAttribute('set') || pickerProps.set,
                                    size: this.getAttribute('size'),
                                    fallback: this.getAttribute('fallback'),
                                    shortcodes: this.getAttribute('shortcodes')
                                });
                                $11f6c40cee63613b$export$b3890eb0ae9dca99( /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($39dd3be3baae5f42$export$2e2bcd8739ae039, _objectSpread({}, props)), this);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function connectedCallback() {
                return _connectedCallback.apply(this, arguments);
            }

            return connectedCallback;
        }()
    }]);

    return $8b28a44b07620e42$export$2e2bcd8739ae039;
}($1cb32edf1a7282b8$export$2e2bcd8739ae039);

exports.Emoji = $8b28a44b07620e42$export$2e2bcd8739ae039;
if (!customElements.get('em-emoji')) customElements.define('em-emoji', $8b28a44b07620e42$export$2e2bcd8739ae039);
var $4ee3bf5a04a4dd08$var$t,
    $4ee3bf5a04a4dd08$var$u,
    $4ee3bf5a04a4dd08$var$r,
    $4ee3bf5a04a4dd08$var$o = 0,
    $4ee3bf5a04a4dd08$var$i = [],
    $4ee3bf5a04a4dd08$var$c = $11f6c40cee63613b$export$41c562ebe57d11e2.__b,
    $4ee3bf5a04a4dd08$var$f = $11f6c40cee63613b$export$41c562ebe57d11e2.__r,
    $4ee3bf5a04a4dd08$var$e = $11f6c40cee63613b$export$41c562ebe57d11e2.diffed,
    $4ee3bf5a04a4dd08$var$a = $11f6c40cee63613b$export$41c562ebe57d11e2.__c,
    $4ee3bf5a04a4dd08$var$v = $11f6c40cee63613b$export$41c562ebe57d11e2.unmount;

function $4ee3bf5a04a4dd08$var$m(t, r) {
    $11f6c40cee63613b$export$41c562ebe57d11e2.__h && $11f6c40cee63613b$export$41c562ebe57d11e2.__h($4ee3bf5a04a4dd08$var$u, t, $4ee3bf5a04a4dd08$var$o || r), $4ee3bf5a04a4dd08$var$o = 0;
    var i = $4ee3bf5a04a4dd08$var$u.__H || ($4ee3bf5a04a4dd08$var$u.__H = {
        __: [],
        __h: []
    });
    return t >= i.__.length && i.__.push({}), i.__[t];
}

function $4ee3bf5a04a4dd08$export$60241385465d0a34(n) {
    return $4ee3bf5a04a4dd08$var$o = 1, $4ee3bf5a04a4dd08$export$13e3392192263954($4ee3bf5a04a4dd08$var$w, n);
}

function $4ee3bf5a04a4dd08$export$13e3392192263954(n1, r, o) {
    var i = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 2);
    return i.t = n1, i.__c || (i.__ = [o ? o(r) : $4ee3bf5a04a4dd08$var$w(void 0, r), function (n) {
        var t = i.t(i.__[0], n);
        i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
    }], i.__c = $4ee3bf5a04a4dd08$var$u), i.__;
}

function $4ee3bf5a04a4dd08$export$6d9c69b0de29b591(r, o) {
    var i = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 3);
    !$11f6c40cee63613b$export$41c562ebe57d11e2.__s && $4ee3bf5a04a4dd08$var$k(i.__H, o) && (i.__ = r, i.__H = o, $4ee3bf5a04a4dd08$var$u.__H.__h.push(i));
}

function $4ee3bf5a04a4dd08$export$e5c5a5f917a5871c(r, o) {
    var i = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 4);
    !$11f6c40cee63613b$export$41c562ebe57d11e2.__s && $4ee3bf5a04a4dd08$var$k(i.__H, o) && (i.__ = r, i.__H = o, $4ee3bf5a04a4dd08$var$u.__h.push(i));
}

function $4ee3bf5a04a4dd08$export$b8f5890fc79d6aca(n) {
    return $4ee3bf5a04a4dd08$var$o = 5, $4ee3bf5a04a4dd08$export$1538c33de8887b59(function () {
        return {
            current: n
        };
    }, []);
}

function $4ee3bf5a04a4dd08$export$d5a552a76deda3c2(n, t, u) {
    $4ee3bf5a04a4dd08$var$o = 6, $4ee3bf5a04a4dd08$export$e5c5a5f917a5871c(function () {
        "function" == typeof n ? n(t()) : n && (n.current = t());
    }, null == u ? u : u.concat(n));
}

function $4ee3bf5a04a4dd08$export$1538c33de8887b59(n, u) {
    var r = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 7);
    return $4ee3bf5a04a4dd08$var$k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function $4ee3bf5a04a4dd08$export$35808ee640e87ca7(n, t) {
    return $4ee3bf5a04a4dd08$var$o = 8, $4ee3bf5a04a4dd08$export$1538c33de8887b59(function () {
        return n;
    }, t);
}

function $4ee3bf5a04a4dd08$export$fae74005e78b1a27(n) {
    var r = $4ee3bf5a04a4dd08$var$u.context[n.__c],
        o = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 9);
    return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub($4ee3bf5a04a4dd08$var$u)), r.props.value) : n.__;
}

function $4ee3bf5a04a4dd08$export$dc8fbce3eb94dc1e(t, u) {
    $11f6c40cee63613b$export$41c562ebe57d11e2.useDebugValue && $11f6c40cee63613b$export$41c562ebe57d11e2.useDebugValue(u ? u(t) : t);
}

function $4ee3bf5a04a4dd08$export$c052f6604b7d51fe(n2) {
    var r = $4ee3bf5a04a4dd08$var$m($4ee3bf5a04a4dd08$var$t++, 10),
        o = $4ee3bf5a04a4dd08$export$60241385465d0a34();
    return r.__ = n2, $4ee3bf5a04a4dd08$var$u.componentDidCatch || ($4ee3bf5a04a4dd08$var$u.componentDidCatch = function (n) {
        r.__ && r.__(n), o[1](n);
    }), [o[0], function () {
        o[1](void 0);
    }];
}

function $4ee3bf5a04a4dd08$var$x() {
    var t1;

    for ($4ee3bf5a04a4dd08$var$i.sort(function (n, t) {
        return n.__v.__b - t.__v.__b;
    }); t1 = $4ee3bf5a04a4dd08$var$i.pop();) {
        if (t1.__P) try {
            t1.__H.__h.forEach($4ee3bf5a04a4dd08$var$g), t1.__H.__h.forEach($4ee3bf5a04a4dd08$var$j), t1.__H.__h = [];
        } catch (u) {
            t1.__H.__h = [], $11f6c40cee63613b$export$41c562ebe57d11e2.__e(u, t1.__v);
        }
    }
}

$11f6c40cee63613b$export$41c562ebe57d11e2.__b = function (n) {
    $4ee3bf5a04a4dd08$var$u = null, $4ee3bf5a04a4dd08$var$c && $4ee3bf5a04a4dd08$var$c(n);
}, $11f6c40cee63613b$export$41c562ebe57d11e2.__r = function (n) {
    $4ee3bf5a04a4dd08$var$f && $4ee3bf5a04a4dd08$var$f(n), $4ee3bf5a04a4dd08$var$t = 0;
    var r = ($4ee3bf5a04a4dd08$var$u = n.__c).__H;
    r && (r.__h.forEach($4ee3bf5a04a4dd08$var$g), r.__h.forEach($4ee3bf5a04a4dd08$var$j), r.__h = []);
}, $11f6c40cee63613b$export$41c562ebe57d11e2.diffed = function (t2) {
    $4ee3bf5a04a4dd08$var$e && $4ee3bf5a04a4dd08$var$e(t2);
    var o = t2.__c;
    o && o.__H && o.__H.__h.length && (1 !== $4ee3bf5a04a4dd08$var$i.push(o) && $4ee3bf5a04a4dd08$var$r === $11f6c40cee63613b$export$41c562ebe57d11e2.requestAnimationFrame || (($4ee3bf5a04a4dd08$var$r = $11f6c40cee63613b$export$41c562ebe57d11e2.requestAnimationFrame) || function (n) {
        var t,
            u = function u() {
                clearTimeout(r), $4ee3bf5a04a4dd08$var$b && cancelAnimationFrame(t), setTimeout(n);
            },
            r = setTimeout(u, 100);

        $4ee3bf5a04a4dd08$var$b && (t = requestAnimationFrame(u));
    })($4ee3bf5a04a4dd08$var$x)), $4ee3bf5a04a4dd08$var$u = null;
}, $11f6c40cee63613b$export$41c562ebe57d11e2.__c = function (t3, u) {
    u.some(function (t) {
        try {
            t.__h.forEach($4ee3bf5a04a4dd08$var$g), t.__h = t.__h.filter(function (n) {
                return !n.__ || $4ee3bf5a04a4dd08$var$j(n);
            });
        } catch (r) {
            u.some(function (n) {
                n.__h && (n.__h = []);
            }), u = [], $11f6c40cee63613b$export$41c562ebe57d11e2.__e(r, t.__v);
        }
    }), $4ee3bf5a04a4dd08$var$a && $4ee3bf5a04a4dd08$var$a(t3, u);
}, $11f6c40cee63613b$export$41c562ebe57d11e2.unmount = function (t) {
    $4ee3bf5a04a4dd08$var$v && $4ee3bf5a04a4dd08$var$v(t);
    var u,
        r = t.__c;
    r && r.__H && (r.__H.__.forEach(function (n) {
        try {
            $4ee3bf5a04a4dd08$var$g(n);
        } catch (n3) {
            u = n3;
        }
    }), u && $11f6c40cee63613b$export$41c562ebe57d11e2.__e(u, r.__v));
};
var $4ee3bf5a04a4dd08$var$b = "function" == typeof requestAnimationFrame;

function $4ee3bf5a04a4dd08$var$g(n) {
    var t = $4ee3bf5a04a4dd08$var$u,
        r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), $4ee3bf5a04a4dd08$var$u = t;
}

function $4ee3bf5a04a4dd08$var$j(n) {
    var t = $4ee3bf5a04a4dd08$var$u;
    n.__c = n.__(), $4ee3bf5a04a4dd08$var$u = t;
}

function $4ee3bf5a04a4dd08$var$k(n, t4) {
    return !n || n.length !== t4.length || t4.some(function (t, u) {
        return t !== n[u];
    });
}

function $4ee3bf5a04a4dd08$var$w(n, t) {
    return "function" == typeof t ? t(n) : t;
}

function $d58a583dee9ef39c$var$S(n, t) {
    for (var e in t) {
        n[e] = t[e];
    }

    return n;
}

function $d58a583dee9ef39c$var$C(n, t) {
    for (var e in n) {
        if ("__source" !== e && !(e in t)) return !0;
    }

    for (var r in t) {
        if ("__source" !== r && n[r] !== t[r]) return !0;
    }

    return !1;
}

function $d58a583dee9ef39c$export$221d75b3f55bb0bd(n) {
    this.props = n;
}

function $d58a583dee9ef39c$export$7c73462e0d25e514(n1, t1) {
    function e1(n) {
        var e = this.props.ref,
            r = e == n.ref;
        return !r && e && (e.call ? e(null) : e.current = null), t1 ? !t1(this.props, n) || !r : $d58a583dee9ef39c$var$C(this.props, n);
    }

    function r1(t) {
        return this.shouldComponentUpdate = e1, $11f6c40cee63613b$export$c8a8987d4410bf2d(n1, t);
    }

    return r1.displayName = "Memo(" + (n1.displayName || n1.name) + ")", r1.prototype.isReactComponent = !0, r1.__f = !0, r1;
}

($d58a583dee9ef39c$export$221d75b3f55bb0bd.prototype = new $11f6c40cee63613b$export$16fa2f45be04daa8()).isPureReactComponent = !0, $d58a583dee9ef39c$export$221d75b3f55bb0bd.prototype.shouldComponentUpdate = function (n, t) {
    return $d58a583dee9ef39c$var$C(this.props, n) || $d58a583dee9ef39c$var$C(this.state, t);
};
var $d58a583dee9ef39c$var$w = $11f6c40cee63613b$export$41c562ebe57d11e2.__b;

$11f6c40cee63613b$export$41c562ebe57d11e2.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), $d58a583dee9ef39c$var$w && $d58a583dee9ef39c$var$w(n);
};

var $d58a583dee9ef39c$var$R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function $d58a583dee9ef39c$export$257a8862b851cb5b(n) {
    function t2(t, e) {
        var r = $d58a583dee9ef39c$var$S({}, t);
        return delete r.ref, n(r, (e = t.ref || e) && ("object" != _typeof(e) || "current" in e) ? e : null);
    }

    return t2.$$typeof = $d58a583dee9ef39c$var$R, t2.render = t2, t2.prototype.isReactComponent = t2.__f = !0, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
}

var $d58a583dee9ef39c$var$N = function $d58a583dee9ef39c$var$N(n, t) {
        return null == n ? null : $11f6c40cee63613b$export$47e4c5b300681277($11f6c40cee63613b$export$47e4c5b300681277(n).map(t));
    },
    $d58a583dee9ef39c$export$dca3b0875bd9a954 = {
        map: $d58a583dee9ef39c$var$N,
        forEach: $d58a583dee9ef39c$var$N,
        count: function count(n) {
            return n ? $11f6c40cee63613b$export$47e4c5b300681277(n).length : 0;
        },
        only: function only(n) {
            var t = $11f6c40cee63613b$export$47e4c5b300681277(n);
            if (1 !== t.length) throw "Children.only";
            return t[0];
        },
        toArray: $11f6c40cee63613b$export$47e4c5b300681277
    },
    $d58a583dee9ef39c$var$A = $11f6c40cee63613b$export$41c562ebe57d11e2.__e;

$11f6c40cee63613b$export$41c562ebe57d11e2.__e = function (n, t, e) {
    if (n.then) {
        for (var r, u = t; u = u.__;) {
            if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
        }
    }

    $d58a583dee9ef39c$var$A(n, t, e);
};

var $d58a583dee9ef39c$var$O = $11f6c40cee63613b$export$41c562ebe57d11e2.unmount;

function $d58a583dee9ef39c$export$74bf444e3cd11ea5() {
    this.__u = 0, this.t = null, this.__b = null;
}

function $d58a583dee9ef39c$var$U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
}

function $d58a583dee9ef39c$export$488013bae63b21da(n2) {
    var t, e, r;

    function u1(u) {
        if (t || (t = n2()).then(function (n) {
            e = n.default || n;
        }, function (n) {
            r = n;
        }), r) throw r;
        if (!e) throw t;
        return $11f6c40cee63613b$export$c8a8987d4410bf2d(e, u);
    }

    return u1.displayName = "Lazy", u1.__f = !0, u1;
}

function $d58a583dee9ef39c$export$998bcd577473dd93() {
    this.u = null, this.o = null;
}

$11f6c40cee63613b$export$41c562ebe57d11e2.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), $d58a583dee9ef39c$var$O && $d58a583dee9ef39c$var$O(n);
}, ($d58a583dee9ef39c$export$74bf444e3cd11ea5.prototype = new $11f6c40cee63613b$export$16fa2f45be04daa8()).__c = function (n3, t3) {
    var e2 = t3.__c,
        r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);

    var u = $d58a583dee9ef39c$var$U(r2.__v),
        o = !1,
        i = function i() {
            o || (o = !0, e2.__R = null, u ? u(l) : l());
        };

    e2.__R = i;

    var l = function l() {
            if (! --r2.__u) {
                if (r2.state.__e) {
                    var n4 = r2.state.__e;

                    r2.__v.__k[0] = function n(t6, e, r) {
                        return t6 && (t6.__v = null, t6.__k = t6.__k && t6.__k.map(function (t) {
                            return n(t, e, r);
                        }), t6.__c && t6.__c.__P === e && (t6.__e && r.insertBefore(t6.__e, t6.__d), t6.__c.__e = !0, t6.__c.__P = r)), t6;
                    }(n4, n4.__c.__P, n4.__c.__O);
                }

                var t4;

                for (r2.setState({
                    __e: r2.__b = null
                }); t4 = r2.t.pop();) {
                    t4.forceUpdate();
                }
            }
        },
        c = !0 === t3.__h;

    r2.__u++ || c || r2.setState({
        __e: r2.__b = r2.__v.__k[0]
    }), n3.then(i, i);
}, $d58a583dee9ef39c$export$74bf444e3cd11ea5.prototype.componentWillUnmount = function () {
    this.t = [];
}, $d58a583dee9ef39c$export$74bf444e3cd11ea5.prototype.render = function (n7, t7) {
    if (this.__b) {
        if (this.__v.__k) {
            var e3 = document.createElement("div"),
                r3 = this.__v.__k[0].__c;

            this.__v.__k[0] = function n8(t8, e, r) {
                return t8 && (t8.__c && t8.__c.__H && (t8.__c.__H.__.forEach(function (n) {
                    "function" == typeof n.__c && n.__c();
                }), t8.__c.__H = null), null != (t8 = $d58a583dee9ef39c$var$S({}, t8)).__c && (t8.__c.__P === r && (t8.__c.__P = e), t8.__c = null), t8.__k = t8.__k && t8.__k.map(function (t) {
                    return n8(t, e, r);
                })), t8;
            }(this.__b, e3, r3.__O = r3.__P);
        }

        this.__b = null;
    }

    var u = t7.__e && $11f6c40cee63613b$export$c8a8987d4410bf2d($11f6c40cee63613b$export$ffb0004e005737fa, null, n7.fallback);
    return u && (u.__h = null), [$11f6c40cee63613b$export$c8a8987d4410bf2d($11f6c40cee63613b$export$ffb0004e005737fa, null, t7.__e ? null : n7.children), u];
};

var $d58a583dee9ef39c$var$T = function $d58a583dee9ef39c$var$T(n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
        for (; e.length > 3;) {
            e.pop()();
        }

        if (e[1] < e[0]) break;
        n.u = e = e[2];
    }
};

function $d58a583dee9ef39c$var$D(n) {
    return this.getChildContext = function () {
        return n.context;
    }, n.children;
}

function $d58a583dee9ef39c$var$I(n9) {
    var t = this,
        e = n9.i;
    t.componentWillUnmount = function () {
        $11f6c40cee63613b$export$b3890eb0ae9dca99(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== e && t.componentWillUnmount(), n9.__v ? (t.l || (t.i = e, t.l = {
        nodeType: 1,
        parentNode: e,
        childNodes: [],
        appendChild: function appendChild(n) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        insertBefore: function insertBefore(n, e) {
            this.childNodes.push(n), t.i.appendChild(n);
        },
        removeChild: function removeChild(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
        }
    }), $11f6c40cee63613b$export$b3890eb0ae9dca99($11f6c40cee63613b$export$c8a8987d4410bf2d($d58a583dee9ef39c$var$D, {
        context: t.context
    }, n9.__v), t.l)) : t.l && t.componentWillUnmount();
}

function $d58a583dee9ef39c$export$d39a5bbd09211389(n, t) {
    return $11f6c40cee63613b$export$c8a8987d4410bf2d($d58a583dee9ef39c$var$I, {
        __v: n,
        i: t
    });
}

($d58a583dee9ef39c$export$998bcd577473dd93.prototype = new $11f6c40cee63613b$export$16fa2f45be04daa8()).__e = function (n) {
    var t = this,
        e = $d58a583dee9ef39c$var$U(t.__v),
        r = t.o.get(n);
    return r[0]++, function (u) {
        var o = function o() {
            t.props.revealOrder ? (r.push(u), $d58a583dee9ef39c$var$T(t, n, r)) : u();
        };

        e ? e(o) : o();
    };
}, $d58a583dee9ef39c$export$998bcd577473dd93.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = $11f6c40cee63613b$export$47e4c5b300681277(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

    for (var e = t.length; e--;) {
        this.o.set(t[e], this.u = [1, 0, this.u]);
    }

    return n.children;
}, $d58a583dee9ef39c$export$998bcd577473dd93.prototype.componentDidUpdate = $d58a583dee9ef39c$export$998bcd577473dd93.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
        $d58a583dee9ef39c$var$T(n, e, t);
    });
};

var $d58a583dee9ef39c$var$j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    $d58a583dee9ef39c$var$P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    $d58a583dee9ef39c$var$V = "undefined" != typeof document,
    $d58a583dee9ef39c$var$z = function $d58a583dee9ef39c$var$z(n) {
        return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
    };

function $d58a583dee9ef39c$export$b3890eb0ae9dca99(n, t, e) {
    return null == t.__k && (t.textContent = ""), $11f6c40cee63613b$export$b3890eb0ae9dca99(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

function $d58a583dee9ef39c$export$fa8d919ba61d84db(n, t, e) {
    return $11f6c40cee63613b$export$fa8d919ba61d84db(n, t), "function" == typeof e && e(), n ? n.__c : null;
}

$11f6c40cee63613b$export$16fa2f45be04daa8.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
    Object.defineProperty($11f6c40cee63613b$export$16fa2f45be04daa8.prototype, n, {
        configurable: !0,
        get: function get() {
            return this["UNSAFE_" + n];
        },
        set: function set(t) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: t
            });
        }
    });
});
var $d58a583dee9ef39c$var$H = $11f6c40cee63613b$export$41c562ebe57d11e2.event;

function $d58a583dee9ef39c$var$Z() {}

function $d58a583dee9ef39c$var$Y() {
    return this.cancelBubble;
}

function $d58a583dee9ef39c$var$q() {
    return this.defaultPrevented;
}

$11f6c40cee63613b$export$41c562ebe57d11e2.event = function (n) {
    return $d58a583dee9ef39c$var$H && (n = $d58a583dee9ef39c$var$H(n)), n.persist = $d58a583dee9ef39c$var$Z, n.isPropagationStopped = $d58a583dee9ef39c$var$Y, n.isDefaultPrevented = $d58a583dee9ef39c$var$q, n.nativeEvent = n;
};

var $d58a583dee9ef39c$var$G,
    $d58a583dee9ef39c$var$J = {
        configurable: !0,
        get: function get() {
            return this.class;
        }
    },
    $d58a583dee9ef39c$var$K = $11f6c40cee63613b$export$41c562ebe57d11e2.vnode;

$11f6c40cee63613b$export$41c562ebe57d11e2.vnode = function (n10) {
    var t = n10.type,
        e = n10.props,
        r = e;

    if ("string" == typeof t) {
        var u = -1 === t.indexOf("-");

        for (var o in r = {}, e) {
            var i = e[o];
            $d58a583dee9ef39c$var$V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !$d58a583dee9ef39c$var$z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && $d58a583dee9ef39c$var$P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
        }

        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = $11f6c40cee63613b$export$47e4c5b300681277(e.children).forEach(function (n) {
            n.props.selected = -1 != r.value.indexOf(n.props.value);
        })), "select" == t && null != r.defaultValue && (r.value = $11f6c40cee63613b$export$47e4c5b300681277(e.children).forEach(function (n) {
            n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
        })), n10.props = r, e.class != e.className && ($d58a583dee9ef39c$var$J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", $d58a583dee9ef39c$var$J));
    }

    n10.$$typeof = $d58a583dee9ef39c$var$j, $d58a583dee9ef39c$var$K && $d58a583dee9ef39c$var$K(n10);
};

var $d58a583dee9ef39c$var$Q = $11f6c40cee63613b$export$41c562ebe57d11e2.__r;

$11f6c40cee63613b$export$41c562ebe57d11e2.__r = function (n) {
    $d58a583dee9ef39c$var$Q && $d58a583dee9ef39c$var$Q(n), $d58a583dee9ef39c$var$G = n.__c;
};

var $d58a583dee9ef39c$export$ae55be85d98224ed = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function readContext(n) {
                    return $d58a583dee9ef39c$var$G.__n[n.__c].props.value;
                }
            }
        }
    },
    $d58a583dee9ef39c$export$83d89fbfd8236492 = "17.0.2";

function $d58a583dee9ef39c$export$d38cd72104c1f0e9(n) {
    return $11f6c40cee63613b$export$c8a8987d4410bf2d.bind(null, n);
}

function $d58a583dee9ef39c$export$a8257692ac88316c(n) {
    return !!n && n.$$typeof === $d58a583dee9ef39c$var$j;
}

function $d58a583dee9ef39c$export$e530037191fcd5d7(n) {
    return $d58a583dee9ef39c$export$a8257692ac88316c(n) ? $11f6c40cee63613b$export$e530037191fcd5d7.apply(null, arguments) : n;
}

function $d58a583dee9ef39c$export$502457920280e6be(n) {
    return !!n.__k && ($11f6c40cee63613b$export$b3890eb0ae9dca99(null, n), !0);
}

function $d58a583dee9ef39c$export$466bfc07425424d5(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
}

var $d58a583dee9ef39c$export$c78a37762a8d58e1 = function $d58a583dee9ef39c$export$c78a37762a8d58e1(n, t) {
        return n(t);
    },
    $d58a583dee9ef39c$export$cd75ccfd720a3cd4 = function $d58a583dee9ef39c$export$cd75ccfd720a3cd4(n, t) {
        return n(t);
    },
    $d58a583dee9ef39c$export$5f8d39834fd61797 = $11f6c40cee63613b$export$ffb0004e005737fa;

var $d58a583dee9ef39c$export$2e2bcd8739ae039 = {
    useState: $4ee3bf5a04a4dd08$export$60241385465d0a34,
    useReducer: $4ee3bf5a04a4dd08$export$13e3392192263954,
    useEffect: $4ee3bf5a04a4dd08$export$6d9c69b0de29b591,
    useLayoutEffect: $4ee3bf5a04a4dd08$export$e5c5a5f917a5871c,
    useRef: $4ee3bf5a04a4dd08$export$b8f5890fc79d6aca,
    useImperativeHandle: $4ee3bf5a04a4dd08$export$d5a552a76deda3c2,
    useMemo: $4ee3bf5a04a4dd08$export$1538c33de8887b59,
    useCallback: $4ee3bf5a04a4dd08$export$35808ee640e87ca7,
    useContext: $4ee3bf5a04a4dd08$export$fae74005e78b1a27,
    useDebugValue: $4ee3bf5a04a4dd08$export$dc8fbce3eb94dc1e,
    version: "17.0.2",
    Children: $d58a583dee9ef39c$export$dca3b0875bd9a954,
    render: $d58a583dee9ef39c$export$b3890eb0ae9dca99,
    hydrate: $d58a583dee9ef39c$export$fa8d919ba61d84db,
    unmountComponentAtNode: $d58a583dee9ef39c$export$502457920280e6be,
    createPortal: $d58a583dee9ef39c$export$d39a5bbd09211389,
    createElement: $11f6c40cee63613b$export$c8a8987d4410bf2d,
    createContext: $11f6c40cee63613b$export$fd42f52fd3ae1109,
    createFactory: $d58a583dee9ef39c$export$d38cd72104c1f0e9,
    cloneElement: $d58a583dee9ef39c$export$e530037191fcd5d7,
    createRef: $11f6c40cee63613b$export$7d1e3a5e95ceca43,
    Fragment: $11f6c40cee63613b$export$ffb0004e005737fa,
    isValidElement: $d58a583dee9ef39c$export$a8257692ac88316c,
    findDOMNode: $d58a583dee9ef39c$export$466bfc07425424d5,
    Component: $11f6c40cee63613b$export$16fa2f45be04daa8,
    PureComponent: $d58a583dee9ef39c$export$221d75b3f55bb0bd,
    memo: $d58a583dee9ef39c$export$7c73462e0d25e514,
    forwardRef: $d58a583dee9ef39c$export$257a8862b851cb5b,
    flushSync: $d58a583dee9ef39c$export$cd75ccfd720a3cd4,
    unstable_batchedUpdates: $d58a583dee9ef39c$export$c78a37762a8d58e1,
    StrictMode: $11f6c40cee63613b$export$ffb0004e005737fa,
    Suspense: $d58a583dee9ef39c$export$74bf444e3cd11ea5,
    SuspenseList: $d58a583dee9ef39c$export$998bcd577473dd93,
    lazy: $d58a583dee9ef39c$export$488013bae63b21da,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $d58a583dee9ef39c$export$ae55be85d98224ed
};
var $d6391a2d46970974$var$THEME_ICONS = {
    light: 'outline',
    dark: 'solid'
};

var $d6391a2d46970974$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$d58a583dee9ef39c$ex) {
    _inherits($d6391a2d46970974$export$2e2bcd8739ae039, _$d58a583dee9ef39c$ex);

    var _super4 = _createSuper($d6391a2d46970974$export$2e2bcd8739ae039);

    function $d6391a2d46970974$export$2e2bcd8739ae039() {
        var _this3;

        _classCallCheck(this, $d6391a2d46970974$export$2e2bcd8739ae039);

        _this3 = _super4.call(this);
        _this3.categories = $205291deb9107ba0$export$2d0294657ab35f1b.categories.filter(function (category) {
            return !category.target;
        });
        _this3.state = {
            categoryId: _this3.categories[0].id
        };
        return _this3;
    }

    _createClass($d6391a2d46970974$export$2e2bcd8739ae039, [{
        key: "renderIcon",
        value: function renderIcon(category) {
            var icon = category.icon;

            if (icon) {
                if (icon.svg) return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
                    class: "flex",
                    dangerouslySetInnerHTML: {
                        __html: icon.svg
                    }
                });
                if (icon.src) return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("img", {
                    src: icon.src
                });
            }

            var categoryIcons = $67f44820177a3d2c$export$2e2bcd8739ae039.categories[category.id] || $67f44820177a3d2c$export$2e2bcd8739ae039.categories.custom;
            var style = this.props.icons == 'auto' ? $d6391a2d46970974$var$THEME_ICONS[this.props.theme] : this.props.icons;
            return categoryIcons[style] || categoryIcons;
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var selectedCategoryIndex = null;
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("nav", {
                id: "nav",
                class: "padding",
                "data-position": this.props.position,
                children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "flex relative",
                    children: [this.categories.map(function (category, i) {
                        var title = category.name || $205291deb9107ba0$export$dbe3113d60765c1a.categories[category.id];
                        var selected = !_this4.props.unfocused && category.id == _this4.state.categoryId;
                        if (selected) selectedCategoryIndex = i;
                        return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("button", {
                            "aria-label": title,
                            "aria-selected": selected || undefined,
                            title: title,
                            type: "button",
                            class: "flex flex-grow flex-center",
                            onMouseDown: function onMouseDown(e) {
                                return e.preventDefault();
                            },
                            onClick: function onClick() {
                                _this4.props.onClick({
                                    category: category,
                                    i: i
                                });
                            },
                            children: _this4.renderIcon(category)
                        });
                    }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        class: "bar",
                        style: {
                            width: "".concat(100 / this.categories.length, "%"),
                            opacity: selectedCategoryIndex == null ? 0 : 1,
                            transform: "translateX(".concat(selectedCategoryIndex * 100, "%)")
                        }
                    })]
                })
            });
        }
    }]);

    return $d6391a2d46970974$export$2e2bcd8739ae039;
}($d58a583dee9ef39c$export$221d75b3f55bb0bd);

var $32610e1f6d319587$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$d58a583dee9ef39c$ex2) {
    _inherits($32610e1f6d319587$export$2e2bcd8739ae039, _$d58a583dee9ef39c$ex2);

    var _super5 = _createSuper($32610e1f6d319587$export$2e2bcd8739ae039);

    function $32610e1f6d319587$export$2e2bcd8739ae039() {
        _classCallCheck(this, $32610e1f6d319587$export$2e2bcd8739ae039);

        return _super5.apply(this, arguments);
    }

    _createClass($32610e1f6d319587$export$2e2bcd8739ae039, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            for (var k in nextProps) {
                if (k == 'children') continue;
                if (nextProps[k] != this.props[k]) return true;
            }

            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.children;
        }
    }]);

    return $32610e1f6d319587$export$2e2bcd8739ae039;
}($d58a583dee9ef39c$export$221d75b3f55bb0bd);

var $0ecec806152d3af2$var$Performance = {
    rowsPerRender: 10
};

var $0ecec806152d3af2$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$11f6c40cee63613b$ex) {
    _inherits($0ecec806152d3af2$export$2e2bcd8739ae039, _$11f6c40cee63613b$ex);

    var _super6 = _createSuper($0ecec806152d3af2$export$2e2bcd8739ae039);

    function $0ecec806152d3af2$export$2e2bcd8739ae039(props) {
        var _this5;

        _classCallCheck(this, $0ecec806152d3af2$export$2e2bcd8739ae039);

        _this5 = _super6.call(this);

        _defineProperty(_assertThisInitialized(_this5), "handleClickOutside", function (e) {
            var element = _this5.props.element;

            if (e.target != element) {
                if (_this5.state.showSkins) _this5.closeSkins();
                if (_this5.props.onClickOutside) _this5.props.onClickOutside();
            }
        });

        _defineProperty(_assertThisInitialized(_this5), "handleBaseClick", function (e) {
            if (!_this5.state.showSkins) return;

            if (!e.target.closest('.menu')) {
                e.preventDefault();
                e.stopImmediatePropagation();

                _this5.closeSkins();
            }
        });

        _defineProperty(_assertThisInitialized(_this5), "handleBaseKeydown", function (e) {
            if (!_this5.state.showSkins) return;

            if (e.key == 'Escape') {
                e.preventDefault();
                e.stopImmediatePropagation();

                _this5.closeSkins();
            }
        });

        _defineProperty(_assertThisInitialized(_this5), "handleSearchClick", function () {
            var emoji = _this5.getEmojiByPos(_this5.state.pos);

            if (!emoji) return;

            _this5.setState({
                pos: [-1, -1]
            });
        });

        _defineProperty(_assertThisInitialized(_this5), "handleSearchInput", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var input, value, searchResults, afterRender, pos, grid, row, _iterator3, _step3, emoji;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            input = _this5.refs.searchInput.current;

                            if (input) {
                                _context2.next = 3;
                                break;
                            }

                            return _context2.abrupt("return");

                        case 3:
                            value = input.value;
                            _context2.next = 6;
                            return $e43013e6209d8d65$export$2e2bcd8739ae039.search(value);

                        case 6:
                            searchResults = _context2.sent;

                            afterRender = function afterRender() {
                                if (!_this5.refs.scroll.current) return;
                                _this5.refs.scroll.current.scrollTop = 0;
                            };

                            if (searchResults) {
                                _context2.next = 10;
                                break;
                            }

                            return _context2.abrupt("return", _this5.setState({
                                searchResults: searchResults,
                                pos: [-1, -1]
                            }, afterRender));

                        case 10:
                            pos = input.selectionStart == input.value.length ? [0, 0] : [-1, -1];
                            grid = [];
                            grid.setsize = searchResults.length;
                            row = null;
                            _iterator3 = _createForOfIteratorHelper(searchResults);

                            try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                    emoji = _step3.value;

                                    if (!grid.length || row.length == _this5.props.perLine) {
                                        row = [];
                                        row.__categoryId = 'search';
                                        row.__index = grid.length;
                                        grid.push(row);
                                    }

                                    row.push(emoji);
                                }
                            } catch (err) {
                                _iterator3.e(err);
                            } finally {
                                _iterator3.f();
                            }

                            _this5.ignoreMouse();

                            _this5.setState({
                                searchResults: grid,
                                pos: pos
                            }, afterRender);

                        case 18:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2);
        })));

        _defineProperty(_assertThisInitialized(_this5), "handleSearchKeyDown", function (e) {
            // const specialKey = e.altKey || e.ctrlKey || e.metaKey
            var input = e.currentTarget;
            e.stopImmediatePropagation();

            switch (e.key) {
                case 'ArrowLeft':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this5.navigate({
                        e: e,
                        input: input,
                        left: true
                    });

                    break;

                case 'ArrowRight':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this5.navigate({
                        e: e,
                        input: input,
                        right: true
                    });

                    break;

                case 'ArrowUp':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this5.navigate({
                        e: e,
                        input: input,
                        up: true
                    });

                    break;

                case 'ArrowDown':
                    // if (specialKey) return
                    // e.preventDefault()
                    _this5.navigate({
                        e: e,
                        input: input,
                        down: true
                    });

                    break;

                case 'Enter':
                    e.preventDefault();

                    _this5.handleEmojiClick({
                        pos: _this5.state.pos
                    });

                    break;

                case 'Escape':
                    e.preventDefault();
                    if (_this5.state.searchResults) _this5.clearSearch();else _this5.unfocusSearch();
                    break;

                default:
                    break;
            }
        });

        _defineProperty(_assertThisInitialized(_this5), "clearSearch", function () {
            var input = _this5.refs.searchInput.current;
            if (!input) return;
            input.value = '';
            input.focus();

            _this5.handleSearchInput();
        });

        _defineProperty(_assertThisInitialized(_this5), "handleCategoryClick", function (_ref4) {
            var category = _ref4.category,
                i = _ref4.i;

            _this5.scrollTo(i == 0 ? {
                row: -1
            } : {
                categoryId: category.id
            });
        });

        _defineProperty(_assertThisInitialized(_this5), "openSkins", function (e) {
            var currentTarget = e.currentTarget;
            var rect = currentTarget.getBoundingClientRect();

            _this5.setState({
                showSkins: rect
            }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var menu;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return $3b75e5301c412e02$export$e772c8ff12451969(2);

                            case 2:
                                menu = _this5.refs.menu.current;

                                if (menu) {
                                    _context3.next = 5;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 5:
                                menu.classList.remove('hidden');

                                _this5.refs.skinToneRadio.current.focus();

                                _this5.base.addEventListener('click', _this5.handleBaseClick, true);

                                _this5.base.addEventListener('keydown', _this5.handleBaseKeydown, true);

                            case 9:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3);
            })));
        });

        _this5.state = {
            pos: [-1, -1],
            skin: $d1c485ce7bbdb20f$export$2e2bcd8739ae039.get('skin') || props.skin,
            theme: _this5.initTheme(props.theme),
            visibleRows: {
                0: true
            }
        };
        return _this5;
    }

    _createClass($0ecec806152d3af2$export$2e2bcd8739ae039, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this6 = this;

            var _$205291deb9107ba0$ex = $205291deb9107ba0$export$2d0294657ab35f1b,
                categories = _$205291deb9107ba0$ex.categories;
            this.refs = {
                categories: new Map(),
                menu: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                navigation: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                scroll: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                search: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                searchInput: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                skinToneButton: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                skinToneRadio: $11f6c40cee63613b$export$7d1e3a5e95ceca43()
            };
            this.grid = [];
            this.grid.setsize = 0;

            var addRow = function addRow(rows, category) {
                var row = [];
                row.__categoryId = category.id;
                row.__index = rows.length;

                _this6.grid.push(row);

                var rowIndex = _this6.grid.length - 1;
                var rowRef = rowIndex % $0ecec806152d3af2$var$Performance.rowsPerRender ? {} : $11f6c40cee63613b$export$7d1e3a5e95ceca43();
                rowRef.index = rowIndex;
                rowRef.posinset = _this6.grid.setsize + 1;
                rows.push(rowRef);
                return row;
            };

            var _iterator4 = _createForOfIteratorHelper(categories),
                _step4;

            try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var category1 = _step4.value;
                    var rows = [];
                    var row = addRow(rows, category1);

                    var _iterator5 = _createForOfIteratorHelper(category1.emojis),
                        _step5;

                    try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                            var emoji = _step5.value;
                            if (row.length == this.props.perLine) row = addRow(rows, category1);
                            this.grid.setsize += 1;
                            row.push(emoji);
                        }
                    } catch (err) {
                        _iterator5.e(err);
                    } finally {
                        _iterator5.f();
                    }

                    this.refs.categories.set(category1.id, {
                        root: $11f6c40cee63613b$export$7d1e3a5e95ceca43(),
                        rows: rows
                    });
                }
            } catch (err) {
                _iterator4.e(err);
            } finally {
                _iterator4.f();
            }

            if (this.props.stickySearch == false && this.props.searchPosition == 'sticky') {
                console.warn('[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`.');
                this.props.searchPosition = 'static';
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.observeCategories();
            this.observeRows();
            this.shadowRoot = this.base.parentNode;
            document.addEventListener('click', this.handleClickOutside);

            if (this.props.autoFocus) {
                var searchInput = this.refs.searchInput;
                if (searchInput.current) searchInput.current.focus();
            }
        }
    }, {
        key: "initTheme",
        value: function initTheme(theme) {
            var _this7 = this;

            if (theme != 'auto') return theme;
            var darkMedia = matchMedia('(prefers-color-scheme: dark)');
            if (darkMedia.media.match(/^not/)) return 'light';
            darkMedia.addListener(function () {
                _this7.setState({
                    theme: darkMedia.matches ? 'dark' : 'light'
                });
            });
            return darkMedia.matches ? 'dark' : 'light';
        }
    }, {
        key: "getEmojiByPos",
        value: function getEmojiByPos(_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                p1 = _ref7[0],
                p2 = _ref7[1];

            var grid = this.state.searchResults || this.grid;
            var emoji = grid[p1] && grid[p1][p2];
            if (!emoji) return;
            return $e43013e6209d8d65$export$2e2bcd8739ae039.get(emoji);
        }
    }, {
        key: "observeCategories",
        value: function observeCategories() {
            var navigation = this.refs.navigation.current;
            if (!navigation) return;
            var visibleCategories = new Map();

            var setFocusedCategory = function setFocusedCategory(categoryId) {
                if (categoryId != navigation.state.categoryId) navigation.setState({
                    categoryId: categoryId
                });
            };

            var observerOptions = {
                root: this.refs.scroll.current,
                threshold: [0, 1]
            };
            var observer = new IntersectionObserver(function (entries) {
                var _iterator6 = _createForOfIteratorHelper(entries),
                    _step6;

                try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var entry = _step6.value;
                        var id = entry.target.dataset.id;
                        visibleCategories.set(id, entry.intersectionRatio);
                    }
                } catch (err) {
                    _iterator6.e(err);
                } finally {
                    _iterator6.f();
                }

                var ratios = _toConsumableArray(visibleCategories);

                var lastCategory = ratios[ratios.length - 1];
                if (lastCategory[1] == 1) return setFocusedCategory(lastCategory[0]);

                var _iterator7 = _createForOfIteratorHelper(ratios),
                    _step7;

                try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var _step7$value = _slicedToArray(_step7.value, 2),
                            _id = _step7$value[0],
                            ratio = _step7$value[1];

                        if (ratio) {
                            setFocusedCategory(_id);
                            break;
                        }
                    }
                } catch (err) {
                    _iterator7.e(err);
                } finally {
                    _iterator7.f();
                }
            }, observerOptions);

            var _iterator8 = _createForOfIteratorHelper(this.refs.categories.values()),
                _step8;

            try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var root = _step8.value.root;
                    observer.observe(root.current);
                }
            } catch (err) {
                _iterator8.e(err);
            } finally {
                _iterator8.f();
            }
        }
    }, {
        key: "observeRows",
        value: function observeRows() {
            var _this8 = this;

            var visibleRows = _objectSpread({}, this.state.visibleRows);

            var observer = new IntersectionObserver(function (entries) {
                var _iterator9 = _createForOfIteratorHelper(entries),
                    _step9;

                try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var entry = _step9.value;
                        var index = parseInt(entry.target.dataset.index);
                        if (entry.isIntersecting) visibleRows[index] = true;else delete visibleRows[index];
                    }
                } catch (err) {
                    _iterator9.e(err);
                } finally {
                    _iterator9.f();
                }

                _this8.setState({
                    visibleRows: visibleRows
                });
            }, {
                root: this.refs.scroll.current,
                rootMargin: "".concat(this.props.emojiButtonSize * ($0ecec806152d3af2$var$Performance.rowsPerRender + 5), "px 0px ").concat(this.props.emojiButtonSize * $0ecec806152d3af2$var$Performance.rowsPerRender, "px")
            });

            var _iterator10 = _createForOfIteratorHelper(this.refs.categories.values()),
                _step10;

            try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var rows = _step10.value.rows;

                    var _iterator11 = _createForOfIteratorHelper(rows),
                        _step11;

                    try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                            var row = _step11.value;
                            if (row.current) observer.observe(row.current);
                        }
                    } catch (err) {
                        _iterator11.e(err);
                    } finally {
                        _iterator11.f();
                    }
                }
            } catch (err) {
                _iterator10.e(err);
            } finally {
                _iterator10.f();
            }
        }
    }, {
        key: "preventDefault",
        value: function preventDefault(e) {
            e.preventDefault();
        }
    }, {
        key: "unfocusSearch",
        value: function unfocusSearch() {
            var input = this.refs.searchInput.current;
            if (!input) return;
            input.blur();
        }
    }, {
        key: "navigate",
        value: function navigate(_ref8) {
            var _this9 = this;

            var e = _ref8.e,
                input = _ref8.input,
                left = _ref8.left,
                right = _ref8.right,
                up = _ref8.up,
                down = _ref8.down;
            var grid = this.state.searchResults || this.grid;
            if (!grid.length) return;

            var _this$state$pos = _slicedToArray(this.state.pos, 2),
                p1 = _this$state$pos[0],
                p2 = _this$state$pos[1];

            var pos = function () {
                if (p1 == 0) {
                    if (p2 == 0 && !e.repeat && (left || up)) return null;
                }

                if (p1 == -1) {
                    if (!e.repeat && (right || down) && input.selectionStart == input.value.length) return [0, 0];
                    return null;
                }

                if (left || right) {
                    var row = grid[p1];
                    var increment = left ? -1 : 1;
                    p2 += increment;

                    if (!row[p2]) {
                        p1 += increment;
                        row = grid[p1];

                        if (!row) {
                            p1 = left ? 0 : grid.length - 1;
                            p2 = left ? 0 : grid[p1].length - 1;
                            return [p1, p2];
                        }

                        p2 = left ? row.length - 1 : 0;
                    }

                    return [p1, p2];
                }

                if (up || down) {
                    p1 += up ? -1 : 1;
                    var _row = grid[p1];

                    if (!_row) {
                        p1 = up ? 0 : grid.length - 1;
                        p2 = up ? 0 : grid[p1].length - 1;
                        return [p1, p2];
                    }

                    if (!_row[p2]) p2 = _row.length - 1;
                    return [p1, p2];
                }
            }();

            if (pos) e.preventDefault();else {
                if (this.state.pos[0] > -1) this.setState({
                    pos: [-1, -1]
                });
                return;
            }
            this.setState({
                pos: pos,
                keyboard: true
            }, function () {
                _this9.scrollTo({
                    row: pos[0]
                });
            });
        }
    }, {
        key: "scrollTo",
        value: function scrollTo(_ref9) {
            var categoryId = _ref9.categoryId,
                row = _ref9.row;
            var grid = this.state.searchResults || this.grid;
            if (!grid.length) return;
            var scroll = this.refs.scroll.current;
            var scrollRect = scroll.getBoundingClientRect();
            var scrollTop = 0;
            if (row >= 0) categoryId = grid[row].__categoryId;

            if (categoryId) {
                var ref = this.refs[categoryId] || this.refs.categories.get(categoryId).root;
                var categoryRect = ref.current.getBoundingClientRect();
                scrollTop = categoryRect.top - (scrollRect.top - scroll.scrollTop) + 1;
            }

            if (row >= 0) {
                if (!row) scrollTop = 0;else {
                    var rowIndex = grid[row].__index;
                    var rowTop = scrollTop + rowIndex * this.props.emojiButtonSize;
                    var rowBot = rowTop + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
                    if (rowTop < scroll.scrollTop) scrollTop = rowTop;else if (rowBot > scroll.scrollTop + scrollRect.height) scrollTop = rowBot - scrollRect.height;else return;
                }
            }

            this.ignoreMouse();
            scroll.scrollTop = scrollTop;
        }
    }, {
        key: "ignoreMouse",
        value: function ignoreMouse() {
            var _this10 = this;

            this.mouseIsIgnored = true;
            clearTimeout(this.ignoreMouseTimer);
            this.ignoreMouseTimer = setTimeout(function () {
                delete _this10.mouseIsIgnored;
            }, 100);
        }
    }, {
        key: "handleEmojiOver",
        value: function handleEmojiOver(pos) {
            if (this.mouseIsIgnored || this.state.showSkins) return;
            this.setState({
                pos: pos || [-1, -1],
                keyboard: false
            });
        }
    }, {
        key: "handleEmojiClick",
        value: function handleEmojiClick(_ref10) {
            var emoji = _ref10.emoji,
                pos = _ref10.pos;
            if (!this.props.onEmojiSelect) return;
            if (!emoji && pos) emoji = this.getEmojiByPos(pos);

            if (emoji) {
                var skin = emoji.skins[this.state.skin - 1] || emoji.skins[0];
                var emojiData = {
                    id: emoji.id,
                    name: emoji.name,
                    native: skin.native,
                    unified: skin.unified,
                    keywords: emoji.keywords,
                    shortcodes: skin.shortcodes || emoji.shortcodes
                };
                if (skin.src) emojiData.src = skin.src;
                if (emoji.aliases && emoji.aliases.length) emojiData.aliases = emoji.aliases;
                if (emoji.emoticons && emoji.emoticons.length) emojiData.emoticons = emoji.emoticons;
                if (this.props.maxFrequentRows) $2e94d13d43a3b87d$export$2e2bcd8739ae039.add(emojiData, this.props);
                this.props.onEmojiSelect(emojiData);
            }
        }
    }, {
        key: "closeSkins",
        value: function closeSkins() {
            if (!this.state.showSkins) return;
            this.setState({
                showSkins: null,
                tempSkin: null
            });
            this.base.removeEventListener('click', this.handleBaseClick);
            this.base.removeEventListener('keydown', this.handleBaseKeydown);
        }
    }, {
        key: "handleSkinMouseOver",
        value: function handleSkinMouseOver(tempSkin) {
            this.setState({
                tempSkin: tempSkin
            });
        }
    }, {
        key: "handleSkinClick",
        value: function handleSkinClick(skin) {
            this.ignoreMouse();
            this.closeSkins();
            this.setState({
                skin: skin,
                tempSkin: null
            });
            $d1c485ce7bbdb20f$export$2e2bcd8739ae039.set('skin', skin);
        }
    }, {
        key: "renderNav",
        value: function renderNav() {
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($d6391a2d46970974$export$2e2bcd8739ae039, {
                ref: this.refs.navigation,
                icons: this.props.icons,
                theme: this.state.theme,
                unfocused: !!this.state.searchResults,
                position: this.props.navPosition,
                onClick: this.handleCategoryClick
            });
        }
    }, {
        key: "renderPreview",
        value: function renderPreview() {
            var emoji = this.getEmojiByPos(this.state.pos);
            var noSearchResults = this.state.searchResults && !this.state.searchResults.length;
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                id: "preview",
                class: "flex flex-middle",
                "data-position": this.props.previewPosition,
                children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle flex-grow",
                    children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        class: "flex flex-auto flex-middle flex-center",
                        style: {
                            height: this.props.emojiButtonSize,
                            fontSize: this.props.emojiButtonSize
                        },
                        children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($39dd3be3baae5f42$export$2e2bcd8739ae039, {
                            emoji: emoji,
                            id: noSearchResults ? this.props.noResultsEmoji || 'cry' : this.props.previewEmoji || (this.props.previewPosition == 'top' ? 'point_down' : 'point_up'),
                            set: this.props.set,
                            size: this.props.emojiButtonSize,
                            skin: this.state.tempSkin || this.state.skin,
                            spritesheet: true,
                            getSpritesheetURL: this.props.getSpritesheetURL
                        })
                    }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        class: "margin-l",
                        children: emoji ? /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "padding-r",
                            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                                class: "ellipsis",
                                style: {
                                    fontSize: '1.1em'
                                },
                                children: emoji.name
                            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                                class: "ellipsis color-c",
                                style: {
                                    fontSize: '.9em'
                                },
                                children: emoji.skins[0].shortcodes
                            })]
                        }) : noSearchResults ? /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "padding-r",
                            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                                class: "ellipsis",
                                style: {
                                    fontSize: '1.1em'
                                },
                                children: $205291deb9107ba0$export$dbe3113d60765c1a.search_no_results_1
                            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                                class: "ellipsis color-c",
                                style: {
                                    fontSize: '.9em'
                                },
                                children: $205291deb9107ba0$export$dbe3113d60765c1a.search_no_results_2
                            })]
                        }) : /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "color-c",
                            style: {
                                fontSize: 21
                            },
                            children: $205291deb9107ba0$export$dbe3113d60765c1a.pick
                        })
                    })]
                }), !emoji && this.props.skinTonePosition == 'preview' && this.renderSkinToneButton()]
            });
        }
    }, {
        key: "renderEmojiButton",
        value: function renderEmojiButton(emoji, _ref11) {
            var _this11 = this;

            var pos = _ref11.pos,
                posinset = _ref11.posinset,
                grid = _ref11.grid;
            var size = this.props.emojiButtonSize;
            var skin = this.state.tempSkin || this.state.skin;
            var emojiSkin = emoji.skins[skin - 1] || emoji.skins[0];
            var native = emojiSkin.native;
            var selected = $3b75e5301c412e02$export$9cb4719e2e525b7a(this.state.pos, pos);
            var key = pos.concat(emoji.id).join('');
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($32610e1f6d319587$export$2e2bcd8739ae039, {
                selected: selected,
                skin: skin,
                size: size,
                children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("button", {
                    "aria-label": native,
                    "aria-selected": selected || undefined,
                    "aria-posinset": posinset,
                    "aria-setsize": grid.setsize,
                    "data-keyboard": this.state.keyboard,
                    title: this.props.previewPosition == 'none' ? emoji.name : undefined,
                    type: "button",
                    class: "flex flex-center flex-middle",
                    tabindex: "-1",
                    onClick: function onClick() {
                        return _this11.handleEmojiClick({
                            emoji: emoji
                        });
                    },
                    onMouseEnter: function onMouseEnter() {
                        return _this11.handleEmojiOver(pos);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this11.handleEmojiOver();
                    },
                    style: {
                        width: this.props.emojiButtonSize,
                        height: this.props.emojiButtonSize,
                        fontSize: this.props.emojiSize,
                        lineHeight: 0
                    },
                    children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        "aria-hidden": "true",
                        class: "background",
                        style: {
                            borderRadius: this.props.emojiButtonRadius,
                            backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(posinset - 1) % this.props.emojiButtonColors.length] : undefined
                        }
                    }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($39dd3be3baae5f42$export$2e2bcd8739ae039, {
                        emoji: emoji,
                        set: this.props.set,
                        size: this.props.emojiSize,
                        skin: skin,
                        spritesheet: true,
                        getSpritesheetURL: this.props.getSpritesheetURL
                    })]
                })
            }, key);
        }
    }, {
        key: "renderSearch",
        value: function renderSearch() {
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "spacer"
                }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "flex flex-middle",
                    children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        class: "search relative flex-grow",
                        children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("input", {
                            type: "search",
                            ref: this.refs.searchInput,
                            placeholder: $205291deb9107ba0$export$dbe3113d60765c1a.search,
                            onClick: this.handleSearchClick,
                            onInput: this.handleSearchInput,
                            onKeyDown: this.handleSearchKeyDown
                        }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
                            class: "icon loupe flex",
                            children: $67f44820177a3d2c$export$2e2bcd8739ae039.search.loupe
                        }), this.state.searchResults && /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("button", {
                            title: "Clear",
                            "aria-label": "Clear",
                            type: "button",
                            class: "icon delete flex",
                            onClick: this.clearSearch,
                            onMouseDown: this.preventDefault,
                            children: $67f44820177a3d2c$export$2e2bcd8739ae039.search.delete
                        })]
                    }), (this.props.previewPosition == 'none' || this.props.skinTonePosition == 'search') && this.renderSkinToneButton()]
                })]
            });
        }
    }, {
        key: "renderSearchResults",
        value: function renderSearchResults() {
            var _this12 = this;

            var searchResults = this.state.searchResults;
            if (!searchResults) return null;
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                class: "category",
                ref: this.refs.search,
                children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "sticky padding-small",
                    children: $205291deb9107ba0$export$dbe3113d60765c1a.categories.search
                }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    children: !searchResults.length ? /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        class: "padding-small",
                        children: this.props.onAddCustomEmoji && /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("a", {
                            onClick: this.props.onAddCustomEmoji,
                            children: $205291deb9107ba0$export$dbe3113d60765c1a.add_custom
                        })
                    }) : searchResults.map(function (row, i) {
                        return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "flex",
                            children: row.map(function (emoji, ii) {
                                return _this12.renderEmojiButton(emoji, {
                                    pos: [i, ii],
                                    posinset: i * _this12.props.perLine + ii + 1,
                                    grid: searchResults
                                });
                            })
                        });
                    })
                })]
            });
        }
    }, {
        key: "renderCategories",
        value: function renderCategories() {
            var _this13 = this;

            var _$205291deb9107ba0$ex2 = $205291deb9107ba0$export$2d0294657ab35f1b,
                categories = _$205291deb9107ba0$ex2.categories;
            var hidden = !!this.state.searchResults;
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                style: {
                    visibility: hidden ? 'hidden' : undefined,
                    display: hidden ? 'none' : undefined
                },
                children: categories.map(function (category) {
                    var _this13$refs$categori = _this13.refs.categories.get(category.id),
                        root = _this13$refs$categori.root,
                        rows = _this13$refs$categori.rows;

                    return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        "data-id": category.target ? category.target.id : category.id,
                        class: "category",
                        ref: root,
                        children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "sticky padding-small",
                            children: category.name || $205291deb9107ba0$export$dbe3113d60765c1a.categories[category.id]
                        }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "relative",
                            style: {
                                height: rows.length * _this13.props.emojiButtonSize
                            },
                            children: rows.map(function (row, i) {
                                var targetRow = row.index - row.index % $0ecec806152d3af2$var$Performance.rowsPerRender;
                                var visible = _this13.state.visibleRows[targetRow];
                                var ref = 'current' in row ? row : undefined;
                                if (!visible && !ref) return null;
                                var start = i * _this13.props.perLine;
                                var end = start + _this13.props.perLine;
                                var emojiIds = category.emojis.slice(start, end);
                                return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                                    "data-index": row.index,
                                    ref: ref,
                                    class: "flex row",
                                    style: {
                                        top: i * _this13.props.emojiButtonSize
                                    },
                                    children: visible && emojiIds.map(function (emojiId, ii) {
                                        var emoji = $e43013e6209d8d65$export$2e2bcd8739ae039.get(emojiId);
                                        return _this13.renderEmojiButton(emoji, {
                                            pos: [row.index, ii],
                                            posinset: row.posinset + ii,
                                            grid: _this13.grid
                                        });
                                    })
                                }, row.index);
                            })
                        })]
                    });
                })
            });
        }
    }, {
        key: "renderSkinToneButton",
        value: function renderSkinToneButton() {
            if (this.props.skinTonePosition == 'none') return null;
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                class: "flex flex-auto flex-center flex-middle",
                style: {
                    position: 'relative',
                    width: this.props.emojiButtonSize,
                    height: this.props.emojiButtonSize
                },
                children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("button", {
                    type: "button",
                    ref: this.refs.skinToneButton,
                    class: "skin-tone-button flex flex-auto flex-center flex-middle",
                    "aria-selected": this.state.showSkins ? '' : undefined,
                    "aria-label": $205291deb9107ba0$export$dbe3113d60765c1a.skins.choose,
                    title: $205291deb9107ba0$export$dbe3113d60765c1a.skins.choose,
                    onClick: this.openSkins,
                    style: {
                        width: this.props.emojiSize,
                        height: this.props.emojiSize
                    },
                    children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
                        class: "skin-tone skin-tone-".concat(this.state.skin)
                    })
                })
            });
        }
    }, {
        key: "renderSkins",
        value: function renderSkins() {
            var _this14 = this;

            var skinToneButton = this.refs.skinToneButton.current;
            var skinToneButtonRect = skinToneButton.getBoundingClientRect();
            var baseRect = this.base.getBoundingClientRect();
            var position = {
                right: baseRect.right - skinToneButtonRect.right - 3
            };
            if (this.props.previewPosition == 'bottom' && this.props.skinTonePosition == 'preview') position.bottom = baseRect.bottom - skinToneButtonRect.top + 6;else {
                position.top = skinToneButtonRect.bottom - baseRect.top + 3;
                position.bottom = 'auto';
            }
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                ref: this.refs.menu,
                role: "radiogroup",
                "aria-label": $205291deb9107ba0$export$dbe3113d60765c1a.skins.choose,
                class: "menu hidden",
                "data-position": position.top ? 'top' : 'bottom',
                style: position,
                children: _toConsumableArray(Array(6).keys()).map(function (i) {
                    var skin = i + 1;
                    var checked = _this14.state.skin == skin;
                    return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("input", {
                            type: "radio",
                            name: "skin-tone",
                            value: skin,
                            "aria-label": $205291deb9107ba0$export$dbe3113d60765c1a.skins[skin],
                            ref: checked ? _this14.refs.skinToneRadio : null,
                            defaultChecked: checked,
                            onChange: function onChange() {
                                return _this14.handleSkinMouseOver(skin);
                            },
                            onKeyDown: function onKeyDown(e) {
                                if (e.code == 'Enter' || e.code == 'Space' || e.code == 'Tab') {
                                    e.preventDefault();

                                    _this14.handleSkinClick(skin);
                                }
                            }
                        }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("button", {
                            "aria-hidden": "true",
                            tabindex: "-1",
                            onClick: function onClick() {
                                return _this14.handleSkinClick(skin);
                            },
                            onMouseEnter: function onMouseEnter() {
                                return _this14.handleSkinMouseOver(skin);
                            },
                            onMouseLeave: function onMouseLeave() {
                                return _this14.handleSkinMouseOver();
                            },
                            class: "option flex flex-grow flex-middle",
                            children: [/*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
                                class: "skin-tone skin-tone-".concat(skin)
                            }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("span", {
                                class: "margin-small-lr",
                                children: $205291deb9107ba0$export$dbe3113d60765c1a.skins[skin]
                            })]
                        })]
                    });
                })
            });
        }
    }, {
        key: "render",
        value: function render() {
            return /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("section", {
                id: "root",
                class: "flex flex-column",
                style: {
                    width: this.props.perLine * this.props.emojiButtonSize + 28
                },
                "data-emoji-set": this.props.set,
                "data-theme": this.state.theme,
                "data-menu": this.state.showSkins ? '' : undefined,
                children: [this.props.previewPosition == 'top' && this.renderPreview(), this.props.navPosition == 'top' && this.renderNav(), this.props.searchPosition == 'sticky' && /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    class: "padding-lr",
                    children: this.renderSearch()
                }), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                    ref: this.refs.scroll,
                    class: "scroll flex-grow padding-lr",
                    children: /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                        style: {
                            width: this.props.perLine * this.props.emojiButtonSize
                        },
                        children: [this.props.searchPosition == 'static' && this.renderSearch(), this.renderSearchResults(), this.renderCategories(), /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b("div", {
                            class: "spacer"
                        })]
                    })
                }), this.props.navPosition == 'bottom' && this.renderNav(), this.props.previewPosition == 'bottom' && this.renderPreview(), this.state.showSkins && this.renderSkins()]
            });
        }
    }]);

    return $0ecec806152d3af2$export$2e2bcd8739ae039;
}($11f6c40cee63613b$export$16fa2f45be04daa8);

var $724e43cd4d4265a7$export$2e2bcd8739ae039 = /*#__PURE__*/function (_$f09270c1f574f0a4$ex) {
    _inherits($724e43cd4d4265a7$export$2e2bcd8739ae039, _$f09270c1f574f0a4$ex);

    var _super7 = _createSuper($724e43cd4d4265a7$export$2e2bcd8739ae039);

    function $724e43cd4d4265a7$export$2e2bcd8739ae039(props) {
        _classCallCheck(this, $724e43cd4d4265a7$export$2e2bcd8739ae039);

        return _super7.call(this, props, {
            styles: /*@__PURE__*/$parcel$interopDefault($16e5614594287861$exports)
        });
    }

    _createClass($724e43cd4d4265a7$export$2e2bcd8739ae039, [{
        key: "connectedCallback",
        value: function () {
            var _connectedCallback2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var pickerProps, _this$props, onEmojiSelect, onClickOutside, onAddCustomEmoji, getImageURL, getSpritesheetURL, props;

                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return $205291deb9107ba0$export$2cd8252107eb640b(this.props, this);

                            case 2:
                                pickerProps = _context4.sent;
                                _this$props = this.props, onEmojiSelect = _this$props.onEmojiSelect, onClickOutside = _this$props.onClickOutside, onAddCustomEmoji = _this$props.onAddCustomEmoji, getImageURL = _this$props.getImageURL, getSpritesheetURL = _this$props.getSpritesheetURL;
                                props = _objectSpread(_objectSpread({}, pickerProps), {}, {
                                    element: this,
                                    onEmojiSelect: onEmojiSelect,
                                    onClickOutside: onClickOutside,
                                    onAddCustomEmoji: onAddCustomEmoji,
                                    getImageURL: getImageURL,
                                    getSpritesheetURL: getSpritesheetURL
                                });
                                $11f6c40cee63613b$export$b3890eb0ae9dca99( /*#__PURE__*/$6c8933bfb6137ffb$export$34b9dba7ce09269b($0ecec806152d3af2$export$2e2bcd8739ae039, _objectSpread({}, props)), this.shadowRoot);

                            case 6:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function connectedCallback() {
                return _connectedCallback2.apply(this, arguments);
            }

            return connectedCallback;
        }()
    }]);

    return $724e43cd4d4265a7$export$2e2bcd8739ae039;
}($f09270c1f574f0a4$export$2e2bcd8739ae039);

exports.Picker = $724e43cd4d4265a7$export$2e2bcd8739ae039;
window.Picker = $724e43cd4d4265a7$export$2e2bcd8739ae039;

if (!customElements.get('em-emoji-picker')) customElements.define('em-emoji-picker', $724e43cd4d4265a7$export$2e2bcd8739ae039);
var $16e5614594287861$exports = {};
$16e5614594287861$exports = ":host {\n  display: flex;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --shadow-color: 0deg 0% 0%;\n  --shadow:\n    0.3px 0.5px 2.7px hsl(var(--shadow-color) / 0.14),\n    0.4px 0.8px 1px -3.2px hsl(var(--shadow-color) / 0.14),\n    1px 2px 2.5px -4.5px hsl(var(--shadow-color) / 0.14);\n}\n\n[data-theme=light] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=dark] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, .0, .2, 1);\n  position: relative;\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*, *:before, *:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: 0 0 auto;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: 1 1 auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n.scroll {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-right: 0;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: -1px;\n  font-weight: 500;\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size) - 1px);\n}\n\n.search input[type=search] {\n  display: block;\n  border: 0;\n  outline: 0;\n  width: 100%;\n  padding: 10px 2em 10px 2.2em;\n  border-radius: 10px;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n}\n\n.search input[type=search]::-moz-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search]::placeholder {\n  color: inherit;\n  opacity: 0.6;\n}\n\n.search input[type=search], .search input[type=search]::-webkit-search-decoration, .search input[type=search]::-webkit-search-cancel-button, .search input[type=search]::-webkit-search-results-button, .search input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n          appearance: none;\n}\n\n.search input[type=search]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, 0.2);\n}\n\n.search .icon {\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  color: rgba(var(--em-rgb-color), 0.7);\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  left: 0.7em;\n  pointer-events: none;\n}\n\n.search .delete {\n  right: 0.7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  border: 0;\n  background-color: transparent;\n}\n\n#nav {\n  z-index: 2;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav .bar {\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  border-radius: 3px 3px 0 0;\n  transition: transform var(--duration) var(--easing);\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  position: relative;\n  padding: calc(var(--padding) + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 2px;\n}\n\n#nav[data-position=top]:before, #preview[data-position=top]:before {\n  top: 100%;\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n}\n\n#nav[data-position=bottom]:before, #preview[data-position=bottom]:before {\n  bottom: 100%;\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n}\n\n.category button {\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0ms;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.skin-tone-button {\n  border-radius: 100%;\n  border: 1px solid transparent;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(0.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  border-left-width: 0;\n  border-right-width: 0;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: transparent;\n  background-color: var(--em-color-border);\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(0.9);\n}\n\n.menu {\n  z-index: 2;\n  position: absolute;\n  white-space: nowrap;\n  padding: 4px;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=bottom] {\n  transform-origin: bottom right;\n}\n\n.menu[data-position=bottom].hidden {\n  transform: scale(0.9) rotate(-3deg) translateY(5%);\n}\n\n.menu[data-position=top] {\n  transform-origin: top right;\n}\n\n.menu[data-position=top].hidden {\n  transform: scale(0.9) rotate(3deg) translateY(-5%);\n}\n\n.menu input[type=radio] {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n.menu input[type=radio]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  padding: 4px 6px;\n  border-radius: 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  mix-blend-mode: overlay;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-emoji-set=twitter] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.5);\n  box-shadow: none;\n}\n\n[data-emoji-set=twitter] .skin-tone-1 {\n  background-color: #FADE72;\n}\n\n[data-emoji-set=twitter] .skin-tone-2 {\n  background-color: #F3DFD0;\n}\n\n[data-emoji-set=twitter] .skin-tone-3 {\n  background-color: #EED3A8;\n}\n\n[data-emoji-set=twitter] .skin-tone-4 {\n  background-color: #CFAD8D;\n}\n\n[data-emoji-set=twitter] .skin-tone-5 {\n  background-color: #A8805D;\n}\n\n[data-emoji-set=twitter] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=google] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.4);\n}\n\n[data-emoji-set=google] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=google] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=google] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=google] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=google] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=google] .skin-tone-6 {\n  background-color: #61493F;\n}\n\n[data-emoji-set=facebook] .skin-tone:after {\n  border-color: rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=facebook] .skin-tone-1 {\n  background-color: #F5C748;\n}\n\n[data-emoji-set=facebook] .skin-tone-2 {\n  background-color: #F1D5AA;\n}\n\n[data-emoji-set=facebook] .skin-tone-3 {\n  background-color: #D4B48D;\n}\n\n[data-emoji-set=facebook] .skin-tone-4 {\n  background-color: #AA876B;\n}\n\n[data-emoji-set=facebook] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=facebook] .skin-tone-6 {\n  background-color: #61493F;\n}\n";