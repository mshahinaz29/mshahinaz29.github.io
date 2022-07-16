// import React from "react";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import cpf from "../../Assets/Projects/cpf.png";
import ibotika from "../../Assets/Projects/ibotika.png";
import krisland from "../../Assets/Projects/krisland.png";
import ncmc from "../../Assets/Projects/ncmc.png";
import sjck from "../../Assets/Projects/sjck.png";
import tlg from "../../Assets/Projects/tlg.png";
import up2nine  from "../../Assets/Projects/up2nine.png";
import winedepot  from "../../Assets/Projects/winedepot.png";

function Projects() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={winedepot}
              isBlog={false}
              isBlank={false}
              title="Inventory and Order Management System"
              description="A software in where liquor suppliers can manage their inventory, orders, sales, depots and generate reports. "
              link="projects/winedepot"
            />
            
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krisland}
              isBlog={false}
              isBlank={false}
              title="Krisland"
              description="eCommerce that sells construction supplies in Iligan City. Also includes inventory, order fulfillment, POS, procurement and report generation modules for management use."
              link="projects/krisland"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibotika}
              isBlog={false}
              isBlank={true}
              title="Ibotika"
              description="eCommerce and a platform for pharmacies to sell their medicines and other products online. It also includes POS and Inventory systen for subscriber pharmacies. "
              link="http://ibotika.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={up2nine}
              isBlog={false}
              title="Inventory system with E-commerce"
              description="Inventory, Order fulfillment, Sales reporting, mini accounting and eCommerce system made for Medicine Supplier in Iligan City. Client pharmacies order bulk of medicines to the supplier using the system."
              link="projects/supply-management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tlg}
              isBlog={false}
              isBlank={true}
              title="The Loving Garden"
              description="Website in where grieving people can donate in honor of their loved one(s) in a form of a seed (cash donations). Flowers (cash proceeds) are then given to Child loss support, Funeral arrangement support, Medical bill support, Education, Childcare, Covid Relief Fund and others."
              link="https://thelovinggarden.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ncmc}
              isBlog={false}
              title="School Management Information System"
              description="tailored system made for a school in where school staff can manage enrollments, payments, scholarship applications, programs, courses, students' grades. System can also be used by students to enroll, enlist program courses (subjects), view course schedule and view grades."
              link="projects/ncmc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sjck}
              isBlog={false}
              title="School Online Registration Portal"
              description="an online registration portal made for a school based in Singapore. Parents use the system to reserve a slot for their children in advance (usually 1 to 3 years ahead). A payment gateway has also been integrated in order for parents to pay instantly."
              link="projects/sjck"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
