
import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {

  return (
    <footer>
      <div className="my-container">
        <div className="footer-info">
          <div className="row">

            <div className="col-6 col-sm-3">
              <div className="logo">
                <h1>Aqarat.com</h1>
                <p>the ,ost beautiful exclusive <br /> properties and luxury apartments</p>
                <div className="footer-icon">

                  <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/ahmasoran"}>
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/ahmadsorannn"}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ahmadsoran/aqarat"}>
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-links">

                <h1>useful links</h1>
                <Link to="/about">about</Link>
                <a href="#featured">featured</a>

              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-help">

                <h1>help</h1>
                <a href="#faq">FAQ</a>
                <a href="#">term & conditions </a>
                <a href="#">policy</a>
                <a href="#">privacy</a>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-address">

                <h1>address</h1>
                <p>suly - unkown</p>
                <p>hawler - unkown</p>
                <p>developer website: <a target="_blank" rel="noopener noreferrer" href={"https://ahmedsoran-portfolio.netlify.app"}>ahmad
                  soran</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


