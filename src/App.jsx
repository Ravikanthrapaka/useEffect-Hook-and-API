

//mount ,update, unmount r--->react component lifecycle




import React from 'react'

import { Route,Routes } from 'react-router-dom'
import {Link} from "react-router-dom"

import Home from './pages/Home'
import Details from './pages/Details'

import Products from './pages/Products'

import Card from './components/Card'
import Navbar from './components/Navbar'

import Cart from './pages/Cart'


function App() {
  return (

    <>
    
    
    <Navbar/>
  

    <Routes>

      <Route path='/' element={<Products/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/cart' element={<Cart/>}/>


    </Routes>

    </>



  )
}

export default App
