import React from 'react'

import CpfCnpjInput from 'cpf-cnpj-input'
import 'cpf-cnpj-input/dist/index.css'
import WithReactHookForm from './FormsExamples/WithReactHookForm'

const App = () => {
  return (
    <>
      <CpfCnpjInput
        style={{ backgroundColor: 'red' }}
        alwaysShowMask={true}
        defaultMaskType='CNPJ'
      />

      <br></br>

      <WithReactHookForm />
    </>
  )
}

export default App
