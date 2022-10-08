import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./router/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config();

let app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up view engnie
configViewEngine(app);

//set up web router
initWebRouter(app);

//connect DB
connectDB();

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Listening project backend on port ${port}`);
});
