import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImLink } from "react-icons/im";
import Github from "../../About/Github";
import Techstack1 from "./../../About/Techstack1";
// import Aboutcard from "./../../About/AboutCard";
// import laptopImg from "../../../Assets/about.png";
import Toolstack from "./../../About/Toolstack";
import krisland from "../../../Assets/Projects/krisland.png";

import screenshot1 from "../../../Assets/Projects/krisland/Screenshot_1.png";
import screenshot3 from "../../../Assets/Projects/krisland/Screenshot_3.png";
import screenshot4 from "../../../Assets/Projects/krisland/Screenshot_4.png";
import screenshot5 from "../../../Assets/Projects/krisland/Screenshot_5.png";
import screenshot6 from "../../../Assets/Projects/krisland/Screenshot_6.png";
import screenshot7 from "../../../Assets/Projects/krisland/Screenshot_7.png";

import ProjectCard2 from "./../ProjectCards2";

function Krisland() {
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
              <strong className="purple"><a target="_blank" href="http://krislandcorp.com/" className="purple">Krisland eCommerce and Inventory</a></strong>
            </h1>
            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    {/* <span className="purple">Shahin Abdul Zamad </span> */}
                    eCommerce and Inventory system made for Construction supplies store in Iligan City. Some modules are:
                </p>
                <ul>                
                    <li className="about-activity">
                    <ImPointRight /> Inventory
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Order fulfillment
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Procurement
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> POS
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Credit Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Location Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Reports
                    </li>
                    <li className="about-activity"></li>
                    <li className="about-activity">
                    <ImLink /> Link<a target="_blank" href="http://krislandcorp.com/" className="purple"> Here</a>
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
            <img src={krisland} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Screen<strong className="purple">Shots </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot1}
                isBlog={false}
                title="Home Page"
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot3}
                isBlog={false}
                title="Products Page"
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot4}
                isBlog={false}
                title="Single Product Page"
                />
            </Col>            

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot5}
                isBlog={false}
                title="Cart"
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot6}
                isBlog={false}
                title="Checkout Page"
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot7}
                isBlog={false}
                title="Admin Dashboard"
                />
            </Col>
        </Row>

        {/* <Techstack /> */}

        <h1 className="project-heading">
          <strong className="purple">Technologies</strong> used
        </h1>
        <Techstack1 />
        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default Krisland;
