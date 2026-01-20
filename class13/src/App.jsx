import React from 'react'
import Navbar from './components/Navbar';
import AllSections from './components/AllSections';
import Footer from './components/Footer';
import { useState } from 'react';
const App = () => {

  const [theme, setTheme] = useState('light');

  const changeTheme= (newTheme)=>{
    setTheme(newTheme);
  }
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App
