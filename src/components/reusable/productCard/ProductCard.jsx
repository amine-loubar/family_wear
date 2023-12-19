import React from 'react'
import productCard from './ProductCard.module.css'

const ProductCard = (props) => {

    const OPEN_PRODUCT_PAGE = (id) => {
        window.location.href = `/product/${id}`;
    }
    
    return (
        <div onClick={() => {
            OPEN_PRODUCT_PAGE(props.id)
        }} className={productCard.card}>
            <div className={productCard.image}>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className={productCard.bottom}>
                <div className={productCard.info}>
                    <div className={productCard.name}>{props.productName}</div>
                    <p className={productCard.description}>{props.productDesc}</p>
                </div>
                <div className={productCard.price}>
                    <div className={productCard.priceLabel}>
                        ${props.price}
                    </div>
                    <a href="#" className={productCard.addToCart}>Add To Cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard