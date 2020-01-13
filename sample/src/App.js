import React from 'react'
import Form from './Form'

export default function App() {
  return <>
    <Form onSubmit={values => alert(JSON.stringify(values, null, 2))} />
    <small>github repository at <a href="https://github.com/Cordeltadigital/react-forms-material">https://github.com/Cordeltadigital/react-forms-material</a></small>
  </>
}
