const router = require('express').Router();
let Messege = require('../messege.model');

router.route('/').get((req,res)=>{
    Messege.find()
        .then(messeges => res.json(messeges))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const messege = req.body.messege;

    const newMessege = new Messege({username,messege});

    newMessege.save()
        .then(()=> res.json('Messege added!'))
        .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;