import React, { Component } from "react";
import Charts from "./containers/Charts";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  position: relative;
  box-sizing: border-box;
  border-left: 0.5vw solid #000;
  border-bottom: 0.5vh solid #000;
`;

const LeftStats = styled.div`
  width: 3vw;
  height: 90vh;
  position: absolute;
  left: -3vw;
  top: 0;
  float: left;
  margin-bottom: 0.5vh;
`;

const BottomStats = styled.div`
  position: absolute;
  left: 0;
  bottom: -3vw;
  height: 3vw;
  width: 90vw;
  padding-top:0.5vw;
`;

const LeftStatsItem = styled.p`
  height:8.95vh;
  margin:0
  border-top:0.1vh solid #000;
`;
const BottomStatsItem = styled.p`
  width:8.95vw;
  margin:0;
  float: left;
  text-align:right;
  border-right:0.1vh solid #000;
  height: 2vw;
`;

class App extends Component {
  state = {
    leftItem: [300, 270, 240, 210, 180, 150, 120, 90, 60, 30],
    bottomItem: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  };
  
  render() {
    return (
      <>
        <Container>
          <LeftStats>
            {this.state.leftItem.map((task,i) => (
              <LeftStatsItem key={i}>{task}</LeftStatsItem>
            ))}
          </LeftStats>
          <BottomStats>
            {this.state.bottomItem.map((task,i) => (
              <BottomStatsItem key={i}>{task}</BottomStatsItem>
            ))}
          </BottomStats>
          <Charts/>
        </Container>
      </>
    );
  }
}

export default App;
