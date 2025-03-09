import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 5vw;
  text-align: left;
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Anastasiia Semenova</h1>
            <p>stacy22@bu.edu | linkedin.com/in/anasemenova</p>
        </HeaderWrapper>
    );
}
