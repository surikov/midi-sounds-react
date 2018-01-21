import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDrum: 21
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
		this.midiSounds.playDrumsNow([this.state.selectedDrum]);
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to midi-sounds-react example 4</h1>
        </header>
        <p className="App-intro">Select drum and press Play.</p>		
		<p><select value={this.state.selectedDrum} onChange={this.onSelectDrum.bind(this)}>{this.createSelectItems()}</select></p>
		<p><button onClick={this.playTestDrum.bind(this)}>Play</button></p>
		<p>Component</p>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" drums={[21]} />	
		<hr/>
		<p>Sources: <a href={'https://www.npmjs.com/package/midi-sounds-react'}>https://www.npmjs.com/package/midi-sounds-react</a></p>
      </div>
    );
  }
}

export default App;
