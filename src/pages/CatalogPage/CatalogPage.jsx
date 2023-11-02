import React from "react";
import CarsSection from "../../components/CarsSection/CarsSection";
import Filters from "../../components/Filters/Filters";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";
import {useInitializeCatalogPage} from "../../hooks/useInitializeCatalogPage";
import "./CatalogPage.scss";

const CatalogPage = () => {
    const {filters, selectedFilters, filteredCars, selectFilter, onUnselectFilter, resetFilters} = useInitializeCatalogPage();

    return (
    <main className="CatalogPage">
        <Filters filters={filters} onSelectFilter={selectFilter} />
        <SelectedFilters selectedFilters={selectedFilters} onUnselectFilter={onUnselectFilter} resetFilters={resetFilters}/>     
        <CarsSection cars={filteredCars} />
    </main>
    );
};

export default CatalogPage;