import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState:{
   items:[] 
  } ,
  reducers: {
    addItem: (state, action) => {
        state.items?.push(action.payload)
    },
    clearItem:(state,action)=>{
      state.items=[]
    },
    deleteItem:(state,action)=>{
   const ogItems= state.items?.filter((item)=>item.id!==action.payload)
   return ogItems
    },
  },
});

export const{addItem,clearItem,deleteItem} =CartSlice.actions
export default CartSlice.reducer
