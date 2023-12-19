import React from 'react'
import adminHeaderCss from './AdminHeader.module.css'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <header>
      <Link to={'/'} className={adminHeaderCss.logo}>Family Wear
</Link>
      <ul className={adminHeaderCss.links}>
        <li><Link to={'/admin/addproduct'} className={adminHeaderCss.link}>Add Product</Link></li>
        <li><Link to={'/admin'} className={adminHeaderCss.link}>All Products</Link></li>
      </ul>
      <div className={adminHeaderCss.avatar}>
        <div className={adminHeaderCss.profile}>
          {/* this is just a placeholder image */}
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
        </div>
      </div>
    </header>
  )
}

export default AdminHeader