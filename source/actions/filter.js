export const FILTERBYSEARCH = 'FILTERBYSEARCH';
export const FILTERBYPRICE = 'FILTERBYPRICE';

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
