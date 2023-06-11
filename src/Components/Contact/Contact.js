import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <section>
      <Particle />
      <Container fluid className="contact-section">
     
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>
                Feel free to <span className="purple">Contact </span> me
              </h1>
              <div className="contact">
                <div>
                  <PhoneIcon
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a href="tel:+92 335 0946913" className="con-det">
                    +92 333 9988660
                  </a>
                </div>

                <div>
                <LinkedInIcon   
                    color="secondary"
                    className="con_ico"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="https://www.linkedin.com/in/hamza-arshad-qazi-a2b314268/"
                    className="con-det"
                  >
                    Hamza Arshad Qazi
                  </a>
                </div>
                <div>
                  <EmailIcon
                    className="con_ico"
                    color="secondary"
                    sx={{ fontSize: 45 }}
                  />
                  <a
                    href="mailto:hamzaarshadqazi@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="con-det"
                  >
                    hamzaarshadqazi@gmail.com
                  </a>
                </div>
              </div>
              <h1>FIND ME ON</h1>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HamzaQazi10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:hamzaarshadqazi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <EmailIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-arshad-qazi-a2b314268/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
