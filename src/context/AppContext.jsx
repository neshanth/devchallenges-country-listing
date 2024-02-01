import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return <AppContext.Provider value={{ search, handleSearch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
