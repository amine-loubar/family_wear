import React, { useState } from 'react'
import cartProductCss from './CartProduct.module.css'

const CartProduct = (props) => {

  const [quantity, setQuantity] = useState(1);

  const handleAdd = async () => {
    await setQuantity(quantity + 1)
  }
  function handleremove() {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)
  }

  return (
    <>
      <div className={cartProductCss.cartCard}>
        <div className={cartProductCss.image}>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className={cartProductCss.info}>
          <div className={cartProductCss.infoLeft}>
            <div className={cartProductCss.infoLeftTop}>
              <div className={cartProductCss.productName}>{props.name}</div>
              <div className={cartProductCss.productPrice}>$<span>{props.price}</span></div>
            </div>
            <div className={cartProductCss.infoLeftBottom}>
              $<span>{(props.price * quantity).toFixed(2)}</span>
            </div>
          </div>
          <div className={cartProductCss.infoRight}>
            <div className={cartProductCss.infoRightTop}><svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5625 22.6563C1.5625 23.2779 1.80943 23.874 2.24897 24.3135C2.68851 24.7531 3.28465 25 3.90625 25H17.9688C18.5904 25 19.1865 24.7531 19.626 24.3135C20.0656 23.874 20.3125 23.2779 20.3125 22.6563V6.25001H1.5625V22.6563ZM14.8438 10.1563C14.8438 9.94906 14.9261 9.75034 15.0726 9.60383C15.2191 9.45732 15.4178 9.37501 15.625 9.37501C15.8322 9.37501 16.0309 9.45732 16.1774 9.60383C16.3239 9.75034 16.4062 9.94906 16.4062 10.1563V21.0938C16.4062 21.301 16.3239 21.4997 16.1774 21.6462C16.0309 21.7927 15.8322 21.875 15.625 21.875C15.4178 21.875 15.2191 21.7927 15.0726 21.6462C14.9261 21.4997 14.8438 21.301 14.8438 21.0938V10.1563ZM10.1562 10.1563C10.1562 9.94906 10.2386 9.75034 10.3851 9.60383C10.5316 9.45732 10.7303 9.37501 10.9375 9.37501C11.1447 9.37501 11.3434 9.45732 11.4899 9.60383C11.6364 9.75034 11.7188 9.94906 11.7188 10.1563V21.0938C11.7188 21.301 11.6364 21.4997 11.4899 21.6462C11.3434 21.7927 11.1447 21.875 10.9375 21.875C10.7303 21.875 10.5316 21.7927 10.3851 21.6462C10.2386 21.4997 10.1562 21.301 10.1562 21.0938V10.1563ZM5.46875 10.1563C5.46875 9.94906 5.55106 9.75034 5.69757 9.60383C5.84409 9.45732 6.0428 9.37501 6.25 9.37501C6.4572 9.37501 6.65591 9.45732 6.80243 9.60383C6.94894 9.75034 7.03125 9.94906 7.03125 10.1563V21.0938C7.03125 21.301 6.94894 21.4997 6.80243 21.6462C6.65591 21.7927 6.4572 21.875 6.25 21.875C6.0428 21.875 5.84409 21.7927 5.69757 21.6462C5.55106 21.4997 5.46875 21.301 5.46875 21.0938V10.1563ZM21.0938 1.56251H15.2344L14.7754 0.649423C14.6782 0.454215 14.5284 0.29001 14.3429 0.175281C14.1575 0.0605526 13.9437 -0.00014785 13.7256 8.5609e-06H8.14453C7.92694 -0.000827891 7.71352 0.0596463 7.52871 0.174503C7.34391 0.289359 7.19519 0.453951 7.09961 0.649423L6.64062 1.56251H0.78125C0.57405 1.56251 0.375336 1.64482 0.228823 1.79133C0.0823101 1.93784 0 2.13656 0 2.34376L0 3.90626C0 4.11346 0.0823101 4.31217 0.228823 4.45869C0.375336 4.6052 0.57405 4.68751 0.78125 4.68751H21.0938C21.301 4.68751 21.4997 4.6052 21.6462 4.45869C21.7927 4.31217 21.875 4.11346 21.875 3.90626V2.34376C21.875 2.13656 21.7927 1.93784 21.6462 1.79133C21.4997 1.64482 21.301 1.56251 21.0938 1.56251Z" fill="#CB1A1A" />
            </svg>
            </div>
            <div className={cartProductCss.infoRightBottom}>
              <button onClick={handleremove} className={cartProductCss.minusBtn}><svg viewBox="0 0 22 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3125 0H1.5625C0.699707 0 0 0.699707 0 1.5625V3.125C0 3.98779 0.699707 4.6875 1.5625 4.6875H20.3125C21.1753 4.6875 21.875 3.98779 21.875 3.125V1.5625C21.875 0.699707 21.1753 0 20.3125 0Z" fill="black" />
              </svg>
              </button>
              <div className={cartProductCss.quantity}>{quantity}</div>
              <button onClick={handleAdd} className={cartProductCss.plusBtn}><svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z" fill="black" />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartProduct