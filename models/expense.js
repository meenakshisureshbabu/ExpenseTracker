const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: {type:String,required:true},
    amount: { type: Number, required:true},
    expdate:{type:String,required:true},
    category:{type:String,required:true},
    desc:{type:String},
    month:{type:Number,required:true}
  });


  expenseSchema.statics.getExpensedata = function(userId) {
    // 'this' is the Expense model
    return this.find({ user: userId}).sort({expdate:-1});
  };


  expenseSchema.statics.getDatedExpensedata = function(userId,month) {
    // 'this' is the Expense model
    return this.find({ user: userId,month:month});
  };

module.exports = mongoose.model("Expense",expenseSchema)