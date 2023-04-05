import React, { useState } from 'react'
import styles from '../styles/CreateQuote.module.css'

import TextArea from '../components/TextArea'
import Form from '../components/Form'
import CustomButton from '../components/CustomButton'

const CreateQuote = () => {

    const [newQuote, setNewQuote] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setNewQuote(e.target.value);
    }

    const onCreateQuote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newQuote);
    };

  return (
    <>
      <div className={styles.createQuote__container}>
        <div className={styles.createQuote__form}>
            <h1>Create Your Quote</h1>
            <Form onSubmit={onCreateQuote}>
                <TextArea minRows={15} maxRows={25} value={newQuote} onChange={handleChange} className={styles.createQuote__textarea}/>
            </Form>
            <CustomButton className={styles.createQuote__button} type="submit" label='Create Quote' color="info" variant="contained" />
        </div>
      </div>
    </>
  )
}

export default CreateQuote
