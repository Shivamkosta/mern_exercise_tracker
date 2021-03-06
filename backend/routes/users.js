const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

router.get('/',(req,res) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(400).json('error',err));
});

// router.get('/:id',(req,res)=>{
//     User.findById(req.params.id)
//         .then(users)
// })

router.post('/add',(req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
 
    newUser.save()
            .then(() => res.json('User added'))
            .catch(err => res.status(400).json('Error',err));
})


module.exports = router;