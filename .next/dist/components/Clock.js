'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/KRM-MacBookPro/Copy/_experiments/ericelliot/rejection/components/Clock.js';

exports.default = function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;

  return _react2.default.createElement('div', { className: light ? 'light' : '', 'data-jsx': 2133350788,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, format(new Date(lastUpdate)), _react2.default.createElement(_style2.default, {
    styleId: 2133350788,
    css: 'div[data-jsx="2133350788"] {padding: 15px;display: inline-block;color: #82FA58;font: 50px menlo, monaco, monospace;background-color: #000;}.light[data-jsx="2133350788"] {background-color: #999;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWtCLEFBQ0wsNEJBQ1csY0FDUSxzQkFDUCxlQUNxQixvQ0FDYix1QkFDeEIsQ0FDTywrQkFDaUIsdUJBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2xvY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0tSTS1NYWNCb29rUHJvL0NvcHkvX2V4cGVyaW1lbnRzL2VyaWNlbGxpb3QvcmVqZWN0aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgbGFzdFVwZGF0ZSwgbGlnaHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtsaWdodCA/ICdsaWdodCcgOiAnJ30+XG4gICAgICB7Zm9ybWF0KG5ldyBEYXRlKGxhc3RVcGRhdGUpKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzgyRkE1ODtcbiAgICAgICAgICBmb250OiA1MHB4IG1lbmxvLCBtb25hY28sIG1vbm9zcGFjZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5saWdodCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IGZvcm1hdCA9IHQgPT4gYCR7cGFkKHQuZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHQuZ2V0VVRDTWludXRlcygpKX06JHtwYWQodC5nZXRVVENTZWNvbmRzKCkpfWBcblxuY29uc3QgcGFkID0gbiA9PiBuIDwgMTAgPyBgMCR7bn1gIDogbiJdfQ== */\n/*@ sourceURL=components/Clock.js */'
  }));
};

var format = function format(t) {
  return pad(t.getUTCHours()) + ':' + pad(t.getUTCMinutes()) + ':' + pad(t.getUTCSeconds());
};

var pad = function pad(n) {
  return n < 10 ? '0' + n : n;
};