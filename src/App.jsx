import React from 'react'
import HOME from './pages/Home/Home'
import { Routes, Route  } from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HOME/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
