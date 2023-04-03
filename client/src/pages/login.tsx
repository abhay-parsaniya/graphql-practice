import React, { useState } from 'react'
import styles from '../styles/Login.module.css'

import Form from '../components/Form'
import InputField from '../components/InputField'
import { Box } from '@mui/material'
import CustomButton from '../components/CustomButton'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    const onLoginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginFormData);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.login__form}>
                        <Form onSubmit={onLoginFormSubmit}>
                            <div>
                                <InputField
                                    id="userLoginEmailInput"
                                    label="Email"
                                    value={loginFormData.email}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setLoginFormData({ ...loginFormData, email: event.target.value })
                                    }
                                />
                                <InputField
                                    id="userLoginPasswordInput"
                                    label="Password"
                                    value={loginFormData.password}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setLoginFormData({ ...loginFormData, password: event.target.value })
                                    }
                                />
                            </div>
                            <CustomButton variant='contained' color='success' label='Login' type="submit" />
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
