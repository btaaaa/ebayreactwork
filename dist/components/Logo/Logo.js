"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ebay_logo = _interopRequireDefault(require("./ebay_logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * *
 *  * Copyright 2021 eBay Inc.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *  http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *  *
 */
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    logo: {
      "float": 'right'
    }
  };
});

var Logo = function Logo(_ref) {
  var style = _ref.style;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("img", {
    className: classes.logo,
    src: _ebay_logo["default"],
    style: style,
    alt: "eBay Logo"
  });
};

Logo.propTypes = {
  style: _propTypes["default"].object
};
var _default = Logo;
exports["default"] = _default;