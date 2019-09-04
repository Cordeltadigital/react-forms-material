import { createElement } from 'react'
import { wrapInput, wrapSubmit } from '@cordelta/react-forms'
import * as core from '@material-ui/core'

export { Form } from '@cordelta/react-forms'
export const Submit = wrapSubmit(core.Button)

const base = component => wrapInput(({ className, error, hiddenLabel, variant, label, helperText, ...inputProps }) => (
  createElement(core.FormControl, {
    className,
    error,
    fullWidth: inputProps.fullWidth,
    hiddenLabel,
    required: inputProps.required,
    variant,
    children: [
      ...(label ? [createElement(core.InputLabel, { key: 'label', htmlFor: inputProps.id, children: label })] : []),
      createElement(component, { key: 'input', ...inputProps }),
      ...(helperText ? [createElement(core.FormHelperText, { key: 'helperText', children: helperText })] : [])
    ]
  })
), { passErrorProp: true })

export const Text = base(core.Input)
export const Checkbox = base(core.Checkbox)
export const RadioButton = base(core.Radio)

export const Radio = base(({ values, labels, ...props }) =>
  createElement(core.RadioGroup, { children: [
    values.map((value, index) =>
      createElement(RadioButton, { ...props, value, key: value, label: (labels && labels[index]) || value })
    )
  ] })
)

export const Select = base(({ values, labels, ...props }) =>
  createElement(core.Select, { ...props, children:
    values.map((value, index) =>
      createElement(core.MenuItem, { value, key: value, children: (labels && labels[index]) || value })
    )
  })
)
