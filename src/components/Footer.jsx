import './Footer.css';
import {FaGithub,FaLinkedin,FaFacebook,FaYoutube,FaTwitter} from 'react-icons/fa';
const Footer = ()=>{
    return (
      <footer className="Footer">
        <div className="Top">
          <h1>Contact</h1>
        </div>
        <div className="Bottom">
          <div className="Bottom-content row1">
            <div className="address">
              <img src="./images/rbg.png" className="logo" />
              RBG.AI,
              <br /> SREC SPARK Incubation Foundation,
              <br /> Sri Ramakrishna Engineering College,
              <br /> Coimbatore, Tamil Nadu 641022, India <br />
              If you have queries about our work, contact us at
              <br /> research@rbg.ai
            </div>
            <div className="SocialMedia">
              <FaLinkedin className="slogo" />
              <FaYoutube className="slogo" />
              <FaTwitter className="slogo" />
              <FaGithub className="slogo" />
              <FaFacebook className="slogo" />
            </div>
          </div>
          <div className="Bottom-content row2">
            &copy; 2021-2023 RBG.AI. All rights reserved
          </div>
        </div>
      </footer>
    );
}
export default Footer;