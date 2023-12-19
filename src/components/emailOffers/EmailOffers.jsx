import React from 'react'
import emailOffers from './EmailOffers.module.css'

const EmailOffers = () => {
  return (
    <section className={emailOffers.newsletter}>
      <div className={emailOffers.newsletterTitle}>
        Get exclusive offers on your email
      </div>
      <p>subscribe to our newsletter and stay updated</p>
      <form>
        <input className={emailOffers.emailInput} type="email" name="email" id="email" placeholder='Enter Your Email...' />
        <input className={emailOffers.subscribeBtn} type="button" value="Subscribe" />
      </form>
    </section>
  )
}

export default EmailOffers