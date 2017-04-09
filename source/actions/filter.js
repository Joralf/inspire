export const FILTERBYSEARCH = 'FILTERBYSEARCH';
export const FILTERBYPRICE = 'FILTERBYPRICE';
export const ADD_CATEGORY_FILTER = 'ADD_CATEGORY_FILTER';
export const REMOVE_CATEGORY_FILTER = 'REMOVE_CATEGORY_FILTER';

export function filterBySearch(searchString) {
  return {
    type: 'FILTERBYSEARCH',
    searchString,
  };
}

export function filterByPrice(minPrice, maxPrice) {
  return {
    type: 'FILTERBYPRICE',
    minPrice,
    maxPrice,
  };
}

export function addCategoryFilter(category) {
  return {
    type: 'ADD_CATEGORY_FILTER',
    category,
  };
}

export function removeCategoryFilter(category) {
  return {
    type: 'REMOVE_CATEGORY_FILTER',
    category,
  };
}
