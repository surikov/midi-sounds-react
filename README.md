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
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
      </div>
    );
  }
}

export default App;
```
### Main parts

```js
import MIDISounds from 'midi-sounds-react';
```

- import **midi-sounds-react** component

```html
<MIDISounds 
	ref={(ref) => (this.midiSounds = ref)} 
	appElementName="root" instruments={[3]} 
	/>
```

- insert component into page

```js
this.midiSounds.playChordNow(3, [60], 2.5);
```

- play sound

See [live example](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example1/build), download example from [https://github.com/surikov/midi-sounds-react-examples](https://github.com/surikov/midi-sounds-react-examples).

## Reference

### Component parameters

```html
<MIDISounds 
	ref={(ref) => (this.midiSounds = ref)} 
	appElementName="root" 
	instruments={[111]} 
	drums={[2,33]} 
	/>
```

- this.midiSounds - variable to use component from code
- appElementName - name of main div of application
- instruments - array of instruments to preload
- drums - array of drums to preload

### Initializing

MIDISounds will be initialized after first render. Use componentDidMount to rerender page with initialized component.

```js
componentDidMount() {
		console.log('rerender after init');
		this.setState(this.state);
	}
```

[Live example](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example4/build)

### Load instrument

Use this.midiSounds.cacheInstrument and this.midiSounds.cacheDrum to start instrument and drum loading.
Use this.midiSounds.player.loader.waitLoad to wait till all instruments and drums are loaded.

[Live example](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example3/build)

### Play continuous note sounds

Use this.midiSounds.player.queueWaveTable to start sound and return reference to envelope.
Use envelope.cancel() to stop sound.

[Live example](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example10/build)

## Functions

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
