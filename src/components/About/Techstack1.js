import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLaravel,
  SiBootstrap,
  SiJquery,
  SiMysql,
} from "react-icons/si";

function Techstack1() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://laravel.com/" target="_blank"><SiLaravel /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://getbootstrap.com/" target="_blank"><SiBootstrap /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://jquery.com/" target="_blank"><SiJquery /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.mysql.com/" target="_blank"><SiMysql /></a>
      </Col>
    </Row>
  );
}

export default Techstack1;
