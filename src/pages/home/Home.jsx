import React from 'react'
import Hero from '../../components/hero/Hero'
import BestSeller from '../../components/bestSeller/BestSeller'
import NewCollections from '../../components/newCollections/NewCollections'
import EmailOffers from '../../components/emailOffers/EmailOffers'
import SectionTitle from '../../components/reusable/sectionTitle/SectionTitle'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <SectionTitle title={"best seller"} />
            <BestSeller />
            <SectionTitle title={"new collections"} />
            <NewCollections />
            <EmailOffers />
            <Footer />
        </>
    )
}

export default Home