import React from 'react'
import newCollections from './NewCollections.module.css'
import Products from '../reusable/products/Products'


const NewCollections = () => {
    return (
        <section className={newCollections.newCollections} id="newCollections">
            <Products />
        </section>
    )
}

export default NewCollections