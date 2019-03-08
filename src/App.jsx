import React, { Component } from "react";
import Chart from "./components/Chart";
import styled from 'styled-components';

const Container = styled.div`
  width:100vw;
  height:100vh;
  border-left:5px solid black;
  border-bottom:5px solid black;
  margin:30px;
  postion:relative;
`

const LeftStats = styled.div`
  width:3vw;
  height:100vh;
  position:absolute;
  left:0;
  top:0;
  float:left;
`

const BottomStats = styled.div`
  position:absolute;
  left:0;
  bottom:-10vh;
  height:3vh;
  width:100vw;
`

const LeftStatsItem = styled.p`
  margin:8vh 0;
`
const BottomStatsItem = styled.p`
  margin:0 4vw;
  float:left;
`

class App extends Component {
  state = {
    numbers: Array(100).fill(0)
  };
  componentDidMount = () => {
    this.interval = setInterval(this.addRandomNumber, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const numbers = [...this.state.numbers]
    numbers[randomNumber]++
    this.setState({
      numbers,
    })
  };

  render() {
    console.log(this.state.numbers);
    return (
      <>
        <Container>
          <LeftStats>
            <LeftStatsItem>1000</LeftStatsItem>
            <LeftStatsItem>900</LeftStatsItem>
            <LeftStatsItem>800</LeftStatsItem>
            <LeftStatsItem>700</LeftStatsItem>
            <LeftStatsItem>600</LeftStatsItem>
            <LeftStatsItem>500</LeftStatsItem>
            <LeftStatsItem>400</LeftStatsItem>
            <LeftStatsItem>200</LeftStatsItem>
            <LeftStatsItem>100</LeftStatsItem>
            <LeftStatsItem>0</LeftStatsItem>
          </LeftStats>
          <BottomStats>
          <BottomStatsItem>10</BottomStatsItem>
            <BottomStatsItem>20</BottomStatsItem>
            <BottomStatsItem>30</BottomStatsItem>
            <BottomStatsItem>40</BottomStatsItem>
            <BottomStatsItem>50</BottomStatsItem>
            <BottomStatsItem>60</BottomStatsItem>
            <BottomStatsItem>70</BottomStatsItem>
            <BottomStatsItem>80</BottomStatsItem>
            <BottomStatsItem>90</BottomStatsItem>
            <BottomStatsItem>100</BottomStatsItem>
          </BottomStats>
          <Chart tab={this.state.numbers}></Chart>
        </Container>
      </>
    )
  }
}

export default App;
