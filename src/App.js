import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from './MIDISounds.jsx';
//const sample = { i: null };
const O = 12;
const C = 0;
const c = 1;
const D = 2;
const d = 3;
const E = 4
const F = 5;
const f = 6;
const G = 7;
const g = 8;
const A = 9;
const a = 10;
const B = 11;
const S1 = 5 * O + E;
const S2 = 4 * O + B;
const S3 = 4 * O + G;
const S4 = 4 * O + D;
const S5 = 3 * O + A;
const S6 = 3 * O + E;
const _Em = [
	S6 + 0
	, S5 + 2
	, S4 + 2
	, S3 + 0
	, S2 + 0
	, S1 + 0
];
const hihat=56;
const drum=2;
const snare=17;
const pedal=35;
const bass=437;
const hit=609;
const synth=521;//161;//518;//564;//544;
const notes=[
	[[pedal,drum      ],[[bass,O*2+C,1/16],[hit,O*5+C,1/4],[synth,O*3+C,1/1],[synth,O*4+C,1/1],[synth,O*3+G,1/1],[synth,O*5+C,1/2],[synth,O*5+d,3/8]]]//1/16
   ,[[pedal           ],[                                                                                                                           ]]
   ,[[hihat           ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*2+C,1/16],                [synth,O*5+d,1/8]                                                                        ]]
   ,[[                ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*2+C,1/16],                [synth,O*5+C,1/8]                                                                        ]]//
   ,[[pedal           ],[[bass,O*2+C,1/16],                [synth,O*3+C,1/1]                                                                        ]]
   ,[[hihat           ],[                                  [synth,O*5+d,1/8]                                                                        ]]
   ,[[                ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*2+C,1/16],                [synth,O*5+d,1/8]                                                                        ]]
   ,[[pedal           ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*2+C,1/16],[hit,O*4+G,1/8],[synth,O*5+G,1/8]                                                                        ]]
   ,[[                ],[[bass,O*2+C,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+G,1/16],[hit,O*5+a,1/4],[synth,O*3+G,1/1],[synth,O*4+G,1/1],[synth,O*5+d,3/1],[synth,O*5+a,3/8]                  ]]//16/16
   ,[[pedal           ],[                                                                                                                           ]]
   ,[[hihat           ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+G,1/16],                [synth,O*5+a,1/8]                                                                        ]]
   ,[[                ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+G,1/16],                [synth,O*5+G,1/8]                                                                        ]]
   ,[[pedal           ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+G,1/16],                [synth,O*5+a,1/8]                                                                        ]]
   ,[[                ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+G,1/16],                [synth,O*5+a,1/8]                                                                        ]]
   ,[[pedal           ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+G,1/16],[hit,O*5+d,1/8],[synth,O*6+D,1/8]                                                                        ]]
   ,[[                ],[[bass,O*1+G,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+a,1/16],[hit,O*5+F,1/1],[synth,O*3+a,2/1],[synth,O*4+a,2/1],[synth,O*5+F,2/1],[synth,O*6+F,2/1]                  ]]//32/16
   ,[[pedal           ],[                                                                                                                           ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+a,1/16]                                                                                                          ]]//48/16
   ,[[pedal           ],[                                                                                                                           ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum      ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal,drum,snare],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[pedal           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[hihat           ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ,[[                ],[[bass,O*1+a,1/16]                                                                                                          ]]
   ];
   
   
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selInsNum: 260
			,selDrNum:1
			//, masterVolume: 0.9
			,volDrum:0.7
			,volSnare:0.7
			,volHat:0.3
			,volPedal:0.8
			,volBass:1
			,volHit:0.5
			,volSynth:0.5
		};
	}
	clickLog() {
		console.log('clickLog');
		//this.midiSounds.logStatus();
		console.log(this.midiSounds.getProperties());
	}
	clickProp() {
		console.log('clickProp');
		this.midiSounds.showPropertiesDialog();
	}
	createSelectItems() {
		if (this.midiSounds) {
			if (!(this.items)) {
				console.log('createSelectItems');
				this.items = [];
				for (let i = 0; i < this.midiSounds.player.loader.instrumentKeys().length; i++) {
					this.items.push(<option key={i} value={i}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.instrumentInfo(i).title}</option>);
				}
			}
			return this.items;
		} else {
			console.log('can\'t createSelectItems');
			return [];
		}
	}
	createDrItems() {
		if (this.midiSounds) {
			if (!(this.dritems)) {
				console.log('createDrItems');
				this.dritems = [];
				for (let i = 0; i < this.midiSounds.player.loader.drumKeys().length; i++) {
					this.dritems.push(<option key={i} value={i}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.drumInfo(i).title}</option>);
				}
			}
			return this.dritems;
		} else {
			console.log('can\'t createDrItems');
			return [];
		}
	}
	componentDidMount() {
		//console.log('componentDidMount App');
		this.sendVolumes();
		this.setState({ initialized: true });
	}
	selectIns(e) {
		//console.log('selectIns', this, e);
		let select = e.target;
		let n = select.options[select.selectedIndex].getAttribute("value");
		this.setState({
			selInsNum: n
		});
		//console.log('select', n);
		this.midiSounds.cacheInstrument(n);
	}
	selectDr(e) {
		//console.log('selectDr', this, e);
		let select = e.target;
		let n = select.options[select.selectedIndex].getAttribute("value");
		this.setState({
			selDrNum: n
		});
		//console.log('select', n);
		this.midiSounds.cacheDrum(n);
	}
	playCurSingle() {
		this.midiSounds.playChordNow(this.state.selInsNum, [4 * O + A], 2.5);
	}
	playCurChord() {
		this.midiSounds.playChordNow(this.state.selInsNum, _Em, 2.5);
	}
	playCurDown() {
		this.midiSounds.playStrumDownNow(this.state.selInsNum, _Em, 2.5);
	}
	playCurUp() {
		this.midiSounds.playStrumUpNow(this.state.selInsNum, _Em, 2.5);
	}
	playCurSnap() {
		this.midiSounds.playSnapNow(this.state.selInsNum, _Em, 2.5);
	}
	playCurStrings() {
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 0, this.state.selInsNum, [S6], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 1, this.state.selInsNum, [S5], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 2, this.state.selInsNum, [S4], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 3, this.state.selInsNum, [S3], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 4, this.state.selInsNum, [S2], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 5, this.state.selInsNum, [S1], 1);

	}
	playCurBass() {
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 0, this.state.selInsNum, [S6 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 1, this.state.selInsNum, [S5 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 2, this.state.selInsNum, [S4 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.contextTime() + 0.5 * 3, this.state.selInsNum, [S3 - O], 1);

	}
	playDrSingle() {
		this.midiSounds.playDrumsNow([this.state.selDrNum]);
	}
	playDrTr() {
		this.midiSounds.playDrumsAt(this.midiSounds.contextTime() + 0.15 * 0,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.contextTime() + 0.15 * 2,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.contextTime() + 0.15 * 3,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.contextTime() + 0.15 * 4,[this.state.selDrNum]);
	}
	changeMasterQuiet() {
		this.midiSounds.setMasterVolume(0.3);
	}
	changeMasterLoud() {
		this.midiSounds.setMasterVolume(1);
	}
	changeMasterEchoStrong() {
		this.midiSounds.setEchoLevel(1);
	}
	changeMasterEchoNone() {
		this.midiSounds.setEchoLevel(0);
	}
	changeMasterPower() {
		this.midiSounds.setBand32(2);
		this.midiSounds.setBand64(4);
		this.midiSounds.setBand128(3);
		this.midiSounds.setBand256(-2);
		this.midiSounds.setBand512(-3);
		this.midiSounds.setBand1k(1);
		this.midiSounds.setBand2k(2);
		this.midiSounds.setBand4k(3);
		this.midiSounds.setBand8k(-3);
		this.midiSounds.setBand16k(1);
	}
	changeMasterDance() {
		this.midiSounds.setBand32(2);
		this.midiSounds.setBand64(2);
		this.midiSounds.setBand128(1);
		this.midiSounds.setBand256(-1);
		this.midiSounds.setBand512(5);
		this.midiSounds.setBand1k(4);
		this.midiSounds.setBand2k(4);
		this.midiSounds.setBand4k(2);
		this.midiSounds.setBand8k(-2);
		this.midiSounds.setBand16k(3);
	}
	changeMasterNone() {
		this.midiSounds.setBand32(0);
		this.midiSounds.setBand64(0);
		this.midiSounds.setBand128(0);
		this.midiSounds.setBand256(0);
		this.midiSounds.setBand512(0);
		this.midiSounds.setBand1k(0);
		this.midiSounds.setBand2k(0);
		this.midiSounds.setBand4k(0);
		this.midiSounds.setBand8k(0);
		this.midiSounds.setBand16k(0);
	}
	testPly(){
		//this.midiSounds.setInstrumentVolume(hit,0.1);
		//this.midiSounds.setInstrumentVolume(synth,0.1);
		//this.midiSounds.setInstrumentVolume(bass,0.1);
		//this.midiSounds.setDrumVolume(drum,0.1);
		//this.midiSounds.setDrumVolume(hihat,0.1);
		//this.midiSounds.setDrumVolume(pedal,0.1);
		//this.midiSounds.setDrumVolume(snare,0.1);
		//bass=this.state.selInsNum;
		
		
		if (this.started) {
			console.log('started already');
		} else {
			console.log('start now');
			this.bpm = 120;
			this.N = 4 * 60 / this.bpm;
			this.beatLen=1/16 * this.N;
			//this.pieceLen = 4 * this.N;
			this.nextBeat=0;
			this.started = true;
			this.startTime = this.midiSounds.contextTime() ;
			//console.log(this.beatLen,this.N);
			this.nextPiece();
			this.startTime = this.startTime + this.beatLen;//this.pieceLen;
			var me=this;
			//console.log('contextTime',me.midiSounds.contextTime(),'startTime',this.startTime,'beatLen',this.beatLen);
			this.interval=setInterval(function () {
				//console.log('.contextTime()',me.midiSounds.contextTime());
				if (me.midiSounds.contextTime() > me.startTime - me.beatLen/3) {
					
					me.nextPiece();
					me.startTime = me.startTime + me.beatLen;//me.pieceLen;
				}
			}, me.beatLen/4);
		}
	}
	testStp(){
		this.started = false;
		clearInterval(this.interval);
		this.midiSounds.player.cancelQueue(this.midiSounds.audioContext);
	}
	nextPiece() {
		
		//for (var n = 0; n < notes.length; n++) {
			if(this.nextBeat>=notes.length){
				this.nextBeat=0;
			}
			var beat = notes[this.nextBeat];
			//console.log('nextPiece',this.startTime ,  this.beatLen,beat[0]);
			//var drumsArr=beat[i][0];
			this.midiSounds.playDrumsAt(this.startTime +  this.beatLen,beat[0]);
			var insArr=beat[1];
			for(var i=0;i<insArr.length;i++){
				var noteArr=insArr[i];
				var num=noteArr[0];
				/*if(synth==num){
					num=this.state.selInsNum;
				}*/
				this.midiSounds.playChordAt(this.startTime +  this.beatLen,num,[noteArr[1]],noteArr[2]*this.N);
				//console.log(noteArr[0],[noteArr[1],noteArr[2]]);
			}
			this.nextBeat++;
			//console.log(n,beat);
			//for (var d = 0; d < drumsArr.length; d++) {
				//if (beat[i]) {
					//player.queueWaveTable(audioContext, beat[i].gain, beat[i].preset, startTime + n * beatLen , beat[i].pitch, beat[i].duration);
					
					//var drumsArr=beat[i][0];
					//console.log(i,drumsArr);

				//}
			//}
		//}
	}
	testChPly(){
		var guitar=269;
		var bt=[[],[[this.state.selInsNum,_Em,1/4,1]]];
		var data=[
			 [[],[[guitar,[S6+1,S5+3,S4+3],3/16,1]]]
			,[[],[]]
			,[[],[]]
			,[[],[[guitar,[S6+1,S5+3,S4+3],1/16,1]]]			
			,[[],[[guitar,[S6+1,S5+3,S4+3],2/16,2]]]
			,[[],[]]
			,[[],[[guitar,[S5+1,S4+3,S3+3],1/16,3]]]
			,[[],[[guitar,[S5+1,S4+3,S3+3],1/16,3]]]

			,[[],[[guitar,[S5+1,S4+3,S3+3],1/16,3]]]
			,[[],[[guitar,[S5+1,S4+3,S3+3],1/16,3]]]
			,[[],[[guitar,[S5+1,S4+3,S3+3],2/16,1]]]
			,[[],[]]
			,[[],[[guitar,[S5+1,S4+3,S3+3],2/16,1]]]
			,[[],[]]
			,[[],[[guitar,[S5+0,S4+0,S3+0],2/16,2]]]
			,[[],[]]

			,[[],[[guitar,[S6+4,S5+6,S4+6],3/16,1]]]
			,[[],[]]
			,[[],[]]
			,[[],[[guitar,[S6+4,S5+6,S4+6],1/16,1]]]
			,[[],[[guitar,[S6+4,S5+6,S4+6],2/16,2]]]
			,[[],[]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],1/16,3]]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],1/16,3]]]

			,[[],[[guitar,[S5+4,S4+6,S3+6],1/16,3]]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],1/16,3]]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],2/16,1]]]
			,[[],[]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],2/16,1]]]
			,[[],[]]
			,[[],[[guitar,[S5+4,S4+6,S3+6],2/16,2]]]
			,[[],[]]			
		];
		//this.midiSounds.playBeatAt(0,bt,150);
		this.midiSounds.startPlayLoop(data, 120, 1/16);
	}
	testChStp(){
		this.midiSounds.stopPlayLoop();
	}
	/*onPropertiesChanged(){
		console.log('onPropertiesChanged',this.midiSounds.getProperties());
		this.setState({masterVolume:this.midiSounds.getProperties().master})
		
	}*/
	onChangeTrackDrum(e){
		this.setState({volDrum: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackSnare(e){
		this.setState({volSnare: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackPedal(e){
		this.setState({volPedal: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackHat(e){
		this.setState({volHat: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackBass(e){
		this.setState({volBass: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackHit(e){
		this.setState({volHit: e.target.value});
		this.sendVolumes();
	}
	onChangeTrackSynth(e){
		this.setState({volSynth: e.target.value});
		this.sendVolumes();
	}
	sendVolumes(){
		this.testStp();
		this.midiSounds.setInstrumentVolume(synth,this.state.volSynth);
		this.midiSounds.setInstrumentVolume(hit,this.state.volHit);
		this.midiSounds.setInstrumentVolume(bass,this.state.volBass);
		this.midiSounds.setDrumVolume(hihat,this.state.volHat);
		this.midiSounds.setDrumVolume(pedal,this.state.volPedal);
		this.midiSounds.setDrumVolume(snare,this.state.volSnare);
		this.midiSounds.setDrumVolume(drum,this.state.volDrum);
	}
	render() {
		//console.log('App render',this.state.masterVolume);
		var r = (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
				</header>
				<h2>Component</h2>
				<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.state.selInsNum,bass,hit,synth]} drums={[this.state.selDrNum,hihat,drum,snare,pedal]} />
				<h2>Simple</h2>
				<select value={this.state.selInsNum} onChange={this.selectIns.bind(this)}>{this.createSelectItems()}</select>
				<p>
					<button onClick={this.playCurSingle.bind(this)}>Single E</button>
					<button onClick={this.playCurChord.bind(this)}>Chord Em</button>
					<button onClick={this.playCurDown.bind(this)}>Down Em</button>
					<button onClick={this.playCurUp.bind(this)}>Up Em</button>
					<button onClick={this.playCurSnap.bind(this)}>Snap Em</button>
					<button onClick={this.playCurStrings.bind(this)}>Guitar Strings</button>
					<button onClick={this.playCurBass.bind(this)}>Bass Strings</button>
				</p>
				<h2>Dr</h2>
				<select value={this.state.selDrNum} onChange={this.selectDr.bind(this)}>{this.createDrItems()}</select>
				<p>
					<button onClick={this.playDrSingle.bind(this)}>1</button>
					<button onClick={this.playDrTr.bind(this)}>2</button>
				</p>
				<h2>info</h2>
				<p>Info <button type="button" onClick={this.clickLog.bind(this)} >Log status</button></p>
				<h2>master</h2>
				<p>
					volume
					<button type='button' onClick={this.changeMasterQuiet.bind(this)} >Quiet</button>
					<button type='button' onClick={this.changeMasterLoud.bind(this)} >Loud</button>
					<br/>echo
					<button type='button' onClick={this.changeMasterEchoNone.bind(this)} >Off</button>
					<button type='button' onClick={this.changeMasterEchoStrong.bind(this)} >On</button>
					<br/>equalizer
					<button type='button' onClick={this.changeMasterNone.bind(this)} >None</button>
					<button type='button' onClick={this.changeMasterPower.bind(this)} >Power</button>
					<button type='button' onClick={this.changeMasterDance.bind(this)} >Dance</button>
				</p>
				<h2>tst</h2>
				<p>
					<button type="button" onClick={this.testPly.bind(this)} >P</button>
					<button type="button" onClick={this.testStp.bind(this)} >S</button>
				</p>
				<h2>Trks</h2>
				<p>
					Drum <input type='range' value={this.state.volDrum} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackDrum.bind(this)} />
					<br />Snare <input type='range' value={this.state.volSnare} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackSnare.bind(this)} />
					<br />Pedal <input type='range' value={this.state.volPedal} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackPedal.bind(this)} />
					<br />HiHat <input type='range' value={this.state.volHat} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackHat.bind(this)} />
					<br />Bass guitar <input type='range' value={this.state.volBass} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackBass.bind(this)} />
					<br />Orchestra Hit <input type='range' value={this.state.volHit} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackHit.bind(this)} />
					<br />Synth strings <input type='range' value={this.state.volSynth} min={0.0} max={1.0} step={0.1} onChange={this.onChangeTrackSynth.bind(this)} />
				</p>
				<h2>Chrd</h2>
				<p>
					<button type="button" onClick={this.testChPly.bind(this)} >P</button>
					<button type="button" onClick={this.testChStp.bind(this)} >S</button>
				</p>
			</div>
		);
		//console.log('done App render');
		return r;
	}
}

export default App;
