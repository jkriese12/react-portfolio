import React from "react";

import { Container, Row } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";

function Home() {
  return (
    <Container>
      <h1>Just a test</h1>
      <Row>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Row>
    </Container>
  );
}

export default Home;
