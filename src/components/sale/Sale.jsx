import React from 'react'
import saleCss from './Sale.module.css'
import PrimaryButton from '../reusable/primaryButton/PrimaryButton'

const Sale = () => {
  return (
    <div className={saleCss.container}>
      <div className={saleCss.sale}>
        <div>
          <h2>up to 50% off</h2>
          <p>offer ends on Jully, 24th</p>
        </div>
        <PrimaryButton href={""} label={"explore now"} />
      </div>
    </div>
  )
}

export default Sale