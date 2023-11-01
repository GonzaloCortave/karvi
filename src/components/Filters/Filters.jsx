import React from "react";
import Filter from "../Filter/Filter";
import "./Filters.scss";

const Filters = ({ filters, onSelectFilter }) => {
    return (
        <aside className="Filters">
            <ul>
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