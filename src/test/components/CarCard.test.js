import React from "react";
import { render } from "@testing-library/react";
import CarCard from "../../components/CarCard/CarCard";

describe("CarCard", () => {
  const car = {
    brand: "Toyota",
    model: "Corolla",
    version: "XSE",
    year: 2021,
    mileage: "10,000 km",
    price: 120000,
    city: "São Paulo",
    state: "SP",
    image: "https://example.com/car.jpg",
  };

  it("renders the car image", () => {
    const { getByAltText } = render(<CarCard car={car} />);
    const image = getByAltText("Car view");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", car.image);
  });

  it("renders the car information", () => {
    const { getByText } = render(<CarCard car={car} />);
    expect(getByText(`${car.brand} ${car.model}`)).toBeInTheDocument();
    expect(getByText(car.version)).toBeInTheDocument();
    expect(getByText(`${car.city}, ${car.state}`)).toBeInTheDocument();
  });

  it("renders the car year and mileage", () => {
    const { getByText } = render(<CarCard car={car} />);
    expect(getByText(car.year)).toBeInTheDocument();
    expect(getByText(car.mileage)).toBeInTheDocument();
  });

  it("formats the price correctly", () => {
    const { getByText } = render(<CarCard car={car} />);
    const price = getByText("R$ 120.000");
    expect(price).toBeInTheDocument();
  });
});
