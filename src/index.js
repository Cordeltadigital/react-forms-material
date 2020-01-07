import { createElement } from 'react'
import { FormProvider, context, wrapInput, wrapSubmit } from '@cordelta/react-forms'
import * as core from '@material-ui/core'
import './styles'

export const Form = FormProvider(context.Provider)
export const Submit = wrapSubmit(core.Button)

const wrapped = (component, options, baseOptions) => wrapInput(
  base(component, options, baseOptions),
  { passErrorProp: true, ...options }
)

const base = (component, options = {}, { alwaysShrinkLabel, shrinkLabel = true, defaultMargin } = {}) => (
  ({ className, error, hiddenLabel, variant, margin, label, helperText, ...inputProps }) => (
    createElement(core.FormControl, {
      className,
      error,
      fullWidth: inputProps.fullWidth,
      hiddenLabel,
      required: inputProps.required,
      variant,
      margin: margin || defaultMargin,
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
export const Checkbox = wrapped(core.Checkbox, { type: 'checkbox' }, { alwaysShrinkLabel: true, defaultMargin: 'normal' })
export const RadioButton = wrapped(core.Radio, { type: 'radio' }, { shrinkLabel: false })

export const Radio = base(
  ({ name, values, labels, numeric, ...props }) => (
    createElement(core.RadioGroup, { ...props, children: [
      values.map((value, index) =>
        createElement(RadioButton, { name, value, numeric, key: value, label: (labels && labels[index]) || value })
      )
    ] })
  ),
  {},
  { alwaysShrinkLabel: true, defaultMargin: 'normal'  }
)

export const Select = wrapped(({ values, labels, ...props }) =>
  createElement(core.Select, { ...props, children:
    values.map((value, index) =>
      createElement(core.MenuItem, { value, key: value, children: (labels && labels[index]) || value })
    )
  }),
  { type: 'select' },
  { alwaysShrinkLabel: true, defaultMargin: 'normal'  }
)
