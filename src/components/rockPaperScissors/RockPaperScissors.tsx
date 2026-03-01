import { useState } from "react";
import { GiStoneBlock, GiPapers } from "react-icons/gi";
import { HiScissors } from "react-icons/hi2";

export default function RockPaperScissors() {
  const choices = ["Камінь", "Ножниці", "Папір"];
  const [result, setResult] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function gaming(player: string) {
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);
    setPlayerChoice(player);

    if (
      (player === "Камінь" && computerChoice === "Ножиці") ||
      (player === "Ножиці" && computerChoice === "Папір") ||
      (player === "Папір" && computerChoice === "Камінь")
    ) {
      setPlayerScore((count) => count + 1);
      setResult("Ви перемогли комп'ютер!");
    } else if (player === computerChoice) {
      setResult("Нічия!");
    } else {
      setComputerScore((count) => count + 1);
      setResult("Комп'ютер переміг вас! Спробуйте ще раз.");
    }
  }
  return (
    <>
      <div>
        <h4>Камінь - ножиці - папір</h4>
        <button onClick={() => gaming("Камінь")}>
          Камінь <GiStoneBlock />
        </button>
        <button onClick={() => gaming("Ножиці")}>
          Ножиці <HiScissors />
        </button>
        <button onClick={() => gaming("Папір")}>
          Папір <GiPapers />
        </button>
        <p>{result}</p>
        <p>Ваш останній вибір: {playerChoice}</p>
        <p>Варіант комп’ютера: {computerChoice}</p>
        <p>Рахунок:</p>
        <p>Комп’ютер - {computerScore}</p>
        <p>Ви - {playerScore}</p>
      </div>
    </>
  );
}
