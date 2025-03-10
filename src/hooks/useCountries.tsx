import restCountriesApi from "@/services/restCountriesApi";
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
