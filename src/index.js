import { createElement } from 'react'
import { FormProvider, context, createRawConsumer, wrapInput, wrapSubmit, useFormValues } from '@cordelta/react-forms'
import { extractErrorMessage } from '@cordelta/react-forms/dist/ErrorMessage'
import * as core from '@material-ui/core'
import './styles'

export const ErrorMessage = ({ error }) => createElement(core.FormHelperText, { children: extractErrorMessage(error), error: true })
export const Form = FormProvider(context.Provider, { margin: 'dense' }, ErrorMessage)
export const Submit = wrapSubmit(core.Button)
export const Button = core.Button
export { useFormValues }

const wrapped = (component, options, baseOptions) => wrapInput(
  base(component, options, baseOptions),
  { passErrorProp: true, ...options }
)

const base = (component, options = {}, { alwaysShrinkLabel, shrinkLabel: shrinkLabelOption = true } = {}) => (
  ({ className, error, hiddenLabel, variant, margin, label, helperText, shrinkLabel, ...inputProps }) => (
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
          ...(shrinkLabelOption === false && { shrink: false }),
          ...((alwaysShrinkLabel || shrinkLabel) && { className: 'MuiInputLabel-shrink' }),
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

export const Input = wrapInput(core.Input)
export const Text = wrapped(core.Input)
export const Checkbox = wrapped(core.Checkbox, { type: 'checkbox' }, { alwaysShrinkLabel: true })
export const RadioButton = wrapped(core.Radio, { type: 'radio' }, { shrinkLabel: false })

export const Radio = createRawConsumer(base(
  ({ name, values, labels, numeric, required, getFieldValue, getFieldValues, ...props }) => (
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
