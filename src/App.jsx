import React, { Component } from "react";
import Chart from "./components/Chart";
import styled from 'styled-components';

const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

class App extends Component {
  state = {
    numbers: []
  };
  numbers = [];
  componentDidMount = () => {
    for (let i = 0; i <= 100; i++) {
      this.numbers.push(0);
    }
    this.setState({
      numbers: this.numbers
    });
    this.interval = setInterval(this.generateNumbers, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  generateNumbers = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    this.state.numbers.forEach((_, i) => {
      if (i === randomNumber) {
        this.numbers[i]++;
      }
    });
    this.setState({
      numbers: this.numbers
    });
  };

  render() {
    console.log(this.state.numbers);
    return (
      <Container>
        {this.state.numbers.map(task => (
          <Chart task={task} />
        ))}
      </Container>
    );
  }
}

export default App;
