import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen bg-black text-white flex gap-7 p-1'>
        <h2 className='mr-260 text-4xl p-4 font-semibold'>DVSY</h2>
        <div className='flex justify-between items-end'> 
          <button className='px-3 py-2 text-xl font-semibold text-white bg-gray-500 hover:bg-gray-400 transition rounded m-4'>DESIGNERS</button>
          <button className='px-3 py-2 text-xl font-semibold text-white bg-gray-500 hover:bg-gray-400 transition rounded m-4'>COLLABS</button>
          <button className='px-3 py-2 text-xl font-semibold text-white bg-gray-500 hover:bg-gray-400 transition rounded m-4'>EVENTS</button>
          <button className='px-3 py-2 text-xl font-semibold text-white bg-gray-500 hover:bg-gray-400 transition rounded m-4'>BLOG</button>
          <button className='px-3 py-2 text-xl font-semibold text-white bg-gray-500 hover:bg-gray-400 transition rounded m-4'>CARD</button>
          <button className='px-3 py-2 text-xl text-black font-semibold bg-[#D7644F] hover:bg-amber-700 transition rounded m-4'>GET IN TOUCH</button>
        </div>
    </div>
  )
}

export default Navbar
 