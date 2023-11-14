const productController = require('../controllers/products.controllers');
const router = require('express').Router();


router.get('/api/products', productController.getProduct)
router.post('/api/products', productController.createProduct)
router.delete('/api/products', productController.deleteProduct)
router.put('/api/products',productController.editProvider)


module.exports = router;