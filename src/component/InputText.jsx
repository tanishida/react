import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import {TextField} from 'material-ui';

class InputText extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginBottom: 10
    }
  }
  onChengeText(e) {
    const value = e.target.value;
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Panel>
              <Panel.Heading>sampleテキストエリア</Panel.Heading>
              <Panel.Body>
                <TextField
                label="Name"
                value={this.props.reducer.text}
                onChenge={e => this.onChengeText(e)}
                margin="normal"
              />
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </div>
    );
  }
}

export default InputText;