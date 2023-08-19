const express = require('express')
const router = express.Router()
const { createUrlModel1, createUrlModel2,createUrlModel3,createUrlModel4,createUrlModel5,createUrlModel6 } = require('../models/creategeneric.model')
const controllerGeneric = require('../controller/generic.controller')

router
  .route("/a")
  .get(controllerGeneric.findLink(createUrlModel1))
  .post(controllerGeneric.createLink(createUrlModel1))

router
  .route("/b")
  .get(controllerGeneric.findLink(createUrlModel2))
  .post(controllerGeneric.createLink(createUrlModel2))
  router
  .route("/c")
  .get(controllerGeneric.findLink(createUrlModel3))
  .post(controllerGeneric.createLink(createUrlModel3))
  router
  .route("/d")
  .get(controllerGeneric.findLink(createUrlModel4))
  .post(controllerGeneric.createLink(createUrlModel4))
  router
  .route("/e")
  .get(controllerGeneric.findLink(createUrlModel5))
  .post(controllerGeneric.createLink(createUrlModel5))
  router
  .route("/f")
  .get(controllerGeneric.findLink(createUrlModel6))
  .post(controllerGeneric.createLink(createUrlModel6))

  router
  .route("/a/:id")
  .get(controllerGeneric.findOneUser(createUrlModel1))
  .patch(controllerGeneric.updateLink(createUrlModel1))
  .delete(controllerGeneric.deleteLink(createUrlModel1))
  

  router
  .route("/b/:id")
  .get(controllerGeneric.findOneUser(createUrlModel2))
  .patch(controllerGeneric.updateLink(createUrlModel2))
  .delete(controllerGeneric.deleteLink(createUrlModel2))

  router
  .route("/c/:id")
  .get(controllerGeneric.findOneUser(createUrlModel3))
  .patch(controllerGeneric.updateLink(createUrlModel3))
  .delete(controllerGeneric.deleteLink(createUrlModel3))

  router
  .route("/d/:id")
  .get(controllerGeneric.findOneUser(createUrlModel4))
  .patch(controllerGeneric.updateLink(createUrlModel4))
  .delete(controllerGeneric.deleteLink(createUrlModel4))

  router
  .route("/e/:id")
  .get(controllerGeneric.findOneUser(createUrlModel5))
  .patch(controllerGeneric.updateLink(createUrlModel5))
  .delete(controllerGeneric.deleteLink(createUrlModel5))

  router
  .route("/f/:id")
  .get(controllerGeneric.findOneUser(createUrlModel6))
  .patch(controllerGeneric.updateLink(createUrlModel6))
  .delete(controllerGeneric.deleteLink(createUrlModel6))




module.exports = router