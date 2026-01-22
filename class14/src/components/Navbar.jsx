import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {

  const data= useContext(UserDataContext);

  return (
    <div className='h-10 w-full bg-emerald-500 text-3xl'>

      <h1 className='flex justify-center align-center'>Navbar {data}</h1>

    </div>
  )
}

export default Navbar
