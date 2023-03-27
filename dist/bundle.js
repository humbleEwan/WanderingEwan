/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/cancer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/cancer.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_pixboy_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../font/pixboy.ttf */ "./src/font/pixboy.ttf");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_font_pixboy_ttf__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-canvas {\r\n    margin: 20px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .preload-images {\r\n    overflow: hidden;\r\n    height: 0;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Pixels\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\r\n  }\r\n", "",{"version":3,"sources":["cancer.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,SAAS;EACX;;EAEA;IACE,qBAAqB;IACrB,+DAAiD;EACnD","file":"cancer.css","sourcesContent":[".main-canvas {\r\n    margin: 20px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .preload-images {\r\n    overflow: hidden;\r\n    height: 0;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Pixels\";\r\n    src: url(\"../font/pixboy.ttf\") format(\"truetype\");\r\n  }\r\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/actors/actor.ts":
/*!*****************************!*\
  !*** ./src/actors/actor.ts ***!
  \*****************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
class Actor {
    constructor() {
    }
}


/***/ }),

/***/ "./src/actors/enities/Entity.ts":
/*!**************************************!*\
  !*** ./src/actors/enities/Entity.ts ***!
  \**************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var _gameInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gameInstance */ "./src/gameInstance.ts");
/* harmony import */ var _actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actor */ "./src/actors/actor.ts");


class Entity extends _actor__WEBPACK_IMPORTED_MODULE_1__["Actor"] {
    constructor(callBehavour, startLocation, maxHP) {
        super();
        this.hasBehaviour = callBehavour;
        this._location = startLocation;
        this._spriteList = new Array();
        this._HP = maxHP;
        this._maxHP = maxHP;
        this.isInCombet = false;
        this.loadSprites();
    }
    getLocation() {
        return this._location;
    }
    setActiveSprite(index) {
        this._currentActiveSprite = index;
    }
    setCombatSprite(index) {
        this._combatSprite = index;
    }
    getActiveSprite() {
        return this._spriteList[this._currentActiveSprite];
    }
    getCombatSprite() {
        return this._spriteList[this._combatSprite];
    }
    modifyHP(amount) {
        if (this._HP + amount > this._maxHP) {
            this._HP = this._maxHP;
        }
        else {
            this._HP += amount;
        }
    }
    getHP() {
        return this._HP;
    }
    move(direction) {
        let nextY;
        let nextX;
        let mapMatrix = _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getMap().getMapMatrix();
        switch (direction) {
            case 0: { //UP
                nextX = this._location[0];
                nextY = this._location[1] - 1;
                break;
            }
            case 1: { //DOWN
                nextX = this._location[0];
                nextY = this._location[1] + 1;
                break;
            }
            case 2: { //LEFT
                nextX = this._location[0] - 1;
                nextY = this._location[1];
                break;
            }
            case 3: { //RIGHT
                nextX = this._location[0] + 1;
                nextY = this._location[1];
                break;
            }
            default: {
                throw new Error("Invalid direction!");
            }
        }
        if ((mapMatrix[nextX][nextY] !== 0) || (this._isFat && _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isOccupiedByEntity([nextX, nextY]))) {
            return false;
        }
        else if (_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isOccupiedByEntity([nextX, nextY])) {
            this.doOnOverlap([nextX, nextY]);
            this._location[0] = nextX;
            this._location[1] = nextY;
            return true;
        }
        else {
            this._location[0] = nextX;
            this._location[1] = nextY;
            return true;
        }
    }
}


/***/ }),

/***/ "./src/actors/enities/player.ts":
/*!**************************************!*\
  !*** ./src/actors/enities/player.ts ***!
  \**************************************/
/*! exports provided: PLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLayer", function() { return PLayer; });
/* harmony import */ var _gameInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gameInstance */ "./src/gameInstance.ts");
/* harmony import */ var _rendering_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rendering/Loader */ "./src/rendering/Loader.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/actors/enities/Entity.ts");



class PLayer extends _Entity__WEBPACK_IMPORTED_MODULE_2__["Entity"] {
    constructor(startLocation) {
        super(false, startLocation, 10);
        this._isFat = false;
        this._score = 0;
        this._cManna = 10;
        this._maxMana = 10;
    }
    executeBehaviour() {
        throw new Error("Player should not have any AI");
    }
    handleInput(keyIndex) {
        if (!_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isInCombat) {
            switch (keyIndex) {
                case 87: {
                    this.setActiveSprite(3);
                    this.regenMana();
                    return this.move(0);
                }
                case 83: {
                    this.setActiveSprite(0);
                    this.regenMana();
                    return this.move(1);
                }
                case 65: {
                    this.setActiveSprite(1);
                    this.regenMana();
                    return this.move(2);
                }
                case 68: {
                    this.setActiveSprite(2);
                    this.regenMana();
                    return this.move(3);
                }
                case 50: { //HEAL
                    if (this._cManna >= 2 && this._HP < this._maxHP) {
                        let a = Math.floor(Math.random() * 2) + 2;
                        this.modifyHP(a);
                        this.modifyManna(-2);
                        return true;
                    }
                    return false;
                }
                default: {
                    console.log("Key index: ", keyIndex);
                    return false;
                }
            }
        }
        else {
            switch (keyIndex) {
                case 49: { //BASE ATTACK -1 HP GUARANTEED
                    _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEnemyEntity().modifyHP(-1);
                    return true;
                }
                case 50: { //HEAL
                    if (this._cManna >= 2 && this._HP < this._maxHP) {
                        let a = Math.floor(Math.random() * 2) + 2;
                        this.modifyHP(a);
                        this.modifyManna(-2);
                        return true;
                    }
                    return false;
                }
                case 51: { //Fireball 2+ dmg
                    if (this._cManna >= 3) {
                        let a = Math.floor(Math.random() * Math.floor(2 + this.getScore() / 3) + 2);
                        _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEnemyEntity().modifyHP(-a);
                        this.modifyManna(-3);
                        return true;
                    }
                    return false;
                }
                default: {
                    return false;
                }
            }
        }
    }
    addScore(amount) {
        this._score += amount;
    }
    getScore() {
        return this._score;
    }
    getManna() {
        return this._cManna;
    }
    modifyManna(amount) {
        if (this._cManna + amount > this._maxMana) {
            this._cManna = this._maxMana;
        }
        else {
            this._cManna += amount;
        }
    }
    loadSprites() {
        for (let i = 2; i < 6; ++i) {
            this._spriteList.push(_rendering_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(i));
        }
        this.setActiveSprite(0);
    }
    doOnOverlap(overlapPoint) {
        _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].startCombat(_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEntityAtLocation(overlapPoint));
    }
    regenMana() {
        if (Math.random() > 0.8) {
            this.modifyManna(1);
        }
    }
}


/***/ }),

/***/ "./src/actors/enities/skeleton.ts":
/*!****************************************!*\
  !*** ./src/actors/enities/skeleton.ts ***!
  \****************************************/
/*! exports provided: Skeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return Skeleton; });
/* harmony import */ var _gameInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gameInstance */ "./src/gameInstance.ts");
/* harmony import */ var _rendering_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rendering/Loader */ "./src/rendering/Loader.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/actors/enities/Entity.ts");



