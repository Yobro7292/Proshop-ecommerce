import express from 'express'
const router = express.Router()
import { getProducts, getProductsById } from '../controllers/productController.js'



// @desc Fetch all products
// @route GET /api/products  (all products)
// @access Public
router.route('/').get(getProducts);

// @desc Fetch single product
// @route GET /api/products/;id  (with id of product)
// @access Public
router.route('/:id').get(getProductsById);


export default router