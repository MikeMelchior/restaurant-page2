"use strict";
(self["webpackChunkrestaurant_page2"] = self["webpackChunkrestaurant_page2"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./DancingScript-VariableFont_wght.ttf */ "./src/DancingScript-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./PermanentMarker-Regular.ttf */ "./src/PermanentMarker-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images.png */ "./src/images.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: DancingScript;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n    font-family: PermanentMarker;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: PermanentMarker;\n}\n\nbody,\nhtml {\n    min-height: 100vh; \n    position: relative;\n}\n.container {\n    min-height: 100vh;\n}\n\n.background {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 105%;\n    width: 100vw;\n    z-index: -1;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    opacity: 0.04;\n    max-width: 100%;\n    background-attachment: fixed;\n}\n\n.button-container {\n    width: fit-content;\n    margin: auto;\n    display: flex;\n    gap: 20px;\n    padding: 2rem;\n}\n    .button-container button {\n        padding: 1rem 2rem;\n        border: none;\n        background-color: aqua;\n        font-size: 20px;\n    }\n    .button-container button:hover {\n        transform: scale(1.05);\n    }\n\n.page {\n    width: 60vw;\n    min-width: 500px;\n    margin: auto;\n    padding: 3rem;\n    border: 10px ridge aqua;\n    background-color: #fee7f1;\n    text-align: center;\n}\n    .page h1 {\n        font-family: DancingScript;\n        font-size: 48px;\n        background-color: rgba(0, 0, 0, 0.03);\n        padding: 1rem 0;\n    }\n    .page p{\n        padding: 1rem 0rem;\n    }\n    .page > p {\n        margin-top: 40px;\n    }\n\n.hero-container {\n    padding: 4rem 0rem;\n    margin: auto;\n    width: 70%;\n    font-size: 28px;\n    letter-spacing: 1.8px;\n    color: #9979b4;\n}\n    .hero-container p:last-child{\n        text-align: end;\n        padding-right: 3rem;\n    }\n\n.hours-container {\n    width: 50%;\n    min-width: 300px;\n    margin: auto;\n    padding: 1rem;\n    border: 3px dotted purple;\n    border-radius: 10px;\n}\n    .day {\n        display: flex;\n        justify-content: space-between;\n        padding: 0 1rem;\n    }\n    .day:nth-child(2n) {\n        background-color: rgba(0, 0, 0, 0.03);\n    }\n\n.menu-section {\n    border: 1px solid;\n    margin-top: 3rem;\n    font-size: 20px;\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(380px, 1fr) );\n    border: ridge 5px aqua;\n}\n    h2 {\n        text-decoration: underline purple;\n        letter-spacing: 3px;\n        font-size: 30px;\n        padding-top: 3rem;\n    }\n    .item-container {\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n        padding: 1rem;\n    }\n    .item-container img {\n        grid-area: 1 / 2 / 4 / 3;\n        place-self: center;\n        height: 200px;\n        width: 200px;\n        opacity: 0.6;\n    }\n    .item-container p {\n        font-family: DancingScript;\n        font-size: 25px;\n    }\n\n    .item-container p:nth-child(1) {\n        grid-area: 1 / 1 / 2 / 2;\n    }\n    .item-container p:nth-child(2) {\n        grid-area: 2 / 1 / 3 / 2;\n        align-self: end;\n    }\n    .item-container p:nth-child(3) {\n        grid-area: 3 / 1 / 4 / 2;\n        place-self: center;\n    }\n\n\n.card {\n    width: 50%;\n    min-width: 384px;\n    margin: 4rem auto 0 auto;\n    padding: 1rem;\n    display: grid;\n    grid: auto auto auto auto / 1fr auto;\n    background-color: rgba(0, 0, 0, 0.03);\n    border: 3px solid #9979b4;\n    border-radius: 10px;\n}\n    .card img {\n        grid-area: 1 / 2 / 5 / 3;\n        width: 100%;\n    }\n\nbutton.active {\n    color: purple;\n    /* background-color: rgba(0, 225, 255, 1); */\n    border: 2px solid purple;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAA+C;AACnD;AACA;IACI,4BAA4B;IAC5B,4CAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;;IAEI,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,yDAAmC;IACnC,aAAa;IACb,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,aAAa;AACjB;IACI;QACI,kBAAkB;QAClB,YAAY;QACZ,sBAAsB;QACtB,eAAe;IACnB;IACA;QACI,sBAAsB;IAC1B;;AAEJ;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,kBAAkB;AACtB;IACI;QACI,0BAA0B;QAC1B,eAAe;QACf,qCAAqC;QACrC,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;;AAEJ;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,qBAAqB;IACrB,cAAc;AAClB;IACI;QACI,eAAe;QACf,mBAAmB;IACvB;;AAEJ;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;IACI;QACI,aAAa;QACb,8BAA8B;QAC9B,eAAe;IACnB;IACA;QACI,qCAAqC;IACzC;;AAEJ;IACI,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,6DAA6D;IAC7D,sBAAsB;AAC1B;IACI;QACI,iCAAiC;QACjC,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,aAAa;IACjB;IACA;QACI,wBAAwB;QACxB,kBAAkB;QAClB,aAAa;QACb,YAAY;QACZ,YAAY;IAChB;IACA;QACI,0BAA0B;QAC1B,eAAe;IACnB;;IAEA;QACI,wBAAwB;IAC5B;IACA;QACI,wBAAwB;QACxB,eAAe;IACnB;IACA;QACI,wBAAwB;QACxB,kBAAkB;IACtB;;;AAGJ;IACI,UAAU;IACV,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,qCAAqC;IACrC,yBAAyB;IACzB,mBAAmB;AACvB;IACI;QACI,wBAAwB;QACxB,WAAW;IACf;;AAEJ;IACI,aAAa;IACb,4CAA4C;IAC5C,wBAAwB;AAC5B","sourcesContent":["@font-face {\n    font-family: DancingScript;\n    src: url(./DancingScript-VariableFont_wght.ttf);\n}\n@font-face {\n    font-family: PermanentMarker;\n    src: url(./PermanentMarker-Regular.ttf);\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: PermanentMarker;\n}\n\nbody,\nhtml {\n    min-height: 100vh; \n    position: relative;\n}\n.container {\n    min-height: 100vh;\n}\n\n.background {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 105%;\n    width: 100vw;\n    z-index: -1;\n    background-image: url(./images.png);\n    opacity: 0.04;\n    max-width: 100%;\n    background-attachment: fixed;\n}\n\n.button-container {\n    width: fit-content;\n    margin: auto;\n    display: flex;\n    gap: 20px;\n    padding: 2rem;\n}\n    .button-container button {\n        padding: 1rem 2rem;\n        border: none;\n        background-color: aqua;\n        font-size: 20px;\n    }\n    .button-container button:hover {\n        transform: scale(1.05);\n    }\n\n.page {\n    width: 60vw;\n    min-width: 500px;\n    margin: auto;\n    padding: 3rem;\n    border: 10px ridge aqua;\n    background-color: #fee7f1;\n    text-align: center;\n}\n    .page h1 {\n        font-family: DancingScript;\n        font-size: 48px;\n        background-color: rgba(0, 0, 0, 0.03);\n        padding: 1rem 0;\n    }\n    .page p{\n        padding: 1rem 0rem;\n    }\n    .page > p {\n        margin-top: 40px;\n    }\n\n.hero-container {\n    padding: 4rem 0rem;\n    margin: auto;\n    width: 70%;\n    font-size: 28px;\n    letter-spacing: 1.8px;\n    color: #9979b4;\n}\n    .hero-container p:last-child{\n        text-align: end;\n        padding-right: 3rem;\n    }\n\n.hours-container {\n    width: 50%;\n    min-width: 300px;\n    margin: auto;\n    padding: 1rem;\n    border: 3px dotted purple;\n    border-radius: 10px;\n}\n    .day {\n        display: flex;\n        justify-content: space-between;\n        padding: 0 1rem;\n    }\n    .day:nth-child(2n) {\n        background-color: rgba(0, 0, 0, 0.03);\n    }\n\n.menu-section {\n    border: 1px solid;\n    margin-top: 3rem;\n    font-size: 20px;\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(380px, 1fr) );\n    border: ridge 5px aqua;\n}\n    h2 {\n        text-decoration: underline purple;\n        letter-spacing: 3px;\n        font-size: 30px;\n        padding-top: 3rem;\n    }\n    .item-container {\n        display: grid;\n        grid: auto auto auto / 1fr 1fr;\n        padding: 1rem;\n    }\n    .item-container img {\n        grid-area: 1 / 2 / 4 / 3;\n        place-self: center;\n        height: 200px;\n        width: 200px;\n        opacity: 0.6;\n    }\n    .item-container p {\n        font-family: DancingScript;\n        font-size: 25px;\n    }\n\n    .item-container p:nth-child(1) {\n        grid-area: 1 / 1 / 2 / 2;\n    }\n    .item-container p:nth-child(2) {\n        grid-area: 2 / 1 / 3 / 2;\n        align-self: end;\n    }\n    .item-container p:nth-child(3) {\n        grid-area: 3 / 1 / 4 / 2;\n        place-self: center;\n    }\n\n\n.card {\n    width: 50%;\n    min-width: 384px;\n    margin: 4rem auto 0 auto;\n    padding: 1rem;\n    display: grid;\n    grid: auto auto auto auto / 1fr auto;\n    background-color: rgba(0, 0, 0, 0.03);\n    border: 3px solid #9979b4;\n    border-radius: 10px;\n}\n    .card img {\n        grid-area: 1 / 2 / 5 / 3;\n        width: 100%;\n    }\n\nbutton.active {\n    color: purple;\n    /* background-color: rgba(0, 225, 255, 1); */\n    border: 2px solid purple;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/exports.js":
/*!************************!*\
  !*** ./src/exports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNamedElement": () => (/* binding */ createNamedElement)
/* harmony export */ });
const createNamedElement = (elementName, className) => {
    const element = document.createElement(elementName)
    if (className) { element.classList.add(className) }
    return element;
}

 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./src/exports.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _page_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-one */ "./src/page-one.js");
