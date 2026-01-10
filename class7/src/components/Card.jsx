import React from 'react'

const Card = (props) => {
  return (
    <div key={props.idx} className='lg:w-[23vw] md:w-[40vw] sm:w-[30vw]  rounded-xl py-8 px-8 flex items-center flex-col flex-wrap  text-center  bg-white text-black'>
        <img className='h-24 w-24 rounded-full object-cover' src='https://images.unsplash.com/photo-1766921466771-29bd27bf2d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' alt="" />
        <h1 className='text-2xl mt-2 font-bold'>{props.elem.username}</h1>
        <h5 className='text-blue-500 text-lg font-semibold my-2' >{props.elem.userRole}</h5>
        <p className='text-sm font-medium leading-tight'>{props.elem.userDesc}</p>

        <button onClick={()=>{
          props.deletehandler(props.idx);
        }} className='px-4 py-2 rounded texy-sm cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>Remove</button>
      
    </div>
  )
}

export default Card
