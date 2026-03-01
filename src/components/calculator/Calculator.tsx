import { useState } from "react";

export default function Calculator() {
  const signs = ["+", "*", "-", "/"];
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [selectedSign, setSelectedSign] = useState<string>("");

  function calc(num1: number, num2: number, symbols: string): number | null {
    switch (symbols) {
      case "+":
        return num1 + num2;
      case "*":
        return num1 * num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 != 0) {
          const division = num1 / num2;
          const rounded = Math.round(division * 100) / 100;
          return rounded;
        } else {
          alert("На нуль ділити не можна!");
          return null;
        }
      default:
        return null;
    }
  }

  function handleResult() {
    const result = calc(num1, num2, selectedSign);
    if (result != null) setResult(result);
  }

  return (
    <>
      <div>
        <h4>Калькулятор</h4>
        <input
          type="number"
          placeholder="Введіть число"
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        {signs.map((sign) => (
          <button key={sign} onClick={() => setSelectedSign(sign)}>
            {sign}
          </button>
        ))}
        <input
          type="number"
          placeholder="Введіть число"
          onChange={(e) => setNum2(Number(e.target.value))}
        />
        <button onClick={handleResult}>=</button>
        <p>Сума: {result}</p>
      </div>
    </>
  );
}
