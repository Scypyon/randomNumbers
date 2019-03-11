import React, { Component } from "react";
import Chart from "../../components/Chart";
import styled from "styled-components";

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

class Charts extends Component {
  state = {
    numbers: Array(100).fill(0),
    start_stop: true,
    timerInput: 50
  };

  handleInput = (e) =>{
    this.setState({
      timerInput: e.target.value
    })
  }

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
  };

  render() {
    return (
      <>
        {this.state.numbers.map((task, i) => (
          <Chart key={i} position={i} number={task} />
        ))}
        <StartStop
          onClick={() => this.startStopInterval(this.state.start_stop)}
        >
          {this.state.start_stop ? "START" : `STOP`}
        </StartStop>
        <TimerInput onChange={this.handleInput} type="text"/>
      </>
    );
  }
}

export default Charts;
