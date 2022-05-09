"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingMultiItemCarousel = exports.LoadingList = exports.LoadingGallery = exports.LoadingCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _listCard;

  return {
    item: {
      margin: '0 auto',
      padding: 7
    },
    listItem: {
      margin: '0 auto',
      minWidth: 205,
      height: 170
    },
    skeletonCard: {
      width: 205,
      height: 250,
      marginBottom: 20
    },
    listCard: (_listCard = {}, _defineProperty(_listCard, theme.breakpoints.down('sm'), {
      width: 160,
      height: 150
    }), _defineProperty(_listCard, theme.breakpoints.up('sm'), {
      width: 250,
      height: 200
    }), _defineProperty(_listCard, "marginBottom", 20), _listCard),
    loadingCarousel: {
      maxWidth: '40em'
    },
    multiItemCarousel: {
      maxWidth: '48em',
      minWidth: '45em'
    }
  };
});

var LoadingGallery = function LoadingGallery() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _toConsumableArray(Array(15).keys()).map(function (index) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      key: index,
      item: true,
      className: classes.item
    }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      variant: "rect",
      className: classes.skeletonCard
    }), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      width: "50%"
    }));
  }));
};

exports.LoadingGallery = LoadingGallery;

var LoadingList = function LoadingList() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _toConsumableArray(Array(7).keys()).map(function (index) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      key: index,
      container: true,
      justify: "flex-start"
    }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      variant: "rect",
      className: classes.listCard
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '20%',
        paddingLeft: 40
      }
    }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      width: "200%"
    }), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      width: "60%"
    })));
  }));
};

exports.LoadingList = LoadingList;

var LoadingCarousel = function LoadingCarousel() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    className: classes.loadingCarousel,
    container: true,
    justify: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rect",
    className: classes.listCard
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '20%',
      paddingLeft: 40
    }
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    width: "200%"
  }), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    width: "60%"
  })));
};

exports.LoadingCarousel = LoadingCarousel;

var LoadingMultiItemCarousel = function LoadingMultiItemCarousel() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    className: classes.multiItemCarousel,
    container: true,
    justify: "center"
  }, _toConsumableArray(Array(3).keys()).map(function (index) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      key: index,
      item: true,
      style: {
        padding: 7
      }
    }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      variant: "rect",
      className: classes.skeletonCard
    }), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], null), /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      width: "50%"
    }));
  }));
};

exports.LoadingMultiItemCarousel = LoadingMultiItemCarousel;