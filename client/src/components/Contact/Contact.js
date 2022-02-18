import React from "react";
import Contactform from "./Contactform";
import { Container } from "react-bootstrap";
import "./styles.css";

function Contact() {
  return (
    <div>
      <Container>
        <div className="row my-5 contact">
          <div className="col-lg-8 col-md-12">
            <Contactform />
          </div>
        </div>
        <div className="row">
          <Container className="social-media">
            <div className="row">
              <div className="col-4">
              <a type="button" href="https://www.linkedin.com/in/mohamedfazil17/" className="btn btn-dark position-relative">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="s"/>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </a>
              </div>
              <div className="col-4">
              <a type="button" href="https://github.com/mofazil17" className="btn btn-dark position-relative">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="s"/>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </a>
              </div>
              <div className="col-4">
              <a type="button" href="https://www.instagram.com/_fazil_mohamed_17._/" className="btn btn-dark position-relative">
              <img src="https://img.icons8.com/material-outlined/50/ffffff/instagram-new--v1.png" alt="s"/>
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </a>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      ;
    </div>
  );
}

export default Contact;
