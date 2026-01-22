import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

  const data= useContext(UserDataContext);

  return (
    <div className='h-10 w-full absolute bottom-0 text-3xl font-semibold bg-pink-500'>
      <h1 className='flex justify-center align-center'>{data} Footer</h1>
    </div>
  )
}

export default Footer
