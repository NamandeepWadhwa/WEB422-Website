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

/***/ "./lib/authenticate.js":
/*!*****************************!*\
  !*** ./lib/authenticate.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: function() { return /* binding */ authenticateUser; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   isAuthenticated: function() { return /* binding */ isAuthenticated; },\n/* harmony export */   readToken: function() { return /* binding */ readToken; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; },\n/* harmony export */   removeToken: function() { return /* binding */ removeToken; }\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function authenticateUser(user, password) {\n    const res = await fetch(\"\".concat(\"http://localhost:8080/api/user\", \"/login\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        setToken(data.token);\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\nasync function registerUser(user, password, passwrod2) {\n    console(user, password, passwrod2);\n    const res = await fetch(\"\".concat(\"http://localhost:8080/api/user\", \"/register\"), {\n        method: \"POST\",\n        body: JSON.stringify({\n            userName: user,\n            password: password,\n            password2: passwrod2\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    });\n    const data = await res.json();\n    if (res.status === 200) {\n        return true;\n    } else {\n        throw new Error(data.message);\n    }\n}\nfunction setToken(token) {\n    localStorage.setItem(\"access_token\", token);\n}\nfunction getToken() {\n    try {\n        return localStorage.getItem(\"access_token\");\n    } catch (err) {\n        return null;\n    }\n}\nfunction removeToken() {\n    localStorage.removeItem(\"access_token\");\n}\nfunction readToken() {\n    try {\n        const token = getToken();\n        return token ? (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token) : null;\n    } catch (err) {\n        return \"\";\n    }\n}\nfunction isAuthenticated() {\n    const token = readToken();\n    return token ? true : false;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aGVudGljYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNSO0FBSXJCLGVBQWVFLGlCQUFpQkMsSUFBSSxFQUFFQyxRQUFRO0lBR2pELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsZ0NBQStCRSxFQUFDLFdBQVM7UUFDbEVDLFFBQVE7UUFFUkMsTUFBTUMsS0FBS0MsVUFBVTtZQUFFQyxVQUFVWDtZQUFNQyxVQUFVQTtRQUFTO1FBQzFEVyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNQyxPQUFPLE1BQU1YLElBQUlZO0lBRXZCLElBQUlaLElBQUlhLFdBQVcsS0FBSztRQUN0QkMsU0FBU0gsS0FBS0k7UUFDZCxPQUFPO0lBQ1QsT0FBTztRQUVMLE1BQU0sSUFBSUMsTUFBTUwsS0FBS007SUFDdkI7QUFDRjtBQUVPLGVBQWVDLGFBQWFwQixJQUFJLEVBQUVDLFFBQVEsRUFBQ29CLFNBQVM7SUFDekRDLFFBQVF0QixNQUFLQyxVQUFTb0I7SUFDdEIsTUFBTW5CLE1BQU0sTUFBTUMsTUFBTSxHQUFtQyxPQUFoQ0MsZ0NBQStCRSxFQUFDLGNBQVk7UUFDckVDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsVUFBVTtZQUFFQyxVQUFVWDtZQUFNQyxVQUFVQTtZQUFTc0IsV0FBVUY7UUFBUztRQUM3RVQsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsTUFBTUMsT0FBTyxNQUFNWCxJQUFJWTtJQUV2QixJQUFJWixJQUFJYSxXQUFXLEtBQUs7UUFFdEIsT0FBTztJQUNULE9BQU87UUFDTCxNQUFNLElBQUlHLE1BQU1MLEtBQUtNO0lBQ3ZCO0FBQ0Y7QUFFRixTQUFTSCxTQUFTQyxLQUFLO0lBQ25CTyxhQUFhQyxRQUFRLGdCQUFnQlI7QUFDdkM7QUFDTyxTQUFTUztJQUNkLElBQUk7UUFDRixPQUFPRixhQUFhRyxRQUFRO0lBQzlCLEVBQUUsT0FBT0MsS0FBSztRQUNaLE9BQU87SUFDVDtBQUNGO0FBQ08sU0FBU0M7SUFDZEwsYUFBYU0sV0FBVztBQUMxQjtBQUVPLFNBQVNDO0lBQ2QsSUFBSTtRQUNGLE1BQU1kLFFBQVFTO1FBQ2QsT0FBT1QsUUFBUXBCLHNEQUFVQSxDQUFDb0IsU0FBUztJQUNyQyxFQUFFLE9BQU9XLEtBQUs7UUFDWixPQUFPO0lBQ1Q7QUFDRjtBQUVPLFNBQVNJO0lBQ2QsTUFBTWYsUUFBUWM7SUFDZCxPQUFPZCxRQUFRLE9BQU87QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F1dGhlbnRpY2F0ZS5qcz9kMWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5pbXBvcnQgeyB1c2UgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgXHJcbiAgICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2xvZ2luYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlck5hbWU6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcih1c2VyLCBwYXNzd29yZCxwYXNzd3JvZDIpIHtcclxuICAgIGNvbnNvbGUodXNlcixwYXNzd29yZCxwYXNzd3JvZDIpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZWdpc3RlcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlck5hbWU6IHVzZXIsIHBhc3N3b3JkOiBwYXNzd29yZCxwYXNzd29yZDI6cGFzc3dyb2QyfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4pIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCB0b2tlbik7XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZWFkVG9rZW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgIHJldHVybiB0b2tlbiA/IGp3dF9kZWNvZGUodG9rZW4pIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlYWRUb2tlbigpO1xyXG4gICAgcmV0dXJuIHRva2VuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH0iXSwibmFtZXMiOlsiand0X2RlY29kZSIsInVzZSIsImF1dGhlbnRpY2F0ZVVzZXIiLCJ1c2VyIiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTmFtZSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInNldFRva2VuIiwidG9rZW4iLCJFcnJvciIsIm1lc3NhZ2UiLCJyZWdpc3RlclVzZXIiLCJwYXNzd3JvZDIiLCJjb25zb2xlIiwicGFzc3dvcmQyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImVyciIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsInJlYWRUb2tlbiIsImlzQXV0aGVudGljYXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/authenticate.js\n"));

/***/ })

});