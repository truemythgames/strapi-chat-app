"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), user = ref1[0], setUser = ref1[1];\n    var handlesubmit = function(e) {\n        e.preventDefault();\n        console.log(\"clicked\");\n        var id = Math.trunc(Math.random() * 1000000);\n        var account = {\n            id: id\n        };\n        var SECRET = \"this is a secret\";\n        var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(account, SECRET);\n        var message = \"http://localhost:3000/chat/\".concat(token);\n        var data = {\n            email: email,\n            message: message\n        };\n        var strapiData = {\n            data: {\n                id: id,\n                username: user,\n                email: email,\n                token: token\n            }\n        };\n        fetch(\"http://localhost:1337/api/accounts\", {\n            method: \"POST\",\n            headers: {\n                \"Content-type\": \"application/json\"\n            },\n            body: JSON.stringify(strapiData)\n        }).then(function() {\n            var _ref = _asyncToGenerator(C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                return C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = console;\n                            _ctx.next = 3;\n                            return res.json();\n                        case 3:\n                            _ctx.t1 = _ctx.sent;\n                            _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(res) {\n                return _ref.apply(this, arguments);\n            };\n        }()).catch(function(err) {\n            return console.log(err.message);\n        });\n        fetch(\"/api/mail\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then(function() {\n            var _ref = _asyncToGenerator(C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {\n                return C_Users_user_Downloads_Important_Strapi_strapified_chat_next_chat_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"fetching\");\n                            if (!(res.status === 200)) {\n                                _ctx.next = 9;\n                                break;\n                            }\n                            _ctx.t0 = console;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            _ctx.t1 = _ctx.sent;\n                            _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                            _ctx.next = 14;\n                            break;\n                        case 9:\n                            _ctx.t2 = console;\n                            _ctx.next = 12;\n                            return res.json();\n                        case 12:\n                            _ctx.t3 = _ctx.sent;\n                            _ctx.t2.log.call(_ctx.t2, _ctx.t3);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(res) {\n                return _ref.apply(this, arguments);\n            };\n        }()).catch(function(err) {\n            return console.log(err.message);\n        });\n        setEmail(\"\");\n        setUser(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    htmlFor: \"user\",\n                    children: \"Username: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"user\",\n                    value: user,\n                    onChange: function(e) {\n                        return setUser(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    htmlFor: \"email\",\n                    children: \"Email: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    id: \"email\",\n                    value: email,\n                    onChange: function(e) {\n                        return setEmail(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    onClick: handlesubmit\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\index.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3dCQUFJOzs7Ozs7Z0JBQ3pDOzs7OztZQUNILENBQ047Q0FDSDtHQTlFdUJMLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZXN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJylcbiAgICBjb25zdCBpZCA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICAgIGxldCBhY2NvdW50ID0ge1xuICAgICAgaWQsXG4gICAgfTtcbiAgICBjb25zdCBTRUNSRVQgPSBcInRoaXMgaXMgYSBzZWNyZXRcIjtcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKGFjY291bnQsIFNFQ1JFVCk7XG4gICAgbGV0IG1lc3NhZ2UgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoYXQvJHt0b2tlbn1gO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZW1haWwsIC8vIFVzZXIncyBlbWFpbFxuICAgICAgbWVzc2FnZSxcbiAgICB9O1xuXG4gICAgbGV0IHN0cmFwaURhdGEgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkLFxuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHRva2VuLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hY2NvdW50c1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdHJhcGlEYXRhKSxcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5qc29uKCkpO1xuICAgIH0pLmNhdGNoKChlcnIpPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgICBmZXRjaChcIi9hcGkvbWFpbFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBQT1NUIHJlcXVlc3QgdG8gL2FwaS8vbWFpbFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KVxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nXCIpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzLmpzb24oKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzLmpzb24oKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgICBzZXRFbWFpbChcIlwiKTtcbiAgICBzZXRVc2VyKFwiXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJcIj5Vc2VybmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwidXNlclwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8vIEdldHRpbmcgdGhlIGlucHV0c1xuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVzdWJtaXR9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJqd3QiLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlc3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwiTWF0aCIsInRydW5jIiwicmFuZG9tIiwiYWNjb3VudCIsIlNFQ1JFVCIsInRva2VuIiwic2lnbiIsIm1lc3NhZ2UiLCJkYXRhIiwic3RyYXBpRGF0YSIsInVzZXJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZm9ybSIsIm1haW4iLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJiciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});