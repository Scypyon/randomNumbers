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
    const tab = [...this.state.numbers]
    tab.forEach(task=>{
      if(task.id === RandomNumber){
        task.repeats = task.repeats +1
      }
    })
    this.setState({
      numbers: tab
    })
  };

  render() {
    console.log(this.state.numbers);
    return (
      <>
        <h1>działa</h1>
      </>
    );
  }
}

export default App;
