
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

                  <Link target="_blank"  to={"https://www.facebook.com/ahmasoran"}>
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link target="_blank"  to={"https://twitter.com/ahmadsorannn"}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link target="_blank"  to={"https://github.com/ahmadsoran/aqarat"}>
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-links">

                <h1>useful links</h1>
                <Link to="/about">about</Link>
                <Link to="#featured">featured</Link>

              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-help">

                <h1>help</h1>
                <Link to="#faq">FAQ</Link>
                <Link to="#">term & conditions </Link>
                <Link to="#">policy</Link>
                <Link to="#">privacy</Link>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="footer-address">

                <h1>address</h1>
                <p>suly - unkown</p>
                <p>hawler - unkown</p>
                <p>developer website: <Link target="_blank"  to={"https://ahmedsoran-portfolio.netlify.app"}>ahmad
                  soran</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


