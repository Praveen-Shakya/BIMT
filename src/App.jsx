import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Apply from './Pages/Apply/Apply';
import Faculties from './Pages/Faculties/Faculties';
import Chairperson1 from './Pages/ChairPersons/ChairPerson1';
import Courses from './Pages/Courses/Courses';
import ScrollToTop from './components/ScrollToTop';
import ChairPerson2 from './Pages/ChairPersons/ChairPerson2';
import ChairPerson3 from './Pages/ChairPersons/ChairPerson3';
import ChairPerson4 from './Pages/ChairPersons/ChairPerson4';
import Director_1 from './Pages/Directors/Director1';


function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/faculties' element={<Faculties />}/>
          <Route path='/chairperson1' element={<Chairperson1 />} />
          <Route path='/chairperson2' element={<ChairPerson2 />} />
          <Route path='/chairperson3' element={<ChairPerson3 />} />
          <Route path='/chairperson4' element={<ChairPerson4 />} />
          <Route path='/director1' element={<Director_1 />} />
        </Routes>
    </>
  )
}

export default App
