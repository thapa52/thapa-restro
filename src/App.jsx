import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Order from './components/Order';

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
            <Route path='/services' element={<Services />} />
            <Route path='/order' element={<Order />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App