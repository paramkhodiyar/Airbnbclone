import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar";
import Filters from "./components/filters/filters";
import Cards from './components/cards/card';
import Footer from './components/footer/footer';
import MapButton from './components/showmap/map';

function App() {
  return (
    <>
      <div className='page'>
        <Navbar />
        <Filters />
        <Cards />
        <Footer />
        <MapButton />
      </div>
      
    </>
  )
}

export default App
