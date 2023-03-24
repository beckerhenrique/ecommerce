import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import App from './App'
import Home from './pages/Home'
import Item from './pages/Item'
import Search from './pages/Search'
import Promotions from './pages/Promotions'

import './index.css'
import Category from './pages/Category'

import { CartListProvider } from './context/CartListContext'
import ShoppingCart from './pages/ShoppingCart'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartListProvider>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='item/:id' element={<Item/>}/>
        <Route path='search' element={<Search />}/>
        <Route path='promotions' element={<Promotions />}/>
        <Route path=':category' element={<Category/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </CartListProvider>
  </React.StrictMode>,
)
