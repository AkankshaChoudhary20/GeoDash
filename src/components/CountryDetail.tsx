import { Country } from "@/types/Country";

interface Props {
  country: Country;
  onClose: () => void;
}

export const CountryDetail = ({ country, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-lg w-full p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-lg">
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
        <p>
          <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Timezones:</strong> {country.timezones?.join(", ")}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((cur) => `${cur.name} (${cur.symbol})`)
                .join(", ")
            : "N/A"}
        </p>
      </div>
    </div>
  );
};
