# Component for [React](https://reactjs.org/).

You can use 1500 digitized musical instruments and percussions from free sound library to build musical application with React framework.

## Examples

- [how preload and play an instrument](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example1/build)
- [how preload and play a drum](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example2/build)
- [how to create selectable list of instruments and delay for loading](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example3/build)
- [how to create selectable list of drum](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example4/build)
- [how to play short musical fragments](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example5/build)
- [how to create sequencer](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example6/build)
- [how to use struming](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example7/build)
- [how to use struming for guitar music](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example8/build)
- [how to programmatically change properties of sound](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example9/build)
- [how to attach sounds to piano keys](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example10/build)
- [how to use independed channels](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example11/build)
  
[Sources of all examples](https://github.com/surikov/midi-sounds-react-examples/tree/master/examples)

## Tutorial

Open Node.js command line window.

Create React application from [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

Modify package.json to add dependency to **midi-sounds-react** component

```
{
  "name": "my-test",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://myserver",
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0",
    "midi-sounds-react": "^1.2.45"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

Install dependencies

```
npm install
```

Start application

```
npm start
```

Navigate browser to http://localhost:3000

Modify src/App.js to add an Component and button.

```js
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
```
Main parts

import MIDISounds from 'midi-sounds-react';

- import **midi-sounds-react** component














Dependencies package.json

- "midi-sounds-react": "^1.2.45"

Component

- <MIDISounds ref={(ref) => (this.midiSoundsDrums = ref)} appElementName="root" instruments={[overdrive,palmMute,bassGuitar]} drums={[bassDrum,snare,hiHat,cymbal]} />
  
Functions

- contextTime()
- cancelQueue()

Drums

- cacheDrum(n)
- setDrumVolume(drum, volume)
- playDrumsAt(when, drums)
- playDrumsNow(drums)

Instruments

- cacheInstrument(n)
- setInstrumentVolume(instrument, volume)
- playChordNow(instrument, pitches, duration)
- playChordAt(when, instrument, pitches, duration)
- playStrumUpNow(instrument, pitches, duration)
- playStrumUpAt(when, instrument, pitches, duration)
- playStrumDownAt(when, instrument, pitches, duration)
- playStrumDownNow(instrument, pitches, duration)
- playSnapNow(instrument, pitches, duration)
- playSnapAt(when, instrument, pitches, duration)

Properties

- setMasterVolume(n)
- setEchoLevel(value)

Equalizer

- setBand32(level)
- setBand64(level)
- setBand128(level)
- setBand256(level)
- setBand512(level)
- setBand1k(level)
- setBand2k(level)
- setBand4k(level)
- setBand8k(level)
- setBand16k(level)

Loops

- playBeatAt(when, beat, bpm)
- startPlayLoop(beats, bpm, density, fromBeat)
- stopPlayLoop()
