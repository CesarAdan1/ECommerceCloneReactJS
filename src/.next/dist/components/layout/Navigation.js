'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/Navigation.js';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _propTypes = require('prop-types');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _angleDown = require('react-icons/lib/fa/angle-down');

var _angleDown2 = _interopRequireDefault(_angleDown);

var _NavigationLink = require('./NavigationLink');

var _NavigationLink2 = _interopRequireDefault(_NavigationLink);

var _website_stores = require('../dummy_data/website_stores.json');

var _website_stores2 = _interopRequireDefault(_website_stores);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var options = _website_stores2.default;

/**
 * Empty Select box
 * @param {Object} selectbox Object
 * @returns {Object} none
 */
function removeOptions(selectbox) {
  var i = void 0;
  for (i = selectbox.options.length - 1; i >= 0; i -= 1) {
    selectbox.remove(i);
  }
}
/**
 * Set Country language
 * @returns {String} Redirect or Refresh
 */
function setCountryLang() {
  var lang = document.getElementById('lang_code').value;
  var code = document.getElementById('curr_web_code').innerHTML;
  var currURL = window.location.href.replace(lang, code);
  window.location.assign(currURL);
}
// const defaultCOption = options[0];
var dropDownOnChange = function dropDownOnChange(change) {
  var webId = change.newValue;
  var storeoptdata = [];
  var webFlag = '';
  var code = '';
  var storeDD = document.getElementById('stores');
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? storeoptdata = wsdata.stores : '';
  });
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? webFlag = wsdata.flag : '';
  });
  _website_stores2.default.map(function (wsdata) {
    return wsdata.websiteId == webId ? code = wsdata.code : '';
  });

  document.getElementById('country_flag_img').src = webFlag;
  // document.getElementById('country_flag_img2').src = webFlag;
  // document.getElementById('country_flag_main').src = webFlag;
  document.getElementById('curr_web_code').innerHTML = code;
  // document.getElementById('myDropdown2').value = web_id;
  // var store_dd2 = document.getElementById('stores2');
  removeOptions(storeDD);
  // removeOptions(store_dd2);
  storeoptdata.forEach(function (opt) {
    return storeDD.options.add(new Option(opt.name, opt.storeId, false));
  });
  // storeoptdata.forEach((opt)=>store_dd2.options.add(new Option(opt.name, opt.storeId,false)));
};
var Dropdown = _react2.default.createClass({
  displayName: 'Dropdown',

  propTypes: {
    id: _react2.default.PropTypes.string.isRequired,
    options: _react2.default.PropTypes.array.isRequired,
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
    valueField: _react2.default.PropTypes.string,
    labelField: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      value: null,
      valueField: 'value',
      labelField: 'label',
      onChange: null
    };
  },
  getInitialState: function getInitialState() {
    var selected = this.getSelFPro(this.props);
    return {
      selected: selected
    };
  },
  getSelFPro: function getSelFPro(props) {
    var selected = void 0;
    if (props.value === null && props.options.length !== 0) {
      selected = props.options[0][props.valueField];
    } else {
      selected = props.value;
    }
    return selected;
  },

  handleChange: function handleChange(e) {
    if (this.props.onChange) {
      var change = { oldValue: this.state.selected, newValue: e.target.value };
      this.props.onChange(change);
    }
    this.setState({ selected: e.target.value });
  },
  render: function render() {
    var self = this;
    var ddoptions = self.props.options.map(function (option) {
      return _react2.default.createElement('option', { key: option[self.props.valueField], value: option[self.props.valueField], __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, option[self.props.labelField]);
    });
    return _react2.default.createElement('select', { id: this.props.id, className: 'country-select', value: this.state.selected, onChange: this.handleChange, 'data-jsx': 682895443,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, _react2.default.createElement(_style2.default, {
      styleId: 682895443,
      css: '.form-control[data-jsx="682895443"]{float:left;height:30px;width:200px;}\n/*@ sourceURL=src/components/layout/Navigation.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmlnYXRpb24uanMiLCJzcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR29CLG9DQUNlLFdBQWEsWUFBYSxZQUFDLENBQUE7QUN6RzlELG9EQUFvRCIsImZpbGUiOiJ0by5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5nbGVEb3duIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9hbmdsZS1kb3duJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTmF2aWdhdGlvbkxpbmsnO1xuaW1wb3J0IFdlYnNpdGVTdG9yZXNEYXRhIGZyb20gJy4uL2R1bW15X2RhdGEvd2Vic2l0ZV9zdG9yZXMuanNvbic7XG5cbmNvbnN0IG9wdGlvbnMgPSBXZWJzaXRlU3RvcmVzRGF0YTtcblxuLyoqXG4gKiBFbXB0eSBTZWxlY3QgYm94XG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0Ym94IE9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gbm9uZVxuICovXG5mdW5jdGlvbiByZW1vdmVPcHRpb25zKHNlbGVjdGJveCkge1xuICBsZXQgaTtcbiAgZm9yIChpID0gc2VsZWN0Ym94Lm9wdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICBzZWxlY3Rib3gucmVtb3ZlKGkpO1xuICB9XG59XG4vKipcbiAqIFNldCBDb3VudHJ5IGxhbmd1YWdlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZWRpcmVjdCBvciBSZWZyZXNoXG4gKi9cbmZ1bmN0aW9uIHNldENvdW50cnlMYW5nKCkge1xuICBjb25zdCBsYW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmdfY29kZScpLnZhbHVlO1xuICBjb25zdCBjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJfd2ViX2NvZGUnKS5pbm5lckhUTUw7XG4gIGNvbnN0IGN1cnJVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxhbmcsIGNvZGUpO1xuICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGN1cnJVUkwpO1xufVxuLy8gY29uc3QgZGVmYXVsdENPcHRpb24gPSBvcHRpb25zWzBdO1xuY29uc3QgZHJvcERvd25PbkNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcbiAgY29uc3Qgd2ViSWQgPSBjaGFuZ2UubmV3VmFsdWU7XG4gIGxldCBzdG9yZW9wdGRhdGEgPSBbXTtcbiAgbGV0IHdlYkZsYWcgPSAnJztcbiAgbGV0IGNvZGUgPSAnJztcbiAgY29uc3Qgc3RvcmVERCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yZXMnKTtcbiAgV2Vic2l0ZVN0b3Jlc0RhdGEubWFwKHdzZGF0YSA9PiAoKHdzZGF0YS53ZWJzaXRlSWQgPT0gd2ViSWQpID8gc3RvcmVvcHRkYXRhID0gd3NkYXRhLnN0b3JlcyA6ICcnKSk7XG4gIFdlYnNpdGVTdG9yZXNEYXRhLm1hcCh3c2RhdGEgPT4gKCh3c2RhdGEud2Vic2l0ZUlkID09IHdlYklkKSA/IHdlYkZsYWcgPSB3c2RhdGEuZmxhZyA6ICcnKSk7XG4gIFdlYnNpdGVTdG9yZXNEYXRhLm1hcCh3c2RhdGEgPT4gKCh3c2RhdGEud2Vic2l0ZUlkID09IHdlYklkKSA/IGNvZGUgPSB3c2RhdGEuY29kZSA6ICcnKSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnlfZmxhZ19pbWcnKS5zcmMgPSB3ZWJGbGFnO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeV9mbGFnX2ltZzInKS5zcmMgPSB3ZWJGbGFnO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeV9mbGFnX21haW4nKS5zcmMgPSB3ZWJGbGFnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vycl93ZWJfY29kZScpLmlubmVySFRNTCA9IGNvZGU7XG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURyb3Bkb3duMicpLnZhbHVlID0gd2ViX2lkO1xuICAvLyB2YXIgc3RvcmVfZGQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3JlczInKTtcbiAgcmVtb3ZlT3B0aW9ucyhzdG9yZUREKTtcbiAgLy8gcmVtb3ZlT3B0aW9ucyhzdG9yZV9kZDIpO1xuICBzdG9yZW9wdGRhdGEuZm9yRWFjaChvcHQgPT4gc3RvcmVERC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKG9wdC5uYW1lLCBvcHQuc3RvcmVJZCwgZmFsc2UpKSk7XG4gIC8vIHN0b3Jlb3B0ZGF0YS5mb3JFYWNoKChvcHQpPT5zdG9yZV9kZDIub3B0aW9ucy5hZGQobmV3IE9wdGlvbihvcHQubmFtZSwgb3B0LnN0b3JlSWQsZmFsc2UpKSk7XG59O1xuY29uc3QgRHJvcGRvd24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoXG4gICAgICBbXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICAgIF1cbiAgKSxcbiAgICB2YWx1ZUZpZWxkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsRmllbGQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIHZhbHVlRmllbGQ6ICd2YWx1ZScsXG4gICAgICBsYWJlbEZpZWxkOiAnbGFiZWwnLFxuICAgICAgb25DaGFuZ2U6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFNlbEZQcm8odGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgIH07XG4gIH0sXG4gIGdldFNlbEZQcm8ocHJvcHMpIHtcbiAgICBsZXQgc2VsZWN0ZWQ7XG4gICAgaWYgKHByb3BzLnZhbHVlID09PSBudWxsICYmIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBzZWxlY3RlZCA9IHByb3BzLm9wdGlvbnNbMF1bcHJvcHMudmFsdWVGaWVsZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfSxcbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBjaGFuZ2UgPSB7IG9sZFZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkLCBuZXdWYWx1ZTogZS50YXJnZXQudmFsdWUgfTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoY2hhbmdlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZGRvcHRpb25zID0gc2VsZi5wcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uW3NlbGYucHJvcHMudmFsdWVGaWVsZF19IHZhbHVlPXtvcHRpb25bc2VsZi5wcm9wcy52YWx1ZUZpZWxkXX0+XG4gICAgICAgICAge29wdGlvbltzZWxmLnByb3BzLmxhYmVsRmllbGRdfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3QgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cImNvdW50cnktc2VsZWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9ybS1jb250cm9se2Zsb2F0OmxlZnQ7IGhlaWdodDozMHB4OyB3aWR0aDoyMDBweDt9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge2Rkb3B0aW9uc31cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG4gIH0sXG59KTtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICh7IGN1cnJlbnRQYXRoLCBsYW5nIH0pID0+IChcbiAgPG5hdj5cbiAgICA8dWwgY2xhc3NOYW1lPVwiZGVza3RvcC1tZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbmF2XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayByb3V0ZT1cIndhdGNoZXNcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PldhdGNoZXM8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayByb3V0ZT1cInN0cmFwc1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+U3RyYXBzPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCJqZXdlbHJ5XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5KZXdlbHJ5PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiaG9tZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0gY2xhc3NOYW1lPVwiaG9tZV9sb2dvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1uYXZcIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1jYXJ0XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImNhcnRcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9uYXYtY2FydC1ibGFjay5wbmdcIiBhbHQ9XCJcIiAvPjxzcGFuPjA8L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxvZ2luXCI+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCJsb2dpblwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+TG9naW48L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCIgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJjb3VudHJ5X2ZsYWdfbWFpblwiIHdpZHRoPVwiMTJcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9ubC5zdmdcIiBhbHQ9XCJcIiAvPiZuYnNwOzxzcGFuIGlkPVwiY3Vycl93ZWJfY29kZVwiPk5MPC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaGVyLXN1Yi1tZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJmLW1vZC1sYW5ndWFnZUJhcl9faW5uZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmYtbW9kLWxvY2F0aW9uU2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50cnktaW1nXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkNvdW50cnkgRmxhZ1wiIGlkPVwiY291bnRyeV9mbGFnX2ltZ1wiIHNyYz1cImh0dHBzOi8vZGV2LnJvc2VmaWVsZHdhdGNoZXMuY29tL3NraW4vZnJvbnRlbmQvd2F0Y2hlcy9kZWZhdWx0L2ltYWdlcy9mbGFnL3d3LnBuZ1wiIHdpZHRoPVwiMTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmYtbW9kLWxvY2F0aW9uU2VsZWN0b3JfX2Fycm93XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9XCJteURyb3Bkb3duM1wiIG9wdGlvbnM9e29wdGlvbnN9IHZhbHVlPVwiYlwiIGxhYmVsRmllbGQ9XCJuYW1lXCIgdmFsdWVGaWVsZD1cIndlYnNpdGVJZFwiIG9uQ2hhbmdlPXtkcm9wRG93bk9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZi1tb2QtbGFuZ3VhZ2VCYXJfX3JmLW1vZC1sYW5ndWFnZVNlbGVjdG9yIHJmLW1vZC1sYW5ndWFnZVNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJsYW5ndWFnZS1zZWxlY3RcIiBuYW1lPVwic3RvcmVzXCIgaWQ9XCJzdG9yZXNcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibGFuZ19jb2RlXCIgaWQ9XCJsYW5nX2NvZGVcIiB2YWx1ZT17bGFuZ30gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxlY3QtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NldENvdW50cnlMYW5nfT48YT5Db250aW51ZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofSA+U2VydmljZSA8QW5nbGVEb3duIGNsYXNzTmFtZT1cImFuZ2xlX2Rvd25cIiAvPjwvTGluaz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cInN1cHBvcnRcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlN1cHBvcnQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiXCIgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5Db250YWN0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJzdG9yZXNcIiBwYXJhbXM9e3sgbGFuZyB9fSBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9PlN0b3JlczwvTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyb3NlZmllbGQtbWVudVwiPlxuICAgICAgICAgIDxMaW5rIGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+V29ybGQgT2YgUm9zZWZpZWxkIDxBbmdsZURvd24gY2xhc3NOYW1lPVwiYW5nbGVfZG93blwiIC8+PC9MaW5rPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwiZG93bnRvd24tY2hpY1wiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+RG93bnRvd24gQ2hpYzwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIHJvdXRlPVwidXBwZXItZWFzdC1zaWRlXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT5VcHBlciBFYXN0IFNpZGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIndlc3QtdmlsbGFnZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+V2VzdCBWaWxsYWdlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCJjYW1wYWlnblwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+TGF0ZXN0IENhbXBhaWduPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgcm91dGU9XCIxNS1taW51dGVzLXdpdGgtc3RlcGhhbmllXCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT4xNSBNaW51dGVzIFdpdGg8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIm15cm9zZWZpZWxkbW9tZW50XCIgcGFyYW1zPXt7IGxhbmcgfX0gY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofT4jTXlyb3NlZmllbGRtb21lbnQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayByb3V0ZT1cIm91ci1zdG9yeVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+T3VyIHN0b3J5PC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvZGl2PlxuICAgIDwvdWw+XG4gICAgPHVsIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHJvdXRlPVwiaG9tZVwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0gY2xhc3NOYW1lPVwibW9iaWxlX2xvZ29cIj5Ib21lPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtY2FydFwiPlxuICAgICAgICA8TGluayBocmVmPVwiY2FydFwiIHBhcmFtcz17eyBsYW5nIH19IGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWljb25cIj48c3Bhbj4wPC9zcGFuPjwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKTtcblxuTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGN1cnJlbnRQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnRQYXRoOiAnLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiLmZvcm0tY29udHJvbFtkYXRhLWpzeD1cIjY4Mjg5NTQ0M1wiXXtmbG9hdDpsZWZ0O2hlaWdodDozMHB4O3dpZHRoOjIwMHB4O31cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyeGhlVzkxZEM5T1lYWnBaMkYwYVc5dUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVEJIYjBJc1FVRkRTU3h2UTBGQlZ5eFhRVUZoTEZsQlFXRXNXVUZCUXlJc0ltWnBiR1VpT2lKemNtTXZZMjl0Y0c5dVpXNTBjeTlzWVhsdmRYUXZUbUYyYVdkaGRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2YUc5dFpTOXdjbUZrYVhBdGMyVnlkbVZ5TDNKbFlXTjBMV052WkdVdGJtVjNMM0J5YjJSMVkzUXRaR1YwWVdsc0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVSEp2Y0ZSNWNHVnpJSDBnWm5KdmJTQW5jSEp2Y0MxMGVYQmxjeWM3WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUVGdVoyeGxSRzkzYmlCbWNtOXRJQ2R5WldGamRDMXBZMjl1Y3k5c2FXSXZabUV2WVc1bmJHVXRaRzkzYmljN1hHNXBiWEJ2Y25RZ1RHbHVheUJtY205dElDY3VMMDVoZG1sbllYUnBiMjVNYVc1ckp6dGNibWx0Y0c5eWRDQlhaV0p6YVhSbFUzUnZjbVZ6UkdGMFlTQm1jbTl0SUNjdUxpOWtkVzF0ZVY5a1lYUmhMM2RsWW5OcGRHVmZjM1J2Y21WekxtcHpiMjRuTzF4dVhHNWpiMjV6ZENCdmNIUnBiMjV6SUQwZ1YyVmljMmwwWlZOMGIzSmxjMFJoZEdFN1hHNWNiaThxS2x4dUlDb2dSVzF3ZEhrZ1UyVnNaV04wSUdKdmVGeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSE5sYkdWamRHSnZlQ0JQWW1wbFkzUmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUc1dmJtVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2NtVnRiM1psVDNCMGFXOXVjeWh6Wld4bFkzUmliM2dwSUh0Y2JpQWdiR1YwSUdrN1hHNGdJR1p2Y2lBb2FTQTlJSE5sYkdWamRHSnZlQzV2Y0hScGIyNXpMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnYVNBdFBTQXhLU0I3WEc0Z0lDQWdjMlZzWldOMFltOTRMbkpsYlc5MlpTaHBLVHRjYmlBZ2ZWeHVmVnh1THlvcVhHNGdLaUJUWlhRZ1EyOTFiblJ5ZVNCc1lXNW5kV0ZuWlZ4dUlDb2dRSEpsZEhWeWJuTWdlMU4wY21sdVozMGdVbVZrYVhKbFkzUWdiM0lnVW1WbWNtVnphRnh1SUNvdlhHNW1kVzVqZEdsdmJpQnpaWFJEYjNWdWRISjVUR0Z1WnlncElIdGNiaUFnWTI5dWMzUWdiR0Z1WnlBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0Nkc1lXNW5YMk52WkdVbktTNTJZV3gxWlR0Y2JpQWdZMjl1YzNRZ1kyOWtaU0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RqZFhKeVgzZGxZbDlqYjJSbEp5a3VhVzV1WlhKSVZFMU1PMXh1SUNCamIyNXpkQ0JqZFhKeVZWSk1JRDBnZDJsdVpHOTNMbXh2WTJGMGFXOXVMbWh5WldZdWNtVndiR0ZqWlNoc1lXNW5MQ0JqYjJSbEtUdGNiaUFnZDJsdVpHOTNMbXh2WTJGMGFXOXVMbUZ6YzJsbmJpaGpkWEp5VlZKTUtUdGNibjFjYmk4dklHTnZibk4wSUdSbFptRjFiSFJEVDNCMGFXOXVJRDBnYjNCMGFXOXVjMXN3WFR0Y2JtTnZibk4wSUdSeWIzQkViM2R1VDI1RGFHRnVaMlVnUFNCbWRXNWpkR2x2YmlBb1kyaGhibWRsS1NCN1hHNGdJR052Ym5OMElIZGxZa2xrSUQwZ1kyaGhibWRsTG01bGQxWmhiSFZsTzF4dUlDQnNaWFFnYzNSdmNtVnZjSFJrWVhSaElEMGdXMTA3WEc0Z0lHeGxkQ0IzWldKR2JHRm5JRDBnSnljN1hHNGdJR3hsZENCamIyUmxJRDBnSnljN1hHNGdJR052Ym5OMElITjBiM0psUkVRZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmMzUnZjbVZ6SnlrN1hHNGdJRmRsWW5OcGRHVlRkRzl5WlhORVlYUmhMbTFoY0NoM2MyUmhkR0VnUFQ0Z0tDaDNjMlJoZEdFdWQyVmljMmwwWlVsa0lEMDlJSGRsWWtsa0tTQS9JSE4wYjNKbGIzQjBaR0YwWVNBOUlIZHpaR0YwWVM1emRHOXlaWE1nT2lBbkp5a3BPMXh1SUNCWFpXSnphWFJsVTNSdmNtVnpSR0YwWVM1dFlYQW9kM05rWVhSaElEMCtJQ2dvZDNOa1lYUmhMbmRsWW5OcGRHVkpaQ0E5UFNCM1pXSkpaQ2tnUHlCM1pXSkdiR0ZuSUQwZ2QzTmtZWFJoTG1ac1lXY2dPaUFuSnlrcE8xeHVJQ0JYWldKemFYUmxVM1J2Y21WelJHRjBZUzV0WVhBb2QzTmtZWFJoSUQwK0lDZ29kM05rWVhSaExuZGxZbk5wZEdWSlpDQTlQU0IzWldKSlpDa2dQeUJqYjJSbElEMGdkM05rWVhSaExtTnZaR1VnT2lBbkp5a3BPMXh1WEc0Z0lHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkamIzVnVkSEo1WDJac1lXZGZhVzFuSnlrdWMzSmpJRDBnZDJWaVJteGhaenRjYmlBZ0x5OGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyTnZkVzUwY25sZlpteGhaMTlwYldjeUp5a3VjM0pqSUQwZ2QyVmlSbXhoWnp0Y2JpQWdMeThnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk52ZFc1MGNubGZabXhoWjE5dFlXbHVKeWt1YzNKaklEMGdkMlZpUm14aFp6dGNiaUFnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9KMk4xY25KZmQyVmlYMk52WkdVbktTNXBibTVsY2toVVRVd2dQU0JqYjJSbE8xeHVJQ0F2THlCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duYlhsRWNtOXdaRzkzYmpJbktTNTJZV3gxWlNBOUlIZGxZbDlwWkR0Y2JpQWdMeThnZG1GeUlITjBiM0psWDJSa01pQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHpkRzl5WlhNeUp5azdYRzRnSUhKbGJXOTJaVTl3ZEdsdmJuTW9jM1J2Y21WRVJDazdYRzRnSUM4dklISmxiVzkyWlU5d2RHbHZibk1vYzNSdmNtVmZaR1F5S1R0Y2JpQWdjM1J2Y21WdmNIUmtZWFJoTG1admNrVmhZMmdvYjNCMElEMCtJSE4wYjNKbFJFUXViM0IwYVc5dWN5NWhaR1FvYm1WM0lFOXdkR2x2YmlodmNIUXVibUZ0WlN3Z2IzQjBMbk4wYjNKbFNXUXNJR1poYkhObEtTa3BPMXh1SUNBdkx5QnpkRzl5Wlc5d2RHUmhkR0V1Wm05eVJXRmphQ2dvYjNCMEtUMCtjM1J2Y21WZlpHUXlMbTl3ZEdsdmJuTXVZV1JrS0c1bGR5QlBjSFJwYjI0b2IzQjBMbTVoYldVc0lHOXdkQzV6ZEc5eVpVbGtMR1poYkhObEtTa3BPMXh1ZlR0Y2JtTnZibk4wSUVSeWIzQmtiM2R1SUQwZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHVJQ0J3Y205d1ZIbHdaWE02SUh0Y2JpQWdJQ0JwWkRvZ1VtVmhZM1F1VUhKdmNGUjVjR1Z6TG5OMGNtbHVaeTVwYzFKbGNYVnBjbVZrTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkpsWVdOMExsQnliM0JVZVhCbGN5NWhjbkpoZVM1cGMxSmxjWFZwY21Wa0xGeHVJQ0FnSUhaaGJIVmxPaUJTWldGamRDNVFjbTl3Vkhsd1pYTXViMjVsVDJaVWVYQmxLRnh1SUNBZ0lDQWdXMXh1SUNBZ0lDQWdJQ0JTWldGamRDNVFjbTl3Vkhsd1pYTXViblZ0WW1WeUxGeHVJQ0FnSUNBZ0lDQlNaV0ZqZEM1UWNtOXdWSGx3WlhNdWMzUnlhVzVuWEc0Z0lDQWdJQ0JkWEc0Z0lDa3NYRzRnSUNBZ2RtRnNkV1ZHYVdWc1pEb2dVbVZoWTNRdVVISnZjRlI1Y0dWekxuTjBjbWx1Wnl4Y2JpQWdJQ0JzWVdKbGJFWnBaV3hrT2lCU1pXRmpkQzVRY205d1ZIbHdaWE11YzNSeWFXNW5MRnh1SUNBZ0lHOXVRMmhoYm1kbE9pQlNaV0ZqZEM1UWNtOXdWSGx3WlhNdVpuVnVZMXh1SUNCOUxGeHVJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklHNTFiR3dzWEc0Z0lDQWdJQ0IyWVd4MVpVWnBaV3hrT2lBbmRtRnNkV1VuTEZ4dUlDQWdJQ0FnYkdGaVpXeEdhV1ZzWkRvZ0oyeGhZbVZzSnl4Y2JpQWdJQ0FnSUc5dVEyaGhibWRsT2lCdWRXeHNMRnh1SUNBZ0lIMDdYRzRnSUgwc1hHNGdJR2RsZEVsdWFYUnBZV3hUZEdGMFpUb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR052Ym5OMElITmxiR1ZqZEdWa0lEMGdkR2hwY3k1blpYUlRaV3hHVUhKdktIUm9hWE11Y0hKdmNITXBPMXh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNCelpXeGxZM1JsWkRvZ2MyVnNaV04wWldSY2JpQWdJQ0I5TzF4dUlDQjlMRnh1SUNCblpYUlRaV3hHVUhKdktIQnliM0J6S1NCN1hHNGdJQ0FnYkdWMElITmxiR1ZqZEdWa08xeHVJQ0FnSUdsbUlDaHdjbTl3Y3k1MllXeDFaU0E5UFQwZ2JuVnNiQ0FtSmlCd2NtOXdjeTV2Y0hScGIyNXpMbXhsYm1kMGFDQWhQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2MyVnNaV04wWldRZ1BTQndjbTl3Y3k1dmNIUnBiMjV6V3pCZFczQnliM0J6TG5aaGJIVmxSbWxsYkdSZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J6Wld4bFkzUmxaQ0E5SUhCeWIzQnpMblpoYkhWbE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjMlZzWldOMFpXUTdYRzRnSUgwc1hHNGdJR2hoYm1Sc1pVTm9ZVzVuWlRvZ1puVnVZM1JwYjI0Z0tHVXBJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXdjbTl3Y3k1dmJrTm9ZVzVuWlNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWTJoaGJtZGxJRDBnZXlCdmJHUldZV3gxWlRvZ2RHaHBjeTV6ZEdGMFpTNXpaV3hsWTNSbFpDd2dibVYzVm1Gc2RXVTZJR1V1ZEdGeVoyVjBMblpoYkhWbElIMDdYRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbTl1UTJoaGJtZGxLR05vWVc1blpTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9leUJ6Wld4bFkzUmxaRG9nWlM1MFlYSm5aWFF1ZG1Gc2RXVWdmU2s3WEc0Z0lIMHNYRzRnSUhKbGJtUmxjam9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sYkdZZ1BTQjBhR2x6TzF4dUlDQWdJR052Ym5OMElHUmtiM0IwYVc5dWN5QTlJSE5sYkdZdWNISnZjSE11YjNCMGFXOXVjeTV0WVhBb0tHOXdkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdQRzl3ZEdsdmJpQnJaWGs5ZTI5d2RHbHZibHR6Wld4bUxuQnliM0J6TG5aaGJIVmxSbWxsYkdSZGZTQjJZV3gxWlQxN2IzQjBhVzl1VzNObGJHWXVjSEp2Y0hNdWRtRnNkV1ZHYVdWc1pGMTlQbHh1SUNBZ0lDQWdJQ0FnSUh0dmNIUnBiMjViYzJWc1ppNXdjbTl3Y3k1c1lXSmxiRVpwWld4a1hYMWNiaUFnSUNBZ0lDQWdQQzl2Y0hScGIyNCtYRzRnSUNBZ0lDQXBPMXh1SUNBZ0lIMHBPMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBOGMyVnNaV04wSUdsa1BYdDBhR2x6TG5CeWIzQnpMbWxrZlNCamJHRnpjMDVoYldVOVhDSmpiM1Z1ZEhKNUxYTmxiR1ZqZEZ3aUlIWmhiSFZsUFh0MGFHbHpMbk4wWVhSbExuTmxiR1ZqZEdWa2ZTQnZia05vWVc1blpUMTdkR2hwY3k1b1lXNWtiR1ZEYUdGdVoyVjlQbHh1SUNBZ0lDQWdJQ0E4YzNSNWJHVWdhbk40UG50Z1hHNGdJQ0FnSUNBZ0lDQWdMbVp2Y20wdFkyOXVkSEp2Ykh0bWJHOWhkRHBzWldaME95Qm9aV2xuYUhRNk16QndlRHNnZDJsa2RHZzZNakF3Y0hnN2ZWeHVJQ0FnSUNBZ0lDQmdmVHd2YzNSNWJHVStYRzRnSUNBZ0lDQWdJSHRrWkc5d2RHbHZibk45WEc0Z0lDQWdJQ0E4TDNObGJHVmpkRDVjYmlBZ0lDQXBPMXh1SUNCOUxGeHVmU2s3WEc1Y2JtTnZibk4wSUU1aGRtbG5ZWFJwYjI0Z1BTQW9leUJqZFhKeVpXNTBVR0YwYUN3Z2JHRnVaeUI5S1NBOVBpQW9YRzRnSUR4dVlYWStYRzRnSUNBZ1BIVnNJR05zWVhOelRtRnRaVDFjSW1SbGMydDBiM0F0YldWdWRWd2lQbHh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnNaV1owTFc1aGRsd2lQbHh1SUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdQRXhwYm1zZ2NtOTFkR1U5WENKM1lYUmphR1Z6WENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1WFlYUmphR1Z6UEM5TWFXNXJQbHh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ1BFeHBibXNnY205MWRHVTlYQ0p6ZEhKaGNITmNJaUJ3WVhKaGJYTTllM3NnYkdGdVp5QjlmU0JqZFhKeVpXNTBVR0YwYUQxN1kzVnljbVZ1ZEZCaGRHaDlQbE4wY21Gd2N6d3ZUR2x1YXo1Y2JpQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJRHhNYVc1cklISnZkWFJsUFZ3aWFtVjNaV3h5ZVZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK1NtVjNaV3h5ZVR3dlRHbHVhejVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqWlc1MFpYSXRibUYyWENJK1hHNGdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBOFRHbHVheUJ5YjNWMFpUMWNJbWh2YldWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOUlHTnNZWE56VG1GdFpUMWNJbWh2YldWZmJHOW5iMXdpUGtodmJXVThMMHhwYm1zK1hHNGdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWNtbG5hSFF0Ym1GMlhDSStYRzRnSUNBZ0lDQWdJRHhzYVNCamJHRnpjMDVoYldVOVhDSnVZWFl0WTJGeWRGd2lQbHh1SUNBZ0lDQWdJQ0FnSUR4TWFXNXJJR2h5WldZOVhDSmpZWEowWENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhwYldjZ2MzSmpQVndpTDNOMFlYUnBZeTlwYldGblpYTXZibUYyTFdOaGNuUXRZbXhoWTJzdWNHNW5YQ0lnWVd4MFBWd2lYQ0lnTHo0OGMzQmhiajR3UEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUR3dlRHbHVhejVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdQR3hwSUdOc1lYTnpUbUZ0WlQxY0ltNWhkaTFzYjJkcGJsd2lQbHh1SUNBZ0lDQWdJQ0FnSUR4TWFXNXJJSEp2ZFhSbFBWd2liRzluYVc1Y0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBreHZaMmx1UEM5TWFXNXJQbHh1SUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ1BFeHBibXNnYUhKbFpqMWNJbHdpSUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDArWEc0Z0lDQWdJQ0FnSUNBZ0lDQThhVzFuSUdsa1BWd2lZMjkxYm5SeWVWOW1iR0ZuWDIxaGFXNWNJaUIzYVdSMGFEMWNJakV5WENJZ2MzSmpQVndpTDNOMFlYUnBZeTlwYldGblpYTXZibXd1YzNablhDSWdZV3gwUFZ3aVhDSWdMejRtYm1KemNEczhjM0JoYmlCcFpEMWNJbU4xY25KZmQyVmlYMk52WkdWY0lqNU9URHd2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0E4TDB4cGJtcytYRzRnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0p6ZDJsMFkyaGxjaTF6ZFdJdGJXVnVkVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnlaaTF0YjJRdGJHRnVaM1ZoWjJWQ1lYSmZYMmx1Ym1WeVYzSmhjSEJsY2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5KbUxXMXZaQzFzYjJOaGRHbHZibE5sYkdWamRHOXlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjNWdWRISjVMV2x0WjF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCaGJIUTlYQ0pEYjNWdWRISjVJRVpzWVdkY0lpQnBaRDFjSW1OdmRXNTBjbmxmWm14aFoxOXBiV2RjSWlCemNtTTlYQ0pvZEhSd2N6b3ZMMlJsZGk1eWIzTmxabWxsYkdSM1lYUmphR1Z6TG1OdmJTOXphMmx1TDJaeWIyNTBaVzVrTDNkaGRHTm9aWE12WkdWbVlYVnNkQzlwYldGblpYTXZabXhoWnk5M2R5NXdibWRjSWlCM2FXUjBhRDFjSWpFMFhDSWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emNHRnVJR05zWVhOelRtRnRaVDFjSW5KbUxXMXZaQzFzYjJOaGRHbHZibE5sYkdWamRHOXlYMTloY25KdmQxd2lJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRVJ5YjNCa2IzZHVJR2xrUFZ3aWJYbEVjbTl3Wkc5M2JqTmNJaUJ2Y0hScGIyNXpQWHR2Y0hScGIyNXpmU0IyWVd4MVpUMWNJbUpjSWlCc1lXSmxiRVpwWld4a1BWd2libUZ0WlZ3aUlIWmhiSFZsUm1sbGJHUTlYQ0ozWldKemFYUmxTV1JjSWlCdmJrTm9ZVzVuWlQxN1pISnZjRVJ2ZDI1UGJrTm9ZVzVuWlgwZ0x6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2ljbVl0Ylc5a0xXeGhibWQxWVdkbFFtRnlYMTl5WmkxdGIyUXRiR0Z1WjNWaFoyVlRaV3hsWTNSdmNpQnlaaTF0YjJRdGJHRnVaM1ZoWjJWVFpXeGxZM1J2Y2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpaV3hsWTNRZ1kyeGhjM05PWVcxbFBWd2liR0Z1WjNWaFoyVXRjMlZzWldOMFhDSWdibUZ0WlQxY0luTjBiM0psYzF3aUlHbGtQVndpYzNSdmNtVnpYQ0lnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCMGVYQmxQVndpYUdsa1pHVnVYQ0lnYm1GdFpUMWNJbXhoYm1kZlkyOWtaVndpSUdsa1BWd2liR0Z1WjE5amIyUmxYQ0lnZG1Gc2RXVTllMnhoYm1kOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z1kyeGhjM05PWVcxbFBWd2ljMlZzWldOMExXSjFkSFJ2Ymx3aUlIUjVjR1U5WENKaWRYUjBiMjVjSWlCdmJrTnNhV05yUFh0elpYUkRiM1Z1ZEhKNVRHRnVaMzArUEdFK1EyOXVkR2x1ZFdVOEwyRStQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lEeE1hVzVySUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDBnUGxObGNuWnBZMlVnUEVGdVoyeGxSRzkzYmlCamJHRnpjMDVoYldVOVhDSmhibWRzWlY5a2IzZHVYQ0lnTHo0OEwweHBibXMrWEc0Z0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelRtRnRaVDFjSW5OMVlpMXRaVzUxWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p6ZFhCd2IzSjBYQ0lnY0dGeVlXMXpQWHQ3SUd4aGJtY2dmWDBnWTNWeWNtVnVkRkJoZEdnOWUyTjFjbkpsYm5SUVlYUm9mVDVUZFhCd2IzSjBQQzlNYVc1clBqd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQThiR2srUEV4cGJtc2dhSEpsWmoxY0lsd2lJR04xY25KbGJuUlFZWFJvUFh0amRYSnlaVzUwVUdGMGFIMCtRMjl1ZEdGamREd3ZUR2x1YXo0OEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanhNYVc1cklISnZkWFJsUFZ3aWMzUnZjbVZ6WENJZ2NHRnlZVzF6UFh0N0lHeGhibWNnZlgwZ1kzVnljbVZ1ZEZCaGRHZzllMk4xY25KbGJuUlFZWFJvZlQ1VGRHOXlaWE04TDB4cGJtcytQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dUlDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2ljbTl6WldacFpXeGtMVzFsYm5WY0lqNWNiaUFnSUNBZ0lDQWdJQ0E4VEdsdWF5QmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBsZHZjbXhrSUU5bUlGSnZjMlZtYVdWc1pDQThRVzVuYkdWRWIzZHVJR05zWVhOelRtRnRaVDFjSW1GdVoyeGxYMlJ2ZDI1Y0lpQXZQand2VEdsdWF6NWNiaUFnSUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM05PWVcxbFBWd2ljM1ZpTFcxbGJuVmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0ltUnZkMjUwYjNkdUxXTm9hV05jSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGtSdmQyNTBiM2R1SUVOb2FXTThMMHhwYm1zK1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDQ4VEdsdWF5QnliM1YwWlQxY0luVndjR1Z5TFdWaGMzUXRjMmxrWlZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK1ZYQndaWElnUldGemRDQlRhV1JsUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0ozWlhOMExYWnBiR3hoWjJWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOVBsZGxjM1FnVm1sc2JHRm5aVHd2VEdsdWF6NDhMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwUGp4TWFXNXJJSEp2ZFhSbFBWd2lZMkZ0Y0dGcFoyNWNJaUJ3WVhKaGJYTTllM3NnYkdGdVp5QjlmU0JqZFhKeVpXNTBVR0YwYUQxN1kzVnljbVZ1ZEZCaGRHaDlQa3hoZEdWemRDQkRZVzF3WVdsbmJqd3ZUR2x1YXo0OEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQanhNYVc1cklISnZkWFJsUFZ3aU1UVXRiV2x1ZFhSbGN5MTNhWFJvTFhOMFpYQm9ZVzVwWlZ3aUlIQmhjbUZ0Y3oxN2V5QnNZVzVuSUgxOUlHTjFjbkpsYm5SUVlYUm9QWHRqZFhKeVpXNTBVR0YwYUgwK01UVWdUV2x1ZFhSbGN5QlhhWFJvUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p0ZVhKdmMyVm1hV1ZzWkcxdmJXVnVkRndpSUhCaGNtRnRjejE3ZXlCc1lXNW5JSDE5SUdOMWNuSmxiblJRWVhSb1BYdGpkWEp5Wlc1MFVHRjBhSDArSTAxNWNtOXpaV1pwWld4a2JXOXRaVzUwUEM5TWFXNXJQand2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1BFeHBibXNnY205MWRHVTlYQ0p2ZFhJdGMzUnZjbmxjSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGs5MWNpQnpkRzl5ZVR3dlRHbHVhejQ4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBOEwzVnNQbHh1SUNBZ0lEeDFiQ0JqYkdGemMwNWhiV1U5WENKdGIySnBiR1V0YldWdWRWd2lQbHh1SUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBOFRHbHVheUJ5YjNWMFpUMWNJbWh2YldWY0lpQndZWEpoYlhNOWUzc2diR0Z1WnlCOWZTQmpkWEp5Wlc1MFVHRjBhRDE3WTNWeWNtVnVkRkJoZEdoOUlHTnNZWE56VG1GdFpUMWNJbTF2WW1sc1pWOXNiMmR2WENJK1NHOXRaVHd2VEdsdWF6NWNiaUFnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0E4YkdrZ1kyeGhjM05PWVcxbFBWd2libUYyTFdOaGNuUmNJajVjYmlBZ0lDQWdJQ0FnUEV4cGJtc2dhSEpsWmoxY0ltTmhjblJjSWlCd1lYSmhiWE05ZTNzZ2JHRnVaeUI5ZlNCamRYSnlaVzUwVUdGMGFEMTdZM1Z5Y21WdWRGQmhkR2g5UGx4dUlDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyRnlkQzFwWTI5dVhDSStQSE53WVc0K01Ed3ZjM0JoYmo0OEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEM5TWFXNXJQbHh1SUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0E4TDNWc1BseHVJQ0E4TDI1aGRqNWNiaWs3WEc1Y2JrNWhkbWxuWVhScGIyNHVjSEp2Y0ZSNWNHVnpJRDBnZTF4dUlDQmpkWEp5Wlc1MFVHRjBhRG9nVUhKdmNGUjVjR1Z6TG5OMGNtbHVaeXhjYm4wN1hHNWNiazVoZG1sbllYUnBiMjR1WkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNCamRYSnlaVzUwVUdGMGFEb2dKeThuTEZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdUbUYyYVdkaGRHbHZianRjYmlKZGZRPT0gKi9cbi8qQCBzb3VyY2VVUkw9c3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdmlnYXRpb24uanMgKi8iXX0= */'
    }), ddoptions);
  }
});

var Navigation = function Navigation(_ref) {
  var currentPath = _ref.currentPath,
      lang = _ref.lang;
  return _react2.default.createElement('nav', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('ul', { className: 'desktop-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'left-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'watches', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, 'Watches')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'straps', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, 'Straps')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'jewelry', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, 'Jewelry'))), _react2.default.createElement('div', { className: 'center-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'home', params: { lang: lang }, currentPath: currentPath, className: 'home_logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, 'Home'))), _react2.default.createElement('div', { className: 'right-nav', __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', { className: 'nav-cart', __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: 'cart', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, _react2.default.createElement('img', { src: '/static/images/nav-cart-black.png', alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    'data-jsx': 682895443
  }, '0'))), _react2.default.createElement('li', { className: 'nav-login', __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'login', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, 'Login')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: '', currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, _react2.default.createElement('img', { id: 'country_flag_main', width: '12', src: '/static/images/nl.svg', alt: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    'data-jsx': 682895443
  }), '\xA0', _react2.default.createElement('span', { id: 'curr_web_code', __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    'data-jsx': 682895443
  }, 'NL')), _react2.default.createElement('div', { className: 'switcher-sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'rf-mod-languageBar__innerWrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'rf-mod-locationSelector', __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('div', { className: 'country-img', __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('img', { alt: 'Country Flag', id: 'country_flag_img', src: 'https://dev.rosefieldwatches.com/skin/frontend/watches/default/images/flag/ww.png', width: '14', __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('span', { className: 'rf-mod-locationSelector__arrow', __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    'data-jsx': 682895443
  })), _react2.default.createElement(Dropdown, { id: 'myDropdown3', options: options, value: 'b', labelField: 'name', valueField: 'websiteId', onChange: dropDownOnChange, __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  })), _react2.default.createElement('div', { className: 'rf-mod-languageBar__rf-mod-languageSelector rf-mod-languageSelector', __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('select', { className: 'language-select', name: 'stores', id: 'stores', __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    'data-jsx': 682895443
  })), _react2.default.createElement('input', { type: 'hidden', name: 'lang_code', id: 'lang_code', value: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    'data-jsx': 682895443
  }), _react2.default.createElement('button', { className: 'select-button', type: 'button', onClick: setCountryLang, __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    'data-jsx': 682895443
  }, 'Continue'))))), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, 'Service ', _react2.default.createElement(_angleDown2.default, { className: 'angle_down', __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  })), _react2.default.createElement('ul', { className: 'sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'support', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, 'Support')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: '', currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, 'Contact')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'stores', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, 'Stores')))), _react2.default.createElement('li', { className: 'rosefield-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, 'World Of Rosefield ', _react2.default.createElement(_angleDown2.default, { className: 'angle_down', __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  })), _react2.default.createElement('ul', { className: 'sub-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'downtown-chic', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }, 'Downtown Chic')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'upper-east-side', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, 'Upper East Side')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'west-village', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, 'West Village')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'campaign', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, 'Latest Campaign')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: '15-minutes-with-stephanie', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }, '15 Minutes With')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'myrosefieldmoment', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, '#Myrosefieldmoment')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'our-story', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }, 'Our story')))))), _react2.default.createElement('ul', { className: 'mobile-menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { route: 'home', params: { lang: lang }, currentPath: currentPath, className: 'mobile_logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, 'Home')), _react2.default.createElement('li', { className: 'nav-cart', __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    'data-jsx': 682895443
  }, _react2.default.createElement(_NavigationLink2.default, { href: 'cart', params: { lang: lang }, currentPath: currentPath, __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    }
  }, _react2.default.createElement('div', { className: 'cart-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    'data-jsx': 682895443
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    'data-jsx': 682895443
  }, '0'))))));
};

Navigation.propTypes = {
  currentPath: _propTypes.PropTypes.string
};

Navigation.defaultProps = {
  currentPath: '/'
};

exports.default = Navigation;