class Skeleton extends _Entity__WEBPACK_IMPORTED_MODULE_2__["Entity"] {
    constructor(startLocation) {
        super(true, startLocation, Math.floor(Math.random() * _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getScore()) + 2);
        this._isFat = true;
    }
    executeBehaviour() {
        if (_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isInCombat && this.isInCombet) {
            if (this._HP <= 0) {
                _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].deleteEntity(this);
                _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isInCombat = false;
                _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.addScore(1);
            }
            else if (Math.random() > 0.6) {
                _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.modifyHP(-1);
            }
        }
        else {
            if (Math.random() > 0.2) {
                this.move(Math.floor(Math.random() * 4));
            }
        }
    }
    loadSprites() {
        this._spriteList.push(_rendering_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(6));
        this._spriteList.push(_rendering_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(11));
        this.setActiveSprite(0);
        this.setCombatSprite(1);
    }
    doOnOverlap(overlapPoint) {
        return;
    }
}


/***/ }),

/***/ "./src/css/cancer.css":
/*!****************************!*\
  !*** ./src/css/cancer.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./cancer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/cancer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/font/pixboy.ttf":
/*!*****************************!*\
  !*** ./src/font/pixboy.ttf ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "143c9dc71d2a56d4bc46c33e06440ebc.ttf");

/***/ }),

/***/ "./src/gameInstance.ts":
/*!*****************************!*\
  !*** ./src/gameInstance.ts ***!
  \*****************************/
/*! exports provided: GameInstance, instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameInstance", function() { return GameInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _map_gameMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/gameMap */ "./src/map/gameMap.ts");
/* harmony import */ var _rendering_masterRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rendering/masterRenderer */ "./src/rendering/masterRenderer.ts");


class GameInstance {
    constructor() {
        this.isInCombat = false;
        this.hasGameEnded = false;
        this._entityIndex = 0; //unique entity index for each entity (XDDDDDD)
        this._actorList = new Array();
        this._entityList = new Array();
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    setupMap() {
        this._gameMap = new _map_gameMap__WEBPACK_IMPORTED_MODULE_0__["GameMap"]();
        this._actorList.push(this._gameMap);
    }
    setup() {
        this.finishTurn();
    }
    proceedTurn() {
        this._entityList.forEach(function (e) {
            if (e.hasBehaviour) {
                e.executeBehaviour();
            }
        });
        if (this.playerReference.getHP() <= 0) {
            this.hasGameEnded = true;
        }
        this.finishTurn();
    }
    startCombat(enemy) {
        this.isInCombat = true;
        this._enemyEntity = enemy;
        this._enemyMaxHP = enemy.getHP();
        enemy.isInCombet = true;
    }
    createNewActor(actor) {
        this._actorList.push(actor);
    }
    createNewEntity(entity) {
        this._actorList.push(entity);
        this._entityList.push(entity);
        entity.index = this._entityIndex;
        ++this._entityIndex;
    }
    getMap() {
        return this._gameMap;
    }
    isOccupiedByEntity(location) {
        let _occ = false;
        this._entityList.forEach(function (e) {
            if (e.getLocation()[0] === location[0] && e.getLocation()[1] === location[1]) {
                _occ = true;
            }
        });
        return _occ;
    }
    getEntityAtLocation(location) {
        let _occEnt;
        this._entityList.forEach(function (e) {
            if ((e.getLocation()[0] === location[0]) && (e.getLocation()[1] === location[1])) {
                _occEnt = e;
            }
        });
        return _occEnt;
    }
    deleteEntity(entity) {
        for (let i = 0; i < this._entityList.length; ++i) {
            if (entity.index === this._entityList[i].index) {
                this._entityList.splice(i, 1);
            }
        }
    }
    getEnemyEntity() {
        return this._enemyEntity;
    }
    getEnemyMaxHP() {
        return this._enemyMaxHP;
    }
    findPlayerStartLocation() {
        for (let i = 0; i < this._gameMap.getMapMatrix().length; ++i) {
            for (let j = 0; j < this._gameMap.getMapMatrix()[i].length; ++j) {
                if (this._gameMap.getMapMatrix()[j][i] === 0) {
                    return [j, i];
                }
            }
        }
    }
    getMapTileAtLocation(location) {
        return this._gameMap.getMapMatrix()[location[0]][location[1]];
    }
    finishTurn() {
        _rendering_masterRenderer__WEBPACK_IMPORTED_MODULE_1__["masterRenderer"].render(this._gameMap, this._entityList);
    }
}
const instance = GameInstance.getInstance();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_cancer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/cancer.css */ "./src/css/cancer.css");
/* harmony import */ var _css_cancer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_cancer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actors_enities_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actors/enities/player */ "./src/actors/enities/player.ts");
/* harmony import */ var _actors_enities_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actors/enities/skeleton */ "./src/actors/enities/skeleton.ts");
/* harmony import */ var _gameInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameInstance */ "./src/gameInstance.ts");





let player;
window.onload = () => {
    _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].setupMap();
    player = new _actors_enities_player__WEBPACK_IMPORTED_MODULE_1__["PLayer"](_gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].findPlayerStartLocation());
    _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].createNewEntity(player);
    _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].playerReference = player;
    _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].setup();
};
// Function to handle the key press events
function onKeyPress(event) {
    if (!_gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].hasGameEnded) {
        if (player.handleInput(event.keyCode)) {
            if (!_gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].isInCombat) {
                for (let i = 0; i < 100; ++i) {
                    for (let j = 0; j < 100; ++j) {
                        if (_gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].getMapTileAtLocation([i, j]) === 0 && Math.random() > 0.999 && !_gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].isOccupiedByEntity([i, j])) {
                            _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].createNewEntity(new _actors_enities_skeleton__WEBPACK_IMPORTED_MODULE_2__["Skeleton"]([i, j]));
                        }
                    }
                }
            }
            _gameInstance__WEBPACK_IMPORTED_MODULE_3__["instance"].proceedTurn();
        }
    }
}
// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);


/***/ }),

/***/ "./src/map/celluralAutomataGeneration.ts":
/*!***********************************************!*\
  !*** ./src/map/celluralAutomataGeneration.ts ***!
  \***********************************************/
/*! exports provided: generateMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMap", function() { return generateMap; });
let mapSize = 100;
let grid = new Array(mapSize);
let grid2 = new Array(mapSize);
let size_x = mapSize;
let size_y = mapSize;
let r1_cutoff = 5;
let r2_cutoff = 2;
function giveRandom() {
    return Math.random() > 0.85 ? 1 : 0;
}
function initMap() {
    let xi = 0;
    let yi = 0;
    for (xi = 0; xi < mapSize; ++xi) {
        grid[xi] = new Array(mapSize);
        grid2[xi] = new Array(mapSize);
    }
    for (yi = 1; yi < size_y - 1; yi++) {
        for (xi = 1; xi < size_x - 1; xi++) {
            grid[yi][xi] = giveRandom();
        }
    }
    // for (yi = 0; yi < size_y; yi++) {
    //     for (xi = 0; xi < size_x; xi++) {
    //         grid2[yi][xi] = 1;
    //     }
    // }
    for (yi = 0; yi < size_y; yi++) {
        grid[yi][0] = grid[yi][size_x - 1] = 1;
    }
    for (xi = 0; xi < size_x; xi++) {
        grid[0][xi] = grid[size_y - 1][xi] = 1;
    }
}
function iterateSimulation() {
    let xi;
    let yi;
    let ii;
    let jj;
    for (yi = 1; yi < size_y - 1; yi++) {
        for (xi = 1; xi < size_x - 1; xi++) {
            let adjcount_r1 = 0;
            let adjcount_r2 = 0;
            for (ii = -1; ii <= 1; ii++)
                for (jj = -1; jj <= 1; jj++) {
                    if (grid[yi + ii][xi + jj] != 0)
                        adjcount_r1++;
                }
            for (ii = yi - 2; ii <= yi + 2; ii++)
                for (jj = xi - 2; jj <= xi + 2; jj++) {
                    if (Math.abs(ii - yi) == 2 && Math.abs(jj - xi) == 2)
                        continue;
                    if (ii < 0 || jj < 0 || ii >= size_y || jj >= size_x)
                        continue;
                    if (grid[ii][jj] != 0)
                        adjcount_r2++;
                }
            if (adjcount_r1 >= r1_cutoff || adjcount_r2 <= r2_cutoff)
                grid2[yi][xi] = 1;
            else
                grid2[yi][xi] = 0;
        }
    }
    for (yi = 1; yi < size_y - 1; yi++)
        for (xi = 1; xi < size_x - 1; xi++)
            grid[yi][xi] = grid2[yi][xi];
}
function generateMap() {
    initMap();
    for (let i = 0; i < 5; i++) {
        iterateSimulation();
    }
    return grid;
}


/***/ }),

