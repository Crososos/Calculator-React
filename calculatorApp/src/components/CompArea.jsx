import React, { createContext, useState } from "react";

export const CalcFonks = createContext();

const CompArea = ({ children }) => {
  const [calcu, setCalcu] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calcu,
    setCalcu,
  };

  return (
    <div>
      <CalcFonks.Provider value={providerValue}>{children}</CalcFonks.Provider>
    </div>
  );
};

export default CompArea;
