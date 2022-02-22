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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/layout/MainLayout.module.scss":
/*!**********************************************!*\
  !*** ./styles/layout/MainLayout.module.scss ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"app-container\": \"MainLayout_app-container__EQgfi\",\n\t\"body-container\": \"MainLayout_body-container__CvqfZ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbGF5b3V0L01haW5MYXlvdXQubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC1mZS8uL3N0eWxlcy9sYXlvdXQvTWFpbkxheW91dC5tb2R1bGUuc2Nzcz9mZjZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwcC1jb250YWluZXJcIjogXCJNYWluTGF5b3V0X2FwcC1jb250YWluZXJfX0VRZ2ZpXCIsXG5cdFwiYm9keS1jb250YWluZXJcIjogXCJNYWluTGF5b3V0X2JvZHktY29udGFpbmVyX19DdnFmWlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/layout/MainLayout.module.scss\n");

/***/ }),

/***/ "./styles/nav/Nav.module.scss":
/*!************************************!*\
  !*** ./styles/nav/Nav.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"nav-container\": \"Nav_nav-container__ET4gS\",\n\t\"profile\": \"Nav_profile__DnnbU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbmF2L05hdi5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLWZlLy4vc3R5bGVzL25hdi9OYXYubW9kdWxlLnNjc3M/NDUyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXYtY29udGFpbmVyXCI6IFwiTmF2X25hdi1jb250YWluZXJfX0VUNGdTXCIsXG5cdFwicHJvZmlsZVwiOiBcIk5hdl9wcm9maWxlX19Ebm5iVVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/nav/Nav.module.scss\n");

/***/ }),

/***/ "./components/Nav/Nav.tsx":
/*!********************************!*\
  !*** ./components/Nav/Nav.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _styles_nav_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/nav/Nav.module.scss */ \"./styles/nav/Nav.module.scss\");\n/* harmony import */ var _styles_nav_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Nav = ()=>{\n    const initials = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.user.initials\n    );\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_nav_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"nav-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/Nav/Nav.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_nav_Nav_module_scss__WEBPACK_IMPORTED_MODULE_3___default().profile),\n                children: initials.toUpperCase()\n            }, void 0, false, {\n                fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/Nav/Nav.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/Nav/Nav.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9OYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN5QjtBQUNHO0FBRXJELEtBQUssQ0FBQ0csR0FBRyxPQUFrQixDQUFDO0lBRTFCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHSCw0REFBYyxFQUFFSSxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRixRQUFROztJQUU5RCxNQUFNLDZFQUNIRyxDQUFHO1FBQUNDLFNBQVMsRUFBRU4scUZBQXNCOzt3RkFDbkNLLENBQUc7Ozs7O3dGQUVIQSxDQUFHO2dCQUFDQyxTQUFTLEVBQUVOLDRFQUFjOzBCQUMxQkUsUUFBUSxDQUFDTSxXQUFXOzs7Ozs7Ozs7Ozs7QUFJOUIsQ0FBQztBQUVELGlFQUFlUCxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAtZmUvLi9jb21wb25lbnRzL05hdi9OYXYudHN4PzU3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvaG9va3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbmF2L05hdi5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IE5hdjpSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBpbml0aWFscyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5pbml0aWFscylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ25hdi1jb250YWluZXInXX0+XG4gICAgICA8ZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICB7IGluaXRpYWxzLnRvVXBwZXJDYXNlKCkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBcHBTZWxlY3RvciIsInN0eWxlcyIsIk5hdiIsImluaXRpYWxzIiwic3RhdGUiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.tsx\n");

/***/ }),

/***/ "./components/layout/MainLayout.tsx":
/*!******************************************!*\
  !*** ./components/layout/MainLayout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/layout/MainLayout.module.scss */ \"./styles/layout/MainLayout.module.scss\");\n/* harmony import */ var _styles_layout_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Nav/Nav */ \"./components/Nav/Nav.tsx\");\n\n\n\n\nconst MainLayout = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"app-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/layout/MainLayout.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_MainLayout_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"body-container\"]),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/layout/MainLayout.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/components/layout/MainLayout.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NYWluTGF5b3V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDTztBQUNuQztBQU01QixLQUFLLENBQUNHLFVBQVUsSUFBcUIsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDckQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUVMLCtGQUFzQjs7d0ZBQ25DQyxnREFBRzs7Ozs7d0ZBQ0hHLENBQUc7Z0JBQUNDLFNBQVMsRUFBRUwsZ0dBQXVCOzBCQUVuQ0csUUFBUTs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUM7QUFFRCxpRUFBZUQsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLWZlLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbkxheW91dC50c3g/MDM4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RDaGlsZCwgUmVhY3RDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dC9NYWluTGF5b3V0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2L05hdic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdENoaWxkIHwgUmVhY3RDaGlsZHJlblxufVxuXG5jb25zdCBNYWluTGF5b3V0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXBwLWNvbnRhaW5lciddfT5cbiAgICAgIDxOYXYvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYm9keS1jb250YWluZXInXX0+XG5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJOYXYiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/MainLayout.tsx\n");

