import React from 'react'
import {Product} from '../components'
import {useMediaQuery} from "@mui/material";

const ProductPage = () => {
    window.scrollTo({top: 0})
    const isSmallDev = useMediaQuery("(max-width: 900px)");
    return (
        <div style={{
            marginTop: isSmallDev ? '80px' : '0px',
            paddingTop: isSmallDev ? '' : '140px'
        }}>
            <Product/>
        </div>
    )
}

export default ProductPage
