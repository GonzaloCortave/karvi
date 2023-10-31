const CARS_URL = "https://mocki.io/v1/80669021-108d-40c2-9bc9-887a5184b700";

export const getCars = async () => {
  const response = await fetch(CARS_URL);
  const data = await response.json();
  return data.items;
};
