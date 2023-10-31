export const createCar = ({
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
