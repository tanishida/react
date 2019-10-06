import * as types from '../actionTypes/index';

const initialState = {
  text: '',
  list: []
};

export default function inputTextReducer(state = initialState, action) {
  switch (action.type) {
    case types.TEXT_SET:
      return {
        text: action.val,
        list: state.list
      };
    case types.TEXT_ADD:
      return {
        text: state.text,
        list: state.list.concat([action.text])
      };
    case types.TEXT_DELETE:
        return {
          text: '',
          list: []
        };
    case types.FORM_DELETE:
    return {
      text: '',
      list: state.list
    };
    default:
    return state;
  }
}