import React, { createContext, useState } from "react";

export const SearchContext = createContext(null);
const SearchProvider = (props) => {
  const [searchProduct, setSearchProduct] = useState([]);
  return (
    <SearchContext.Provider value={{ searchProduct, setSearchProduct }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
