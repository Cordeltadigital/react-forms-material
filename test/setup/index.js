import enzyme from 'enzyme/build'

export const createSetup = render => (
  (props = undefined) => {
    const spy = jest.fn()
    const container = enzyme.mount(render({ props, spy }))

    const submit = (elementType = 'button') => {
      container.find(elementType).simulate('click')
      container.update()
    }
    const element = (type, name) => container.find(`${type}[name="${name}"]`)
    const change = (type, name, value) => {
      const elementToChange = element(type, name)
      elementToChange.instance().value = value
      elementToChange.simulate('change')
      container.update()
    }
    const click = (type, name, event) => element(type, name).simulate('click').simulate('change', event)
    const validateCalls = (...calls) => expect(spy.mock.calls).toEqual(calls.map(values => [values]))

    return { spy, container, submit, element, change, click, validateCalls }
  }
)
