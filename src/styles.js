import injectCss from '@cordelta/react-forms/src/injectCss'

injectCss('react-forms-material-styles', `
  form.react-forms .MuiRadio-root, form.react-forms .MuiCheckbox-root {
    top: 10px;
  }

  form.react-forms .react-forms-material-field {
    display: block;
  }
    
  form.react-forms .react-forms-material-inline {
    display: inline-block;
  }
`)


