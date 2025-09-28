import "./NewChar.css";
import { useState } from "react";

export default function NewChar() {
  const [charName, setCharName] = useState("");
  const [charRace, setCharRace] = useState("");
  const [charClass, setCharClass] = useState("");

  function handleNameChange(event) {
    setCharName(event.target.value);
    console.log(event.target.value);
  }

  function handleRaceChange(event) {
    setCharRace(event.target.value);
    console.log(event.target.value);
  }

  function handleClassChange(event) {
    setCharClass(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const characterData = {
      charName,
      charRace,
      charClass,
    };

    try {
      const response = await fetch(
        "https://week7-assignment-server-jj9z.onrender.com/create-characters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(characterData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Character successfully added");

      setCharName("");
      setCharRace("");
      setCharClass("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add character.");
    }
  };

  return (
    <>
      <div className="new-char">
        <h1>
          <strong>Create your character</strong>
        </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Character Input</legend>
            <label htmlFor="name">Name: </label>

            <input
              type="text"
              name="name"
              maxLength="20"
              placeholder="Enter Character name"
              required
              value={charName}
              onChange={handleNameChange}
            />

            <label htmlFor="race">Race: </label>

            <select
              id="race"
              name="race"
              required
              value={charRace}
              onChange={handleRaceChange}
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="1">Human</option>
              <option value="2">Dwarf</option>
              <option value="3">Elf</option>
              <option value="4">Gnome</option>
            </select>

            <label htmlFor="class">Class: </label>

            <select
              id="class"
              name="class"
              required
              value={charClass}
              onChange={handleClassChange}
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="1">Paladin</option>
              <option value="2">Wizard</option>
              <option value="3">Witch</option>
              <option value="4">Barbarian</option>
              <option value="5">Druid</option>
            </select>

            <button type="submit">Submit</button>
          </fieldset>

          <fieldset>
            <legend>Character Stats</legend>
          </fieldset>
        </form>
      </div>
    </>
  );
}
