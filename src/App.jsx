import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Services from './components/Services';

const App = () => {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App