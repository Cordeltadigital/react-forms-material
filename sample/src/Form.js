import React from 'react'
import { Form, Text, Select, Radio, Checkbox, Submit } from '@cordelta/react-forms-material'

export default ({ onSubmit, initialValues }) => (
  <Form onSubmit={onSubmit} values={initialValues}>
    <Text name="name" label="Name" required minLength="5" maxLength="50" />
    <Text name="description" label="Description" multiline rows={4} maxLength="100" />
    <Select name="type" label="Type" values={['', 'Widget', 'Component']} required />
    <Radio name="rating" label="Rating" values={[1, 2, 3]} row />
    <Checkbox name="urgent" label="Urgent" />

    <Submit>Submit</Submit>
  </Form>
)