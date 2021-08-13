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
import sjck from "../../../Assets/Projects/sjck.png";

import screenshot20 from "../../../Assets/Projects/sjck/Screenshot_20.png";
import screenshot21 from "../../../Assets/Projects/sjck/Screenshot_21.png";
import screenshot22 from "../../../Assets/Projects/sjck/Screenshot_22.png";
import screenshot23 from "../../../Assets/Projects/sjck/Screenshot_23.png";
import screenshot24 from "../../../Assets/Projects/sjck/Screenshot_24.png";
// import screenshot7 from "../../../Assets/Projects/krisland/Screenshot_7.png";

import ProjectCard2 from "./../ProjectCards2";

function Sjck() {
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
              <strong className="purple">SJCK Online Registration Portal</strong>
            </h1>
            <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    {/* <span className="purple">Soumyajit Behera </span> */}
                    an online registration portal made for a school based in Singapore. Parents use the system to reserve a slot for their children in advance (usually 1 to 3 years ahead). A payment gateway has also been integrated in order for parents to pay instantly. Some modules and features include:
                </p>
                <ul>                
                    <li className="about-activity">
                    <ImPointRight /> Student Registration
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Campus Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Registration Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Product Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Order Management
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Transactions
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> CMS
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
            <img src={sjck} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Screen<strong className="purple">Shots </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot20}
                isBlog={false}
                title="Landing Page"
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot21}
                isBlog={false}
                title="Pre-Registration page"
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot22}
                isBlog={false}
                title="Registration form 1"
                />
            </Col>            

            <Col md={6} className="project-card">
                <ProjectCard2
                imgPath={screenshot23}
                isBlog={false}
                title="Registration form 2"
                />
            </Col>

           

            <Col md={12} className="project-card">
                <ProjectCard2
                imgPath={screenshot24}
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

export default Sjck;
