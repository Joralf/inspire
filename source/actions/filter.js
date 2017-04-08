export const FILTERBYSEARCH = 'FILTERBYSEARCH';

export function filterBySearchString(queryString) {
  return {
    type: 'FILTERBYSEARCH',
    queryString,
  };
}
