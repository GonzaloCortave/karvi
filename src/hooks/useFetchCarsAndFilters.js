import { useState, useEffect } from "react";
import { getCarsAndFilters } from "../services/index";

export const useFetchCarsAndFilters = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    (async () => {
      const [fetchedCars, fetchedFilters] = await getCarsAndFilters();
      setCars(fetchedCars);
      setFilters(fetchedFilters);
    })();
  }, []);

  return { cars, filters };
};
