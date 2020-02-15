import React from 'react';
import {Panel, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import GotandaSearch from './GotandaSearch';
import GotandaRegist from './GotandaRegist';
import image from '../image/IMG_20180430_025849.jpg';
import Grid from '@material-ui/core/Grid';
import TextsmsIcon from '@material-ui/icons/Textsms';
import EditIcon from '@material-ui/icons/Edit';

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
                    <TextsmsIcon style={{ marginBottom: '-2px'}} />一覧
                    </NavItem>
                    <NavItem eventKey="2" title="五反田の情報を登録">
                    <EditIcon style={{ marginBottom: '-2px'}} />登録
                    </NavItem>
                </Nav>
                <GotandaSearch 
                  activeKey={this.state.activeKey}
                  inputSearchResultAction={this.props.actions.inputSearchResultAction}
                  gotandaList={this.props.gotandaSearchReducer.gotandaList}
                  inputDetailInfoAction={this.props.actions.inputDetailInfoAction}
                  gotandaToggleAction={this.props.actions.gotandaToggleAction}
                  deleteGotandaRegistAction={this.props.actions.deleteGotandaRegistAction}
                  gotandaDetailToggleAction={this.props.actions.gotandaDetailToggleAction}
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
                  password={this.props.gotandaRegistReducer.password}
                  inputPasswordAction={this.props.actions.inputPasswordAction}
                  inputSearchResultAction={this.props.actions.inputSearchResultAction}
                  deleteGotandaRegistAction={this.props.actions.deleteGotandaRegistAction}
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