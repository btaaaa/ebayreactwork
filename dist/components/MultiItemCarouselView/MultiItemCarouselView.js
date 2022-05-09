"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMaterialUiCarousel = _interopRequireDefault(require("react-material-ui-carousel"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Logo = _interopRequireDefault(require("../Logo/Logo"));

var _Constants = require("../../common/Constants");

var _image_not_available = _interopRequireDefault(require("../Logo/image_not_available.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var utils = require('../../common/Utils');

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    content: {
      flex: '1 0 auto'
    },
    details: {
      flexDirection: 'column'
    },
    item: {
      margin: '0 auto',
      padding: 7,
      display: 'inline-block',
      verticalAlign: 'top'
    },
    media: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      verticalAlign: 'middle',
      display: 'inline-block'
    },
    card: {
      display: 'flex',
      width: 224,
      height: 340
    },
    carousel: {
      position: 'relative',
      minWidth: '45em'
    }
  };
});
/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */

function chunkArray(myArray, chunkSize) {
  var results = [];

  for (var i = 0; i < myArray.length; i++) {
    var last = results[results.length - 1];

    if (!last || last.length === chunkSize) {
      results.push([myArray[i]]);
    } else {
      last.push(myArray[i]);
    }
  }

  return results;
}

var MultiItemCarouselView = function MultiItemCarouselView(props) {
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      chunkedItems = _useState2[0],
      setChunkedItems = _useState2[1];

  (0, _react.useEffect)(function () {
    utils.triggerImpression(props.items);
  }, [props.items]);
  (0, _react.useEffect)(function () {
    props.items && setChunkedItems(chunkArray(props.items, 3));
    return function () {
      setChunkedItems([]);
    };
  }, [props.items]);
  return chunkedItems && /*#__PURE__*/_react["default"].createElement(_reactMaterialUiCarousel["default"], {
    animation: props.carouselOptions && props.carouselOptions.animation || 'slide',
    autoPlay: props.carouselOptions && props.carouselOptions.autoPlay,
    className: classes.carousel,
    interval: props.carouselOptions && props.carouselOptions.interval || 4000,
    indicators: props.carouselOptions && props.carouselOptions.indicators,
    navButtonsAlwaysInvisible: props.carouselOptions && props.carouselOptions.navButtonsAlwaysInvisible,
    navButtonsAlwaysVisible: props.carouselOptions && props.carouselOptions.navButtonsAlwaysVisible,
    stopAutoPlayOnHover: props.carouselOptions && props.carouselOptions.stopAutoPlayOnHover
  }, chunkedItems.map(function (items, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i
    }, items[0] && /*#__PURE__*/_react["default"].createElement(Item, {
      key: "".concat(i, "0"),
      item: items[0]
    }), items[1] && /*#__PURE__*/_react["default"].createElement(Item, {
      key: "".concat(i, "1"),
      item: items[1]
    }), items[2] && /*#__PURE__*/_react["default"].createElement(Item, {
      key: "".concat(i, "2"),
      item: items[2]
    }));
  }));
};

var Item = function Item(props) {
  var classes = useStyles();
  return props.item && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    key: props.item.itemId,
    className: classes.item,
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Card, {
    className: classes.card,
    variant: "outlined",
    square: true
  }, /*#__PURE__*/_react["default"].createElement(_core.CardActionArea, {
    href: props.item.itemAffiliateWebUrl && "".concat(props.item.itemAffiliateWebUrl).concat(_Constants.ffParam) || props.item.itemWebUrl,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    p: 1,
    style: {
      height: 200,
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.item.thumbnailImages && props.item.thumbnailImages[0].imageUrl || props.item.image && props.item.image.imageUrl || _image_not_available["default"],
    className: classes.media,
    alt: props.item.title
  })), /*#__PURE__*/_react["default"].createElement("div", {
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
      WebkitLineClamp: '2',
      WebkitBoxOrient: 'vertical'
    }
  }, props.item.title), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "subtitle2",
    color: "textSecondary"
  }, props.item.price.currency, " ", props.item.price.value))), /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    style: {
      marginTop: '-0.7em',
      marginRight: '0.7em'
    }
  }))));
};

Item.propTypes = {
  item: _propTypes["default"].object
};
MultiItemCarouselView.propTypes = {
  carouselOptions: _propTypes["default"].shape({
    animation: _propTypes["default"].string,
    autoPlay: _propTypes["default"].bool,
    interval: _propTypes["default"].number,
    indicators: _propTypes["default"].bool,
    navButtonsAlwaysInvisible: _propTypes["default"].bool,
    navButtonsAlwaysVisible: _propTypes["default"].bool,
    stopAutoPlayOnHover: _propTypes["default"].bool
  }),
  items: _propTypes["default"].array
};
var _default = MultiItemCarouselView;
exports["default"] = _default;