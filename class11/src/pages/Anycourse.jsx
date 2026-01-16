import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {

    const params = useParams();
  return (
    <div>
      <h1 className='capitalize whitespace-nowrap text-6xl underline font-bold fixed left-[50vw] -translate-x-1/2'>{params.id} Course Page</h1>
    </div>
  )
}

export default Anycourse
