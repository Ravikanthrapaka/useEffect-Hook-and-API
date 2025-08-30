

import { createSlice } from '@reduxjs/toolkit'

const cartSlice=createSlice({

    name:'cart',
    initialState:{
        items:[],
        total:0
    },

    reducers:{

        addToCart:(state,action)=>{
            
            const existingItem=state.items.find(item => item.id === action.payload.id)

            if(!existingItem){

            state.items.push(action.payload)
                
            }
            


        },

        removeFromCart:(state,action)=>{

        state.items=state.items.filter(item=>item.id!==action.payload);
    },
    },

    
    
})


export const{addToCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer;