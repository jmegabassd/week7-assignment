import "./NewChar.css";
import { useState } from "react";

export default function NewChar() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [charClass, setCharClass] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleRaceChange(event) {
    setRace(event.target.value);
    console.log(event.target.value);
  }

  function handleClassChange(event) {
    setCharClass(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //STEP 4
    //fetch POST server route
    //add headers and body
    console.log(name, race, charClass);
  }

  return (
    <>
      <div className="new-char">
        <h1>Create your character</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Character Input</legend>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              maxLength="20"
              required
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <label htmlFor="race">Race</label>
            <br />
            <select
              id="race"
              name="race"
              required
              value={race}
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
            <br />
            <label htmlFor="class">Class</label>
            <br />
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
            <br />
            <button type="submit">Submit</button>
          </fieldset>
          <br />
          <fieldset>
            <legend>Character Stats</legend>
          </fieldset>
        </form>
      </div>
    </>
  );
}
