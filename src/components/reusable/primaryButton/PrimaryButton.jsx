import React from 'react'
import primaryButton from './PrimaryButton.module.css'

const PrimaryButton = (props) => {
    return (
        <>
            <a href={props.href} className={primaryButton.shopNowBtn}>{props.label}</a>
        </>
    )
}   

export default PrimaryButton