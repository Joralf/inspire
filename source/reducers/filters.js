const initialState = {
  minPrice: 0,
  maxPrice: 200,
  searchText: '',
  categories: [
    { name: 'Calculus', active: false },
    { name: 'History', active: false },
    { name: 'Language', active: false }
  ]
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
    case 'CHANGE_CATEGORY_FILTER':
      return Object.assign({}, state, {
        categories: state.categories.map((category) => {
          if (category.name === action.category.name) {
            return {
              name: action.category.name,
              active: !action.category.active
            };
          }
          return category;
        })
      });
    default:
      return state;
  }
};

export default filters;
