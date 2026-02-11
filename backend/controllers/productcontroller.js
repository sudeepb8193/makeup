const productSchema=require('../schema/productShema')

exports.addProduct=async(req,res)=>{
    try {
       let payload= await productSchema.create(req.body)
       res.status(200)
       .json({
        success:true,
        message:"product data is added",
        payload
       })   
    } catch (error) {
       console.log(`product data is not added`) 
    }

}


exports.findAllProduct=async(req,res)=>{
    try {
       let payload= await productSchema.find({})
       res.status(200)
       .json({
        success:true,
        message:"product data is fetched",
        payload
       })   
    } catch (error) {
       console.log(`product data is not fetched`) 
    }

}

exports.findSingleProduct =async (req,res)=>{
    try {
        let payload = await productSchema.findById(req.params.id)
        res.status(200)
        .json({
            success:true,
            message:'single product is fetched',
            payload
        })
    } catch (error) {
        console.log(`single product is not found`)
    }
}



