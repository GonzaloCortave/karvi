import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";

describe("ButtonWithIcon", () => {
  it("renders the children and calls onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const mockChildren = "Click me";

    const { getByText } = render(
      <ButtonWithIcon icon="icon.png" onClick={mockOnClick}>
        {mockChildren}
      </ButtonWithIcon>
    );

    expect(getByText(mockChildren)).toBeInTheDocument();

    fireEvent.click(getByText(mockChildren));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
