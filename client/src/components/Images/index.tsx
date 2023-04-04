import React from 'react'
import Image from 'next/image'
import { height, width } from '@mui/system';

interface propType {
    src: string,
    alt: string,
    height?: number,
    width?: number,
    className?: string
}

const Images = (props: propType) => {
    const { src, alt, height, width, className } = props;
    return (
        <>
            <Image src={src} alt={alt} height={height} width={width} className={className} />
        </>
    )
}

Images.defaultProps = {
    alt: "Network Error"
}

export default Images
