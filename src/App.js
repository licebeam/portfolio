import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;
class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <div>
          <div>Dustin Walker</div>
          <div>Front-End Engineer and Designer</div>
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
