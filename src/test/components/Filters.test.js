import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filters from "../../components/Filters/Filters";
import Filter from "../../components/Filter/Filter";

jest.mock("../../components/Filter/Filter", () => jest.fn(() => null));

describe("Filters", () => {
  it("renders the filters", () => {
    const mockFilters = [
      { name: "filter1", values: ["value1", "value2"] },
      { name: "filter2", values: ["value3", "value4"] },
    ];
    const mockOnSelectFilter = jest.fn();

    render(
      <Filters filters={mockFilters} onSelectFilter={mockOnSelectFilter} />
    );

    mockFilters.forEach((filter) => {
      expect(Filter).toHaveBeenCalledWith(
        {
          filterName: filter.name,
          values: filter.values,
          onSelectFilter: mockOnSelectFilter,
        },
        expect.anything()
      );
    });
  });
});
