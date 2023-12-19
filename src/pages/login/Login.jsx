import React from 'react'
import login from './Login.module.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Login = () => {
    return (
        <>
            <Header />
            <div className={login.loginContainer}>
                <section className={login.login}>
                    <div className={login.head}>
                        <h2>Login</h2>
                        <p>Enter your email and password to login</p>
                    </div>
                    <form>
                        <input className={login.input} type="email" name="email" id="email" placeholder='Enter your email' />
                        <input type="password" name="password" id="password" placeholder='Enter your password' />
                        <input className={login.loginBtn} type="submit" value="Continue" />
                    </form>
                    <div className={login.foot}>
                        <p>don't have an account</p>
                        <Link to={'/signup'} className={login.signupLink}>sign up</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Login