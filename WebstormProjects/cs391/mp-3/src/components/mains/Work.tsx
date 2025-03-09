import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "./";
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

export default function Work() {
    useEffect(() => {
        document.title = "Work Experience | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <div className="text">
                        <h3 id="page-title">Work Experience</h3>

                        <h4>
                            Boston University Department of Computer Science
                        </h4>
                        <em>Course Assistant</em>
                        <ul>
                            <li>Supported lab sessions for 30 students, assisting with coursework in HTML, CSS, and JavaScript</li>
                            <li>Held weekly office hours to provide one-on-one guidance and clarify course concepts</li>
                            <li>Evaluated over 40 homework assignments per week, ensuring timely and constructive feedback</li>
                            <li>Aligned lab activities with course objectives and streamlined grading process</li>
                        </ul>

                        <h4>
                            Geaux Network
                        </h4>
                        <em>Business Development Intern</em>
                        <ul>
                            <li>Conducted in-depth market research to identify and evaluate 100+ partnership opportunities</li>
                            <li>Developed targeted outreach strategies and crafted custom proposals, achieving a 20% partner response rate</li>
                            <li>Built a financial forecast in Excel for optimal ad placements to support a $100M company valuation goal</li>
                            <li>Created SOPs to streamline onboarding and standardize outreach for future interns</li>
                        </ul>
                    </div>
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
