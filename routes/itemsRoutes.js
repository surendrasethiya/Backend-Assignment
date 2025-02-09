const express = require('express')
const itemsController = require('../controller/itemsController')


const router = express.Router()

router
    .route('/')
    .get(itemsController.getAllItems)
    .post(itemsController.createitem)

router
    .route('/:id')
    .get(itemsController.getItemById)
    .put(itemsController.updateItem)
    .delete(itemsController.deleteItem)


module.exports = router