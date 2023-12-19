import React from 'react'
import { Link } from 'react-router-dom'
import exploreMoreBtn from './ExploreMoreBtn.module.css'

const ExploreMoreBtn = () => {
    return (
        <Link to={''} className={exploreMoreBtn.link}>explore more</Link>
    )
}

export default ExploreMoreBtn