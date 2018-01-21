import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drumSnare:15
			,drumBass:5
			,drumHiHat:35
			,drumClap:24
			,tracks:[
				[true,false,false,false,false,false,false,true,true,false,true,false,false,false,true,false]
				,[false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false]
				,[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false]
				,[true,false,true,false,true,false,true,false,true,false,true,false,true,false,true,false]
			]
		};
		this.state.data=[]
		
	}
	componentDidMount() {
		this.setState({ initialized: true });
	}
	onSelectDrumSnare(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			drumSnare: n
		});
		this.midiSounds.cacheDrum(n);
		this.midiSounds.stopPlayLoop();
	}
	onSelectDrumBass(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			drumBass: n
		});
		this.midiSounds.cacheDrum(n);
		this.midiSounds.stopPlayLoop();
	}
	onSelectDrumHiHat(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			drumHiHat: n
		});
		this.midiSounds.cacheDrum(n);
		this.midiSounds.stopPlayLoop();
	}
	onSelectDrumClap(e){
		var list=e.target;
		let n = list.options[list.selectedIndex].getAttribute("value");
		this.setState({
			drumClap: n
		});
		this.midiSounds.cacheDrum(n);
		this.midiSounds.stopPlayLoop();
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

	playLoop(){
		var data=[];
		for(var i=0;i<16;i++){
			var drums=[];
			if(this.state.tracks[0][i]){drums.push(this.state.drumBass);}
			if(this.state.tracks[1][i]){drums.push(this.state.drumSnare);}
			if(this.state.tracks[2][i]){drums.push(this.state.drumClap);}
			if(this.state.tracks[3][i]){drums.push(this.state.drumHiHat);}
			var beat=[drums,[]];
			data.push(beat);
		}
		this.midiSounds.startPlayLoop(data, 120, 1/16);
	}
	stopLoop(){
		this.midiSounds.stopPlayLoop();
	}
	toggleDrum(track,step){
		this.midiSounds.stopPlayLoop();
		var a=this.state.tracks;
		a[track][step]=!a[track][step];
		this.setState({tracks:a});
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to midi-sounds-react example 6</h1>
        </header>
		<p className="App-intro">Define beat and press Play.</p>		
		<table align='center'>
			<tbody>
				<tr>
					<td><select value={this.state.drumBass} onChange={this.onSelectDrumBass.bind(this)}>{this.createSelectItems()}</select></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][0]} onChange={(e)=>this.toggleDrum(0,0)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][1]} onChange={(e)=>this.toggleDrum(0,1)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][2]} onChange={(e)=>this.toggleDrum(0,2)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][3]} onChange={(e)=>this.toggleDrum(0,3)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][4]} onChange={(e)=>this.toggleDrum(0,4)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][5]} onChange={(e)=>this.toggleDrum(0,5)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][6]} onChange={(e)=>this.toggleDrum(0,6)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][7]} onChange={(e)=>this.toggleDrum(0,7)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][8]} onChange={(e)=>this.toggleDrum(0,8)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][9]} onChange={(e)=>this.toggleDrum(0,9)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][10]} onChange={(e)=>this.toggleDrum(0,10)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][11]} onChange={(e)=>this.toggleDrum(0,11)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][12]} onChange={(e)=>this.toggleDrum(0,12)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][13]} onChange={(e)=>this.toggleDrum(0,13)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][14]} onChange={(e)=>this.toggleDrum(0,14)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[0][15]} onChange={(e)=>this.toggleDrum(0,15)} /></td>					
				</tr>
				<tr>
					<td><select value={this.state.drumSnare} onChange={this.onSelectDrumSnare.bind(this)}>{this.createSelectItems()}</select></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][0]} onChange={(e)=>this.toggleDrum(1,0)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][1]} onChange={(e)=>this.toggleDrum(1,1)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][2]} onChange={(e)=>this.toggleDrum(1,2)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][3]} onChange={(e)=>this.toggleDrum(1,3)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][4]} onChange={(e)=>this.toggleDrum(1,4)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][5]} onChange={(e)=>this.toggleDrum(1,5)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][6]} onChange={(e)=>this.toggleDrum(1,6)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][7]} onChange={(e)=>this.toggleDrum(1,7)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][8]} onChange={(e)=>this.toggleDrum(1,8)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][9]} onChange={(e)=>this.toggleDrum(1,9)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][10]} onChange={(e)=>this.toggleDrum(1,10)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][11]} onChange={(e)=>this.toggleDrum(1,11)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][12]} onChange={(e)=>this.toggleDrum(1,12)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][13]} onChange={(e)=>this.toggleDrum(1,13)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][14]} onChange={(e)=>this.toggleDrum(1,14)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[1][15]} onChange={(e)=>this.toggleDrum(1,15)} /></td>					
				</tr>
				<tr>
					<td><select value={this.state.drumClap} onChange={this.onSelectDrumClap.bind(this)}>{this.createSelectItems()}</select></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][0]} onChange={(e)=>this.toggleDrum(2,0)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][1]} onChange={(e)=>this.toggleDrum(2,1)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][2]} onChange={(e)=>this.toggleDrum(2,2)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][3]} onChange={(e)=>this.toggleDrum(2,3)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][4]} onChange={(e)=>this.toggleDrum(2,4)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][5]} onChange={(e)=>this.toggleDrum(2,5)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][6]} onChange={(e)=>this.toggleDrum(2,6)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][7]} onChange={(e)=>this.toggleDrum(2,7)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][8]} onChange={(e)=>this.toggleDrum(2,8)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][9]} onChange={(e)=>this.toggleDrum(2,9)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][10]} onChange={(e)=>this.toggleDrum(2,10)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][11]} onChange={(e)=>this.toggleDrum(2,11)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][12]} onChange={(e)=>this.toggleDrum(2,12)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][13]} onChange={(e)=>this.toggleDrum(2,13)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][14]} onChange={(e)=>this.toggleDrum(2,14)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[2][15]} onChange={(e)=>this.toggleDrum(2,15)} /></td>					
				</tr>
				<tr>
					<td><select value={this.state.drumHiHat} onChange={this.onSelectDrumHiHat.bind(this)}>{this.createSelectItems()}</select></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][0]} onChange={(e)=>this.toggleDrum(3,0)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][1]} onChange={(e)=>this.toggleDrum(3,1)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][2]} onChange={(e)=>this.toggleDrum(3,2)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][3]} onChange={(e)=>this.toggleDrum(3,3)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][4]} onChange={(e)=>this.toggleDrum(3,4)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][5]} onChange={(e)=>this.toggleDrum(3,5)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][6]} onChange={(e)=>this.toggleDrum(3,6)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][7]} onChange={(e)=>this.toggleDrum(3,7)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][8]} onChange={(e)=>this.toggleDrum(3,8)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][9]} onChange={(e)=>this.toggleDrum(3,9)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][10]} onChange={(e)=>this.toggleDrum(3,10)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][11]} onChange={(e)=>this.toggleDrum(3,11)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][12]} onChange={(e)=>this.toggleDrum(3,12)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][13]} onChange={(e)=>this.toggleDrum(3,13)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][14]} onChange={(e)=>this.toggleDrum(3,14)} /></td>
					<td><input type="checkbox" defaultChecked={this.state.tracks[3][15]} onChange={(e)=>this.toggleDrum(3,15)} /></td>					
				</tr>
			</tbody>
		</table>
		<p>
			<button onClick={this.playLoop.bind(this)}>Play loop</button>
			<button onClick={this.stopLoop.bind(this)}>Stop loop</button>
		</p>
		<p>Component</p>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" 
			drums={[this.state.drumSnare
					,this.state.drumBass
					,this.state.drumHiHat
					,this.state.drumClap
				]} 
			/>	
		<hr/>
		<p>Sources: <a href={'https://www.npmjs.com/package/midi-sounds-react'}>https://www.npmjs.com/package/midi-sounds-react</a></p>
      </div>
    );
  }
}

export default App;
