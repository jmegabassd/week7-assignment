import "./GetChar.css";
import { useState, useEffect } from "react";

export default function GetChar() {
  const [charData, setCharData] = useState(null);

  useEffect(() => {
    async function getCharData() {
      try {
        const response = await fetch("http://localhost:7777/characters");
        const data = await response.json();
        setCharData(data);
      } catch (error) {
        console.error("API failed to fetch", error);
      }
    }
    getCharData();

    const charInterval = setInterval(getCharData, 10000);

    return () => clearInterval(charInterval);
  }, []);

  if (charData)
    return (
      <>
        {charData.map((character, index) => (
          <div className="char-container" key={index}>
            <strong>Name:</strong> {character.name} <br />
            <strong>Class:</strong> {character.class}
            <br />
            <strong>Race:</strong> {character.race}
            <br />
            <strong>Health:</strong> {character.health}
            <br />
            <strong>Stamina:</strong> {character.stamina}
            <br />
            <strong>Mana:</strong> {character.mana}
            <br />
            <strong>Strength:</strong> {character.strength}
            <br />
            <strong>Intellect:</strong> {character.intellect}
            <br />
            <strong>Trait:</strong> {character.trait}
          </div>
        ))}
      </>
    );
}
