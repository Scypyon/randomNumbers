import React, { Component } from "react";
import Chart from "./components/Chart";
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
  padding-top: 0.5vw;
`;

const LeftStatsItem = styled.p`
  height:${({length})=>89.5/length}vh;
  margin:0
  border-top:0.1vh solid #000;
`;
const BottomStatsItem = styled.p`
  width: 8.95vw;
  margin: 0;
  float: left;
  text-align: right;
  border-right: 0.1vh solid #000;
  height: 2vw;
`;

const StartStop = styled.button`
  position: absolute;
  top: -5vh;
  left: -5vw;
`;

const TimerInput = styled.input`
  position: absolute;
  top: -5vh;
  left: -2vw;
`;

class App extends Component {
  state = {
    leftItem: [10],
    bottomItem: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    numbers: Array(100).fill(0),
    start_stop: true,
    timerInput: 50
  };

  handleInput = e => {
    this.setState({
      timerInput: e.target.value
    });
  };

  startStopInterval = start_stop => {
    if (start_stop) {
      this.interval = setInterval(this.addRandomNumber, this.state.timerInput);
      this.setState({
        start_stop: false
      });
    } else {
      clearInterval(this.interval);
      this.setState({
        start_stop: true
      });
    }
  };

  addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const numbers = [...this.state.numbers];
    numbers[randomNumber]++;
    this.setState({
      numbers
    });

    const leftItem = [...this.state.leftItem]

    this.state.numbers.forEach(task=>{
      if(task>=leftItem[0]){
        leftItem.unshift(leftItem[0]+10)
        this.setState({
          leftItem,
        })
      }
    })
  };

  render() {
    return (
      <Container>
        <LeftStats>
          {this.state.leftItem.map((task, i) => (
            <LeftStatsItem length={this.state.leftItem.length} key={i}>
              {task}
            </LeftStatsItem>
          ))}
        </LeftStats>
        <BottomStats>
          {this.state.bottomItem.map((task, i) => (
            <BottomStatsItem key={i}>{task}</BottomStatsItem>
          ))}
        </BottomStats>
        {this.state.numbers.map((task, i) => (
          <Chart length={this.state.leftItem.length} key={i} position={i} number={task} />
        ))}
        <StartStop
          onClick={() => this.startStopInterval(this.state.start_stop)}
        >
          {this.state.start_stop ? "START" : `STOP`}
        </StartStop>
        <TimerInput onChange={this.handleInput} type="text" />
      </Container>
    );
  }
}

export default App;
