import React from 'react';
import {MenuItem, AppBar} from 'material-ui';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Drawer from '@material-ui/core/Drawer';
import InputText from './InputText';
import Calculator from './Calculator';
import Body from './Body';
import Twcas from './Twcas';
import Gotanda from './Gotanda';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      openStyle: {
        marginLeft: '240px'
      },
      closeStyle: {
        marginLeft: '-15px'
      },
      iconSize: {
        fontSize: '25px'
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
      <div>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Drawer
              docked={false}
              open={this.state.open}
              anchor="left"
              onClose={() => this.handleToggle()}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                style={{marginLeft: '230px', marginRight: '10px'}}
                onClick={() => this.handleToggle()}
                edge="start">
              {this.state.open ? 
              <ChevronLeftIcon style={this.state.iconSize} /> : <ChevronRightIcon style={this.state.iconSize} />}
              </IconButton>
              <Divider />
              <ListItem 
                onClick={() => this.props.actions.gotandaToggleAction()} 
                disabled={this.props.navBarReducer.isOpenGotanda}>
                  <ListItemIcon><SearchIcon style={this.state.iconSize} /></ListItemIcon>
                  <div style={{fontSize: '20px'}}>
                    五反田の情報を検索
                  </div>
              </ListItem>
              <ListItem 
                onClick={() => this.props.actions.inputTextToggleAction()} 
                disabled={this.props.navBarReducer.isOpenInputText}>
                  <ListItemIcon><RateReviewIcon style={this.state.iconSize} /></ListItemIcon>
                  <div style={{fontSize: '20px'}}>
                    メッセージを投稿
                  </div>
              </ListItem>
              <ListItem 
                onClick={() => this.props.actions.calculatorToggleAction()} 
                disabled={this.props.navBarReducer.isOpenCalculator}>
                  <ListItemIcon><PlusOneIcon style={this.state.iconSize} /></ListItemIcon>
                  <div style={{fontSize: '20px'}}>
                    電卓
                  </div>
              </ListItem>
            </Drawer>
            <AppBar 
              title="Component demonstration"
              onLeftIconButtonClick={() => this.handleToggle()}
              style={{position: 'fixed', top: 0, backgroundColor: 'rgb(0, 0, 0)', height: '80px', alignItems: 'center'}}>
            </AppBar>
            <div style={{marginTop: 90}}>
              {gotanda}
              {inputText}
              {calculator}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default NavBar;