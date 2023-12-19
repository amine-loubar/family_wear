import React from 'react'
import bestSeller from './BestSeller.module.css'
import ProductCard from '../reusable/productCard/ProductCard'

// This is dummy data will be replaced with your product from the database
import menData from '../../assets/dommyData'


const BestSeller = () => {
    return (
        <section className={bestSeller.bestSeller}>            <div className={bestSeller.bestSellerCards}>
            {/* This is just a placeholder data*/}
            {menData.map((product, index) => {
                if (index <= 3) {
                    return (
                        <ProductCard key={product.id} id={product.id} imgSrc={product.image} imgAlt={product.name} productName={product.name} productDesc={product.description} price={product.price} />)
                }
            })}
        </div>
        </section>
    )
}

export default BestSeller