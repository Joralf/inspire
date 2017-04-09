export const FILTERBYSEARCH = 'FILTERBYSEARCH';
export const FILTERBYPRICE = 'FILTERBYPRICE';
export const CHANGE_CATEGORY_FILTER = 'CHANGE_CATEGORY_FILTER';

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

export function changeCategoryFilter(category) {
  return {
    type: 'CHANGE_CATEGORY_FILTER',
    category,
  };
}
