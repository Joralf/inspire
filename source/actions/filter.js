export const FILTERBYSEARCH = 'FILTERBYSEARCH';
export const FILTERBYPRICE = 'FILTERBYPRICE';

export function filterBySearchString(queryString) {
  return {
    type: 'FILTERBYSEARCH',
    queryString,
  };
}

export function filterByPrice(minPrice, maxPrice) {
  return {
    type: 'FILTERBYPRICE',
    minPrice,
    maxPrice,
  };
}
