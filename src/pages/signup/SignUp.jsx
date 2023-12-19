import React from 'react'
import signup from './SignUp.module.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const SignUp = () => {
    return (
        <>
            <Header />
            <div className={signup.signupContainer}>
                <section className={signup.signup}>
                    <div className={signup.head}>
                        <h2>Create an account</h2>
                        <p>Enter your information to create your account</p>
                    </div>
                    <form>
                        <input type="text" placeholder='Enter your name' name="name" id="name" />
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                        <input type="password" name="password" id="password" placeholder='Enter your password' />
                        <input className={signup.signupBtn} type="submit" value="Continue" />
                    </form>
                    <div className={signup.foot}>
                        <p>Already have an account</p>
                        <Link to={'/login'} className={signup.signupLink}>log in</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default SignUp