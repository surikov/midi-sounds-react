import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from './MIDISounds.jsx';

class App extends Component {
	clickLog(){
		console.log('clickLog');
		this.midiSounds.logStatus();
  }
  clickProp(){
		console.log('clickProp');
		this.midiSounds.showPropertiesDialog();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MIDI Sounds React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root"/>
        <p>
        <button type="button" onClick={this.clickLog.bind(this)} >Log status</button>
        </p>
        <p> <input type="checkbox" /></p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p><button type="button" onClick={this.clickProp.bind(this)} >Props</button></p>
      </div>
    );
  }
}

export default App;
