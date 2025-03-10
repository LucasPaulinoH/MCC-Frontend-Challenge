import { AppContainer } from "@/styles/shared";
import { Country } from "@/types/Country";
import CountryCard from "@/components/CountryCard";
import { filterCountryBySearch, useCountries } from "./script";
import Navbar from "@/components/Navbar";
import useSearch from "@/hooks/useSearch";
import { useMemo } from "react";

const Home = () => {
  const { data } = useCountries();
  const { search } = useSearch();

  const filteredCountries = useMemo(
    () =>
      !search
        ? data
        : data?.filter((country: Country) =>
            filterCountryBySearch(country, search)
          ),
    [data, search]
  );

  return (
    <AppContainer>
      <Navbar />

      <div className="w-screen min-h-screen pt-25 p-10">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-20 items-center justify-center">
          {data &&
            filteredCountries?.map((country: Country, index: number) => (
              <CountryCard country={country} key={index} />
            ))}
        </div>
      </div>
    </AppContainer>
  );
};

export default Home;
