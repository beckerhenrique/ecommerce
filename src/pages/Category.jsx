import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'

import '../components/ItemCard.css'
import './Category.css'

const categoryUrl = import.meta.env.VITE_PRODUCTSCATEGORY

function Category() {
   const {category} = useParams()
   const [categoryProducts, setCategoryProducts] = useState([])

   const getCategories = async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.products)
      setCategoryProducts(data.products)
   }

   useEffect(() => {
     const categoriesUrl = `${categoryUrl}${category}`
      console.log(categoriesUrl)
      getCategories(categoriesUrl)
    
   }, [])
   

  return (
    <div className='category-container'>
      <h1>{category}</h1>
      <section className='categories-container'>
      {categoryProducts.length > 0 &&
      categoryProducts.map((item) => <ItemCard key={item.id} item={item}/>)}
      </section>
    </div>
  )
}

export default Category