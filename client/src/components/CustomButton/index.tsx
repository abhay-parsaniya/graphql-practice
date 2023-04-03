import { Button } from '@mui/material'
import React from 'react'

interface propTypes{
    variant: "text" | "outlined" | "contained" | undefined,
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
    label: string,
    type: "button" | "submit" | "reset"
}

const CustomButton = (props: propTypes) => {
    const {variant, color, label, type} = props;
    return (
        <>
            <Button variant={variant} color={color} type={type}>
                {label}
            </Button>
        </>
    )
}

export default CustomButton
