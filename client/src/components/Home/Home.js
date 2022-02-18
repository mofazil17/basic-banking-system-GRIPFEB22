import React from "react";
import { Container } from "react-bootstrap";
import { Banner, Cards, Clients, Connections } from "./homecomponents";

function Home() {
  return (
    <div>
      <Container>
        <Banner />
        <Cards />
        <Clients />
        <Connections />
      </Container>
    </div>
  );
}

export default Home;
