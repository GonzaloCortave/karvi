import React from "react";
import "./SelectedFilters.scss";

const SelectedFilters = ({ selectedFilters, onUnselectFilter }) => {
    return (
        <div className="SelectedFilters">
            {selectedFilters.map(({ id }) => (
                <span key={id}>
                    {id}
                    <button onClick={() => onUnselectFilter({ id })}>X</button>
                </span>
            ))}
        </div>
    );
};

export default SelectedFilters;