/***/ }),

/***/ "./data/Models/ReduxStore.ts":
/*!***********************************!*\
  !*** ./data/Models/ReduxStore.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Action\": () => (/* binding */ Action)\n/* harmony export */ });\nvar Action;\n(function(Action) {\n    Action[\"USER_LOGIN\"] = \"USER_LOGIN\";\n    Action[\"USER_LOGOUT\"] = \"USER_LOGOUT\";\n})(Action || (Action = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL01vZGVscy9SZWR1eFN0b3JlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O1VBV1lBLE1BQU07SUFBTkEsTUFBTSxDQUNoQkMsQ0FBVSxlQUFWQSxDQUFVO0lBREFELE1BQU0sQ0FFaEJFLENBQVcsZ0JBQVhBLENBQVc7R0FGREYsTUFBTSxLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLWZlLy4vZGF0YS9Nb2RlbHMvUmVkdXhTdG9yZS50cz9jOTIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmcsXG4gIHVzZXJOYW1lOiBzdHJpbmcsXG4gIGZpcnN0TmFtZTogc3RyaW5nLFxuICBsYXN0TmFtZTogc3RyaW5nLFxuICBlbWFpbDogc3RyaW5nLFxuICBkYXRlT2ZCaXJ0aDogc3RyaW5nLFxuICB0b2tlbjogc3RyaW5nLFxuICBpbml0aWFsczogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIEFjdGlvbiB7XG4gIFVTRVJfTE9HSU4gPSAnVVNFUl9MT0dJTicsXG4gIFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlIHtcbiAgdXNlcjogVXNlclxufSJdLCJuYW1lcyI6WyJBY3Rpb24iLCJVU0VSX0xPR0lOIiwiVVNFUl9MT0dPVVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/Models/ReduxStore.ts\n");

/***/ }),

/***/ "./data/StaticData/initialStoreState.ts":
/*!**********************************************!*\
  !*** ./data/StaticData/initialStoreState.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userState\": () => (/* binding */ userState)\n/* harmony export */ });\nconst userState = {\n    id: '',\n    userName: '',\n    firstName: '',\n    lastName: '',\n    email: '',\n    dateOfBirth: '',\n    token: '',\n    initials: 'pj'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL1N0YXRpY0RhdGEvaW5pdGlhbFN0b3JlU3RhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsU0FBUyxHQUFHLENBQUM7SUFDeEJDLEVBQUUsRUFBRSxDQUFFO0lBQ05DLFFBQVEsRUFBRSxDQUFFO0lBQ1pDLFNBQVMsRUFBRSxDQUFFO0lBQ2JDLFFBQVEsRUFBRSxDQUFFO0lBQ1pDLEtBQUssRUFBRSxDQUFFO0lBQ1RDLFdBQVcsRUFBRSxDQUFFO0lBQ2ZDLEtBQUssRUFBRSxDQUFFO0lBQ1RDLFFBQVEsRUFBRSxDQUFJO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAtZmUvLi9kYXRhL1N0YXRpY0RhdGEvaW5pdGlhbFN0b3JlU3RhdGUudHM/MjBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlclN0YXRlID0ge1xuICBpZDogJycsXG4gIHVzZXJOYW1lOiAnJyxcbiAgZmlyc3ROYW1lOiAnJyxcbiAgbGFzdE5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGRhdGVPZkJpcnRoOiAnJyxcbiAgdG9rZW46ICcnLFxuICBpbml0aWFsczogJ3BqJ1xufVxuIl0sIm5hbWVzIjpbInVzZXJTdGF0ZSIsImlkIiwidXNlck5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZGF0ZU9mQmlydGgiLCJ0b2tlbiIsImluaXRpYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/StaticData/initialStoreState.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/MainLayout */ \"./components/layout/MainLayout.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_MainLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/pramod/Desktop/Learning/kubernetes-next-aws/to-do-app-fe/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBRXlCO0FBQ2xCO0FBQ0E7U0FFN0JHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sNkVBQ0hKLGlEQUFRO1FBQUNDLEtBQUssRUFBRUEsK0NBQUs7OEZBQ25CRixxRUFBVTtrR0FDUkksU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC1mZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9NYWluTGF5b3V0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/hooks.ts":
/*!************************!*\
  !*** ./redux/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()\n;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSW9CO0FBTWIsS0FBSyxDQUFDRSxjQUFjLE9BQVNGLHdEQUFXOztBQUN4QyxLQUFLLENBQUNHLGNBQWMsR0FBb0NGLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLWZlLy4vcmVkdXgvaG9va3MudHM/NjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUeXBlZFVzZVNlbGVjdG9ySG9vayxcbiAgdXNlRGlzcGF0Y2gsXG4gIHVzZVNlbGVjdG9yLFxufSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdHlwZSB7XG4gIEFwcERpc3BhdGNoLFxuICBSb290U3RhdGUsXG59IGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/hooks.ts\n");

/***/ }),

