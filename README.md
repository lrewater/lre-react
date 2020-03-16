# lre-react

>

[![NPM](https://img.shields.io/npm/v/@lrewater/lre-react.svg)](https://www.npmjs.com/package/lre-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview

lre-react is a library of reusable components tailored specifically to LRE Water use cases. The components are meant for use with React and are an extension of the [Material UI framework](https://material-ui.com/). This library has grown out of the LRE Starter kKt and is meant to compliment the Starter Kit as well as any other React project.

## Roadmap

- [ ] Filters
  - [x] Date
  - [x] Multi-select
  - [x] Single-select
  - [ ] Search multi-select
  - [x] Switch
  - [x] TextField
  - [x] TextArea
  - [ ] Filter Bar
- [ ] Tables
  - [x] ListTable
  - [x] DataTable
- [ ] Graphs
  - [ ] Line Graph
- [ ] Authentication and Authorization
- [ ] Reports and Views
  - [ ] Reports Home
  - [ ] View Management
- [ ] Data Management
  - [ ] Editable Grid
  - [ ] Draggable Grid
  - [ ] View List Item
  - [ ] Edit List Item
  - [ ] Add List Item
  - [ ] Delete List Item
- [ ] Hooks
  - [x] useTable
  - [x] useGraph
  - [ ] useFetchData
  - [ ] useFilterAssoc
  - [ ] useFormSubmitStatus
  - [x] useVisibility
- [ ] Util

## Install

```bash
npm install --save lre-react
```

## Usage

```jsx
import React, { useState } from "react";

import { TextField } from "@lrewater/lre-react";

const Example = props => {
  const [value, setValue] = useState("Example Value");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <form>
      <TextField
        name="example"
        label="Example"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};
```

## License

MIT © [lrewater](https://github.com/lrewater)
