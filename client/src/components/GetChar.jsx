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
            Name: {character.name} <br />
            Class: {character.class}
            <br />
            Race: {character.race}
            <br />
            Health: {character.health}
            <br />
            Stamina: {character.stamina}
            <br />
            Mana: {character.mana}
            <br />
            Strength: {character.strength}
            <br />
            Intellect: {character.intellect}
            <br />
            Trait: {character.trait}
          </div>
        ))}
      </>
    );
}
