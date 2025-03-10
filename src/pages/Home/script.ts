import { useCountries } from "@/hooks/useCountries";
import { Country } from "@/types/Country";
import { useMemo } from "react";

export const filterCountryBySearch = (country: Country, search: string) => {
  return (
    country.name.common.toLowerCase().includes(search.toLowerCase()) ||
    country.region.toLowerCase().includes(search.toLowerCase()) ||
    country.capital?.some((capital) =>
      capital.toLowerCase().includes(search.toLowerCase())
    )
  );
};

const SINGLE_PAGE_SIZE = 10;

export const usePaginatedCountries = (page: number) => {
  const { data: countries, isLoading } = useCountries();

  const paginatedCountries = useMemo(() => {
    const start = (page - 1) * SINGLE_PAGE_SIZE;

    return countries?.slice(start, start + SINGLE_PAGE_SIZE);
  }, [countries, page]);

  return {
    allCountries: countries,
    paginatedCountries,
    isLoading,
    totalPages:
      countries && Math.max(1, Math.ceil(countries.length / SINGLE_PAGE_SIZE)),
  };
};
