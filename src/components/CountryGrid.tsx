import { Country } from "@/types/Country";
import { CountryCard } from "./CountryCard";

interface Props {
  countries: Country[];
  onSelect: (country: Country) => void;
}

export const CountryGrid = ({ countries, onSelect }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
          onClick={() => onSelect(country)}
        />
      ))}
    </div>
  );
};
