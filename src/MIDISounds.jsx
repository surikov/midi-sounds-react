import React, { Component } from 'react';
import ReactModal from 'react-modal';
import WebAudioFontPlayer from 'webaudiofont';

const STYLE = {
  MIDISoundsInfo: {
    height: '100%'
    , overflow: 'auto'
    , paddingRight: '3px'
  }
  , MIDISoundsClose: {
    textAlign: 'right'
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
    console.log('constructor MIDISounds', props);
    this.state = {
      showModal: false
      , appElementName: this.props.appElementName
     // , afterInit: this.props.afterInit
      , instruments: this.props.instruments
      , drums: this.props.drums
      ,master:1.0
    };
    if (this.props.appElementName) {
      ReactModal.setAppElement('#' + this.props.appElementName);
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.initAudio();
    console.log('done constructor MIDISounds', props);
  }
  componentDidMount() {
    console.log('componentDidMount MIDISounds');
    //if (this.props.afterInit) {
      //this.props.sendInstruments(['qqq','wwww','ddd']);
      /*var arr = [];
      for (var i = 0; i < this.player.loader.instrumentKeys().length; i++) {
        arr.push('' + (i + 0) + '. ' + this.player.loader.instrumentInfo(i).title);
      }
      this.props.sendInstruments(arr);*/
      //this.props.afterInit();
    //}
  }
  componentWillUnmount() {
    console.log('componentWillUnmount MIDISounds');
  }
  /*getInitialState() {
    console.log('getInitialState MIDISounds');
    return {
      instruments: []
      , drums: []
    };
  }*/
  render() {
    console.log('MIDISounds render');
    this.refreshCache();
    var r = (
      <div className="MIDISounds">
        <button className="MIDISounds" onClick={this.handleOpenModal}>M♩D♩Sounds</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" >
          <div style={STYLE.MIDISoundsInfo}>
            <p style={STYLE.MIDISoundsClose2}><a href='#' onClick={this.resetAudio.bind(this)}>Reset</a> | <a href='https://surikov.github.io/midi-sounds-react/'>Help</a> | <a href='#' onClick={this.handleCloseModal}>Close</a></p>
            <p>Equalizer <a href='#' onClick={this.handleCloseModal}>Power</a> | <a href='#' onClick={this.handleCloseModal}>Dance</a> | <a href='#' onClick={this.handleCloseModal}>None</a></p>
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
            <p>Master volume <br /><input type='range' value={this.state.master} min={0.0} max={1.5} step={0.1}  style={STYLE.MIDISoundsVl} onChange={this.onChangeMaster.bind(this)}/></p>
            <p>Echo level <br /><input type='range' style={STYLE.MIDISoundsVl} /></p>
            <p>MIDI input: initializing</p>
          </div>
        </ReactModal>
      </div>
    );
    console.log('done MIDISounds render');
    return r;
  }
  onChangeMaster(e){
    let n = e.target.value;
    //console.log('onChangeMaster',n,this);
  	
    this.setMasterVolume(n);
  }
  refreshCache() {
    if (this.state.instruments) {
      for (var i = 0; i < this.state.instruments.length; i++) {
        this.cacheInstrument(this.state.instruments[i]);
      }
    }
    if (this.state.drums) {
      for (var i = 0; i < this.state.drums.length; i++) {
        this.cacheDrum(this.state.drums[i]);
      }
    }
  }
  logStatus() {
    console.log('logStatus M♩D♩Sounds');
  }
  showPropertiesDialog() {
    console.log('showPropertiesDialog M♩D♩Sounds');
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
    var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.target = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.echo = this.player.createReverberator(this.audioContext);
    this.echo.output.connect(this.target);
    this.equalizer.output.connect(this.echo.input);
    this.volumesInstrument = [];
    this.volumesDrums = [];
    //this.cacheInstrument(685);
    //this.cacheDrum(67);
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
  playDrumsAt(when, drums) {

  }
  playChordAt(when, instrument, pitches, duration) {
    var info = this.player.loader.instrumentInfo(instrument);
    if(window[info.variable]){
      var volume=1;
      if(this.volumesInstrument[instrument]===undefined){
        //
      }else{
        volume=this.volumesInstrument[instrument];
      }
      this.player.queueChord(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, volume);
    }else{
      this.cacheInstrument(instrument);
    }
  }
  playStrumUpAt(when, instrument, pitches, duration) {

  }
  playStrumDownAt(when, instrument, pitches, duration) {

  }
  playSnapAt(when, instrument, pitches, duration) {

  }
  playDrumsNow(drums) {

  }
  playChordNow(instrument, pitches, duration) {
    this.playChordAt(0, instrument, pitches, duration);
  }
  playStrumUpNow(instrument, pitches, duration) {

  }
  playStrumDownNow(instrument, pitches, duration) {

  }
  playSnapNow(instrument, pitches, duration) {

  }
  setMasterVolume(volume) {
    this.setState({
			master: volume
    });
    this.echo.output.gain.setTargetAtTime(volume, 0, 0.0001);
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
}

export default MIDISounds;
