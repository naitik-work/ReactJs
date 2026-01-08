import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='text-2xl bg-pink-400 text-white flex items-center justify-between px-7 py-3 mb-2'>
      <h2>{props.title}</h2>
      <div className='flex gap-10'>
        {/* <h4 className='text-sm'>home</h4>
        <h4 className='text-sm'>about</h4>
        <h4 className='text-sm'>info</h4>
        <h4 className='text-sm'>contacts</h4> */}
        {props.links.map(function(elem,idx) {
            return <h4 key={idx} className="text-sm capitalize">{elem}</h4>
        })}
      </div>
    </div>
  )
}

export default Navbar
