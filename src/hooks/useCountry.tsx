import restCountriesApi from "@/services/restCountriesApi";
import { useQuery } from "@tanstack/react-query";

const fetchCountry = async (country: string) => {
  try {
    return await restCountriesApi.getACountry(country);
  } catch (error) {
    console.error("Error fetching country: ", error);
  }
};

export const useCountry = (country: string) => {
  return useQuery({
    queryKey: ["country"],
    queryFn: () => fetchCountry(country),
    retry: 2,
  });
};
