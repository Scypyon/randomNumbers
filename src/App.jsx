import React, { Component } from "react";
import Charts from "./components/Charts";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  position: relative;
  box-sizing: border-box;
  border-left: 0.5vw solid #000;
  border-bottom: 0.5vh solid #000;
`;

const BottomStats = styled.div`
  position: absolute;
  left: 0;
  bottom: -2.7vw;
  height: 3vw;
  width: 90vw;
  padding-top: 0.5vw;
`;

const BottomStatsItem = styled.p`
  width: 8.95vw;
  margin: 0;
  float: left;
  text-align: right;
  border-right: 0.1vh solid #000;
  height: 2vw;
  padding-top: 1vw;
`;

class App extends Component {
  state = {
    bottomItem: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  };

  render() {
    return (
      <Container>
        <BottomStats>
          {this.state.bottomItem.map((task, i) => (
            <BottomStatsItem key={i}>{task}</BottomStatsItem>
          ))}
        </BottomStats>
        <Charts />
      </Container>
    );
  }
}

export default App;
