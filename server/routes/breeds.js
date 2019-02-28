const express = require('express')
const router = express.Router()
const Breed = require('../database/models/breeds')

router.post('/', (req, res) => {
    res.send('saved');
})


module.exports = router