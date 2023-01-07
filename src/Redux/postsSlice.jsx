import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'poste',
  initialState: {
    items: [],
  },
  reducers: {
    addpost:function(state,action){
      //  console.log(action )
        state.items.push(action.payload)
    },
    deletePost:function(state,action){
        state.items =state.items.filter(item=>item.id !== action.payload.id) 
    }
  },
});
export const {addpost,deletePost} = postsSlice.actions
export default postsSlice.reducer