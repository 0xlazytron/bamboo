"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee";
exports.ids = ["vendor-chunks/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/createWeb3JsRpc.mjs":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/createWeb3JsRpc.mjs ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeb3JsRpc: () => (/* binding */ createWeb3JsRpc)\n/* harmony export */ });\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/Cluster.mjs\");\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/DateTime.mjs\");\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/Amount.mjs\");\n/* harmony import */ var _metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @metaplex-foundation/umi */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi@0.9.2/node_modules/@metaplex-foundation/umi/dist/esm/Account.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @metaplex-foundation/umi-web3js-adapters */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_54tljps4nuilpt3br5y566ni4i/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/PublicKey.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @metaplex-foundation/umi-web3js-adapters */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-web3js-adapters@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js_54tljps4nuilpt3br5y566ni4i/node_modules/@metaplex-foundation/umi-web3js-adapters/dist/esm/TransactionMessage.mjs\");\n/* harmony import */ var _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @metaplex-foundation/umi/serializers */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-serializers-encodings@0.8.9/node_modules/@metaplex-foundation/umi-serializers-encodings/dist/esm/base58.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(ssr)/./node_modules/.pnpm/@solana+web3.js@1.98.0_bufferutil@4.0.9_encoding@0.1.13_utf-8-validate@5.0.10/node_modules/@solana/web3.js/lib/index.esm.js\");\n\n\n\n\n\nfunction createWeb3JsRpc(context, endpointOrConnection, rpcOptions) {\n  let connection = null;\n  const getConnection = () => {\n    if (connection) {\n      return connection;\n    }\n    if (typeof endpointOrConnection === 'string') {\n      connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(endpointOrConnection, rpcOptions);\n    } else {\n      connection = endpointOrConnection;\n    }\n    return connection;\n  };\n  const cluster = (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_1__.resolveClusterFromEndpoint)(getConnection().rpcEndpoint);\n  const getAccount = async (publicKey, options = {}) => {\n    const account = await getConnection().getAccountInfo((0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(publicKey), options);\n    return parseMaybeAccount(account, publicKey);\n  };\n  const getAccounts = async (publicKeys, options = {}) => {\n    const accounts = await getConnection().getMultipleAccountsInfo(publicKeys.map(_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey), options);\n    return accounts.map((account, index) => parseMaybeAccount(account, publicKeys[index]));\n  };\n  const getProgramAccounts = async (programId, options = {}) => {\n    const accounts = await getConnection().getProgramAccounts((0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(programId), {\n      ...options,\n      filters: options.filters?.map(filter => parseDataFilter(filter))\n    });\n    return accounts.map(({\n      pubkey,\n      account\n    }) => parseAccount(account, (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)(pubkey)));\n  };\n  const getBlockTime = async (slot,\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  _options = {}) => {\n    const blockTime = await getConnection().getBlockTime(slot);\n    return blockTime ? (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_3__.dateTime)(blockTime) : null;\n  };\n  const getBalance = async (publicKey, options = {}) => {\n    const balanceInLamports = await getConnection().getBalance((0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(publicKey), options);\n    return (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports)(balanceInLamports);\n  };\n  const getRent = async (bytes, options = {}) => {\n    const rentFor = bytes => getConnection().getMinimumBalanceForRentExemption(bytes, options.commitment);\n    if (options.includesHeaderBytes ?? false) {\n      const headerRent = await rentFor(0);\n      const rentPerByte = BigInt(headerRent) / BigInt(_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_5__.ACCOUNT_HEADER_SIZE);\n      return (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports)(rentPerByte * BigInt(bytes));\n    }\n    return (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports)(await rentFor(bytes));\n  };\n  const getLatestBlockhash = async (options = {}) => getConnection().getLatestBlockhash(options);\n  const getTransaction = async (signature, options = {}) => {\n    const response = await getConnection().getTransaction(_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.deserialize(signature)[0], {\n      commitment: options.commitment,\n      maxSupportedTransactionVersion: 0\n    });\n    if (!response) {\n      return null;\n    }\n    if (!response.meta) {\n      // TODO: Custom error.\n      throw new Error('Transaction meta is missing.');\n    }\n    const {\n      transaction,\n      meta\n    } = response;\n    const message = (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_7__.fromWeb3JsMessage)(transaction.message);\n    const mapPublicKey = key => (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(key));\n    const mapTokenBalance = tokenBalance => ({\n      accountIndex: tokenBalance.accountIndex,\n      amount: (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.createAmount)(tokenBalance.uiTokenAmount.amount, 'splToken', tokenBalance.uiTokenAmount.decimals),\n      mint: mapPublicKey(tokenBalance.mint),\n      owner: tokenBalance.owner ? mapPublicKey(tokenBalance.owner) : null\n    });\n    return {\n      message,\n      serializedMessage: context.transactions.serializeMessage(message),\n      signatures: transaction.signatures.map(_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.serialize),\n      meta: {\n        fee: (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports)(meta.fee),\n        logs: meta.logMessages ?? [],\n        preBalances: meta.preBalances.map(_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports),\n        postBalances: meta.postBalances.map(_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports),\n        preTokenBalances: (meta.preTokenBalances ?? []).map(mapTokenBalance),\n        postTokenBalances: (meta.postTokenBalances ?? []).map(mapTokenBalance),\n        innerInstructions: meta.innerInstructions?.map(inner => ({\n          index: inner.index,\n          instructions: inner.instructions.map(instruction => ({\n            programIndex: instruction.programIdIndex,\n            accountIndexes: instruction.accounts,\n            data: _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.serialize(instruction.data)\n          }))\n        })) ?? null,\n        loadedAddresses: {\n          writable: (meta.loadedAddresses?.writable ?? []).map(_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey),\n          readonly: (meta.loadedAddresses?.readonly ?? []).map(_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)\n        },\n        computeUnitsConsumed: meta.computeUnitsConsumed ? BigInt(meta.computeUnitsConsumed) : null,\n        err: meta.err\n      }\n    };\n  };\n  const getSignatureStatuses = async (signatures, options = {}) => {\n    const response = await getConnection().getSignatureStatuses(signatures.map(signature => _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.deserialize(signature)[0]), {\n      searchTransactionHistory: options?.searchTransactionHistory ?? false\n    });\n    return response.value.map(status => {\n      if (!status) return null;\n      return {\n        slot: status.slot,\n        confirmations: status.confirmations,\n        error: status.err,\n        commitment: status.confirmationStatus ?? null\n      };\n    });\n  };\n  const accountExists = async (publicKey, options = {}) => !(0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.isZeroAmount)(await getBalance(publicKey, options));\n  const airdrop = async (publicKey, amount, options = {}) => {\n    const signature = await getConnection().requestAirdrop((0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(publicKey), Number(amount.basisPoints));\n    if (options.strategy) {\n      await confirmTransaction(_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.serialize(signature), options);\n      return;\n    }\n    await confirmTransaction(_metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.serialize(signature), {\n      ...options,\n      strategy: {\n        type: 'blockhash',\n        ...(await getLatestBlockhash())\n      }\n    });\n  };\n  const call = async (method, params, options = {}) => {\n    const client = getConnection()._rpcClient;\n    const resolvedParams = resolveCallParams(params ? [...params] : [], options.commitment, options.extra);\n    return new Promise((resolve, reject) => {\n      const callback = (error, response) => error ? reject(error) : resolve(response.result);\n      if (options.id) {\n        client.request(method, resolvedParams, options.id, callback);\n      } else {\n        client.request(method, resolvedParams, callback);\n      }\n    });\n  };\n  const sendTransaction = async (transaction, options = {}) => {\n    try {\n      const signature = await getConnection().sendRawTransaction(context.transactions.serialize(transaction), options);\n      return _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.serialize(signature);\n    } catch (error) {\n      let resolvedError = null;\n      if (error instanceof Error && 'logs' in error) {\n        resolvedError = context.programs.resolveError(error, transaction);\n      }\n      throw resolvedError || error;\n    }\n  };\n  const confirmTransaction = async (signature, options) => getConnection().confirmTransaction(parseConfirmStrategy(signature, options), options.commitment);\n  return {\n    getEndpoint: () => getConnection().rpcEndpoint,\n    getCluster: () => cluster,\n    getAccount,\n    getAccounts,\n    getProgramAccounts,\n    getBlockTime,\n    getBalance,\n    getRent,\n    getSlot: async (options = {}) => getConnection().getSlot(options),\n    getLatestBlockhash,\n    getTransaction,\n    getSignatureStatuses,\n    accountExists,\n    airdrop,\n    call,\n    sendTransaction,\n    confirmTransaction,\n    get connection() {\n      return getConnection();\n    }\n  };\n}\nfunction parseAccount(account, publicKey) {\n  return {\n    executable: account.executable,\n    owner: (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.fromWeb3JsPublicKey)(account.owner),\n    lamports: (0,_metaplex_foundation_umi__WEBPACK_IMPORTED_MODULE_4__.lamports)(account.lamports),\n    rentEpoch: account.rentEpoch ? BigInt(account.rentEpoch) : undefined,\n    publicKey,\n    data: new Uint8Array(account.data)\n  };\n}\nfunction parseMaybeAccount(account, publicKey) {\n  return account ? {\n    ...parseAccount(account, publicKey),\n    exists: true\n  } : {\n    exists: false,\n    publicKey\n  };\n}\nfunction parseDataFilter(filter) {\n  if (!('memcmp' in filter)) return filter;\n  const {\n    bytes,\n    ...rest\n  } = filter.memcmp;\n  return {\n    memcmp: {\n      ...rest,\n      bytes: _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.deserialize(bytes)[0]\n    }\n  };\n}\nfunction parseConfirmStrategy(signature, options) {\n  if (options.strategy.type === 'blockhash') {\n    return {\n      ...options.strategy,\n      signature: _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.deserialize(signature)[0]\n    };\n  }\n  return {\n    ...options.strategy,\n    signature: _metaplex_foundation_umi_serializers__WEBPACK_IMPORTED_MODULE_6__.base58.deserialize(signature)[0],\n    nonceAccountPubkey: (0,_metaplex_foundation_umi_web3js_adapters__WEBPACK_IMPORTED_MODULE_2__.toWeb3JsPublicKey)(options.strategy.nonceAccountPubkey)\n  };\n}\nfunction resolveCallParams(args, commitment, extra) {\n  if (!commitment && !extra) return args;\n  let options = {};\n  if (commitment) options.commitment = commitment;\n  if (extra) options = {\n    ...options,\n    ...extra\n  };\n  args.push(options);\n  return args;\n}\n\n\n//# sourceMappingURL=createWeb3JsRpc.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXJwYy13ZWIzanNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yX0Bzb2xhbmErd2ViMy5qc0AxLjk4X3NhNjN3NnRicHFxcmR5eGZtdmF6eW5uaWVlL25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktcnBjLXdlYjNqcy9kaXN0L2VzbS9jcmVhdGVXZWIzSnNScGMubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEySTtBQUN0QjtBQUN2RDtBQUNOOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBVTtBQUNqQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0ZBQTBCO0FBQzVDLG1EQUFtRDtBQUNuRCx5REFBeUQsMkZBQWlCO0FBQzFFO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsa0ZBQWtGLHVGQUFpQjtBQUNuRztBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELDhEQUE4RCwyRkFBaUI7QUFDL0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQiw2RkFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsdUJBQXVCLGtFQUFRO0FBQy9CO0FBQ0EsbURBQW1EO0FBQ25ELCtEQUErRCwyRkFBaUI7QUFDaEYsV0FBVyxrRUFBUTtBQUNuQjtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxzREFBc0QseUVBQW1CO0FBQ3pFLGFBQWEsa0VBQVE7QUFDckI7QUFDQSxXQUFXLGtFQUFRO0FBQ25CO0FBQ0EsZ0RBQWdEO0FBQ2hELHVEQUF1RDtBQUN2RCwwREFBMEQsd0VBQU07QUFDaEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixvQkFBb0IsMkZBQWlCO0FBQ3JDLGdDQUFnQyw2RkFBbUIsS0FBSyxzREFBUztBQUNqRTtBQUNBO0FBQ0EsY0FBYyxzRUFBWTtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx3RUFBTTtBQUNuRDtBQUNBLGFBQWEsa0VBQVE7QUFDckI7QUFDQSwwQ0FBMEMsOERBQVE7QUFDbEQsNENBQTRDLDhEQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdFQUFNO0FBQ3hCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSwrREFBK0QseUZBQW1CO0FBQ2xGLCtEQUErRCx5RkFBbUI7QUFDbEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQsNEZBQTRGLHdFQUFNO0FBQ2xHO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzREFBc0QsTUFBTSxzRUFBWTtBQUN4RSx3REFBd0Q7QUFDeEQsMkRBQTJELDJGQUFpQjtBQUM1RTtBQUNBLCtCQUErQix3RUFBTTtBQUNyQztBQUNBO0FBQ0EsNkJBQTZCLHdFQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLGFBQWEsd0VBQU07QUFDbkIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZGQUFtQjtBQUM5QixjQUFjLGtFQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3RUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3RUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0VBQU07QUFDckIsd0JBQXdCLDJGQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkI7QUFDM0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSHBcXE9uZURyaXZlXFxEZXNrdG9wXFxCcm9raWVzLW1pbnQtcGFnZS1tYWluXFxiYW1ib29cXG5vZGVfbW9kdWxlc1xcLnBucG1cXEBtZXRhcGxleC1mb3VuZGF0aW9uK3VtaS1ycGMtd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sYW5hK3dlYjMuanNAMS45OF9zYTYzdzZ0YnBxcXJkeXhmbXZhenlubmllZVxcbm9kZV9tb2R1bGVzXFxAbWV0YXBsZXgtZm91bmRhdGlvblxcdW1pLXJwYy13ZWIzanNcXGRpc3RcXGVzbVxcY3JlYXRlV2ViM0pzUnBjLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlQ2x1c3RlckZyb21FbmRwb2ludCwgZGF0ZVRpbWUsIGxhbXBvcnRzLCBBQ0NPVU5UX0hFQURFUl9TSVpFLCBpc1plcm9BbW91bnQsIGNyZWF0ZUFtb3VudCB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaSc7XG5pbXBvcnQgeyB0b1dlYjNKc1B1YmxpY0tleSwgZnJvbVdlYjNKc1B1YmxpY0tleSwgZnJvbVdlYjNKc01lc3NhZ2UgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi91bWktd2ViM2pzLWFkYXB0ZXJzJztcbmltcG9ydCB7IGJhc2U1OCB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL3VtaS9zZXJpYWxpemVycyc7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXkgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVXZWIzSnNScGMoY29udGV4dCwgZW5kcG9pbnRPckNvbm5lY3Rpb24sIHJwY09wdGlvbnMpIHtcbiAgbGV0IGNvbm5lY3Rpb24gPSBudWxsO1xuICBjb25zdCBnZXRDb25uZWN0aW9uID0gKCkgPT4ge1xuICAgIGlmIChjb25uZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmRwb2ludE9yQ29ubmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihlbmRwb2ludE9yQ29ubmVjdGlvbiwgcnBjT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbm5lY3Rpb24gPSBlbmRwb2ludE9yQ29ubmVjdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gIH07XG4gIGNvbnN0IGNsdXN0ZXIgPSByZXNvbHZlQ2x1c3RlckZyb21FbmRwb2ludChnZXRDb25uZWN0aW9uKCkucnBjRW5kcG9pbnQpO1xuICBjb25zdCBnZXRBY2NvdW50ID0gYXN5bmMgKHB1YmxpY0tleSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGdldENvbm5lY3Rpb24oKS5nZXRBY2NvdW50SW5mbyh0b1dlYjNKc1B1YmxpY0tleShwdWJsaWNLZXkpLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcGFyc2VNYXliZUFjY291bnQoYWNjb3VudCwgcHVibGljS2V5KTtcbiAgfTtcbiAgY29uc3QgZ2V0QWNjb3VudHMgPSBhc3luYyAocHVibGljS2V5cywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuZ2V0TXVsdGlwbGVBY2NvdW50c0luZm8ocHVibGljS2V5cy5tYXAodG9XZWIzSnNQdWJsaWNLZXkpLCBvcHRpb25zKTtcbiAgICByZXR1cm4gYWNjb3VudHMubWFwKChhY2NvdW50LCBpbmRleCkgPT4gcGFyc2VNYXliZUFjY291bnQoYWNjb3VudCwgcHVibGljS2V5c1tpbmRleF0pKTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJvZ3JhbUFjY291bnRzID0gYXN5bmMgKHByb2dyYW1JZCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuZ2V0UHJvZ3JhbUFjY291bnRzKHRvV2ViM0pzUHVibGljS2V5KHByb2dyYW1JZCksIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBmaWx0ZXJzOiBvcHRpb25zLmZpbHRlcnM/Lm1hcChmaWx0ZXIgPT4gcGFyc2VEYXRhRmlsdGVyKGZpbHRlcikpXG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY291bnRzLm1hcCgoe1xuICAgICAgcHVia2V5LFxuICAgICAgYWNjb3VudFxuICAgIH0pID0+IHBhcnNlQWNjb3VudChhY2NvdW50LCBmcm9tV2ViM0pzUHVibGljS2V5KHB1YmtleSkpKTtcbiAgfTtcbiAgY29uc3QgZ2V0QmxvY2tUaW1lID0gYXN5bmMgKHNsb3QsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgX29wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGJsb2NrVGltZSA9IGF3YWl0IGdldENvbm5lY3Rpb24oKS5nZXRCbG9ja1RpbWUoc2xvdCk7XG4gICAgcmV0dXJuIGJsb2NrVGltZSA/IGRhdGVUaW1lKGJsb2NrVGltZSkgOiBudWxsO1xuICB9O1xuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKHB1YmxpY0tleSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYmFsYW5jZUluTGFtcG9ydHMgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuZ2V0QmFsYW5jZSh0b1dlYjNKc1B1YmxpY0tleShwdWJsaWNLZXkpLCBvcHRpb25zKTtcbiAgICByZXR1cm4gbGFtcG9ydHMoYmFsYW5jZUluTGFtcG9ydHMpO1xuICB9O1xuICBjb25zdCBnZXRSZW50ID0gYXN5bmMgKGJ5dGVzLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCByZW50Rm9yID0gYnl0ZXMgPT4gZ2V0Q29ubmVjdGlvbigpLmdldE1pbmltdW1CYWxhbmNlRm9yUmVudEV4ZW1wdGlvbihieXRlcywgb3B0aW9ucy5jb21taXRtZW50KTtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlc0hlYWRlckJ5dGVzID8/IGZhbHNlKSB7XG4gICAgICBjb25zdCBoZWFkZXJSZW50ID0gYXdhaXQgcmVudEZvcigwKTtcbiAgICAgIGNvbnN0IHJlbnRQZXJCeXRlID0gQmlnSW50KGhlYWRlclJlbnQpIC8gQmlnSW50KEFDQ09VTlRfSEVBREVSX1NJWkUpO1xuICAgICAgcmV0dXJuIGxhbXBvcnRzKHJlbnRQZXJCeXRlICogQmlnSW50KGJ5dGVzKSk7XG4gICAgfVxuICAgIHJldHVybiBsYW1wb3J0cyhhd2FpdCByZW50Rm9yKGJ5dGVzKSk7XG4gIH07XG4gIGNvbnN0IGdldExhdGVzdEJsb2NraGFzaCA9IGFzeW5jIChvcHRpb25zID0ge30pID0+IGdldENvbm5lY3Rpb24oKS5nZXRMYXRlc3RCbG9ja2hhc2gob3B0aW9ucyk7XG4gIGNvbnN0IGdldFRyYW5zYWN0aW9uID0gYXN5bmMgKHNpZ25hdHVyZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuZ2V0VHJhbnNhY3Rpb24oYmFzZTU4LmRlc2VyaWFsaXplKHNpZ25hdHVyZSlbMF0sIHtcbiAgICAgIGNvbW1pdG1lbnQ6IG9wdGlvbnMuY29tbWl0bWVudCxcbiAgICAgIG1heFN1cHBvcnRlZFRyYW5zYWN0aW9uVmVyc2lvbjogMFxuICAgIH0pO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlLm1ldGEpIHtcbiAgICAgIC8vIFRPRE86IEN1c3RvbSBlcnJvci5cbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNhY3Rpb24gbWV0YSBpcyBtaXNzaW5nLicpO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2FjdGlvbixcbiAgICAgIG1ldGFcbiAgICB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgbWVzc2FnZSA9IGZyb21XZWIzSnNNZXNzYWdlKHRyYW5zYWN0aW9uLm1lc3NhZ2UpO1xuICAgIGNvbnN0IG1hcFB1YmxpY0tleSA9IGtleSA9PiBmcm9tV2ViM0pzUHVibGljS2V5KG5ldyBQdWJsaWNLZXkoa2V5KSk7XG4gICAgY29uc3QgbWFwVG9rZW5CYWxhbmNlID0gdG9rZW5CYWxhbmNlID0+ICh7XG4gICAgICBhY2NvdW50SW5kZXg6IHRva2VuQmFsYW5jZS5hY2NvdW50SW5kZXgsXG4gICAgICBhbW91bnQ6IGNyZWF0ZUFtb3VudCh0b2tlbkJhbGFuY2UudWlUb2tlbkFtb3VudC5hbW91bnQsICdzcGxUb2tlbicsIHRva2VuQmFsYW5jZS51aVRva2VuQW1vdW50LmRlY2ltYWxzKSxcbiAgICAgIG1pbnQ6IG1hcFB1YmxpY0tleSh0b2tlbkJhbGFuY2UubWludCksXG4gICAgICBvd25lcjogdG9rZW5CYWxhbmNlLm93bmVyID8gbWFwUHVibGljS2V5KHRva2VuQmFsYW5jZS5vd25lcikgOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBzZXJpYWxpemVkTWVzc2FnZTogY29udGV4dC50cmFuc2FjdGlvbnMuc2VyaWFsaXplTWVzc2FnZShtZXNzYWdlKSxcbiAgICAgIHNpZ25hdHVyZXM6IHRyYW5zYWN0aW9uLnNpZ25hdHVyZXMubWFwKGJhc2U1OC5zZXJpYWxpemUpLFxuICAgICAgbWV0YToge1xuICAgICAgICBmZWU6IGxhbXBvcnRzKG1ldGEuZmVlKSxcbiAgICAgICAgbG9nczogbWV0YS5sb2dNZXNzYWdlcyA/PyBbXSxcbiAgICAgICAgcHJlQmFsYW5jZXM6IG1ldGEucHJlQmFsYW5jZXMubWFwKGxhbXBvcnRzKSxcbiAgICAgICAgcG9zdEJhbGFuY2VzOiBtZXRhLnBvc3RCYWxhbmNlcy5tYXAobGFtcG9ydHMpLFxuICAgICAgICBwcmVUb2tlbkJhbGFuY2VzOiAobWV0YS5wcmVUb2tlbkJhbGFuY2VzID8/IFtdKS5tYXAobWFwVG9rZW5CYWxhbmNlKSxcbiAgICAgICAgcG9zdFRva2VuQmFsYW5jZXM6IChtZXRhLnBvc3RUb2tlbkJhbGFuY2VzID8/IFtdKS5tYXAobWFwVG9rZW5CYWxhbmNlKSxcbiAgICAgICAgaW5uZXJJbnN0cnVjdGlvbnM6IG1ldGEuaW5uZXJJbnN0cnVjdGlvbnM/Lm1hcChpbm5lciA9PiAoe1xuICAgICAgICAgIGluZGV4OiBpbm5lci5pbmRleCxcbiAgICAgICAgICBpbnN0cnVjdGlvbnM6IGlubmVyLmluc3RydWN0aW9ucy5tYXAoaW5zdHJ1Y3Rpb24gPT4gKHtcbiAgICAgICAgICAgIHByb2dyYW1JbmRleDogaW5zdHJ1Y3Rpb24ucHJvZ3JhbUlkSW5kZXgsXG4gICAgICAgICAgICBhY2NvdW50SW5kZXhlczogaW5zdHJ1Y3Rpb24uYWNjb3VudHMsXG4gICAgICAgICAgICBkYXRhOiBiYXNlNTguc2VyaWFsaXplKGluc3RydWN0aW9uLmRhdGEpXG4gICAgICAgICAgfSkpXG4gICAgICAgIH0pKSA/PyBudWxsLFxuICAgICAgICBsb2FkZWRBZGRyZXNzZXM6IHtcbiAgICAgICAgICB3cml0YWJsZTogKG1ldGEubG9hZGVkQWRkcmVzc2VzPy53cml0YWJsZSA/PyBbXSkubWFwKGZyb21XZWIzSnNQdWJsaWNLZXkpLFxuICAgICAgICAgIHJlYWRvbmx5OiAobWV0YS5sb2FkZWRBZGRyZXNzZXM/LnJlYWRvbmx5ID8/IFtdKS5tYXAoZnJvbVdlYjNKc1B1YmxpY0tleSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZVVuaXRzQ29uc3VtZWQ6IG1ldGEuY29tcHV0ZVVuaXRzQ29uc3VtZWQgPyBCaWdJbnQobWV0YS5jb21wdXRlVW5pdHNDb25zdW1lZCkgOiBudWxsLFxuICAgICAgICBlcnI6IG1ldGEuZXJyXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgY29uc3QgZ2V0U2lnbmF0dXJlU3RhdHVzZXMgPSBhc3luYyAoc2lnbmF0dXJlcywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuZ2V0U2lnbmF0dXJlU3RhdHVzZXMoc2lnbmF0dXJlcy5tYXAoc2lnbmF0dXJlID0+IGJhc2U1OC5kZXNlcmlhbGl6ZShzaWduYXR1cmUpWzBdKSwge1xuICAgICAgc2VhcmNoVHJhbnNhY3Rpb25IaXN0b3J5OiBvcHRpb25zPy5zZWFyY2hUcmFuc2FjdGlvbkhpc3RvcnkgPz8gZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UudmFsdWUubWFwKHN0YXR1cyA9PiB7XG4gICAgICBpZiAoIXN0YXR1cykgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzbG90OiBzdGF0dXMuc2xvdCxcbiAgICAgICAgY29uZmlybWF0aW9uczogc3RhdHVzLmNvbmZpcm1hdGlvbnMsXG4gICAgICAgIGVycm9yOiBzdGF0dXMuZXJyLFxuICAgICAgICBjb21taXRtZW50OiBzdGF0dXMuY29uZmlybWF0aW9uU3RhdHVzID8/IG51bGxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFjY291bnRFeGlzdHMgPSBhc3luYyAocHVibGljS2V5LCBvcHRpb25zID0ge30pID0+ICFpc1plcm9BbW91bnQoYXdhaXQgZ2V0QmFsYW5jZShwdWJsaWNLZXksIG9wdGlvbnMpKTtcbiAgY29uc3QgYWlyZHJvcCA9IGFzeW5jIChwdWJsaWNLZXksIGFtb3VudCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZ2V0Q29ubmVjdGlvbigpLnJlcXVlc3RBaXJkcm9wKHRvV2ViM0pzUHVibGljS2V5KHB1YmxpY0tleSksIE51bWJlcihhbW91bnQuYmFzaXNQb2ludHMpKTtcbiAgICBpZiAob3B0aW9ucy5zdHJhdGVneSkge1xuICAgICAgYXdhaXQgY29uZmlybVRyYW5zYWN0aW9uKGJhc2U1OC5zZXJpYWxpemUoc2lnbmF0dXJlKSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IGNvbmZpcm1UcmFuc2FjdGlvbihiYXNlNTguc2VyaWFsaXplKHNpZ25hdHVyZSksIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBzdHJhdGVneToge1xuICAgICAgICB0eXBlOiAnYmxvY2toYXNoJyxcbiAgICAgICAgLi4uKGF3YWl0IGdldExhdGVzdEJsb2NraGFzaCgpKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBjYWxsID0gYXN5bmMgKG1ldGhvZCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBnZXRDb25uZWN0aW9uKCkuX3JwY0NsaWVudDtcbiAgICBjb25zdCByZXNvbHZlZFBhcmFtcyA9IHJlc29sdmVDYWxsUGFyYW1zKHBhcmFtcyA/IFsuLi5wYXJhbXNdIDogW10sIG9wdGlvbnMuY29tbWl0bWVudCwgb3B0aW9ucy5leHRyYSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGVycm9yLCByZXNwb25zZSkgPT4gZXJyb3IgPyByZWplY3QoZXJyb3IpIDogcmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuICAgICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgY2xpZW50LnJlcXVlc3QobWV0aG9kLCByZXNvbHZlZFBhcmFtcywgb3B0aW9ucy5pZCwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpZW50LnJlcXVlc3QobWV0aG9kLCByZXNvbHZlZFBhcmFtcywgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAodHJhbnNhY3Rpb24sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBnZXRDb25uZWN0aW9uKCkuc2VuZFJhd1RyYW5zYWN0aW9uKGNvbnRleHQudHJhbnNhY3Rpb25zLnNlcmlhbGl6ZSh0cmFuc2FjdGlvbiksIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIGJhc2U1OC5zZXJpYWxpemUoc2lnbmF0dXJlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbGV0IHJlc29sdmVkRXJyb3IgPSBudWxsO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgJ2xvZ3MnIGluIGVycm9yKSB7XG4gICAgICAgIHJlc29sdmVkRXJyb3IgPSBjb250ZXh0LnByb2dyYW1zLnJlc29sdmVFcnJvcihlcnJvciwgdHJhbnNhY3Rpb24pO1xuICAgICAgfVxuICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvciB8fCBlcnJvcjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNvbmZpcm1UcmFuc2FjdGlvbiA9IGFzeW5jIChzaWduYXR1cmUsIG9wdGlvbnMpID0+IGdldENvbm5lY3Rpb24oKS5jb25maXJtVHJhbnNhY3Rpb24ocGFyc2VDb25maXJtU3RyYXRlZ3koc2lnbmF0dXJlLCBvcHRpb25zKSwgb3B0aW9ucy5jb21taXRtZW50KTtcbiAgcmV0dXJuIHtcbiAgICBnZXRFbmRwb2ludDogKCkgPT4gZ2V0Q29ubmVjdGlvbigpLnJwY0VuZHBvaW50LFxuICAgIGdldENsdXN0ZXI6ICgpID0+IGNsdXN0ZXIsXG4gICAgZ2V0QWNjb3VudCxcbiAgICBnZXRBY2NvdW50cyxcbiAgICBnZXRQcm9ncmFtQWNjb3VudHMsXG4gICAgZ2V0QmxvY2tUaW1lLFxuICAgIGdldEJhbGFuY2UsXG4gICAgZ2V0UmVudCxcbiAgICBnZXRTbG90OiBhc3luYyAob3B0aW9ucyA9IHt9KSA9PiBnZXRDb25uZWN0aW9uKCkuZ2V0U2xvdChvcHRpb25zKSxcbiAgICBnZXRMYXRlc3RCbG9ja2hhc2gsXG4gICAgZ2V0VHJhbnNhY3Rpb24sXG4gICAgZ2V0U2lnbmF0dXJlU3RhdHVzZXMsXG4gICAgYWNjb3VudEV4aXN0cyxcbiAgICBhaXJkcm9wLFxuICAgIGNhbGwsXG4gICAgc2VuZFRyYW5zYWN0aW9uLFxuICAgIGNvbmZpcm1UcmFuc2FjdGlvbixcbiAgICBnZXQgY29ubmVjdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRDb25uZWN0aW9uKCk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VBY2NvdW50KGFjY291bnQsIHB1YmxpY0tleSkge1xuICByZXR1cm4ge1xuICAgIGV4ZWN1dGFibGU6IGFjY291bnQuZXhlY3V0YWJsZSxcbiAgICBvd25lcjogZnJvbVdlYjNKc1B1YmxpY0tleShhY2NvdW50Lm93bmVyKSxcbiAgICBsYW1wb3J0czogbGFtcG9ydHMoYWNjb3VudC5sYW1wb3J0cyksXG4gICAgcmVudEVwb2NoOiBhY2NvdW50LnJlbnRFcG9jaCA/IEJpZ0ludChhY2NvdW50LnJlbnRFcG9jaCkgOiB1bmRlZmluZWQsXG4gICAgcHVibGljS2V5LFxuICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KGFjY291bnQuZGF0YSlcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlTWF5YmVBY2NvdW50KGFjY291bnQsIHB1YmxpY0tleSkge1xuICByZXR1cm4gYWNjb3VudCA/IHtcbiAgICAuLi5wYXJzZUFjY291bnQoYWNjb3VudCwgcHVibGljS2V5KSxcbiAgICBleGlzdHM6IHRydWVcbiAgfSA6IHtcbiAgICBleGlzdHM6IGZhbHNlLFxuICAgIHB1YmxpY0tleVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRhRmlsdGVyKGZpbHRlcikge1xuICBpZiAoISgnbWVtY21wJyBpbiBmaWx0ZXIpKSByZXR1cm4gZmlsdGVyO1xuICBjb25zdCB7XG4gICAgYnl0ZXMsXG4gICAgLi4ucmVzdFxuICB9ID0gZmlsdGVyLm1lbWNtcDtcbiAgcmV0dXJuIHtcbiAgICBtZW1jbXA6IHtcbiAgICAgIC4uLnJlc3QsXG4gICAgICBieXRlczogYmFzZTU4LmRlc2VyaWFsaXplKGJ5dGVzKVswXVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ29uZmlybVN0cmF0ZWd5KHNpZ25hdHVyZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5zdHJhdGVneS50eXBlID09PSAnYmxvY2toYXNoJykge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc2lnbmF0dXJlOiBiYXNlNTguZGVzZXJpYWxpemUoc2lnbmF0dXJlKVswXVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5vcHRpb25zLnN0cmF0ZWd5LFxuICAgIHNpZ25hdHVyZTogYmFzZTU4LmRlc2VyaWFsaXplKHNpZ25hdHVyZSlbMF0sXG4gICAgbm9uY2VBY2NvdW50UHVia2V5OiB0b1dlYjNKc1B1YmxpY0tleShvcHRpb25zLnN0cmF0ZWd5Lm5vbmNlQWNjb3VudFB1YmtleSlcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVDYWxsUGFyYW1zKGFyZ3MsIGNvbW1pdG1lbnQsIGV4dHJhKSB7XG4gIGlmICghY29tbWl0bWVudCAmJiAhZXh0cmEpIHJldHVybiBhcmdzO1xuICBsZXQgb3B0aW9ucyA9IHt9O1xuICBpZiAoY29tbWl0bWVudCkgb3B0aW9ucy5jb21taXRtZW50ID0gY29tbWl0bWVudDtcbiAgaWYgKGV4dHJhKSBvcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgLi4uZXh0cmFcbiAgfTtcbiAgYXJncy5wdXNoKG9wdGlvbnMpO1xuICByZXR1cm4gYXJncztcbn1cblxuZXhwb3J0IHsgY3JlYXRlV2ViM0pzUnBjIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGVXZWIzSnNScGMubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/createWeb3JsRpc.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/plugin.mjs":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/plugin.mjs ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   web3JsRpc: () => (/* binding */ web3JsRpc)\n/* harmony export */ });\n/* harmony import */ var _createWeb3JsRpc_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWeb3JsRpc.mjs */ \"(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/createWeb3JsRpc.mjs\");\n\n\nfunction web3JsRpc(endpointOrConnection, rpcOptions) {\n  return {\n    install(umi) {\n      umi.rpc = typeof endpointOrConnection === 'string' ? (0,_createWeb3JsRpc_mjs__WEBPACK_IMPORTED_MODULE_0__.createWeb3JsRpc)(umi, endpointOrConnection, rpcOptions) : (0,_createWeb3JsRpc_mjs__WEBPACK_IMPORTED_MODULE_0__.createWeb3JsRpc)(umi, endpointOrConnection);\n    }\n  };\n}\n\n\n//# sourceMappingURL=plugin.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pLXJwYy13ZWIzanNAMC45LjJfQG1ldGFwbGV4LWZvdW5kYXRpb24rdW1pQDAuOS4yX0Bzb2xhbmErd2ViMy5qc0AxLjk4X3NhNjN3NnRicHFxcmR5eGZtdmF6eW5uaWVlL25vZGVfbW9kdWxlcy9AbWV0YXBsZXgtZm91bmRhdGlvbi91bWktcnBjLXdlYjNqcy9kaXN0L2VzbS9wbHVnaW4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSwyREFBMkQscUVBQWUsMENBQTBDLHFFQUFlO0FBQ25JO0FBQ0E7QUFDQTs7QUFFcUI7QUFDckIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSHBcXE9uZURyaXZlXFxEZXNrdG9wXFxCcm9raWVzLW1pbnQtcGFnZS1tYWluXFxiYW1ib29cXG5vZGVfbW9kdWxlc1xcLnBucG1cXEBtZXRhcGxleC1mb3VuZGF0aW9uK3VtaS1ycGMtd2ViM2pzQDAuOS4yX0BtZXRhcGxleC1mb3VuZGF0aW9uK3VtaUAwLjkuMl9Ac29sYW5hK3dlYjMuanNAMS45OF9zYTYzdzZ0YnBxcXJkeXhmbXZhenlubmllZVxcbm9kZV9tb2R1bGVzXFxAbWV0YXBsZXgtZm91bmRhdGlvblxcdW1pLXJwYy13ZWIzanNcXGRpc3RcXGVzbVxccGx1Z2luLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXZWIzSnNScGMgfSBmcm9tICcuL2NyZWF0ZVdlYjNKc1JwYy5tanMnO1xuXG5mdW5jdGlvbiB3ZWIzSnNScGMoZW5kcG9pbnRPckNvbm5lY3Rpb24sIHJwY09wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBpbnN0YWxsKHVtaSkge1xuICAgICAgdW1pLnJwYyA9IHR5cGVvZiBlbmRwb2ludE9yQ29ubmVjdGlvbiA9PT0gJ3N0cmluZycgPyBjcmVhdGVXZWIzSnNScGModW1pLCBlbmRwb2ludE9yQ29ubmVjdGlvbiwgcnBjT3B0aW9ucykgOiBjcmVhdGVXZWIzSnNScGModW1pLCBlbmRwb2ludE9yQ29ubmVjdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyB3ZWIzSnNScGMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdpbi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@metaplex-foundation+umi-rpc-web3js@0.9.2_@metaplex-foundation+umi@0.9.2_@solana+web3.js@1.98_sa63w6tbpqqrdyxfmvazynniee/node_modules/@metaplex-foundation/umi-rpc-web3js/dist/esm/plugin.mjs\n");

/***/ })

};
;