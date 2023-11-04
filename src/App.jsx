import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import {Home,About,Services,Contact} from './components/pages'

import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </div>
  );};

export default App
