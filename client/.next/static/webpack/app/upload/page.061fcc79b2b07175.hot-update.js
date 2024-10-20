"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/upload/page",{

/***/ "(app-pages-browser)/./controller/upload.js":
/*!******************************!*\
  !*** ./controller/upload.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\n\nconst api = \"http://100.89.95.174:4000\";\nconst upload = async (param)=>{\n    let { title, code, setMessage } = param;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {\n        position: \"bottom-center\",\n        autoClose: 2000,\n        hideProgressBar: false,\n        newestOnTop: false,\n        rtl: false,\n        pauseOnFocusLoss: true,\n        draggable: true,\n        theme: \"dark\"\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n        lineNumber: 8,\n        columnNumber: 13\n    }, undefined);\n    setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n            color: \"orange\",\n            fontSize: \"4vw\",\n            marginTop: \"-1vh\"\n        },\n        children: \"please wait...\"\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n        lineNumber: 20,\n        columnNumber: 7\n    }, undefined));\n    if ((title === null || title === void 0 ? void 0 : title.trim()) === \"\" || (code === null || code === void 0 ? void 0 : code.trim()) === \"\") {\n        setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                color: \"red\",\n                fontSize: \"4vw\",\n                marginTop: \"-1vh\"\n            },\n            children: \"all the fields are required!\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n            lineNumber: 27,\n            columnNumber: 10\n        }, undefined));\n        return;\n    }\n    setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        style: {\n            color: \"green\",\n            fontSize: \"4vw\",\n            marginTop: \"-1vh\"\n        },\n        children: \"upload...\"\n    }, void 0, false, {\n        fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, undefined));\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(api, \"/upload\"), {\n            code,\n            title\n        });\n        if (res.status === 200) setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                color: \"green\",\n                fontSize: \"4vw\",\n                marginTop: \"-1vh\"\n            },\n            children: \"upload successfull.\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined));\n        else setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                color: \"red\",\n                fontSize: \"4vw\",\n                marginTop: \"-1vh\"\n            },\n            children: \"upload failed.\"\n        }, void 0, false, {\n            fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined));\n    } catch (error) {\n        setMessage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                color: \"red\",\n                fontSize: \"4vw\",\n                marginTop: \"-1vh\"\n            },\n            children: [\n                \"upload failed: \",\n                error.message\n            ]\n        }, void 0, true, {\n            fileName: \"/data/data/com.termux/files/home/codeSaver/client/controller/upload.js\",\n            lineNumber: 56,\n            columnNumber: 10\n        }, undefined));\n        console.log(error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (upload);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyb2xsZXIvdXBsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQzZCO0FBRXZELE1BQU1HLE1BQU07QUFFWixNQUFNQyxTQUFTO1FBQU8sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTtrQkFFckMsOERBQUNOLDBEQUFjQTtRQUNmTyxVQUFTO1FBQ1RDLFdBQVc7UUFDWEMsaUJBQWlCO1FBQ2pCQyxhQUFhO1FBQ2JDLEtBQUs7UUFDTEMsZ0JBQWdCO1FBQ2hCQyxTQUFTO1FBQ1RDLE9BQU07Ozs7OztJQUdmUix5QkFDRyw4REFBQ1M7UUFBR0MsT0FBTztZQUFFQyxPQUFPO1lBQVVDLFVBQVU7WUFBT0MsV0FBVztRQUFPO2tCQUFHOzs7Ozs7SUFLdkUsSUFBSWYsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsSUFBSSxRQUFPLE1BQU1mLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWUsSUFBSSxRQUFPLElBQUk7UUFDOUNkLHlCQUNHLDhEQUFDUztZQUFHQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFPQyxVQUFVO2dCQUFPQyxXQUFXO1lBQU87c0JBQUc7Ozs7OztRQUlwRTtJQUNIO0lBRUFiLHlCQUNHLDhEQUFDUztRQUFHQyxPQUFPO1lBQUVDLE9BQU87WUFBU0MsVUFBVTtZQUFPQyxXQUFXO1FBQU87a0JBQUc7Ozs7OztJQUt0RSxJQUFJO1FBQ0QsTUFBTUUsTUFBTSxNQUFNdEIsNkNBQUtBLENBQUN1QixJQUFJLENBQUMsR0FBTyxPQUFKcEIsS0FBSSxZQUFVO1lBQUVHO1lBQU1EO1FBQU07UUFDNUQsSUFBSWlCLElBQUlFLE1BQU0sS0FBSyxLQUNoQmpCLHlCQUNHLDhEQUFDUztZQUFHQyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFTQyxVQUFVO2dCQUFPQyxXQUFXO1lBQU87c0JBQUc7Ozs7OzthQUt0RWIseUJBQ0csOERBQUNTO1lBQUdDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQU9DLFVBQVU7Z0JBQU9DLFdBQVc7WUFBTztzQkFBRzs7Ozs7O0lBSTFFLEVBQUUsT0FBT0ssT0FBTztRQUNibEIseUJBQ0csOERBQUNTO1lBQUdDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQU9DLFVBQVU7Z0JBQU9DLFdBQVc7WUFBTzs7Z0JBQUc7Z0JBQzlDSyxNQUFNQyxPQUFPOzs7Ozs7O1FBR25DQyxRQUFRQyxHQUFHLENBQUNIO0lBQ2Y7QUFDSDtBQUVBLCtEQUFlckIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250cm9sbGVyL3VwbG9hZC5qcz9iMmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5jb25zdCBhcGkgPSBcImh0dHA6Ly8xMDAuODkuOTUuMTc0OjQwMDBcIjtcblxuY29uc3QgdXBsb2FkID0gYXN5bmMgKHsgdGl0bGUsIGNvZGUsIHNldE1lc3NhZ2UgfSkgPT4ge1xuICAgXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgIHBvc2l0aW9uPSdib3R0b20tY2VudGVyJ1xuICAgICAgICAgICAgYXV0b0Nsb3NlPXsyMDAwfVxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIHRoZW1lPSdkYXJrJ1xuICAgICAgICAgLz5cbiAgIFxuICAgc2V0TWVzc2FnZShcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJvcmFuZ2VcIiwgZm9udFNpemU6IFwiNHZ3XCIsIG1hcmdpblRvcDogXCItMXZoXCIgfX0+XG4gICAgICAgICBwbGVhc2Ugd2FpdC4uLlxuICAgICAgPC9oMT5cbiAgICk7XG5cbiAgIGlmICh0aXRsZT8udHJpbSgpID09PSBcIlwiIHx8IGNvZGU/LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgc2V0TWVzc2FnZShcbiAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgZm9udFNpemU6IFwiNHZ3XCIsIG1hcmdpblRvcDogXCItMXZoXCIgfX0+XG4gICAgICAgICAgICBhbGwgdGhlIGZpZWxkcyBhcmUgcmVxdWlyZWQhXG4gICAgICAgICA8L2gxPlxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgIH1cblxuICAgc2V0TWVzc2FnZShcbiAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiLCBmb250U2l6ZTogXCI0dndcIiwgbWFyZ2luVG9wOiBcIi0xdmhcIiB9fT5cbiAgICAgICAgIHVwbG9hZC4uLlxuICAgICAgPC9oMT5cbiAgICk7XG5cbiAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaX0vdXBsb2FkYCwgeyBjb2RlLCB0aXRsZSB9KTtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApXG4gICAgICAgICBzZXRNZXNzYWdlKFxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIsIGZvbnRTaXplOiBcIjR2d1wiLCBtYXJnaW5Ub3A6IFwiLTF2aFwiIH19PlxuICAgICAgICAgICAgICAgdXBsb2FkIHN1Y2Nlc3NmdWxsLlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICk7XG4gICAgICBlbHNlXG4gICAgICAgICBzZXRNZXNzYWdlKFxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBmb250U2l6ZTogXCI0dndcIiwgbWFyZ2luVG9wOiBcIi0xdmhcIiB9fT5cbiAgICAgICAgICAgICAgIHVwbG9hZCBmYWlsZWQuXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgKTtcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRNZXNzYWdlKFxuICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBmb250U2l6ZTogXCI0dndcIiwgbWFyZ2luVG9wOiBcIi0xdmhcIiB9fT5cbiAgICAgICAgICAgIHVwbG9hZCBmYWlsZWQ6IHtlcnJvci5tZXNzYWdlfVxuICAgICAgICAgPC9oMT5cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGxvYWQ7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiYXBpIiwidXBsb2FkIiwidGl0bGUiLCJjb2RlIiwic2V0TWVzc2FnZSIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJydGwiLCJwYXVzZU9uRm9jdXNMb3NzIiwiZHJhZ2dhYmxlIiwidGhlbWUiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInRyaW0iLCJyZXMiLCJwb3N0Iiwic3RhdHVzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./controller/upload.js\n"));

/***/ })

});