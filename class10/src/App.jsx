import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');


  const getData= async()=>{
    const response= await axios.get('https://randomuser.me/api/')
    setUsername(response.data.results[0].name.first+" "+ response.data.results[0].name.last);
  }

  useEffect(function(){
    getData();
  },[counter])
  return (
    <div>

      <h1>{username}</h1>


      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Increase</button>

      
    </div>
  )
}

export default App
