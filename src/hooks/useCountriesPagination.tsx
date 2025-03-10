import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useCountriesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  const handleNextPageClick = (currentPage: number, maxPages: number) =>
    currentPage < maxPages && setPage(currentPage + 1);

  const handlePreviousPageClick = (currentPage: number) =>
    currentPage > 1 && setPage(currentPage - 1);

  return { currentPage: page, handleNextPageClick, handlePreviousPageClick };
};

export default useCountriesPagination;
