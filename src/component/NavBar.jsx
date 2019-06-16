import React from 'react';
import {AppBar, MenuItem, Drawer} from 'material-ui';
import Body from './Body';

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
          docked={true}
          open={this.state.open}
        >
          <span class="glyphicon glyphicon-remove" 
                style={{marginTop: 10, marginLeft: 233}} 
                title={'閉じる'} 
                aria-hidden="true" 
                onClick={() => this.handleToggle()}>
          </span>
          <MenuItem>React</MenuItem>
          <MenuItem>Redux</MenuItem>
        </Drawer>
        <AppBar title="test" onLeftIconButtonClick={() => this.handleToggle()}>
        </AppBar>
        <Body {...this.props} />
      </div>
    );
  }
}

export default NavBar;