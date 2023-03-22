import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FiStar} from 'react-icons/fi'

import './Item.css'
const singleUrl = import.meta.env.VITE_APISINGLE

function Item() {
  
  const {id} = useParams()
  const [item, setItem] = useState(null)

  const getItem = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setItem(data)
    
  }

  useEffect(() => {
    const itemurl = `${singleUrl}${id}`
    getItem(itemurl)
  }, [])
  

  return (
    <div>
      {item && (
        <section className='item-container'>
          <h1>{item.title}</h1>
          <section className='item-separate'>
            <section id='img-container'>
            <img src={item.images[0]} alt="" />
            </section>
            <section id='description-container'>
            <p>Descrição do Item: {item.description}</p>
          <p>Marca: {item.brand}</p>
          <FiStar id='ratingStar'/>
          <span>  {item.rating}</span> <br />
          <span id='prevPrice'>De R${item.price}</span><br />
          <span>Por {(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</span>
            </section>
          </section>
        </section>
      )}
    </div>
  )
}

export default Item