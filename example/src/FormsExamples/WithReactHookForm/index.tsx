import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import CpfCnpjInput from 'cpf-cnpj-input'

export default function WithReactHookForm() {
  const { control, handleSubmit, watch } = useForm()
  const onSubmit = (data: any) => console.log(data)

  const value = watch('cpf_cnpj')

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <h1>With react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <p>{value}</p>

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

          <input type='submit' />
        </fieldset>
      </form>
    </>
  )
}
