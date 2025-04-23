import Image from "next/image";
import { Country } from "@/types/Country";

interface Props {
  country: Country;
  onClick: () => void;
}

export const CountryCard = ({ country, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 transition transform"
    >
      <div className="relative w-full h-40 mb-4">
        <Image
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
      </div>
      <h2 className="text-lg font-bold mb-1">{country.name.common}</h2>
      <p className="text-sm">Capital: {country.capital?.[0] || "N/A"}</p>
      <p className="text-sm">Region: {country.region}</p>
      <p className="text-sm">
        Population: {country.population.toLocaleString()}
      </p>
    </div>
  );
};
