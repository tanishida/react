import { combineReducers } from 'redux';
import reducer from './reducer';
import modalReducer from './modalReducer';
import inputTextReducer from './inputTextReducer';
import calculatorLogicReducer from './calculatorLogicReducer';
import navBarReducer from './navBarReducer';
import gotandaRegistReducer from './gotandaRegistReducer';
import gotandaSearchReducer from './gotandaSearchReducer';

const rootReducer = combineReducers({
    reducer,
    modalReducer,
    inputTextReducer,
    calculatorLogicReducer,
    navBarReducer,
    gotandaRegistReducer,
    gotandaSearchReducer
});

export default rootReducer;