import React from "react";
import CarsGrid from "../components/CarsGrid/CarsGrid";
import { useFetchCars } from "../hooks/useFetchCars";

const CatalogPage = () => {
    const cars = useFetchCars();

    return (
        <main>
         <CarsGrid cars={cars} />
        </main>
    );
};

export default CatalogPage;