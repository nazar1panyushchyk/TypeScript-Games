import { useState } from "react";

export default function TimeCalculator() {
  const [minutes, setMinutes] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  function calcTime() {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} год., ${mins} хв.`;
  }

  return (
    <>
      <h4>Калькулятор часу</h4>
      <input
        type="number"
        placeholder="Введіть число"
        onChange={(e) => setMinutes(Number(e.target.value))}
      />
      <button onClick={() => setResult(calcTime())}>Обчислити</button>
      <p>{result}</p>
    </>
  );
}
