import { useState } from "react";
import Cover from "./components/Cover";
import Calculator from "./components/Calculator";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import CompArea from "./components/CompArea";

const btnValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

function App() {
  return (
    <div>
      <CompArea>
        <Cover>
          <Calculator />
          <Buttons>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </Buttons>
        </Cover>
      </CompArea>
    </div>
  );
}

export default App;
