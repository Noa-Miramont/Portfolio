'use client'

import React, { useState } from 'react'
import Header from '../component/NavBar'
import Background from '../component/Background'
import Home from '../component/Home'
import About from '../component/About'
import { AnimatePresence, motion } from 'framer-motion' // Ajout

const ComingSoonb = () => {
  const [rotateCamera, setRotateCamera] = useState(false)
  const [activePage, setActivePage] = useState('Home')

  const handleAboutClick = () => {
    setActivePage('About')
    setRotateCamera(true)
  }
  const handleHomeClick = () => {
    setActivePage('Home')
    setRotateCamera(false)
  }
  return (
    <div>
      <Background rotateCamera={rotateCamera} />
      <Header
        activePage={activePage}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
      />
      <AnimatePresence mode="wait">
        {activePage === 'Home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Home activePage={activePage} onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} />
          </motion.div>
        )}
        {activePage === 'About' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComingSoonb