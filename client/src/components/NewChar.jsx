import "./NewChar.css";

export default function NewChar() {
  return (
    <>
      <div className="new-char">
        <h1>Create your character</h1>
        <form action="">
          <fieldset>
            <legend>Character Input</legend>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" maxlength="20" required />
            <br />
            <label htmlFor="race">Race</label>
            <br />
            <select id="race" name="race" required>
              <option hidden selected>
                Select one...
              </option>
              <option value="Human">Human</option>
              <option value="Dwarf">Dwarf</option>
              <option value="Elf">Elf</option>
              <option value="Goblin">Goblin</option>
            </select>
            <br />
            <label htmlFor="class">Class</label>
            <br />
            <select id="class" name="class" required>
              <option hidden selected>
                Select one...
              </option>
              <option value="Paladin">Paladin</option>
              <option value="Wizard">Wizard</option>
              <option value="Witch">Witch</option>
              <option value="Barbarian">Barbarian</option>
            </select>
            <br />
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
