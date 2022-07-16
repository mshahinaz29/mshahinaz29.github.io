import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Shahin-Abdul-Zamad.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="WEB DEVELOPER [Kuban Empire]"
              date="September 2021 - Present"
              content={[
                "Maintained an existing inventory system",
                "Convert old system to a React project"
              ]}
            />
            <Resumecontent
              title="SENIOR WEB DEVELOPER [Pixzel Digital]"
              date="January 2021 - July 2021"
              content={[
                "Assigned as a team lead in developing an ERP (Enterprise Resource Planning) Project for a construction company.",
                "Deployed an Online School Registration Portal based in Singapore",
              ]}
            />
            <Resumecontent
              title="JUNIOR WEB DEVELOPER [Pixzel Digital]"
              date="October 2018 - December 2020"
              content={[
                "Developed an Order Management and Inventory System for a Medicine Supplier company in Iligan City",
                "Developed and deployed an Accounting System to be utilized by a school",
                "Developed an eCommerce, Order fulfillment and Inventory system for a Hardware Supplies Company",
                "Developed an eCommerce and online selling platform for Pharmacies in Iligan. Subscriber Pharmacies can also access more features like Inventory, POS, Sales Reporting etc."
              ]}
            />
            <h3 className="resume-title">Eligibility</h3>
            <Resumecontent
              title="Civil Service Eligibility"
              content={[
                "Passed Career Service Professional Examination on March 12, 2017",
              ]}
            />
            {/* <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BS-IT Major in Database Systems [MSU-IIT] "
              date="2014 - 2018"
              content={["CUMLAUDE",
                `CGPA: 1.6`,
                "DOST Academic Excellence Awardee"
            ]}
            />
            <Resumecontent
              title="HIGHSCHOOL [MSU-Balo-i Community HighSchool]"
              date="2010 - 2014"
              content={["With Special Honor",
              "Academic Scholar",
              "Top 21 MSU-SASE Systemwide (2013)",
              "Leadership Awardee (SSG Vice President 2013-2014)",
              "DOST passer",
              "Ayala Young Leader Foundation National Discipline Awardee 2014"
            ]}
            />
            {/* <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            /> */}
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
