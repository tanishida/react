import React from 'react';
import RenderList from './RenderList';
import {Row, Col, Panel} from 'react-bootstrap';
import {TextField, RaisedButton} from 'material-ui';

class InputText extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginLeft: 5
    }
  }
  onChangeText(e) {
    this.setState({
      text: e.target.value
    })
    this.props.actions.setAction(e.target.value);
  }
  onAddText() {
    const formValue = this.props.inputTextReducer.text;
    if (formValue !== '' && formValue !== undefined) {
      this.props.actions.addAction(formValue);
      this.props.actions.formDeleteAction();
    }
  }
  onDeleteAction() {
    this.props.actions.deleteAction();
  }
  onEnter(e) {
    const ENTER = 13;
    if (e.keyCode === ENTER) {
      this.onAddText();
    }
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
                  label="name"
                  value={this.props.inputTextReducer.text}
                  onChange={e => this.onChangeText(e)}
                  hintText="入力"
                  floatingLabelText="リストを追加"
                  fullWidth={true}
                  onKeyDown={e => this.onEnter(e)}
                />
              <RenderList {...this.props} />
              <div style={this.styles}>
                <RaisedButton secondary={true} label={'追加'} onClick={() => this.onAddText()} />
                <RaisedButton label={'くりあ'} onClick={() => this.onDeleteAction()} />
              </div>
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