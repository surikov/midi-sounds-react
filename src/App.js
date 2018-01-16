import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from './MIDISounds.jsx';
const sample = { i: null };
class App extends Component {
	constructor(props) {
		super(props);
		console.log('App constructor');
		this.state = { value: 2 };
		//this.instrumentItems=[];
		/*console.log(this);
		console.log(this.midiSounds);
		console.log(this.midiSounds.player);
		
		for (let i = 0; i < this.midiSounds.player.loader.instrumentKeys().length; i++) { 
			this.instrumentItems.push(<option>{i+': '+this.midiSounds.player.loader.instrumentInfo(i).title}</option>);   
		}*/
		console.log('done App constructor');
	}
	clickLog() {
		console.log('clickLog');
		this.midiSounds.logStatus();
	}
	componentWillReceiveProps(nextProps: IWorkItemTypeDropdownProps, nextContext: any) {
		this.setState({
			value: ""
		});
	}
	clickProp() {
		console.log('clickProp');
		this.midiSounds.showPropertiesDialog();
	}
	createSelectItems() {
		console.log('createSelectItems', this);
		//console.log('createSelectItems.midiSounds',this.midiSounds);
		let items = [];
		//var arr = [];//me.midiSounds.player.loader.instrumentKeys();;
		//['sdfv','zdfb','zdfb','aer','w5g'];
		//if (this.state) {
		//if (this.state.instruments) { arr = this.state.instruments; }
		//}
		if (this.midiSounds) {
			var arr=[];
			for (var i = 0; i < this.midiSounds.player.loader.instrumentKeys().length; i++) {
				arr.push('' + (i + 0) + '. ' + this.midiSounds.player.loader.instrumentInfo(i).title);
			  }
			for (let i = 0; i < arr.length; i++) {
				items.push(<option key={i} value={i}>{arr[i]}</option>);
				//here I will be creating my options dynamically based on
				//what props are currently passed to the parent component
			}
		}
		return items;
	}
	componentDidMount() {
		console.log('componentDidMount App');
		this.setState({ initialized: true });
	}
	readInstruments() {
		console.log('readInstruments');
		this.setState({ initialized: true });
	}
	selectIns(e) {//: React.FormEvent){
		console.log('selectIns', this, e);
		let select = e.target;// as HTMLSelectElement;
		let n = select.options[select.selectedIndex].getAttribute("value");

		this.setState({
			value: n
		});
		console.log('select', n);
		this.midiSounds.cacheInstrument(n);
		//this.props.workItemTypeChanged(e);
		/*var m=this.midiSounds;
		var info=m.player.loader.instrumentInfo(n)
				console.log('selectins',n,info);
				
				m.player.loader.startLoad(m.audioContext, info.url, info.variable);
				
				m.player.loader.waitLoad(function () {
					console.log('done',info.variable);
					//currentGuitar=window[info.variable];
					sample.i=window[info.variable];
					//m.player.cancelQueue(m.audioContext);
					//started=false;
					//start();
					console.log('done',window[info.variable]);
				});*/
	}
	playCur() {
		//this.midiSounds.player.queueWaveTable(this.midiSounds.audioContext, this.midiSounds.audioContext.destination, sample.i, 0, 55, 3.5);
		this.midiSounds.playChordNow(this.state.value, [55], 2.5);
		//this.midiSounds.setInstrumentVolume(this.state.value,0.25);
		//console.log(this.state.value);
	}
	render() {
		console.log('App render');
		var r = (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to MIDI Sounds React</h1>
				</header>

				<h2>Component</h2>
				<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" afterInit222={this.readInstruments.bind(this)} instruments={[4, 44, 444]} drums={[2, 22, 222]} />



				<h2>Simple sound</h2>
				<select value={this.state.value} onChange={this.selectIns.bind(this)}>{this.createSelectItems()}</select>
				<p><a href='#' onClick={this.playCur.bind(this)}>Play</a></p>






				<p>Info <button type="button" onClick={this.clickLog.bind(this)} >Log status</button></p>
			</div>
		);
		console.log('done App render');
		return r;
	}
}

export default App;
