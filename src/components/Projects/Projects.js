import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import circuitsim from "../../Assets/Projects/circuitsim.png";
import projectleaf from "../../Assets/Projects/projectleaf.png";
import watermelon from "../../Assets/Projects/watermelon.png";
import voice from "../../Assets/Projects/voice.png";
import fullerene from "../../Assets/Projects/fullerene.png";
import castaway from "../../Assets/Projects/castaway.png";
import hoomansystem from "../../Assets/Projects/hoomansystem.png";
import throughtheages from "../../Assets/Projects/throughtheages.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a list of projects that I have worked on over the years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="Project VOICE"
              subtitle="August 2024 - Present"
              description="A part-research, part-open source project that aims to create home-use medical devices to provide non-verbal kids with an alternate form of communication. This project is done in tandem with the Voice Project at the University of Notre Dame."
              ghLink="https://github.com/j-rahmeier/Project-VOICE"
              projLink="https://new.rcos.io/projects/project-voice/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watermelon}
              isBlog={false}
              title="Watermelon Lights"
              subtitle="May 2024 - September 2024"
              description="A circuit system that lights up alternating LEDs (red & green) at specific sound frequencies. This project was meant to emulate Clap On Lights, except with a more narrow specification that eliminates noise and potential errors."
              docuLink="https://docs.google.com/document/d/1QdWbbYbuF54TKe8uwa-hxR_3HgViGpavkoGLGTZGsps/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullerene}
              isBlog={false}
              title="Fullerene"
              subtitle="May 2024 - August 2024"
              description="A 3D and VR environment where users can build and explore chemistry molecules & experiment with their molecular and atomic geometry in an accurate and detailed simulation. This project is supervised by Dr Alexander Ma, and was developed in the Rensselaer Center for Open Source (RCOS)."
              ghLink="https://github.com/jimthejelly/fullerene"
              projLink="https://new.rcos.io/projects/fullerene/?semester="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={circuitsim}
              isBlog={false}
              title="Personal Tutor: Circuit Randomizer"
              subtitle="January 2024 - May 2024"
              description="A circuit randomizer that can continuously provide students with random circuits for them to practice circuit analysis. This project is intended for classroom and laboratory use, and is supervised by Professor Shayla Sawyer and the Mercer XLab at Rensselaer Polytechnic Institute."
              ghLink="https://github.com/andrewkbank/jsCircuitSimulator"
              demoLink="https://andrewkbank.github.io/jsCircuitSimulator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={throughtheages}
              isBlog={false}
              title="Through the Ages"
              subtitle="February 2023 - March 2023"
              description="Small choices can have large impacts. You are sent back in time to save the planet, but going back in time has serious consequences! Any small change you make can change the entire course of history, so choose carefully!"
              ghLink="https://github.com/jimthejelly/Through-the-Ages"
              demoLink="https://through-the-ages-cole.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={projectleaf}
                isBlog={false}
                title="Project Leaf"
                subtitle="December 2021"
                description="A webpage designed to keep track of company leaves of absences, developed during my 2 weeks interning at PT. Cashtree in Jakarta, Indonesia. I worked on the front & back-end of this webpage, to create an easy-to-use webpage for the company. Project Leaf was implemented within the company for use after development."
                ghLink="https://github.com/jimthejelly/project-leaf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={castaway}
                isBlog={false}
                title="Casted Away"
                subtitle="September 2020"
                description="My team's Pygame 30 Game Jam submission for the theme 'Cast Away'. A farming simulator made enitrely in Python, about the harsh Casta system in Spain during the Age of Discovery."
                ghLink="https://github.com/0Nikola0/Casted-Away"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoomansystem}
              isBlog={false}
              title="The Hooman System"
              subtitle="2019"
              description="A High school science project about the life of an oxygen atom. The Oxygen atom, called Oxie, found his way into what is known as The HOOMAN System. Now, he has to try his best to survive everything that the system throws his way!"
              itchLink="https://jimthejelly.itch.io/scienceproject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
