const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static(__dirname + "/dist/WALTER"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/WALTER/index.html"));
});
app.listen(process.env.PORT || 4300);
