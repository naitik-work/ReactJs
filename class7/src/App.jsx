import React from 'react'
import {useState} from 'react'
import Card from './components/Card'

const App = () => {
  const [username, setUsername] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    const oldUsers=[...allUsers];
    oldUsers.push({username,imageURL,userRole,userDesc});
    console.log(oldUsers);
    setAllUsers(oldUsers);
    setUsername('');
    setImageURL('');
    setUserRole('');
    setUserDesc('');
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='px-2 py-2 flex flex-wrap'>
        <input 
        value={username} 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
         type="text" 
         
         placeholder='Enter your name' />
        <input 
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
         type="text" 
         placeholder='Image URL' />
        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
         type="text" 
         placeholder='Enter Role' />
        <input 
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]'
         type="text" 
         placeholder='Enter Description' />
        <button className='px-5 py-2 active:scale-95 cursor-pointer bg-emerald-700 rounded m-2 w-[97%]'>Create User</button>

      </form>
      <div className='px-4 py-10 flex flex-wrap'>
       {/* { allUsers.map(function(){
          return d
        })} */}
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default App

