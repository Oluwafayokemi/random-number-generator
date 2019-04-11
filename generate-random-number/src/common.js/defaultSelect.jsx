import React from 'react';
import Select from 'react-select';


const OPTIONS = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
]
const DefaultSelect = (props) => (
    <Select {...props} options={OPTIONS} />
)

export default DefaultSelect;
