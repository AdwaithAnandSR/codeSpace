"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const api = \"http://100.89.95.174:4000\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchHealth = async ()=>{\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(api, \"/health\"));\n            return res.status === 200;\n        } catch (error) {\n            alert(error.message);\n            console.error(\"Error fetching health:\", error);\n            return false;\n        }\n    };\n    const initApp = async ()=>{\n        const isConnected = await fetchHealth();\n        if (isConnected) {\n            router.push(\"/home\");\n        } else {\n            console.log(\"Retrying in 10 seconds...\");\n            setTimeout(initApp, 10000);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        initApp();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"80vh\",\n            fontSize: \"8vw\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"CodeSpace\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/page.js\",\n                lineNumber: 47,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastContainer, {\n                position: \"top-right\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true,\n                theme: \"light\"\n            }, void 0, false, {\n                fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/app/page.js\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDZTtBQUNWO0FBRW5CLFNBQVNJOztJQUNyQixNQUFNQyxNQUFNO0lBRVosTUFBTUMsU0FBU0osMERBQVNBO0lBRXhCLE1BQU1LLGNBQWM7UUFDakIsSUFBSTtZQUNELE1BQU1DLE1BQU0sTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxHQUFPLE9BQUpKLEtBQUk7WUFDbkMsT0FBT0csSUFBSUUsTUFBTSxLQUFLO1FBQ3pCLEVBQUUsT0FBT0MsT0FBTztZQUNiQyxNQUFNRCxNQUFNRSxPQUFPO1lBQ25CQyxRQUFRSCxLQUFLLENBQUMsMEJBQTBCQTtZQUN4QyxPQUFPO1FBQ1Y7SUFDSDtJQUVBLE1BQU1JLFVBQVU7UUFDYixNQUFNQyxjQUFjLE1BQU1UO1FBQzFCLElBQUlTLGFBQWE7WUFDZFYsT0FBT1csSUFBSSxDQUFDO1FBQ2YsT0FBTztZQUNKSCxRQUFRSSxHQUFHLENBQUM7WUFDWkMsV0FBV0osU0FBUztRQUN2QjtJQUNIO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1BZO0lBQ0g7SUFFQSxxQkFDRyw4REFBQ0s7UUFDRUMsT0FBTztZQUNKQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxRQUFRO1lBQ1JDLFVBQVU7UUFDYjs7MEJBQ0EsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNSQyxVQUFTO2dCQUNUQyxXQUFXO2dCQUNYQyxpQkFBaUI7Z0JBQ2pCQyxhQUFhO2dCQUNiQyxZQUFZO2dCQUNaQyxLQUFLO2dCQUNMQyxnQkFBZ0I7Z0JBQ2hCQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxPQUFNOzs7Ozs7Ozs7Ozs7QUFJUjtHQXREd0JsQzs7UUFHTkYsc0RBQVNBOzs7S0FISEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gTWFya3MgdGhlIGNvbXBvbmVudCBhcyBhIENsaWVudCBDb21wb25lbnRcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICBjb25zdCBhcGkgPSBcImh0dHA6Ly8xMDAuODkuOTUuMTc0OjQwMDBcIjtcbiAgIFxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgIGNvbnN0IGZldGNoSGVhbHRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGl9L2hlYWx0aGApO1xuICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgPT09IDIwMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGhlYWx0aDpcIiwgZXJyb3IpO1xuICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgIH1cbiAgIH07XG5cbiAgIGNvbnN0IGluaXRBcHAgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IGZldGNoSGVhbHRoKCk7XG4gICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyeWluZyBpbiAxMCBzZWNvbmRzLi4uXCIpO1xuICAgICAgICAgc2V0VGltZW91dChpbml0QXBwLCAxMDAwMCk7XG4gICAgICB9XG4gICB9O1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaW5pdEFwcCgpO1xuICAgfSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiOHZ3XCJcbiAgICAgICAgIH19PlxuICAgICAgICAgPGgxPkNvZGVTcGFjZTwvaDE+XG4gICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICBhdXRvQ2xvc2U9ezUwMDB9XG4gIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgY2xvc2VPbkNsaWNrXG4gIHJ0bD17ZmFsc2V9XG4gIHBhdXNlT25Gb2N1c0xvc3NcbiAgZHJhZ2dhYmxlXG4gIHBhdXNlT25Ib3ZlclxuICB0aGVtZT1cImxpZ2h0XCJcbi8+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSG9tZSIsImFwaSIsInJvdXRlciIsImZldGNoSGVhbHRoIiwicmVzIiwiZ2V0Iiwic3RhdHVzIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiaW5pdEFwcCIsImlzQ29ubmVjdGVkIiwicHVzaCIsImxvZyIsInNldFRpbWVvdXQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJmb250U2l6ZSIsImgxIiwiVG9hc3RDb250YWluZXIiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});