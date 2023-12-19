import React, { useState } from 'react'
import productCss from './Product.module.css'
import PrimaryButton from '../../components/reusable/primaryButton/PrimaryButton'
import ReviewCard from '../../components/reusable/reviewCard/ReviewCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const Product = () => {

  const [activeSize, setActiveSize] = useState(null);

  const handleSelect = (size) => {
    setActiveSize(size);
  };

  return (
    <>
      <Header />
      <div className={productCss.container}>
        <section className={productCss.product}>
          <div className={productCss.image}>
            <img src="https://placehold.jp/135x240.png" alt="product" />
          </div>
          <div className={productCss.info}>
            <div className={productCss.productInfo}>
              <h2>Classic Oxford Shirt</h2>
              <div className={productCss.price}>$29.99</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.</p>
            </div>
            <div className={productCss.selectSize}>
              <h2>Select The Size</h2>
              <div className={productCss.sizes}>
                <div className={activeSize === 'S' ? productCss.active : ''} onClick={() => { handleSelect('S') }}>S</div>
                <div className={activeSize === 'M' ? productCss.active : ''} onClick={() => { handleSelect('M') }}>M</div>
                <div className={activeSize === 'L' ? productCss.active : ''} onClick={() => { handleSelect('L') }}>L</div>
                <div className={activeSize === 'XL' ? productCss.active : ''} onClick={() => { handleSelect('XL') }}>XL</div>
                <div className={activeSize === 'XXL' ? productCss.active : ''} onClick={() => { handleSelect('XXL') }}>XXL</div>
              </div>
            </div>
            <PrimaryButton label={'Add To Cart'} href={'#'} />
            <div className={productCss.otherInfo}>
              <p>Category: <span>Women, T-Shirt</span></p> <p>Tags: <span>Modern, Latest, new collection</span></p>
            </div>
          </div>
        </section>
        <div className={productCss.desc_review}>
          <section className={productCss.description}>
            <h2 className={productCss.title}>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat architecto cum excepturi voluptatum, soluta culpa natus, eum a inventore quisquam, nihil cupiditate laudantium sed at quibusdam maxime placeat magnam.</p>
          </section>
          <section className={productCss.description}>
            <h2 className={productCss.title}>Reviews</h2>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product