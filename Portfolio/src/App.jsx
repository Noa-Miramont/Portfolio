import React from 'react'
import './app.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ComingSoon from './Pages/ComingSoon'


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<ComingSoon />}/>
        </Routes>
      </Router>
  )
}

export default App