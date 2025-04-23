import { useCountries } from "../ hooks/useCountries";
import { useState } from "react";
import { Country } from "@/types/Country";
import { CountryGrid } from "@/components/CountryGrid";
import { CountryDetail } from "@/components/CountryDetail";
import { ThemeToggle } from "../components/ThemeToggle";

import {
  searchCountries,
  filterCountriesByRegion,
  sortCountries,
} from "@/utils/countryUtils";

const Home = () => {
  const { countries, loading, error } = useCountries();
  const [selected, setSelected] = useState<Country | null>(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const filtered = sortCountries(
    filterCountriesByRegion(searchCountries(countries, search), region),
    sort
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 text-black dark:text-white">
      <div className="flex justify-start p-4">
        <ThemeToggle />
      </div>
      <h1 className="text-3xl font-bold mb-6">GeoDash - Country Dashboard</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or capital..."
          className="p-2 rounded border w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 rounded border"
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          className="p-2 rounded border"
          value={sort}
          onChange={(e) => setSort(e.target.value as "asc" | "desc")}
        >
          <option value="asc">Population Asc</option>
          <option value="desc">Population Desc</option>
        </select>
      </div>

      {loading && <p>Loading countries...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && <CountryGrid countries={filtered} onSelect={setSelected} />}

      {selected && (
        <CountryDetail country={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Home;
