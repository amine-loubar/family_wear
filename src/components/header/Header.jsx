import { Link } from 'react-router-dom'
import headerCss from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={headerCss.logoContainer}>
        <Link to={'/'} className={headerCss.logo}>
          Family Wear</Link></div>
      <input type="checkbox" id="menu" className={headerCss.menucheckbox} />
      <label htmlFor="menu" className={headerCss.menuLabel}><svg xmlns="http://www.w3.org/2000/svg" className={headerCss.menuIcon} width="40" height="40" viewBox="0 0 40 40">
        <rect x="5" y="10" width="30" height="4" rx="2" ry="2" />
        <rect x="5" y="18" width="30" height="4" rx="2" ry="2" />
        <rect x="5" y="26" width="30" height="4" rx="2" ry="2" />
      </svg>
      </label>
      <nav className={`${headerCss.navBar} ${headerCss.show}`}>
        <ul className={headerCss.navbarLinks}>
          <li className={headerCss.navLink}><Link to={'/'} className={headerCss.active}>Shop</Link></li>
          <li className={headerCss.navLink}><Link to={"/men"}>Men</Link></li>
          <li className={headerCss.navLink}><Link to={'/women'}>Women</Link></li>
          <li className={headerCss.navLink}><Link to={'/kids'}>Kids</Link></li>
          <li><Link to={'/login'} className={headerCss.loginBtn}>Login</Link></li>
          <li className={headerCss.navLink}><Link to={'/cart'} className={headerCss.cart}><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1713 11.5087L21.9768 3.56427C22.1072 2.99066 21.6712 2.44444 21.083 2.44444H6.08086L5.73077 0.732952C5.64354 0.306358 5.26816 0 4.83271 0H0.916667C0.410399 0 0 0.410399 0 0.916667V1.52778C0 2.03405 0.410399 2.44444 0.916667 2.44444H3.58581L6.26889 15.5618C5.627 15.9309 5.19445 16.6231 5.19445 17.4167C5.19445 18.5979 6.15206 19.5556 7.33333 19.5556C8.51461 19.5556 9.47222 18.5979 9.47222 17.4167C9.47222 16.818 9.22598 16.2771 8.82964 15.8889H16.837C16.4407 16.2771 16.1944 16.818 16.1944 17.4167C16.1944 18.5979 17.1521 19.5556 18.3333 19.5556C19.5146 19.5556 20.4722 18.5979 20.4722 17.4167C20.4722 16.5698 19.98 15.838 19.2661 15.4915L19.4768 14.5643C19.6072 13.9907 19.1712 13.4444 18.5829 13.4444H8.33086L8.08088 12.2222H19.2774C19.7054 12.2222 20.0764 11.9261 20.1713 11.5087Z" fill="white" />
          </svg>

          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header