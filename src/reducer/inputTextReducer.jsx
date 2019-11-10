import * as types from '../actionTypes/index';

const initialState = {
  text: '',
  list: [],
  name: ''
};

export default function inputTextReducer(state = initialState, action) {
  switch (action.type) {
    case types.TEXT_SET:
      return {
        text: action.val,
        list: state.list,
        name: state.name
      };
    case types.TEXT_ADD:
      return {
        text: state.text,
        list: state.list.concat([{'name': action.name, 'value': action.text}]),
        name: state.name
      };
    case types.TEXT_DELETE:
      return {
        text: '',
        list: initialState.list,
        name: state.name
      };
    case types.FORM_DELETE:
      return {
        text: '',
        list: state.list,
        name: state.name
      };
    case types.NAME_SET:
      return {
        text: state.val,
        list: state.list,
        name: action.name
      };
    default:
    return state;
  }
}