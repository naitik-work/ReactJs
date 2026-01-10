import React from 'react'

const Card = (props) => {
  return (
    <div 
      key={props.idx} 
      className='
        bg-white text-black rounded-2xl shadow-md 
        p-6 sm:p-8 flex flex-col items-center text-center 
        w-[90%] sm:w-[70%] md:w-[45%] lg:w-[23%] 
        transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
      '
    >
      {/* Profile Image */}
      <img 
        className='h-24 w-24 rounded-full object-cover border-4 border-blue-100'
        src='https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' 
        alt='user avatar' 
      />

      {/* User Info */}
      <h1 className='text-2xl mt-3 font-bold text-gray-800'>{props.elem.username}</h1>
      <h5 className='text-blue-500 text-lg font-semibold my-2'>{props.elem.userRole}</h5>
      <p className='text-sm font-medium leading-snug text-gray-600 px-3'>{props.elem.userDesc}</p>

      {/* Remove Button */}
      <button 
        onClick={() => props.deletehandler(props.idx)} 
        className='mt-4 px-5 py-2 bg-red-600 text-white font-semibold rounded-lg text-sm cursor-pointer active:scale-95 transition-all duration-200 hover:bg-red-700'
      >
        Remove
      </button>
    </div>
  )
}

export default Card
