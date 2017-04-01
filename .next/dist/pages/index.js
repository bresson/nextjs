'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _store = require('../store');

var _dashboard = require('../components/dashboard');

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