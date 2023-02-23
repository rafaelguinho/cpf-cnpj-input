import React from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["as", "style", "alwaysShowMask", "defaultMaskType", "value", "onChange"];
function clearCpfCnpj(value) {
  return value && value.replace(/[^0-9]/g, '');
}
var TYPES = {
  CPF: '999.999.999-999',
  CNPJ: '99.999.999/9999-99'
};
var DEFAULT_MASKS = {
  CPF: '___.___.___-__',
  CNPJ: '__.___.___/____-__'
};
var CpfCnpjInput = function CpfCnpjInput(_ref) {
  var as = _ref.as,
    style = _ref.style,
    _ref$alwaysShowMask = _ref.alwaysShowMask,
    alwaysShowMask = _ref$alwaysShowMask === void 0 ? false : _ref$alwaysShowMask,
    _ref$defaultMaskType = _ref.defaultMaskType,
    defaultMaskType = _ref$defaultMaskType === void 0 ? 'CPF' : _ref$defaultMaskType,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onChange = _ref.onChange,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var MAX_LENGTH = clearCpfCnpj(TYPES.CNPJ).length;
  var stringValue = String(value);
  var clearedValue = clearCpfCnpj(stringValue);
  var maskedValue = clearedValue ? applyMask(clearedValue, TYPES[getMask(clearedValue)]) : alwaysShowMask ? DEFAULT_MASKS[defaultMaskType] : clearedValue;
  function onLocalChange(ev) {
    var value = clearCpfCnpj(ev.target.value);
    var mask = getMask(value);
    var nextLength = value.length;
    var maskedValue = nextLength > MAX_LENGTH ? applyMask(value.substring(0, MAX_LENGTH), TYPES[mask]) : applyMask(value, TYPES[mask]);
    ev.target.value = maskedValue;
    onChange && onChange(ev);
  }
  function getMask(value) {
    return value.length > 11 ? 'CNPJ' : 'CPF';
  }
  function applyMask(value, mask) {
    var result = '';
    var inc = 0;
    Array.from(value).forEach(function (letter, index) {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });
    return result;
  }
  var CustomInput = as;
  return React.createElement(React.Fragment, null, CustomInput ? React.createElement(CustomInput, Object.assign({}, rest, {
    style: style,
    label: 'CPF/CNPJ',
    "data-testid": 'cpf-cnpj',
    type: 'text',
    defaultValue: maskedValue,
    onChange: onLocalChange
  })) : React.createElement("input", Object.assign({}, rest, {
    style: style,
    "data-testid": 'cpf-cnpj',
    type: 'text',
    defaultValue: maskedValue,
    onChange: onLocalChange
  })));
};

export default CpfCnpjInput;
//# sourceMappingURL=index.modern.js.map
