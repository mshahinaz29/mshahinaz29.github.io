import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import moment from "moment";

function Home2() {

  function getYearsExperience() {    
    const years = moment().diff('2018-01-01', 'years');
    return years ;
  }

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software developer with {getYearsExperience()} years actual work experience
              {/* I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ */}
              <br />
              <br />I developed a wide range of websites and systems using
              <i>
                <b className="purple"> Laravel/PHP, React, Vue.js, Livewire, Nuxt.js, Next.js, Node.js, Express, HTML5, CSS3, JavaScript, TypeScript, MySQL, PostgreSQL, MongoDB, REST API, jQuery, bootstrap and tailwind </b>
                from small to large-scale web applications.
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Game Development and Data Analytics.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Laravel</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Vue.js or React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">    
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammad-shahin-abdul-zamad-8b8738132"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/mshahinaz29"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01b17eae1f44c857b1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
