import * as types from '../actionTypes/index';

const initialState = {
  value: 0,
  text: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        value: state.value + 1
      };
    case types.DECREMENT:
      return {
        value: state.value - 1
      };
    default:
    return state;
  }
}