import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema=new mongoose.Schema({
email:{type:String,required:true},
//username password - passport add kar deta hai with hashing and salting 
//also methods bhi hai default to authenticate and all
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User',userSchema);

export{User};