const express = require("express");
const router = require("./routes/user.route");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
