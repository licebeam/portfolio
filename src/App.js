import React, { Component } from "react";
import styled from "styled-components";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "styled-icons/boxicons-logos/Github";
import tokyo from "./images/tokyo.gif";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${tokyo});
  background-size: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  opacity: 0.2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 90%;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .subtitle {
    font-size: 0.6rem;
  }
  .icon {
    margin-left: 20px;
    height: 30px;
    transition: 0.3s all;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
  .link {
    height: 30px;
    transition: 0.3s all;
    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Background />
        <Row>
          <div className="title">Dustin Walker</div>
          <a href="https://github.com/licebeam" target="blank">
            <Github className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/dustin-walker-70b61b91/"
            target="blank"
          >
            <LinkedinSquare className="icon" />
          </a>
        </Row>
        <div>Front-End Engineer and Designer</div>
        <div className="subtitle">
          Experience building client facing and internal applications
        </div>
        <Middle>
          <div>Projects I've worked on.</div>
        </Middle>
      </Wrapper>
    );
  }
}

export default App;
