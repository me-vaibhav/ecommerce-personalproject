import mongoose from "mongoose"

const productBucketschema= await mongoose.Schema({

    sellerid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller",
        required:true
    },
    productslist: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      ]
      

},{timestamps:true})
console.log("product bucket")
export default mongoose.model("ProductBucket",productBucketschema)