'use client'

import React, { useState } from 'react'
import Header from '../component/NavBar'
import Background from '../component/Background'
import Home from '../component/Home'
import About from '../component/About'

import Flotteq from '../component/Works/Flotteq'
import Room from '../component/Works/Room'
import Delegue from '../component/Works/Delegue'
import Heticverse from '../component/Works/Heticverse'
import Wenanflemme from '../component/Works/Wenanflemme'
import LesMauvaises from '../component/Works/Les-mauvaises'
import { AnimatePresence, motion } from 'framer-motion'

const Page = () => {
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
  // Animation identique à Home -> Flotteq pour toutes les pages projets
  const handleFlotteqClick = () => {
    setActivePage('Flotteq')
    setRotateCamera(true)
  }
  const handleRoomClick = () => {
    setActivePage('Room')
    setRotateCamera(true)
  }
  const handleDelegueClick = () => {
    setActivePage('Delegue')
    setRotateCamera(true)
  }
  const handleHeticverseClick = () => {
    setActivePage('Heticverse')
    setRotateCamera(true)
  }
  const handleWenanflemmeClick = () => {
    setActivePage('Wenanflemme')
    setRotateCamera(true)
  }
  const handleLesMauvaisesClick = () => {
    setActivePage('LesMauvaises')
    setRotateCamera(true)
  }
  return (
    <div>
      <Background rotateCamera={rotateCamera} activePage={activePage} />
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
            <Home 
              activePage={activePage} 
              onHomeClick={handleHomeClick} 
              onAboutClick={handleAboutClick} 
              onLesMauvaisesClick={handleLesMauvaisesClick}
              onFlotteqClick={handleFlotteqClick}
              onRoomClick={handleRoomClick}
              onDelegueClick={handleDelegueClick}
              onHeticverseClick={handleHeticverseClick}
              onWenanflemmeClick={handleWenanflemmeClick}
            />
          </motion.div>
        )}
        {activePage === 'Room' && (
          <motion.div
            key="room"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Room />
          </motion.div>
        )}
        {activePage === 'Delegue' && (
          <motion.div
            key="delegue"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Delegue />
          </motion.div>
        )}
        {activePage === 'Heticverse' && (
          <motion.div
            key="heticverse"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Heticverse />
          </motion.div>
        )}
        {activePage === 'Wenanflemme' && (
          <motion.div
            key="wenanflemme"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Wenanflemme />
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
        {activePage === 'LesMauvaises' && (
          <motion.div
            key="les-mauvaises"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <LesMauvaises />
          </motion.div>
        )}
        {activePage === 'Flotteq' && (
          <motion.div
            key="flotteq"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Flotteq />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Page