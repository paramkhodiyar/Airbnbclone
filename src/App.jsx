import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar";
import Filters from "./components/filters/filters";

function App() {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Filters />
      </div>
      
    </>
  )
}

export default App
