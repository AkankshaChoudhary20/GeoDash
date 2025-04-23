import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "@/types/Country";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response.data);
      } catch (err) {
        setError("Failed to load countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};
