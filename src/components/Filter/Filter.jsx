import React from "react";
import useToggle from "../../hooks/useToggle";
import "./Filter.scss";

const Filter = ({ filterName, values, onSelectFilter }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const { isToggled: isOpen, toggle: toggleIsOpen } = useToggle();

    const onSelectFilterClick = ({ id }) => {
        onSelectFilter({ id, filterName });
        toggleIsOpen();
    }

    const handleSummaryClick = (event) => {
        event.preventDefault();
        toggleIsOpen();
    }

    return (
        <details className="Filter" open={isOpen}>
            <summary onClick={handleSummaryClick}>{capitalizeFirstLetter(filterName)}</summary>
            <ul>
                {values.map(({ id, name, count }) => (
                    <li key={id} onClick={() => onSelectFilterClick({ id })}>
                        {name} ({count})
                    </li>
                ))}
            </ul>
        </details>
    );
}

export default Filter;