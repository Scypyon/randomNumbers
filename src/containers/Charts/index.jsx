import React, { Component } from "react";
import Chart from "../../components/Chart";

class Charts extends Component {
  state = {
    numbers: Array(100).fill(0)
  };
  componentDidMount = () => {
    this.interval = setInterval(this.addRandomNumber, 50);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
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
      </>
    );
  }
}

export default Charts;
