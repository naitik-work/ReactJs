import React from 'react'
import { useState } from 'react';

const App = () => {
  const [Title, setTitle] = useState("");
  const [allUsers, setallUsers] = useState([]);
  const submitHandler= (e)=>{
    e.preventDefault();
    setallUsers([...allUsers,Title]);
    setTitle("");

  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
        placeholder='Enter your name'
        onChange={(e)=>{
          setTitle(e.target.value)
        }} 
        value={Title}
        required/>
        <button>Submit</button>
      </form>
      {allUsers.map((elem,idx)=>{
        return <h3 key={idx}>{elem}</h3>
      })}
    </div>

  )
}

export default App
