import React, { Component } from 'react';
import ReactModal from 'react-modal';
import WebAudioFontPlayer from 'webaudiofont';

const STYLE = {
  MIDISoundsInfo: {
    height:'100%'
    ,overflow: 'auto'
    ,paddingRight:'3px'
  }
  ,MIDISoundsClose: {
    textAlign: 'right'
    ,borderTop: '1px solid silver'
  }
  ,MIDISoundsClose2: {
    textAlign: 'right'
    ,borderBottom: '1px solid silver'
  }
  ,MIDISoundsEq: {
    writingMode: 'bt-lr' /* IE */
    ,WebkitAppearance: 'slider-vertical' /* WebKit */
    ,width: '0.5cm'
    ,height: '4cm'
    ,padding: '0 5px'
  }
  ,MIDISoundsVl: {
    width: '95%'
  }
};
class MIDISounds extends React.Component {
  constructor(props){
    super(props);
    console.log('constructor MIDISounds',props);
    this.state = {
      showModal: false
      ,appElementName:this.props.appElementName
	  ,sendInstruments:this.props.sendInstruments
    };
    if(this.props.appElementName){
      ReactModal.setAppElement('#'+this.props.appElementName);
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
	this.initAudio();
	console.log('done constructor MIDISounds',props);
  }
  componentDidMount() {
	  console.log('componentDidMount MIDISounds');
	  if(this.props.sendInstruments){
		//this.props.sendInstruments(['qqq','wwww','ddd']);
		var arr=[];
		for(var i = 0; i < this.player.loader.instrumentKeys().length; i++) {
				arr.push(''+(i+1)+'. '+this.player.loader.instrumentInfo(i).title);
			}
		this.props.sendInstruments(arr);
		}
  }
  componentWillUnmount() {
	  console.log('componentWillUnmount MIDISounds');
  }
  getInitialState() { 
	console.log('getInitialState MIDISounds');
    return { 
        instruments: []
		,drums:[]
    }; 
  }
  render() {
    console.log('MIDISounds render');
    var r= (
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
            <p>Master volume <br/><input type='range' style={STYLE.MIDISoundsVl} /></p>
            <p>Echo level <br/><input type='range' style={STYLE.MIDISoundsVl} /></p>
            <p>MIDI input: initializing</p>
          </div>
        </ReactModal>
      </div>
    );
	console.log('done MIDISounds render');
	return r;
  }
  logStatus() {
    console.log('logStatus M♩D♩Sounds');
  }
  showPropertiesDialog() {
    console.log('showPropertiesDialog M♩D♩Sounds');
    this.handleOpenModal();
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  initAudio(){
	  console.log('initAudio M♩D♩Sounds');
	  var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
	  this.audioContext = new AudioContextFunc();
	  this.target = this.audioContext.destination;
	  this.player=new WebAudioFontPlayer();
  }
  resetAudio(){
	  this.initAudio();
	  this.handleCloseModal();
  }
}

export default MIDISounds;
