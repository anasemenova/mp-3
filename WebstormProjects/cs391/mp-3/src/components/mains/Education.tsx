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

export default function Education() {
    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <MainWrapper>
                    <div className="text">
                        <h3 id="page-title">Education</h3>
                        <h4>Boston University</h4>
                        <em>Bachelor of Arts in Computer Science and Economics</em>
                        <em>Minor in Business Administration & Management</em>
                        <ul>
                            <li>Cumulative GPA: 3.51/4.00</li>
                            <li>Honors: Dean’s List, Patriot League Academic Honor Roll, D1 Team’s Scholar-Athlete</li>
                        </ul>
                        <p>
                            <strong>Relevant Coursework: </strong>Computer Science I & II, Intermediate Micro- and Macroeconomics,
                            Empirical Economics I & II, Geometric Algorithms, Financial Accounting, Financial Analysis, Web Development
                        </p>
                    </div>
                </MainWrapper>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
