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

function setAction(val) {
  return {
    type: types.TEXT_SET,
    val
  };
}

function addAction(text) {
  return {
    type: types.TEXT_ADD,
    text
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

const CounterActions = {
  increment,
  decrement,
  dialogAction,
  setAction,
  addAction,
  deleteAction,
  formDeleteAction
};

export default CounterActions;