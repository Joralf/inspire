const initialState = {
  minPrice: 0,
  maxPrice: 200,
  searchText: '',
  categories: []
};

const filters = (state = initialState, action) => {
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
    case 'ADD_CATEGORY_FILTER':
      return Object.assign({}, state, {
        categories: [
          ...state.categories,
          action.category,
        ],
      });
    case 'REMOVE_CATEGORY_FILTER':
      return Object.assign({}, state, {
        categories: [
          ...state.categories.filter(category => (category !== action.category))
        ],
      });
    default:
      return state;
  }
};

export default filters;
