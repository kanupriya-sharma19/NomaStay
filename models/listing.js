import mongoose, { Schema } from 'mongoose';
import { Review } from './reviews.js';

const list=new mongoose.Schema({
title:{type:String,required:true},
description:String,
image: {url:String,
  filename:String
  
  }
,  
price:Number,
location:String,
country:String,
reviews:[{type:  mongoose.Schema.Types.ObjectId,
  ref:"Review"
}],
owner:{type:  mongoose.Schema.Types.ObjectId,
  ref:"User"

},
category:{
  type:[String],
  enum:["beach","pools","nature","camping","arctic","mountains","iconic cities","trending"]
}
})


//listing delete then review bhi delete karna hai, use post middleware..like listing delete ke post main

list.post("findOneAndDelete",async(l)=>{
  if(l&&l.reviews.length){
await Review.deleteMany({_id:{$in:l.reviews}})}
})
const listing = mongoose.model('listing',list);



export{listing};