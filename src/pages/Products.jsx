

import axios from "axios"

import React, { useEffect, useState } from 'react'

import Card from "../components/Card"

function Products() {

//     fetch('https://fakestoreapi.com/products/')
//   .then(response => response.json())
//   .then(data => console.log(data));
//not good approach

let [products, setProducts]=useState([])

useEffect(()=>{

    axios.get('https://fakestoreapi.com/products/').then((products)=>{

    setProducts(products.data)
console.log(products)
})

},[])
//use axios

  return (
    <>
    
    
    <div>
        <div className="flex gap-4 flex-wrap mt-24 justify-center">

            {

                products.length>0? products.map(product=> <Card key={product.id} id={product.id} img={product.image} title={product.title} price={product.price} desc={product.description}  />):<div className="text-2xl">Loading...</div>


                
            }
        </div>
    </div>
    
    
    </>
  )
}

export default Products
