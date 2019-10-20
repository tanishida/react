import * as types from '../actionTypes/index';

const initialState = {
  isOpenInputText: false,
  isOpenCalculator: true
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_TEXT_TOGGLE:
      return {
        isOpenInputText: !state.isOpenInputText,
        isOpenCalculator: state.isOpenCalculator
      };
    case types.CALUCLOTOR_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenCalculator: !state.isOpenCalculator
      };
    default:
    return state;
  }
}