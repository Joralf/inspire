/**
 * This method will check if the searchString is present in result.name
 * @param  {object} course       A course object
 * @param  {string} searchString A searchstrying
 * @return {boolean}             True if present, false if not
 */
const applySearchFilter = (course, searchString) => {
  const name = course.name.toLowerCase();
  const description = course.description.toLowerCase();
  const string = searchString.toLowerCase();
  return (name.indexOf(string) > -1 || description.indexOf(string) > -1);
};

/**
 * This method will check if the price for a given course is within the given bounds
 * @param  {object} course   A course object
 * @param  {number} minPrice The minimum price
 * @param  {number} maxPrice The maximum price
 * @return {boolean}         True if within bounds, false if not
 */
const applyPriceFilter = (course, minPrice, maxPrice) => (
  course.price >= minPrice && course.price <= maxPrice
);


/**
 * This method will check if any of the categories listed are present in the course object
 * @param  {object} course     A course object
 * @param  {array}  categories An array with categories
 * @return {boolean}           True if present, false if not
 */
const applyCategoryFilter = (course, categories) => (
  categories.indexOf(course.category) > -1
);

export {
  applySearchFilter,
  applyPriceFilter,
  applyCategoryFilter
};
