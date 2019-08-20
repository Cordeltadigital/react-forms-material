import { createElement } from 'react'
import { wrapInput, wrapSubmit } from 'react-functional-forms'
import * as core from '@material-ui/core'

export const TextField = wrapInput(core.TextField, { passErrorProp: true })
export const Input = wrapInput(core.Input)
export const Checkbox = wrapInput(core.Checkbox, { type: 'checkbox' })
export const Radio = wrapInput(core.Radio, { type: 'radio' })
export const Select = wrapInput(core.Select, { type: 'select' })
export const Switch = wrapInput(core.Switch, { type: 'checkbox' })

export const Slider = wrapInput(
  props => createElement(
    core.Slider,
    { ...props, value: props.value || props.min || 0 }
  ), {
    valueFromEvent: (event, value) => value || 0,
    defaultValue: props => props.value || props.min || 0
  }
)

export const MenuItem = core.MenuItem

export const Submit = wrapSubmit(core.Button)
