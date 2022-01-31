import AsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = AsyncHandler(async (req, res) => {

    const product = await Product.find({})
    res.json(product); 
})

const getProductsById = AsyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)

    }
    else{
        res.status(404).json({message: 'Product Not Found ...'})
    }
})

export {
    getProducts,
    getProductsById
}