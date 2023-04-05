import React from 'react'

import styles from '../styles/Quotes.module.css'

const Quotes = () => {
  return (
    <>
        <h1 className={styles.quotes__heading}>Quotes</h1>
        <div className={styles.quotes__container}>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
            <blockquote className={styles.quote}>
                <h1>nice quote</h1>
                <p className={styles.quote__authorName}>Abhay</p>
            </blockquote>
        </div>
    </>
  )
}

export default Quotes
