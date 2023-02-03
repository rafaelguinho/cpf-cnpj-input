function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

var _excluded = ["as", "style", "name", "value", "onChange", "type"];
function clearCpfCnpj(value) {
  return value && value.replace(/[^0-9]/g, '');
}
var CpfCnpjInput = function CpfCnpjInput(_ref) {
  var as = _ref.as,
    style = _ref.style,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'cpf_cnpj' : _ref$name,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onChange = _ref.onChange,
    type = _ref.type,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var TYPES = {
    CPF: '999.999.999-999',
    CNPJ: '99.999.999/9999-99'
  };
  var MAX_LENGTH = clearCpfCnpj(TYPES.CNPJ).length;
  var stringValue = String(value);
  var clearedValue = clearCpfCnpj(stringValue);
  var maskedValue = clearedValue ? applyMask(clearedValue, TYPES[getMask(clearedValue)]) : clearedValue;
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
  var InnerInput = as;
  return React.createElement(React.Fragment, null, InnerInput ? React.createElement(InnerInput, Object.assign({}, rest, {
    style: style,
    name: name,
    label: 'CPF/CNPJ',
    "data-testid": 'cpf-cnpj',
    type: type,
    defaultValue: maskedValue,
    onChange: onLocalChange
  })) : React.createElement("input", Object.assign({}, rest, {
    style: style,
    name: name,
    "data-testid": 'cpf-cnpj',
    type: type,
    defaultValue: maskedValue,
    onChange: onLocalChange
  })));
};

module.exports = CpfCnpjInput;
//# sourceMappingURL=index.js.map
