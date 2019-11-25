import React from 'react';
import {Row, Col, Panel, Button} from 'react-bootstrap';
import {Dialog, RaisedButton} from 'material-ui';

class Body extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginTop: 10
    }
  }

  render() {
    return (
      <div>
        <Row style={this.styles}>
          <Col xs={1}></Col>
          <Col xs={10}>
              <Panel>
                <Panel.Heading>
                  sampleカウンター
                  <span class="glyphicon glyphicon-remove" 
                    style={{float: 'right'}} 
                    title={'閉じる'}
                    onClick={() => this.props.actions.bodyToggleAction()}
                  />
                </Panel.Heading>
                <Panel.Body>
                  <h2>{this.props.reducer.value}</h2>
                  <Button onClick={this.props.actions.increment}>増加</Button>
                  <Button onClick={this.props.actions.decrement}>減少</Button>
                </Panel.Body>
              </Panel>
          </Col>
          <Col xs={1}></Col>
        </Row>
        <Row style={this.styles}>
          <Col xs={1}></Col>
          <Col xs={10}>
            <Panel>
              <Panel.Heading>
                sampleダイアログ
                <span class="glyphicon glyphicon-remove" 
                  style={{float: 'right'}} 
                  title={'閉じる'}
                  onClick={() => this.props.actions.bodyToggleAction()}
                />
              </Panel.Heading>
              <Panel.Body>
                <h4>material UI</h4>
                <RaisedButton label={'開く'} onClick={() => this.props.actions.dialogAction()} />
              </Panel.Body>
            </Panel>
            <Dialog open={this.props.modalReducer.dialogOpen} onClose={() => this.props.actions.dialogAction()}>
              開いたね！<br />
              <RaisedButton label={'閉じる'} onClick={() => this.props.actions.dialogAction()} />
            </Dialog>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Body;