import React from "react";
import "./SelectedFilters.scss";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import trashIcon from "../../assets/trash-icon.svg";

const SelectedFilters = ({ selectedFilters, onUnselectFilter, resetFilters }) => (
    <div className="SelectedFilters">
        {selectedFilters.length > 0 && (
        <>
            <div className="SelectedFilters__filters-container">
                {selectedFilters.map(({ id }) => (
                    <span key={id}>
                        <p>{id}</p>
                        <button onClick={() => onUnselectFilter({ id })}>X</button>
                    </span>
                ))}
            </div>
            <ButtonWithIcon icon={trashIcon} onClick={resetFilters} >
                Limpiar Filtros
            </ButtonWithIcon>
            </>
        )}
    </div>
);

export default SelectedFilters;