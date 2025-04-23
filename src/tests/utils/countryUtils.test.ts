import {
  sortCountries,
  filterCountriesByRegion,
  searchCountries,
} from "../../utils/countryUtils";

import { Country } from "@/types/Country";

describe("Country Utilities", () => {
  const countries: Country[] = [
    {
      name: { common: "Country A" },
      capital: ["Capital A"],
      population: 5000000,
      region: "Asia",
      flags: {
        png: "https://example.com/a.png",
        svg: "https://example.com/a.svg",
      },
    },
    {
      name: { common: "Country B" },
      capital: ["Capital B"],
      population: 2000000,
      region: "Europe",
      flags: {
        png: "https://example.com/b.png",
        svg: "https://example.com/b.svg",
      },
    },
    {
      name: { common: "Country C" },
      capital: ["Capital C"],
      population: 1000000,
      region: "Asia",
      flags: {
        png: "https://example.com/c.png",
        svg: "https://example.com/c.svg",
      },
    },
  ];

  test("should sort countries by population in ascending order", () => {
    const sorted = sortCountries(countries, "asc");
    expect(sorted[0].name.common).toBe("Country C");
    expect(sorted[1].name.common).toBe("Country B");
    expect(sorted[2].name.common).toBe("Country A");
  });

  test("should sort countries by population in descending order", () => {
    const sorted = sortCountries(countries, "desc");
    expect(sorted[0].name.common).toBe("Country A");
    expect(sorted[1].name.common).toBe("Country B");
    expect(sorted[2].name.common).toBe("Country C");
  });

  test("should filter countries by region", () => {
    const filtered = filterCountriesByRegion(countries, "Asia");
    expect(filtered.length).toBe(2);
    expect(filtered[0].name.common).toBe("Country A");
    expect(filtered[1].name.common).toBe("Country C");
  });

  test("should filter countries by region when no match", () => {
    const filtered = filterCountriesByRegion(countries, "Africa");
    expect(filtered.length).toBe(0);
  });

  test("should search countries by name", () => {
    const searched = searchCountries(countries, "Country A");
    expect(searched.length).toBe(1);
    expect(searched[0].name.common).toBe("Country A");
  });

  test("should search countries by capital", () => {
    const searched = searchCountries(countries, "Capital C");
    expect(searched.length).toBe(1);
    expect(searched[0].name.common).toBe("Country C");
  });

  test("should return empty array if no countries match search", () => {
    const searched = searchCountries(countries, "Nonexistent");
    expect(searched.length).toBe(0);
  });

  test("should be case insensitive for search", () => {
    const searched = searchCountries(countries, "capital a");
    expect(searched.length).toBe(1);
    expect(searched[0].name.common).toBe("Country A");
  });
});
