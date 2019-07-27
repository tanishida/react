import React from 'react';
import {AppBar, MenuItem, Drawer} from 'material-ui';
import InputText from './InputText';

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
        >
          <span class="glyphicon glyphicon-remove" 
                style={{marginTop: 10, marginLeft: 233}} 
                title={'閉じる'} 
                aria-hidden={true} 
                onClick={() => this.handleToggle()}>
          </span>
          <MenuItem>React</MenuItem>
          <MenuItem>Redux</MenuItem>
        </Drawer>
        <AppBar 
          title="Component demonstration" 
          onLeftIconButtonClick={() => this.handleToggle()}
          style={{position: 'fixed', top: 0, backgroundColor: 'rgb(23, 0, 212)'}}>
        </AppBar>
        <div style={{marginTop: 70}}>
          <InputText {...this.props} />
        </div>
      </div>
    );
  }
}

export default NavBar;