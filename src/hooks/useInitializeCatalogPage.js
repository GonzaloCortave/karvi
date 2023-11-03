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
        selectedFilters.every(({ id, filterName }) =>
          filterApplyToCar({ car, filterName, id })
        )
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

const yearFilterApplyToCar = ({ car, id }) => {
  const [startYear, endYear] = car.year.split("/").map(Number);
  return startYear <= id && endYear >= id;
};

function filterApplyToCar({ car, filterName, id }) {
  if (filterName === "year") {
    return yearFilterApplyToCar({ car, id });
  }
  return car[filterName] === id;
}

const filterIDIsAlreadySelected = ({ prevFilters, id }) =>
  prevFilters.some(({ id: prevId }) => prevId === id);

const filterNameIsAlreadySelected = ({ prevFilters, filterName }) =>
  prevFilters.some(
    ({ filterName: prevFilterName }) => prevFilterName === filterName
  );

const updateFilterID = ({ prevFilters, id, filterName }) => {
  return prevFilters.map((filter) => {
    if (filter.filterName === filterName) {
      return { id, filterName };
    }
    return filter;
  });
};

function updateFilter({ prevFilters, id, filterName }) {
  if (filterIDIsAlreadySelected({ prevFilters, id })) {
    return prevFilters;
  }
  if (filterNameIsAlreadySelected({ prevFilters, filterName })) {
    return updateFilterID({ prevFilters, id, filterName });
  }
  return [...prevFilters, { id, filterName }];
}
