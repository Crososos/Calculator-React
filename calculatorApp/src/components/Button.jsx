import React, { useContext } from "react";
import { CalcFonks } from "./CompArea.jsx";

const getStyle = (name) => {
  const className = {
    "=": "equals",
    "x": "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[name];
};

const Button = ({ value }) => {
  const { calcu, setCalcu } = useContext(CalcFonks);
  //console.log(setCalcu);

  const clickArea = () => {
    setCalcu({
      ...calcu,
      num: !calcu.num.toString().includes(".") ? calcu.num + value : calcu.num,
    });
  };

  const resetBtn = () => {
    setCalcu({ sign: "", num: 0, res: 0 });
  };

  const BtnClick = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calcu.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calcu.num + numberString);
    }

    setCalcu({
      ...calcu,
      num: numberValue,
    });
  };

  const signBtn = () => {
    setCalcu({
      sign: value,
      res: !calcu.res && calcu.num ? calcu.num : calcu.res,
      num: 0,
    });
  };

  const equalsBtn = () => {
    if (calcu.res && calcu.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "x": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalcu({
        res: math(calcu.res, calcu.num, calcu.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const persenBtn = () => {
    setCalcu({
      num: calcu.num / 100,
      res: calcu.res / 100,
      sign: "",
    });
  };

  const invertBtn = () => {
    setCalcu({
      num: calcu.num ? calcu.num * -1 : 0,
      res: calcu.res ? calcu.res * -1 : 0,
      sign: "",
    });
  };

  const onBtnClick = () => {
    const results = {
      ".": clickArea,
      "C": resetBtn,
      "/": signBtn,
      "x": signBtn,
      "-": signBtn,
      "+": signBtn,
      "=": equalsBtn,
      "%": persenBtn,
      "+-": invertBtn,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return BtnClick();
    }
  };

  return (
    <>
      <button
        onClick={onBtnClick}
        className={`${getStyle(value)} button-button`}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
