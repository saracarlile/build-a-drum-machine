import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad';
//https://stackoverflow.com/questions/47155448/how-to-handle-onkeydown-event-on-div-in-reactjs


function DisplayPanel(props) {
  return <div id="controls">
      <div>
        <p id="display">{props.display}</p>
      </div>
    </div>;
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
  }

setDisplay = (string) => {
  this.setState({ display: string });
}




  sounds = [
    { id: "Q", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3", string: "Chord 1", key: 1, keycode: 81 },
    { id: "W", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3", string: "Chord 2", key: 2, keycode: 87},
    { id: "E", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3", string: "Chord 3", key: 3, keycode: 69 },
    { id: "A", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3", string: "Chord 4", key: 4, keycode: 65 },
    { id: "S", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3", string: "Chord 5", key: 5, keycode: 83 },
    { id: "D", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3", string: "Chord 6", key: 6, keycode: 68 },
    { id: "Z", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3", string: "Chord 7", key: 7, keycode: 90 },
    { id: "X", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3", string: "Chord 8", key: 8, keycode: 88 },
    { id: "C", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3", string: "Chord 9", key: 9, keycode: 67 }
  ]

  


  render() {
    return (
      <div id="container">
        <main id="drum-machine">
          <Keypad sounds={this.sounds} setDisplay={this.setDisplay} />
          <DisplayPanel display={this.state.display}  />
        </main>
      </div>
    );
  }
}

export default App;


