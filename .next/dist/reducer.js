'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { lastUpdate: 0, light: false };
  var action = arguments[1];

  switch (action.type) {
    case 'TICK':
      return { lastUpdate: action.ts, light: !!action.light };
    default:
      return state;
  }
};