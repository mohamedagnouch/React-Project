import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addpost ,deletePost} from '../Redux/postsSlice'

export default function Poste(e) {
    const [title,setTilte]=useState("")
    const [desc,setDesc]=useState("")
    const postes = useSelector((state) => state.poste.items);
    const dispatch =useDispatch()
  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTilte(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={desc}
          placeholder="Desc"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            dispatch(addpost({ id: postes.length + 1, title, desc }));
            setTilte("")
            setDesc("")
          }}
        >
          Add
        </button>
      </div>
      <div className="Posts">
         {postes.length > 0 ?
          postes.map(post => (
              <div key={post.id} className="Post">
              <p>{post.title}</p>
              <p>{post.desc}</p>
              <button>Edit</button>
              <button onClick={()=>dispatch(deletePost({id:post.id}))}>Delete</button>
              </div>
              )):"this is not Posts"}
      </div>
      
    </div>
  );
}
