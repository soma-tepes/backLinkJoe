const express = require('express')
const router = express.Router()
const { createUrlModel1, createUrlModel2,createUrlModel3,createUrlModel4,createUrlModel5,createUrlModel6, createFooterList1, createFooterList2, createFooterList3 } = require('../models/creategeneric.model')
const controllerGeneric = require('../controller/generic.controller')
const iterableLink = [createUrlModel1, createUrlModel2,createUrlModel3,createUrlModel4,createUrlModel5,createUrlModel6 ]
const iterableFooter = [createFooterList1, createFooterList2, createFooterList3]
const  array = ["/a","/b","/c","/d","/e","/f"]
const addList = ["/addlist1footer","/addlist2footer","/addlist3footer"]

for (let index = 0 ; index < array.length; index++) {
  
  router
  .route(array[index])
  .get(controllerGeneric.findLink(iterableLink[index]))
  .post(controllerGeneric.createLink(iterableLink[index]))
 
}
for (let index = 0; index <addList.length; index++) {
  
  router
 .route(addList[index])
 .get(controllerGeneric.findLink(iterableFooter[index]))
 .post(controllerGeneric.createLink(iterableFooter[index]))

}

for (let index = 0; index < array.length; index++) {
  router
  .route(array[index]+"/:id")
  .get(controllerGeneric.findOneUser(iterableLink[index]))
  .patch(controllerGeneric.updateLink(iterableLink[index]))
  .delete(controllerGeneric.deleteLink(iterableLink[index]))
 

}

for (let index = 0; index < array.length; index++) {
  router
  .route(addList[index]+"/:id")
  .get(controllerGeneric.findOneUser(iterableFooter[index]))
  .patch(controllerGeneric.updateLink(iterableFooter[index]))
  .delete(controllerGeneric.deleteLink(iterableFooter[index]))
 

}






module.exports = router