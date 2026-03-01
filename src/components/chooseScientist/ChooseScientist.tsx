import { useState } from "react";
import "../css/style.css";

export default function ChooseScientist() {
  type Scientists = {
    name: string;
    surname: string;
    born: number;
    dead: number;
    id: number;
  };
  const scientists: Scientists[]  = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
  ];
    const [result, setResult] = useState<Scientists[]>([]);
    
    function scientists19Century() {
      const filter19Century = scientists.filter((scientists) => scientists.born >= 1801 && scientists.born < 1900);
      setResult(filter19Century);
    }

  function birthdayAlbertEinstein() {
    const birthday = scientists.find(
      (scientist) =>
        scientist.name === "Albert" && scientist.surname === "Einstein",
    );
    if (birthday) {
      setResult([birthday]);
    }
  }

  function sortByAlphabet() {
    const sortScientists = scientists.sort((a, b) => a.name.localeCompare(b.name));
    setResult(sortScientists);
  };

  function letterC() {
    const surnameC = scientists.filter((scientist) => scientist.surname.startsWith("C"));
    setResult(surnameC);
  };

  function longerLife() {
    const sortYears = scientists.sort((a, b) => b.dead - b.born - (a.dead - a.born));
    setResult(sortYears);
  }

  function letterA() {
    const nameA = scientists.filter((scientist) => !scientist.name.startsWith("A"));
    setResult(nameA);
  }

  function latestBorn() {
    const youngestScientist = scientists.sort((a, b) => b.born - a.born);
    setResult([youngestScientist[0]]);
  }

  function lifeData() {
    const life = scientists.sort((a, b) => a.dead - a.born - (b.dead - b.born));
    setResult([life[life.length - 1], life[0]]);
  }

  function matchedLetters() {
    const matchA = scientists.filter((scientist) => scientist.name[0] === scientist.surname[0]);
    setResult(matchA);
  }
  
  return (
    <>
      <h4>Обери вченого/их</h4>
      <div className="scientists-container">
        {result.map((scientist) => (
          <div className="scientists" key={scientist.id}>
            <p>
              {scientist.name} {scientist.surname}
              <br />({scientist.born} - {scientist.dead})
            </p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="choose" onClick={scientists19Century}>
          Які вчені народилися в 19 ст.
        </button>
        <button className="choose" onClick={birthdayAlbertEinstein}>
          Знайти рік народження Albert Einshtein
        </button>
        <button className="choose" onClick={sortByAlphabet}>
          Відсортувати вчених за алфавітом
        </button>
        <button className="choose" onClick={letterC}>
          Знайти вчених, прізвища яких починаються на літеру “С”
        </button>
        <button className="choose" onClick={longerLife}>
          Відсортувати вчених за кількістю прожитих років
        </button>
        <button className="choose" onClick={letterA}>
          Видалити всіх вчених, ім’я яких починається на “А”
        </button>
        <button className="choose" onClick={latestBorn}>
          Знайти вченого, який народився найпізніше
        </button>
        <button className="choose" onClick={lifeData}>
          Знайти вченого, який прожив найдовше і вченого, який прожив найменше
        </button>
        <button className="choose" onClick={matchedLetters}>
          Знайти вчених, в яких співпадають перші літери імені і прізвища
        </button>
      </div>
    </>
  );
}
