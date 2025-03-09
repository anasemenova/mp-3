import React, {useEffect} from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

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

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .text {
    font-size: calc(2px + 1.3vw);
    position: relative;
    text-align: center;
  }

  a {
    margin: auto;
    padding-right: 5vh;
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

export default function Home() {
    useEffect(() => {
        document.title = "Home | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <h3 id="page-title">Home</h3>
                    <img src="/public/linkedin.jpg" alt="Anastasiia Semenova" />
                    <div className="text">
                        <p>
                            I’m a Computer Science and Economics student at Boston University.
                            This online resume showcases my skill set and experience.
                        </p>
                    </div>
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
