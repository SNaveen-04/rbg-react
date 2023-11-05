import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Title from './components/Title';
import {Home,About,Research} from './components/pages'

import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
      </Routes>
      <Footer />
    </div>
  );};

export default App
