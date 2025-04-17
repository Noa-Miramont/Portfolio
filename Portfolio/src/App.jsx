import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import WorkPage from './Pages/Work'


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </Router>
  )
}

export default App