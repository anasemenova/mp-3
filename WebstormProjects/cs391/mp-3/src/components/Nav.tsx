import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavWrapper = styled.nav`
  background-color: #333;
  padding: 2vh 0;
  text-align: center;
  width: 30%;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 3%;
    font-size: calc(2px + 1.3vw);
  }

  li {
    margin: 2vh 0;
    padding: 1vh 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 750px) {
      width: 100%;
      text-align: center;
      padding: 2vh 0;
      display: inline;

    li {
      display: inline;
    }
    ul{
      display: inline;
    }
  }
`;

export default function Nav() {
    return (
        <NavWrapper>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/education`}>Education</Link>
                    </li>
                    <li>
                        <Link to={`/work`}>Work Experience</Link>
                    </li>
                    <li>
                        <Link to={`/leadership`}>Leadership</Link>
                    </li>
                    <li>
                        <Link to={`/projects`}>Projects</Link>
                    </li>
                    <li>
                        <Link to={`/skills`}>Skills and Interests</Link>
                    </li>
                </ul>
        </NavWrapper>
    );
}
