import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 7777;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

app.get("/", function (_, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

app.get("/characters", async function (_, res) {
  try {
    const query =
      await db.query(`SELECT characters.name, classes.class, races.race, classes.health, classes.stamina, classes.mana, classes.strength, classes.intellect, races.trait
FROM characters JOIN classes ON characters.class_id = classes.id JOIN races ON characters.race_id = races.id;`);
    console.log(query);
    res.json(query.rows);
  } catch (error) {
    console.error("Er, this isn't working!", error);
    res.status(500).json({ success: false });
  }
});

app.post("/create-characters", (req, res) => {
  const { charName, charRace, charClass } = req.body;
  try {
    const query = db.query(
      `INSERT INTO characters (name, race_id, class_id) VALUES ($1, $2, $3);`,
      [charName, charRace, charClass]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error in create-characters route", error);
    res.status(500).json({ success: false });
  }
});
