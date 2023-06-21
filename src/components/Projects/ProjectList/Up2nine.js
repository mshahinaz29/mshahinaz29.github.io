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
import up2nine from "../../../Assets/Projects/up2nine.png";

import screenshot9 from "../../../Assets/Projects/up2nine/Screenshot_9.png";
import screenshot10 from "../../../Assets/Projects/up2nine/Screenshot_10.png";
import screenshot12 from "../../../Assets/Projects/up2nine/Screenshot_12.png";
import screenshot25 from "../../../Assets/Projects/up2nine/Screenshot_25.png";
import screenshot14 from "../../../Assets/Projects/up2nine/Screenshot_14.png";

import ProjectCard2 from "./../ProjectCards2";

function Up2nine() {
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
              <strong className="purple">Inventory and Order Management</strong>
            </h1>
            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    {/* <span className="purple">Shahin Abdul Zamad </span> */}
                    System made for a Medicine Supplier in Iligan City. Client pharmacies order bulk of medicines to the supplier using the system. Some modules and features are:
                </p>
                <ul>     
                    <li className="about-activity">
                    <ImPointRight /> eCommerce
                    </li>           
                    <li className="about-activity">
                    <ImPointRight /> Products & Inventory
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Order fulfillment
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Purchasing
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Credit Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Employees
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Reports
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Accounting
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
            <img src={up2nine} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Screen<strong className="purple">Shots </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={up2nine}
                isBlog={false}
                title="Admin Dashboard"
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot14}
                isBlog={false}
                title="Sample Sales Order"
                />
            </Col>            

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot12}
                isBlog={false}
                title="Create Order Request (Agent View)"
                />
            </Col>            

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot25}
                isBlog={false}
                title="Mobile Login"
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot9}
                isBlog={false}
                title="Products Page"
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

export default Up2nine;
