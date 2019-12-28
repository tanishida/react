import React from 'react';
import {AppBar, MenuItem, Drawer} from 'material-ui';
import InputText from './InputText';
import Calculator from './Calculator';
import Body from './Body';
import Twcas from './Twcas';
import Gotanda from './Gotanda';

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      open: true,
      openStyle: {
        marginLeft: '240px'
      },
      closeStyle: {
        marginLeft: '-15px'
      }      
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    let inputText = this.props.navBarReducer.isOpenInputText ? <InputText {...this.props} /> : '';
    let twcas = this.props.navBarReducer.isOpenTwcas ? <Twcas {...this.props} /> : '';
    let calculator = this.props.navBarReducer.isOpenCalculator ? <Calculator {...this.props} /> : '';
    let body = this.props.navBarReducer.isOpenBody ? <Body {...this.props} /> : '';
    let gotanda = this.props.navBarReducer.isOpenGotanda ? <Gotanda {...this.props} /> : '';
    return (
      <div style={this.state.open ? this.state.openStyle : this.state.closeStyle}>
        <Drawer
          docked={true}
          open={this.state.open}
        >
          <MenuItem onClick={() => this.props.actions.gotandaToggleAction()} disabled={this.props.navBarReducer.isOpenGotanda}>五反田</MenuItem>
          <MenuItem onClick={() => this.props.actions.inputTextToggleAction()} disabled={this.props.navBarReducer.isOpenInputText}>メッセージ</MenuItem>
          <MenuItem onClick={() => this.props.actions.calculatorToggleAction()} disabled={this.props.navBarReducer.isOpenCalculator}>電卓</MenuItem>
        </Drawer>
        <AppBar 
          title="Component demonstration"
          onLeftIconButtonClick={() => this.handleToggle()}
          style={{position: 'fixed', top: 0, backgroundColor: 'rgb(0, 0, 0)'}}>
        </AppBar>
        <div style={{marginTop: 70}}>
          {gotanda}
          {inputText}
          {calculator}
        </div>
      </div>
    );
  }
}

export default NavBar;