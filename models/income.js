const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const incomeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: {type:String,required:true},
    amount: { type: Number, required:true},
    incdate:{type:String,required:true},
    category:{type:String,required:true},
    desc:{type:String},
    month:{type:Number,required:true}
  });


  incomeSchema.statics.getIncomedata = function(userId) {
    // 'this' is the Income model
    return this.find({ user: userId}).sort({incdate:-1});
  };

  incomeSchema.statics.getDatedIncomedata = function(userId,month) {
    // 'this' is the Income model
    return this.find({ user: userId,month:month});
  };

module.exports = mongoose.model("Income",incomeSchema)