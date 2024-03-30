const express = require('express');
const router = express.Router();
const { 
    index, showAnggota, updateAnggota, tambahAnggota, deleteAnggota
} = require('../controller/controller.js');
const { body } = require('express-validator');

router.get("/", index);

router.post(
    "/tambahAnggota", 
    [
    // validation
    body('nama').notEmpty(),
    body('image_url').notEmpty(),
    body('deskripsi_singkat').notEmpty()
], 
tambahAnggota
);

router.get('/(:id)', showAnggota);

router.patch('/update/:id', [

    //validation
    body('nama').notEmpty(),
    body('image_url').notEmpty(),
    body('deskripsi_singkat').notEmpty()

], updateAnggota);

router.delete('/delete/(:id)', deleteAnggota);

module.exports = router;