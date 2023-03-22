import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard'

import './Search.css'

const searchUrl = import.meta.env.VITE_SEARCH

function Search() {
  const [searchParams] = useSearchParams()

  const [items, setItems] = useState([])
  const query = searchParams.get("q")

  const getSearchedItems = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setItems(data.products)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}${query}`
    getSearchedItems(searchWithQueryUrl)
  }, [query])

  return (
    <div className='searchPage'>
      <h1>Resultados para {query}:</h1>
      <section className='search-container'>
        {items.length > 0 && 
          items.map((item) => <ItemCard item={item} key={item.id}/>)
        }
      </section>
    </div>
  )
}

export default Search