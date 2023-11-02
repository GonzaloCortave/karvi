import React from "react";
import Filter from "../Filter/Filter";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import useToggle from "../../hooks/useToggle";
import "./Filters.scss";
import filtersIcon from "../../assets/filters-icon.svg";

const Filters = ({ filters, onSelectFilter }) => {
    const { isToggled: showFilters, toggle: toggleShowFilters } = useToggle();

    return (
        <aside className={`Filters ${showFilters ? "showFilters" : ""}`}>
            <ButtonWithIcon icon={filtersIcon} onClick={toggleShowFilters}>
                Filtrar
            </ButtonWithIcon>
            
            <ul className="Filters__container">
                {filters.map(({name, values}) => (
                    <li key={name}>
                        <Filter filterName={name} values={values} onSelectFilter={onSelectFilter}/>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Filters;