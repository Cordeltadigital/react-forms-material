import { createElement } from 'react'
import { wrapInput, wrapSubmit } from '@cordelta/react-forms'
import * as core from '@material-ui/core'

export { Form } from '@cordelta/react-forms'
export const Submit = wrapSubmit(core.Button)

const wrapped = (component, options, baseOptions) => wrapInput(
  base(component, options, baseOptions),
  { passErrorProp: true, ...options }
)

const base = (component, options = {}, { alwaysShrinkLabel, shrinkLabel = true } = {}) => (
  ({ className, error, hiddenLabel, variant, label, helperText, ...inputProps }) => (
    createElement(core.FormControl, {
      className,
      error,
      fullWidth: inputProps.fullWidth,
      hiddenLabel,
      required: inputProps.required,
      variant,
      children: [
        ...(label ? [createElement(core.InputLabel, {
          key: 'label',
          htmlFor: inputProps.id,
          children: label,
          ...(shrinkLabel === false && { shrink: false }),
          ...(alwaysShrinkLabel && { className: 'MuiInputLabel-shrink' }),
        })] : []),

        createElement(component, { key: 'input', ...inputProps }),

        ...(helperText ? [createElement(core.FormHelperText, {
          key: 'helperText',
          children: helperText
        })] : [])
      ]
    })
  )
)

export const Text = wrapped(core.Input)
export const Checkbox = wrapped(core.Checkbox, { type: 'checkbox' }, { alwaysShrinkLabel: true })
export const RadioButton = wrapped(core.Radio, { type: 'radio' }, { shrinkLabel: false })

export const Radio = base(
  ({ name, values, labels, ...props }) => (
    createElement(core.RadioGroup, { ...props, children: [
      values.map((value, index) =>
        createElement(RadioButton, { name, value, key: value, label: (labels && labels[index]) || value })
      )
    ] })
  ),
  {},
  { alwaysShrinkLabel: true }
)

export const Select = wrapped(({ values, labels, ...props }) =>
  createElement(core.Select, { ...props, children:
    values.map((value, index) =>
      createElement(core.MenuItem, { value, key: value, children: (labels && labels[index]) || value })
    )
  }),
  { type: 'select' },
  { alwaysShrinkLabel: true }
)
