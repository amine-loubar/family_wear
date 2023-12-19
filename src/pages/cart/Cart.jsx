import React from 'react'
import cartCss from './Cart.module.css'
import CartProduct from '../../components/reusable/cartProduct/CartProduct'
import SectionTitle from '../../components/reusable/sectionTitle/SectionTitle'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import PrimaryButton from '../../components/reusable/primaryButton/PrimaryButton'

const Cart = () => {
  return (
    <>
      <Header />
      <div className={cartCss.cart}>
        <SectionTitle title={'Cart'} />
        <div className={cartCss.contentFlex}>
          <div className={cartCss.container}>
            <CartProduct src={'https://placehold.co/400'} alt={'Product'} name={'Classic Oxford Shirt'} price={29.99} />
            <CartProduct src={'https://placehold.co/400'} alt={'Product'} name={'Classic Oxford Shirt'} price={34.50} />
          </div>
          <div className={cartCss.totalContainer}>
            <h2>Total cost</h2>
            <div className={cartCss.totalCard}>
              <div className={cartCss.subTotal}>
                <h3>Subtotal</h3>
                <p>$ <span>64.49</span></p>
              </div>
              <hr />
              <div className={cartCss.shipping}>
                <h3>Shipping Fee</h3>
                <p>Free</p>
              </div>
              <hr />
              <div className={cartCss.total}>
                <h3>Total</h3>
                <p>$ <span>64.49</span></p>
              </div>
            </div>
            <PrimaryButton label={'Continue the checkout'} href={'#'} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart