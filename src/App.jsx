import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar";
import Filters from "./components/filters/filters";
import Cards from './components/cards/card';

function App() {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Filters />
        <Cards />
      </div>
      
    </>
  )
}

export default App
