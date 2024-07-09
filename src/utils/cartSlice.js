import { createSlice } from "@reduxjs/toolkit";

 
 const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            /**Vanilaa(older) redux== DON'T MUTATE STATE
             * const newState=[...state];
             * newState.items.push(action.payload)
             * return newState    (===earlier returning was mandotory
             * 
             * redux Toolkit
             * We have To muta te the state
             * Redux uses IMMER library -:it is a tiny package which allows us to work with immutable state in a more convenient way
             * Learn RTK query from Documentation
             */ 
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            // state.items.length=0
            return {items:[]}
        }
    }
 });
 export const {addItem,removeItem,clearCart}=cartSlice.actions;

 export default cartSlice.reducer;