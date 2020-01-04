import React from 'react';
import {Row, Col, Panel, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {RaisedButton, Card} from 'material-ui';
import api from '../api';
import config from '../config';
import GotandaSearch from './GotandaSearch';
import GotandaRegist from './GotandaRegist';
import image from '../image/IMG_20180430_025849.jpg';

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
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
          <Panel>
              <Panel.Body>
                <img style={{ width: '100%', height: '100%', marginBottom: '10px'}} src={image} alt='五反田' />
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={e => this.handleSelect(e)}>
                    <NavItem eventKey="1"　title="五反田の情報を検索">
                    検索
                    </NavItem>
                    <NavItem eventKey="2" title="五反田の情報を登録">
                    登録
                    </NavItem>
                    <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Action</MenuItem>
                    <MenuItem eventKey="4.2">Another action</MenuItem>
                    <MenuItem eventKey="4.3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <GotandaSearch activeKey={this.state.activeKey}/>
                <GotandaRegist activeKey={this.state.activeKey}/>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Gotanda;