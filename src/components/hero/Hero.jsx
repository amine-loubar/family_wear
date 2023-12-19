import React from 'react'
import heroCss from './Hero.module.css'
import heroImage from '../../assets/heroImage.svg'
import PrimaryButton from '../reusable/primaryButton/PrimaryButton'

const Hero = () => {
    return (
        <section className={heroCss.hero}>
            <div className={heroCss.leftSide}>
                <div className={heroCss.content}>
                    <h1>Welcome to Family Wear</h1>
                    <p>Perfect deals <br></br> for the whole family
                    </p>
                </div>
                <PrimaryButton href={"#newCollections"} label={"New Collections"} />
            </div>
            <div className={heroCss.rightSide}>
                <img src={heroImage} alt="hero section image" />
            </div>
        </section>
    )
}

export default Hero