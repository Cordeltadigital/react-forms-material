"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Submit = exports.MenuItem = exports.Slider = exports.Switch = exports.Select = exports.Radio = exports.Checkbox = exports.TextField = void 0;

var _react = require("react");

var _reactFunctionalForms = require("react-functional-forms");

var core = _interopRequireWildcard(require("@material-ui/core"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextField = (0, _reactFunctionalForms.wrapInput)(core.TextField, {
  passErrorProp: true
});
exports.TextField = TextField;
var Checkbox = (0, _reactFunctionalForms.wrapInput)(core.Checkbox, {
  type: 'checkbox'
});
exports.Checkbox = Checkbox;
var Radio = (0, _reactFunctionalForms.wrapInput)(core.Radio, {
  type: 'radio'
});
exports.Radio = Radio;
var Select = (0, _reactFunctionalForms.wrapInput)(core.Select, {
  type: 'select'
});
exports.Select = Select;
var Switch = (0, _reactFunctionalForms.wrapInput)(core.Switch, {
  type: 'checkbox'
});
exports.Switch = Switch;
var Slider = (0, _reactFunctionalForms.wrapInput)(function (props) {
  return (0, _react.createElement)(core.Slider, _objectSpread({}, props, {
    value: props.value || props.min || 0
  }));
}, {
  valueFromEvent: function valueFromEvent(event, value) {
    return value || 0;
  },
  defaultValue: function defaultValue(props) {
    return props.value || props.min || 0;
  }
});
exports.Slider = Slider;
var MenuItem = core.MenuItem;
exports.MenuItem = MenuItem;
var Submit = (0, _reactFunctionalForms.wrapSubmit)(core.Button);
exports.Submit = Submit;
