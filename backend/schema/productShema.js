const {Schema,model}=require("mongoose")


const productSchema=new Schema({
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=model('productdata',productSchema)