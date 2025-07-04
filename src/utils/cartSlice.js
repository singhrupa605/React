import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
      name:"cart",
      initialState : {
        items : []
      },
      reducers : {
        addItem : (state, action)=>
        {
          state.items.push(action.payload)
        },
        removeItem : (state, action)=>{
               state.items.pop()
        },
        clearCart : (state, action)=>{
              //This is the local state draft (not the original state) that needs to be mutated
          console.log(current(state))
          // state.items = []             // correct way to empty
          console.log(current(state))
          return {items : []}
      
    }
  }})


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer
