import { combineReducers } from 'redux';
import reducer from './reducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    reducer,
    modalReducer
});

export default rootReducer;