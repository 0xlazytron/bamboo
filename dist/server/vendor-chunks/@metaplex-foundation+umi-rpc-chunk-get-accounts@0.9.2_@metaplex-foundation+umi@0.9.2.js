"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2";
exports.ids = ["vendor-chunks/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/createChunkGetAccountsRpc.mjs":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/createChunkGetAccountsRpc.mjs ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createChunkGetAccountsRpc: () => (/* binding */ createChunkGetAccountsRpc)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/utils/arrays.mjs\");\n\n\nconst createChunkGetAccountsRpc = (rpc, chunkSize = 100) => ({\n  ...rpc,\n  getAccounts: async (publicKeys, options) => {\n    const promises = (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_0__.chunk)(publicKeys, chunkSize).map(chunk => rpc.getAccounts(chunk, options));\n    const chunks = await Promise.all(promises);\n    return chunks.flat();\n  }\n});\n\n\n//# sourceMappingURL=createChunkGetAccountsRpc.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXJwYy1jaHVuay1nZXQtYWNjb3VudHNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yL25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktcnBjLWNodW5rLWdldC1hY2NvdW50cy9kaXN0L2VzbS9jcmVhdGVDaHVua0dldEFjY291bnRzUnBjLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRW9DO0FBQ3JDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEhwXFxPbmVEcml2ZVxcRGVza3RvcFxcQnJva2llcy1taW50LXBhZ2UtbWFpblxcYmFtYm9vXFxub2RlX21vZHVsZXNcXC5wbnBtXFxAbWV0YXBsZXgtZm91bmRhdGlvbit1bWktcnBjLWNodW5rLWdldC1hY2NvdW50c0AwLjkuMl9AbWV0YXBsZXgtZm91bmRhdGlvbit1bWlAMC45LjJcXG5vZGVfbW9kdWxlc1xcQG1ldGFwbGV4LWZvdW5kYXRpb25cXHVtaS1ycGMtY2h1bmstZ2V0LWFjY291bnRzXFxkaXN0XFxlc21cXGNyZWF0ZUNodW5rR2V0QWNjb3VudHNScGMubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNodW5rIH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vdW1pJztcblxuY29uc3QgY3JlYXRlQ2h1bmtHZXRBY2NvdW50c1JwYyA9IChycGMsIGNodW5rU2l6ZSA9IDEwMCkgPT4gKHtcbiAgLi4ucnBjLFxuICBnZXRBY2NvdW50czogYXN5bmMgKHB1YmxpY0tleXMsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGNodW5rKHB1YmxpY0tleXMsIGNodW5rU2l6ZSkubWFwKGNodW5rID0+IHJwYy5nZXRBY2NvdW50cyhjaHVuaywgb3B0aW9ucykpO1xuICAgIGNvbnN0IGNodW5rcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICByZXR1cm4gY2h1bmtzLmZsYXQoKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZUNodW5rR2V0QWNjb3VudHNScGMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUNodW5rR2V0QWNjb3VudHNScGMubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/createChunkGetAccountsRpc.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/plugin.mjs":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/plugin.mjs ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chunkGetAccountsRpc: () => (/* binding */ chunkGetAccountsRpc)\n/* harmony export */ });\n/* harmony import */ var _createChunkGetAccountsRpc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createChunkGetAccountsRpc.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/createChunkGetAccountsRpc.mjs\");\n\n\nconst chunkGetAccountsRpc = (chunkSize = 100) => ({\n  install(umi) {\n    umi.rpc = (0,_createChunkGetAccountsRpc_mjs__WEBPACK_IMPORTED_MODULE_0__.createChunkGetAccountsRpc)(umi.rpc, chunkSize);\n  }\n});\n\n\n//# sourceMappingURL=plugin.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXJwYy1jaHVuay1nZXQtYWNjb3VudHNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yL25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktcnBjLWNodW5rLWdldC1hY2NvdW50cy9kaXN0L2VzbS9wbHVnaW4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRFOztBQUU1RTtBQUNBO0FBQ0EsY0FBYyx5RkFBeUI7QUFDdkM7QUFDQSxDQUFDOztBQUU4QjtBQUMvQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIcFxcT25lRHJpdmVcXERlc2t0b3BcXEJyb2tpZXMtbWludC1wYWdlLW1haW5cXGJhbWJvb1xcbm9kZV9tb2R1bGVzXFwucG5wbVxcQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXJwYy1jaHVuay1nZXQtYWNjb3VudHNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yXFxub2RlX21vZHVsZXNcXEBtZXRhcGxleC1mb3VuZGF0aW9uXFx1bWktcnBjLWNodW5rLWdldC1hY2NvdW50c1xcZGlzdFxcZXNtXFxwbHVnaW4ubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNodW5rR2V0QWNjb3VudHNScGMgfSBmcm9tICcuL2NyZWF0ZUNodW5rR2V0QWNjb3VudHNScGMubWpzJztcblxuY29uc3QgY2h1bmtHZXRBY2NvdW50c1JwYyA9IChjaHVua1NpemUgPSAxMDApID0+ICh7XG4gIGluc3RhbGwodW1pKSB7XG4gICAgdW1pLnJwYyA9IGNyZWF0ZUNodW5rR2V0QWNjb3VudHNScGModW1pLnJwYywgY2h1bmtTaXplKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IGNodW5rR2V0QWNjb3VudHNScGMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdpbi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-chunk-get-accounts@0.9.2_@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi-rpc-chunk-get-accounts/dist/esm/plugin.mjs\n");

/***/ })

};
;