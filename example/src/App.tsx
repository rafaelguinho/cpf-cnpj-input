import React from 'react'

import CpfCnpjInput from 'cpf-cnpj-input'
import 'cpf-cnpj-input/dist/index.css'

const App = () => {
  return (
    <CpfCnpjInput
      style={{ backgroundColor: 'red' }}
      alwaysShowMask={true}
      defaultMaskType='CNPJ'
    />
  )
}

export default App
