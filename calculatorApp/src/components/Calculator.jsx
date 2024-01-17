import React, { useContext } from "react";
import { CalcFonks } from "./CompArea.jsx";
import { Textfit } from "react-textfit";

const Calculator = () => {
  const { calcu } = useContext(CalcFonks);

  return (
    <Textfit className="screen" max={70} mode="single">
      {calcu.num ? calcu.num : calcu.res}
    </Textfit>
  );
};

export default Calculator;
