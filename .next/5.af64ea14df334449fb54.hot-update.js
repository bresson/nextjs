webpackHotUpdate(5,{

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(558);

var _link2 = _interopRequireDefault(_link);

__webpack_require__(573);

var _store = __webpack_require__(586);

var _dashboard = __webpack_require__(584);

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/KRM-MacBookPro/Copy/_experiments/ericelliot/rejection/pages/index.js?entry';


var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  (0, _createClass3.default)(App, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var store = _ref2.store,
            isServer = _ref2.isServer;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-undef
                store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() });
                return _context.abrupt('return', { isServer: isServer });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {};

    //this.showAlert = this.showAlert.bind(this);

    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('this props', _store.nextConnect, this.props, this.state);
      //this.timer = this.props.dispatch(startClock())
      this.timer = this.props.startClock();
      console.log('hello', this.showAlert());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'showAlert',
    value: function showAlert() {
      console.log(this);
      console.log(this.props.isServer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, console.log('this inside method', this.showAlert()), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.showAlert();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Click'), _react2.default.createElement(_dashboard2.default, { title: 'Index Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

function mapDispatchToProps(dispatch) {
  return {
    startClock: function startClock() {
      dispatch((0, _store.startClock)());
    }
  };
}

exports.default = (0, _store.nextConnect)(function (state) {
  return state;
}, mapDispatchToProps)(App);

// <head title={ this.props.title} />
// <header />
// <dashboard>
//   <panel>
//     <rejectionForm />
//   </panel>
//   <panel>
//     <calendar />
//     <score />
//     <editableRejectionLis>
//       <rejections />
//     <editableRejectionList />
//   </panel>
// </dashboard>
// <fooer />

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/KRM-MacBookPro/Copy/_experiments/ericelliot/rejection/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/KRM-MacBookPro/Copy/_experiments/ericelliot/rejection/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ1A7O0FBQ3dDOztBQUNsQjs7Ozs7Ozs7O0lBR2hCOzs7Ozs7O1lBQzRCO1lBQU87Ozs7bUJBQ3JDO0FBQ0E7c0JBQU0sU0FBUyxFQUFFLE1BQU0sUUFBUSxPQUFPLENBQUMsVUFBVSxJQUFJLEtBQUs7aURBQ25ELEVBQUUsVUFBRjs7Ozs7Ozs7Ozs7Ozs7O0FBR1g7OztlQUFZLE9BQU07d0NBQUE7O2dJQUVkOztVQUFLLFFBSUw7O0FBTmM7O1dBUWY7Ozs7O3dDQUdDO2NBQVEsSUFBa0Isa0NBQWEsS0FBSyxPQUFPLEtBQ3BEO0FBQ0E7V0FBSyxRQUFRLEtBQUssTUFDbEI7Y0FBUSxJQUFLLFNBQVMsS0FDdEI7Ozs7MkNBR0M7b0JBQWMsS0FDZjs7OztnQ0FHQztjQUFRLElBQ1I7Y0FBUSxJQUFJLEtBQUssTUFDbEI7Ozs7NkJBRVM7bUJBQ1I7OzZCQUNFOztvQkFBQTtzQkFDRztBQURIO0FBQUEsaUJBQ1csSUFBSSxzQkFBc0IsS0FDbkMsd0RBQVEsU0FBVTtpQkFBTSxPQUFLO0FBQTdCO29CQUFBO3NCQUFBO0FBQUE7U0FDQSwwQkFBQyxxQ0FBVSxPQUFNLGNBQWEsUUFBTztvQkFBckM7c0JBR0w7QUFISzs7Ozs7O0VBdENVLGdCQUFNOztBQTRDeEIsU0FBUyxtQkFBbUIsVUFDeEI7O2dCQUNnQixzQkFBTztlQUF1QjtBQUVqRDtBQUZPO0FBSVI7OzBDQUEyQixVQUFDLE9BQUQ7U0FBVztBQUF2QixHQUE4QixvQkFBb0I7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZIiwiZmlsZSI6IjUuYWY2NGVhMTRkZjMzNDQ0OWZiNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IG5leHRDb25uZWN0LCBzdGFydENsb2NrIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdUSUNLJywgbGlnaHQ6ICFpc1NlcnZlciwgdHM6IERhdGUubm93KCkgfSlcbiAgICByZXR1cm4geyBpc1NlcnZlciB9XG4gIH1cblxuY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIFxuICAgIH07XG5cbiAgICAvL3RoaXMuc2hvd0FsZXJ0ID0gdGhpcy5zaG93QWxlcnQuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIHByb3BzJywgbmV4dENvbm5lY3QsIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpXG4gICAvL3RoaXMudGltZXIgPSB0aGlzLnByb3BzLmRpc3BhdGNoKHN0YXJ0Q2xvY2soKSlcbiAgIHRoaXMudGltZXIgPSB0aGlzLnByb3BzLnN0YXJ0Q2xvY2soKTtcbiAgIGNvbnNvbGUubG9nKCAnaGVsbG8nLCB0aGlzLnNob3dBbGVydCgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICBzaG93QWxlcnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmlzU2VydmVyKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NvbnNvbGUubG9nKCd0aGlzIGluc2lkZSBtZXRob2QnLCB0aGlzLnNob3dBbGVydCgpKX1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5zaG93QWxlcnQoKX0gPkNsaWNrPC9idXR0b24+XG4gICAgICAgIDxEYXNoYm9hcmQgdGl0bGU9J0luZGV4IFBhZ2UnIGxpbmtUbz0nL290aGVyJyAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybih7XG4gICAgICAgIHN0YXJ0Q2xvY2s6ICgpID0+IHtkaXNwYXRjaChzdGFydENsb2NrKCkpfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5leHRDb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuXG4vLyA8aGVhZCB0aXRsZT17IHRoaXMucHJvcHMudGl0bGV9IC8+XG4vLyA8aGVhZGVyIC8+XG4vLyA8ZGFzaGJvYXJkPlxuLy8gICA8cGFuZWw+XG4vLyAgICAgPHJlamVjdGlvbkZvcm0gLz5cbi8vICAgPC9wYW5lbD5cbi8vICAgPHBhbmVsPlxuLy8gICAgIDxjYWxlbmRhciAvPlxuLy8gICAgIDxzY29yZSAvPlxuLy8gICAgIDxlZGl0YWJsZVJlamVjdGlvbkxpcz5cbi8vICAgICAgIDxyZWplY3Rpb25zIC8+XG4vLyAgICAgPGVkaXRhYmxlUmVqZWN0aW9uTGlzdCAvPlxuLy8gICA8L3BhbmVsPlxuLy8gPC9kYXNoYm9hcmQ+XG4vLyA8Zm9vZXIgLz5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=