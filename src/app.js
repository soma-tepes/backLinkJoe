const express = require("express");
const cors = require("cors");

const router = require("./routes/routegeneric.route");
const routerTitle = require("./routes/title.route");
const routerArtitle = require("./routes/artitle.route");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1/url/search", router);
app.use("/api/v1/url/search", routerTitle);
app.use("/api/v1/url/search", routerArtitle);
module.exports = app;
