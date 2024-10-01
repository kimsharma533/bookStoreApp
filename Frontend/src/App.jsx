import React from 'react'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'

import Contacts from './contacts/Contacts'
import About from './components/About'
import Abouts from './about/Abouts'
import Signup from './components/Signup'




export default function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    <Route path='/about' element={<Abouts/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
    </>
  )
}

