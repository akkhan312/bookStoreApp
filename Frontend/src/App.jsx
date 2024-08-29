import React from 'react'
import Home from './home/Home'
import { Routes, Route } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
