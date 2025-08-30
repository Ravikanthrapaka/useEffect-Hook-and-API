

import { useDispatch } from 'react-redux'

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import Products from './Products'
import { addToCart } from '../redux/CartSlice'
function Details() {

    const dispatch=useDispatch();


    function handleAddToCart(){

        dispatch(addToCart(product))
    }

let {id} = useParams()
    let [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
            setProduct(product.data)
        })
    }, [id])
        // console.log('Details mounted')
    
        // return ()=>{
    
        // console.log('Details Unmounted')
    
    
        // }
  


  return (
    
    
    <div className='mt-24 w-[700px] mx-auto '>
        <div className="flex gap-5 items-center">
            <img className='h-56 w-[300px] object-contain' src={product.image} alt="" />
        
            <div>
                <h1 className='text-xl font-semibold'>{product.title}</h1>
                <h1 className='my-2 text-neutral-600'>{product.description}</h1>
                <p className='my-2'>Rs {Math.floor(product.price*80)}</p>
            <div className="flex gap-4">

                <button className='border border-black bg-black text-white py-3 px-5'>Purchase Now</button>
                <button onClick={handleAddToCart} className='border border-black text-black py-3 px-4 hover:bg-neutral-100 cursor-pointer'>Add to Cart</button>
            </div>
            
            </div>
        
        </div>

        
        {/* <h1 className='text-center text-2xl font-bold'>{id}</h1> */}
    </div>
  )
}

export default Details
