import { combineReducers } from 'redux';
import reducer from './reducer';
import modalReducer from './modalReducer';
import inputTextReducer from './inputTextReducer';
import calculatorLogicReducer from './calculatorLogicReducer';
import navBarReducer from './navBarReducer';

const rootReducer = combineReducers({
    reducer,
    modalReducer,
    inputTextReducer,
    calculatorLogicReducer,
    navBarReducer
});

export default rootReducer;