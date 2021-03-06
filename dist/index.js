(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["athos-react-count-down"] = factory();
	else
		root["athos-react-count-down"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpathos_react_count_down([1],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Timer_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Timer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Timer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_draggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_draggable__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = {
      dias: ("0" + _this.props.dias).slice(-2),
      horas: ("0" + _this.props.horas).slice(-2),
      minutos: ("0" + _this.props.minutos).slice(-2),
      segundos: ("0" + _this.props.segundos).slice(-2)
    };
    return _this;
  }

  _createClass(Timer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      if (this.state.segundos === "00" && this.state.minutos === "00" && this.state.horas === "00" && this.state.dias === "00") {
        this.pararTimer();
      } else {
        if (this.state.segundos > 0) {
          this.descontarSegundo();
        } else {
          if (this.state.minutos > 0) {
            this.descontarMinuto();
          } else {
            if (this.state.horas > 0) {
              this.descontarHora();
            } else {
              this.descontarDia();
            }
          }
        }
      }
    }
  }, {
    key: 'pararTimer',
    value: function pararTimer() {
      console.log('parar');
      clearInterval(this.timerID);
      this.setState({
        dias: "00",
        horas: "00",
        minutos: "00",
        segundos: "00"
      });
      this.cambiarColor();
    }
  }, {
    key: 'cambiarColor',
    value: function cambiarColor() {
      var cajas = document.querySelectorAll('.ont');
      var time = 0;
      cajas.forEach(function (caja) {
        // caja.style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
        // caja.style.transition = "all 2s";       // Standard syntax
        // caja.classList.remove("color");
        setTimeout(function () {
          caja.classList.toggle("finish");
        }, time);
        time += 100;
      });
    }
  }, {
    key: 'descontarDia',
    value: function descontarDia() {
      this.setState({
        dias: ("0" + (this.state.dias - 1)).slice(-2),
        horas: ("0" + (this.state.horas + 23)).slice(-2),
        minutos: ("0" + (this.state.minutos + 59)).slice(-2),
        segundos: ("0" + (this.state.minutos + 59)).slice(-2)
      });
    }
  }, {
    key: 'descontarHora',
    value: function descontarHora() {
      this.setState({
        horas: ("0" + (this.state.horas - 1)).slice(-2),
        minutos: ("0" + (this.state.minutos + 59)).slice(-2),
        segundos: ("0" + (this.state.minutos + 59)).slice(-2)
      });
    }
  }, {
    key: 'descontarMinuto',
    value: function descontarMinuto() {
      this.setState({
        minutos: ("0" + (this.state.minutos - 1)).slice(-2),
        segundos: ("0" + (this.state.minutos + 59)).slice(-2)
      });
    }
  }, {
    key: 'descontarSegundo',
    value: function descontarSegundo() {
      this.setState({
        segundos: ("0" + (this.state.segundos - 1)).slice(-2)
      });
    }
  }, {
    key: 'reloj',
    value: function reloj() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ont color' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'numbers' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tipo' },
              'Dias'
            ),
            this.state.dias
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ont color' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'numbers' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tipo' },
              'Horas'
            ),
            this.state.horas
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ont color' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'numbers' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tipo' },
              'Minutos'
            ),
            this.state.minutos
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ont color' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'numbers' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'tipo' },
              'Segundos'
            ),
            this.state.segundos
          )
        )
      );
    }
  }, {
    key: 'relojArrastrable',
    value: function relojArrastrable(algo) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_draggable___default.a,
          {
            axis: 'both',
            handle: '.handle',
            defaultPosition: { x: 0, y: 0 },
            position: null,
            grid: [1, 1],
            onStart: this.handleStart,
            onDrag: this.handleDrag,
            onStop: this.handleStop },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'handle' },
            algo
          )
        )
      );
    }
  }, {
    key: 'salida',
    value: function salida() {
      console.log('aa', this.props.arrastrable);

      if (this.props.arrastrable == "true") {
        return this.relojArrastrable(this.reloj());
      } else {
        return this.reloj();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        this.salida()
      );
    }
  }]);

  return Timer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Timer, null), document.getElementById('root'));

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(30)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./Timer.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./Timer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".color{\n  background: #9c9c9c;\n  background: -webkit-linear-gradient(top, #9c9c9c, #575757);\n  background: -moz-linear-gradient(top, #9c9c9c, #575757);\n  background: -ms-linear-gradient(top, #9c9c9c, #575757);\n  background: -o-linear-gradient(top, #9c9c9c, #575757);\n  background: linear-gradient(to bottom, #9c9c9c, #575757);\n  /*-webkit-transition: all 1s linear;\n  -moz-transition: all 1s linear;\n  -o-transition: all 1s linear;\n  transition: all 1s linear;*/\n  position: relative;\n  left: 0\n}\n\n.color.finish{\n  transform: rotate(360deg);\n  -webkit-transition: all 0.2s linear;\n  -moz-transition: all 0.2s linear;\n  -o-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  background: #6d91bb;\n  background: -webkit-linear-gradient(top, #6d91bb, #074c79);\n  background: -moz-linear-gradient(top, #6d91bb, #074c79);\n  background: -ms-linear-gradient(top, #6d91bb, #074c79);\n  background: -o-linear-gradient(top, #6d91bb, #074c79);\n  background: linear-gradient(to bottom, #6d91bb, #074c79);\n}\n\n.ont{\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    -webkit-border-radius: 28;\n    -moz-border-radius: 28;\n    border-radius: 28px;\n    font-family: Arial;\n    color: #ffffff;\n    font-size: 60px;\n    /*padding: 10px 20px 10px 20px;*/\n    text-decoration: none;\n    border: 1px solid black;\n    margin: 5px;\n    text-align: center\n  }\n\n.tipo{\n  font-size:10px;\n  display: block;\n}\n\n.numbers{\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);}\n", ""]);

// exports


/***/ })

},[15]);
});