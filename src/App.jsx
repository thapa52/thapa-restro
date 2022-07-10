import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/subcomponents/Footer';
import About from './components/About';
import Menu from './components/Menu';

const App = () => {
  return (
    <div>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App