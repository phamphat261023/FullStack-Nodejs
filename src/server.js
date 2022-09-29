import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./router/web";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up view engnie
configViewEngine(app);

//set up web router
initWebRouter(app);

app.listen(port, () => {
  console.log(`Listening project backend on port ${port}`);
});
