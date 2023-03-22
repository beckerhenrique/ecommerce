import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryCard.css'

function CategoryCard({category}) {
  return (
    <button className='categoryBtn'>
      <Link to={`${category}`} id="linkCategoryBtn">
      <p>{category}</p>
      </Link>
      
    </button>
  )
}

export default CategoryCard