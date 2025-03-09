import React, { useEffect } from "react";
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

export default function Skills() {
    useEffect(() => {
        document.title = "Skills | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <div className="text">
                        <h3 id="page-title">Skills and Interests</h3>

                        <h4><em>Languages:</em></h4>
                        <ul>
                            <li><strong>Native Proficiency:</strong> Russian</li>
                            <li><strong>Conversational Proficiency:</strong> German, Spanish</li>
                        </ul>

                        <h4><em>Technical Skills:</em></h4>
                        <ul>
                            <li><strong>Programming Languages:</strong> Python, Java, JavaScript, HTML, CSS, STATA</li>
                            <li><strong>Software Proficiency:</strong> Excel, PowerPoint, Word</li>
                        </ul>

                        <h4><em>Interests:</em></h4>
                        <ul>
                            <li>Social Psychology</li>
                            <li>Longevity</li>
                            <li>Gastronomy</li>
                            <li>Road Trips</li>
                        </ul>
                    </div>
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
