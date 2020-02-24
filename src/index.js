import { createElement } from 'react'
import { FormProvider, context, createRawConsumer, wrapInput, wrapSubmit } from '@cordelta/react-forms'
import { extractErrorMessage } from '@cordelta/react-forms/src/ErrorMessage'
import * as core from '@material-ui/core'
import './styles'

export const ErrorMessage = ({ error }) => createElement(core.FormHelperText, { children: extractErrorMessage(error), error: true })
export const Form = FormProvider(context.Provider, { margin: 'normal' }, ErrorMessage)
export const Submit = wrapSubmit(core.Button)
export const Button = core.Button

const wrapped = (component, options, baseOptions) => wrapInput(
  base(component, options, baseOptions),
  { passErrorProp: true, ...options }
)

const base = (component, options = {}, { alwaysShrinkLabel, shrinkLabel = true } = {}) => (
  ({ className, error, hiddenLabel, variant, margin, label, helperText, ...inputProps }) => (
    createElement(core.FormControl, {
      className: `react-forms-material-field${options.type ? ` react-forms-material-${options.type}` : ''}${className ? ` ${className}` : ''}`,
      error,
      fullWidth: inputProps.fullWidth,
      hiddenLabel,
      required: inputProps.required,
      variant,
      margin,
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

export const Radio = createRawConsumer(base(
  ({ name, values, labels, numeric, required, ...props }) => (
    createElement(core.RadioGroup, { ...props, children: [
      values.map((value, index) =>
        createElement(RadioButton, {
          name,
          value,
          numeric,
          key: value,
          label: (labels && labels[index]) || value,
          margin: props.margin,
          ...(required && { required })
        })
      )
    ] })
  ),
  { type: 'radiogroup' },
  { alwaysShrinkLabel: true  }
))

export const Select = wrapped(({ values, labels, ...props }) =>
  createElement(core.Select, { ...props, children:
    values.map((value, index) =>
      createElement(core.MenuItem, {
        value,
        key: value,
        children: (labels && labels[index]) || value,
        ...(props.required && { required: props.required })
      })
    )
  }),
  { type: 'select' },
  { alwaysShrinkLabel: true  }
)
