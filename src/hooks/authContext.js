import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [getItemLocalStorage] = useLocalStorage("userData", null);

  useEffect(() => {
    const storedData = getItemLocalStorage;
    if (storedData) {
      setAuthData(storedData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};