import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import User from './components/User';
import { useEffect } from 'react';
const App = () => {
   const [allUsers, setAllUsers] = useState([]);
   const getData=async()=>{

    const response= await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllUsers(response.data);
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}
      <div className='all-class'>
        {
        allUsers.map(function(elem,idx){
          return <div key='idx'>
            <User elem={elem}/>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default App
