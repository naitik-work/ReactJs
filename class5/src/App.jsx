import React, { useState } from 'react'

const App = () => {
  const arr=['Naitik', 'Unnati', 'Ankit', 'Shivansh'];
  const [Num, setNum] = useState(0);

  return (
  
    <div>
      <div className='box'>{arr[Num]}</div>
      <button onClick={()=>{
        const abc= Math.floor(Math.random()*4);
        setNum(abc);
         }} className='btn'>Click here!</button>
    </div>
  )
}

export default App

