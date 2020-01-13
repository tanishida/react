import React from 'react';
import {Panel, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import GotandaSearch from './GotandaSearch';
import GotandaRegist from './GotandaRegist';
import image from '../image/IMG_20180430_025849.jpg';
import Grid from '@material-ui/core/Grid';

class Gotanda extends React.Component {
  constructor() {
    super()
    this.state = {
        activeKey: "1"
      }
  }
  handleSelect(eventKey) {
    this.setState({activeKey: eventKey});
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid xs={1}></Grid>
          <Grid item xs={10}>
          <Panel>
              <Panel.Body>
                <img style={{ width: '100%', height: '130px', marginBottom: '10px'}} src={image} alt='五反田' />
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={e => this.handleSelect(e)}>
                    <NavItem eventKey="1"　title="五反田の情報を検索">
                    検索
                    </NavItem>
                    <NavItem eventKey="2" title="五反田の情報を登録">
                    登録
                    </NavItem>
                </Nav>
                <GotandaSearch 
                  activeKey={this.state.activeKey}
                  inputSearchResultAction={this.props.actions.inputSearchResultAction}
                  gotandaList={this.props.gotandaSearchReducer.gotandaList}
                  dialogOpen={this.props.modalReducer.dialogOpen}
                  dialogAction={this.props.actions.dialogAction}
                />
                <GotandaRegist
                  activeKey={this.state.activeKey} 
                  radioList={this.props.gotandaRegistReducer.radioList}
                  radioAction={this.props.actions.radioRedistAction}
                  shopName={this.props.gotandaRegistReducer.shopName}
                  inputShopNameAction={this.props.actions.inputShopNameAction}
                  handleName={this.props.gotandaRegistReducer.handleName}
                  inputHandleNameAction={this.props.actions.inputHandleNameAction}
                  date={this.props.gotandaRegistReducer.date}
                  inputDateAction={this.props.actions.inputDateAction}
                  comment={this.props.gotandaRegistReducer.comment}
                  inputCommentAction={this.props.actions.inputCommentAction}
                />
              </Panel.Body>
            </Panel>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Gotanda;