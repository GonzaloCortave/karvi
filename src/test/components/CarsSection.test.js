import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CarsSection from "../../components/CarsSection/CarsSection";
import useToggle from "../../hooks/useToggle";
import { createCar } from "../factories/carFactory";
jest.mock("../../hooks/useToggle");

const car1 = createCar({ id: 1 });
const car2 = createCar({ id: 2 });

const mockCars = [car1, car2];

describe("CarsSection", () => {
  it("renders the correct all the cars", () => {
    useToggle.mockReturnValue({ isToggled: false, toggle: jest.fn() });

    const { container } = render(<CarsSection cars={mockCars} />);
    const carCards = container.getElementsByClassName("CarCard");

    expect(carCards.length).toBe(mockCars.length);
  });

  it("toggles view when button is clicked", () => {
    const mockToggle = jest.fn();
    useToggle.mockReturnValue({ isToggled: false, toggle: mockToggle });

    const { container } = render(<CarsSection cars={mockCars} />);

    const ButtonWithIcon = container.querySelector(".ButtonWithIcon");

    fireEvent.click(ButtonWithIcon);

    expect(mockToggle).toHaveBeenCalled();
  });
});
