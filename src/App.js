import React, { Component } from "react";
import styled from "styled-components";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "styled-icons/boxicons-logos/Github";
import tokyo from "./images/tokyo.gif";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import { Npm } from "styled-icons/fa-brands/Npm";

const Background = styled.div`
  height: 100%;
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  overflow: auto;

  .title {
    color: orange;
    font-size: 2rem;
    font-weight: bold;
  }
  .subtitle {
    font-size: 0.8rem;
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
    vertical-align: middle;
    padding: 6px;
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
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Background />
        <Section>
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
          <br />
          <div className="subtitle">
            Experience building client facing and internal applications.
            Passionate about design, UI and UX.
          </div>
          <br />
          dustinwalkerart@gmail.com
          <div className="subtitle">Phone: 080-8706-4034</div>
          <Row>
            <div className="subtitle">Higashi-Nakano, Tokyo, Japan</div>
            <a
              className="link"
              href="https://docs.google.com/document/d/1WiwApaQyhAe24zoMChJ1o0a_V_IwK_f_OR_VlMEMD20/edit?usp=sharing"
              target="blank"
            >
              <div>Resume</div>
            </a>
          </Row>
        </Section>
        <br />
        <Section>
          <Row>
            <div className="logo">
              <div className="project-name title">Kaze</div>
              <Row>
                <a
                  className="link"
                  href="https://licebeam.github.io/kaze-app/"
                  target="blank"
                >
                  <div>Dreg-Wars</div>
                </a>
                <a href="https://github.com/licebeam/kaze-app" target="blank">
                  <Github className="icon2" />
                </a>
              </Row>
            </div>
          </Row>
          <div className="text-section">
            Kaze is a personal project built for studying Japanese, all data was scraped using puppeteer from iKnow's core 6000.
            All Data is saved locally. Built using react primarily.
          </div>
          <h6 className="text-section">
            This project utilizes React, Puppeteer and Node.
          </h6>
        </Section>
        <Section>
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
              <Row>
                <a
                  className="link"
                  href="https://licebeam.github.com/sequence"
                  target="blank"
                >
                  <div>Documentation</div>
                </a>
              </Row>
            </div>
          </Row>
          <h6 className="text-section">
            This project utilizes React and styled-components
          </h6>
        </Section>
        <Section>
          <Row>
            <div className="logo">
              <div className="project-name title">0and2.gg</div>
              <a className="link" href="http://0and2.gg/create" target="blank">
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
            This project utilizes React, GraphQL and Apollo, NextJs - This is in
            its very early stages.
          </h6>
        </Section>
        <Section>
          <Row>
            <div className="logo">
              <div className="project-name title">Challenge Me!</div>
              <Row>
                <a
                  className="link"
                  href="https://licebeam.github.io/challengeme/home.html"
                  target="blank"
                >
                  <div>Challenge Me!</div>
                </a>
                <a
                  href="https://github.com/licebeam/challengeme"
                  target="blank"
                >
                  <Github className="icon2" />
                </a>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="text-section">
              Challenge Me! is a random challenge generator for different video
              games, built for fun but sadly unfinished. Built using firebase
              for authentication and database storage of user statistics.
            </div>
          </Row>
          <h6 className="text-section">
            This project utilizes HTML, Sass, Javascript, Firebase
          </h6>
        </Section>
        <Section>
          <Row>
            <div className="logo">
              <div className="project-name title">Dreg-Wars</div>
              <Row>
                <a
                  className="link"
                  href="https://licebeam.github.io/dregwars/"
                  target="blank"
                >
                  <div>Dreg-Wars</div>
                </a>
                <a href="https://github.com/licebeam/dregwars" target="blank">
                  <Github className="icon2" />
                </a>
              </Row>
            </div>
          </Row>
          <div className="text-section">
            Dreg-Wars was an experiment in creating a web-based game. Dreg-Wars
            is heavily inspired by the classic game Drug Wars.
          </div>
          <h6 className="text-section">
            This project utilizes Bulma, HTML, CSS, JQuery.
          </h6>
        </Section>
      </Wrapper>
    );
  }
}

export default App;
