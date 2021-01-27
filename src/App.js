import './App.css';
import React from 'react';
import Settings from './components/Settings/Settings';
import Countdown from './components/Countdown/Countdown';
import ControlButtons from './components/ControlButtons/ControlButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rest: false,
      seconds: 9,
      workInterval: 30,
      restInterval: 5
    }
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    // this.countdownSeconds = this.countdownSeconds.bind(this);
    this.interval = 0;
  }

  // Press "Start" button
  handleStart() {
    this.interval = setInterval(this.countdownSeconds.bind(this), 1000);
  }

  // Press "Pause" button
  handlePause() {
    clearInterval(this.interval);
  }

  // Check for when seconds reach 0 and then switch state
  checkForStateChange() {
    if (this.state.seconds === 0 && this.state.rest === false) {
      console.log("End of work! Start rest");
      this.setState({
        seconds: this.state.restInterval,
        rest: true
      });
    } else if (this.state.seconds === 0 && this.state.rest === true) {
      console.log("End of rest! Start work");
      this.setState({
        seconds: this.state.workInterval,
        rest: false
      });
    }
  }

  // Countdown to 0
  countdownSeconds() {
    this.setState((currentState) => ({
      seconds: currentState.seconds - 1
    }));
    this.checkForStateChange();
  }



  render() {
    return (
      <div id="app">
        <h2>HIIT Timer</h2>
        <Settings />    
        <Countdown seconds={this.state.seconds} rest={this.state.rest}/>
        <ControlButtons onClickStart={this.handleStart} onClickPause={this.handlePause}/>
      </div>
    );
  }
}

export default App;
