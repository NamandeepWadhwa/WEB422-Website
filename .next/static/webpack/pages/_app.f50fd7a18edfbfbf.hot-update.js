"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/userData.js":
/*!*************************!*\
  !*** ./lib/userData.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToFavourites: function() { return /* binding */ addToFavourites; },\n/* harmony export */   addToHistory: function() { return /* binding */ addToHistory; },\n/* harmony export */   getFavourites: function() { return /* binding */ getFavourites; },\n/* harmony export */   getHistory: function() { return /* binding */ getHistory; },\n/* harmony export */   removeFromFavourites: function() { return /* binding */ removeFromFavourites; },\n/* harmony export */   removeFromHistory: function() { return /* binding */ removeFromHistory; }\n/* harmony export */ });\n/* harmony import */ var _authenticate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticate */ \"./lib/authenticate.js\");\n\nasync function addToFavourites(id) {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"/favourites/\").concat(id), {\n        method: \"PUT\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function removeFromFavourites(id) {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"/favourites/\").concat(id), {\n        method: \"DELETE\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function getFavourites() {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"//favourites\"), {\n        method: \"GET\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function addToHistory(id) {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"//history/\").concat(id), {\n        method: \"PUT\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function removeFromHistory(id) {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"/history/\").concat(id), {\n        method: \"DELETE\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\nasync function getHistory() {\n    const res = await fetch(\"\".concat(\"https://scary-earmuffs-ant.cyclic.app/api/user\", \"/history\"), {\n        method: \"GET\",\n        headers: {\n            \"Authorization\": \"JWT \".concat((0,_authenticate__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return data;\n    } else {\n        return [];\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlckRhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUVoQyxlQUFlQyxnQkFBZ0JDLEVBQUU7SUFFdkMsTUFBTUMsTUFBSyxNQUFNQyxNQUFNLEdBQWlERixPQUE5Q0csZ0RBQStCRSxFQUFDLGdCQUFpQixPQUFITCxLQUFNO1FBQzVFTSxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxpQkFBaUIsT0FBa0IsT0FBWFQsdURBQVFBO1FBQ3BDO0lBRUY7SUFDRSxNQUFNVSxPQUFPLE1BQU1QLElBQUlRO0lBQ3ZCLElBQUlSLElBQUlTLFdBQVcsS0FBSztRQUNwQixPQUFPRjtJQUNYLE9BQ0s7UUFDRCxPQUFPLEVBQUU7SUFDYjtBQUVKO0FBR1EsZUFBZUcscUJBQXFCWCxFQUFFO0lBRTFDLE1BQU1DLE1BQUssTUFBTUMsTUFBTSxHQUFpREYsT0FBOUNHLGdEQUErQkUsRUFBQyxnQkFBaUIsT0FBSEwsS0FBTTtRQUM1RU0sUUFBUTtRQUNSQyxTQUFTO1lBQ0wsaUJBQWlCLE9BQWtCLE9BQVhULHVEQUFRQTtRQUNwQztJQUVGO0lBQ0UsTUFBTVUsT0FBTyxNQUFNUCxJQUFJUTtJQUN2QixJQUFJUixJQUFJUyxXQUFXLEtBQUs7UUFDcEIsT0FBT0Y7SUFDWCxPQUNLO1FBQ0QsT0FBTyxFQUFFO0lBQ2I7QUFFSjtBQUVRLGVBQWVJO0lBRXJCLE1BQU1YLE1BQU0sTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsZ0RBQStCRSxFQUFDLGlCQUFlO1FBQ3hFQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxpQkFBaUIsT0FBa0IsT0FBWFQsdURBQVFBO1FBQ3BDO0lBRUY7SUFDRSxNQUFNVSxPQUFPLE1BQU1QLElBQUlRO0lBQ3ZCLElBQUlSLElBQUlTLFdBQVcsS0FBSztRQUNwQixPQUFPRjtJQUNYLE9BQ0s7UUFDRCxPQUFPLEVBQUU7SUFDYjtBQUVKO0FBRVEsZUFBZUssYUFBYWIsRUFBRTtJQUVwQyxNQUFNQyxNQUFLLE1BQU1DLE1BQU0sR0FBK0NGLE9BQTVDRyxnREFBK0JFLEVBQUMsY0FBZSxPQUFITCxLQUFNO1FBQzFFTSxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxpQkFBaUIsT0FBa0IsT0FBWFQsdURBQVFBO1FBQ3BDO0lBRUY7SUFDRSxNQUFNVSxPQUFPLE1BQU1QLElBQUlRO0lBQ3ZCLElBQUlSLElBQUlTLFdBQVcsS0FBSztRQUNwQixPQUFPRjtJQUNYLE9BQ0s7UUFDRCxPQUFPLEVBQUU7SUFDYjtBQUVKO0FBRVEsZUFBZU0sa0JBQWtCZCxFQUFFO0lBRXpDLE1BQU1DLE1BQUssTUFBTUMsTUFBTSxHQUE4Q0YsT0FBM0NHLGdEQUErQkUsRUFBQyxhQUFjLE9BQUhMLEtBQU07UUFDekVNLFFBQVE7UUFDUkMsU0FBUztZQUNMLGlCQUFpQixPQUFrQixPQUFYVCx1REFBUUE7UUFDcEM7SUFFRjtJQUNFLE1BQU1VLE9BQU8sTUFBTVAsSUFBSVE7SUFDdkIsSUFBSVIsSUFBSVMsV0FBVyxLQUFLO1FBQ3BCLE9BQU9GO0lBQ1gsT0FDSztRQUNELE9BQU8sRUFBRTtJQUNiO0FBRUo7QUFFTyxlQUFlTztJQUdwQixNQUFNZCxNQUFLLE1BQU1DLE1BQU0sR0FBbUMsT0FBaENDLGdEQUErQkUsRUFBQyxhQUFXO1FBQ25FQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxpQkFBaUIsT0FBa0IsT0FBWFQsdURBQVFBO1FBQ3BDO0lBRUY7SUFFRSxNQUFNVSxPQUFPLE1BQU1QLElBQUlRO0lBQ3ZCLElBQUlSLElBQUlTLFdBQVcsS0FBSztRQUNwQixPQUFPRjtJQUNYLE9BQ0s7UUFDRCxPQUFPLEVBQUU7SUFDYjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91c2VyRGF0YS5qcz9jNGI3Il0sInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQge2dldFRva2VufSBmcm9tICcuL2F1dGhlbnRpY2F0ZSdcclxuXHJcbmV4cG9ydCAgYXN5bmMgZnVuY3Rpb24gYWRkVG9GYXZvdXJpdGVzKGlkKXtcclxuXHJcbiAgY29uc3QgcmVzID1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9mYXZvdXJpdGVzLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBKV1QgJHtnZXRUb2tlbigpfWBcclxuICAgIH0sXHJcblxyXG4gIH0pXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvdXJpdGVzKGlkKXtcclxuXHJcbiAgICBjb25zdCByZXMgPWF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2Zhdm91cml0ZXMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEpXVCAke2dldFRva2VuKCl9YFxyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgfSlcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICBleHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGdldEZhdm91cml0ZXMoKXtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS8vZmF2b3VyaXRlc2AsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgSldUICR7Z2V0VG9rZW4oKX1gXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICB9KVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIGV4cG9ydCAgYXN5bmMgZnVuY3Rpb24gYWRkVG9IaXN0b3J5KGlkKXtcclxuXHJcbiAgICBjb25zdCByZXMgPWF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9Ly9oaXN0b3J5LyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBKV1QgJHtnZXRUb2tlbigpfWBcclxuICAgICAgfSxcclxuICBcclxuICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0ICBhc3luYyBmdW5jdGlvbiByZW1vdmVGcm9tSGlzdG9yeShpZCl7XHJcblxyXG4gICAgY29uc3QgcmVzID1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9oaXN0b3J5LyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBKV1QgJHtnZXRUb2tlbigpfWBcclxuICAgICAgfSxcclxuICBcclxuICAgIH0pXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvcnkoKXtcclxuXHJcbiAgIFxyXG4gICAgY29uc3QgcmVzID1hd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9oaXN0b3J5YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBKV1QgJHtnZXRUb2tlbigpfWBcclxuICAgICAgfSxcclxuICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgfSJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsImFkZFRvRmF2b3VyaXRlcyIsImlkIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInJlbW92ZUZyb21GYXZvdXJpdGVzIiwiZ2V0RmF2b3VyaXRlcyIsImFkZFRvSGlzdG9yeSIsInJlbW92ZUZyb21IaXN0b3J5IiwiZ2V0SGlzdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/userData.js\n"));

/***/ })

});