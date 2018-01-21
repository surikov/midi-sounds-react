import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDrum: 21
			,drumLowTom:30
			,drumHighTom:50
			,drumSnare:15
			,drumBass:5
			,drumCrash:70
		};
	}
	componentDidMount() {
		console.log('componentDidMount App');
		this.setState({ initialized: true });
	}
	onSelectDrum(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			selectedDrum: n
		});
		this.midiSounds.cacheDrum(n);
	}
	createSelectItems() {
		if (this.midiSounds) {
			if (!(this.items)) {
				this.items = [];
				for (let i = 0; i < this.midiSounds.player.loader.drumKeys().length; i++) {
					this.items.push(<option key={i} value={i}>{'' + (i + 0) + '. ' + this.midiSounds.player.loader.drumInfo(i).title}</option>);
				}
			}
			return this.items;
		}
	}
	playTestDrum() {
		var when=this.midiSounds.contextTime();
		var b=0.15;
		this.midiSounds.playDrumsAt(when+b*0,[this.state.selectedDrum]);
		this.midiSounds.playDrumsAt(when+b*2,[this.state.selectedDrum]);
		this.midiSounds.playDrumsAt(when+b*3,[this.state.selectedDrum]);
		this.midiSounds.playDrumsAt(when+b*4,[this.state.selectedDrum]);
	}
	badumtss(){
		var when=this.midiSounds.contextTime();
		var b=0.11;
		this.midiSounds.playDrumsAt(when+b*0,[this.state.drumSnare,this.state.drumLowTom]);
		this.midiSounds.playDrumsAt(when+b*1,[this.state.drumSnare,this.state.drumHighTom]);
		this.midiSounds.playDrumsAt(when+b*3,[this.state.drumSnare,this.state.drumBass,this.state.drumCrash]);
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to midi-sounds-react example 5</h1>
        </header>
		<p className="App-intro">Play short fragment.</p>
		<p><button onClick={this.badumtss.bind(this)}>Ba Dum Tss</button></p>
        <p className="App-intro">Select drum and press Play.</p>		
		<p><select value={this.state.selectedDrum} onChange={this.onSelectDrum.bind(this)}>{this.createSelectItems()}</select></p>
		<p><button onClick={this.playTestDrum.bind(this)}>Play sequence</button></p>
		<p>Component</p>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" drums={[this.state.selectedDrum,this.state.drumLowTom,this.state.drumHighTom,this.state.drumSnare,this.state.drumBass,this.state.drumCrash]} />	
		<hr/>
		<p>Sources: <a href={'https://www.npmjs.com/package/midi-sounds-react'}>https://www.npmjs.com/package/midi-sounds-react</a></p>
      </div>
    );
  }
}

export default App;
