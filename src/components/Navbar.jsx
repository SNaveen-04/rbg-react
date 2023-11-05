import {NavLink,Link} from 'react-router-dom'; 
import {FiMenu} from 'react-icons/fi'
import './Navbar.css' 
import { useState } from 'react';

const Navbar = () =>{
    const [show,setShow] = useState(false);
    return (
      <nav>
        <div className="title-container">
          <Link className="link title" to="/">
            RBG AI Research
          </Link>
          <div
            className="menu"
            onClick={() => {
              setShow(!show);
            }}>
            Menu
            <FiMenu />
          </div>
        </div>
        <ul className={show ? "showmenu" : ""}>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/research">
              Research
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              AboutUs
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;