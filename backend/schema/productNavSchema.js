const {Schema,model}=require("mongoose")


const productNavSchema=new Schema({
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=model('productnavdata',productNavSchema)