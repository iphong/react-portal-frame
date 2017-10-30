(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);var _events=__webpack_require__(4);var _events2=_interopRequireDefault(_events);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var noop=function noop(){};var EVENTS={};_events2.default.forEach(function(e){return EVENTS[e]=noop;});var Frame=function(_React$PureComponent){_inherits(Frame,_React$PureComponent);function Frame(){_classCallCheck(this,Frame);return _possibleConstructorReturn(this,(Frame.__proto__||Object.getPrototypeOf(Frame)).apply(this,arguments));}_createClass(Frame,[{key:'getChildContext',value:function getChildContext(){return{frame:this,window:this.window,document:this.document};}},{key:'componentWillMount',value:function componentWillMount(){this.handleLoad=this.handleLoad.bind(this);this.el=document.createElement('div');this.setState({loaded:false});}},{key:'componentDidMount',value:function componentDidMount(){this.frame.addEventListener('load',this.handleLoad,true);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.frame.removeEventListener('load',this.handleLoad,true);delete this.frame;delete this.el;}},{key:'handleLoad',value:function handleLoad(){this.document.head.innerHTML=this.props.head||'';var root=this.frame.contentDocument.querySelector('html');this.frame.contentDocument.body.remove();this.setState({root:root});}},{key:'render',value:function render(){var _this2=this,_extends2;return _react2.default.createElement('iframe',_extends({},this.props,{ref:function ref(el){return _this2.frame=el;},srcDoc:'<!DOCTYPE html>',style:_extends((_extends2={border:0},_defineProperty(_extends2,'border',0),_defineProperty(_extends2,'width','100%'),_extends2),this.props.style)}),this.state.root?_reactDom2.default.createPortal(_react2.default.createElement('body',EVENTS,this.props.children),this.state.root):null);}},{key:'document',get:function get(){return this.frame?this.frame.contentDocument:void 0;}},{key:'window',get:function get(){return this.frame?this.frame.contentWindow:void 0;}}]);return Frame;}(_react2.default.PureComponent);Frame.propTypes={children:_propTypes2.default.any,style:_propTypes2.default.object,head:_propTypes2.default.any};Frame.childContextTypes={frame:_propTypes2.default.any,window:_propTypes2.default.any,document:_propTypes2.default.any};exports.default=Frame;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});// Extract from React using the following query
/**
 $$('.gatsby-highlight')
 .filter(el => el.querySelector('code'))
 .map(el => el.querySelector('code')
 .innerText).join(' ')
 .replace(/(\r|\n|\r\n|\s)+/g, ' ')
 .split(' ')
 .filter(n => n.match(/^on[A-Z]\w+$/))
 .map(n => `'${n}'`)
 .join(',')
 **/exports.default=['onCopy','onCopyCapture','onCut','onCutCapture','onPaste','onPasteCapture','onCompositionEnd','onCompositionEndCapture','onCompositionStart','onCompositionStartCapture','onCompositionUpdate','onCompositionUpdateCapture','onKeyDown','onKeyDownCapture','onKeyPress','onKeyPressCapture','onKeyUp','onKeyUpCapture','onFocus','onFocusCapture','onBlur','onBlurCapture','onChange','onChangeCapture','onInput','onInputCapture','onInvalid','onInvalidCapture','onSubmit','onSubmitCapture','onClick','onClickCapture','onContextMenu','onContextMenuCapture','onDoubleClick','onDoubleClickCapture','onDrag','onDragCapture','onDragEnd','onDragEndCapture','onDragEnter','onDragEnterCapture','onDragExit','onDragExitCapture','onDragLeave','onDragLeaveCapture','onDragOver','onDragOverCapture','onDragStart','onDragStartCapture','onDrop','onDropCapture','onMouseDown','onMouseDownCapture','onMouseEnter','onMouseLeave','onMouseMove','onMouseMoveCapture','onMouseOut','onMouseOutCapture','onMouseOver','onMouseOverCapture','onMouseUp','onMouseUpCapture','onSelect','onSelectCapture','onTouchCancel','onTouchCancelCapture','onTouchEnd','onTouchEndCapture','onTouchMove','onTouchMoveCapture','onTouchStart','onTouchStartCapture','onScroll','onScrollCapture','onWheel','onWheelCapture','onAbort','onAbortCapture','onCanPlay','onCanPlayCapture','onCanPlayThrough','onCanPlayThroughCapture','onDurationChange','onDurationChangeCapture','onEmptied','onEmptiedCapture','onEncrypted','onEncryptedCapture','onEnded','onEndedCapture','onError','onErrorCapture','onLoadedData','onLoadedDataCapture','onLoadedMetadata','onLoadedMetadataCapture','onLoadStart','onLoadStartCapture','onPause','onPauseCapture','onPlay','onPlayCapture','onPlaying','onPlayingCapture','onProgress','onProgressCapture','onRateChange','onRateChangeCapture','onSeeked','onSeekedCapture','onSeeking','onSeekingCapture','onStalled','onStalledCapture','onSuspend','onSuspendCapture','onTimeUpdate','onTimeUpdateCapture','onVolumeChange','onVolumeChangeCapture','onWaiting','onWaitingCapture','onLoad','onLoadCapture','onError','onErrorCapture','onAnimationStart','onAnimationStartCapture','onAnimationEnd','onAnimationEndCapture','onAnimationIteration','onAnimationIterationCapture','onTransitionEnd','onTransitionEndCapture','onToggle','onToggleCapture'];

/***/ })
/******/ ])));