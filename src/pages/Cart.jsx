

import { useSelector } from 'react-redux'


import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/CartSlice';


export default function Cart(){

 const {items}=useSelector((state)=>state.cart)
 const dispatch=useDispatch();




 function handleRemoveFromCart(){

    dispatch(removeFromCart(item.id))
 }

  return (
    <div>
        <div className='w-[800px] mx-auto mt-10'>
            <h1 className='text-xl font-semibold'>Shopping Cart</h1>

            {
                items.map((item)=>(

                    <div className='mt-10 border border-neutral-300 rounded-lg p-5'>
                        <div className='flex gap-8 items-center '>
                            <img className='h-24 w-24 object-contain' src={item.image} alt="" />

                            <div className=''>
                                <h2 className='font-medium'>{item.title}</h2>
                                <p className='text-sm text-neutral-600 line-clamp-1'>{item.description}</p>
                                <p className='text-lg'>₹{Math.floor(item.price*85)}</p>

                                <button onClick={()=>dispatch(removeFromCart(item.id)) } className=' mt-1 border py-2 px-6 rounded-lg hover:bg-red-100 text-red-600'>Delete</button>

                            </div>
                        </div>

                    </div>
                ))
            }
        
        
        </div>
      
    </div>
  )
}

