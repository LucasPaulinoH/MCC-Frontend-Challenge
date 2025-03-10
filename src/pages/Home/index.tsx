import { LoggedContainer } from "@/styles/shared";
import { Country } from "@/types/Country";
import CountryCard from "@/components/CountryCard";
import { filterCountryBySearch, usePaginatedCountries } from "./script";
import useSearch from "@/hooks/useSearch";
import { LOADING_LABEL } from "@/utils/stringUtils";
import useCountriesPagination from "@/hooks/useCountriesPagination";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/Button";

const Home = () => {
  const { search } = useSearch();

  const { currentPage, handleNextPageClick, handlePreviousPageClick } =
    useCountriesPagination();

  const { paginatedCountries, isLoading, totalPages, allCountries } =
    usePaginatedCountries(currentPage);

  const filteredCountries =
    search.length > 0
      ? allCountries?.filter((country) =>
          filterCountryBySearch(country, search)
        )
      : paginatedCountries;

  return (
    <LoggedContainer>
      <div className="w-full h-full items-center justify-center">
        {search.length === 0 && totalPages && (
          <div className="w-full flex items-center justify-between gap-2 mb-12">
            <div className="w-[20%]">
              {currentPage > 1 && (
                <Button
                  label=""
                  icon={<FiArrowLeft />}
                  onClick={() => handlePreviousPageClick(currentPage)}
                />
              )}
            </div>

            <p className="w-full self-center text-center font-bold">
              {`Página ${currentPage} - ${totalPages}`}
            </p>

            <div className="w-[20%]">
              {currentPage < totalPages! && (
                <Button
                  label=""
                  icon={<FiArrowRight />}
                  onClick={() => handleNextPageClick(currentPage, totalPages)}
                />
              )}
            </div>
          </div>
        )}

        {!isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 ">
            {filteredCountries?.map((country: Country, index: number) => (
              <CountryCard country={country} key={index} />
            ))}
          </div>
        ) : (
          <p>{LOADING_LABEL}</p>
        )}
      </div>
    </LoggedContainer>
  );
};

export default Home;
