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

function radioRedistAction(value) {
  return {
    type: types.RADIO_REGIST,
    value
  }
}

function inputShopNameAction(inputValue) {
  return {
    type: types.NAME_REGIST,
    inputValue
  };
}

function inputHandleNameAction(inputValue) {
  return {
    type: types.HANDLE_NAME_REGIST,
    inputValue
  };
}

function inputDateAction(inputDate) {
  return {
    type: types.DATE_REGIST,
    inputDate
  };
}

function inputCommentAction(inputComment) {
  return {
    type: types.COMMENT_REGIST,
    inputComment
  };
}

function inputPasswordAction(inputPassword) {
  return {
    type: types.PASSWORD_REGIST,
    inputPassword
  };
}

function inputSearchResultAction(handleName, shopName, date, activeRadio, comment, id) {
  return {
    type: types.SEARCH_RESULT,
    handleName,
    shopName,
    date,
    activeRadio,
    comment,
    id
  };
}

function deleteGotandaRegistAction() {
  return {
    type: types.DELETE_REGIST
  };
}

function inputDetailInfoAction(handleName, shopName, date, radioList, comment) {
  return {
    type: types.INPUT_DETAIL_INFO,
    handleName,
    shopName,
    date,
    radioList,
    comment
  };
}
function gotandaDetailToggleAction() {
  return {
    type: types.GOTANDA_DETAIL_TOGGLE
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
  progressToggleAction,
  gotandaToggleAction,
  radioRedistAction,
  inputShopNameAction,
  inputHandleNameAction,
  inputDateAction,
  inputCommentAction,
  inputSearchResultAction,
  inputPasswordAction,
  deleteGotandaRegistAction,
  inputDetailInfoAction,
  gotandaDetailToggleAction

};

export default CounterActions;