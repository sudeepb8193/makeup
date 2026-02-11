const {Router}=require('express')

const {addProduct,findAllProduct,findSingleProduct}=require('../controllers/productcontroller')

const productrouter=Router()

productrouter.post('/productdata',addProduct)
productrouter.get('/productdata',findAllProduct)
productrouter.get('/productdata/:id',findSingleProduct)

module.exports=productrouter


