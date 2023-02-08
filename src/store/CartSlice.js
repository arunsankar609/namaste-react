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
    return {
      ...state,
      items: [...state.items].filter((items) => items.id!==action.payload)
   };
    },
  },
});

export const{addItem,clearItem,deleteItem} =CartSlice.actions
export default CartSlice.reducer
