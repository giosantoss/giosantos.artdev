import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import { Route,Routes,Link, useLocation,useN, useNavigate } from 'react-router-dom';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import { AnimatePresence,motion } from 'framer-motion';
import Knownledge from './components/knowledge/Knownledge';
import Contact from './components/contact/Contact';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      <AnimatePresence>
        {location.pathname != '/' &&(
          <Header/>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route  path='/' element={<Main/>}/>
          <Route  path='/projects' element={<Projects/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/experience' element={<Experience/>}/>
          <Route  path='/skills' element={<Skills/>}/>
          <Route  path='/knowledge' element={<Knownledge/>}/>
          <Route  path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
      
      
    </div>
  );
}

export default App;
