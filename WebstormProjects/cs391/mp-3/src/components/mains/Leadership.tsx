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

export default function Leadership() {
    useEffect(() => {
        document.title = "Leadership | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <div className="text">
                        <h3 id="page-title">Leadership Experience</h3>
                        <h4>
                            Boston University Varsity Basketball Team
                        </h4>
                        <em>NCAA Division I Student-Athlete Team Captain</em>
                        <ul>
                            <li>Received a $90,000 full athletic scholarship</li>
                            <li>Managed a full-time student course load with 30+ hours per week of training, play-review, and competition</li>
                            <li>Demonstrated goal-oriented leadership on and off court as a role model and mentor for teammates</li>
                            <li>Led team to two championship games through effective communication and collaboration</li>
                        </ul>

                        <h4>
                            Girls Who Code
                        </h4>
                        <em>Program Facilitator</em>
                        <ul>
                            <li>Led weekly coding sessions for 20 students in grades 6-12, teaching Python fundamentals</li>
                            <li>Developed and delivered tailored lesson plans, simplifying complex concepts into digestible content</li>
                            <li>Empowered underrepresented students to build coding confidence in an inclusive environment</li>
                        </ul>
                    </div>
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
