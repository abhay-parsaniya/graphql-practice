import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'

import Form from '../components/Form'
import InputField from '../components/InputField'
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import CustomButton from '../components/CustomButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Signup = () => {
    const [signupFormData, setSignupFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setSignupFormData({
            ...signupFormData,
            [name]: value
        })
    };

    const onSignupFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(signupFormData);
    };

  return (
    <>
      <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.signup__title}>Register</h1>
                    <Form onSubmit={onSignupFormSubmit} className={styles.signup__form}>
                        <div className={styles.inputFields__container}>
                            <InputField
                                id="userSignupFirstNameInput"
                                label="First Name"
                                name="firstName"
                                type="text"
                                className={styles.inputField}
                                value={signupFormData.firstName}
                                onChange={handleChange}
                                autoComplete="off"
                                required={true}
                            />
                            <InputField
                                id="userSignupLastNameInput"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                className={styles.inputField}
                                value={signupFormData.lastName}
                                onChange={handleChange}
                                autoComplete="off"
                                required={true}
                            />
                            <InputField
                                id="userSignupEmailInput"
                                label="Email"
                                name="email"
                                type="email"
                                className={styles.inputField}
                                value={signupFormData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                required={true}
                            />
                            <InputField
                                id="userSignupPasswordInput"
                                label="Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className={styles.inputField}
                                value={signupFormData.password}
                                onChange={handleChange}
                                required={true}
                            />
                            {/* <OutlinedInput
                                id="userLoginPasswordInput"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                className={styles.inputField}
                                value={loginFormData.password}
                                autoComplete="off"
                                required
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setLoginFormData({ ...loginFormData, password: event.target.value })
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            /> */}
                            <CustomButton variant='contained' color='success' label='Register' type="submit" className={styles.signup__button} />
                        </div>
                    </Form>
                </div>
            </div>
    </>
  )
}

export default Signup
