import React from 'react';
import ReactModal from 'react-modal';
import WebAudioFontPlayer from 'webaudiofont';

const STYLE = {
  MIDISoundsInfo: {
    height: '100%'
    , overflow: 'auto'
    , paddingRight: '3px'
  }
  , MIDISoundsClose: {
    textAlign: 'center'
    , borderTop: '1px solid silver'
  }
  , MIDISoundsClose2: {
    textAlign: 'right'
    , borderBottom: '1px solid silver'
  }
  , MIDISoundsEq: {
    writingMode: 'bt-lr' /* IE */
    , WebkitAppearance: 'slider-vertical' /* WebKit */
    , width: '0.5cm'
    , height: '4cm'
    , padding: '0 5px'
  }
  , MIDISoundsVl: {
    width: '95%'
  }
};
class MIDISounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
      //, onPropertiesChanged: this.props.onPropertiesChanged
      , appElementName: this.props.appElementName
      , instruments: this.props.instruments
      , drums: this.props.drums
      , master: 1.0
    };
    if (this.props.appElementName) {
      ReactModal.setAppElement('#' + this.props.appElementName);
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.midiStatus = "?";
    this.initAudio();
  }
  render() {
    //console.log('MIDISounds render', this.state.master);
    this.refreshCache();
    var r = (
      <div className="MIDISounds">
        <button className="MIDISounds" onClick={this.handleOpenModal}>M♩D♩Sounds</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" >
          <div style={STYLE.MIDISoundsInfo}>
            <p>Equalizer <button onClick={this.handleCloseModal}>Power</button>
              <button onClick={this.handleCloseModal}>Dance</button>
              <button onClick={this.handleCloseModal}>None</button></p>
            <p>
              <nobr>
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
                <input type='range' style={STYLE.MIDISoundsEq} />
              </nobr>
            </p>
            <p>Master volume <br /><input type='range' value={this.state.master} min={0.0} max={1.5} step={0.1} style={STYLE.MIDISoundsVl} onChange={this.onChangeMaster.bind(this)} /></p>
            <p>Echo level <br /><input type='range' style={STYLE.MIDISoundsVl} /></p>
            <p>MIDI input: initializing</p>
            <p style={STYLE.MIDISoundsClose}>
              &nbsp;<br />
              <button onClick={this.resetAudio.bind(this)}>Reset</button>
              <button onClick={this.handleCloseModal}>Close</button>
            </p>
          </div>
        </ReactModal>
      </div>
    );
    return r;
  }
  onChangeMaster(e) {
    let n = e.target.value;
    this.setMasterVolume(n);
    /*if (this.state.onPropertiesChanged) {
      console.log('MIDISounds onChangeMaster', this.state.master);
      this.state.onPropertiesChanged();
    }
    console.log('MIDISounds onChangeMaster done', this.state.master);*/
  }
  refreshCache() {
    if (this.state.instruments) {
      for (var i = 0; i < this.state.instruments.length; i++) {
        this.cacheInstrument(this.state.instruments[i]);
      }
    }
    if (this.state.drums) {
      for (var k = 0; k < this.state.drums.length; k++) {
        this.cacheDrum(this.state.drums[k]);
      }
    }
  }
  getProperties() {
    return {
      master: this.echo.output.gain.value * 1
    };
  }
  showPropertiesDialog() {
    this.handleOpenModal();
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  initAudio() {
    console.log('initAudio M♩D♩Sounds');
    if (this.player) {
      if (this.audioContext) {
        this.player.cancelQueue(this.audioContext);
      }
    }
    var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.target = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.echo = this.player.createReverberator(this.audioContext);
    this.echo.output.connect(this.target);
    this.equalizer.output.connect(this.echo.input);
    this.volumesInstrument = [];
    this.volumesDrum = [];
    this.midiNotes = [];
  }
  resetAudio() {
    this.initAudio();
    this.handleCloseModal();
  }
  cacheInstrument(n) {
    var info = this.player.loader.instrumentInfo(n);
    if (window[info.variable]) {
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
    });
  }
  cacheDrum(n) {
    var info = this.player.loader.drumInfo(n);
    if (window[info.variable]) {
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
    });
  }
  playDrum(when, drum) {
    var info = this.player.loader.drumInfo(drum);
    if (window[info.variable]) {
      var pitch = window[info.variable].zones[0].keyRangeLow;
      var volume = this.volumeDrumAdjust(drum);
      this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitch, 3, volume);
    } else {
      this.cacheDrum(drum);
    }
  }
  playDrumsAt(when, drums) {
    for (var i = 0; i < drums.length; i++) {
      this.playDrum(when, drums[i]);
    }
  }

  volumeInstrumentAdjust(instrument) {
    if (!(this.volumesInstrument[instrument] === undefined)) {
      return this.volumesInstrument[instrument];
    }
    return 1;
  }
  volumeDrumAdjust(drum) {
    //console.log('volumeDrumAdjust',drum,this.volumesDrum);
    if (!(this.volumesDrum[drum] === undefined)) {
      return this.volumesDrum[drum];
    }
    return 1;
  }
  playChordAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueChord(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playStrumUpAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueStrumUp(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playStrumDownAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueStrumDown(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  playSnapAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if (window[info.variable]) {
      this.player.queueSnap(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
  midNoteOn(pitch, velocity) {
    this.midiNoteOff(pitch);
    if (this.miditone) {
      var envelope = this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.tone, 0, pitch, 123456789, velocity / 100);
      var note = {
        pitch: pitch,
        envelope: envelope
      };
      this.midiNotes.push(note);
    }
  }
  midiNoteOff(pitch) {
    for (var i = 0; i < this.midiNotes.length; i++) {
      if (this.midiNotes[i].pitch === pitch) {
        if (this.midiNotes[i].envelope) {
          this.midiNotes[i].envelope.cancel();
        }
        this.midiNotes.splice(i, 1);
        return;
      }
    }
  }
  midiOnMIDImessage(event) {
    var data = event.data;
    //var cmd = data[0] >> 4;
    //var channel = data[0] & 0xf;
    var type = data[0] & 0xf0;
    var pitch = data[1];
    var velocity = data[2];
    switch (type) {
      case 144:
        this.midNoteOn(pitch, velocity);
        //logKeys();
        break;
      case 128:
        this.midiNoteOff(pitch);
        //logKeys();
        break;
      default:
        break;
    }
  }
  midiOnStateChange(event) {
    console.log('midiOnStateChange', event);
    //msg.innerHTML = event.port.manufacturer + ' ' + event.port.name + ' ' + event.port.state;
  }
  requestMIDIAccessSuccess(midi) {
    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      console.log('midi input', input);
      input.value.onmidimessage = this.midiOnMIDImessage;
    }
    midi.onstatechange = this.midiOnStateChange;
  }
  requestMIDIAccessFailure(e) {
    console.log('requestMIDIAccessFailure', e);
  }
  startMIDIInput() {
    if (navigator.requestMIDIAccess) {
      console.log('navigator.requestMIDIAccess ok');
      navigator.requestMIDIAccess().then(this.requestMIDIAccessSuccess, this.requestMIDIAccessFailure);
    } else {
      console.log('navigator.requestMIDIAccess undefined');
      //msg.innerHTML = 'navigator.requestMIDIAccess undefined';
    }
  }
  playDrumsNow(drums) {
    this.playDrumsAt(0, drums);
  }
  playChordNow(instrument, pitches, duration) {
    this.playChordAt(0, instrument, pitches, duration);
  }
  playStrumUpNow(instrument, pitches, duration) {
    this.playStrumUpAt(0, instrument, pitches, duration);
  }
  playStrumDownNow(instrument, pitches, duration) {
    this.playStrumDownAt(0, instrument, pitches, duration);
  }
  playSnapNow(instrument, pitches, duration) {
    this.playSnapAt(0, instrument, pitches, duration);
  }
  setMasterVolume(volume) {
    this.echo.output.gain.setTargetAtTime(volume, 0, 0.0001);
    this.setState({
      master: volume
    });
  }
  setInstrumentVolume(instrument, volume) {
    this.volumesInstrument[instrument] = volume;
  }
  setDrumVolume(drum, volume) {
    this.volumesDrum[drum] = volume;
  }
  setEchoLevel(value) {
    this.echo.wet.gain.setTargetAtTime(value, 0, 0.0001);
  }
  setBand32(level) {
    this.equalizer.band32.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand64(level) {
    this.equalizer.band64.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand128(level) {
    this.equalizer.band128.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand256(level) {
    this.equalizer.band256.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand512(level) {
    this.equalizer.band512.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand1k(level) {
    this.equalizer.band1k.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand2k(level) {
    this.equalizer.band2k.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand4k(level) {
    this.equalizer.band4k.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand8k(level) {
    this.equalizer.band8k.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setBand16k(level) {
    this.equalizer.band16k.gain.setTargetAtTime(level, 0, 0.0001);
  }
  setKeyboardInstrument(n) {
    var info = this.player.loader.instrumentInfo(n);
    if (window[info.variable]) {
      this.miditone = window[info.variable];
      return;
    }
    this.player.loader.startLoad(this.audioContext, info.url, info.variable);
    this.player.loader.waitLoad(function () {
      console.log('cached', n, info.title);
      this.miditone = window[info.variable];
    });
  }
}

export default MIDISounds;
