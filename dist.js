"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _reactForms.Form;
  }
});
exports.Select = exports.Radio = exports.RadioButton = exports.Checkbox = exports.Text = exports.Submit = void 0;

var _react = require("react");

var _reactForms = require("@cordelta/react-forms");

var core = _interopRequireWildcard(require("@material-ui/core"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Submit = (0, _reactForms.wrapSubmit)(core.Button);
exports.Submit = Submit;

var base = function base(component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      alwaysShrinkLabel = _ref.alwaysShrinkLabel,
      _ref$shrinkLabel = _ref.shrinkLabel,
      shrinkLabel = _ref$shrinkLabel === void 0 ? true : _ref$shrinkLabel;

  return (0, _reactForms.wrapInput)(function (_ref2) {
    var className = _ref2.className,
        error = _ref2.error,
        hiddenLabel = _ref2.hiddenLabel,
        variant = _ref2.variant,
        label = _ref2.label,
        helperText = _ref2.helperText,
        inputProps = _objectWithoutProperties(_ref2, ["className", "error", "hiddenLabel", "variant", "label", "helperText"]);

    return (0, _react.createElement)(core.FormControl, {
      className: className,
      error: error,
      fullWidth: inputProps.fullWidth,
      hiddenLabel: hiddenLabel,
      required: inputProps.required,
      variant: variant,
      children: [].concat(_toConsumableArray(label ? [(0, _react.createElement)(core.InputLabel, _objectSpread({
        key: 'label',
        htmlFor: inputProps.id,
        children: label
      }, shrinkLabel === false && {
        shrink: false
      }, {}, alwaysShrinkLabel && {
        className: 'MuiInputLabel-shrink'
      }))] : []), [(0, _react.createElement)(component, _objectSpread({
        key: 'input'
      }, inputProps))], _toConsumableArray(helperText ? [(0, _react.createElement)(core.FormHelperText, {
        key: 'helperText',
        children: helperText
      })] : []))
    });
  }, _objectSpread({
    passErrorProp: true
  }, options));
};

var Text = base(core.Input);
exports.Text = Text;
var Checkbox = base(core.Checkbox, {
  type: 'checkbox'
});
exports.Checkbox = Checkbox;
var RadioButton = base(core.Radio, {
  type: 'radio'
}, {
  shrinkLabel: false
});
exports.RadioButton = RadioButton;
var Radio = base(function (_ref3) {
  var name = _ref3.name,
      values = _ref3.values,
      labels = _ref3.labels,
      props = _objectWithoutProperties(_ref3, ["name", "values", "labels"]);

  return (0, _react.createElement)(core.RadioGroup, _objectSpread({}, props, {
    children: [values.map(function (value, index) {
      return (0, _react.createElement)(RadioButton, {
        name: name,
        value: value,
        key: value,
        label: labels && labels[index] || value
      });
    })]
  }));
}, {}, {
  alwaysShrinkLabel: true
});
exports.Radio = Radio;
var Select = base(function (_ref4) {
  var values = _ref4.values,
      labels = _ref4.labels,
      props = _objectWithoutProperties(_ref4, ["values", "labels"]);

  return (0, _react.createElement)(core.Select, _objectSpread({}, props, {
    children: values.map(function (value, index) {
      return (0, _react.createElement)(core.MenuItem, {
        value: value,
        key: value,
        children: labels && labels[index] || value
      });
    })
  }));
}, {
  type: 'select'
});
exports.Select = Select;
