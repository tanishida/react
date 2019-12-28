import React from 'react';
import {Row, Col, Panel, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {RaisedButton, Card} from 'material-ui';
import api from '../api';
import config from '../config';
import GotandaSearch from './GotandaSearch';

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
                <span class="glyphicon glyphicon-remove" 
                    style={{float: 'right'}} 
                    title={'閉じる'}
                    onClick={() => this.props.actions.gotandaToggleAction()}
                  />
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={e => this.handleSelect(e)}>
                    <NavItem eventKey="1">
                    検索
                    </NavItem>
                    <NavItem eventKey="2" title="Item">
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