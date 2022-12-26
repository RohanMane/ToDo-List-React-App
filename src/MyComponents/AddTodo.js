import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Tile or Description cannot be empty")
        }
        else{
            addTodo(title,desc)
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className='container my-3'>
        <h3>Add a To Do</h3>
        <form className="row g-3" onSubmit={submit}>
                <div className="col-12">
                    <label htmlfor="title" className="form-label">Todo Tilte</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                </div>
                <div className="col-12">
                    <label htmlfor="desc" className="form-label">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
                </div>
        </form>
    </div>
  )
}

export default AddTodo
