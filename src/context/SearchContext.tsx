import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface SearchContextType {
  search: string | null;
  setSearch: Dispatch<SetStateAction<string | null>>;
}

export const SearchContext = createContext<SearchContextType>({
  search: null,
  setSearch: () => {},
});

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string | null>(null);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
