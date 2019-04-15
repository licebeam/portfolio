import React, { Component } from "react";
import styled from "styled-components";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  width: 50%;
  .icon {
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
`;
class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <div>
          <div>Dustin Walker</div>
          <div>Front-End Engineer and Designer</div>
          <LinkedinSquare className="icon" />
        </div>

        <div>
          <div>About Me</div>
          <div>Front-End Engineer and Designer</div>
        </div>

        <div>
          <div>Contact Me</div>
          <div>Front-End Engineer and Designer</div>
        </div>
        <div>
          <div>Social Links</div>
          <div>Front-End Engineer and Designer</div>
        </div>

        <div>
          <div>Stuff I've Made</div>
          <div>Front-End Engineer and Designer</div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
