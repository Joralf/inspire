const initialState = {
  results: [{
    name: 'Science',
    description: 'Madame Curie, the first female physics hero',
    category: 'History',
    price: '50'
  },
  {
    name: 'Politics',
    description: 'Course about politics',
    category: 'History',
    price: '100'
  },
  {
    name: 'Politics Part II',
    description: 'Course about politics',
    category: 'History',
    price: '100'
  },
  {
    name: 'World War II',
    description: 'World War II, a brief overview',
    category: 'History',
    price: '200'
  },
  {
    name: 'World War II: Italy',
    description: 'World War II, Italy',
    category: 'History',
    price: '200'
  },
  {
    name: 'World War III',
    description: 'World War III, a projection...',
    category: 'History',
    price: '200'
  },
  {
    name: 'Vietnam War',
    description: 'An ugly era',
    category: 'History',
    price: '200'
  }],
  searchText: ''
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTERBYSEARCH':
      return Object.assign({}, state, {
        searchText: action.queryString
      });
    default:
      return state;
  }
};

export default courses;
