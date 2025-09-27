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

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

app.get("/characters", async function (req, res) {
  const query =
    await db.query(`SELECT characters.name, classes.class, races.race, classes.health, classes.stamina, classes.mana, classes.strength, classes.intellect
FROM characters JOIN classes ON characters.class_id = classes.id JOIN races ON characters.race_id = races.id;`);
  console.log(query);
  res.json(query.rows);
});
