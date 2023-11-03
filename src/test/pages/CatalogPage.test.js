import React from "react";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import { render } from "@testing-library/react";
import { useInitializeCatalogPage } from "../../hooks/useInitializeCatalogPage";
import Filters from "../../components/Filters/Filters";
import CarsSection from "../../components/CarsSection/CarsSection";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";

jest.mock("../../hooks/useInitializeCatalogPage");
jest.mock("../../components/Filters/Filters", () => jest.fn(() => null));
jest.mock("../../components/SelectedFilters/SelectedFilters", () =>
  jest.fn(() => null)
);
jest.mock("../../components/CarsSection/CarsSection", () =>
  jest.fn(() => null)
);

describe("CatalogPage", () => {
  let mockFilters,
    mockSelectFilter,
    mockSelectedFilters,
    mockOnUnselectFilter,
    mockResetFilters,
    mockFilteredCars;

  beforeEach(() => {
    mockFilters = ["filter1"];
    mockSelectFilter = jest.fn();
    mockSelectedFilters = ["filter1"];
    mockOnUnselectFilter = jest.fn();
    mockResetFilters = jest.fn();
    mockFilteredCars = ["car1", "car2"];

    useInitializeCatalogPage.mockReturnValue({
      filters: mockFilters,
      selectedFilters: mockSelectedFilters,
      filteredCars: mockFilteredCars,
      selectFilter: mockSelectFilter,
      onUnselectFilter: mockOnUnselectFilter,
      resetFilters: mockResetFilters,
    });
  });

  it("renders the Filters with the correct props", () => {
    render(<CatalogPage />);
    expect(Filters).toHaveBeenCalledWith(
      { filters: mockFilters, onSelectFilter: mockSelectFilter },
      expect.anything()
    );
  });

  it("renders the SelectedFilters with the correct props", () => {
    render(<CatalogPage />);
    expect(SelectedFilters).toHaveBeenCalledWith(
      {
        selectedFilters: mockSelectedFilters,
        onUnselectFilter: mockOnUnselectFilter,
        resetFilters: mockResetFilters,
      },
      expect.anything()
    );
  });

  it("renders the CarsSection with the correct props", () => {
    render(<CatalogPage />);
    expect(CarsSection).toHaveBeenCalledWith(
      { cars: mockFilteredCars },
      expect.anything()
    );
  });
});
