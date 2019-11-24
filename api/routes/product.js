const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message : "Handling get /products request"
    });
});

router.post('/', (req, res, next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message : "Handling post /products request",
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if( id == 'special' ){
        res.status(200).json({
            message : "you discovered the special Id",
            id: id
        });
    }
    else{
        res.status(200).json({
            message: "You passed an id"
        });
    }
});

module.exports = router;