const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const expenseSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: {type:String,required:true},
    amount: { type: Number, required:true},
    expdate:{type:String,required:true},
    category:{type:String,required:true},
    desc:{type:String,required:true},
    month:{type:Number,required:true}
  });


  expenseSchema.statics.getExpensedata = function(userId) {
    // 'this' is the Order model
    return this.find({ user: userId});
  };

module.exports = mongoose.model("Expense",expenseSchema)