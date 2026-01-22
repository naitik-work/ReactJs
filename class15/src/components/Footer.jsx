import React from 'react'
import UserContext from '../../../class14/src/context/UserContext'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
const Footer = () => {
    const [theme, setTheme]= useContext(ThemeDataContext)
  return (
    <div className='nav'>
      <h1>Footer</h1>
      <h2>{theme}</h2>
      <button onClick={()=>{
        if(theme==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
        }}>Change Theme</button>
    </div>
  )
}

export default Footer