/***/ "./src/map/gameMap.ts":
/*!****************************!*\
  !*** ./src/map/gameMap.ts ***!
  \****************************/
/*! exports provided: GameMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMap", function() { return GameMap; });
/* harmony import */ var _actors_actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actors/actor */ "./src/actors/actor.ts");
/* harmony import */ var _celluralAutomataGeneration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celluralAutomataGeneration */ "./src/map/celluralAutomataGeneration.ts");


class GameMap extends _actors_actor__WEBPACK_IMPORTED_MODULE_0__["Actor"] {
    constructor() {
        super();
        this.generateNewMap();
    }
    generateNewMap() {
        this._mapMatrix = Object(_celluralAutomataGeneration__WEBPACK_IMPORTED_MODULE_1__["generateMap"])();
    }
    getMapMatrix() {
        return this._mapMatrix;
    }
}


/***/ }),

/***/ "./src/rendering/Loader.ts":
/*!*********************************!*\
  !*** ./src/rendering/Loader.ts ***!
  \*********************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
class Loader {
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    loadResources() {
        this._assetList.push(document.getElementById('floor'));
        this._assetList.push(document.getElementById('wall')); //1
        this._assetList.push(document.getElementById('hero-down'));
        this._assetList.push(document.getElementById('hero-left')); //3
        this._assetList.push(document.getElementById('hero-right'));
        this._assetList.push(document.getElementById('hero-up')); //5
        this._assetList.push(document.getElementById('skeleton'));
        this._assetList.push(document.getElementById('boss')); //7
        this._assetList.push(document.getElementById('hearth'));
        this._assetList.push(document.getElementById('cave-bg')); //9
        this._assetList.push(document.getElementById('manna'));
        this._assetList.push(document.getElementById('skeleton-combat')); //11
        this._assetList.push(document.getElementById('hit-spell-icon'));
        this._assetList.push(document.getElementById('heal-spell-icon')); //13
        this._assetList.push(document.getElementById('fireball-spell-icon'));
        this._assetList.push(document.getElementById('boss-up')); //15
        this._assetList.push(document.getElementById('boss-right'));
        this._assetList.push(document.getElementById('boss-left')); //17
    }
    getAssetByID(ID) {
        return this._assetList[ID];
    }
    constructor() {
        this._assetList = new Array();
    }
    ;
}
const loader = Loader.getInstance();


/***/ }),

/***/ "./src/rendering/masterRenderer.ts":
/*!*****************************************!*\
  !*** ./src/rendering/masterRenderer.ts ***!
  \*****************************************/
/*! exports provided: masterRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masterRenderer", function() { return masterRenderer; });
/* harmony import */ var _gameInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameInstance */ "./src/gameInstance.ts");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./src/rendering/Loader.ts");


