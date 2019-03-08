import React, { Component } from "react";

class App extends Component {
  state = {
    numbers: [{ id: 0, repeats: 0 }]
  };

  componentDidMount = () => {
    const numbers = [];
    for (let i = 0; i <= 100; i++) {
      numbers.push({ id: i, repeats: 0 });
    }
    this.setState({
      numbers
    });
  };

  generateNumbers = () => {
    const RandomNumber = Math.floor(Math.random() * 100);
    console.log(RandomNumber);
  };

  render() {
    setInterval(this.generateNumbers, 3000);
    console.log(this.state.numbers);
    return (
      <>
        <h1>działa</h1>
      </>
    );
  }
}

export default App;
