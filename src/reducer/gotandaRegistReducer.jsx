import * as types from '../actionTypes/index';

const initialState = {
    handleName: '',
    shopName: '',
    date: new Date(),
    radioList: [
        {index: '1', value: 'Ⅰ', checked: false}, 
        {index: '2', value: 'Ⅱ', checked: false}, 
        {index: '3', value: 'Ⅲ', checked: false}, 
        {index: '4', value: 'Ⅳ', checked: false}, 
        {index: '5', value: 'Ⅴ', checked: false}
    ],
    comment: '',
    password: ''
};

export default function gotandaRegistReducer(state = initialState, action) {
  switch (action.type) {
    case types.HANDLE_NAME_REGIST:
        return {
            handleName: action.inputValue,
            shopName: state.shopName,
            date: state.date,
            radioList: state.radioList,
            comment: state.comment,
            password: state.password
        }
    case types.NAME_REGIST:
        return {
            handleName: state.handleName,
            shopName: action.inputValue,
            date: state.date,
            radioList: state.radioList,
            comment: state.comment,
            password: state.password
        }
    case types.DATE_REGIST:
        return {
            handleName: state.handleName,
            shopName: state.shopName,
            date: action.inputDate,
            radioList: state.radioList,
            comment: state.comment,
            password: state.password
        }
    case types.RADIO_REGIST:
    const resultRadioList = initialState.radioList.map(a => {
        if (a.index === action.value) {
            return {index: a.index, value: a.value, checked: true};
        }
        return {index: a.index, value: a.value, checked: false};
    });
      return {
        handleName: state.handleName,
        shopName: state.shopName,
        date: state.date,
        radioList: resultRadioList,
        comment: state.comment,
        password: state.password
      };
    case types.COMMENT_REGIST:
    return {
        handleName: state.handleName,
        shopName: state.shopName,
        date: state.date,
        radioList: state.radioList,
        comment: action.inputComment,
        password: state.password
    }
    case types.PASSWORD_REGIST:
    return {
        handleName: state.handleName,
        shopName: state.shopName,
        date: state.date,
        radioList: state.radioList,
        comment: state.comment,
        password: action.inputPassword
    }
    case types.DELETE_REGIST:
        return {
            handleName: '',
            shopName: '',
            date: new Date(),
            radioList: initialState.radioList,
            comment: '',
            password: ''
        }
    default:
    return state;
  }
}