/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-two */ "./src/page-two.js");
/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-three */ "./src/page-three.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







const background = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'background');
document.body.appendChild(background);

const container = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'container');

document.body.appendChild(container);

const buttonContainer = () => {
    const container = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'button-container');
        const homeButton = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('button', 'home-button');
            homeButton.textContent = 'HOME'
            homeButton.classList.add('active')
        const menuButton = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('button', 'menu-button');
            menuButton.textContent = 'MENU'
        const contactButton = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('button', 'contact-button');
            contactButton.textContent = 'CONTACT'
    container.append(homeButton, menuButton, contactButton);
    return container;
}

document.body.insertBefore(buttonContainer(), document.body.firstChild)


const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', () => {
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.pageLoader)((0,_page_one__WEBPACK_IMPORTED_MODULE_2__.pageOne)());
    homeButton.classList.add('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
})

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.pageLoader)((0,_page_two__WEBPACK_IMPORTED_MODULE_3__.pageTwo)());
    homeButton.classList.remove('active');
    menuButton.classList.add('active');
    contactButton.classList.remove('active');
})

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => {
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.pageLoader)((0,_page_three__WEBPACK_IMPORTED_MODULE_4__.pageThree)());
    homeButton.classList.remove('active');
    menuButton.classList.remove('active');
    contactButton.classList.add('active');
})


