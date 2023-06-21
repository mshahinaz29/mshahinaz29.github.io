import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLaravel,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiMysql,
} from "react-icons/si";

function Techstack2() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://laravel.com/" target="_blank"><SiLaravel /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://tailwindcss.com/" target="_blank"><SiTailwindcss /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vuejs.org/" target="_blank"><SiVuedotjs /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nuxtjs.org/" target="_blank"><SiNuxtdotjs /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.mysql.com/" target="_blank"><SiMysql /></a>
      </Col>
    </Row>
  );
}

export default Techstack2;
