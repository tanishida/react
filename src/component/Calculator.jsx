import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import {TextField, RaisedButton} from 'material-ui';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Calculator extends React.Component {
  constructor() {
    super()
    this.buttonModules = {
      buttonModule1: [
        '1','2','3','÷'
      ],
      buttonModule2: [
        '4','5','6','×'
      ],
      buttonModule3: [
        '7','8','9','+'
      ],
      buttonModule4: [
        '0', '00', '000','-'
      ]
    }
  }
  onAddNumber(inputNumber) {
    // 入力値の数値判定 T:数値以外 F:数値
    const isNotNumber = isNaN(inputNumber);
    // 計算結果
    const claculResult = this.props.calculatorLogicReducer.claculResult
    // 計算式の末尾の数値判定　T:数値以外 F:数値
    const isNumnerCalculFormulaEnd = isNaN(this.props.calculatorLogicReducer.calculFormula.slice(-1));
    if ((isNotNumber && isNumnerCalculFormulaEnd) ||
        (this.props.calculatorLogicReducer.calculFormula === '' && isNotNumber)) {
      // 計算記号の連続入力と初回記号入力は認めない
      return;  
    }
    // 画面描画用計算式を作成
    this.props.actions.inputNumberAction(inputNumber);
    if (isNotNumber) {
      // 計算
      this.props.actions.calculLogicAcrion(claculResult, inputNumber);
    }
  }
  onDeleteNumber() {
    this.props.actions.deleteNumberAction();
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={1}></Col>
          <Col xs={10}>
            <Panel>
              <Panel.Heading>
                電卓
                <IconButton
                  color="inherit"
                  title={'閉じる'}
                  style={{float: 'right', margin: '-10px'}}
                  onClick={() => this.props.actions.calculatorToggleAction()}
                  edge="start">
                  <CloseIcon />
                </IconButton>
              </Panel.Heading>
              <Panel.Body>
                <div style={this.styles}>
                  <TextField
                    floatingLabelText="計算式"
                    value={this.props.calculatorLogicReducer.calculFormula}
                    disabled={true}
                    floatingLabelFixed={true}
                   /><br />
                  <TextField
                    floatingLabelText="計算結果"
                    value={this.props.calculatorLogicReducer.claculResult}
                    disabled={true}
                    floatingLabelFixed={true}
                   /><br />
                </div>
                {
                  this.buttonModules.buttonModule1.map(a => {
                    return <RaisedButton label={a} onClick={() => this.onAddNumber(a)} />
                  })
                }
                <br />
                {
                  this.buttonModules.buttonModule2.map(b => {
                    return <RaisedButton label={b} onClick={() => this.onAddNumber(b)} />
                  })
                }
                <br />
                {
                  this.buttonModules.buttonModule3.map(c => {
                    return <RaisedButton label={c} onClick={() => this.onAddNumber(c)} />
                  })
                }
                <br />
                {
                  this.buttonModules.buttonModule4.map(d => {
                    return <RaisedButton label={d} onClick={() => this.onAddNumber(d)} />
                  })
                }
                <RaisedButton label={'クリア'} primary={true} onClick={() => this.onDeleteNumber()} />
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </div>
    );
  }
}

export default Calculator;