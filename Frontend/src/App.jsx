import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import {Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </>
  );
}

export default App
