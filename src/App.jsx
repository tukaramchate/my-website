import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <div className="introduction-profile-background">
        <div className="content">
          <Hero />
          <About />
        </div>
      </div>

      <Experience />

      <Portfolio />

      <Skills />

      <Education />

      <Achievements />

      <Contact />

      <div className="bg-[#2A374A]">
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  )
}

export default App
