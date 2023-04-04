import React from 'react'
import { TextField } from '@mui/material';

interface propTypes {
  id: string,
  label: string,
  type: string,
  name: string,
  className?: string,
  value: string,
  helperText?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  autoComplete?: "on" | "off", 
  required?: boolean,
}

const InputField = (props: propTypes) => {
  const {id, label, type, name, className, value, helperText, onChange, autoComplete, required} = props;
  return (
    <>
      <TextField
        id={id}
        label={label}
        type={type}
        name={name}
        className={className}
        value={value}
        helperText={helperText}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
      />
    </>
  )
}

export default InputField
