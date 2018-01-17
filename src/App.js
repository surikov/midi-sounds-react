import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from './MIDISounds.jsx';
//const sample = { i: null };
const O = 12;
const C = 0;
const D = 2;
const E = 4
const F = 5;
const G = 7;
const A = 9;
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
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selInsNum: 260
			,selDrNum:1
			, masterVolume: 0.9
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
		this.setState({ initialized: true });
	}
	selectIns(e) {
		console.log('selectIns', this, e);
		let select = e.target;
		let n = select.options[select.selectedIndex].getAttribute("value");
		this.setState({
			selInsNum: n
		});
		console.log('select', n);
		this.midiSounds.cacheInstrument(n);
	}
	selectDr(e) {
		console.log('selectDr', this, e);
		let select = e.target;
		let n = select.options[select.selectedIndex].getAttribute("value");
		this.setState({
			selDrNum: n
		});
		console.log('select', n);
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
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 0, this.state.selInsNum, [S6], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 1, this.state.selInsNum, [S5], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 2, this.state.selInsNum, [S4], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 3, this.state.selInsNum, [S3], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 4, this.state.selInsNum, [S2], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 5, this.state.selInsNum, [S1], 1);

	}
	playCurBass() {
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 0, this.state.selInsNum, [S6 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 1, this.state.selInsNum, [S5 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 2, this.state.selInsNum, [S4 - O], 1);
		this.midiSounds.playChordAt(this.midiSounds.audioContext.currentTime + 0.5 * 3, this.state.selInsNum, [S3 - O], 1);

	}
	playDrSingle() {
		this.midiSounds.playDrumsNow([this.state.selDrNum]);
	}
	playDrTr() {
		this.midiSounds.playDrumsAt(this.midiSounds.audioContext.currentTime + 0.15 * 0,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.audioContext.currentTime + 0.15 * 2,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.audioContext.currentTime + 0.15 * 3,[this.state.selDrNum]);
		this.midiSounds.playDrumsAt(this.midiSounds.audioContext.currentTime + 0.15 * 4,[this.state.selDrNum]);
	}
	changeMasterVolume(e) {
		let n = e.target.value;
		this.midiSounds.setMasterVolume(n);
		this.setState({
			masterVolume: n
		});
	}
	/*onPropertiesChanged(){
		console.log('onPropertiesChanged',this.midiSounds.getProperties());
		this.setState({masterVolume:this.midiSounds.getProperties().master})
		
	}*/
	render() {
		//console.log('App render',this.state.masterVolume);
		var r = (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
				</header>
				<h2>Component</h2>
				<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[]} drums={[]} />
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
				<p>Info <button type="button" onClick={this.clickLog.bind(this)} >Log status</button></p>
				<p>Master <input type='range' value={this.state.masterVolume} min={0.0} max={1.5} step={0.1} onChange={this.changeMasterVolume.bind(this)} /></p>
			</div>
		);
		//console.log('done App render');
		return r;
	}
}

export default App;
