import { useState } from "react";

export default function LeapYear() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState("");
  function isLeapYear(year: number) {
    {
      year % 4 === 0
        ? setResult("Ви народилися у високосний рік!")
        : setResult("Ви народилися не у високосний рік!");
    }
  }

  return (
    <>
      <div>
        <h4>Перевір в який рік ти народився</h4>
        <input
          type="number"
          placeholder="Введіть рік народження"
          onChange={(e) => setInputValue(Number(e.target.value))}
          style={{ width: "215px", height: "35px" }}
        />
        <button onClick={() => isLeapYear(inputValue)}>Перевірити</button>
        <p style={{ color: "rgb(46 210 43)" }}>{result}</p>
      </div>
    </>
  );
}
