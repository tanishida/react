import React from 'react';
import {AppBar, MenuItem, Drawer} from 'material-ui';
import InputText from './InputText';
import Calculator from './Calculator';

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    let inputText = this.props.navBarReducer.isOpenInputText ? <InputText {...this.props} /> : '';
    let calculator = this.props.navBarReducer.isOpenCalculator ? <Calculator {...this.props} /> : '';
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
        >
          <span class="glyphicon glyphicon-remove" 
                style={{marginTop: 10, marginLeft: 233}} 
                title={'閉じる'} 
                aria-hidden={false} 
                onClick={() => this.handleToggle()}>
          </span>
          <MenuItem onClick={() => this.props.actions.inputTextToggleAction()} disabled={this.props.navBarReducer.isOpenInputText}>TODO</MenuItem>
          <MenuItem onClick={() => this.props.actions.calculatorToggleAction()} disabled={this.props.navBarReducer.isOpenCalculator}>電卓</MenuItem>
        </Drawer>
        <AppBar 
          title="Component demonstration" 
          onLeftIconButtonClick={() => this.handleToggle()}
          style={{position: 'fixed', top: 0, backgroundColor: 'rgb(23, 0, 212)'}}>
        </AppBar>
        <div style={{marginTop: 70}}>
          {inputText}
          {calculator}
        </div>
      </div>
    );
  }
}

export default NavBar;