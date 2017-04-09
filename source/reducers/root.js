import { combineReducers } from 'redux';
import filters from './filters.js';
import courses from './courses.js';

const rootRecucer = combineReducers({
  filters,
  courses
});

export default rootRecucer;
