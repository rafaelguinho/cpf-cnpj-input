import React from 'react';

function clearCpfCnpj(value) {
  return value && value.replace(/[^0-9]/g, '');
}
const TYPES = {
  CPF: '999.999.999-999',
  CNPJ: '99.999.999/9999-99'
};
const DEFAULT_MASKS = {
  CPF: '___.___.___-__',
  CNPJ: '__.___.___/____-__'
};
const CpfCnpjInput = ({
  as,
  style,
  alwaysShowMask: _alwaysShowMask = false,
  defaultMaskType: _defaultMaskType = 'CPF',
  value: _value = '',
  onChange,
  ...rest
}) => {
  const MAX_LENGTH = clearCpfCnpj(TYPES.CNPJ).length;
  const stringValue = String(_value);
  const clearedValue = clearCpfCnpj(stringValue);
  const maskedValue = clearedValue ? applyMask(clearedValue, TYPES[getMask(clearedValue)]) : _alwaysShowMask ? DEFAULT_MASKS[_defaultMaskType] : clearedValue;
  console.log('clearedValue', clearedValue);
  function onLocalChange(ev) {
    const value = clearCpfCnpj(ev.target.value);
    const mask = getMask(value);
    let nextLength = value.length;
    const maskedValue = nextLength > MAX_LENGTH ? applyMask(value.substring(0, MAX_LENGTH), TYPES[mask]) : applyMask(value, TYPES[mask]);
    ev.target.value = maskedValue;
    onChange && onChange(ev);
  }
  function getMask(value) {
    return value.length > 11 ? 'CNPJ' : 'CPF';
  }
  function applyMask(value, mask) {
    let result = '';
    let inc = 0;
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });
    return result;
  }
  const InnerInput = as;
  return React.createElement(React.Fragment, null, InnerInput ? React.createElement(InnerInput, Object.assign({}, rest, {
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
