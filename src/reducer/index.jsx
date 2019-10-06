import { combineReducers } from 'redux';
import reducer from './reducer';
import modalReducer from './modalReducer';
import inputTextReducer from './inputTextReducer';

const rootReducer = combineReducers({
    reducer,
    modalReducer,
    inputTextReducer
});

export default rootReducer;