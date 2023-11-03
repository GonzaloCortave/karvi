import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filter from "../../components/Filter/Filter";

describe("Filter", () => {
  it("renders the filter values and calls onSelectFilter when a value is selected", () => {
    const mockFilterName = "filter1";
    const mockValues = [
      { id: "value1", name: "Value 1", count: 10 },
      { id: "value2", name: "Value 2", count: 20 },
    ];
    const mockOnSelectFilter = jest.fn();

    const { getByText } = render(
      <Filter
        filterName={mockFilterName}
        values={mockValues}
        onSelectFilter={mockOnSelectFilter}
      />
    );

    mockValues.forEach((value) => {
      expect(getByText(`${value.name} (${value.count})`)).toBeInTheDocument();
    });

    fireEvent.click(
      getByText(`${mockValues[0].name} (${mockValues[0].count})`)
    );
    expect(mockOnSelectFilter).toHaveBeenCalledWith({
      id: mockValues[0].id,
      filterName: mockFilterName,
    });
  });
});
