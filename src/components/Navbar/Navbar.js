import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
// import dark from '../../images/dark.png'
import './Navbar.css';
import logo from '../../images/new2-removebg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Nav, Navbar} from 'react-bootstrap';
// import TextEffect from '../home/Header/TextEffect/TextEffect';
const NavBar = () => {
  return (
    <Navbar className="navbar-fixed topnav" collapseOnSelect expand="lg" sticky='top' variant="light">
      <Navbar.Brand href="/home" >
        <img style={{ height:'40px',width:'90px',marginLeft:'90px',marginRight:'60px' }} src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">



        <Nav className=" ml-auto ms-5 mr-auto options ps-5">
          <Link smooth className="nav-link ms-5 px-5 text-white " to="#home">Home</Link>

          <Link smooth className="nav-link ms-5 text-white px-5 " to="#projects">Projects</Link>
          <Link smooth className="nav-link ms-5 text-white px-5 " to="#contract">Contract Us</Link>


          <ul class="social-icons  ms-5 ps-5">
            <li className="list-inline-item ms-3 "><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
            <li className="list-inline-item ms-3 "><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
            <li className="list-inline-item ms-3 "><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
          </ul>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;