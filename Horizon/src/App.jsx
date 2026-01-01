import React from 'react'
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './components/About.jsx'
import Stats from './components/Stats.jsx';
import Services from './components/Service.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <About/>
      <Stats/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
