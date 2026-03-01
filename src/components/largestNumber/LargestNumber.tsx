import { useState } from "react";

export default function LargestNumber() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [num3, setNum3] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  function calcNum(a: number, b: number, c: number) {
    let maxNum = a;

    if (b > maxNum && b > c) {
      maxNum = b;
      setResult(b);
    } else if (c > maxNum && c > b) {
      maxNum = c;
      setResult(c);
    } else {
      setResult(a);
    }
    return maxNum;
  }
  return (
    <>
      <h4>Введіть 3 числа</h4>
      <input
        type="number"
        placeholder="Введіть число"
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Введіть число"
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Введіть число"
        onChange={(e) => setNum3(Number(e.target.value))}
      />
      <button onClick={() => calcNum(num1, num2, num3)}>Обчислити</button>
      <p>Найбільше число, яке ви ввели - {result}</p>
    </>
  );
}