/***/ "./redux/reducers/userReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/userReducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"loginActions\": () => (/* binding */ loginActions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_Models_ReduxStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Models/ReduxStore */ \"./data/Models/ReduxStore.ts\");\n/* harmony import */ var _data_StaticData_initialStoreState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/StaticData/initialStoreState */ \"./data/StaticData/initialStoreState.ts\");\n\n\n\nconst initialState = _data_StaticData_initialStoreState__WEBPACK_IMPORTED_MODULE_2__.userState;\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'counter',\n    initialState,\n    reducers: {\n        loginActions: (state, action)=>{\n            const initState = state;\n            switch(action.type){\n                case _data_Models_ReduxStore__WEBPACK_IMPORTED_MODULE_1__.Action.USER_LOGIN:\n                    state = action.payload.user;\n                    break;\n                case _data_Models_ReduxStore__WEBPACK_IMPORTED_MODULE_1__.Action.USER_LOGOUT:\n                    state = _data_StaticData_initialStoreState__WEBPACK_IMPORTED_MODULE_2__.userState;\n                    break;\n                default:\n                    state = initState;\n                    break;\n            }\n        }\n    }\n});\nconst { loginActions  } = counterSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy91c2VyUmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR3lCO0FBQ2tDO0FBQ1E7QUFFbkUsS0FBSyxDQUFDRyxZQUFZLEdBQVNELHlFQUFTO0FBRTdCLEtBQUssQ0FBQ0UsWUFBWSxHQUFHSiw2REFBVyxDQUFDLENBQUM7SUFDdkNLLElBQUksRUFBRSxDQUFTO0lBQ2ZGLFlBQVk7SUFDWkcsUUFBUSxFQUFFLENBQUM7UUFDVEMsWUFBWSxHQUFHQyxLQUFLLEVBQUVDLE1BQXFDLEdBQUssQ0FBQztZQUMvRCxLQUFLLENBQUNDLFNBQVMsR0FBR0YsS0FBSztZQUN2QixNQUFNLENBQUVDLE1BQU0sQ0FBQ0UsSUFBSTtnQkFDakIsSUFBSSxDQUFDVixzRUFBaUI7b0JBQ3BCTyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxJQUFJO29CQUMzQixLQUFLO2dCQUNQLElBQUksQ0FBQ2IsdUVBQWtCO29CQUNyQk8sS0FBSyxHQUFHTix5RUFBUztvQkFDakIsS0FBSzs7b0JBRUxNLEtBQUssR0FBR0UsU0FBUztvQkFDakIsS0FBSzs7UUFFWCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFDTSxLQUFLLENBQUMsQ0FBQyxDQUNaSCxZQUFZLEVBQ2QsQ0FBQyxHQUFHSCxZQUFZLENBQUNZLE9BQU87QUFFeEIsaUVBQWVaLFlBQVksQ0FBQ2EsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLWZlLy4vcmVkdXgvcmVkdWNlcnMvdXNlclJlZHVjZXIudHM/MzRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVTbGljZSxcbiAgUGF5bG9hZEFjdGlvbixcbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBY3Rpb24sIFVzZXIgfSBmcm9tICcuLi8uLi9kYXRhL01vZGVscy9SZWR1eFN0b3JlJztcbmltcG9ydCB7IHVzZXJTdGF0ZSB9IGZyb20gJy4uLy4uL2RhdGEvU3RhdGljRGF0YS9pbml0aWFsU3RvcmVTdGF0ZSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVXNlciA9IHVzZXJTdGF0ZVxuXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dpbkFjdGlvbnM6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgdXNlcjogVXNlciB9PikgPT4ge1xuICAgICAgY29uc3QgaW5pdFN0YXRlID0gc3RhdGVcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBY3Rpb24uVVNFUl9MT0dJTjpcbiAgICAgICAgICBzdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQWN0aW9uLlVTRVJfTE9HT1VUOlxuICAgICAgICAgIHN0YXRlID0gdXNlclN0YXRlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0YXRlID0gaW5pdFN0YXRlXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG5leHBvcnQgY29uc3Qge1xuICBsb2dpbkFjdGlvbnNcbn0gPSBjb3VudGVyU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJBY3Rpb24iLCJ1c2VyU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJjb3VudGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dpbkFjdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsImluaXRTdGF0ZSIsInR5cGUiLCJVU0VSX0xPR0lOIiwicGF5bG9hZCIsInVzZXIiLCJVU0VSX0xPR09VVCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/userReducer.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/userReducer */ \"./redux/reducers/userReducer.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        user: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSXlCO0FBQ3VCO0FBRXpDLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixnRUFBYyxDQUFDLENBQUM7SUFDbkNHLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLElBQUksRUFBRUgsNkRBQVc7SUFDbkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAtZmUvLi9yZWR1eC9zdG9yZS50cz85M2FmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFjdGlvbixcbiAgY29uZmlndXJlU3RvcmUsXG4gIFRodW5rQWN0aW9uLFxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXJSZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdXNlcjogdXNlclJlZHVjZXJcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();