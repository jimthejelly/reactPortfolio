import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";
import { Icon } from '@iconify/react';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="file-icons:matlab" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:language-csharp" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="mdi:unity" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon="simple-icons:latex" />
      </Col>
    </Row>
  );
}

export default Techstack;
