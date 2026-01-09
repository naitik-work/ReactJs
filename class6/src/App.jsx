import React from 'react'
import { useState } from 'react';

const App = () => {
  const submitHandler= (e)=>{
    e.preventDefault();
    console.log(Title);
    setTitle()

  }
  const [Title, setTitle] = useState('');
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
        placeholder='Enter your name'
        onChange={(e)=>{
          setTitle(e.target.value)
        }} value={Title}
        required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
