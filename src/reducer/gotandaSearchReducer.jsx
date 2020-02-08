import * as types from '../actionTypes/index';

const initialState = {
    gotandaList: [],
    resultRadioList: [
        {index: '1', value: 'Ⅰ', checked: false}, 
        {index: '2', value: 'Ⅱ', checked: false}, 
        {index: '3', value: 'Ⅲ', checked: false}, 
        {index: '4', value: 'Ⅳ', checked: false}, 
        {index: '5', value: 'Ⅴ', checked: false}
    ]
};

export default function gotandaSearchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_RESULT:
        const gotandaRegistItem = {
              handleName: action.handleName,
              shopName: action.shopName,
              date: action.date,
              radio: initialState.resultRadioList.map(a => {
                  if (a.index === action.activeRadio) {
                    return {index: a.index, value: a.value, checked: true};
                  }
                  return {index: a.index, value: a.value, checked: false};
              }),
              comment: action.comment,
              id: action.id
        };
        const resultGotandaList = [...new Map(state.gotandaList.concat([gotandaRegistItem]).map((v) => [v.id, v])).values()];
        return {
            gotandaList: resultGotandaList
        }
    default:
    return state;
  }
}