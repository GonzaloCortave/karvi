import React from "react";
import CarsGrid from "../../components/CarsGrid/CarsGrid";
import Filters from "../../components/Filters/Filters";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";
import {useInitializeCatalogPage} from "../../hooks/useInitializeCatalogPage";
import "./CatalogPage.scss";

const CatalogPage = () => {
    const {filters, selectedFilters, filteredCars, selectFilter, onUnselectFilter} = useInitializeCatalogPage();

    return (
    <main className="CatalogPage">
        <Filters filters={filters} onSelectFilter={selectFilter} />
        <SelectedFilters selectedFilters={selectedFilters} onUnselectFilter={onUnselectFilter}/>     
        <CarsGrid cars={filteredCars} />
    </main>
    );
};

export default CatalogPage;