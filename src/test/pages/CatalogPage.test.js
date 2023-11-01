import React from "react";
import { render } from "@testing-library/react";
import CatalogPage from "../../pages/CatalogPage";

const createCar = ({
  id = 1,
  brand = "Toyota",
  model = "Corolla",
  version = "XSE",
  year = 2021,
  mileage = "10,000 km",
  price = 120000,
  city = "São Paulo",
  state = "SP",
  image = "https://example.com/car1.jpg",
} = {}) => {
  return {
    id,
    brand,
    model,
    version,
    year,
    mileage,
    price,
    city,
    state,
    image,
  };
};

const carID1 = createCar({ id: 1 });
const carID2 = createCar({ id: 2 });
const cars = [carID1, carID2];

jest.mock("../../hooks/useFetchCarsAndFilters", () => ({
  useFetchCarsAndFilters: () => [createCar({ id: 1 }), createCar({ id: 2 })],
}));

describe("CatalogPage", () => {
  it("should render the CarsGrid", () => {
    const { container } = render(<CatalogPage />);

    const carsGridComponent = container.querySelector(".CarsGrid");
    expect(carsGridComponent).toBeInTheDocument();
  });

  it("should render the CardCars", () => {
    const { container } = render(<CatalogPage />);

    const carCards = container.querySelectorAll(".CarCard");
    expect(carCards).toHaveLength(cars.length);
  });
});
