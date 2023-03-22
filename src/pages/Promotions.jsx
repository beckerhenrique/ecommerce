import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import ScrollToTop from 'react-scroll-to-top'

import './Promotion.css'

const itemsUrl = import.meta.env.VITE_API

function Promotions() {
  const [discountItens, setDiscountItens] = useState([])

  const getdiscountItens = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    const values = data.products.map(({discountPercentage}) => discountPercentage).sort((a, b) => b - a).slice(0, 15)
    const top15Discounts = data.products.filter(({discountPercentage}) => values.includes(discountPercentage))
    top15Discounts.sort((a, b) => parseFloat(b.discountPercentage) - parseFloat(a.discountPercentage))
    setDiscountItens(top15Discounts)
  }

  useEffect(() => {
    getdiscountItens(itemsUrl)
  })

  return (
    <div className='discountPage'>
      <ScrollToTop />
      <h1>Top 15 itens com desconto!!</h1>
      <section className='top15-container'>
        {discountItens.length > 0 &&
        discountItens.map((item) => <ItemCard key={item.id} item={item}/>)}
      </section>
    </div>
  )
}

export default Promotions