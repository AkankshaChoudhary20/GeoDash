import { Country } from "@/types/Country";

export const sortCountries = (countries: Country[], order: "asc" | "desc") => {
  return countries.sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

export const filterCountriesByRegion = (
  countries: Country[],
  region: string
) => {
  return countries.filter((c) => c.region === region);
};

export const searchCountries = (countries: Country[], query: string) => {
  const lower = query.toLowerCase();
  return countries.filter(
    (c) =>
      c.name.common.toLowerCase().includes(lower) ||
      c.capital?.some((cap) => cap.toLowerCase().includes(lower))
  );
};
