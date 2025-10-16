import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import Organisation from './pages/organisation';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} >
          <Route path='organisation' element={<Organisation/>}/>
        </Route>


      </Routes>
    </Router>
      
    </>
  )
}

export default App



 