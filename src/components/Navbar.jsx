


import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {


    const{items}=useSelector((state)=>state.cart)

    const itemsCount=items.length;
  return (
    <div>



    <div className='border-neutral-300 border-b py-4 px-10 flex justify-between items-center'>

      <Link to={"/"} className='font-bold text-xl '>Shopify</Link>
      

      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        {/* <Link to={"/details"}>Details</Link> */}
        <Link to={"/Cart"}>Cart-{itemsCount}</Link>

      </div>
    </div>
      
    </div>
  )
}

export default Navbar
