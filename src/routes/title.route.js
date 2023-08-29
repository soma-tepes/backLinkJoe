const express = require('express')
const router = express.Router()

const titlecontroller = require('../controller/title.controller')

router
  .route("/addtitle")
  .get(titlecontroller.findAllTitles)
  .post(titlecontroller.createTitle)

router
  .route("/viewtitles/:id")
  .get(titlecontroller.findOneTitles)
  .patch(titlecontroller.updateTitle)
  .delete(titlecontroller.deleteTitle)
module.exports = router