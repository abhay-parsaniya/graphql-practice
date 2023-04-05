import React, { useState } from 'react'
import styles from '../styles/Login.module.css'

import Form from '../components/Form'
import InputField from '../components/InputField'
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import CustomButton from '../components/CustomButton'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
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
        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    };

    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginFormData);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.login__title}>Login</h1>
                    <Form onSubmit={onLoginFormSubmit} className={styles.login__form}>
                        <div className={styles.inputFields__container}>
                            <InputField
                                id="userLoginEmailInput"
                                label="Email"
                                name="email"
                                type="email"
                                className={styles.inputField}
                                value={loginFormData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                required={true}
                            />
                            <InputField
                                id="userLoginPasswordInput"
                                label="Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className={styles.inputField}
                                value={loginFormData.password}
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
                            <CustomButton variant='contained' color='success' label='Login' type="submit" className={styles.login__button} />
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login
