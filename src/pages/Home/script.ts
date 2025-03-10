import restCountriesApi from "@/services/restCountriesApi";
import { Country } from "@/types/Country";
import { useQuery } from "@tanstack/react-query";

const fetchCountries = async () => {
  try {
    return await restCountriesApi.getAllCountries();
  } catch (error) {
    console.error("Error fetching countries: ", error);
  }
};

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    retry: 2,
  });
};

export const filterCountryBySearch = (country: Country, search: string) =>
  country.name.common.toLowerCase().includes(search.toLowerCase()) ||
  country.region.toLowerCase().includes(search.toLowerCase()) ||
  country.capital?.some((capital) =>
    capital.toLowerCase().includes(search.toLowerCase())
  );
