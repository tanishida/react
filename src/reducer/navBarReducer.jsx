import * as types from '../actionTypes/index';

const initialState = {
  isOpenInputText: false,
  isOpenTwcas: false,
  isOpenCalculator: false,
  isOpenBody: false,
  isOpenGotanda: true
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_TEXT_TOGGLE:
      return {
        isOpenInputText: !state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda
      };
    case types.CALUCLOTOR_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: !state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda
      };
    case types.BODY_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: !state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda
      };
    case types.TWCAS_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: !state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda
      }
    case types.GOTANDA_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: !state.isOpenGotanda
      }
    default:
    return state;
  }
}