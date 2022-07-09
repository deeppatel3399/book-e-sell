const mongoose = require('mongoose');
const jwttoken = require('jsonwebtoken');

const customerSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    tokens:[
        {
            token:{type: String, required:true}
        }
    ],
    cart: {"product":[{
        imgsrc: {type:String,required:true},
        productTitle: {type:String,required:true},
        afterTitle: {type:String,required:true},
        price: {type:String,required:true},
    }]}
});

customerSchema.methods.generateAuthToken = async function () {
    try
    {
        let token = jwttoken.sign({_id:this.id},process.env.SECRET_kEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
}

const Customer = mongoose.model('Customers',customerSchema);

module.exports = Customer;