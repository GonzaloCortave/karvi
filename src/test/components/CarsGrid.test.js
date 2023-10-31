import React from "react";
import { render } from "@testing-library/react";
import CarsGrid from "../../components/CarsGrid/CarsGrid";
import { createCar } from "../factories/carFactory";

const car1 = createCar({ id: 1 });
const car2 = createCar({ id: 2 });

const cars = [car1, car2];

describe("CarsGrid", () => {
  it("should render a CarCard component for each car", () => {
    const { getAllByRole } = render(<CarsGrid cars={cars} />);
    const carCards = getAllByRole("article", { class: "CarCard" });

    expect(carCards.length).toBe(cars.length);
  });
});
