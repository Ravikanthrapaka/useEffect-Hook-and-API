

//mount ,update, unmount r--->react component lifecycle




import React from 'react'

import { Route,Routes } from 'react-router-dom'
import {Link} from "react-router-dom"

import Home from './pages/Home'
import Details from './pages/Details'

import Products from './pages/Products'

import Card from './components/Card'

function App() {
  return (

    <>
    
    
    
    <div className='border-neutral-300 border-b py-4 px-10 flex justify-between'>

      <Link to={"/"} className='font-semibold text-md '>API's and useEffect</Link>
      

      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/details"}>Details</Link>

      </div>
    </div>

    <Routes>

      <Route path='/' element={<Products/>}/>
      <Route path='/details/:id' element={<Details/>}/>

    </Routes>

    </>



  )
}

export default App
