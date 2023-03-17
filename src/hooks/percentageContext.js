import { createContext, useState, useEffect } from "react";

export const PercentageContext = createContext();

export const PercentageProvider = ({ children }) => {
    const [percentage, setPercentage] = useState({});
  
    return (
      <PercentageContext.Provider value={{ percentage, setPercentage }}>
        {children}
      </PercentageContext.Provider>
    );
  };