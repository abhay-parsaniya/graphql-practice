import React, { FormEvent, FormEventHandler } from 'react'

interface formTypes{
  children: any,
  onSubmit: FormEventHandler<HTMLFormElement>
}


const Form = ({ children, onSubmit }: formTypes) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </>
  )
}

export default Form
