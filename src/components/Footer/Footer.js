import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import white from '../../images/new2-removebg.jpg'

const Footer = () => {
    return (
        
            <footer class="site-footer" id="contract">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">

                           <img style={{height:'300px'}} src={white} alt="" />
                           
                        </div>


                        <div className="col-xs-6 col-md-3 mt-5">
                            <h5 className="mt-5 ms-5 ps-5">Faridpur,Dhaka,Bangladesh</h5>
                           <h6 className="mt-5 ms-5 ps-5" style={{color: 'blue'}}>Call Now</h6>
                           <strong className="mt-5 ms-5 ps-5">0171000000</strong>
                           <br />
                           {/* <ul class="social-icons">
                           <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                           </ul> */}
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">
                                Copyright &copy; 2021 All Rights Reserved by <a href="/"> Svn</a>.</p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            

                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
       
    );
};

export default Footer;
