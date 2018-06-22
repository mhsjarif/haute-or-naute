import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sandal from './components/sandal/sandal'
import Heel from './components/heel/heel'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandal: 0,
      heel: 0,
      total: 0
    }
  }

  handleSandal = () => {
    this.setState({sandal: this.state.sandal + 1});
    this.setState({total:this.state.total + 1});
  }

  handleHeel = () => {
    this.setState({heel:this.state.heel + 1});
    this.setState({total:this.state.total + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HAUTE or NAUTE</h1>
        </header>
        <h2 className="prompt">Which pair is HAUTE?</h2>
        <div className="main">
          <Sandal 
            handleSandal={this.handleSandal}
            sandal={this.state.sandal}
            total={this.state.total}
          />
          <Heel 
            handleHeel={this.handleHeel}
            heel={this.state.heel}
            total={this.state.total}
          />
        </div>
      </div>
    );
  }
}

export default App;
