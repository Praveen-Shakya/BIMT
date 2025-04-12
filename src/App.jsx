import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Apply from './Pages/Apply/Apply';
import Faculties from './Pages/Faculties/Faculties';
import Chairperson1 from './Pages/ChairPersons/ChairPerson1';
import Courses from './Pages/Courses/Courses';


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/faculties' element={<Faculties />}/>
          <Route path='/chairperson1' element={<Chairperson1 />} />
        </Routes>
    </>
  )
}

export default App
