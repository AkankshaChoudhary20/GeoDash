import { render, screen, fireEvent } from "@testing-library/react";
import { CountryCard } from "../../components/CountryCard";

const mockCountry = {
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
};

describe("CountryCard", () => {
  it("renders country details correctly", () => {
    const handleClick = jest.fn();
    render(<CountryCard country={mockCountry} onClick={handleClick} />);

    expect(screen.getByText("Germany")).toBeInTheDocument();
    expect(screen.getByText("Capital: Berlin")).toBeInTheDocument();
    expect(screen.getByText("Region: Europe")).toBeInTheDocument();
    expect(screen.getByText("Population: 83,000,000")).toBeInTheDocument();
    expect(screen.getByAltText("Flag of Germany")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<CountryCard country={mockCountry} onClick={handleClick} />);

    fireEvent.click(screen.getByText("Germany"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
