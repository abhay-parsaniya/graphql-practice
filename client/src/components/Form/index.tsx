import React, { FormEvent, FormEventHandler } from 'react'

interface formTypes{
  children: any,
  className?: string,
  onSubmit: FormEventHandler<HTMLFormElement>
}


const Form = ({ children, onSubmit, className }: formTypes) => {
  return (
    <>
      <form onSubmit={onSubmit} className={className} >
        {children}
      </form>
    </>
  )
}

export default Form
