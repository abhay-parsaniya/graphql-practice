import React from 'react'
import { TextField } from '@mui/material';

interface propTypes {
  id: string,
  label: string,
  value: string,
  helperText?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InputField = (props: propTypes) => {
  const {id, label, value, helperText, onChange} = props;
  return (
    <>
      <TextField
        id={id}
        label={label}
        value={value}
        helperText={helperText}
        onChange={onChange}
      />
      {/* <TextField
        id="outlined-controlled"
        label="Controlled"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        }}
      /> */}
    </>
  )
}

export default InputField
