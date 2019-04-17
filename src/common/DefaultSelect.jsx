/**
 * @file select option
 */

//  Modules
import React from 'react';
import Select from 'react-select';

// Const
const OPTIONS = [
  { label: "Ascending", value: 1 },
  { label: "Descending", value: 2 },
]

/**
 * @function DefaultSelect
 * @param {Object} props 
 * @description displays select button
 */
const DefaultSelect = (props) => {
  const { selectClassName } = props;
  return (
    <React.Fragment>
      <Select
        {...props}
        classNamePrefix='list'
        options={OPTIONS}
        className={selectClassName}
      />
    </React.Fragment>
  )
}

export default DefaultSelect;
