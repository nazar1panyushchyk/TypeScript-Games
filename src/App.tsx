import GuessNumber from "./components/guessNumber/GuessNumber"
import LeapYear from "./components/leapYear/LeapYear"
import RockPaperScissors from "./components/rockPaperScissors/RockPaperScissors";
import Calculator from "./components/calculator/Calculator";
import TimeCalculator from "./components/timeCalculator/TimeCalculator";
import LargestNumber from "./components/largestNumber/LargestNumber";
import ChooseScientist from "./components/chooseScientist/ChooseScientist";
import "./App.css";

function App() {
  

  return (
    <>
      <h2 style={{ fontSize: "25px" }}>Популярні інтерактивні ігри</h2>
      <LeapYear />
      <GuessNumber />
      <RockPaperScissors />
      <Calculator />
      <TimeCalculator />
      <LargestNumber />
      <ChooseScientist />
    </>
  );
}

export default App
