# @cordelta/react-forms-material

Beautiful, ultra simple, stateless, validated forms for use in React function components

## Installation

```shell
yarn add @cordelta/react-forms-material
```

## Usage

```jsx
import React from 'react'
import { Form, Text, Select, Radio, Checkbox, Submit } from '@cordelta/react-forms-material'

export default ({ onSubmit, initialValues }) => (
  <Form onSubmit={onSubmit} values={initialValues}>
    <Text name="name" label="Name" required minLength="5" maxLength="50" />
    <Text name="description" label="Description" multiline maxLength="100" />
    <Select name="type" label="Type" values={['', 'Widget', 'Component']} required />
    <Radio name="rating" label="Rating" values={[1, 2, 3]} row />
    <Checkbox name="urgent" label="Urgent" />

    <Submit>Submit</Submit>
  </Form>
)
```

## Core Components

### `Form`

All input components must be contained within a `Form` component.

#### Props

Name|Type|Description
---|---|---
values|object|Object containing initial values for form elements
onSubmit|function(values)|A callback to be executed when the corresponding `Submit` component is clicked

All other props are passed on to the underlying `form` element.

### `Submit`

Renders a Material UI [`Button` component](https://material-ui.com/api/button/) that triggers the closest `Form` 
component's `onSubmit` callback.

#### Props

All props are passed on to the underlying `Button` component.

## Field Components

Field components are constructed by wrapping a Material UI [`InputLabel` component](https://material-ui.com/api/input-label/), 
a form component and [`FormHelperText` component](https://material-ui.com/api/form-helper-text/) within a 
[`FormControl` component](https://material-ui.com/api/form-control/), similar to a 
[`TextField` component](https://material-ui.com/api/text-field/).

All field components can be passed the following props:

Name|Type|Description
---|---|---
name|string|Specifies the name of the property to populate with the field value (required)
label|string|Text on the field's label
value|any|Initial value for the field
helperText|string|Specifies the helper text for the field

The following props are passed to the parent [`FormControl` component](https://material-ui.com/api/form-control/):

Name|Type|Description
---|---|---
className|string|Class name to apply to the component
fullWidth|boolean|Specifies that the field should occupy the full width of its parent
variant|string|Corresponds to the variant [prop](https://material-ui.com/api/form-control/#props) of a `FormControl`. One of `standard`, `outlined` or `filled`

All other props are passed to the input component, as described below.
 
### `Text`

Renders a field component with a Material UI [`Input` component](https://material-ui.com/api/input/) as the input 
component.

### `Select`

Renders a field component with a Material UI [`Select` component](https://material-ui.com/api/select/) as the input 
component. Options are specified using the props below and are rendered as 
[`MenuItem` components](https://material-ui.com/api/menu-item/).

#### Props

Name|Type|Description
---|---|---
values|array(any)|Specifies the values to use for each option
labels|array(string)|Specifies the labels to use for each corresponding option in the `values` array. If not specified, entries from the `values` array are used. 

### `Radio`

Renders a field component with a Material UI [`RadioGroup` component](https://material-ui.com/api/radio-group/) as the 
input component. Options are specified using the props below and are rendered as `RadioButton` components, described
in the next section. 

#### Props

Name|Type|Description
---|---|---
values|array(any)|Specifies the values to use for each option
labels|array(string)|Specifies the labels to use for each corresponding option in the `values` array. If not specified, entries from the `values` array are used. 

### `RadioButton`

Renders a field component with a Material UI [`Radio` component](https://material-ui.com/api/radio/) as the input 
component. 

### `Checkbox`

Renders a field component with a Material UI [`Checkbox` component](https://material-ui.com/api/checkbox/) as the 
input component. 
