import React from 'react'

const FormRow = ({ name, type, value, handleChange, textLabel }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {textLabel || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
