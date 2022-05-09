"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Logo = _interopRequireDefault(require("../Logo/Logo"));

var _Constants = require("../../common/Constants");

var _image_not_available = _interopRequireDefault(require("../Logo/image_not_available.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var utils = require('../../common/Utils');

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    content: {
      flex: '1 0 auto'
    },
    details: {
      flexDirection: 'column',
      width: '100%'
    },
    media: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      verticalAlign: 'middle',
      display: 'inline-block'
    },
    mediaContainer: {
      minWidth: 125,
      height: 170,
      textAlign: 'center'
    },
    card: {
      marginBottom: 10,
      width: '100%',
      height: 200
    },
    helper: {
      display: 'inline-block',
      height: '100%',
      verticalAlign: 'middle'
    }
  };
});

var ListView = function ListView(props) {
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    utils.triggerImpression(props.items);
  }, [props.items]);
  return props.items && props.items.length > 0 && props.items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      key: item.itemId,
      container: true,
      direction: "column",
      justify: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/_react["default"].createElement(_core.Card, {
      className: classes.card,
      variant: "outlined",
      square: true
    }, /*#__PURE__*/_react["default"].createElement(_core.CardActionArea, {
      href: item.itemAffiliateWebUrl && "".concat(item.itemAffiliateWebUrl).concat(_Constants.ffParam) || item.itemWebUrl,
      target: "_blank"
    }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
      display: "flex",
      flexWrap: "nowrap",
      p: 1,
      m: 1,
      style: {
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
      p: 1,
      className: classes.mediaContainer
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.helper
    }), /*#__PURE__*/_react["default"].createElement("img", {
      src: item.thumbnailImages && item.thumbnailImages[0].imageUrl || item.image && item.image.imageUrl || _image_not_available["default"],
      className: classes.media,
      alt: item.title
    })), /*#__PURE__*/_react["default"].createElement(_core.Box, {
      p: 1,
      className: classes.details
    }, /*#__PURE__*/_react["default"].createElement(_core.CardContent, {
      className: classes.content
    }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "body1",
      color: "textPrimary",
      gutterBottom: true,
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical'
      }
    }, item.title), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "subtitle2",
      color: "textSecondary"
    }, item.price.currency, " ", item.price.value))), /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
      style: {
        marginBottom: '0.5em',
        marginTop: 'auto'
      }
    })))));
  });
};

var _default = ListView;
exports["default"] = _default;