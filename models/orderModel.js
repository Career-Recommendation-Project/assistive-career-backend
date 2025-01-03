import mongoose from "mongoose"

const Order = new mongoose.Schema({
  orderItems:[{
      name:{type:String,require:true},
      qty:{type:Number, require:true},
      price:{type:Number,require:true},
      image:{type:String,require:true},
      product:{type:mongoose.Schema.Types.ObjectId,
               require:true,
               ref:"products"},
  }],
  shippingAddress:{
      fullName:{type:String,require:true},
      address:{type:String,require:true},
      city:{type:String,require:true},
      postalCode:{type:String,require:true},
      country:{type:String,require:true},
  },
  paymentMethod:{type:String,require:true},
  itemsPrice:{type:Number,require:true},
  shippingPrice:{type:Number,require:true},
  taxPrice:{type:Number,require:true},
  totalOrderPrice:{type:Number,require:true},
  user:{type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true},
  isPaid:{type:Boolean,default:false},
  paidDate:{type:Date,},
  isDelivered:{type:Boolean,default:false},
  deliveredDate:{type:Date},
},
{timestamps:true}
)

export default mongoose.model("Orders",Order);