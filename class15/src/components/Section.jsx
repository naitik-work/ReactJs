import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { useState } from 'react'
const Section = () => {
    const [theme, setTheme]=useContext(ThemeDataContext);

  return (
    <div className='section'>
      <Section1/>
      <h2>{theme}</h2>
      <Section2/>
    </div>
  )
}

export default Section