document.addEventListener('DOMContentLoaded', () => {;(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.pageLoader)((0,_page_one__WEBPACK_IMPORTED_MODULE_2__.pageOne)())})





/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoader": () => (/* binding */ pageLoader)
/* harmony export */ });
const pageLoader = (page) => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    container.appendChild(page);
}



/***/ }),

/***/ "./src/page-one.js":
/*!*************************!*\
  !*** ./src/page-one.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageOne": () => (/* binding */ pageOne)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./src/exports.js");


const pageOne = () => {
    const page = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'page');
    
    const title = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('h1');
        title.textContent = "Martene's Cafe";

    const heroContainer = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'hero-container');
    
        const hero = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p', 'hero');
            hero.textContent = "Martene doesn't miss, every time I eat here the food is delicious and the staff is courteous. It's a home run every time!"

        const customer = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
            customer.textContent = '- Satisfied Customer';
        
        heroContainer.append(hero, customer);
    
    const hoursContainer = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'hours-container');

        const day = (day, hours) => {
            const dayContainer = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'day');
                const dayP = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                dayP.textContent = day;
                const hoursP = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                hoursP.textContent = hours;

                dayContainer.append(dayP, hoursP);
            return dayContainer;
        }
        
    hoursContainer.appendChild(day('Monday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Tuesday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Wednesday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Thursday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Friday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Saturday', '8:00am - 10:00pm'))
    hoursContainer.appendChild(day('Sunday', 'Closed'))

    const locationPara = _exports__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890'

    
    page.append(title, heroContainer, hoursContainer, locationPara);

    return page
}



/***/ }),

/***/ "./src/page-three.js":
/*!***************************!*\
  !*** ./src/page-three.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageThree": () => (/* binding */ pageThree)
/* harmony export */ });
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports.js */ "./src/exports.js");
/* harmony import */ var _person_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.png */ "./src/person.png");



const pageThree = () => {
    const page = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'page');

    const title = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('h1');
        title.textContent = 'Contact Us'

    const locationPara = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890';

    const contactCard = (name, title, number, email, image) => {
        const card = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'card')
            const nameP = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                nameP.textContent = name;
            const titleP = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                titleP.textContent = title;
            const numberP = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                numberP.textContent = number;
            const emailP = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                emailP.textContent = email;
            const img = new Image()
                img.src = image;

            card.append(nameP, titleP, numberP, emailP, img);
        return card
    }

    const owner = contactCard('Martene', 'Owner', '(555) 555-5555', 'real-email@hellothere.com', _person_png__WEBPACK_IMPORTED_MODULE_1__);
    const manager = contactCard('Mike', 'Manager', '(555) 123-4567', 'definitelyrealemail@real.com', _person_png__WEBPACK_IMPORTED_MODULE_1__);
    const foodTester = contactCard('Loki', 'Food Tester', '(555) 555-BARK', 'lokipoki@dogmail.com', _person_png__WEBPACK_IMPORTED_MODULE_1__);

    page.append(title, owner, manager, foodTester, locationPara);

    return page;
}



/***/ }),

/***/ "./src/page-two.js":
/*!*************************!*\
  !*** ./src/page-two.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageTwo": () => (/* binding */ pageTwo)
/* harmony export */ });
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports.js */ "./src/exports.js");
/* harmony import */ var _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-placeholder.png */ "./src/food-placeholder.png");



