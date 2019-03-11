import React, { Component } from "react";
import Chart from ".././Chart";
import styled from "styled-components";

const LeftStats = styled.div`
  width: 3vw;
  height: 90vh;
  position: absolute;
  left: -3vw;
  top: 0;
  float: left;
  margin-bottom: 0.5vh;
`;

const LeftStatsItem = styled.p`
  height:${({ length }) => 89.5 / length}vh;
  margin:0
  border-top:0.1vh solid #000;
  transition: height 1s ease;
`;

const StartStop = styled.button`
  position: absolute;
  top: -5vh;
  left: -5.5vw;
`;

const TimerInput = styled.input`
  position: absolute;
  top: -5vh;
  left: -2vw;
`;

const DrawingNumbers = styled.p`
  position: absolute;
  top: -6.2vh;
  left: 13vw;
`;

class Charts extends Component {
  state = {
    leftItem: [10],
    numbers: Array(100).fill(0),
    startStop: true,
    timerInput: 50,
    drawingNumbers: 0
  };

  handleInput = e => {
    this.setState({
      timerInput: e.target.value
    });
  };

  startStopInterval = startStop => {
    if (startStop) {
      this.interval = setInterval(this.addRandomNumber, this.state.timerInput);
      this.setState({
        startStop: false
      });
    } else {
      clearInterval(this.interval);
      this.setState({
        startStop: true
      });
    }
  };

  addRandomNumber = () => {
    this.setState(prevState => {
      const randomNumber = Math.floor(Math.random() * 100);
      const numbers = [...prevState.numbers];
      numbers[randomNumber]++;

      const leftItem = [...prevState.leftItem];
      if (numbers[randomNumber] > leftItem[0]) {
        leftItem.unshift(leftItem[0] + 10);
      }
      return {
        numbers,
        leftItem,
        drawingNumbers: prevState.drawingNumbers + 1
      };
    });
  };

  render() {
    return (
      <>
        <LeftStats>
          {this.state.leftItem.map((task, i) => (
            <LeftStatsItem length={this.state.leftItem.length} key={i}>
              {task}
            </LeftStatsItem>
          ))}
        </LeftStats>
        {this.state.numbers.map((task, i) => (
          <Chart
            length={this.state.leftItem.length}
            key={i}
            position={i}
            number={task}
          />
        ))}
        <StartStop onClick={() => this.startStopInterval(this.state.startStop)}>
          {this.state.startStop ? "START" : `STOP`}
        </StartStop>
        <TimerInput onChange={this.handleInput} type="text" />
        <DrawingNumbers>{this.state.drawingNumbers}</DrawingNumbers>
      </>
    );
  }
}

export default Charts;
