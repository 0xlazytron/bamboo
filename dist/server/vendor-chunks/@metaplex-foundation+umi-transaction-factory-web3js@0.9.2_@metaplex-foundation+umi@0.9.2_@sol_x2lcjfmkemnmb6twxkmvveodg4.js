"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4";
exports.ids = ["vendor-chunks/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/createWeb3JsTransactionFactory.mjs":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/createWeb3JsTransactionFactory.mjs ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeb3JsTransactionFactory: () => (/* binding */ createWeb3JsTransactionFactory)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/errors/SdkError.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers-core@0.8.9/node_modules/@metaplex-foundation/umi-serializers-core/dist/esm/mapSerializer.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers@0.9.0/node_modules/@metaplex-foundation/umi-serializers/dist/esm/struct.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers@0.9.0/node_modules/@metaplex-foundation/umi-serializers/dist/esm/array.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers@0.9.0/node_modules/@metaplex-foundation/umi-serializers/dist/esm/bytes.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers-numbers@0.8.9/node_modules/@metaplex-foundation/umi-serializers-numbers/dist/esm/shortU16.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers@0.9.0/node_modules/@metaplex-foundation/umi-serializers/dist/esm/publicKey.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers@0.9.0/node_modules/@metaplex-foundation/umi-serializers/dist/esm/string.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers-encodings@0.8.9/node_modules/@metaplex-foundation/umi-serializers-encodings/dist/esm/base58.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers-numbers@0.8.9/node_modules/@metaplex-foundation/umi-serializers-numbers/dist/esm/u8.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metaplex-foundation/umi-web3js-adapters */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_54tljps4nuilpt3br5y566ni4i/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\n\n\n\n/* eslint-disable no-bitwise */\nconst TRANSACTION_VERSION_FLAG = 0x80;\nconst TRANSACTION_VERSION_MASK = 0x7f;\nfunction createWeb3JsTransactionFactory() {\n  const create = input => {\n    const web3JsMessage = (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_1__.toWeb3JsMessageFromInput)(input);\n    const message = (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_1__.fromWeb3JsMessage)(web3JsMessage);\n    const web3JsTransaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.VersionedTransaction(web3JsMessage, input.signatures);\n    return {\n      message,\n      serializedMessage: serializeMessage(message),\n      signatures: web3JsTransaction.signatures\n    };\n  };\n  const serialize = transaction => getTransactionSerializer().serialize(transaction);\n  const deserialize = serializedTransaction => getTransactionSerializer().deserialize(serializedTransaction)[0];\n  const serializeMessage = message => getTransactionMessageSerializer().serialize(message);\n  const deserializeMessage = serializedMessage => getTransactionMessageSerializer().deserialize(serializedMessage)[0];\n  const getTransactionSerializer = () => ({\n    ...(0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_2__.mapSerializer)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__.struct)([['signatures', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_5__.bytes)({\n      size: 64\n    }), {\n      size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n    })], ['serializedMessage', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_5__.bytes)()]]), value => value, value => ({\n      ...value,\n      message: deserializeMessage(value.serializedMessage)\n    })),\n    description: 'Transaction'\n  });\n  const getTransactionMessageSerializer = () => ({\n    description: 'TransactionMessage',\n    fixedSize: null,\n    maxSize: null,\n    serialize: value => {\n      const serializer = getTransactionMessageSerializerForVersion(value.version);\n      return serializer.serialize(value);\n    },\n    deserialize: (bytes, offset = 0) => {\n      const [version] = getTransactionVersionSerializer().deserialize(bytes, offset);\n      const serializer = getTransactionMessageSerializerForVersion(version);\n      return serializer.deserialize(bytes, offset);\n    }\n  });\n  const getTransactionMessageSerializerForVersion = version => (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__.struct)([['version', getTransactionVersionSerializer()], ['header', getTransactionMessageHeaderSerializer()], ['accounts', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_7__.publicKey)(), {\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })], ['blockhash', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_8__.string)({\n    encoding: _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_9__.base58,\n    size: 32\n  })], ['instructions', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)(getCompiledInstructionSerializer(), {\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })], ['addressLookupTables', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)(getCompiledAddressLookupTableSerializer(), {\n    size: version === 'legacy' ? 0 : (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })]]);\n  const getTransactionVersionSerializer = () => ({\n    description: 'TransactionVersion',\n    fixedSize: null,\n    maxSize: 1,\n    serialize: value => {\n      if (value === 'legacy') return new Uint8Array([]);\n      return new Uint8Array([TRANSACTION_VERSION_FLAG | value]);\n    },\n    deserialize: (bytes, offset = 0) => {\n      const slice = bytes.slice(offset);\n      if (slice.length === 0 || (slice[0] & TRANSACTION_VERSION_FLAG) === 0) {\n        return ['legacy', offset];\n      }\n      const version = slice[0] & TRANSACTION_VERSION_MASK;\n      if (version > 0) {\n        throw new _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_10__.SdkError(`Unsupported transaction version: ${version}.`);\n      }\n      return [version, offset + 1];\n    }\n  });\n  const getTransactionMessageHeaderSerializer = () => (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__.struct)([['numRequiredSignatures', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)()], ['numReadonlySignedAccounts', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)()], ['numReadonlyUnsignedAccounts', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)()]]);\n  const getCompiledInstructionSerializer = () => (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__.struct)([['programIndex', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)()], ['accountIndexes', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)(), {\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })], ['data', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_5__.bytes)({\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })]]);\n  const getCompiledAddressLookupTableSerializer = () => (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_3__.struct)([['publicKey', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_7__.publicKey)()], ['writableIndexes', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)(), {\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })], ['readonlyIndexes', (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_4__.array)((0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_11__.u8)(), {\n    size: (0,_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.shortU16)()\n  })]]);\n  return {\n    create,\n    serialize,\n    deserialize,\n    serializeMessage,\n    deserializeMessage\n  };\n}\n\n\n//# sourceMappingURL=createWeb3JsTransactionFactory.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXRyYW5zYWN0aW9uLWZhY3Rvcnktd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sX3gybGNqZm1rZW1ubWI2dHd4a212dmVvZGc0L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktdHJhbnNhY3Rpb24tZmFjdG9yeS13ZWIzanMvZGlzdC9lc20vY3JlYXRlV2ViM0pzVHJhbnNhY3Rpb25GYWN0b3J5Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2dGO0FBQzdCO0FBQ2hEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtHQUF3QjtBQUNsRCxvQkFBb0IsMkZBQWlCO0FBQ3JDLGtDQUFrQyxpRUFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQWEsQ0FBQyw0RUFBTSxpQkFBaUIsMkVBQUssQ0FBQywyRUFBSztBQUN2RDtBQUNBLEtBQUs7QUFDTCxZQUFZLDhFQUFRO0FBQ3BCLEtBQUssMEJBQTBCLDJFQUFLO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwrREFBK0QsNEVBQU0sb0hBQW9ILDJFQUFLLENBQUMsK0VBQVM7QUFDeE0sVUFBVSw4RUFBUTtBQUNsQixHQUFHLGtCQUFrQiw0RUFBTTtBQUMzQixjQUFjLHdFQUFNO0FBQ3BCO0FBQ0EsR0FBRyxxQkFBcUIsMkVBQUs7QUFDN0IsVUFBVSw4RUFBUTtBQUNsQixHQUFHLDRCQUE0QiwyRUFBSztBQUNwQyxxQ0FBcUMsOEVBQVE7QUFDN0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFRLHFDQUFxQyxRQUFRO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzREFBc0QsNEVBQU0sNEJBQTRCLHlFQUFFLG1DQUFtQyx5RUFBRSxxQ0FBcUMseUVBQUU7QUFDdEssaURBQWlELDRFQUFNLG1CQUFtQix5RUFBRSx3QkFBd0IsMkVBQUssQ0FBQyx5RUFBRTtBQUM1RyxVQUFVLDhFQUFRO0FBQ2xCLEdBQUcsYUFBYSwyRUFBSztBQUNyQixVQUFVLDhFQUFRO0FBQ2xCLEdBQUc7QUFDSCx3REFBd0QsNEVBQU0sZ0JBQWdCLCtFQUFTLHlCQUF5QiwyRUFBSyxDQUFDLHlFQUFFO0FBQ3hILFVBQVUsOEVBQVE7QUFDbEIsR0FBRyx3QkFBd0IsMkVBQUssQ0FBQyx5RUFBRTtBQUNuQyxVQUFVLDhFQUFRO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQztBQUMxQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIcFxcT25lRHJpdmVcXERlc2t0b3BcXEJyb2tpZXMtbWludC1wYWdlLW1haW5cXGJhbWJvb1xcbm9kZV9tb2R1bGVzXFwucG5wbVxcQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXRyYW5zYWN0aW9uLWZhY3Rvcnktd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sX3gybGNqZm1rZW1ubWI2dHd4a212dmVvZGc0XFxub2RlX21vZHVsZXNcXEBtZXRhcGxleC1mb3VuZGF0aW9uXFx1bWktdHJhbnNhY3Rpb24tZmFjdG9yeS13ZWIzanNcXGRpc3RcXGVzbVxcY3JlYXRlV2ViM0pzVHJhbnNhY3Rpb25GYWN0b3J5Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZGtFcnJvciB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaSc7XG5pbXBvcnQgeyBtYXBTZXJpYWxpemVyLCBzdHJ1Y3QsIGFycmF5LCBieXRlcywgc2hvcnRVMTYsIHB1YmxpY0tleSwgc3RyaW5nLCBiYXNlNTgsIHU4IH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vdW1pL3NlcmlhbGl6ZXJzJztcbmltcG9ydCB7IHRvV2ViM0pzTWVzc2FnZUZyb21JbnB1dCwgZnJvbVdlYjNKc01lc3NhZ2UgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzJztcbmltcG9ydCB7IFZlcnNpb25lZFRyYW5zYWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuY29uc3QgVFJBTlNBQ1RJT05fVkVSU0lPTl9GTEFHID0gMHg4MDtcbmNvbnN0IFRSQU5TQUNUSU9OX1ZFUlNJT05fTUFTSyA9IDB4N2Y7XG5mdW5jdGlvbiBjcmVhdGVXZWIzSnNUcmFuc2FjdGlvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IGNyZWF0ZSA9IGlucHV0ID0+IHtcbiAgICBjb25zdCB3ZWIzSnNNZXNzYWdlID0gdG9XZWIzSnNNZXNzYWdlRnJvbUlucHV0KGlucHV0KTtcbiAgICBjb25zdCBtZXNzYWdlID0gZnJvbVdlYjNKc01lc3NhZ2Uod2ViM0pzTWVzc2FnZSk7XG4gICAgY29uc3Qgd2ViM0pzVHJhbnNhY3Rpb24gPSBuZXcgVmVyc2lvbmVkVHJhbnNhY3Rpb24od2ViM0pzTWVzc2FnZSwgaW5wdXQuc2lnbmF0dXJlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBzZXJpYWxpemVkTWVzc2FnZTogc2VyaWFsaXplTWVzc2FnZShtZXNzYWdlKSxcbiAgICAgIHNpZ25hdHVyZXM6IHdlYjNKc1RyYW5zYWN0aW9uLnNpZ25hdHVyZXNcbiAgICB9O1xuICB9O1xuICBjb25zdCBzZXJpYWxpemUgPSB0cmFuc2FjdGlvbiA9PiBnZXRUcmFuc2FjdGlvblNlcmlhbGl6ZXIoKS5zZXJpYWxpemUodHJhbnNhY3Rpb24pO1xuICBjb25zdCBkZXNlcmlhbGl6ZSA9IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9PiBnZXRUcmFuc2FjdGlvblNlcmlhbGl6ZXIoKS5kZXNlcmlhbGl6ZShzZXJpYWxpemVkVHJhbnNhY3Rpb24pWzBdO1xuICBjb25zdCBzZXJpYWxpemVNZXNzYWdlID0gbWVzc2FnZSA9PiBnZXRUcmFuc2FjdGlvbk1lc3NhZ2VTZXJpYWxpemVyKCkuc2VyaWFsaXplKG1lc3NhZ2UpO1xuICBjb25zdCBkZXNlcmlhbGl6ZU1lc3NhZ2UgPSBzZXJpYWxpemVkTWVzc2FnZSA9PiBnZXRUcmFuc2FjdGlvbk1lc3NhZ2VTZXJpYWxpemVyKCkuZGVzZXJpYWxpemUoc2VyaWFsaXplZE1lc3NhZ2UpWzBdO1xuICBjb25zdCBnZXRUcmFuc2FjdGlvblNlcmlhbGl6ZXIgPSAoKSA9PiAoe1xuICAgIC4uLm1hcFNlcmlhbGl6ZXIoc3RydWN0KFtbJ3NpZ25hdHVyZXMnLCBhcnJheShieXRlcyh7XG4gICAgICBzaXplOiA2NFxuICAgIH0pLCB7XG4gICAgICBzaXplOiBzaG9ydFUxNigpXG4gICAgfSldLCBbJ3NlcmlhbGl6ZWRNZXNzYWdlJywgYnl0ZXMoKV1dKSwgdmFsdWUgPT4gdmFsdWUsIHZhbHVlID0+ICh7XG4gICAgICAuLi52YWx1ZSxcbiAgICAgIG1lc3NhZ2U6IGRlc2VyaWFsaXplTWVzc2FnZSh2YWx1ZS5zZXJpYWxpemVkTWVzc2FnZSlcbiAgICB9KSksXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2FjdGlvbidcbiAgfSk7XG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uTWVzc2FnZVNlcmlhbGl6ZXIgPSAoKSA9PiAoe1xuICAgIGRlc2NyaXB0aW9uOiAnVHJhbnNhY3Rpb25NZXNzYWdlJyxcbiAgICBmaXhlZFNpemU6IG51bGwsXG4gICAgbWF4U2l6ZTogbnVsbCxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSBnZXRUcmFuc2FjdGlvbk1lc3NhZ2VTZXJpYWxpemVyRm9yVmVyc2lvbih2YWx1ZS52ZXJzaW9uKTtcbiAgICAgIHJldHVybiBzZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogKGJ5dGVzLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgICBjb25zdCBbdmVyc2lvbl0gPSBnZXRUcmFuc2FjdGlvblZlcnNpb25TZXJpYWxpemVyKCkuZGVzZXJpYWxpemUoYnl0ZXMsIG9mZnNldCk7XG4gICAgICBjb25zdCBzZXJpYWxpemVyID0gZ2V0VHJhbnNhY3Rpb25NZXNzYWdlU2VyaWFsaXplckZvclZlcnNpb24odmVyc2lvbik7XG4gICAgICByZXR1cm4gc2VyaWFsaXplci5kZXNlcmlhbGl6ZShieXRlcywgb2Zmc2V0KTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBnZXRUcmFuc2FjdGlvbk1lc3NhZ2VTZXJpYWxpemVyRm9yVmVyc2lvbiA9IHZlcnNpb24gPT4gc3RydWN0KFtbJ3ZlcnNpb24nLCBnZXRUcmFuc2FjdGlvblZlcnNpb25TZXJpYWxpemVyKCldLCBbJ2hlYWRlcicsIGdldFRyYW5zYWN0aW9uTWVzc2FnZUhlYWRlclNlcmlhbGl6ZXIoKV0sIFsnYWNjb3VudHMnLCBhcnJheShwdWJsaWNLZXkoKSwge1xuICAgIHNpemU6IHNob3J0VTE2KClcbiAgfSldLCBbJ2Jsb2NraGFzaCcsIHN0cmluZyh7XG4gICAgZW5jb2Rpbmc6IGJhc2U1OCxcbiAgICBzaXplOiAzMlxuICB9KV0sIFsnaW5zdHJ1Y3Rpb25zJywgYXJyYXkoZ2V0Q29tcGlsZWRJbnN0cnVjdGlvblNlcmlhbGl6ZXIoKSwge1xuICAgIHNpemU6IHNob3J0VTE2KClcbiAgfSldLCBbJ2FkZHJlc3NMb29rdXBUYWJsZXMnLCBhcnJheShnZXRDb21waWxlZEFkZHJlc3NMb29rdXBUYWJsZVNlcmlhbGl6ZXIoKSwge1xuICAgIHNpemU6IHZlcnNpb24gPT09ICdsZWdhY3knID8gMCA6IHNob3J0VTE2KClcbiAgfSldXSk7XG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uVmVyc2lvblNlcmlhbGl6ZXIgPSAoKSA9PiAoe1xuICAgIGRlc2NyaXB0aW9uOiAnVHJhbnNhY3Rpb25WZXJzaW9uJyxcbiAgICBmaXhlZFNpemU6IG51bGwsXG4gICAgbWF4U2l6ZTogMSxcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2xlZ2FjeScpIHJldHVybiBuZXcgVWludDhBcnJheShbXSk7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1RSQU5TQUNUSU9OX1ZFUlNJT05fRkxBRyB8IHZhbHVlXSk7XG4gICAgfSxcbiAgICBkZXNlcmlhbGl6ZTogKGJ5dGVzLCBvZmZzZXQgPSAwKSA9PiB7XG4gICAgICBjb25zdCBzbGljZSA9IGJ5dGVzLnNsaWNlKG9mZnNldCk7XG4gICAgICBpZiAoc2xpY2UubGVuZ3RoID09PSAwIHx8IChzbGljZVswXSAmIFRSQU5TQUNUSU9OX1ZFUlNJT05fRkxBRykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFsnbGVnYWN5Jywgb2Zmc2V0XTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZlcnNpb24gPSBzbGljZVswXSAmIFRSQU5TQUNUSU9OX1ZFUlNJT05fTUFTSztcbiAgICAgIGlmICh2ZXJzaW9uID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgU2RrRXJyb3IoYFVuc3VwcG9ydGVkIHRyYW5zYWN0aW9uIHZlcnNpb246ICR7dmVyc2lvbn0uYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3ZlcnNpb24sIG9mZnNldCArIDFdO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uTWVzc2FnZUhlYWRlclNlcmlhbGl6ZXIgPSAoKSA9PiBzdHJ1Y3QoW1snbnVtUmVxdWlyZWRTaWduYXR1cmVzJywgdTgoKV0sIFsnbnVtUmVhZG9ubHlTaWduZWRBY2NvdW50cycsIHU4KCldLCBbJ251bVJlYWRvbmx5VW5zaWduZWRBY2NvdW50cycsIHU4KCldXSk7XG4gIGNvbnN0IGdldENvbXBpbGVkSW5zdHJ1Y3Rpb25TZXJpYWxpemVyID0gKCkgPT4gc3RydWN0KFtbJ3Byb2dyYW1JbmRleCcsIHU4KCldLCBbJ2FjY291bnRJbmRleGVzJywgYXJyYXkodTgoKSwge1xuICAgIHNpemU6IHNob3J0VTE2KClcbiAgfSldLCBbJ2RhdGEnLCBieXRlcyh7XG4gICAgc2l6ZTogc2hvcnRVMTYoKVxuICB9KV1dKTtcbiAgY29uc3QgZ2V0Q29tcGlsZWRBZGRyZXNzTG9va3VwVGFibGVTZXJpYWxpemVyID0gKCkgPT4gc3RydWN0KFtbJ3B1YmxpY0tleScsIHB1YmxpY0tleSgpXSwgWyd3cml0YWJsZUluZGV4ZXMnLCBhcnJheSh1OCgpLCB7XG4gICAgc2l6ZTogc2hvcnRVMTYoKVxuICB9KV0sIFsncmVhZG9ubHlJbmRleGVzJywgYXJyYXkodTgoKSwge1xuICAgIHNpemU6IHNob3J0VTE2KClcbiAgfSldXSk7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlLFxuICAgIHNlcmlhbGl6ZSxcbiAgICBkZXNlcmlhbGl6ZSxcbiAgICBzZXJpYWxpemVNZXNzYWdlLFxuICAgIGRlc2VyaWFsaXplTWVzc2FnZVxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVXZWIzSnNUcmFuc2FjdGlvbkZhY3RvcnkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVdlYjNKc1RyYW5zYWN0aW9uRmFjdG9yeS5tanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/createWeb3JsTransactionFactory.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/plugin.mjs":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/plugin.mjs ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   web3JsTransactionFactory: () => (/* binding */ web3JsTransactionFactory)\n/* harmony export */ });\n/* harmony import */ var _createWeb3JsTransactionFactory_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWeb3JsTransactionFactory.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/createWeb3JsTransactionFactory.mjs\");\n\n\nconst web3JsTransactionFactory = () => ({\n  install(umi) {\n    umi.transactions = (0,_createWeb3JsTransactionFactory_mjs__WEBPACK_IMPORTED_MODULE_0__.createWeb3JsTransactionFactory)();\n  }\n});\n\n\n//# sourceMappingURL=plugin.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXRyYW5zYWN0aW9uLWZhY3Rvcnktd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sX3gybGNqZm1rZW1ubWI2dHd4a212dmVvZGc0L25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktdHJhbnNhY3Rpb24tZmFjdG9yeS13ZWIzanMvZGlzdC9lc20vcGx1Z2luLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRjs7QUFFdEY7QUFDQTtBQUNBLHVCQUF1QixtR0FBOEI7QUFDckQ7QUFDQSxDQUFDOztBQUVtQztBQUNwQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxIcFxcT25lRHJpdmVcXERlc2t0b3BcXEJyb2tpZXMtbWludC1wYWdlLW1haW5cXGJhbWJvb1xcbm9kZV9tb2R1bGVzXFwucG5wbVxcQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXRyYW5zYWN0aW9uLWZhY3Rvcnktd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sX3gybGNqZm1rZW1ubWI2dHd4a212dmVvZGc0XFxub2RlX21vZHVsZXNcXEBtZXRhcGxleC1mb3VuZGF0aW9uXFx1bWktdHJhbnNhY3Rpb24tZmFjdG9yeS13ZWIzanNcXGRpc3RcXGVzbVxccGx1Z2luLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXZWIzSnNUcmFuc2FjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2NyZWF0ZVdlYjNKc1RyYW5zYWN0aW9uRmFjdG9yeS5tanMnO1xuXG5jb25zdCB3ZWIzSnNUcmFuc2FjdGlvbkZhY3RvcnkgPSAoKSA9PiAoe1xuICBpbnN0YWxsKHVtaSkge1xuICAgIHVtaS50cmFuc2FjdGlvbnMgPSBjcmVhdGVXZWIzSnNUcmFuc2FjdGlvbkZhY3RvcnkoKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IHdlYjNKc1RyYW5zYWN0aW9uRmFjdG9yeSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGx1Z2luLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-transaction-factory-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@sol_x2lcjfmkemnmb6twxkmvveodg4/node_modules/@metaplex-foundation/umi-transaction-factory-web3js/dist/esm/plugin.mjs\n");

/***/ })

};
;