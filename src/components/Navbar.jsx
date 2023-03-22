import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FcShop} from 'react-icons/fc'
import {FaSearch} from 'react-icons/fa'
import {BsCart} from 'react-icons/bs'

import "./Navbar.css"

function Navbar() {
   const [search, setSearch] = useState("")
   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()

      if (!search) return

      navigate(`/search?q=${search}`, {replace: true})
      setSearch("")
   }
  return (
    <nav id='navbar'>
      <h2>
         <Link to="/">
            <FcShop /> Mercado Diverso
         </Link>
      </h2>
      <section id='searchCart'>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Busque um item' onChange={(e) => setSearch(e.target.value)} value={search}/>
         <button type='submit' id='submiteBtn'>
            <FaSearch/>
         </button>
      </form>
      <h2 id='shoppingCart'>
      <BsCart id='shoppingCartIcon'/>
      </h2>
      </section>
    </nav>
  )
}

export default Navbar