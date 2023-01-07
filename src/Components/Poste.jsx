import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addpost ,deletePost,updatePost} from '../Redux/postsSlice'

export default function Poste(e) {
    const [title,setTilte]=useState("")
    const [desc,setDesc]=useState("")

      const [updatetitle, setUpdateTilte] = useState("");
      const [updatedesc, setUpdateDesc] = useState("");

    const [edit,setEdit]=useState(false)
    const [id ,setId]=useState(null)
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
            setTilte("");
            setDesc("");
          }}
        >
          Add
        </button>
      </div>
      <div className="Posts">
        {postes.length > 0
          ? postes.map((post) => (
              <div key={post.id} className="Post">
                <p>{post.title}</p>
                <p>{post.desc}</p>
                <button
                  onClick={() => {
                    setEdit(true);
                    setId(post.id);
                  }}
                >
                  Edit
                </button>
                <br />
                <button onClick={() => dispatch(deletePost({ id: post.id }))}>
                  Delete
                </button>
                <br />
                {edit && id === post.id && (
                  <>
                    <input
                      type="text"
                      placeholder="Update title"
                      onChange={(e) => setUpdateTilte(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Update desc"
                      onChange={(e) => setUpdateDesc(e.target.value)}
                    />
                    <br />
                    <button onClick={()=>{
                      dispatch(updatePost({id:post.id,title:updatetitle,desc:updatedesc}));
                      setEdit(false)
                    }}>Update</button>
                  </>
                )}
              </div>
            ))
          : "this is not Posts"}
      </div>
    </div>
  );
}
