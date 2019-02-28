const express = require('express')
const router = express.Router()
const Breed = require('../database/models/breeds')
const User = require('../database/models/user')


router.post('/dog', (req, res) => {
    console.log(`favorite dog!`,req.body)
    let favorite = req.body.favorite
    let userEmail = req.body.userEmail
    Breed.create(favorite).then(data=>{
        if(data){
            User.update({
                email: userEmail
            }, {$push:{favorites:data._id}}).then(data=>res.json(data))
        }
    })
    User.find({}).then(data=>console.log(data))
})






module.exports = router