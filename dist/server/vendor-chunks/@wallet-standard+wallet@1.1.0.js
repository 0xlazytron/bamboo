"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@wallet-standard+wallet@1.1.0";
exports.ids = ["vendor-chunks/@wallet-standard+wallet@1.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/register.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/register.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEPRECATED_registerWallet: () => (/* binding */ DEPRECATED_registerWallet),\n/* harmony export */   registerWallet: () => (/* binding */ registerWallet)\n/* harmony export */ });\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _RegisterWalletEvent_detail;\n/**\n * Register a {@link \"@wallet-standard/base\".Wallet} as a Standard Wallet with the app.\n *\n * This dispatches a {@link \"@wallet-standard/base\".WindowRegisterWalletEvent} to notify the app that the Wallet is\n * ready to be registered.\n *\n * This also adds a listener for {@link \"@wallet-standard/base\".WindowAppReadyEvent} to listen for a notification from\n * the app that the app is ready to register the Wallet.\n *\n * This combination of event dispatch and listener guarantees that the Wallet will be registered synchronously as soon\n * as the app is ready whether the Wallet loads before or after the app.\n *\n * @param wallet Wallet to register.\n *\n * @group Wallet\n */\nfunction registerWallet(wallet) {\n    const callback = ({ register }) => register(wallet);\n    try {\n        window.dispatchEvent(new RegisterWalletEvent(callback));\n    }\n    catch (error) {\n        console.error('wallet-standard:register-wallet event could not be dispatched\\n', error);\n    }\n    try {\n        window.addEventListener('wallet-standard:app-ready', ({ detail: api }) => callback(api));\n    }\n    catch (error) {\n        console.error('wallet-standard:app-ready event listener could not be added\\n', error);\n    }\n}\nclass RegisterWalletEvent extends Event {\n    get detail() {\n        return __classPrivateFieldGet(this, _RegisterWalletEvent_detail, \"f\");\n    }\n    get type() {\n        return 'wallet-standard:register-wallet';\n    }\n    constructor(callback) {\n        super('wallet-standard:register-wallet', {\n            bubbles: false,\n            cancelable: false,\n            composed: false,\n        });\n        _RegisterWalletEvent_detail.set(this, void 0);\n        __classPrivateFieldSet(this, _RegisterWalletEvent_detail, callback, \"f\");\n    }\n    /** @deprecated */\n    preventDefault() {\n        throw new Error('preventDefault cannot be called');\n    }\n    /** @deprecated */\n    stopImmediatePropagation() {\n        throw new Error('stopImmediatePropagation cannot be called');\n    }\n    /** @deprecated */\n    stopPropagation() {\n        throw new Error('stopPropagation cannot be called');\n    }\n}\n_RegisterWalletEvent_detail = new WeakMap();\n/**\n * @deprecated Use {@link registerWallet} instead.\n *\n * @group Deprecated\n */\nfunction DEPRECATED_registerWallet(wallet) {\n    var _a;\n    registerWallet(wallet);\n    try {\n        ((_a = window.navigator).wallets || (_a.wallets = [])).push(({ register }) => register(wallet));\n    }\n    catch (error) {\n        console.error('window.navigator.wallets could not be pushed\\n', error);\n    }\n}\n//# sourceMappingURL=register.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldC1zdGFuZGFyZCt3YWxsZXRAMS4xLjAvbm9kZV9tb2R1bGVzL0B3YWxsZXQtc3RhbmRhcmQvd2FsbGV0L2xpYi9lc20vcmVnaXN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNDQUFzQztBQUNyRDtBQUNBLHNCQUFzQix5REFBeUQ7QUFDL0U7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxhQUFhO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxVQUFVO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIcFxcT25lRHJpdmVcXERlc2t0b3BcXEJyb2tpZXMtbWludC1wYWdlLW1haW5cXGJhbWJvb1xcbm9kZV9tb2R1bGVzXFwucG5wbVxcQHdhbGxldC1zdGFuZGFyZCt3YWxsZXRAMS4xLjBcXG5vZGVfbW9kdWxlc1xcQHdhbGxldC1zdGFuZGFyZFxcd2FsbGV0XFxsaWJcXGVzbVxccmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9SZWdpc3RlcldhbGxldEV2ZW50X2RldGFpbDtcbi8qKlxuICogUmVnaXN0ZXIgYSB7QGxpbmsgXCJAd2FsbGV0LXN0YW5kYXJkL2Jhc2VcIi5XYWxsZXR9IGFzIGEgU3RhbmRhcmQgV2FsbGV0IHdpdGggdGhlIGFwcC5cbiAqXG4gKiBUaGlzIGRpc3BhdGNoZXMgYSB7QGxpbmsgXCJAd2FsbGV0LXN0YW5kYXJkL2Jhc2VcIi5XaW5kb3dSZWdpc3RlcldhbGxldEV2ZW50fSB0byBub3RpZnkgdGhlIGFwcCB0aGF0IHRoZSBXYWxsZXQgaXNcbiAqIHJlYWR5IHRvIGJlIHJlZ2lzdGVyZWQuXG4gKlxuICogVGhpcyBhbHNvIGFkZHMgYSBsaXN0ZW5lciBmb3Ige0BsaW5rIFwiQHdhbGxldC1zdGFuZGFyZC9iYXNlXCIuV2luZG93QXBwUmVhZHlFdmVudH0gdG8gbGlzdGVuIGZvciBhIG5vdGlmaWNhdGlvbiBmcm9tXG4gKiB0aGUgYXBwIHRoYXQgdGhlIGFwcCBpcyByZWFkeSB0byByZWdpc3RlciB0aGUgV2FsbGV0LlxuICpcbiAqIFRoaXMgY29tYmluYXRpb24gb2YgZXZlbnQgZGlzcGF0Y2ggYW5kIGxpc3RlbmVyIGd1YXJhbnRlZXMgdGhhdCB0aGUgV2FsbGV0IHdpbGwgYmUgcmVnaXN0ZXJlZCBzeW5jaHJvbm91c2x5IGFzIHNvb25cbiAqIGFzIHRoZSBhcHAgaXMgcmVhZHkgd2hldGhlciB0aGUgV2FsbGV0IGxvYWRzIGJlZm9yZSBvciBhZnRlciB0aGUgYXBwLlxuICpcbiAqIEBwYXJhbSB3YWxsZXQgV2FsbGV0IHRvIHJlZ2lzdGVyLlxuICpcbiAqIEBncm91cCBXYWxsZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyV2FsbGV0KHdhbGxldCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKHsgcmVnaXN0ZXIgfSkgPT4gcmVnaXN0ZXIod2FsbGV0KTtcbiAgICB0cnkge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgUmVnaXN0ZXJXYWxsZXRFdmVudChjYWxsYmFjaykpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignd2FsbGV0LXN0YW5kYXJkOnJlZ2lzdGVyLXdhbGxldCBldmVudCBjb3VsZCBub3QgYmUgZGlzcGF0Y2hlZFxcbicsIGVycm9yKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3dhbGxldC1zdGFuZGFyZDphcHAtcmVhZHknLCAoeyBkZXRhaWw6IGFwaSB9KSA9PiBjYWxsYmFjayhhcGkpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3dhbGxldC1zdGFuZGFyZDphcHAtcmVhZHkgZXZlbnQgbGlzdGVuZXIgY291bGQgbm90IGJlIGFkZGVkXFxuJywgZXJyb3IpO1xuICAgIH1cbn1cbmNsYXNzIFJlZ2lzdGVyV2FsbGV0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gICAgZ2V0IGRldGFpbCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZ2lzdGVyV2FsbGV0RXZlbnRfZGV0YWlsLCBcImZcIik7XG4gICAgfVxuICAgIGdldCB0eXBlKCkge1xuICAgICAgICByZXR1cm4gJ3dhbGxldC1zdGFuZGFyZDpyZWdpc3Rlci13YWxsZXQnO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgICBzdXBlcignd2FsbGV0LXN0YW5kYXJkOnJlZ2lzdGVyLXdhbGxldCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb21wb3NlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBfUmVnaXN0ZXJXYWxsZXRFdmVudF9kZXRhaWwuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1JlZ2lzdGVyV2FsbGV0RXZlbnRfZGV0YWlsLCBjYWxsYmFjaywgXCJmXCIpO1xuICAgIH1cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcmV2ZW50RGVmYXVsdCBjYW5ub3QgYmUgY2FsbGVkJyk7XG4gICAgfVxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gY2Fubm90IGJlIGNhbGxlZCcpO1xuICAgIH1cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3RvcFByb3BhZ2F0aW9uIGNhbm5vdCBiZSBjYWxsZWQnKTtcbiAgICB9XG59XG5fUmVnaXN0ZXJXYWxsZXRFdmVudF9kZXRhaWwgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIHJlZ2lzdGVyV2FsbGV0fSBpbnN0ZWFkLlxuICpcbiAqIEBncm91cCBEZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBERVBSRUNBVEVEX3JlZ2lzdGVyV2FsbGV0KHdhbGxldCkge1xuICAgIHZhciBfYTtcbiAgICByZWdpc3RlcldhbGxldCh3YWxsZXQpO1xuICAgIHRyeSB7XG4gICAgICAgICgoX2EgPSB3aW5kb3cubmF2aWdhdG9yKS53YWxsZXRzIHx8IChfYS53YWxsZXRzID0gW10pKS5wdXNoKCh7IHJlZ2lzdGVyIH0pID0+IHJlZ2lzdGVyKHdhbGxldCkpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignd2luZG93Lm5hdmlnYXRvci53YWxsZXRzIGNvdWxkIG5vdCBiZSBwdXNoZWRcXG4nLCBlcnJvcik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVnaXN0ZXIuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/register.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/util.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/util.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReadonlyWalletAccount: () => (/* binding */ ReadonlyWalletAccount),\n/* harmony export */   arraysEqual: () => (/* binding */ arraysEqual),\n/* harmony export */   bytesEqual: () => (/* binding */ bytesEqual),\n/* harmony export */   concatBytes: () => (/* binding */ concatBytes),\n/* harmony export */   guard: () => (/* binding */ guard),\n/* harmony export */   pick: () => (/* binding */ pick)\n/* harmony export */ });\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _ReadonlyWalletAccount_address, _ReadonlyWalletAccount_publicKey, _ReadonlyWalletAccount_chains, _ReadonlyWalletAccount_features, _ReadonlyWalletAccount_label, _ReadonlyWalletAccount_icon;\n/**\n * Base implementation of a {@link \"@wallet-standard/base\".WalletAccount} to be used or extended by a\n * {@link \"@wallet-standard/base\".Wallet}.\n *\n * `WalletAccount` properties must be read-only. This class enforces this by making all properties\n * [truly private](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) and\n * read-only, using getters for access, returning copies instead of references, and calling\n * [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)\n * on the instance.\n *\n * @group Account\n */\nclass ReadonlyWalletAccount {\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.address | WalletAccount::address} */\n    get address() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_address, \"f\");\n    }\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.publicKey | WalletAccount::publicKey} */\n    get publicKey() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_publicKey, \"f\").slice();\n    }\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.chains | WalletAccount::chains} */\n    get chains() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_chains, \"f\").slice();\n    }\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.features | WalletAccount::features} */\n    get features() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_features, \"f\").slice();\n    }\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.label | WalletAccount::label} */\n    get label() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_label, \"f\");\n    }\n    /** Implementation of {@link \"@wallet-standard/base\".WalletAccount.icon | WalletAccount::icon} */\n    get icon() {\n        return __classPrivateFieldGet(this, _ReadonlyWalletAccount_icon, \"f\");\n    }\n    /**\n     * Create and freeze a read-only account.\n     *\n     * @param account Account to copy properties from.\n     */\n    constructor(account) {\n        _ReadonlyWalletAccount_address.set(this, void 0);\n        _ReadonlyWalletAccount_publicKey.set(this, void 0);\n        _ReadonlyWalletAccount_chains.set(this, void 0);\n        _ReadonlyWalletAccount_features.set(this, void 0);\n        _ReadonlyWalletAccount_label.set(this, void 0);\n        _ReadonlyWalletAccount_icon.set(this, void 0);\n        if (new.target === ReadonlyWalletAccount) {\n            Object.freeze(this);\n        }\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_address, account.address, \"f\");\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), \"f\");\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_chains, account.chains.slice(), \"f\");\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_features, account.features.slice(), \"f\");\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_label, account.label, \"f\");\n        __classPrivateFieldSet(this, _ReadonlyWalletAccount_icon, account.icon, \"f\");\n    }\n}\n_ReadonlyWalletAccount_address = new WeakMap(), _ReadonlyWalletAccount_publicKey = new WeakMap(), _ReadonlyWalletAccount_chains = new WeakMap(), _ReadonlyWalletAccount_features = new WeakMap(), _ReadonlyWalletAccount_label = new WeakMap(), _ReadonlyWalletAccount_icon = new WeakMap();\n/**\n * Efficiently compare {@link Indexed} arrays (e.g. `Array` and `Uint8Array`).\n *\n * @param a An array.\n * @param b Another array.\n *\n * @return `true` if the arrays have the same length and elements, `false` otherwise.\n *\n * @group Util\n */\nfunction arraysEqual(a, b) {\n    if (a === b)\n        return true;\n    const length = a.length;\n    if (length !== b.length)\n        return false;\n    for (let i = 0; i < length; i++) {\n        if (a[i] !== b[i])\n            return false;\n    }\n    return true;\n}\n/**\n * Efficiently compare byte arrays, using {@link arraysEqual}.\n *\n * @param a A byte array.\n * @param b Another byte array.\n *\n * @return `true` if the byte arrays have the same length and bytes, `false` otherwise.\n *\n * @group Util\n */\nfunction bytesEqual(a, b) {\n    return arraysEqual(a, b);\n}\n/**\n * Efficiently concatenate byte arrays without modifying them.\n *\n * @param first  A byte array.\n * @param others Additional byte arrays.\n *\n * @return New byte array containing the concatenation of all the byte arrays.\n *\n * @group Util\n */\nfunction concatBytes(first, ...others) {\n    const length = others.reduce((length, bytes) => length + bytes.length, first.length);\n    const bytes = new Uint8Array(length);\n    bytes.set(first, 0);\n    for (const other of others) {\n        bytes.set(other, bytes.length);\n    }\n    return bytes;\n}\n/**\n * Create a new object with a subset of fields from a source object.\n *\n * @param source Object to pick fields from.\n * @param keys   Names of fields to pick.\n *\n * @return New object with only the picked fields.\n *\n * @group Util\n */\nfunction pick(source, ...keys) {\n    const picked = {};\n    for (const key of keys) {\n        picked[key] = source[key];\n    }\n    return picked;\n}\n/**\n * Call a callback function, catch an error if it throws, and log the error without rethrowing.\n *\n * @param callback Function to call.\n *\n * @group Util\n */\nfunction guard(callback) {\n    try {\n        callback();\n    }\n    catch (error) {\n        console.error(error);\n    }\n}\n//# sourceMappingURL=util.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldC1zdGFuZGFyZCt3YWxsZXRAMS4xLjAvbm9kZV9tb2R1bGVzL0B3YWxsZXQtc3RhbmRhcmQvd2FsbGV0L2xpYi9lc20vdXRpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQTZDO0FBQzFFLElBQUkscUNBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsMkJBQTJCLDhFQUE4RTtBQUN6RztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0ZBQWtGO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0RUFBNEU7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdGQUFnRjtBQUMzRztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEVBQTBFO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtCQUFrQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSHBcXE9uZURyaXZlXFxEZXNrdG9wXFxCcm9raWVzLW1pbnQtcGFnZS1tYWluXFxiYW1ib29cXG5vZGVfbW9kdWxlc1xcLnBucG1cXEB3YWxsZXQtc3RhbmRhcmQrd2FsbGV0QDEuMS4wXFxub2RlX21vZHVsZXNcXEB3YWxsZXQtc3RhbmRhcmRcXHdhbGxldFxcbGliXFxlc21cXHV0aWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9SZWFkb25seVdhbGxldEFjY291bnRfYWRkcmVzcywgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9wdWJsaWNLZXksIF9SZWFkb25seVdhbGxldEFjY291bnRfY2hhaW5zLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2ZlYXR1cmVzLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2xhYmVsLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2ljb247XG4vKipcbiAqIEJhc2UgaW1wbGVtZW50YXRpb24gb2YgYSB7QGxpbmsgXCJAd2FsbGV0LXN0YW5kYXJkL2Jhc2VcIi5XYWxsZXRBY2NvdW50fSB0byBiZSB1c2VkIG9yIGV4dGVuZGVkIGJ5IGFcbiAqIHtAbGluayBcIkB3YWxsZXQtc3RhbmRhcmQvYmFzZVwiLldhbGxldH0uXG4gKlxuICogYFdhbGxldEFjY291bnRgIHByb3BlcnRpZXMgbXVzdCBiZSByZWFkLW9ubHkuIFRoaXMgY2xhc3MgZW5mb3JjZXMgdGhpcyBieSBtYWtpbmcgYWxsIHByb3BlcnRpZXNcbiAqIFt0cnVseSBwcml2YXRlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9DbGFzc2VzL1ByaXZhdGVfY2xhc3NfZmllbGRzKSBhbmRcbiAqIHJlYWQtb25seSwgdXNpbmcgZ2V0dGVycyBmb3IgYWNjZXNzLCByZXR1cm5pbmcgY29waWVzIGluc3RlYWQgb2YgcmVmZXJlbmNlcywgYW5kIGNhbGxpbmdcbiAqIFtPYmplY3QuZnJlZXplXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvZnJlZXplKVxuICogb24gdGhlIGluc3RhbmNlLlxuICpcbiAqIEBncm91cCBBY2NvdW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFkb25seVdhbGxldEFjY291bnQge1xuICAgIC8qKiBJbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgXCJAd2FsbGV0LXN0YW5kYXJkL2Jhc2VcIi5XYWxsZXRBY2NvdW50LmFkZHJlc3MgfCBXYWxsZXRBY2NvdW50OjphZGRyZXNzfSAqL1xuICAgIGdldCBhZGRyZXNzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2FkZHJlc3MsIFwiZlwiKTtcbiAgICB9XG4gICAgLyoqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBcIkB3YWxsZXQtc3RhbmRhcmQvYmFzZVwiLldhbGxldEFjY291bnQucHVibGljS2V5IHwgV2FsbGV0QWNjb3VudDo6cHVibGljS2V5fSAqL1xuICAgIGdldCBwdWJsaWNLZXkoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfcHVibGljS2V5LCBcImZcIikuc2xpY2UoKTtcbiAgICB9XG4gICAgLyoqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBcIkB3YWxsZXQtc3RhbmRhcmQvYmFzZVwiLldhbGxldEFjY291bnQuY2hhaW5zIHwgV2FsbGV0QWNjb3VudDo6Y2hhaW5zfSAqL1xuICAgIGdldCBjaGFpbnMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfY2hhaW5zLCBcImZcIikuc2xpY2UoKTtcbiAgICB9XG4gICAgLyoqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBcIkB3YWxsZXQtc3RhbmRhcmQvYmFzZVwiLldhbGxldEFjY291bnQuZmVhdHVyZXMgfCBXYWxsZXRBY2NvdW50OjpmZWF0dXJlc30gKi9cbiAgICBnZXQgZmVhdHVyZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfZmVhdHVyZXMsIFwiZlwiKS5zbGljZSgpO1xuICAgIH1cbiAgICAvKiogSW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIFwiQHdhbGxldC1zdGFuZGFyZC9iYXNlXCIuV2FsbGV0QWNjb3VudC5sYWJlbCB8IFdhbGxldEFjY291bnQ6OmxhYmVsfSAqL1xuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9sYWJlbCwgXCJmXCIpO1xuICAgIH1cbiAgICAvKiogSW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIFwiQHdhbGxldC1zdGFuZGFyZC9iYXNlXCIuV2FsbGV0QWNjb3VudC5pY29uIHwgV2FsbGV0QWNjb3VudDo6aWNvbn0gKi9cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9pY29uLCBcImZcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgZnJlZXplIGEgcmVhZC1vbmx5IGFjY291bnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWNjb3VudCBBY2NvdW50IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFjY291bnQpIHtcbiAgICAgICAgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9hZGRyZXNzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X3B1YmxpY0tleS5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9jaGFpbnMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9SZWFkb25seVdhbGxldEFjY291bnRfZmVhdHVyZXMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9SZWFkb25seVdhbGxldEFjY291bnRfbGFiZWwuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9SZWFkb25seVdhbGxldEFjY291bnRfaWNvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IFJlYWRvbmx5V2FsbGV0QWNjb3VudCkge1xuICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9wdWJsaWNLZXksIGFjY291bnQucHVibGljS2V5LnNsaWNlKCksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2NoYWlucywgYWNjb3VudC5jaGFpbnMuc2xpY2UoKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfZmVhdHVyZXMsIGFjY291bnQuZmVhdHVyZXMuc2xpY2UoKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWFkb25seVdhbGxldEFjY291bnRfbGFiZWwsIGFjY291bnQubGFiZWwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2ljb24sIGFjY291bnQuaWNvbiwgXCJmXCIpO1xuICAgIH1cbn1cbl9SZWFkb25seVdhbGxldEFjY291bnRfYWRkcmVzcyA9IG5ldyBXZWFrTWFwKCksIF9SZWFkb25seVdhbGxldEFjY291bnRfcHVibGljS2V5ID0gbmV3IFdlYWtNYXAoKSwgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9jaGFpbnMgPSBuZXcgV2Vha01hcCgpLCBfUmVhZG9ubHlXYWxsZXRBY2NvdW50X2ZlYXR1cmVzID0gbmV3IFdlYWtNYXAoKSwgX1JlYWRvbmx5V2FsbGV0QWNjb3VudF9sYWJlbCA9IG5ldyBXZWFrTWFwKCksIF9SZWFkb25seVdhbGxldEFjY291bnRfaWNvbiA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEVmZmljaWVudGx5IGNvbXBhcmUge0BsaW5rIEluZGV4ZWR9IGFycmF5cyAoZS5nLiBgQXJyYXlgIGFuZCBgVWludDhBcnJheWApLlxuICpcbiAqIEBwYXJhbSBhIEFuIGFycmF5LlxuICogQHBhcmFtIGIgQW5vdGhlciBhcnJheS5cbiAqXG4gKiBAcmV0dXJuIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFuZCBlbGVtZW50cywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGdyb3VwIFV0aWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5c0VxdWFsKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogRWZmaWNpZW50bHkgY29tcGFyZSBieXRlIGFycmF5cywgdXNpbmcge0BsaW5rIGFycmF5c0VxdWFsfS5cbiAqXG4gKiBAcGFyYW0gYSBBIGJ5dGUgYXJyYXkuXG4gKiBAcGFyYW0gYiBBbm90aGVyIGJ5dGUgYXJyYXkuXG4gKlxuICogQHJldHVybiBgdHJ1ZWAgaWYgdGhlIGJ5dGUgYXJyYXlzIGhhdmUgdGhlIHNhbWUgbGVuZ3RoIGFuZCBieXRlcywgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGdyb3VwIFV0aWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVzRXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhcnJheXNFcXVhbChhLCBiKTtcbn1cbi8qKlxuICogRWZmaWNpZW50bHkgY29uY2F0ZW5hdGUgYnl0ZSBhcnJheXMgd2l0aG91dCBtb2RpZnlpbmcgdGhlbS5cbiAqXG4gKiBAcGFyYW0gZmlyc3QgIEEgYnl0ZSBhcnJheS5cbiAqIEBwYXJhbSBvdGhlcnMgQWRkaXRpb25hbCBieXRlIGFycmF5cy5cbiAqXG4gKiBAcmV0dXJuIE5ldyBieXRlIGFycmF5IGNvbnRhaW5pbmcgdGhlIGNvbmNhdGVuYXRpb24gb2YgYWxsIHRoZSBieXRlIGFycmF5cy5cbiAqXG4gKiBAZ3JvdXAgVXRpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0Qnl0ZXMoZmlyc3QsIC4uLm90aGVycykge1xuICAgIGNvbnN0IGxlbmd0aCA9IG90aGVycy5yZWR1Y2UoKGxlbmd0aCwgYnl0ZXMpID0+IGxlbmd0aCArIGJ5dGVzLmxlbmd0aCwgZmlyc3QubGVuZ3RoKTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KGZpcnN0LCAwKTtcbiAgICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVycykge1xuICAgICAgICBieXRlcy5zZXQob3RoZXIsIGJ5dGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIGEgc3Vic2V0IG9mIGZpZWxkcyBmcm9tIGEgc291cmNlIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gc291cmNlIE9iamVjdCB0byBwaWNrIGZpZWxkcyBmcm9tLlxuICogQHBhcmFtIGtleXMgICBOYW1lcyBvZiBmaWVsZHMgdG8gcGljay5cbiAqXG4gKiBAcmV0dXJuIE5ldyBvYmplY3Qgd2l0aCBvbmx5IHRoZSBwaWNrZWQgZmllbGRzLlxuICpcbiAqIEBncm91cCBVdGlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaWNrKHNvdXJjZSwgLi4ua2V5cykge1xuICAgIGNvbnN0IHBpY2tlZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgcGlja2VkW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHBpY2tlZDtcbn1cbi8qKlxuICogQ2FsbCBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBjYXRjaCBhbiBlcnJvciBpZiBpdCB0aHJvd3MsIGFuZCBsb2cgdGhlIGVycm9yIHdpdGhvdXQgcmV0aHJvd2luZy5cbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gY2FsbC5cbiAqXG4gKiBAZ3JvdXAgVXRpbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmQoY2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@wallet-standard+wallet@1.1.0/node_modules/@wallet-standard/wallet/lib/esm/util.js\n");

/***/ })

};
;