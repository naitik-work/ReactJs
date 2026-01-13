import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const App = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(function(){
    console.log('UseEffect is running...')
  })
  return (
    <div>
      <input value={title} type="text" placeholder='Enter your name' onChange={(e)=>{
        setTitle(e.target.value);
      }} />
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Increase</button>

      
    </div>
  )
}

export default App
