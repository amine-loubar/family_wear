import React from 'react'
import productsCss from './Products.module.css'
import ProductCard from '../productCard/ProductCard'

// This is dummy data will be replaced with your product from the database
import dummyData from '../../../assets/dommyData'
import ExploreMoreBtn from '../exploreMoreBtn/ExploreMoreBtn'


const Products = () => {
  return (
    <>
      <section className={productsCss.products}>
        {dummyData.map((product) => {
          return (
            <ProductCard key={product.id} imgSrc={product.image} imgAlt={product.name} productName={product.name} productDesc={product.description} price={product.price} id={product.id} />)
        })}
      </section>
      <ExploreMoreBtn />
    </>
  )
}

export default Products