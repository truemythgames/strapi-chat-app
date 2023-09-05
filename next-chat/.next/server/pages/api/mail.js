"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mail";
exports.ids = ["pages/api/mail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/mail.js":
/*!***************************!*\
  !*** ./pages/api/mail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        secure: \"true\",\n        auth: {\n            user: \"hello@truemythgames.com\",\n            pass: \"jujwevvdzlqfdzjm\"\n        }\n    });\n    const mailData = {\n        from: \"Chat API\",\n        to: req.body.email,\n        subject: `Verify your email`,\n        text: req.body.message\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) {\n            console.log(err);\n            return res.status(500).json({\n                message: `an error occurred ${err}`\n            });\n        }\n        res.status(200).json({\n            message: info\n        });\n    });\n};\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs2QkFBZSxvQ0FBVUEsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakMsTUFBTUMsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7SUFFeEMsTUFBTUMsV0FBVyxHQUFHRixVQUFVLENBQUNHLGVBQWUsQ0FBQztRQUM3Q0MsSUFBSSxFQUFFLEdBQUc7UUFDVEMsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsSUFBSSxFQUFFO1lBQ0pDLElBQUksRUFBRSx5QkFBeUI7WUFDL0JDLElBQUksRUFBRSxrQkFBa0I7U0FDekI7S0FDRixDQUFDO0lBRUYsTUFBTUMsUUFBUSxHQUFHO1FBQ2ZDLElBQUksRUFBRSxVQUFVO1FBQ2hCQyxFQUFFLEVBQUVkLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDQyxLQUFLO1FBQ2xCQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QkMsSUFBSSxFQUFFbEIsR0FBRyxDQUFDZSxJQUFJLENBQUNJLE9BQU87S0FDdkI7SUFDRGYsV0FBVyxDQUFDZ0IsUUFBUSxDQUFDUixRQUFRLEVBQUUsU0FBVVMsR0FBRyxFQUFFQyxJQUFJLEVBQUU7UUFDbEQsSUFBSUQsR0FBRyxFQUFFO1lBQ1BFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPcEIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVQLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFRSxHQUFHLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUN0RTtRQUNEcEIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRVAsT0FBTyxFQUFFRyxJQUFJO1NBQUUsQ0FBQyxDQUFDO0tBQ3pDLENBQUMsQ0FBQztDQUNKO0FBRU0sTUFBTUssTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsZ0JBQWdCLEVBQUUsSUFBSTtLQUN2QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jaGF0Ly4vcGFnZXMvYXBpL21haWwuanM/N2QxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3Qgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xuXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHBvcnQ6IDQ2NSxcbiAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXG4gICAgc2VjdXJlOiBcInRydWVcIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBcImhlbGxvQHRydWVteXRoZ2FtZXMuY29tXCIsXG4gICAgICBwYXNzOiBcImp1andldnZkemxxZmR6am1cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBtYWlsRGF0YSA9IHtcbiAgICBmcm9tOiBcIkNoYXQgQVBJXCIsXG4gICAgdG86IHJlcS5ib2R5LmVtYWlsLFxuICAgIHN1YmplY3Q6IGBWZXJpZnkgeW91ciBlbWFpbGAsXG4gICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSxcbiAgfTtcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogYGFuIGVycm9yIG9jY3VycmVkICR7ZXJyfWAgfSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogaW5mbyB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXG4gIH0sXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwiYm9keSIsImVtYWlsIiwic3ViamVjdCIsInRleHQiLCJtZXNzYWdlIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJjb25maWciLCJhcGkiLCJleHRlcm5hbFJlc29sdmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/mail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mail.js"));
module.exports = __webpack_exports__;

})();