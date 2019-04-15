import React, { Component } from "react";
import styled from "styled-components";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "styled-icons/boxicons-logos/Github";
import tokyo from "./images/tokyo.gif";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import { Npm } from "styled-icons/fa-brands/Npm";
const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${tokyo});
  background-size: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  opacity: 0.1;
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
      color: #fafafa;
    }
  }
  .icon2 {
    padding: 10px;
    height: 30px;
    transition: 0.3s all;
    &:hover {
      cursor: pointer;
      color: #fafafa;
    }
  }
  .link {
    height: 30px;
    transition: 0.3s all;
    &:hover {
      cursor: pointer;
      color: #fafafa;
    }
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-content: center;
    img {
      height: 100px;
      width: 100px;
    }
  }
  .project-name {
    text-align: center;
  }
  .text-section {
    width: 300px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Middle = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
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
        <div>Front-End Engineer and Designer.</div>
        <div className="subtitle">
          Experience building client facing and internal applications.
        </div>
        <a
          className="link"
          href="https://docs.google.com/document/d/1WiwApaQyhAe24zoMChJ1o0a_V_IwK_f_OR_VlMEMD20/edit?usp=sharing"
          target="blank"
        >
          <div>Resume</div>
        </a>
        <Middle>
          <Row>
            <div className="logo">
              <img className="logo" src={sequenceLogo} />
              <div className="project-name">sequence-ui</div>
              <Row>
                <a href="https://github.com/licebeam/sequence" target="blank">
                  <Github className="icon2" />
                </a>
                <a
                  href="https://www.npmjs.com/package/sequence-ui"
                  target="blank"
                >
                  <Npm className="icon2" />
                </a>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="text-section">
              sequence-ui is a React component and ui library built using
              styled-components that offers an extendable and simple way to
              build compound ui for applications.
            </div>
          </Row>
          <h6 className="text-section">
            This project utilizes React and styled-components
          </h6>
          <Row>
            <div className="logo">
              <div className="project-name title">0and2.gg</div>
              <a className="link" href="http://0and2.gg" target="blank">
                <div>0and2.gg</div>
              </a>
            </div>
          </Row>
          <div className="text-section">
            0and2.gg is a social networking and esports platform being built to
            bring competitive gamers and their communities closer together.
            Currently leading this project with koenji-dog-squad.
          </div>
          <h6 className="text-section">
            This project utilizes React, GraphQL and Apollo, NextJs
          </h6>
        </Middle>
        <Middle>
          <Row>
            <div className="logo">
              <img className="logo" src={sequenceLogo} />
              <div className="project-name">sequence-ui</div>
              <Row>
                <a href="https://github.com/licebeam/sequence" target="blank">
                  <Github className="icon2" />
                </a>
                <a
                  href="https://www.npmjs.com/package/sequence-ui"
                  target="blank"
                >
                  <Npm className="icon2" />
                </a>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="text-section">
              sequence-ui is a React component and ui library built using
              styled-components that offers an extendable and simple way to
              build compound ui for applications.
            </div>
          </Row>
          <h6 className="text-section">
            This project utilizes React and styled-components
          </h6>
          <Row>
            <div className="logo">
              <div className="project-name title">0and2.gg</div>
              <a className="link" href="http://0and2.gg" target="blank">
                <div>0and2.gg</div>
              </a>
            </div>
          </Row>
          <div className="text-section">
            0and2.gg is a social networking and esports platform being built to
            bring competitive gamers and their communities closer together.
            Currently leading this project with koenji-dog-squad.
          </div>
          <h6 className="text-section">
            This project utilizes React, GraphQL and Apollo, NextJs
          </h6>
        </Middle>
      </Wrapper>
    );
  }
}

export default App;
