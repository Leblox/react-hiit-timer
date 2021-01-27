import React, { Component } from "react"

class AudioPlay extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          {/* <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source> */}
          <source src="%PUBLIC_URL%/public/chimes.wav"></source>
        </audio>
      </div>
    )
  }
}
export default AudioPlay;