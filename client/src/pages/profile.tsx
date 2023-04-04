import React from 'react'
import styles from '../styles/Profile.module.css'

import Images from '../components/Images'

const Profile = () => {
  return (
    <>
      <div className={styles.profile__wrapper}>
        <div className={styles.profile__container}>
            <div className={styles.profile}>
                <div className={styles.profile__image}></div>
                {/* <Images src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dAr4nnYucbZaV3JyyKl_htTZUwmyk-h9fYh33dwBDA&s`} width={50} height={50} className='circle' /> */}
                <h2>Abhay Patel</h2>
                <p>abhay@gmail.com</p>
            </div>
            <h1>Your Quotes</h1>
            <blockquote>
                <h3>nice quote</h3>
            </blockquote>
            <blockquote>
                <h3>nice quote</h3>
            </blockquote>
            <blockquote>
                <h3>nice quote</h3>
            </blockquote>
            <blockquote>
                <h3>nice quote</h3>
            </blockquote>
            <blockquote>
                <h3>nice quote</h3>
            </blockquote>
        </div>
      </div>
    </>
  )
}

export default Profile
