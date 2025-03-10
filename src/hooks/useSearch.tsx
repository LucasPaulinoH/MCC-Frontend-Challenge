import { SearchContext } from "@/context/SearchContext";
import { useContext } from "react";

const useSearch = () => useContext(SearchContext);

export default useSearch;
