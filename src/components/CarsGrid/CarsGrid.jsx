import React from "react";
import CarCard from "../CarCard/CarCard";
import "./CarsGrid.scss";

const CarsGrid = ({ cars }) => {
    return (
        <section className="CarsGrid">
            {cars.map((car) => (
               <CarCard key={car.id} car={car}/>
            ))}
        </section>
    );
}

export default CarsGrid;