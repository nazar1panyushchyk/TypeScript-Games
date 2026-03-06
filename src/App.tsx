import GuessNumber from "./components/guessNumber/GuessNumber";
import LeapYear from "./components/leapYear/LeapYear";
import RockPaperScissors from "./components/rockPaperScissors/RockPaperScissors";
import Calculator from "./components/calculator/Calculator";
import TimeCalculator from "./components/timeCalculator/TimeCalculator";
import LargestNumber from "./components/largestNumber/LargestNumber";
import ChooseScientist from "./components/chooseScientist/ChooseScientist";
import Modal from "./components/modal/Modal";
import "./css/modal.css";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [savedName, setSavedName] = useState("User");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <h2 style={{ fontSize: "25px" }}>Популярні інтерактивні ігри</h2>
      <p>Вітаємо, {savedName}</p>
      <LeapYear />
      <GuessNumber />
      <RockPaperScissors />
      <Calculator />
      <TimeCalculator />
      <LargestNumber />
      <ChooseScientist />

      <Modal isOpen={isOpen} onClose={(value) => setIsOpen(value)} setSavedName={setSavedName} />
    </>
  );
}

export default App;
