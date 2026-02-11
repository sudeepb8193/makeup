const {Router}=require('express')

const {addProductNavdata,findAllProductNavdata,findSingleProductNavdata}=require('../controllers/productNavcontroller')

const productNavrouter=Router()

productNavrouter.post('/productnavdata',addProductNavdata)
productNavrouter.get('/productnavdata',findAllProductNavdata)
productNavrouter.get('/productnavdata/:id',findSingleProductNavdata)



module.exports=productNavrouter