const pageTwo = () => {
    const page = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'page');

    const title = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('h1');
        title.textContent = 'Menu'

    const locationPara = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890';

    const menuSection = () => {
        const section = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'menu-section');
        return section;
    }

    const sectionTitle = (title) => {
        const titleText = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('h2', 'section-title');
            titleText.textContent = title;
        return titleText
    }

    const menuItem = (item, description, price, image) => {
        const itemContainer = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('div', 'item-container');
            const itemText = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                itemText.textContent = item;
            const itemDescription = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                itemDescription.textContent = description;
            const priceText = _exports_js__WEBPACK_IMPORTED_MODULE_0__.createNamedElement('p');
                priceText.textContent = price;
            const menuImage = new Image();
                menuImage.src = image;
            itemContainer.append(itemText, priceText, itemDescription, menuImage);
        return itemContainer
    };

    const appetizersTitle = sectionTitle('appetizers');
    const appetizers = menuSection('appetizers');

        const cheeseAndCrackers = menuItem('Cheese and Crackers',
                                            `A lovely assortment of Local cheeses 
                                            and in-house baked crackers`, '$11', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const nachos = menuItem('Cheesy Nachos', 
                                `Multigrain tortilla chips covered in our three 
                                blend cheese mix, lettuce and peppers`, '$8 ($4 to add chicken)', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const charcuterie = menuItem('Charcuterie Board', 
                                    `A beautiful charcuterie board of locally 
                                    sourced meats and cheeses`, '$18', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const potatoSkins = menuItem('Potato Skins',
                                    `Yukon gold potato skins baked then stuffed
                                    with cheese and bacon and then baked again`, '10$', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);

        appetizers.append(cheeseAndCrackers, nachos, charcuterie, potatoSkins);  

    const entreesTitle = sectionTitle('entrees');
    const entrees = menuSection('entrees');

        const chickenBroccoliRice = menuItem('Chicken rice and broccoli',
                                            `A nice healthy and lean meal of Chicken, 
                                            steamed Broccoli and Basmati Rice`, '$19', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const sesameChicken = menuItem('Sesame Chicken', 
                                        `Barbecued chicken served over rice with veg
                                        and topped with our famous sesame chicken sauce`, '$23', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const chickenParm = menuItem('Chicken Parm', 
                                    `Lightly battered chicken topped with asiago and homemade 
                                    marinara sauce and served with rigatoni`, '$27', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);

        entrees.append(chickenBroccoliRice, sesameChicken, chickenParm);

    const burgersTitle = sectionTitle('burgers');
    const burgers = menuSection('burgers');

        const cheeseburger = menuItem('Cheeseburger', `A fresh 1/3oz patty topped with cheddar 
                                                and your choice of toppings`, '$11', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const turkeyBurger = menuItem('Turkey Burger', `Fresh ground locally sourced lean turkey
                                                topped with lettuce tomato and mayo`, '13', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const blackBeanBurger = menuItem('Black Bean Burger', `Vegetarian friendly Black Bean patty 
                                                topped with your choice of vegetables`, '$11', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);

        burgers.append(cheeseburger, turkeyBurger, blackBeanBurger);

    const dessertsTitle = sectionTitle('desserts');
    const desserts = menuSection('desserts');

        const peanutButterBalls = menuItem("Oma's Peanut Butter Balls", `Crispy crunchy and sweet, if you 
                                                like peanut butter this is the dessert for you`, '8$', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const iceCream = menuItem('Fresh Ice Cream', `A bowl of our home made ice cream 
                                        ask what flavours we have today`, '$7', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);
        const cake = menuItem('Vanilla Cake', `A slice of our not-too-sweet freshly baked
                                            vanilla cake loaded with real vanilla beans`, '$9', _food_placeholder_png__WEBPACK_IMPORTED_MODULE_1__);

        desserts.append(peanutButterBalls, iceCream, cake);




    page.append(title, appetizersTitle, appetizers, entreesTitle, 
                entrees, burgersTitle, burgers, dessertsTitle, desserts, locationPara);

    return page;
}



/***/ }),

/***/ "./src/DancingScript-VariableFont_wght.ttf":
/*!*************************************************!*\
  !*** ./src/DancingScript-VariableFont_wght.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e7e73f4e34e4945f363.ttf";

/***/ }),

/***/ "./src/PermanentMarker-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/PermanentMarker-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "109a10dca0508e41aa12.ttf";

/***/ }),

/***/ "./src/food-placeholder.png":
/*!**********************************!*\
  !*** ./src/food-placeholder.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d534608ae016d6a0836.png";

/***/ }),

/***/ "./src/images.png":
/*!************************!*\
  !*** ./src/images.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c05c545402f711104dad.png";

/***/ }),

