import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from './MIDISounds.jsx';

class App extends Component {
	constructor(props){
		super(props);
		console.log('App constructor');
		//this.instrumentItems=[];
		/*console.log(this);
		console.log(this.midiSounds);
		console.log(this.midiSounds.player);
		
		for (let i = 0; i < this.midiSounds.player.loader.instrumentKeys().length; i++) { 
			this.instrumentItems.push(<option>{i+': '+this.midiSounds.player.loader.instrumentInfo(i).title}</option>);   
		}*/
		console.log('done App constructor');
	}
	clickLog(){
		console.log('clickLog');
		this.midiSounds.logStatus();
  }
  clickProp(){
		console.log('clickProp');
		this.midiSounds.showPropertiesDialog();
  }
   createSelectItems() {
	   console.log('createSelectItems',this);
	   console.log('createSelectItems.midiSounds',this.midiSounds);
     let items = []; 
	 var arr=//this.midiSounds.player.loader.instrumentKeys();
	 ['sdfv','zdfb','zdfb','aer','w5g'];
        
     for (let i = 0; i < arr.length; i++) {             
          items.push(<option key={i} value={i}>{arr[i]}</option>);   
          //here I will be creating my options dynamically based on
          //what props are currently passed to the parent component
     }
     return items;
 }
  render() {
	  console.log('App render');
    var r= (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MIDI Sounds React</h1>
        </header>
		
		<h2>Component</h2>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root"/>
		
		
		
        <h2>Simple sound</h2>
		<select>{this.createSelectItems()}</select>
        <p>Play</p>
		
		
		
		
		
		
		<p>Info <button type="button" onClick={this.clickLog.bind(this)} >Log status</button></p>
      </div>
    );
	console.log('done App render');
	return r;
  }
}

export default App;
