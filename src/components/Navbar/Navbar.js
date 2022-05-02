import React , { useState } from 'react'
import { FaBars, FaClock, FaEnvelope, FaPhoneVolume} from "react-icons/fa";
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
     
            <nav className="navbar">

                
                <div className="container flex_space">
                    <div className="menu-icon" onClick={handleClick}>
                    <FaBars color="white"  />
                    </div>

                   <ul className={click? "nav-menu active" : "nav-menu"}>

                        <li> 
                            <Link to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li>
                                <Link to="/about" onClick={closeMobileMenu}>About</Link>
                         </li>
                   
                        <li>
                            <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
                        </li>

                        <li>
                            <Link to="/destination" onClick={closeMobileMenu}>Destination</Link>
                        </li>

                        <li>
                        
                            <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
                        </li>

                        <li>
                            <Link to="/testimonail" onClick={closeMobileMenu}>Testimonail</Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                        </li> 
                      
                   </ul>
                   <div className="login-area flex">
                       <li>
                           <Link to="sign-in">Sign In
                           </Link>
                       </li>

                          <li>
                              <Link to="/register">
                                  Register
                              </Link>
                          </li>

                          <li>
                              <Link to="/contact">
                                  <button className="primary-btn">Request a Quote</button>

                              </Link>
                          </li>
                   </div>
                </div>

            </nav>
            
            <header>
                <div className="container flex_space">
                    <div className="logo">
                        <img src="/asset/images/logo.jpg" alt="logo"/>

                    </div>
                    <div className="contact flex_space">
                        <div className="box flex_space">
                            <div className="icons">
                                <FaClock/>
                            </div>
                            <div className="text">
                                <h4>Working Hours</h4>
                                <Link to="/contact">Monday-sunday : 9:00am to 6:00pm</Link>

                            </div>

                        </div>
                        <div className="box flex_space">
                            <div className="icons">
                                <FaPhoneVolume/>
                            </div>
                            <div className="text">
                                <h4>Call us</h4>
                                <Link to="/contact">666-233-221</Link>

                            </div>

                        </div>
                        <div className="box flex_space">
                            <div className="icons">
                                <FaEnvelope/>
                            </div>
                            <div className="text">
                                <h4>Mail Us</h4>
                                <Link to="/contact">Amdu@gmail.com</Link>

                            </div>

                        </div>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Navbar
