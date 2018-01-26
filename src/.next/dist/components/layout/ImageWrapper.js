'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/pradip-server/react-code-new/product-detail/src/components/layout/ImageWrapper.js';

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var image = _ref.image,
      children = _ref.children,
      lang = _ref.lang;

  var className = '';
  var styles = {};
  var hideclass = '';
  var jsData = require('../../locale/' + lang + '/home-main-banner.json');

  if (image) {
    className = 'has_image';
    styles = { backgroundImage: 'url(\'' + image + '\')' };
  } else {
    hideclass = 'hide-banner-text';
  }

  return _react2.default.createElement('section', { className: className, style: styles, 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 4006462867,
    css: '.hide-banner-text[data-jsx="4006462867"] {display: none;}.has_image[data-jsx="4006462867"] {background-repeat: no-repeat;background-position:  50% 50%;height: 667px;width: 100%;background-size: cover;position: relative;overflow: hidden;}.banner-info-box[data-jsx="4006462867"] {width: calc(99.9% * 4/12 - 20px);padding: 0 0 0 10%;position: absolute;bottom: 17%}.banner-info-box[data-jsx="4006462867"]:nth-child(1n) {float: left;margin-right: 30px;clear: none;}.banner-info-box[data-jsx="4006462867"]:last-child {margin-right: 0;}.banner-info-box[data-jsx="4006462867"]:nth-child(12n) {margin-right: 0;float: right;}.banner-info-box[data-jsx="4006462867"]:nth-child(12n + 1) {clear: both;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] h2[data-jsx="4006462867"] {font-weight: bold;letter-spacing: 4px;text-transform: uppercase;color: #ffffff;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] h3[data-jsx="4006462867"] {color: #FFFFFF;font-size: 55px;font-family: \'publico\';font-weight: bold;padding: 10px 0 0 0;margin: 0;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"] {width: calc(99.9% * 10/12 - 5px);color: #FFFFFF;font-size: 15px;line-height: 180%;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(1n) {float: left;margin-right: 30px;clear: none;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:last-child {margin-right: 0;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(12n) {margin-right: 0;float: right;}.banner-info-box[data-jsx="4006462867"][data-jsx="4006462867"] p[data-jsx="4006462867"]:nth-child(12n + 1) {clear: both;}/*@ sourceURL=src/components/layout/ImageWrapper.js */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYWRpcC1zZXJ2ZXIvcmVhY3QtY29kZS1uZXcvcHJvZHVjdC1kZXRhaWwvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0ltYWdlV3JhcHBlci5qcyIsInNyYy9jb21wb25lbnRzL2xheW91dC9JbWFnZVdyYXBwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLDBDQUdNLGNBQ2YsQ0FFVyxtQ0FDbUIsNkJBQ0MsOEJBQ2hCLGNBQ0YsWUFDVyx1QkFDSixtQkFDRixpQkFDbEIsQ0FFaUIseUNBQ0UsaUNBQ0MsbUJBQ0EsbUJBQ1AsV0FFTixDQU5VLHVEQUNFLFlBQUEsbUJBQUEsWUFDQyxDQUZILG9EQUNFLGdCQUNDLENBRkgsd0RBQ0UsZ0JBQUEsYUFDQyxDQUZILDREQUNFLFlBQ0MsQ0FJYiwwRkFDYyxrQkFDRSxvQkFDTSwwQkFDWCxlQUNoQixDQUVLLDBGQUNXLGVBQ0MsZ0JBQ08sdUJBQ0wsa0JBQ0Usb0JBQ1YsVUFDWCxDQUVJLHlGQUNnQixpQ0FDSixlQUNDLGdCQUNFLGtCQUNuQixDQUxJLHVHQUNnQixZQUFBLG1CQUFBLFlBQ0osQ0FGWixvR0FDZ0IsZ0JBQ0osQ0FGWix3R0FDZ0IsZ0JBQUEsYUFDSixDQUZaLDRHQUNnQixZQUNKLENBSWxCLHNEQ3pENkMiLCJmaWxlIjoidG8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgaW1hZ2UsIGNoaWxkcmVuLCBsYW5nIH0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBsZXQgc3R5bGVzID0ge307XG4gIGxldCBoaWRlY2xhc3MgPSAnJztcbiAgY29uc3QganNEYXRhID0gcmVxdWlyZSgnLi4vLi4vbG9jYWxlLycrbGFuZysnL2hvbWUtbWFpbi1iYW5uZXIuanNvbicpO1xuICBcbiAgaWYgKGltYWdlKSB7XG4gICAgY2xhc3NOYW1lID0gJ2hhc19pbWFnZSc7XG4gICAgc3R5bGVzID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7aW1hZ2V9JylgIH07XG4gIH0gZWxzZSB7XG4gICAgaGlkZWNsYXNzID0gJ2hpZGUtYmFubmVyLXRleHQnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlc30+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmhpZGUtYmFubmVyLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICA1MCUgNTAlO1xuICAgICAgICAgIGhlaWdodDogNjY3cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXItaW5mby1ib3gge1xuICAgICAgICAgIGxvc3QtY29sdW1uOiA0LzEyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxNyU7XG5cbiAgICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwdWJsaWNvJztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIHAge1xuICAgICAgICAgICAgbG9zdC1jb2x1bW46IDEwLzEyO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTgwJTsgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hpZGVjbGFzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWluZm8tYm94XCI+XG4gICAgICAgICAgPGhncm91cD5cbiAgICAgICAgICAgIDxoMj57anNEYXRhLkludHJvZHVjaW5nVGV4dH08L2gyPlxuICAgICAgICAgICAgPGgzPntqc0RhdGEuVGl0bGV9PC9oMz5cbiAgICAgICAgICA8L2hncm91cD5cbiAgICAgICAgICA8cD57anNEYXRhLkRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwid2hpdGUtYm9yZGVyLWJ1dHRvblwiPntqc0RhdGEuU2hvcE5vd0J0bn08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiIsIi5oaWRlLWJhbm5lci10ZXh0W2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSB7ZGlzcGxheTogbm9uZTt9Lmhhc19pbWFnZVtkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogIDUwJSA1MCU7aGVpZ2h0OiA2NjdweDt3aWR0aDogMTAwJTtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO3Bvc2l0aW9uOiByZWxhdGl2ZTtvdmVyZmxvdzogaGlkZGVuO30uYmFubmVyLWluZm8tYm94W2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSB7bG9zdC1jb2x1bW46IDQvMTI7cGFkZGluZzogMCAwIDAgMTAlO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IDE3JTsmW2RhdGEtanN4PVwiNDAwNjQ2Mjg2N1wiXSBoMltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2ZvbnQtd2VpZ2h0OiBib2xkO2xldHRlci1zcGFjaW5nOiA0cHg7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtjb2xvcjogI2ZmZmZmZjt9JltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0gaDNbZGF0YS1qc3g9XCI0MDA2NDYyODY3XCJdIHtjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDU1cHg7Zm9udC1mYW1pbHk6ICdwdWJsaWNvJztmb250LXdlaWdodDogYm9sZDtwYWRkaW5nOiAxMHB4IDAgMCAwO21hcmdpbjogMDt9JltkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0gcFtkYXRhLWpzeD1cIjQwMDY0NjI4NjdcIl0ge2xvc3QtY29sdW1uOiAxMC8xMjtjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDE1cHg7bGluZS1oZWlnaHQ6IDE4MCU7fX1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwyeGhlVzkxZEM5SmJXRm5aVmR5WVhCd1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCWld0Q0xFRkJSVk1zTUVOQlEwZ3NZMEZEWml4RFFVVlhMRzFEUVVOdFFpdzJRa0ZEUXl3NFFrRkRhRUlzWTBGRFJpeFpRVU5YTEhWQ1FVTktMRzFDUVVOR0xHbENRVU5zUWl4RFFVVnBRaXg1UTBGRFJTeHJRa0ZEUXl4dFFrRkRRU3h0UWtGRFVDeFpRVVZPTEc5RVFVTmpMR3RDUVVORkxHOUNRVU5OTERCQ1FVTllMR1ZCUTJoQ0xFTkJSVXNzYjBSQlExY3NaVUZEUXl4blFrRkRUeXgxUWtGRFRDeHJRa0ZEUlN4dlFrRkRWaXhWUVVOWUxFTkJSVWtzYlVSQlEyZENMRzFDUVVOS0xHVkJRME1zWjBKQlEwVXNhMEpCUTI1Q0xFTkJRMFlpTENKbWFXeGxJam9pYzNKakwyTnZiWEJ2Ym1WdWRITXZiR0Y1YjNWMEwwbHRZV2RsVjNKaGNIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2YUc5dFpTOXdjbUZrYVhBdGMyVnlkbVZ5TDNKbFlXTjBMV052WkdVdGJtVjNMM0J5YjJSMVkzUXRaR1YwWVdsc0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ0tIc2dhVzFoWjJVc0lHTm9hV3hrY21WdUxDQnNZVzVuSUgwcElEMCtJSHRjYmlBZ2JHVjBJR05zWVhOelRtRnRaU0E5SUNjbk8xeHVJQ0JzWlhRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUd4bGRDQm9hV1JsWTJ4aGMzTWdQU0FuSnp0Y2JpQWdZMjl1YzNRZ2FuTkVZWFJoSUQwZ2NtVnhkV2x5WlNnbkxpNHZMaTR2Ykc5allXeGxMeWNyYkdGdVp5c25MMmh2YldVdGJXRnBiaTFpWVc1dVpYSXVhbk52YmljcE8xeHVJQ0JjYmlBZ2FXWWdLR2x0WVdkbEtTQjdYRzRnSUNBZ1kyeGhjM05PWVcxbElEMGdKMmhoYzE5cGJXRm5aU2M3WEc0Z0lDQWdjM1I1YkdWeklEMGdleUJpWVdOclozSnZkVzVrU1cxaFoyVTZJR0IxY213b0p5UjdhVzFoWjJWOUp5bGdJSDA3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYUdsa1pXTnNZWE56SUQwZ0oyaHBaR1V0WW1GdWJtVnlMWFJsZUhRbk8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOGMyVmpkR2x2YmlCamJHRnpjMDVoYldVOWUyTnNZWE56VG1GdFpYMGdjM1I1YkdVOWUzTjBlV3hsYzMwK1hHNGdJQ0FnSUNBOGMzUjViR1VnYW5ONFBudGdYRzVjYmlBZ0lDQWdJQ0FnTG1ocFpHVXRZbUZ1Ym1WeUxYUmxlSFFnZTF4dUlDQWdJQ0FnSUNBZ0lHUnBjM0JzWVhrNklHNXZibVU3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXVhR0Z6WDJsdFlXZGxJSHRjYmlBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xYSmxjR1ZoZERvZ2JtOHRjbVZ3WldGME8xeHVJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0Y0c5emFYUnBiMjQ2SUNBMU1DVWdOVEFsTzF4dUlDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ05qWTNjSGc3WEc0Z0lDQWdJQ0FnSUNBZ2QybGtkR2c2SURFd01DVTdYRzRnSUNBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxemFYcGxPaUJqYjNabGNqdGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3WEc0Z0lDQWdJQ0FnSUNBZ2IzWmxjbVpzYjNjNklHaHBaR1JsYmp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzVpWVc1dVpYSXRhVzVtYnkxaWIzZ2dlMXh1SUNBZ0lDQWdJQ0FnSUd4dmMzUXRZMjlzZFcxdU9pQTBMekV5TzF4dUlDQWdJQ0FnSUNBZ0lIQmhaR1JwYm1jNklEQWdNQ0F3SURFd0pUdGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEc0Z0lDQWdJQ0FnSUNBZ1ltOTBkRzl0T2lBeE55VTdYRzVjYmlBZ0lDQWdJQ0FnSUNBbUlHZ3lJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUJpYjJ4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMGRHVnlMWE53WVdOcGJtYzZJRFJ3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsZUhRdGRISmhibk5tYjNKdE9pQjFjSEJsY21OaGMyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTJabVptWm1aanRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FtSUdneklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFqUmtaR1JrWkdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQTFOWEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxbVlXMXBiSGs2SUNkd2RXSnNhV052Snp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGQyVnBaMmgwT2lCaWIyeGtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01UQndlQ0F3SURBZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGNtZHBiam9nTUR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBbUlIQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOXpkQzFqYjJ4MWJXNDZJREV3THpFeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJQ05HUmtaR1JrWTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERTFjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTVRnd0pUc2dYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHQjlQQzl6ZEhsc1pUNWNiaUFnSUNBZ0lIc2dZMmhwYkdSeVpXNGdmVnh1SUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOWUyaHBaR1ZqYkdGemMzMCtYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZbUZ1Ym1WeUxXbHVabTh0WW05NFhDSStYRzRnSUNBZ0lDQWdJQ0FnUEdobmNtOTFjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeG9NajU3YW5ORVlYUmhMa2x1ZEhKdlpIVmphVzVuVkdWNGRIMDhMMmd5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR2d6UG50cWMwUmhkR0V1VkdsMGJHVjlQQzlvTXo1Y2JpQWdJQ0FnSUNBZ0lDQThMMmhuY205MWNENWNiaUFnSUNBZ0lDQWdJQ0E4Y0Q1N2FuTkVZWFJoTGtSbGMyTnlhWEIwYVc5dWZUd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aVhDSWdZMnhoYzNOT1lXMWxQVndpZDJocGRHVXRZbTl5WkdWeUxXSjFkSFJ2Ymx3aVBudHFjMFJoZEdFdVUyaHZjRTV2ZDBKMGJuMDhMMkUrWEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5elpXTjBhVzl1UGx4dUlDQXBPMXh1ZlR0Y2JpSmRmUT09ICovXG4vKkAgc291cmNlVVJMPXNyYy9jb21wb25lbnRzL2xheW91dC9JbWFnZVdyYXBwZXIuanMgKi8iXX0= */'
  }), children, _react2.default.createElement('div', { className: hideclass, 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('div', { className: 'banner-info-box', 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('hgroup', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('h2', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, jsData.IntroducingText), _react2.default.createElement('h3', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, jsData.Title)), _react2.default.createElement('p', {
    'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, jsData.Description), _react2.default.createElement('a', { href: '', className: 'white-border-button', 'data-jsx': 4006462867,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, jsData.ShopNowBtn))));
};