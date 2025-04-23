import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import WorkPage from './Pages/Work'
import ComingSoon from './Pages/ComingSoon'


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </Router>
  )
}

export default App