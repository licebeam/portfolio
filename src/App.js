import React, { Component } from "react";
import styled from "styled-components";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "styled-icons/boxicons-logos/Github";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 70%;
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
class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Row>
          <div>Dustin Walker</div>
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
        <div>Experience building client facing and internal applications</div>
      </Wrapper>
    );
  }
}

export default App;
