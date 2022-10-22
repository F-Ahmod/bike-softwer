import React from "react";
import { Col, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import img from "../images/logo2.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta mt-3 mb-3">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Fax </h4>
                    <span>0379554085</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call</h4>
                    <span>0379569991, </span>
                    <span>79569095</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>E-Mail</h4>
                    <span>kelabpj@hotmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content mt-2">
            <div className="row">
              <div className="col-xl-4 col-lg-4 ">
                <div className="">
                  <Link className="foioterpj" to="/home">
                    <img className="rounded" src={img} alt="" width="40" />{" "}
                    <Navbar.Brand href="/home">
                      <span className="fs-5">PJ Club</span>
                    </Navbar.Brand>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="">
                    <Col>
                      <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231895.93139248763!2d91.41940869402687!3d24.74836530939623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37511854af0e933b%3A0xfd6852de07af108a!2sJagannathpur%20Upazila!5e0!3m2!1sen!2sbd!4v1651866330305!5m2!1sen!2sbd"
                        allowfullscreen=""
                        loading="lazy"
                        title="hello world"
                      ></iframe>
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            
              <div className="mx-auto copyright-text">
                <p>
                  Copyright &copy; 2022, All Right Reserved{" "}
                  <a href="#">PJ-club</a>
                </p>
              </div>
              {/* <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div> */}
           
          </div>
        </div>
      </footer>
      {/* <div id="foot" className="row pb-3">
        <div className="col-md-3 mt-3 ">
          <div style={{ marginLeft: "15px" }}>
            <h5 className="">PJ Club</h5>
            <Link className="Linkk" to="./home">Home</Link>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div style={{ marginLeft: "15px" }}>
            <h4>Contact Us</h4>
            <>
              <>Email:pj@gmail.com</>
              <br />
              <>Phone:+1646524892</>
              <br />
              <>Address:br st,Nyc,USA</>
            </>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div style={{ marginLeft: "15px" }}>
            <h4>Contact Us</h4>
            <>
              <>Email:pj@gmail.com</>
              <br />
              <>Phone:+1646524892</>
              <br />
              <>Address:br st,Nyc,USA</>
            </>
          </div>
        </div>
        <div className="col-md-3 mt-3 d-flex ">
          <div style={{ marginLeft: "15px" }}>
            <h4>Follow Us</h4>
            <a href="https://web.facebook.com/profile.php?id=100004528784980">
              <i className="fab fa-facebook-square text-primary fs-2 me-2"></i>
            </a>
            <a href="https://www.youtube.com/c/KasirAhmod">
              <i className="fab fa-youtube-square text-danger fs-2 me-2"></i>
            </a>

            <i className="fab fa-instagram-square fs-2 me-2"></i>
            <i className="fab fa-snapchat fs-2 text-warning me-2"></i>
          </div>
        </div>
      </div>
      <div className="footer2 ">
        <small className="d-flex justify-content-center">
          {" "}
          <Link className="nav-link fs-5 text-light" to="/policy">
            <small>Policy & policy | Terms of Services | Cookies</small>
          </Link>
        </small>
        <small className="d-flex justify-content-center">
          © 2021 all rights reserved by <span>pj</span>
        </small>
      </div> */}
    </div>
  );
};

export default Footer;
