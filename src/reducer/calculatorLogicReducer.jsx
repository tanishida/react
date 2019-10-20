import * as types from '../actionTypes/index';

const initialState = {
  calculFormula: '',
  calculFormulaList: [],
  claculResult: ''
};

export default function calculatorLogicReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_NUMBER:
      return {
        calculFormula: state.calculFormula + action.inputValue.toString(),
        calculFormulaList: state.calculFormulaList.concat([action.inputValue]),
        claculResult: state.claculResult
      };
    case types.CALCUL_LOGIC:
      let claculHalfway = '';
      let claculHalfway2 = '';
      // 計算式の要素分回す
      state.calculFormulaList.forEach((input, index) => {
        let isNotNumber = isNaN(input);
        // 記号に到達した場合
        if (isNotNumber && claculHalfway !== '') {
          // 記号後の入力を取得
          for (let i = index + 1; i < state.calculFormulaList.length; i++) {
            claculHalfway2 = claculHalfway2 + state.calculFormulaList[i];
          }
          // トリミング
          claculHalfway2 = claculHalfway2.slice(0, -1);
          // 計算する
          switch (input) {
            case '×':
                claculHalfway = Number(claculHalfway) * Number(claculHalfway2);
                claculHalfway = claculHalfway.toString();
                break;
            case '+':
                claculHalfway = Number(claculHalfway) + Number(claculHalfway2);
                claculHalfway = claculHalfway.toString();
                break;
            case '-':
                claculHalfway = Number(claculHalfway) - Number(claculHalfway2);
                claculHalfway = claculHalfway.toString();
                break;
            case '÷':
                claculHalfway = Number(claculHalfway) / Number(claculHalfway2);
                claculHalfway = claculHalfway.toString();
                break;
          }
        }
        claculHalfway = claculHalfway + input.toString();
      });
      // トリミング
      let claculResult = '';
      for (let j = 0; j < claculHalfway.length; j++) {
        if (isNaN(claculHalfway[j])) {
          break;
        }
        claculResult = claculResult + claculHalfway[j];
      }
      return {
        calculFormula: state.calculFormula,
        claculResult: claculResult
      };
    case types.DELETE_NUMBER:
      return {
        calculFormula: '',
        calculFormulaList: [],
        claculResult: ''
      };
    default:
    return state;
  }
}