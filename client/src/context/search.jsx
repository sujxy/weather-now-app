import { Search } from "lucide-react";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState(null);
  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};
