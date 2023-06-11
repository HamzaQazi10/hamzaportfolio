import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a FullStack Developer from Pakistan. I have always been passionate about problem solving 
              which eventually led me into Computer Science also a certified Otaku who loves
              <i>
                <b className="purple"> anime and manga </b>
              </i>
              <br />
              My field of Interest's are
              <i>
                <b className="purple"> FullStack Web development and Cloud Computing </b>
              </i>
              <br />
              Whenever possible, I like to apply my passion to real world probelms 
              my favorite  <b className="purple">Backend Frameworks </b> are 
              <i> <b className="purple">Django, Node.js and Express  </b>  </i>
               and for <b className="purple"> Frontend </b> 
                I like
              <i>
                <b className="purple"> React </b>
              </i>
              Currently, I am working in Visionx as frontend developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple"> Connect </span> with me
            </h1>
            
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
  );
}
export default Home2;