class MasterRenderer {
    constructor() {
        this.debugSquares = [[]];
        this._canvas = document.querySelector('.main-canvas');
        this._ctx = this._canvas.getContext('2d');
        this._width = this._canvas.width;
        this._height = this._canvas.height;
        _Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].loadResources();
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
    render(map, entityList) {
        this._ctx.clearRect(0, 0, this._width, this._height);
        if (!_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].hasGameEnded) {
            if (_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isInCombat) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(9), 0, 0);
                this._ctx.drawImage(_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEnemyEntity().getCombatSprite(), 4 * 72, 2.5 * 72);
            }
            else {
                this.renderMap(map);
                this.renderEnitites(entityList);
            }
            this.renderUI();
        }
        else {
            this._ctx.fillStyle = "rgba(0, 0, 0, 1)";
            this._ctx.fillRect(0, 0, this._width, this._height);
            this._ctx.font = "180px Pixeboy";
            this._ctx.fillStyle = "rgba(200, 0, 0, 1)";
            this._ctx.fillText("GAME", this._width / 2 - 170, this._height / 2 - 52);
            this._ctx.fillText("OVER", this._width / 2 - 170, this._height / 2 + 52);
        }
        this.renderDebugSquares();
    }
    ;
    renderMap(map) {
        let playerLocation = _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getLocation();
        let viewMatrix = new Array(10);
        for (let i = 0; i < 10; ++i) {
            viewMatrix[i] = new Array(10);
            for (let j = 0; j < 10; ++j) {
                if (i + playerLocation[0] - 4 < 0 || j + playerLocation[1] - 4 < 0 || j + playerLocation[1] - 4 > 99 || i + playerLocation[0] - 4 > 99) {
                    viewMatrix[i][j] = 1;
                }
                else {
                    viewMatrix[i][j] = _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getMap().getMapMatrix()[i + playerLocation[0] - 4][j + playerLocation[1] - 4];
                }
            }
        }
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(viewMatrix[i][j]), i * 72, j * 72);
            }
        }
    }
    renderEnitites(entityList) {
        let playerLocation = _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getLocation();
        let entityLocation;
        this._ctx.drawImage(entityList[0].getActiveSprite(), 4 * 72, 4 * 72);
        for (let i = 1; i < entityList.length; ++i) {
            entityLocation = entityList[i].getLocation();
            this._ctx.drawImage(entityList[i].getActiveSprite(), (entityLocation[0] - (playerLocation[0] - 4)) * 72, (entityLocation[1] - (playerLocation[1] - 4)) * 72);
        }
    }
    renderUI() {
        if (_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].isInCombat) {
            //Temporary UI background draw
            this._ctx.fillStyle = "rgba(40, 40, 30, 1)";
            this._ctx.fillRect(0, 550, 720, 250);
            this._ctx.fillStyle = "rgba(140, 140, 130, 1)";
            this._ctx.fillRect(0, 550, 720, 20);
            //Stat draw for player
            for (let i = 0; i < _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getHP(); ++i) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(8), i * 32, 574);
            }
            for (let i = 0; i < _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getManna(); ++i) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(10), 360 + i * 32, 574);
            }
            //Stat draw for enemy
            this._ctx.fillStyle = "rgba(30, 60, 40, 1)";
            this._ctx.fillRect(this._width / 2 - 50, 2 * 72, 100, 20);
            this._ctx.fillStyle = "rgba(230, 30, 40, 1)";
            this._ctx.fillRect(this._width / 2 - 50, 2 * 72, (_gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEnemyEntity().getHP() / _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].getEnemyMaxHP()) * 100, 20);
            this._ctx.strokeStyle = "rgba(170, 170, 170, 1)";
            this._ctx.lineWidth = 3;
            this._ctx.strokeRect(this._width / 2 - 50, 2 * 72, 100, 20);
            for (let i = 12; i < 15; ++i) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(i), 30 + ((i - 12) * 100), 674);
                this._ctx.font = "30px Pixeboy";
                this._ctx.fillStyle = "rgba(255, 255, 255, 1)";
                this._ctx.fillText((i - 11).toString(), 40 + ((i - 12) * 100), 700);
                this._ctx.lineWidth = 1;
                this._ctx.strokeStyle = "rgba(0, 0, 0, 1)";
                this._ctx.strokeText((i - 11).toString(), 40 + ((i - 12) * 100), 700);
            }
        }
        else {
            //Temporary UI background draw
            this._ctx.fillStyle = "rgba(100, 100, 50, 1)";
            this._ctx.fillRect(0, 720, 720, 80);
            for (let i = 0; i < _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getHP(); ++i) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(8), i * 16, 724);
            }
            for (let i = 0; i < _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getManna(); ++i) {
                this._ctx.drawImage(_Loader__WEBPACK_IMPORTED_MODULE_1__["loader"].getAssetByID(10), 210 + i * 16, 724);
            }
            this._ctx.font = "60px Pixeboy";
            this._ctx.fillStyle = "rgba(0, 0, 0, 1)";
            this._ctx.fillText("Score: " + _gameInstance__WEBPACK_IMPORTED_MODULE_0__["instance"].playerReference.getScore(), 440, 775);
        }
    }
    renderDebugSquares() {
        this._ctx.fillStyle = "rgba(255,0,0,0.5)";
        for (let i = 0; i < this.debugSquares.length; ++i) {
            this._ctx.fillRect((this.debugSquares[i][0] * 72 + 10), (this.debugSquares[i][1] * 72 + 10), 52, 52);
        }
        this.debugSquares = [[]];
    }
}
const masterRenderer = MasterRenderer.getInstance();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9jYW5jZXIuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9ycy9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3JzL2VuaXRpZXMvRW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hY3RvcnMvZW5pdGllcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9ycy9lbml0aWVzL3NrZWxldG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3MvY2FuY2VyLmNzcz8zYjA4Iiwid2VicGFjazovLy8uL3NyYy9mb250L3BpeGJveS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVJbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC9jZWxsdXJhbEF1dG9tYXRhR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL2dhbWVNYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmluZy9tYXN0ZXJSZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDeEc7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBRU0sTUFBTSxjQUFjLEdBQW1CLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ZvbnQvcGl4Ym95LnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluLWNhbnZhcyB7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJlbG9hZC1pbWFnZXMge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBpeGVsc1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxuICB9XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiY2FuY2VyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztFQUNYOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLCtEQUFpRDtFQUNuRFwiLFwiZmlsZVwiOlwiY2FuY2VyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1jYW52YXMge1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByZWxvYWQtaW1hZ2VzIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQaXhlbHNcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udC9waXhib3kudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbiAgfVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdG9ye1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vZ2FtZUluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEFjdG9yIH0gZnJvbSBcIi4uL2FjdG9yXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5IGV4dGVuZHMgQWN0b3J7XHJcbiAgICBwdWJsaWMgaGFzQmVoYXZpb3VyOiBib29sZWFuO1xyXG4gICAgcHVibGljIGluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaXNJbkNvbWJldDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbGxCZWhhdm91cjogYm9vbGVhbixzdGFydExvY2F0aW9uOiBudW1iZXJbXSwgbWF4SFA6IG51bWJlcil7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhhc0JlaGF2aW91ciA9IGNhbGxCZWhhdm91cjtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9jYXRpb24gPSBzdGFydExvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZUxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9IUCA9IG1heEhQO1xyXG4gICAgICAgIHRoaXMuX21heEhQID0gbWF4SFA7XHJcbiAgICAgICAgdGhpcy5pc0luQ29tYmV0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2FkU3ByaXRlcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZXhlY3V0ZUJlaGF2aW91cigpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbigpOiBudW1iZXJbXXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRBY3RpdmVTcHJpdGUoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNwcml0ZSA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDb21iYXRTcHJpdGUoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fY29tYmF0U3ByaXRlID0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFjdGl2ZVNwcml0ZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlTGlzdFt0aGlzLl9jdXJyZW50QWN0aXZlU3ByaXRlXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tYmF0U3ByaXRlKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVMaXN0W3RoaXMuX2NvbWJhdFNwcml0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vZGlmeUhQKGFtb3VudDogbnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLl9IUCArIGFtb3VudCA+IHRoaXMuX21heEhQKXtcclxuICAgICAgICAgICAgdGhpcy5fSFAgPSB0aGlzLl9tYXhIUDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9IUCArPSBhbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRIUCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9IUDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTcHJpdGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfc3ByaXRlTGlzdDogSFRNTEltYWdlRWxlbWVudFtdO1xyXG4gICAgcHJvdGVjdGVkIF9sb2NhdGlvbjogbnVtYmVyW107IC8vWCBhbmQgWVxyXG4gICAgcHJvdGVjdGVkIF9pc0ZhdDogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCBfY29tYmF0U3ByaXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9IUDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9tYXhIUDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBsb2FkU3ByaXRlcygpOiB2b2lkO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRvT25PdmVybGFwKG92ZXJsYXBQb2ludDogbnVtYmVyW10pOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBtb3ZlKGRpcmVjdGlvbjogbnVtYmVyKTogYm9vbGVhbntcclxuICAgICAgICBsZXQgbmV4dFk6IG51bWJlcjtcclxuICAgICAgICBsZXQgbmV4dFg6IG51bWJlcjtcclxuXHJcbiAgICAgICAgbGV0IG1hcE1hdHJpeDogbnVtYmVyW11bXSA9IGluc3RhbmNlLmdldE1hcCgpLmdldE1hcE1hdHJpeCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAwOnsgLy9VUFxyXG4gICAgICAgICAgICAgICAgbmV4dFggPSB0aGlzLl9sb2NhdGlvblswXTtcclxuICAgICAgICAgICAgICAgIG5leHRZID0gdGhpcy5fbG9jYXRpb25bMV0gLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxOnsgLy9ET1dOXHJcbiAgICAgICAgICAgICAgICBuZXh0WCA9IHRoaXMuX2xvY2F0aW9uWzBdO1xyXG4gICAgICAgICAgICAgICAgbmV4dFkgPSB0aGlzLl9sb2NhdGlvblsxXSArIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDI6eyAvL0xFRlRcclxuICAgICAgICAgICAgICAgIG5leHRYID0gdGhpcy5fbG9jYXRpb25bMF0gLSAxO1xyXG4gICAgICAgICAgICAgICAgbmV4dFkgPSB0aGlzLl9sb2NhdGlvblsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzp7IC8vUklHSFRcclxuICAgICAgICAgICAgICAgIG5leHRYID0gdGhpcy5fbG9jYXRpb25bMF0gKyAxO1xyXG4gICAgICAgICAgICAgICAgbmV4dFkgPSB0aGlzLl9sb2NhdGlvblsxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6e1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJlY3Rpb24hXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigobWFwTWF0cml4W25leHRYXVtuZXh0WV0gIT09IDApIHx8ICh0aGlzLl9pc0ZhdCAmJiBpbnN0YW5jZS5pc09jY3VwaWVkQnlFbnRpdHkoW25leHRYLCBuZXh0WV0pKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYoaW5zdGFuY2UuaXNPY2N1cGllZEJ5RW50aXR5KFtuZXh0WCwgbmV4dFldKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Pbk92ZXJsYXAoW25leHRYLCBuZXh0WV0pO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvblswXSA9IG5leHRYO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvblsxXSA9IG5leHRZO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvblswXSA9IG5leHRYO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvblsxXSA9IG5leHRZO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vZ2FtZUluc3RhbmNlXCI7XHJcbmltcG9ydCB7IGxvYWRlciB9IGZyb20gXCIuLi8uLi9yZW5kZXJpbmcvTG9hZGVyXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBMYXllciBleHRlbmRzIEVudGl0eXtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdGFydExvY2F0aW9uOiBudW1iZXJbXSl7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UsIHN0YXJ0TG9jYXRpb24sIDEwKTtcclxuICAgICAgICB0aGlzLl9pc0ZhdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcclxuICAgICAgICB0aGlzLl9jTWFubmEgPSAxMDtcclxuICAgICAgICB0aGlzLl9tYXhNYW5hID0gMTA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBleGVjdXRlQmVoYXZpb3VyKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBzaG91bGQgbm90IGhhdmUgYW55IEFJXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVJbnB1dChrZXlJbmRleDogbnVtYmVyKTogYm9vbGVhbntcclxuICAgICAgICBpZighaW5zdGFuY2UuaXNJbkNvbWJhdCl7XHJcbiAgICAgICAgICAgIHN3aXRjaChrZXlJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg3OntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNwcml0ZSgzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2VuTWFuYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDgzOntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNwcml0ZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2VuTWFuYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY1OntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNwcml0ZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2VuTWFuYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY4OntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVNwcml0ZSgyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2VuTWFuYSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUwOnsgLy9IRUFMXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fY01hbm5hID49IDIgJiYgdGhpcy5fSFAgPCB0aGlzLl9tYXhIUCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5SFAoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5TWFubmEoLTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLZXkgaW5kZXg6IFwiLCBrZXlJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoKGtleUluZGV4KXtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDk6eyAvL0JBU0UgQVRUQUNLIC0xIEhQIEdVQVJBTlRFRURcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5nZXRFbmVteUVudGl0eSgpLm1vZGlmeUhQKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgNTA6eyAvL0hFQUxcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9jTWFubmEgPj0gMiAmJiB0aGlzLl9IUCA8IHRoaXMuX21heEhQKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGE6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlIUChhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlNYW5uYSgtMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIDUxOiB7IC8vRmlyZWJhbGwgMisgZG1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fY01hbm5hID49IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigyICsgdGhpcy5nZXRTY29yZSgpIC8gMykgKyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZ2V0RW5lbXlFbnRpdHkoKS5tb2RpZnlIUCgtYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5TWFubmEoLTMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDp7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTY29yZShhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY29yZSgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNYW5uYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jTWFubmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vZGlmeU1hbm5hKGFtb3VudDogbnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLl9jTWFubmEgKyBhbW91bnQgPiB0aGlzLl9tYXhNYW5hKXtcclxuICAgICAgICAgICAgdGhpcy5fY01hbm5hID0gdGhpcy5fbWF4TWFuYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jTWFubmEgKz0gYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbG9hZFNwcml0ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMjsgaSA8IDY7ICsraSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUxpc3QucHVzaChsb2FkZXIuZ2V0QXNzZXRCeUlEKGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTcHJpdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRvT25PdmVybGFwKG92ZXJsYXBQb2ludDogbnVtYmVyW10pOiB2b2lkIHtcclxuICAgICAgICBpbnN0YW5jZS5zdGFydENvbWJhdChpbnN0YW5jZS5nZXRFbnRpdHlBdExvY2F0aW9uKG92ZXJsYXBQb2ludCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Njb3JlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jTWFubmE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21heE1hbmE6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2VuTWFuYSgpe1xyXG4gICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPiAwLjgpe1xyXG4gICAgICAgICAgICB0aGlzLm1vZGlmeU1hbm5hKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2dhbWVJbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tIFwiLi4vLi4vcmVuZGVyaW5nL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbiBleHRlbmRzIEVudGl0eXtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzdGFydExvY2F0aW9uOiBudW1iZXJbXSl7XHJcbiAgICAgICAgc3VwZXIodHJ1ZSwgc3RhcnRMb2NhdGlvbiwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmdldFNjb3JlKCkpICsgMik7XHJcbiAgICAgICAgdGhpcy5faXNGYXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUJlaGF2aW91cigpOiB2b2lkIHtcclxuICAgICAgICBpZihpbnN0YW5jZS5pc0luQ29tYmF0ICYmIHRoaXMuaXNJbkNvbWJldCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX0hQIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZGVsZXRlRW50aXR5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaXNJbkNvbWJhdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmFkZFNjb3JlKDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoTWF0aC5yYW5kb20oKSA+IDAuNil7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wbGF5ZXJSZWZlcmVuY2UubW9kaWZ5SFAoLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA+IDAuMil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsb2FkU3ByaXRlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVMaXN0LnB1c2gobG9hZGVyLmdldEFzc2V0QnlJRCg2KSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlTGlzdC5wdXNoKGxvYWRlci5nZXRBc3NldEJ5SUQoMTEpKTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVNwcml0ZSgwKTtcclxuICAgICAgICB0aGlzLnNldENvbWJhdFNwcml0ZSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZG9Pbk92ZXJsYXAob3ZlcmxhcFBvaW50OiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYW5jZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTQzYzlkYzcxZDJhNTZkNGJjNDZjMzNlMDY0NDBlYmMudHRmXCI7IiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tIFwiLi9hY3RvcnMvYWN0b3JcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vYWN0b3JzL2VuaXRpZXMvZW50aXR5XCI7XHJcbmltcG9ydCB7IFBMYXllciB9IGZyb20gXCIuL2FjdG9ycy9lbml0aWVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lTWFwIH0gZnJvbSBcIi4vbWFwL2dhbWVNYXBcIjtcclxuaW1wb3J0IHsgbWFzdGVyUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJpbmcvbWFzdGVyUmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lSW5zdGFuY2V7XHJcbiAgICBwdWJsaWMgcGxheWVyUmVmZXJlbmNlOiBQTGF5ZXI7XHJcbiAgICBwdWJsaWMgaXNJbkNvbWJhdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhhc0dhbWVFbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXR1cE1hcCgpe1xyXG4gICAgICAgIHRoaXMuX2dhbWVNYXAgPSBuZXcgR2FtZU1hcCgpO1xyXG4gICAgICAgIHRoaXMuX2FjdG9yTGlzdC5wdXNoKHRoaXMuX2dhbWVNYXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXR1cCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9jZWVkVHVybigpe1xyXG4gICAgICAgIHRoaXMuX2VudGl0eUxpc3QuZm9yRWFjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS5oYXNCZWhhdmlvdXIpe1xyXG4gICAgICAgICAgICAgICAgZS5leGVjdXRlQmVoYXZpb3VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZih0aGlzLnBsYXllclJlZmVyZW5jZS5nZXRIUCgpIDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmhhc0dhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydENvbWJhdChlbmVteTogRW50aXR5KXtcclxuICAgICAgICB0aGlzLmlzSW5Db21iYXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2VuZW15RW50aXR5ID0gZW5lbXk7XHJcbiAgICAgICAgdGhpcy5fZW5lbXlNYXhIUCA9IGVuZW15LmdldEhQKCk7XHJcbiAgICAgICAgZW5lbXkuaXNJbkNvbWJldCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZU5ld0FjdG9yKGFjdG9yOiBBY3Rvcil7XHJcbiAgICAgICAgdGhpcy5fYWN0b3JMaXN0LnB1c2goYWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVOZXdFbnRpdHkoZW50aXR5OiBFbnRpdHkpe1xyXG4gICAgICAgIHRoaXMuX2FjdG9yTGlzdC5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgdGhpcy5fZW50aXR5TGlzdC5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgZW50aXR5LmluZGV4ID0gdGhpcy5fZW50aXR5SW5kZXg7XHJcbiAgICAgICAgKyt0aGlzLl9lbnRpdHlJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWFwKCk6IEdhbWVNYXB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzT2NjdXBpZWRCeUVudGl0eShsb2NhdGlvbjogbnVtYmVyW10pOiBib29sZWFue1xyXG4gICAgICAgIGxldCBfb2NjOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZW50aXR5TGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLmdldExvY2F0aW9uKClbMF0gPT09IGxvY2F0aW9uWzBdICYmIGUuZ2V0TG9jYXRpb24oKVsxXSA9PT0gbG9jYXRpb25bMV0pe1xyXG4gICAgICAgICAgICAgICAgX29jYyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX29jYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RW50aXR5QXRMb2NhdGlvbihsb2NhdGlvbjogbnVtYmVyW10pOiBFbnRpdHl7XHJcbiAgICAgICAgbGV0IF9vY2NFbnQ6IEVudGl0eTtcclxuICAgICAgICB0aGlzLl9lbnRpdHlMaXN0LmZvckVhY2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKChlLmdldExvY2F0aW9uKClbMF0gPT09IGxvY2F0aW9uWzBdKSAmJiAoZS5nZXRMb2NhdGlvbigpWzFdID09PSBsb2NhdGlvblsxXSkpe1xyXG4gICAgICAgICAgICAgICAgX29jY0VudCA9IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX29jY0VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlRW50aXR5KGVudGl0eTogRW50aXR5KXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW50aXR5TGlzdC5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgIGlmKGVudGl0eS5pbmRleCA9PT0gdGhpcy5fZW50aXR5TGlzdFtpXS5pbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbnRpdHlMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RW5lbXlFbnRpdHkoKTogRW50aXR5e1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmVteUVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RW5lbXlNYXhIUCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmVteU1heEhQO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kUGxheWVyU3RhcnRMb2NhdGlvbigpOiBudW1iZXJbXXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ2FtZU1hcC5nZXRNYXBNYXRyaXgoKS5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLl9nYW1lTWFwLmdldE1hcE1hdHJpeCgpW2ldLmxlbmd0aDsgKytqKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2dhbWVNYXAuZ2V0TWFwTWF0cml4KClbal1baV0gPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaiwgaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE1hcFRpbGVBdExvY2F0aW9uKGxvY2F0aW9uOiBudW1iZXJbXSk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1hcC5nZXRNYXBNYXRyaXgoKVtsb2NhdGlvblswXV1bbG9jYXRpb25bMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZUluc3RhbmNlO1xyXG5cclxuICAgIHByaXZhdGUgX2dhbWVNYXA6IEdhbWVNYXA7XHJcbiAgICBwcml2YXRlIF9hY3Rvckxpc3Q6IEFjdG9yW107IC8vRXZlcnl0aGluZ1xyXG4gICAgcHJpdmF0ZSBfZW50aXR5TGlzdDogRW50aXR5W107IC8vRXZlcnl0aGluZyB3aXRoIEFJIGJlaGF2aW91clxyXG5cclxuICAgIHByaXZhdGUgX2VudGl0eUluZGV4OiBudW1iZXIgPSAwOyAvL3VuaXF1ZSBlbnRpdHkgaW5kZXggZm9yIGVhY2ggZW50aXR5IChYREREREREKVxyXG5cclxuICAgIHByaXZhdGUgX2VuZW15RW50aXR5OiBFbnRpdHk7XHJcbiAgICBwcml2YXRlIF9lbmVteU1heEhQOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX2FjdG9yTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuX2VudGl0eUxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmlzaFR1cm4oKXtcclxuICAgICAgICBtYXN0ZXJSZW5kZXJlci5yZW5kZXIodGhpcy5fZ2FtZU1hcCwgdGhpcy5fZW50aXR5TGlzdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZTogR2FtZUluc3RhbmNlID0gR2FtZUluc3RhbmNlLmdldEluc3RhbmNlKCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9jc3MvY2FuY2VyLmNzcydcclxuXHJcbmltcG9ydCB7IFBMYXllciB9IGZyb20gXCIuL2FjdG9ycy9lbml0aWVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuL2FjdG9ycy9lbml0aWVzL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIi4vZ2FtZUluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEJvc3MgfSBmcm9tICcuL2FjdG9ycy9lbml0aWVzL2Jvc3MnO1xyXG5cclxubGV0IHBsYXllcjogUExheWVyO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGluc3RhbmNlLnNldHVwTWFwKCk7XHJcblxyXG4gICAgcGxheWVyID0gbmV3IFBMYXllcihpbnN0YW5jZS5maW5kUGxheWVyU3RhcnRMb2NhdGlvbigpKTtcclxuICAgIGluc3RhbmNlLmNyZWF0ZU5ld0VudGl0eShwbGF5ZXIpO1xyXG4gICAgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlID0gcGxheWVyO1xyXG5cclxuICAgIGluc3RhbmNlLnNldHVwKCk7XHJcbn07XHJcbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUga2V5IHByZXNzIGV2ZW50c1xyXG5mdW5jdGlvbiBvbktleVByZXNzKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICghaW5zdGFuY2UuaGFzR2FtZUVuZGVkKSB7XHJcbiAgICAgICAgaWYgKHBsYXllci5oYW5kbGVJbnB1dChldmVudC5rZXlDb2RlKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5pc0luQ29tYmF0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDA7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuZ2V0TWFwVGlsZUF0TG9jYXRpb24oW2ksIGpdKSA9PT0gMCAmJiBNYXRoLnJhbmRvbSgpID4gMC45OTkgJiYgIWluc3RhbmNlLmlzT2NjdXBpZWRCeUVudGl0eShbaSwgal0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jcmVhdGVOZXdFbnRpdHkobmV3IFNrZWxldG9uKFtpLCBqXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS5wcm9jZWVkVHVybigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIExpc3RlbiBvbiBwcmVzc2luZyB0aGUga2V5c1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleVByZXNzKTtcclxuIiwibGV0IG1hcFNpemU6IG51bWJlciA9IDEwMDtcclxuXHJcbmxldCBncmlkOiBudW1iZXJbXVtdID0gbmV3IEFycmF5KG1hcFNpemUpO1xyXG5sZXQgZ3JpZDI6IG51bWJlcltdW10gPSBuZXcgQXJyYXkobWFwU2l6ZSk7XHJcblxyXG5sZXQgc2l6ZV94OiBudW1iZXIgPSBtYXBTaXplO1xyXG5sZXQgc2l6ZV95OiBudW1iZXIgPSBtYXBTaXplO1xyXG5cclxubGV0IHIxX2N1dG9mZjogbnVtYmVyID0gNTtcclxubGV0IHIyX2N1dG9mZjogbnVtYmVyID0gMjtcclxuXHJcbmZ1bmN0aW9uIGdpdmVSYW5kb20oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuODUgPyAxIDogMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIGxldCB4aTogbnVtYmVyID0gMDtcclxuICAgIGxldCB5aTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBmb3IgKHhpID0gMDsgeGkgPCBtYXBTaXplOyArK3hpKSB7XHJcbiAgICAgICAgZ3JpZFt4aV0gPSBuZXcgQXJyYXkobWFwU2l6ZSk7XHJcbiAgICAgICAgZ3JpZDJbeGldID0gbmV3IEFycmF5KG1hcFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoeWkgPSAxOyB5aSA8IHNpemVfeSAtIDE7IHlpKyspIHtcclxuICAgICAgICBmb3IgKHhpID0gMTsgeGkgPCBzaXplX3ggLSAxOyB4aSsrKSB7XHJcbiAgICAgICAgICAgIGdyaWRbeWldW3hpXSA9IGdpdmVSYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yICh5aSA9IDA7IHlpIDwgc2l6ZV95OyB5aSsrKSB7XHJcbiAgICAvLyAgICAgZm9yICh4aSA9IDA7IHhpIDwgc2l6ZV94OyB4aSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGdyaWQyW3lpXVt4aV0gPSAxO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBmb3IgKHlpID0gMDsgeWkgPCBzaXplX3k7IHlpKyspIHtcclxuICAgICAgICBncmlkW3lpXVswXSA9IGdyaWRbeWldW3NpemVfeCAtIDFdID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHhpID0gMDsgeGkgPCBzaXplX3g7IHhpKyspIHtcclxuICAgICAgICBncmlkWzBdW3hpXSA9IGdyaWRbc2l6ZV95IC0gMV1beGldID0gMTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZVNpbXVsYXRpb24oKSB7XHJcbiAgICBsZXQgeGk6IG51bWJlcjtcclxuICAgIGxldCB5aTogbnVtYmVyO1xyXG4gICAgbGV0IGlpOiBudW1iZXI7XHJcbiAgICBsZXQgamo6IG51bWJlcjtcclxuXHJcbiAgICBmb3IgKHlpID0gMTsgeWkgPCBzaXplX3kgLSAxOyB5aSsrKSB7XHJcbiAgICAgICAgZm9yICh4aSA9IDE7IHhpIDwgc2l6ZV94IC0gMTsgeGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYWRqY291bnRfcjE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGpjb3VudF9yMjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaWkgPSAtMTsgaWkgPD0gMTsgaWkrKylcclxuICAgICAgICAgICAgICAgIGZvciAoamogPSAtMTsgamogPD0gMTsgamorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmlkW3lpICsgaWldW3hpICsgampdICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkamNvdW50X3IxKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaWkgPSB5aSAtIDI7IGlpIDw9IHlpICsgMjsgaWkrKylcclxuICAgICAgICAgICAgICAgIGZvciAoamogPSB4aSAtIDI7IGpqIDw9IHhpICsgMjsgamorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpaSAtIHlpKSA9PSAyICYmIE1hdGguYWJzKGpqIC0geGkpID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpaSA8IDAgfHwgamogPCAwIHx8IGlpID49IHNpemVfeSB8fCBqaiA+PSBzaXplX3gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncmlkW2lpXVtqal0gIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqY291bnRfcjIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkamNvdW50X3IxID49IHIxX2N1dG9mZiB8fCBhZGpjb3VudF9yMiA8PSByMl9jdXRvZmYpXHJcbiAgICAgICAgICAgICAgICBncmlkMlt5aV1beGldID0gMTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZ3JpZDJbeWldW3hpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoeWkgPSAxOyB5aSA8IHNpemVfeSAtIDE7IHlpKyspXHJcbiAgICAgICAgZm9yICh4aSA9IDE7IHhpIDwgc2l6ZV94IC0gMTsgeGkrKylcclxuICAgICAgICAgICAgZ3JpZFt5aV1beGldID0gZ3JpZDJbeWldW3hpXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWFwKCk6IG51bWJlcltdW10ge1xyXG4gICAgaW5pdE1hcCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgaXRlcmF0ZVNpbXVsYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxufSIsImltcG9ydCB7IEFjdG9yIH0gZnJvbSBcIi4uL2FjdG9ycy9hY3RvclwiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZU1hcCB9IGZyb20gXCIuL2NlbGx1cmFsQXV0b21hdGFHZW5lcmF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU1hcCBleHRlbmRzIEFjdG9ye1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3TWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdlbmVyYXRlTmV3TWFwKCl7XHJcbiAgICAgICAgdGhpcy5fbWFwTWF0cml4ID0gZ2VuZXJhdGVNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWFwTWF0cml4KCk6IG51bWJlcltdW117XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcE1hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tYXBNYXRyaXg6IG51bWJlcltdW107XHJcbn1cclxuIiwiY2xhc3MgTG9hZGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUmVzb3VyY2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9vcicpIGFzIEhUTUxJbWFnZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsJykgYXMgSFRNTEltYWdlRWxlbWVudCk7IC8vMVxyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLWRvd24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVyby1sZWZ0JykgYXMgSFRNTEltYWdlRWxlbWVudCk7IC8vM1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLXJpZ2h0JykgYXMgSFRNTEltYWdlRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRMaXN0LnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8tdXAnKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTsgLy81XHJcbiAgICAgICAgdGhpcy5fYXNzZXRMaXN0LnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZWxldG9uJykgYXMgSFRNTEltYWdlRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRMaXN0LnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvc3MnKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTsgLy83XHJcbiAgICAgICAgdGhpcy5fYXNzZXRMaXN0LnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYXJ0aCcpIGFzIEhUTUxJbWFnZUVsZW1lbnQpOyBcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F2ZS1iZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQpOyAvLzlcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFubmEnKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tlbGV0b24tY29tYmF0JykgYXMgSFRNTEltYWdlRWxlbWVudCk7IC8vMTFcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGl0LXNwZWxsLWljb24nKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhbC1zcGVsbC1pY29uJykgYXMgSFRNTEltYWdlRWxlbWVudCk7IC8vMTNcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyZWJhbGwtc3BlbGwtaWNvbicpIGFzIEhUTUxJbWFnZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3NzLXVwJykgYXMgSFRNTEltYWdlRWxlbWVudCk7IC8vMTVcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9zcy1yaWdodCcpIGFzIEhUTUxJbWFnZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuX2Fzc2V0TGlzdC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3NzLWxlZnQnKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTsgLy8xN1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBc3NldEJ5SUQoSUQ6IG51bWJlcik6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hc3NldExpc3RbSURdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTG9hZGVyO1xyXG4gICAgcHJpdmF0ZSBfYXNzZXRMaXN0OiBIVE1MSW1hZ2VFbGVtZW50W107XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9hc3NldExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlciA9IExvYWRlci5nZXRJbnN0YW5jZSgpO1xyXG4iLCJpbXBvcnQgUGl4ZWJveSBmcm9tIFwiLi4vZm9udC9waXhib3kudHRmXCI7XHJcblxyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vYWN0b3JzL2VuaXRpZXMvZW50aXR5XCI7XHJcbmltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIi4uL2dhbWVJbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBHYW1lTWFwIH0gZnJvbSBcIi4uL21hcC9nYW1lTWFwXCI7XHJcbmltcG9ydCB7IGxvYWRlciB9IGZyb20gXCIuL0xvYWRlclwiO1xyXG5cclxuY2xhc3MgTWFzdGVyUmVuZGVyZXIge1xyXG4gICAgcHVibGljIGRlYnVnU3F1YXJlczogbnVtYmVyW11bXSA9IFtbXV07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcihtYXA6IEdhbWVNYXAsIGVudGl0eUxpc3Q6IEVudGl0eVtdKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5oYXNHYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmlzSW5Db21iYXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UobG9hZGVyLmdldEFzc2V0QnlJRCg5KSwgMCwgMClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UoaW5zdGFuY2UuZ2V0RW5lbXlFbnRpdHkoKS5nZXRDb21iYXRTcHJpdGUoKSwgNCAqIDcyLCAyLjUgKiA3Mik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1hcChtYXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFbml0aXRlcyhlbnRpdHlMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJVSSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMSlcIjtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZm9udCA9IFwiMTgwcHggUGl4ZWJveVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDIwMCwgMCwgMCwgMSlcIjtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KFwiR0FNRVwiLCB0aGlzLl93aWR0aCAvIDIgLSAxNzAsIHRoaXMuX2hlaWdodCAvIDIgLSA1Mik7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsVGV4dChcIk9WRVJcIiwgdGhpcy5fd2lkdGggLyAyIC0gMTcwLCB0aGlzLl9oZWlnaHQgLyAyICsgNTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEZWJ1Z1NxdWFyZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IE1hc3RlclJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5fY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJNYXAobWFwOiBHYW1lTWFwKSB7XHJcbiAgICAgICAgbGV0IHBsYXllckxvY2F0aW9uOiBudW1iZXJbXSA9IGluc3RhbmNlLnBsYXllclJlZmVyZW5jZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCB2aWV3TWF0cml4OiBudW1iZXJbXVtdID0gbmV3IEFycmF5KDEwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZpZXdNYXRyaXhbaV0gPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGlmIChpICsgcGxheWVyTG9jYXRpb25bMF0gLSA0IDwgMCB8fCBqICsgcGxheWVyTG9jYXRpb25bMV0gLSA0IDwgMCB8fCBqICsgcGxheWVyTG9jYXRpb25bMV0gLSA0ID4gOTkgfHwgaSArIHBsYXllckxvY2F0aW9uWzBdIC0gNCA+IDk5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld01hdHJpeFtpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdNYXRyaXhbaV1bal0gPSBpbnN0YW5jZS5nZXRNYXAoKS5nZXRNYXBNYXRyaXgoKVtpICsgcGxheWVyTG9jYXRpb25bMF0gLSA0XVtqICsgcGxheWVyTG9jYXRpb25bMV0gLSA0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShsb2FkZXIuZ2V0QXNzZXRCeUlEKHZpZXdNYXRyaXhbaV1bal0pLCBpICogNzIsIGogKiA3Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJFbml0aXRlcyhlbnRpdHlMaXN0OiBFbnRpdHlbXSkge1xyXG4gICAgICAgIGxldCBwbGF5ZXJMb2NhdGlvbjogbnVtYmVyW10gPSBpbnN0YW5jZS5wbGF5ZXJSZWZlcmVuY2UuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBsZXQgZW50aXR5TG9jYXRpb246IG51bWJlcltdO1xyXG4gICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UoZW50aXR5TGlzdFswXS5nZXRBY3RpdmVTcHJpdGUoKSwgNCAqIDcyLCA0ICogNzIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGVudGl0eUxpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgZW50aXR5TG9jYXRpb24gPSBlbnRpdHlMaXN0W2ldLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UoZW50aXR5TGlzdFtpXS5nZXRBY3RpdmVTcHJpdGUoKSwgKGVudGl0eUxvY2F0aW9uWzBdIC0gKHBsYXllckxvY2F0aW9uWzBdIC0gNCkpICogNzIsIChlbnRpdHlMb2NhdGlvblsxXSAtIChwbGF5ZXJMb2NhdGlvblsxXSAtIDQpKSAqIDcyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJVSSgpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuaXNJbkNvbWJhdCkge1xyXG4gICAgICAgICAgICAvL1RlbXBvcmFyeSBVSSBiYWNrZ3JvdW5kIGRyYXdcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IFwicmdiYSg0MCwgNDAsIDMwLCAxKVwiXHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdCgwLCA1NTAsIDcyMCwgMjUwKTtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxNDAsIDE0MCwgMTMwLCAxKVwiXHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdCgwLCA1NTAsIDcyMCwgMjApO1xyXG5cclxuICAgICAgICAgICAgLy9TdGF0IGRyYXcgZm9yIHBsYXllclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RhbmNlLnBsYXllclJlZmVyZW5jZS5nZXRIUCgpOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5kcmF3SW1hZ2UobG9hZGVyLmdldEFzc2V0QnlJRCg4KSwgaSAqIDMyLCA1NzQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmdldE1hbm5hKCk7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShsb2FkZXIuZ2V0QXNzZXRCeUlEKDEwKSwgMzYwICsgaSAqIDMyLCA1NzQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1N0YXQgZHJhdyBmb3IgZW5lbXlcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgzMCwgNjAsIDQwLCAxKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFJlY3QodGhpcy5fd2lkdGggLyAyIC0gNTAsIDIgKiA3MiwgMTAwLCAyMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDIzMCwgMzAsIDQwLCAxKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFJlY3QodGhpcy5fd2lkdGggLyAyIC0gNTAsIDIgKiA3MiwgKGluc3RhbmNlLmdldEVuZW15RW50aXR5KCkuZ2V0SFAoKSAvIGluc3RhbmNlLmdldEVuZW15TWF4SFAoKSkgKiAxMDAsIDIwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgxNzAsIDE3MCwgMTcwLCAxKVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9jdHgubGluZVdpZHRoID0gMztcclxuICAgICAgICAgICAgdGhpcy5fY3R4LnN0cm9rZVJlY3QodGhpcy5fd2lkdGggLyAyIC0gNTAsIDIgKiA3MiwgMTAwLCAyMCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTI7IGkgPCAxNTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZHJhd0ltYWdlKGxvYWRlci5nZXRBc3NldEJ5SUQoaSksIDMwICsgKChpIC0gMTIpICogMTAwKSwgNjc0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZm9udCA9IFwiMzBweCBQaXhlYm95XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFRleHQoKGkgLSAxMSkudG9TdHJpbmcoKSwgNDAgKyAoKGkgLSAxMikgKiAxMDApLCA3MDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMSlcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5zdHJva2VUZXh0KChpIC0gMTEpLnRvU3RyaW5nKCksIDQwICsgKChpIC0gMTIpICogMTAwKSwgNzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vVGVtcG9yYXJ5IFVJIGJhY2tncm91bmQgZHJhd1xyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDEwMCwgMTAwLCA1MCwgMSlcIlxyXG4gICAgICAgICAgICB0aGlzLl9jdHguZmlsbFJlY3QoMCwgNzIwLCA3MjAsIDgwKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmdldEhQKCk7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShsb2FkZXIuZ2V0QXNzZXRCeUlEKDgpLCBpICogMTYsIDcyNCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmdldE1hbm5hKCk7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShsb2FkZXIuZ2V0QXNzZXRCeUlEKDEwKSwgMjEwICsgaSAqIDE2LCA3MjQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9jdHguZm9udCA9IFwiNjBweCBQaXhlYm95XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMSlcIjtcclxuICAgICAgICAgICAgdGhpcy5fY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgaW5zdGFuY2UucGxheWVyUmVmZXJlbmNlLmdldFNjb3JlKCksIDQ0MCwgNzc1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEZWJ1Z1NxdWFyZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMCwwLDAuNSlcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGVidWdTcXVhcmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsUmVjdCgodGhpcy5kZWJ1Z1NxdWFyZXNbaV1bMF0gKiA3MiArIDEwKSwgKHRoaXMuZGVidWdTcXVhcmVzW2ldWzFdICogNzIgKyAxMCksIDUyLCA1Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdTcXVhcmVzID0gW1tdXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hc3RlclJlbmRlcmVyOiBNYXN0ZXJSZW5kZXJlciA9IE1hc3RlclJlbmRlcmVyLmdldEluc3RhbmNlKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=