import './App.css';
import React from 'react';
import Settings from './components/Settings/Settings';
import Countdown from './components/Countdown/Countdown';
import ControlButtons from './components/ControlButtons/ControlButtons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 7,
      rest: false,
      workInterval: 30,
      restInterval: 5,
      isThereATimer: false
    }
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    // this.handleReset = this.handleReset.bind(this);

    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleRestChange = this.handleRestChange.bind(this);

    this.timer = false;
  }

  // Settings - handle work change
  handleWorkChange(event) {
    this.setState({ workInterval: event.target.value })
  }

  // Settings - handle rest change
  handleRestChange(event) {
    this.setState({ restInterval: event.target.value })
  }

  // Press "Start" button
  handleStart() {
    this.timer = setInterval(this.countdownSeconds.bind(this), 1000);
    this.setState({ isThereATimer: true });
  }

  // Press "Pause" button
  handlePause() {
    console.log("Pressed pause");
    clearInterval(this.timer);
    this.setState({ isThereATimer: false });
    
  }

  // Play sound inserted by Audio component
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  // Check for when seconds reach 0 and then switch state
  checkForStateChange() {
    if (this.state.seconds === 0 && this.state.rest === false) {
      // Make a noise
      this.playAudio();
      
      // Change state to REST mode
      this.setState({
        seconds: this.state.restInterval,
        rest: true
      });
    } else if (this.state.seconds === 0 && this.state.rest === true) {
      // Make a noise
      this.playAudio();
      // Change state to WORK mode
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
      <div className="app">
        <div className="app--container">
          <h2>HIIT Timer</h2>
          <Settings 
            workInterval={this.state.workInterval} 
            restInterval={this.state.restInterval}
            handleWork={this.handleWorkChange} 
            handleRest={this.handleRestChange} 
          />    
          <Countdown 
            seconds={this.state.seconds} 
            rest={this.state.rest}
          />
          <ControlButtons 
            isThereATimer={this.state.isThereATimer}
            onClickStart={this.handleStart} 
            onClickPause={this.handlePause}
          />
          <audio className="audio-element">
            <source src="./chimes.wav" type="audio/wav"></source>
          </audio>
        </div>
      </div>
    );
  }
}

export default App;
