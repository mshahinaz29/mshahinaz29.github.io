import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImLink } from "react-icons/im";
import Github from "../../About/Github";
import Techstack2 from "./../../About/TechStack2";
// import Aboutcard from "./../../About/AboutCard";
// import laptopImg from "../../../Assets/about.png";
import Toolstack from "./../../About/Toolstack";
import ncmc from "../../../Assets/Projects/ncmc.png";

import screenshot11 from "../../../Assets/Projects/ncmc/Screenshot_11.png";
import screenshot17 from "../../../Assets/Projects/ncmc/Screenshot_17.png";
import screenshot27 from "../../../Assets/Projects/ncmc/Screenshot_27.png";
import screenshot29 from "../../../Assets/Projects/ncmc/Screenshot_29.png";
import screenshot30 from "../../../Assets/Projects/ncmc/Screenshot_30.png";
// import screenshot7 from "../../../Assets/Projects/krisland/Screenshot_7.png";

import ProjectCard2 from "./../ProjectCards2";

function Ncmc() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple"><a target="_blank" href="https://ncmc.edu.ph/" className="purple">NCMC Portal</a></strong>
            </h1>
            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    {/* <span className="purple">Soumyajit Behera </span> */}
                    Website, students' portal and school management system made for a school based in Maranding. Some modules and features include:
                </p>
                <ul>                
                    <li className="about-activity">
                    <ImPointRight /> Student's Portal
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Cashiering
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Enrolment
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Scholarship Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Student Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Employee Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Programs and Courses Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Grade Management
                    </li>
                    <li className="about-activity"></li>
                    <li className="about-activity">
                    <ImLink /> Website Link<a target="_blank" href="https://ncmc.edu.ph/" className="purple"> Here</a>
                    </li>
                </ul>

                {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                    "Strive to build things that make a difference!"{" "}
                </p>
                <footer className="blockquote-footer">Shahin</footer> */}
                </blockquote>
            </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={screenshot30} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Screen<strong className="purple">Shots </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={ncmc}
                isBlog={false}
                title="Login Page"
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot11}
                isBlog={false}
                title="Admin Dashboard"
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot17}
                isBlog={false}
                title="Student View"
                />
            </Col>            

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot27}
                isBlog={false}
                title="Cashier View"
                />
            </Col>

           

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot30}
                title="Website"
                />
            </Col>
        </Row>

        {/* <Techstack /> */}

        <h1 className="project-heading">
          <strong className="purple">Technologies</strong> used
        </h1>
        <Techstack2 />
        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default Ncmc;
