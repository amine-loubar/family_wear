import React from 'react'
import addProductCss from './AddProduct.module.css'
import AdminHeader from '../../components/adminHeader/AdminHeader'
import SectionTitle from '../../components/reusable/sectionTitle/SectionTitle'


const AddProduct = () => {
  return (
    <>
      <AdminHeader />
      <SectionTitle title={'Add Product'} />
      <form>
        <label htmlFor="name">Product name</label>
        <input id='name' name='name' type="text" placeholder='Type the name' />
        <label htmlFor="price">Product price</label>
        <input id='price' name='price' type="text" placeholder='Type the price' />
        <label htmlFor="category">Product category</label>
        <select name="category" id="category">
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <div className={addProductCss.upload}>
          <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7.60156C21.1602 7.18359 21.25 6.72656 21.25 6.25C21.25 4.17969 19.5703 2.5 17.5 2.5C16.7305 2.5 16.0117 2.73437 15.418 3.13281C14.3359 1.25781 12.3164 0 10 0C6.54687 0 3.75 2.79687 3.75 6.25C3.75 6.35547 3.75391 6.46094 3.75781 6.56641C1.57031 7.33594 0 9.42188 0 11.875C0 14.9805 2.51953 17.5 5.625 17.5H20C22.7617 17.5 25 15.2617 25 12.5C25 10.082 23.2812 8.0625 21 7.60156ZM15.3672 10H12.8125V14.375C12.8125 14.7188 12.5313 15 12.1875 15H10.3125C9.96875 15 9.6875 14.7188 9.6875 14.375V10H7.13281C6.57422 10 6.29688 9.32813 6.69141 8.93359L10.8086 4.81641C11.0508 4.57422 11.4492 4.57422 11.6914 4.81641L15.8086 8.93359C16.2031 9.32813 15.9219 10 15.3672 10Z" fill="white" />
          </svg>
          <label htmlFor="productImage">Upload</label>
          <input type="file" accept='image/*' name="productImage" className={addProductCss.imageUpload} id="productImage" />
        </div>
        <div className={addProductCss.submitContainer}>
          <input type="submit" value="Add" />
        </div>
      </form>
    </>
  )
}

export default AddProduct