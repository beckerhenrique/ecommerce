import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FiStar} from 'react-icons/fi'

import { CartListContext } from '../context/CartListContext'

import './Item.css'


const singleUrl = import.meta.env.VITE_APISINGLE

function Item() {
  
  const {cartList, setCartList} = useContext(CartListContext)
  
  const {id} = useParams()
  const [item, setItem] = useState(null)

  //Função assincrona para pegar o item no API
  const getItem = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setItem(data)
    
  }

  //useEffect para fazer o get quando a página for construida
  useEffect(() => {
    const itemurl = `${singleUrl}${id}`
    getItem(itemurl)
  }, [])

  //Função para adicionar o item no carrinho de compras, caso o item já tenha sido incluido aparecerá um alerta falando que o item já está no carrinho 
  const addItem = ({id, price, thumbnail, title, discountPercentage, description}) => {
    
    const newList = [...cartList]
    if (newList.length === 0) {
      newList.push({id, price, thumbnail, title, discountPercentage, description, quantity: 1})
    }else{
      const indexItem = newList.findIndex(e => {
        return e.id === id
      })
      if (indexItem > -1){
        alert("O item já está no carrinho de compras!")
        return
      }else{
        newList.push({id, price, thumbnail, title, discountPercentage, description, quantity: 1})
      }
    }
    console.log(newList)
    setCartList(newList)
  }

  return (
    <div>
      {item && (
        <section className='item-container'>
          <h1>{item.title}</h1>
          <section className='item-separate'>
            <section id='img-container'>
            <img src={item.thumbnail} alt="" />
            </section>
            <section id='description-container'>
            <p>- Descrição do Item: {item.description}</p>
          <p>- Marca: {item.brand}</p>
          <section>
          <FiStar id='ratingStar'/>
          <span>  {item.rating}</span>
          </section>
          <span id='prevPrice'>- De R${item.price}</span>
          <span>- Por {(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)}</span>
            
            </section>
          </section>
          <button className='addCartBtn' onClick={() => addItem(item)}>Adicionar ao Carrinho</button>
        </section>
      )}
    </div>
  )
}

export default Item