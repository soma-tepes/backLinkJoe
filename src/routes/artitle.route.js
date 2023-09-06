const artitlecontroller = require("../controller/artitle.controller");
const express = require("express");

const router = express.Router();
const { upload } = require("../utils/multer");
router
  .route("/artitle")
  .get(artitlecontroller.viewArtitle)
  .post(upload.single("img"), artitlecontroller.createArtitle);

module.exports = router;
