import React from "react";
import CarCard from "../CarCard/CarCard";
import useToggle from "../../hooks/useToggle";
import "./CarsSection.scss";
import gridIcon from "../../assets/grid-icon.svg";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

const CarsSection = ({ cars }) => {
    const { isToggled: isListView, toggle: toggleView } = useToggle();

    return (
        <section className={`CarsSection ${isListView ?"active-list-view":""}`}>
            <ButtonWithIcon icon={gridIcon} onClick={toggleView}/>
            <div className="CarsSection__cars-container">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} isListView={isListView}/>
                ))}
            </div>
        </section>
    );
}

export default CarsSection;