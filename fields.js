import React from 'react'
import { wrapInput, wrapSubmit } from 'react-functional-forms'
import * as core from '@material-ui/core'

const base = render => ({ ...inputProps }) => (
  <core.FormControl
    className={className}
    error={error}
    fullWidth={fullWidth}
    hiddenLabel={hiddenLabel}
    required={required}
    variant={variant}
  >
    {label && (
      <core.InputLabel htmlFor={id}>
        {label}
      </core.InputLabel>
    )}
    {render(inputProps)}
    {helperText && (
      <core.FormHelperText>
        {helperText}
      </core.FormHelperText>
    )}
  </core.FormControl>
)