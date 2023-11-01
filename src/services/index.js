const CARS_URL = "https://mocki.io/v1/80669021-108d-40c2-9bc9-887a5184b700";
const VALID_FILTERS = ["brand", "model", "version", "year", "city"];

const isValidFilter = ({ name }) => VALID_FILTERS.includes(name);

const getValidFilters = (rowFilters) => {
  const filters = Object.entries(rowFilters).map(
    ([filterName, filterValues]) => {
      return {
        name: filterName,
        values: filterValues,
      };
    }
  );
  return filters.filter(({ name }) => isValidFilter({ name }));
};

export const getCarsAndFilters = async () => {
  const response = await fetch(CARS_URL);
  const { availableFilters, items } = await response.json();

  return [items, getValidFilters(availableFilters)];
};
