import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar";
import Filters from "./components/filters/filters";
import Cards from './components/cards/card';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Filters />
        <Cards />
        <Footer />
      </div>
      
    </>
  )
}

export default App
