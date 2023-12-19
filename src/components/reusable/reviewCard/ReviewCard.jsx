import React from 'react'
import reviewCard from './ReviewCard.module.css'

const ReviewCard = () => {
  return (
    <div className={reviewCard.card}>
        <h2 className={reviewCard.userName}>user name</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default ReviewCard