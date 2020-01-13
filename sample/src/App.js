import React from 'react'
import Form from './Form'

export default function App() {
  return (
    <Form onSubmit={values => alert(JSON.stringify(values, null, 2))} />
  )
}
