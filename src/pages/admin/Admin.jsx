import React from 'react'
import adminCss from './Admin.module.css'
import AdminHeader from '../../components/adminHeader/AdminHeader'
import AdminProductCard from '../../components/reusable/adminProductCard/AdminProductCard'
import SectionTitle from '../../components/reusable/sectionTitle/SectionTitle'


// this just for testing you change this with the data from your database
import dummyData from '../../assets/dommyData'



const Admin = () => {
  return (
    <>
      <AdminHeader />
      <SectionTitle title={'All Product'} />
      <div className={adminCss.adminCardsContainer}>
        <div className={adminCss.selectContainer}>
          <select name="category" id="category">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        {/* this map just for testing you change this with the data from your database  */}
        {dummyData.map((product) => {
          return (
            <AdminProductCard key={product.id} src={product.image} alt={product.name} name={product.name} description={product.description} price={product.price} />
          )
        })}
      </div>
    </>
  )
}

export default Admin