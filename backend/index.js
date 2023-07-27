require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const expressApp = require("./express-app");
const { Connect } = require("./database/db-connect");

const StartServer = async () => {
  const app = express();
  await Connect();
  await expressApp(app);

  app
    .listen(port, () => {
      console.log(`listening to port ${port}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
