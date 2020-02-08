import * as types from '../actionTypes/index';

const initialState = {
  isOpenInputText: false,
  isOpenTwcas: false,
  isOpenCalculator: false,
  isOpenBody: false,
  isOpenGotanda: true,
  isOpenGotandaDetail: false
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_TEXT_TOGGLE:
      return {
        isOpenInputText: !state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda,
        isOpenGotandaDetail: state.isOpenGotandaDetail
      };
    case types.CALUCLOTOR_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: !state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda,
        isOpenGotandaDetail: state.isOpenGotandaDetail
      };
    case types.BODY_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: !state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda,
        isOpenGotandaDetail: state.isOpenGotandaDetail
      };
    case types.TWCAS_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: !state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda,
        isOpenGotandaDetail: state.isOpenGotandaDetail
      }
    case types.GOTANDA_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: !state.isOpenGotanda,
        isOpenGotandaDetail: state.isOpenGotandaDetail
      }
    case types.GOTANDA_DETAIL_TOGGLE:
      return {
        isOpenInputText: state.isOpenInputText,
        isOpenTwcas: state.isOpenTwcas,
        isOpenCalculator: state.isOpenCalculator,
        isOpenBody: state.isOpenBody,
        isOpenGotanda: state.isOpenGotanda,
        isOpenGotandaDetail: !state.isOpenGotandaDetail
      }
    default:
    return state;
  }
}