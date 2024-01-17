const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const incomeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: {type:String,required:true},
    amount: { type: Number, required:true},
    date:{type:Date,required:true},
    category:{type:String,required:true},
    desc:{type:String,required:true}
  });


module.exports = mongoose.model("Income",incomeSchema)