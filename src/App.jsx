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
import Alumni from './Pages/Alumni/Alumni';
import Director_2 from './Pages/Directors/Director2';
import Director_3 from './Pages/Directors/Director3';
import Controller from './Pages/Chancellor/Controller';


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
          <Route path='/director2' element={<Director_2 />} />
          <Route path='/director3' element={<Director_3 />} />
          <Route path='/controller' element={<Controller />} />
          <Route path='/alumni' element={<Alumni />} />
        </Routes>
    </>
  )
}

export default App
