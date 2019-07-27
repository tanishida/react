import * as types from '../actionTypes/index';

const initialState = {
  dialogOpen: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.DIALOG_ACTION:
      return {
        dialogOpen: !state.dialogOpen
      };
      default:
      return state;
  }
}