/***/ "./src/person.png":
/*!************************!*\
  !*** ./src/person.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30785f85aad4c90da710.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNFO0FBQ0E7QUFDQSx3RkFBd0Ysa0RBQUk7O0FBRTVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RixrREFBSTtBQUMzRjtBQUNBO0FBQ0EsaUdBQWlHLGtEQUFJO0FBQ3JHO0FBQ0E7QUFDQSxxRkFBcUYsa0RBQUk7O0FBRXpGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUYsa0RBQUk7QUFDekY7QUFDQSw0RkFBNEYsa0RBQUk7QUFDaEc7QUFDQSwrRkFBK0Ysa0RBQUk7O0FBRW5HOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1R0FBdUcsa0RBQUk7QUFDM0c7QUFDQSxnRkFBZ0Ysa0RBQUk7QUFDcEY7QUFDQSxnR0FBZ0csa0RBQUk7O0FBRXBHOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vc3JjL2V4cG9ydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vc3JjL3BhZ2Utb25lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZTIvLi9zcmMvcGFnZS10aHJlZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UyLy4vc3JjL3BhZ2UtdHdvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0RhbmNpbmdTY3JpcHQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9QZXJtYW5lbnRNYXJrZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGFuY2luZ1NjcmlwdDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFBlcm1hbmVudE1hcmtlcjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogUGVybWFuZW50TWFya2VyO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwNSU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIG9wYWNpdHk6IDAuMDQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4gICAgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG5cXG4ucGFnZSB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGJvcmRlcjogMTBweCByaWRnZSBhcXVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlN2YxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiAgICAucGFnZSBoMSB7XFxuICAgICAgICBmb250LWZhbWlseTogRGFuY2luZ1NjcmlwdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIH1cXG4gICAgLnBhZ2UgcHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXG4gICAgfVxcbiAgICAucGFnZSA+IHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgfVxcblxcbi5oZXJvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcXG4gICAgY29sb3I6ICM5OTc5YjQ7XFxufVxcbiAgICAuaGVyby1jb250YWluZXIgcDpsYXN0LWNoaWxke1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gICAgfVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgICAuZGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIH1cXG4gICAgLmRheTpudGgtY2hpbGQoMm4pIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgIH1cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikgKTtcXG4gICAgYm9yZGVyOiByaWRnZSA1cHggYXF1YTtcXG59XFxuICAgIGgyIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHB1cnBsZTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVyIGltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gNCAvIDM7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lciBwIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBEYW5jaW5nU2NyaXB0O1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVyIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuXFxuLmNhcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDM4NHB4O1xcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIGF1dG8gLyAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5NzliNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICAgIC5jYXJkIGltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gNSAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbmJ1dHRvbi5hY3RpdmUge1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIyNSwgMjU1LCAxKTsgKi9cXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQiw0Q0FBK0M7QUFDbkQ7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCx5REFBbUM7SUFDbkMsYUFBYTtJQUNiLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztBQUVKO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0lBQ0k7UUFDSSwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLHFDQUFxQztRQUNyQyxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtJQUNJO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2Qjs7QUFFSjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHFDQUFxQztJQUN6Qzs7QUFFSjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYiw2REFBNkQ7SUFDN0Qsc0JBQXNCO0FBQzFCO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLGtCQUFrQjtJQUN0Qjs7O0FBR0o7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFdBQVc7SUFDZjs7QUFFSjtJQUNJLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogRGFuY2luZ1NjcmlwdDtcXG4gICAgc3JjOiB1cmwoLi9EYW5jaW5nU2NyaXB0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUGVybWFuZW50TWFya2VyO1xcbiAgICBzcmM6IHVybCguL1Blcm1hbmVudE1hcmtlci1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBQZXJtYW5lbnRNYXJrZXI7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTA1JTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzLnBuZyk7XFxuICAgIG9wYWNpdHk6IDAuMDQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4gICAgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG5cXG4ucGFnZSB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDNyZW07XFxuICAgIGJvcmRlcjogMTBweCByaWRnZSBhcXVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlN2YxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiAgICAucGFnZSBoMSB7XFxuICAgICAgICBmb250LWZhbWlseTogRGFuY2luZ1NjcmlwdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIH1cXG4gICAgLnBhZ2UgcHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXG4gICAgfVxcbiAgICAucGFnZSA+IHAge1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgfVxcblxcbi5oZXJvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjhweDtcXG4gICAgY29sb3I6ICM5OTc5YjQ7XFxufVxcbiAgICAuaGVyby1jb250YWluZXIgcDpsYXN0LWNoaWxke1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gICAgfVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgICAuZGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIH1cXG4gICAgLmRheTpudGgtY2hpbGQoMm4pIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxuICAgIH1cXG5cXG4ubWVudS1zZWN0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikgKTtcXG4gICAgYm9yZGVyOiByaWRnZSA1cHggYXF1YTtcXG59XFxuICAgIGgyIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIHB1cnBsZTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIC8gMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVyIGltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gNCAvIDM7XFxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMC42O1xcbiAgICB9XFxuICAgIC5pdGVtLWNvbnRhaW5lciBwIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBEYW5jaW5nU2NyaXB0O1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWNvbnRhaW5lciBwOm50aC1jaGlsZCgxKSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIH1cXG4gICAgLml0ZW0tY29udGFpbmVyIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgfVxcbiAgICAuaXRlbS1jb250YWluZXIgcDpudGgtY2hpbGQoMykge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuXFxuLmNhcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtaW4td2lkdGg6IDM4NHB4O1xcbiAgICBtYXJnaW46IDRyZW0gYXV0byAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IGF1dG8gYXV0byBhdXRvIGF1dG8gLyAxZnIgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5NzliNDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICAgIC5jYXJkIGltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gNSAvIDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbmJ1dHRvbi5hY3RpdmUge1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIyNSwgMjU1LCAxKTsgKi9cXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVOYW1lZEVsZW1lbnQgPSAoZWxlbWVudE5hbWUsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKVxuICAgIGlmIChjbGFzc05hbWUpIHsgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgeyBcbiAgICBjcmVhdGVOYW1lZEVsZW1lbnRcbn0gIiwiaW1wb3J0ICogYXMgZXhwb3J0cyBmcm9tIFwiLi9leHBvcnRzXCI7XG5pbXBvcnQgeyBwYWdlTG9hZGVyIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyBwYWdlT25lIH0gZnJvbSBcIi4vcGFnZS1vbmVcIjtcbmltcG9ydCB7IHBhZ2VUd28gfSBmcm9tIFwiLi9wYWdlLXR3b1wiO1xuaW1wb3J0IHsgcGFnZVRocmVlIH0gZnJvbSBcIi4vcGFnZS10aHJlZVwiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ2RpdicsICdiYWNrZ3JvdW5kJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG5jb25zdCBjb250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2NvbnRhaW5lcicpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2J1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdidXR0b24nLCAnaG9tZS1idXR0b24nKTtcbiAgICAgICAgICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSE9NRSdcbiAgICAgICAgICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdidXR0b24nLCAnbWVudS1idXR0b24nKTtcbiAgICAgICAgICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTUVOVSdcbiAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdidXR0b24nLCAnY29udGFjdC1idXR0b24nKTtcbiAgICAgICAgICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ09OVEFDVCdcbiAgICBjb250YWluZXIuYXBwZW5kKGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RCdXR0b24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGJ1dHRvbkNvbnRhaW5lcigpLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpXG5cblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbicpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwYWdlTG9hZGVyKHBhZ2VPbmUoKSk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KVxuXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJyk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBhZ2VMb2FkZXIocGFnZVR3bygpKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFnZUxvYWRlcihwYWdlVGhyZWUoKSk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59KVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7cGFnZUxvYWRlcihwYWdlT25lKCkpfSlcblxuXG5cbiIsImNvbnN0IHBhZ2VMb2FkZXIgPSAocGFnZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZSk7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZXIgfSIsImltcG9ydCAqIGFzIGV4cG9ydHMgZnJvbSAnLi9leHBvcnRzJ1xuXG5jb25zdCBwYWdlT25lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ3BhZ2UnKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWFydGVuZSdzIENhZmVcIjtcblxuICAgIGNvbnN0IGhlcm9Db250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2hlcm8tY29udGFpbmVyJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGhlcm8gPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgncCcsICdoZXJvJyk7XG4gICAgICAgICAgICBoZXJvLnRleHRDb250ZW50ID0gXCJNYXJ0ZW5lIGRvZXNuJ3QgbWlzcywgZXZlcnkgdGltZSBJIGVhdCBoZXJlIHRoZSBmb29kIGlzIGRlbGljaW91cyBhbmQgdGhlIHN0YWZmIGlzIGNvdXJ0ZW91cy4gSXQncyBhIGhvbWUgcnVuIGV2ZXJ5IHRpbWUhXCJcblxuICAgICAgICBjb25zdCBjdXN0b21lciA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjdXN0b21lci50ZXh0Q29udGVudCA9ICctIFNhdGlzZmllZCBDdXN0b21lcic7XG4gICAgICAgIFxuICAgICAgICBoZXJvQ29udGFpbmVyLmFwcGVuZChoZXJvLCBjdXN0b21lcik7XG4gICAgXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2hvdXJzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGRheSA9IChkYXksIGhvdXJzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXlDb250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2RheScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheVAgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGRheVAudGV4dENvbnRlbnQgPSBkYXk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnNQID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBob3Vyc1AudGV4dENvbnRlbnQgPSBob3VycztcblxuICAgICAgICAgICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmQoZGF5UCwgaG91cnNQKTtcbiAgICAgICAgICAgIHJldHVybiBkYXlDb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KCdNb25kYXknLCAnNzowMGFtIC0gNzowMHBtJykpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KCdUdWVzZGF5JywgJzc6MDBhbSAtIDc6MDBwbScpKVxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheSgnV2VkbmVzZGF5JywgJzc6MDBhbSAtIDc6MDBwbScpKVxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheSgnVGh1cnNkYXknLCAnNzowMGFtIC0gNzowMHBtJykpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KCdGcmlkYXknLCAnNzowMGFtIC0gNzowMHBtJykpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KCdTYXR1cmRheScsICc4OjAwYW0gLSAxMDowMHBtJykpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KCdTdW5kYXknLCAnQ2xvc2VkJykpXG5cbiAgICBjb25zdCBsb2NhdGlvblBhcmEgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgncCcpO1xuICAgICAgICBsb2NhdGlvblBhcmEudGV4dENvbnRlbnQgPSAnMTIzIE1haW4gU3RyZWV0LCBUb3JvbnRvICgxMjMpIDQ1Ni03ODkwJ1xuXG4gICAgXG4gICAgcGFnZS5hcHBlbmQodGl0bGUsIGhlcm9Db250YWluZXIsIGhvdXJzQ29udGFpbmVyLCBsb2NhdGlvblBhcmEpO1xuXG4gICAgcmV0dXJuIHBhZ2Vcbn1cblxuZXhwb3J0IHsgcGFnZU9uZSB9IiwiaW1wb3J0ICogYXMgZXhwb3J0cyBmcm9tICcuL2V4cG9ydHMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9wZXJzb24ucG5nJ1xuXG5jb25zdCBwYWdlVGhyZWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdkaXYnLCAncGFnZScpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcydcblxuICAgIGNvbnN0IGxvY2F0aW9uUGFyYSA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdwJyk7XG4gICAgICAgIGxvY2F0aW9uUGFyYS50ZXh0Q29udGVudCA9ICcxMjMgTWFpbiBTdHJlZXQsIFRvcm9udG8gKDEyMykgNDU2LTc4OTAnO1xuXG4gICAgY29uc3QgY29udGFjdENhcmQgPSAobmFtZSwgdGl0bGUsIG51bWJlciwgZW1haWwsIGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2NhcmQnKVxuICAgICAgICAgICAgY29uc3QgbmFtZVAgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIG5hbWVQLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlUCA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVQLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJQID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBudW1iZXJQLnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgICAgICAgY29uc3QgZW1haWxQID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBlbWFpbFAudGV4dENvbnRlbnQgPSBlbWFpbDtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuXG4gICAgICAgICAgICBjYXJkLmFwcGVuZChuYW1lUCwgdGl0bGVQLCBudW1iZXJQLCBlbWFpbFAsIGltZyk7XG4gICAgICAgIHJldHVybiBjYXJkXG4gICAgfVxuXG4gICAgY29uc3Qgb3duZXIgPSBjb250YWN0Q2FyZCgnTWFydGVuZScsICdPd25lcicsICcoNTU1KSA1NTUtNTU1NScsICdyZWFsLWVtYWlsQGhlbGxvdGhlcmUuY29tJywgSWNvbik7XG4gICAgY29uc3QgbWFuYWdlciA9IGNvbnRhY3RDYXJkKCdNaWtlJywgJ01hbmFnZXInLCAnKDU1NSkgMTIzLTQ1NjcnLCAnZGVmaW5pdGVseXJlYWxlbWFpbEByZWFsLmNvbScsIEljb24pO1xuICAgIGNvbnN0IGZvb2RUZXN0ZXIgPSBjb250YWN0Q2FyZCgnTG9raScsICdGb29kIFRlc3RlcicsICcoNTU1KSA1NTUtQkFSSycsICdsb2tpcG9raUBkb2dtYWlsLmNvbScsIEljb24pO1xuXG4gICAgcGFnZS5hcHBlbmQodGl0bGUsIG93bmVyLCBtYW5hZ2VyLCBmb29kVGVzdGVyLCBsb2NhdGlvblBhcmEpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCB7IHBhZ2VUaHJlZSB9IiwiaW1wb3J0ICogYXMgZXhwb3J0cyBmcm9tICcuL2V4cG9ydHMuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9mb29kLXBsYWNlaG9sZGVyLnBuZydcblxuY29uc3QgcGFnZVR3byA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ2RpdicsICdwYWdlJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51J1xuXG4gICAgY29uc3QgbG9jYXRpb25QYXJhID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbG9jYXRpb25QYXJhLnRleHRDb250ZW50ID0gJzEyMyBNYWluIFN0cmVldCwgVG9yb250byAoMTIzKSA0NTYtNzg5MCc7XG5cbiAgICBjb25zdCBtZW51U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdkaXYnLCAnbWVudS1zZWN0aW9uJyk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnaDInLCAnc2VjdGlvbi10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aXRsZVRleHRcbiAgICB9XG5cbiAgICBjb25zdCBtZW51SXRlbSA9IChpdGVtLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBleHBvcnRzLmNyZWF0ZU5hbWVkRWxlbWVudCgnZGl2JywgJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGV4dCA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZXhwb3J0cy5jcmVhdGVOYW1lZEVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IGV4cG9ydHMuY3JlYXRlTmFtZWRFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgcHJpY2VUZXh0LnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICAgICAgICBjb25zdCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBtZW51SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtVGV4dCwgcHJpY2VUZXh0LCBpdGVtRGVzY3JpcHRpb24sIG1lbnVJbWFnZSk7XG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyXG4gICAgfTtcblxuICAgIGNvbnN0IGFwcGV0aXplcnNUaXRsZSA9IHNlY3Rpb25UaXRsZSgnYXBwZXRpemVycycpO1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51U2VjdGlvbignYXBwZXRpemVycycpO1xuXG4gICAgICAgIGNvbnN0IGNoZWVzZUFuZENyYWNrZXJzID0gbWVudUl0ZW0oJ0NoZWVzZSBhbmQgQ3JhY2tlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQSBsb3ZlbHkgYXNzb3J0bWVudCBvZiBMb2NhbCBjaGVlc2VzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaW4taG91c2UgYmFrZWQgY3JhY2tlcnNgLCAnJDExJywgSWNvbik7XG4gICAgICAgIGNvbnN0IG5hY2hvcyA9IG1lbnVJdGVtKCdDaGVlc3kgTmFjaG9zJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBNdWx0aWdyYWluIHRvcnRpbGxhIGNoaXBzIGNvdmVyZWQgaW4gb3VyIHRocmVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZCBjaGVlc2UgbWl4LCBsZXR0dWNlIGFuZCBwZXBwZXJzYCwgJyQ4ICgkNCB0byBhZGQgY2hpY2tlbiknLCBJY29uKTtcbiAgICAgICAgY29uc3QgY2hhcmN1dGVyaWUgPSBtZW51SXRlbSgnQ2hhcmN1dGVyaWUgQm9hcmQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBIGJlYXV0aWZ1bCBjaGFyY3V0ZXJpZSBib2FyZCBvZiBsb2NhbGx5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlZCBtZWF0cyBhbmQgY2hlZXNlc2AsICckMTgnLCBJY29uKTtcbiAgICAgICAgY29uc3QgcG90YXRvU2tpbnMgPSBtZW51SXRlbSgnUG90YXRvIFNraW5zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBZdWtvbiBnb2xkIHBvdGF0byBza2lucyBiYWtlZCB0aGVuIHN0dWZmZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggY2hlZXNlIGFuZCBiYWNvbiBhbmQgdGhlbiBiYWtlZCBhZ2FpbmAsICcxMCQnLCBJY29uKTtcblxuICAgICAgICBhcHBldGl6ZXJzLmFwcGVuZChjaGVlc2VBbmRDcmFja2VycywgbmFjaG9zLCBjaGFyY3V0ZXJpZSwgcG90YXRvU2tpbnMpOyAgXG5cbiAgICBjb25zdCBlbnRyZWVzVGl0bGUgPSBzZWN0aW9uVGl0bGUoJ2VudHJlZXMnKTtcbiAgICBjb25zdCBlbnRyZWVzID0gbWVudVNlY3Rpb24oJ2VudHJlZXMnKTtcblxuICAgICAgICBjb25zdCBjaGlja2VuQnJvY2NvbGlSaWNlID0gbWVudUl0ZW0oJ0NoaWNrZW4gcmljZSBhbmQgYnJvY2NvbGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQSBuaWNlIGhlYWx0aHkgYW5kIGxlYW4gbWVhbCBvZiBDaGlja2VuLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlYW1lZCBCcm9jY29saSBhbmQgQmFzbWF0aSBSaWNlYCwgJyQxOScsIEljb24pO1xuICAgICAgICBjb25zdCBzZXNhbWVDaGlja2VuID0gbWVudUl0ZW0oJ1Nlc2FtZSBDaGlja2VuJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYEJhcmJlY3VlZCBjaGlja2VuIHNlcnZlZCBvdmVyIHJpY2Ugd2l0aCB2ZWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgdG9wcGVkIHdpdGggb3VyIGZhbW91cyBzZXNhbWUgY2hpY2tlbiBzYXVjZWAsICckMjMnLCBJY29uKTtcbiAgICAgICAgY29uc3QgY2hpY2tlblBhcm0gPSBtZW51SXRlbSgnQ2hpY2tlbiBQYXJtJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGlnaHRseSBiYXR0ZXJlZCBjaGlja2VuIHRvcHBlZCB3aXRoIGFzaWFnbyBhbmQgaG9tZW1hZGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJpbmFyYSBzYXVjZSBhbmQgc2VydmVkIHdpdGggcmlnYXRvbmlgLCAnJDI3JywgSWNvbik7XG5cbiAgICAgICAgZW50cmVlcy5hcHBlbmQoY2hpY2tlbkJyb2Njb2xpUmljZSwgc2VzYW1lQ2hpY2tlbiwgY2hpY2tlblBhcm0pO1xuXG4gICAgY29uc3QgYnVyZ2Vyc1RpdGxlID0gc2VjdGlvblRpdGxlKCdidXJnZXJzJyk7XG4gICAgY29uc3QgYnVyZ2VycyA9IG1lbnVTZWN0aW9uKCdidXJnZXJzJyk7XG5cbiAgICAgICAgY29uc3QgY2hlZXNlYnVyZ2VyID0gbWVudUl0ZW0oJ0NoZWVzZWJ1cmdlcicsIGBBIGZyZXNoIDEvM296IHBhdHR5IHRvcHBlZCB3aXRoIGNoZWRkYXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgeW91ciBjaG9pY2Ugb2YgdG9wcGluZ3NgLCAnJDExJywgSWNvbik7XG4gICAgICAgIGNvbnN0IHR1cmtleUJ1cmdlciA9IG1lbnVJdGVtKCdUdXJrZXkgQnVyZ2VyJywgYEZyZXNoIGdyb3VuZCBsb2NhbGx5IHNvdXJjZWQgbGVhbiB0dXJrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcHBlZCB3aXRoIGxldHR1Y2UgdG9tYXRvIGFuZCBtYXlvYCwgJzEzJywgSWNvbik7XG4gICAgICAgIGNvbnN0IGJsYWNrQmVhbkJ1cmdlciA9IG1lbnVJdGVtKCdCbGFjayBCZWFuIEJ1cmdlcicsIGBWZWdldGFyaWFuIGZyaWVuZGx5IEJsYWNrIEJlYW4gcGF0dHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BwZWQgd2l0aCB5b3VyIGNob2ljZSBvZiB2ZWdldGFibGVzYCwgJyQxMScsIEljb24pO1xuXG4gICAgICAgIGJ1cmdlcnMuYXBwZW5kKGNoZWVzZWJ1cmdlciwgdHVya2V5QnVyZ2VyLCBibGFja0JlYW5CdXJnZXIpO1xuXG4gICAgY29uc3QgZGVzc2VydHNUaXRsZSA9IHNlY3Rpb25UaXRsZSgnZGVzc2VydHMnKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVTZWN0aW9uKCdkZXNzZXJ0cycpO1xuXG4gICAgICAgIGNvbnN0IHBlYW51dEJ1dHRlckJhbGxzID0gbWVudUl0ZW0oXCJPbWEncyBQZWFudXQgQnV0dGVyIEJhbGxzXCIsIGBDcmlzcHkgY3J1bmNoeSBhbmQgc3dlZXQsIGlmIHlvdSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2UgcGVhbnV0IGJ1dHRlciB0aGlzIGlzIHRoZSBkZXNzZXJ0IGZvciB5b3VgLCAnOCQnLCBJY29uKTtcbiAgICAgICAgY29uc3QgaWNlQ3JlYW0gPSBtZW51SXRlbSgnRnJlc2ggSWNlIENyZWFtJywgYEEgYm93bCBvZiBvdXIgaG9tZSBtYWRlIGljZSBjcmVhbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2sgd2hhdCBmbGF2b3VycyB3ZSBoYXZlIHRvZGF5YCwgJyQ3JywgSWNvbik7XG4gICAgICAgIGNvbnN0IGNha2UgPSBtZW51SXRlbSgnVmFuaWxsYSBDYWtlJywgYEEgc2xpY2Ugb2Ygb3VyIG5vdC10b28tc3dlZXQgZnJlc2hseSBiYWtlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YW5pbGxhIGNha2UgbG9hZGVkIHdpdGggcmVhbCB2YW5pbGxhIGJlYW5zYCwgJyQ5JywgSWNvbik7XG5cbiAgICAgICAgZGVzc2VydHMuYXBwZW5kKHBlYW51dEJ1dHRlckJhbGxzLCBpY2VDcmVhbSwgY2FrZSk7XG5cblxuXG5cbiAgICBwYWdlLmFwcGVuZCh0aXRsZSwgYXBwZXRpemVyc1RpdGxlLCBhcHBldGl6ZXJzLCBlbnRyZWVzVGl0bGUsIFxuICAgICAgICAgICAgICAgIGVudHJlZXMsIGJ1cmdlcnNUaXRsZSwgYnVyZ2VycywgZGVzc2VydHNUaXRsZSwgZGVzc2VydHMsIGxvY2F0aW9uUGFyYSk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZXhwb3J0IHsgcGFnZVR3byB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9