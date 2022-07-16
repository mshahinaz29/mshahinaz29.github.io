import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Shahin Abdul Zamad </span>
            from <span className="purple"> Iligan City, Lanao del Norte, Philippines.</span>
            <br />I'm a <span className="purple">full stack developer</span> with <span className="purple">4</span> years of solid experience.
            <br />I graduated from <span className="purple">MSU-IIT</span> with the degree of <span className="purple">Bachelor of Science in Information Technology</span> Major in <span className="purple">Database Systems</span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling or riding a motorcycle
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "In order to understand recursion, one must first understand recursion."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
