import React from 'react'
import category from './Category.module.css'
import Sale from '../../components/sale/Sale'
import Products from '../../components/reusable/products/Products'
import SectionTitle from '../../components/reusable/sectionTitle/SectionTitle'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Category = () => {
    return (
        <>
            <Header />
            <div className={category.container}>
                <section >
                    <Sale />
                    <SectionTitle title={'men products'} />
                    <Products />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Category