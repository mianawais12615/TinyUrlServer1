import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectMongoDb } from "./Utils/mongodb.js";
import URLRoute from "./Routes/urls.js";
import { generateShortId } from "./Utils/Keys.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

console.log(generateShortId(9));
ConnectMongoDb();

app.use("/", URLRoute);

app.listen(5050, () => {
  console.log("I am working");
});
