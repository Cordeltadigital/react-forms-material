import injectCss from '@cordelta/react-forms/src/injectCss'

injectCss('react-forms-material-styles', `
  .react-forms-material-radiogroup.MuiFormControl-root {
    overflow: hidden;
  }

  .react-forms-material-radio.MuiFormControl-root {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  
  .react-forms-material-radio .MuiInputLabel-formControl {
    position: static;
  }

  .react-forms-material-radio .MuiRadio-root {
    transform: translate(0, 9px) scale(1);
  }  
  
  .react-forms-material-checkbox .MuiCheckbox-root {
    transform: translate(0, 9px) scale(1);
  }
`)


