import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

import {
    DiReact
  } from "react-icons/di";

function Techstack3() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://laravel.com/" target="_blank"><SiLaravel /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank"><DiReact /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://tailwindcss.com/" target="_blank"><SiTailwindcss /></a>
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.mysql.com/" target="_blank"><SiMysql /></a>
      </Col>
    </Row>
  );
}

export default Techstack3;
