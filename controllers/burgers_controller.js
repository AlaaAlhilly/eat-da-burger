let express = require('express');

let burger = require('../models/burger');

let router = express.Router();

router.get('/', (req,res) =>{
    burger.select((data) =>{
        let burger_obj = {
            burgers: data
        };
        res.render('index',burger_obj);
    })
});
router.post('/api/burger/add', (req,res) =>{
    burger.insert(req.body.burger_name,(result) =>{
        res.json({id:result.insertId});
    });
});
router.put('/api/burger/update/:id', (req,res) =>{
    let id = req.params.id;
    burger.update(id, (result) =>{
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
router.put('/api/reset',(req,res)=>{
    burger.reset();
    res.status(200).end();
})
module.exports = router;