import * as types from '../actionTypes/index';

const initialState = {
  isOpenInputText: true,
  isOpenCalculator: true,
  isOpenBody: false
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_TEXT_TOGGLE:
      return {
        isOpenInputText: !state.isOpenInputText,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody
      };
    case types.CALUCLOTOR_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenCalculator: !state.isOpenCalculator,
        isOpenBody: state.isOpenBody
      };
    case types.BODY_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: !state.isOpenBody
      };
    default:
    return state;
  }
}