'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = exports.startClock = undefined;

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _redux = require('redux');

var _reducer = require('./reducer');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'


// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

// export const initStore = (initialState) => {
//   return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
// }
var startClock = exports.startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({ type: 'TICK', light: true, ts: Date.now() });
    }, 800);
  };
};

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(_reducer.reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);