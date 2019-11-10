import * as types from '../actionTypes/index';

const initialState = {
  calculFormula: '',
  claculResult: 0,
  claculSymbol: ''
};

const getClaculResult = (claculList, prevClaculResult, prevInputSymbol) => {
  let claculSymbol = '';
  let claculHalfway = '';
  let claculResult = '';
  const symbolIndex = claculList.lastIndexOf(prevInputSymbol);
  claculSymbol = claculList.slice(symbolIndex, symbolIndex + 1);
  claculHalfway = claculList.slice(symbolIndex + 1);
  if (isNaN(claculHalfway)) {
    claculHalfway = claculHalfway.slice(claculHalfway.length - symbolIndex);
  }
  switch (claculSymbol) {
    case '×':
        claculResult = Number(prevClaculResult) * Number(claculHalfway);
        break;
    case '+':
        claculResult = Number(prevClaculResult) + Number(claculHalfway);
        break;
    case '-':
        claculResult = Number(prevClaculResult) - Number(claculHalfway);
        break;
    case '÷':
        claculResult = Number(prevClaculResult) / Number(claculHalfway);
        break;
  }
  return claculResult;
}

export default function calculatorLogicReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_NUMBER:
      return {
        calculFormula: state.calculFormula + action.inputValue.toString(),
        claculResult: state.claculResult,
        claculSymbol: state.claculSymbol
      };
    case types.CALCUL_LOGIC:
      let claculHalfway = '';
      let claculResult = 0;
      claculHalfway = state.calculFormula.slice(0, state.calculFormula.lastIndexOf(action.inputNumber));
      if (isNaN(claculHalfway)) {
        // 入力を再取得して前回の計算結果と計算
        claculResult = getClaculResult(claculHalfway, state.claculResult, state.claculSymbol);
      } else {
        claculResult = Number(claculHalfway);
      }

      return {
        calculFormula: state.calculFormula,
        claculResult: claculResult,
        claculSymbol: action.inputNumber
      };
    case types.DELETE_NUMBER:
      return {
        calculFormula: '',
        claculResult: 0,
        claculSymbol: state.claculSymbol
      };
    default:
    return state;
  }
}