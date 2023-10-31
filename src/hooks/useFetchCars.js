import { useState, useEffect } from "react";
import { getCars } from "../services/index";

export const useFetchCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      setCars(await getCars());
    };
    fetchCars();
  }, []);

  return cars;
};
