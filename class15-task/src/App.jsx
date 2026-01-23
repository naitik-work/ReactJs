import React from 'react'
import axios from 'axios'
const App = () => {
  const getData= async()=>{
    const response=  await axios.get(`https://fakestoreapi.com/products`);
    console.log(response);
  }

  const getFirstData= async()=>{
    const response=  await axios.get(`https://fakestoreapi.com/products/1`);
    console.log(response);
  }

  return (

    <div>
      <button onClick={()=>{
        getData();
      }}>Get Data!</button>

      <button onClick={()=>{
        getFirstData(1);
      }}>Get First Data!</button>
      
    </div>
  )
}

export default App
