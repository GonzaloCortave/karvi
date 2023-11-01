import React from "react";
import "./Filter.scss";

const Filter = ({ filterName, values, onSelectFilter}) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 
    return (
        <details className="Filter">
            <summary>{capitalizeFirstLetter(filterName)}</summary>
                <ul>
                    { values.map(({id, name, count}) => (
                        <li key={id} onClick={() => onSelectFilter({id, filterName})}>
                            {name} ({count})
                        </li>
                    ))}
                </ul>
        </details>
    );
}

export default Filter;