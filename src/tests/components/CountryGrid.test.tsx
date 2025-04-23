import { render, screen, fireEvent } from "@testing-library/react";
import { CountryGrid } from "../../components/CountryGrid";
import { Country } from "@/types/Country";

// In your test file

const mockCountries: Country[] = [
  {
    name: { common: "France" },
    capital: ["Paris"],
    region: "Europe",
    population: 67000000,
    timezones: ["UTC+01:00"],
    languages: { fra: "French" },
    currencies: {
      EUR: { name: "Euro", symbol: "€" },
    },
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
      svg: "https://flagcdn.com/fr.svg",
    },
  },
  {
    name: { common: "Germany" },
    capital: ["Berlin"],
    region: "Europe",
    population: 83000000,
    timezones: ["UTC+01:00"],
    languages: { deu: "German" },
    currencies: {
      EUR: { name: "Euro", symbol: "€" },
    },
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
    },
  },
];

describe("CountryGrid", () => {
  it("renders all countries", () => {
    const handleSelect = jest.fn();
    render(<CountryGrid countries={mockCountries} onSelect={handleSelect} />);

    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("Germany")).toBeInTheDocument();
  });

  it("calls onSelect when a country is clicked", () => {
    const handleSelect = jest.fn();
    render(<CountryGrid countries={mockCountries} onSelect={handleSelect} />);

    const franceCard = screen.getByText("France");
    fireEvent.click(franceCard);
    expect(handleSelect).toHaveBeenCalledWith(mockCountries[0]);
  });
});
