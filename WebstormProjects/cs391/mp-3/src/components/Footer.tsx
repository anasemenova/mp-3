import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #3498db;
  color: #fff;
  padding: 5vw;
  text-align: center;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>All Rights Reserved by Anastasiia Semenova
                <Link to={`/credits`}>Credits</Link> &copy;</p>
        </FooterWrapper>
    );
}
