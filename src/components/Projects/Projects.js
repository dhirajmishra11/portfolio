import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import clothConnectImg from "../../Assets/Projects/clothConnectImg.png"; 
import expenseTrackerImg from "../../Assets/Projects/expenseTrackerImg.png";
import devTinderImg from "../../Assets/Projects/devTinderImg.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothConnectImg}
              isBlog={false}
              title="ClothConnect"
              description="A full-stack web application focused on managing clothing donations efficiently. Features include user authentication, donation tracking, NGO integrations, and a dashboard for analytics."
              ghLink="https://github.com/dhirajmishra11/clothConnect"
              demoLink="https://clothconnect.onrender.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTrackerImg}
              isBlog={false}
              title="Expense Tracker"
              description="A user-friendly expense tracking app to help users manage their finances by logging income and expenses, generating reports, and visualizing spending habits."
              ghLink="https://github.com/dhirajmishra11/expense-tracker"
              demoLink="https://expense-tracker-as4o.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devTinderImg}
              isBlog={false}
              title="DevTinder"
              description="A platform designed for developers to connect, collaborate, and find projects or job opportunities tailored to their skills and interests."
              ghLink="#" // add GitHub link when available
              demoLink="#" // add demo link when available
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
