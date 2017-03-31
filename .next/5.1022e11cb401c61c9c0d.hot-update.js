webpackHotUpdate(5,{

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

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

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('this props', _store.nextConnect, this.props, this.state);
      this.timer = this.props.startClock();
      console.log(this.timer);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.timer, ' !'), _react2.default.createElement(_dashboard2.default, { title: 'Index Page', linkTo: '/other', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }));
    }
  }], [{
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

  return App;
}(_react2.default.Component);

// function mapDispatchToProps(dispatch) {
//     return({
//         startClock: () => {dispatch(startClock)}
//     })
// }

exports.default = (0, _store.nextConnect)(function (state) {
  return state;
}, function (startClock) {
  return store.dispatch(startClock());
})(App);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ1A7O0FBQzRCOztBQUNOOzs7Ozs7Ozs7SUFHaEI7Ozs7Ozs7Ozs7O3dDQVFGO2NBQVEsSUFBa0Isa0NBQWEsS0FBSyxPQUFPLEtBQ3BEO1dBQUssUUFBUSxLQUFLLE1BQ2xCO2NBQVEsSUFBSSxLQUNaOzs7OzJDQUdDO29CQUFjLEtBQ2Y7Ozs7NkJBR0M7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRTs7b0JBQUE7c0JBQUk7QUFBSjtBQUFBLGNBQVMsT0FDVCx1QkFBQyxxQ0FBVSxPQUFNLGNBQWEsUUFBTztvQkFBckM7c0JBR0w7QUFISzs7Ozs7OztZQXBCMEI7WUFBTzs7OzttQkFDckM7QUFDQTtzQkFBTSxTQUFTLEVBQUUsTUFBTSxRQUFRLE9BQU8sQ0FBQyxVQUFVLElBQUksS0FBSztpREFDbkQsRUFBRSxVQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSk8sZ0JBQU07O0FBMkJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUdBOzswQ0FBMkIsVUFBQyxPQUFEO1NBQVc7QUFBdkIsR0FBOEI7U0FBYyxNQUFNLFNBQVM7QUFBM0QsR0FBMEU7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZIiwiZmlsZSI6IjUuMTAyMmUxMWNiNDAxYzYxYzljMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7IG5leHRDb25uZWN0IH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdUSUNLJywgbGlnaHQ6ICFpc1NlcnZlciwgdHM6IERhdGUubm93KCkgfSlcbiAgICByZXR1cm4geyBpc1NlcnZlciB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgcHJvcHMnLCBuZXh0Q29ubmVjdCwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSlcbiAgIHRoaXMudGltZXIgPSB0aGlzLnByb3BzLnN0YXJ0Q2xvY2soKVxuICAgY29uc29sZS5sb2codGhpcy50aW1lcilcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57dGhpcy50aW1lcn0gITwvcD5cbiAgICAgICAgPERhc2hib2FyZCB0aXRsZT0nSW5kZXggUGFnZScgbGlua1RvPScvb3RoZXInIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4vLyAgICAgcmV0dXJuKHtcbi8vICAgICAgICAgc3RhcnRDbG9jazogKCkgPT4ge2Rpc3BhdGNoKHN0YXJ0Q2xvY2spfVxuLy8gICAgIH0pXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IG5leHRDb25uZWN0KChzdGF0ZSkgPT4gc3RhdGUsIHN0YXJ0Q2xvY2sgPT4gc3RvcmUuZGlzcGF0Y2goc3RhcnRDbG9jaygpKSkoQXBwKVxuXG4vLyA8aGVhZCB0aXRsZT17IHRoaXMucHJvcHMudGl0bGV9IC8+XG4vLyA8aGVhZGVyIC8+XG4vLyA8ZGFzaGJvYXJkPlxuLy8gICA8cGFuZWw+XG4vLyAgICAgPHJlamVjdGlvbkZvcm0gLz5cbi8vICAgPC9wYW5lbD5cbi8vICAgPHBhbmVsPlxuLy8gICAgIDxjYWxlbmRhciAvPlxuLy8gICAgIDxzY29yZSAvPlxuLy8gICAgIDxlZGl0YWJsZVJlamVjdGlvbkxpcz5cbi8vICAgICAgIDxyZWplY3Rpb25zIC8+XG4vLyAgICAgPGVkaXRhYmxlUmVqZWN0aW9uTGlzdCAvPlxuLy8gICA8L3BhbmVsPlxuLy8gPC9kYXNoYm9hcmQ+XG4vLyA8Zm9vZXIgLz5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=