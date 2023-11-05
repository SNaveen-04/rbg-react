import './App.css'
import {Home,About,Research} from './components/pages'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Footer from './components/Footer'

import { Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="rbg-react" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="research" element={<Research />} />
      </Routes>
      <Footer />
    </div>
  );};

export default App
