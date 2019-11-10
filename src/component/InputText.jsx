import React from 'react';
import RenderList from './RenderList';
import {Row, Col, Panel} from 'react-bootstrap';
import {TextField, RaisedButton, Snackbar} from 'material-ui';

class InputText extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginLeft: 5,
      marginTop: 10
    }
  }
  onChangeText(e) {
    this.props.actions.setAction(e.target.value);
  }
  onChangeName(e) {
    this.props.actions.setNameAction(e.target.value);
  }
  onAddText() {
    const formName = this.props.inputTextReducer.name;
    const formValue = this.props.inputTextReducer.text;
    if (formName === '') {
      return;
    }
    if (formValue !== '' && formValue !== undefined) {
      this.props.actions.addAction(formValue, formName);
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
          <Col xs={1}></Col>
          <Col xs={10}>
            <Panel>
              <Panel.Heading>
                メッセージ
                <span class="glyphicon glyphicon-remove" 
                  style={{float: 'right'}} 
                  title={'閉じる'}
                  onClick={() => this.props.actions.inputTextToggleAction()}
                />
              </Panel.Heading>
              <Panel.Body>
                <TextField
                  required
                  id="name"
                  value={this.props.inputTextReducer.name}
                  onChange={e => this.onChangeName(e)}
                  floatingLabelText="なまえ"
                  margin="normal"
                />
                <TextField
                  label="input"
                  value={this.props.inputTextReducer.text}
                  onChange={e => this.onChangeText(e)}
                  hintText="入力"
                  floatingLabelText="メッセージを入力"
                  fullWidth={true}
                  onKeyDown={e => this.onEnter(e)}
                />
              <RenderList {...this.props} />
              <div style={this.styles}>
                <RaisedButton secondary={true} label={'追加'} onClick={() => this.onAddText()} />
                <RaisedButton label={'すべて削除'} onClick={() => this.onDeleteAction()} />
              </div>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    );
  }
}

export default InputText;