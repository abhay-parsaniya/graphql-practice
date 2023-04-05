import { TextareaAutosize } from '@mui/material'
import { type } from 'os';
import React from 'react'

interface propType{
    maxRows?: number,
    minRows?: number,
    value: string,
    className: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
}

const TextArea = (props: propType) => {
    const {maxRows, minRows, value, onChange, className} = props;
  return (
    <>
      <TextareaAutosize maxRows={maxRows} minRows={minRows} value={value} onChange={onChange} className={className} />
    </>
  )
}

export default TextArea
