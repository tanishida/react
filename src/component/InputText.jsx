import React from 'react';
import RenderList from './RenderList';
import {Row, Col, Panel} from 'react-bootstrap';
import {TextField, RaisedButton, Snackbar} from 'material-ui';
import LinearProgress from 'material-ui/LinearProgress';
import api from '../api';

class InputText extends React.Component {
  constructor() {
    super()
    this.styles = {
      marginLeft: 5,
      marginTop: 10
    }
  }
  onChangeText(e) {
    const items = this.props.inputTextReducer.message !== undefined ? this.props.inputTextReducer.message : [];
    this.props.actions.setAction(e.target.value, items);
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
      api.postMessegeAction(formValue, formName);
      api.fetchMessegeAction().then(item => {
        this.props.actions.addAction(item);
      });
      this.props.actions.formDeleteAction()
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
  componentDidMount() {
    api.fetchMessegeAction().then(item => {
      this.props.actions.addAction(item);
    });
    this.intervalId = setInterval(() => {
      api.fetchMessegeAction().then(item => {
        this.props.actions.addAction(item);
      });
    }, 50000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
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
                <LinearProgress style={{display: this.props.inputTextReducer.progress ? '' : 'none'}} />
                <RenderList {...this.props} />
              <div style={this.styles}>
                <RaisedButton secondary={true} label={'追加'} onClick={() => this.onAddText()} />
                <RaisedButton disabled={true} label={'すべて削除'} onClick={() => this.onDeleteAction()} />
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