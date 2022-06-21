import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals.
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input
                        type= 'email'
                        name= 'email'
                        placeholder='Your Email'
                        className='footer-input'
                    />
                    <Button  buttonStyle='btn--outline'> Subscribe </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2> About Us </h2>
                    <Link to="/"> How it works ?</Link>
                    <Link to="/"> Testimonials</Link>
                    <Link to="/"> Careers </Link>
                    <Link to="/"> Investors </Link>
                    <Link to="/"> Terms of services</Link>
                </div>
                <div className='footer-link-items'>
                    <h2> Contact Us </h2>
                    <Link to="/"> Contact</Link>
                    <Link to="/"> Support</Link>
                    <Link to="/"> Destinations </Link>
                    <Link to="/"> Sponsorships </Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2> Videos </h2>
                    <Link to="/"> Submit Video</Link>
                    <Link to="/"> Ambassadors</Link>
                    <Link to="/"> Agency </Link>
                    <Link to="/"> Influencer </Link>
                </div>
                <div className='footer-link-items'>
                    <h2> Social Media </h2>
                    <Link to="/"> Instagram </Link>
                    <Link to="/"> Facebook </Link>
                    <Link to="/"> YouTube </Link>
                    <Link to="/"> Twitter </Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" className='social-logo'>
                        ETRVL <i className="fa-solid fa-globe"/>
                    </Link>
                </div>
                <small className='website-rights'> ETRVL © 2022</small>
                <div className='social-icons'>
                    <Link to="/" className='social-icon-link facebook' target="_blank" aria-label='Facebook'>
                        <i className="fa-brands fa-facebook-square"></i>
                    </Link>
                    <Link to="/" className='social-icon-link instagram' target="_blank" aria-label='Instagram'>
                        <i className="fa-brands fa-instagram-square"></i>
                    </Link>
                    <Link to="/" className='social-icon-link twitter' target="_blank" aria-label='Twitter'>
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="/" className='social-icon-link linkedin' target="_blank" aria-label='Linkedin'>
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link to="/" className='social-icon-link youtube' target="_blank" aria-label='Youtube'>
                        <i className="fa-brands fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;