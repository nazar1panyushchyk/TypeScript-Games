import { useState } from "react";

export default function GuessNumber() {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState("");
  function isGuessNumber(num: number) {
    const randomNum = Math.floor(Math.random() * 10);
    return num === randomNum ? setResult("Ви вгадали!") : setResult("Ви не вгадали!");
  }
  return (
    <>
      <div>
        <h4>Вгадай число, яке загадав комп’ютер</h4>
        <input
          type="number"
          placeholder="Введіть число"
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={() => isGuessNumber(inputValue)}>Перевірити</button>
        <p>{result}</p>
      </div>
    </>
  );
}
