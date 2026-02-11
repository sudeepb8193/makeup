const productNavSchema=require('../schema/productNavSchema')

exports.addProductNavdata=async(req,res)=>{
    try {
       let payload= await productNavSchema.create(req.body)
       res.status(200)
       .json({
        success:true,
        message:"productNav data is added",
        payload
       })   
    } catch (error) {
       console.log(`productNav data is not added`) 
    }

}


exports.findAllProductNavdata=async(req,res)=>{
    try {
       let payload= await productNavSchema.find({})
       res.status(200)
       .json({
        success:true,
        message:"productNav data is fetched",
        payload
       })   
    } catch (error) {
       console.log(`productNav data is not fetched`) 
    }

}

exports.findSingleProductNavdata=async(req,res)=>{
    try {
       let payload= await productNavSchema.findById(req.params.id)
       res.status(200)
       .json({
        success:true,
        message:"productNav Single data is fetched",
        payload
       })   
    } catch (error) {
       console.log(`productNav Single data is not fetched`) 
    }

}



