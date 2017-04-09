import { combineReducers } from 'redux';
import filters from './filters';
import courses from './courses';

const rootRecucer = combineReducers({
  filters,
  courses
});

export default rootRecucer;
