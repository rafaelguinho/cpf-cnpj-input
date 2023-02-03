import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import { ChangeEvent } from 'react'
import CpfCnpjInput from '.'

function changeInputMaskValue(element: HTMLInputElement, value: string) {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

function FormTest(props: any) {
  return (
    <form>
      <CpfCnpjInput {...props} />
    </form>
  )
}

describe('CpfCnpjInput', () => {
  it('Fill a simple CPF', () => {
    const props = {
      type: 'text',
      mask: '999.999.999-99',
      maskchar: null,
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        updateValue(event.target.value),
      value: ''
    }
    const { rerender } = render(<FormTest {...props} />)
    const updateValue = jest.fn((value) => {
      props.value = value
      rerender(<FormTest {...props} />)
    })

    const input = screen.getByTestId('cpf-cnpj') as HTMLInputElement
    changeInputMaskValue(input, '78367941306')

    expect(input).toHaveProperty('value', '783.679.413-06')
  })

  it('Fill a simple CNPJ', () => {
    const props = {
      type: 'text',
      mask: '999.999.999-99',
      maskchar: null,
      value: '',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        updateValue(event.target.value)
    }
    const { rerender } = render(<FormTest {...props} />)
    const updateValue = jest.fn((value) => {
      props.value = value
      rerender(<FormTest {...props} />)
    })

    const input = screen.getByTestId('cpf-cnpj') as HTMLInputElement
    changeInputMaskValue(input, '92486507000115')

    expect(input).toHaveProperty('value', '92.486.507/0001-15')
  })

  it('Fill a value larger than a CNPJ', () => {
    const props = {
      type: 'text',
      mask: '999.999.999-99',
      maskchar: null,
      value: '',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        updateValue(event.target.value)
    }
    const { rerender } = render(<FormTest {...props} />)
    const updateValue = jest.fn((value) => {
      props.value = value
      rerender(<FormTest {...props} />)
    })

    const input = screen.getByTestId('cpf-cnpj') as HTMLInputElement
    changeInputMaskValue(input, '92486507000115000000')

    expect(input).toHaveProperty('value', '92.486.507/0001-15')
  })

  it('Change a CPF to a CNPJ', () => {
    const props = {
      type: 'text',
      mask: '999.999.999-99',
      maskchar: null,
      value: '317.446.667-92',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        updateValue(event.target.value)
    }
    const { rerender } = render(<FormTest {...props} />)
    const updateValue = jest.fn((value) => {
      props.value = value
      rerender(<FormTest {...props} />)
    })

    const input = screen.getByTestId('cpf-cnpj') as HTMLInputElement

    expect(input).toHaveProperty('value', '317.446.667-92')

    changeInputMaskValue(input, '40405600000154')

    expect(input).toHaveProperty('value', '40.405.600/0001-54')
  })

  it('Change a CNPJ to a CPF', () => {
    const props = {
      type: 'text',
      mask: '999.999.999-99',
      maskchar: null,
      value: '40.405.600/0001-54',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        updateValue(event.target.value)
    }
    const { rerender } = render(<FormTest {...props} />)
    const updateValue = jest.fn((value) => {
      props.value = value
      rerender(<FormTest {...props} />)
    })

    const input = screen.getByTestId('cpf-cnpj') as HTMLInputElement

    expect(input).toHaveProperty('value', '40.405.600/0001-54')

    changeInputMaskValue(input, '73368350587')

    expect(input).toHaveProperty('value', '733.683.505-87')
  })
})
