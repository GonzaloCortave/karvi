import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";

describe("SelectedFilters", () => {
  it("renders the selected filters", () => {
    const mockSelectedFilters = [{ id: "filter1" }, { id: "filter2" }];

    const { getByText } = render(
      <SelectedFilters
        selectedFilters={mockSelectedFilters}
        onUnselectFilter={jest.fn()}
        resetFilters={jest.fn()}
      />
    );

    mockSelectedFilters.forEach((filter) => {
      expect(getByText(filter.id)).toBeInTheDocument();
    });
  });

  it("calls onUnselectFilter and resetFilters when the respective buttons are clicked", () => {
    const mockOnUnselectFilter = jest.fn();
    const mockResetFilters = jest.fn();
    const mockSelectedFilters = [{ id: "filter1" }, { id: "filter2" }];

    const { getAllByText, getByText } = render(
      <SelectedFilters
        selectedFilters={mockSelectedFilters}
        onUnselectFilter={mockOnUnselectFilter}
        resetFilters={mockResetFilters}
      />
    );

    fireEvent.click(getAllByText("X")[0]);
    expect(mockOnUnselectFilter).toHaveBeenCalledWith({ id: "filter1" });

    fireEvent.click(getByText("Limpiar Filtros"));
    expect(mockResetFilters).toHaveBeenCalled();
  });
});
