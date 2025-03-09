import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Calculator } from "../Calculator";

const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #f4f4f4;
  max-width: 100%;
  font-size: calc(1px + 1.5vw);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.main`
  background-color: #f4f4f4;
  padding: 2vw;
  text-align: left;
  color: #333;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100vh;

  a {
    margin: auto;
    padding-right: 5vh;
  }

  .text {
    font-size: calc(2px + 1.3vw);
  }

  #page-title {
    text-align: center;
  }

  @media screen and (max-width: 750px) {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <h3 id="page-title">Projects: JS Calculator</h3>
                    <Calculator />
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
