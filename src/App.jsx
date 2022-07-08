import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Banner from './components/subcomponents/Banner';
import Footer from './components/subcomponents/Footer';

const App = () => {
  return (
    <div>
        <Nav />
        <Banner /> 
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App