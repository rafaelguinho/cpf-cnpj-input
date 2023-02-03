import React from 'react'

type CpfCnpjInputProps = {
  as?: React.FC<any & InputProps>
  style?: React.CSSProperties
}

type InputProps = JSX.IntrinsicElements['input']

export function clearCpfCnpj(value: string) {
  return value && value.replace(/[^0-9]/g, '')
}

export function isCpf(value: string) {
  return value.length === 11
}

export function isCnpj(value: string) {
  return value.length === 14
}

const CpfCnpjInput: React.FC<CpfCnpjInputProps & InputProps> = ({
  as,
  style,
  name = 'cpf_cnpj',
  value = '',
  onChange,
  type,
  ...rest
}: CpfCnpjInputProps & InputProps) => {
  const TYPES = {
    CPF: '999.999.999-999',
    CNPJ: '99.999.999/9999-99'
  }
  const MAX_LENGTH = clearCpfCnpj(TYPES.CNPJ).length

  const stringValue = String(value)

  const clearedValue = clearCpfCnpj(stringValue)
  const maskedValue = clearedValue
    ? applyMask(clearedValue, TYPES[getMask(clearedValue)])
    : clearedValue

  function onLocalChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = clearCpfCnpj(ev.target.value)
    const mask = getMask(value)

    let nextLength = value.length

    const maskedValue =
      nextLength > MAX_LENGTH
        ? applyMask(value.substring(0, MAX_LENGTH), TYPES[mask])
        : applyMask(value, TYPES[mask])

    ev.target.value = maskedValue

    onChange && onChange(ev)
  }

  function getMask(value: string) {
    return value.length > 11 ? 'CNPJ' : 'CPF'
  }

  function applyMask(value: string, mask: string) {
    let result = ''

    let inc = 0
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc]
        inc++
      }
      result += letter
    })
    return result
  }

  const InnerInput = as

  return (
    <React.Fragment>
      {InnerInput ? (
        <InnerInput
          {...rest}
          style={style}
          name={name}
          label='CPF/CNPJ'
          data-testid={'cpf-cnpj'}
          type={type}
          defaultValue={maskedValue}
          onChange={onLocalChange}
        />
      ) : (
        <input
          {...rest}
          style={style}
          name={name}
          data-testid={'cpf-cnpj'}
          type={type}
          defaultValue={maskedValue}
          onChange={onLocalChange}
        />
      )}
    </React.Fragment>
  )
}

export default CpfCnpjInput
