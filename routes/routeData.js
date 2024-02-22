const express = require('express');
const router = express.Router();
const { 
    index, showData, updateData, tambahData, deleteData
} = require('../controller/controller.js');
const { body } = require('express-validator');

router.get("/", index);

router.post(
    "/tambahData", 
    [
    // validation
    body("title").notEmpty(),
    body("content").notEmpty(),
], 
tambahData
);

router.get('/(:id)', showData);

router.patch('/update/:id', [

    //validation
    body('Nama').notEmpty(),
    body('imageURL').notEmpty(),
    body('deskripsi_singkat').notEmpty()

], updateData);

router.delete('/delete/(:id)', deleteData);

module.exports = router;