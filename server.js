const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./config/connection");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes"));

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
