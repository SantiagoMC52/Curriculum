import { combineReducers } from 'redux';
import curriculumReducer from './curriculumReducer';

const rootReducer = combineReducers({

  details: curriculumReducer

});

export default rootReducer;
