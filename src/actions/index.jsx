import * as types from '../actionTypes/index';

function increment() {
  return {
    type: types.INCREMENT
  };
}

function decrement() {
  return {
    type: types.DECREMENT
  };
}

function dialogAction() {
  return {
    type: types.DIALOG_ACTION
  };
}

function setAction(val, list) {
  return {
    type: types.TEXT_SET,
    val,
    list
  };
}

function addAction(message) {
  return {
    type: types.TEXT_ADD,
    message
  };
}

function deleteAction() {
  return {
    type: types.TEXT_DELETE
  };
}

function formDeleteAction() {
  return {
    type: types.FORM_DELETE
  };
}

function inputNumberAction(inputValue) {
  return {
    type: types.INPUT_NUMBER,
    inputValue
  };
}

function calculLogicAcrion(prevClaculResult, inputNumber) {
  return {
    type: types.CALCUL_LOGIC,
    prevClaculResult,
    inputNumber
  };
}

function deleteNumberAction() {
  return {
    type: types.DELETE_NUMBER
  };
}

function inputTextToggleAction() {
  return {
    type: types.INPUT_TEXT_TOGGLE
  };
}

function calculatorToggleAction() {
  return {
    type: types.CALUCLOTOR_TOGGLE
  };
}

function bodyToggleAction() {
  return {
    type: types.BODY_TOGGLE
  };
}

function setNameAction(name) {
  return {
    type: types.NAME_SET,
    name
  }
}

function twcasToggleAction() {
  return {
    type: types.TWCAS_TOGGLE
  };
}

function progressToggleAction() {
  return {
    type: types.PROGRESS_TOGGLE
  };
}

function gotandaToggleAction() {
  return {
    type: types.GOTANDA_TOGGLE
  };
}

const CounterActions = {
  increment,
  decrement,
  dialogAction,
  setAction,
  addAction,
  deleteAction,
  formDeleteAction,
  inputNumberAction,
  calculLogicAcrion,
  deleteNumberAction,
  inputTextToggleAction,
  calculatorToggleAction,
  bodyToggleAction,
  setNameAction,
  twcasToggleAction,
  progressToggleAction,
  gotandaToggleAction

};

export default CounterActions;