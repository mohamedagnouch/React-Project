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
    },
    updatePost:function(state,action){
      state.items.map((item) => {
        if(item.id===action.payload.id){
          item.title = action.payload.title;
          item.desc = action.payload.desc;
        }
      })
    }
  },
});
export const { addpost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer