import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "./Techstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span>HELLO THERE!</span>
            </h1>
            <p className="home-about-body">
              My name is Jimin, and I'm an undergraduate student at Rensselaer Polytechnic Institute, majoring in
              <b className="purple"> Electrical and Computer Systems Engineering </b>.
              <br />
              <br />
              Here you will be able to find some projects that I've worked on, spanning from websites to games to analog circuits. Feel free to take a look!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="project-heading">
            <b>Technical Skillsets</b>
          </h1>
          <Techstack />
      </Row>
        <br /><br />
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b>FIND ME ON</b></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jimthejelly"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jimthejelly/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.youtube.com/channel/UCBi29QC9gZBbRUpy_CV93Vw"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jimthejelly"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
