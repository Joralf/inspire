import courseData from '../data/courses.js';

const courses = (state = courseData, action) => {
  switch (action.type) {
    case 'FILTERBYSEARCH':
      return Object.assign({}, state, {
        searchString: action.searchString
      });
    case 'FILTERBYPRICE':
      return Object.assign({}, state, {
        minPrice: action.minPrice,
        maxPrice: action.maxPrice
      });
    default:
      return state;
  }
};

export default courses;
