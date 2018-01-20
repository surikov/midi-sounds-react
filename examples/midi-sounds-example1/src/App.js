import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {
  playTestInstrument() {
		this.midiSounds.playChordNow(3, [60], 2.5);
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to midi-sounds-react example 1</h1>
        </header>
        <p className="App-intro">Press Play to play instrument sound.</p>					
		<p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
		<p>Component</p>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
		<hr/>
		<p>Sources: <a href={'https://www.npmjs.com/package/midi-sounds-react'}>https://www.npmjs.com/package/midi-sounds-react</a></p>
      </div>
    );
  }
}

export default App;
