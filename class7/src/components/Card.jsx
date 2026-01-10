import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] rounded-xl py-8 px-8 flex items-center flex-col flex-wrap m-1 text-center  bg-white text-black'>
        <img className='h-24 w-24 rounded-full object-cover' src="https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-2xl mt-2 font-bold'>Naitik Chitransh</h1>
        <h5 className='text-blue-500 text-lg font-semibold my-2' >Developer</h5>
        <p className='text-sm font-medium leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, nostrum.</p>

        <button className='px-4 py-2 rounded texy-sm cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>Remove</button>
      
    </div>
  )
}

export default Card
