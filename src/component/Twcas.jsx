import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
import api from '../api';
import config from '../config';

class Twcas extends React.Component {
  constructor() {
    super()
  }
  authorization() {
    location.href = config.GET_TWCAS;
  }
  componentDidMount() {
    console.log(location.hash);
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <Panel>
              <Panel.Heading>
                ツイキャス
                <span class="glyphicon glyphicon-remove" 
                  style={{float: 'right'}} 
                  title={'閉じる'}
                  onClick={() => this.props.actions.twcasToggleAction()}
                />
              </Panel.Heading>
              <Panel.Body>
                <RaisedButton label={'認証'} onClick={() => this.authorization()} />
                <RaisedButton label={'検索'} onClick={() => api.getAuthorization(location.hash)} />
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Twcas;