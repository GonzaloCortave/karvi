import { useState, useEffect } from "react";
import { useFetchCarsAndFilters } from "./useFetchCarsAndFilters";

export const useInitializeCatalogPage = () => {
  const { cars, filters } = useFetchCarsAndFilters();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);

  const selectFilter = ({ id, filterName }) => {
    setSelectedFilters((prevState) =>
      updateFilter({ prevFilters: prevState, id, filterName })
    );
  };

  const resetFilters = () => {
    setSelectedFilters([]);
  };

  const onUnselectFilter = ({ id }) => {
    setSelectedFilters((prevState) =>
      prevState.filter(({ id: prevId }) => prevId !== id)
    );
  };

  useEffect(() => {
    setFilteredCars(
      cars.filter((car) =>
        selectedFilters.every(({ id, filterName }) => car[filterName] === id)
      )
    );
  }, [selectedFilters, cars]);

  return {
    selectFilter,
    onUnselectFilter,
    resetFilters,
    filteredCars,
    filters,
    selectedFilters,
  };
};

function updateFilter({ prevFilters, id, filterName }) {
  if (prevFilters.some(({ id: prevId }) => prevId === id)) {
    return prevFilters;
  }
  if (
    prevFilters.some(
      ({ filterName: prevFilterName }) => prevFilterName === filterName
    )
  ) {
    return prevFilters.map((filter) => {
      if (filter.filterName === filterName) {
        return { id, filterName };
      }
      return filter;
    });
  }
  return [...prevFilters, { id, filterName }];
}
