import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Title from './components/Title';
import {Home,About,Research} from './components/pages'

import { Routes, Route, Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Routes>
          <Route path="/rgb-react" element={<Outlet/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About />} />
            <Route path="research" element={<Research />} />
          </Route>
      </Routes>
      <Footer />
    </div>
  );};

export default App
