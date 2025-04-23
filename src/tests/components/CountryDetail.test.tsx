import { render, screen, fireEvent } from "@testing-library/react";
import { CountryDetail } from "../../components/CountryDetail";

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

describe("CountryDetail", () => {
  it("renders all country details correctly", () => {
    const onClose = jest.fn();
    render(<CountryDetail country={mockCountry} onClose={onClose} />);

    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText(/Capital:/)).toHaveTextContent("Capital: Paris");
    expect(screen.getByText(/Region:/)).toHaveTextContent("Region: Europe");
    expect(screen.getByText(/Population:/)).toHaveTextContent(
      "Population: 67,000,000"
    );
    expect(screen.getByText(/Timezones:/)).toHaveTextContent(
      "Timezones: UTC+01:00"
    );
    expect(screen.getByText(/Languages:/)).toHaveTextContent(
      "Languages: French"
    );
    expect(screen.getByText(/Currencies:/)).toHaveTextContent(
      "Currencies: Euro (€)"
    );
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<CountryDetail country={mockCountry} onClose={onClose} />);

    fireEvent.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
