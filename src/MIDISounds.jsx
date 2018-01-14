import React, { Component } from 'react';
import ReactModal from 'react-modal';
//ReactModal.setAppElement('#root');
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
    ,width: '7%'
    ,height: '4cm'
    ,padding: '0 5px'
  }
  ,MIDISoundsVl: {
    width: '90%'
  }
};
class MIDISounds extends React.Component {
  constructor(props){
    super(props);
    console.log('constructor MIDISounds',props);
    this.state = {
      showModal: false
      ,appElementName:this.props.appElementName
    };
    if(this.props.appElementName){
      ReactModal.setAppElement('#'+this.props.appElementName);
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  render() {
    console.log('MIDISounds render');
    return (
      <div className="MIDISounds">
        
        <button className="MIDISounds" onClick={this.handleOpenModal}>M♩D♩Sounds</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example" >
          <div style={STYLE.MIDISoundsInfo}>
            <p style={STYLE.MIDISoundsClose2}><a href='#' onClick={this.handleCloseModal}>Reset</a> | <a href='#' onClick={this.handleCloseModal}>Help</a> | <a href='#' onClick={this.handleCloseModal}>Close</a></p>
            <p>Equalizer <a href='#' onClick={this.handleCloseModal}>Power</a> | <a href='#' onClick={this.handleCloseModal}>Dance</a> | <a href='#' onClick={this.handleCloseModal}>None</a></p>
            <p>
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
            </p>
            <p>Master volume <br/><input type='range' style={STYLE.MIDISoundsVl} /></p>
            <p>Echo level <br/><input type='range' style={STYLE.MIDISoundsVl} /></p>
            
          </div>
        </ReactModal>
      </div>
    );
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
}

export default MIDISounds;
