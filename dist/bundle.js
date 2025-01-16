/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst users_1 = __webpack_require__(/*! ./users */ \"./src/users.ts\");\nconst userInfo_1 = __webpack_require__(/*! ./userInfo */ \"./src/userInfo.ts\");\nfunction getUsersJobPositions(users) {\n    return users.map(user => {\n        const userInfo = userInfo_1.usersInfoArray.find(info => info.userid === user.userid);\n        if (userInfo) {\n            return {\n                name: user.name,\n                position: userInfo.organization.position,\n                age: userInfo.age,\n                gender: user.gender,\n            };\n        }\n        throw new Error(`No additional info found for user with id ${user.userid}`);\n    });\n}\nconst usersPositions = getUsersJobPositions(users_1.usersArray);\nconsole.log('userPositions', usersPositions);\n\n\n//# sourceURL=webpack://lesson_1/./src/index.ts?");

/***/ }),

/***/ "./src/userInfo.ts":
/*!*************************!*\
  !*** ./src/userInfo.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.usersInfoArray = void 0;\nexports.usersInfoArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        birthdate: '1982-02-17T21:00:00.000Z',\n        age: 40,\n        organization: {\n            name: 'Amazon',\n            position: 'General manager',\n        },\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        birthdate: '1988-02-17T21:00:00.000Z',\n        age: 34,\n        organization: {\n            name: 'Amazon',\n            position: 'Manager',\n        },\n    },\n];\n\n\n//# sourceURL=webpack://lesson_1/./src/userInfo.ts?");

/***/ }),

/***/ "./src/users.ts":
/*!**********************!*\
  !*** ./src/users.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.usersArray = void 0;\nexports.usersArray = [\n    {\n        userid: '127e4567-e89b-12d3-a458-426614174000',\n        name: 'John',\n        gender: 'man',\n    },\n    {\n        userid: '127e4567-e89a-12f3-a458-327395154000',\n        name: 'Anna',\n        gender: 'woman',\n    },\n];\n\n\n//# sourceURL=webpack://lesson_1/./src/users.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;