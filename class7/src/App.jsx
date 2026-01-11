import React from 'react'
import {useState} from 'react'
import Card from './components/Card'

const App = () => {
  const [username, setUsername] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userDesc, setUserDesc] = useState('');
  
  localStorage.clear()
  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  const [allUsers, setAllUsers] = useState([localData]);

  //Form Handling
  const submitHandler=(e)=>{
    e.preventDefault();
    const oldUsers=[...allUsers];
    oldUsers.push({username,imageURL,userRole,userDesc});
    setAllUsers(oldUsers);
    localStorage.setItem('all-users', JSON.stringify(oldUsers))
    setUsername('');
    setImageURL('');
    setUserRole('');
    setUserDesc('');
  }

  //Delete Card
  const deletehandler=(idx)=>{
    const copyUsers=[...allUsers];
    copyUsers.splice(idx,1);
    setAllUsers(copyUsers);

    localStorage.setItem('all-users', JSON.stringify(copyUsers))
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
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] md:w-full sm:w-full'
         type="text" 
         
         placeholder='Enter your name' />
        <input 
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] md:w-full sm:w-full'
         type="text" 
         placeholder='Image URL' />
        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] md:w-full sm:w-full'
         type="text" 
         placeholder='Enter Role' />
        <input 
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value);
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%] md:w-full sm:w-full'
         type="text" 
         placeholder='Enter Description' />
        <button className='px-5 py-2 active:scale-95 cursor-pointer bg-emerald-700 rounded m-2 lg:w-[97%] md:w-full sm:w-full'>Create User</button>

      </form>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        {allUsers.map((elem, idx) => (
          <Card key={idx} elem={elem} idx={idx} deletehandler={deletehandler} />
        ))}
      </div>

      </div>

  )
}

export default App

