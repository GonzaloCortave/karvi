import React, { useState } from "react";
import CarCard from "../CarCard/CarCard";
import "./CarsSection.scss";
import gridIcon from "../../assets/grid-icon.svg";

const CarsSection = ({ cars }) => {
    const [isListView, setIsListView] = useState(false);


    const toggleView = () => {
        setIsListView(!isListView);
    }

    return (
        <section className={`CarsSection ${isListView ?"active-list-view":""}`}>
            <button onClick={toggleView}>
                <img src={gridIcon} alt="Toggle view" />
            </button>
            <div className="CarsSection__cars-container">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} isListView={isListView}/>
                ))}
            </div>
        </section>
    );
}

export default CarsSection;