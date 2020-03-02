import React from 'react'
import { createSetup } from './setup'
import { Form, Text, Submit } from '../src'

const Container = ({ value, spy }) => (
  <Form onSubmit={spy}>
    <Text name="text" value={value} />
    <Submit>Submit</Submit>
  </Form>
)

const setup = createSetup(({ props, spy }) => (
  <Container value={props.value} spy={spy} />
))

test("input can be controlled using value prop", () => {
  const { container, element, validateCalls, submit } = setup({ value: 'test' })
  const input = element('input', 'text')

  expect(input.instance().value).toBe('test')
  submit()
  validateCalls({ text: 'test' })

  container.setProps({ value: 'test2' })
  container.update()
  expect(input.instance().value).toBe('test2')
  submit()
  validateCalls({ text: 'test' }, { text: 'test2' })
})

// test("initial value can be set using defaultValue prop", () => {
//
// })
