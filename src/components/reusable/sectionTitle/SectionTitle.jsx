import React from 'react'
import sectionTitle from './SectionTitle.module.css'

const SectionTitle = (props) => {
  return (
      <div className={sectionTitle.title}>{props.title}</div>
  )
}

export default SectionTitle