import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const AboutUsScreen = () => {
  return (
    <div className="aboutbody" style={{ textAlign: "center", color: "#000" }}>
      <Row md={3}>
        <Col md={2}></Col>
        <Col md={9} className="aboutpage">
          <h1 style={{ fontWeight: 900 }}>What is Bidhyarthisewa?</h1>
          <p>
            Bidhyarthisewa.com is a unique e-commerce web application designed
            for buying and selling products exclusively between students. The
            name ”bidhyarthisewa” embodies our commitment to serving the student
            community as our niche users. The main objective of this platform is
            to reduce the waste of educational materials and the financial
            burden on students. The web application provides a platform to
            create a sustainable cycle of resource utilization by allowing them
            to buy and sell products used in another academic cycle
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
      <img src="https://raw.githubusercontent.com/Bibekdhkl/Collegeproject/main/assets/Logo/Logo-400-100.png" alt="Bidhyarthisewa description" style={{width:300,height:100,margin:10}}/>
      <Row md={3}>
        <Col md={2}></Col>
        <Col md={9} className="aboutpage">
          <h1 style={{ fontWeight: 900 }}>Why to use Bidhyarthisewa?</h1>
            <ul style={{ textAlign: "center", color: "Blue" }} >
              <li>⭐ To Sell your used materials</li>
              <li>⭐ Rather than throwing your educational resources away,isn't it better to earn some money?</li>
              <li>⭐ So, you can sell your used materials to other students who need them.</li>
              <li>⭐ And, you can also buy used materials from other students.</li>
              <li>⭐ To Buy used materials</li>
              <li>⭐ Buying used materials is cheaper than buying new ones.</li>
            </ul>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={9} className="aboutpage1">
          <h3 style={{ fontWeight: 800 }}>Contact Details</h3>
          <i className="fas fa-phone"></i> 9845908326
          <i className="fas fa-envelope-square"></i>{" "}
          <a target="_blank" href={`mailto:bidhyarthisewa@gmail.com`}>
            bidhyarthisewa@gmail.com
          </a>
          <h3 style={{ fontWeight: 800 }}>Developer</h3>
          <p>
            Designed and developed by Bikram Pun, Bibek Dhakal & Milan Kharel{" "}
          </p>
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default AboutUsScreen;
