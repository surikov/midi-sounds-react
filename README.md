# Component for [React](https://reactjs.org/).

You can use 1500 digitized musical instruments and percussions from free sound library to build musical application with React framework.

## Examples

- [example 1](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example1/build)
  - preload and play an instrument
- [example 2](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example2/build)
  - preload and play a drum
- [example 3](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example3/build)
  - selectable list of instruments
  - load instrumen in realtime
- [example 4](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example4/build)
  - selectable list of drums
  - load drum in realtime
- [example 5](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example5/build)
  - play short musical fragments
- [example 6](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example6/build)
  - sequencer for drums
- [example 7](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example7/build)
  - struming
- [example 8](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example8/build)
  - struming in loop
- [example 9](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example9/build)
  - change properties
- [example 10](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example10/build)
  - piano
- [example 11](https://surikov.github.io/midi-sounds-react-examples/examples/midi-sounds-example11/build)
  - independed channels
  
[Sources of examples](https://github.com/surikov/midi-sounds-react-examples/tree/master/examples)

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
