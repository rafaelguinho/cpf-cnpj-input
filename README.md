# react-cpf-cnpj-input-field

> A React input component with dynamic mask for Brazilian CPF or CNPJ documents

[![NPM](https://img.shields.io/npm/v/cpf-cnpj-input.svg)](https://www.npmjs.com/package/cpf-cnpj-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Table of Contents

- [Installation](#install)
- [Usage](#usage)
- [Properties](#properties)

## Install

```bash
npm install --save react-cpf-cnpj-input-field
```

## Usage

```tsx
import React from 'react'

import CpfCnpjInput from 'react-cpf-cnpj-input-field'

const App = () => {
  render() {
    return <CpfCnpjInput />
  }
}
```

## Usage with React Hook Form

```tsx
<Controller
  control={control}
  name='cpf_cnpj'
  render={({ field: { onChange, onBlur, value, name } }) => (
    <CpfCnpjInput
      onBlur={onBlur}
      onChange={onChange}
      checked={value}
      name={name}
    />
  )}
/>
```

### Properties

Name | Description | Default
---|---|---
style | Custom styles | undefined
alwaysShowMask | Define whether to always show the mask | false
defaultMaskType | Accepted ("CPF", "CNPJ") | "CPF"
as | You can provide a custom input | undefined

## License

MIT © [rafaelguinho](https://github.com/rafaelguinho)
