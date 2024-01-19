const Expense = require("../../models/expense");
const user = require("../../models/user");
const {ObjectId} = require("mongodb");

module.exports = {
  addExpense,
  getExpensedata,
  delExpensedata,
  getDatedExpensedata
};

async function addExpense(req, res) {
  try {
    console.log("HERE I AM ",req.body)
    const expense = await Expense.create(req.body);
    console.log("AFTER SAVING DATA")
    res.status(200).json(expense);
  } catch (e) {
    console.log("IN EXCEPTION BLOCK")
    res.status(400).json({ msg: e.message });
  }
}


// app.get("/getproducts",(req,res) => {
//   Product.find({},(error,allProducts) => {
//       //console.log(allProducts)
//       res.json(allProducts)
//   })
// })

async function getExpensedata(req,res){
  try{
    
    const expensedata = await Expense.getExpensedata(req.user._id);
    //incomedata.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    //console.log(incomedata)
    res.status(200).json(expensedata);
  }
  catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function getDatedExpensedata(req,res){
    try{
      
      const expensedata = await Expense.getDatedExpensedata(req.user._id,req.params.month);
      //incomedata.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
      //console.log(incomedata)
      res.status(200).json(expensedata);
    }
    catch(e){
      res.status(400).json({ msg: e.message });
    }
  }


async function delExpensedata(req,res){
  try{
    console.log("Inside controller delete function")
    const delexpense = await Expense.findByIdAndDelete({_id:req.params.id})
    res.status(200).json(delexpense);
  }
  catch(e){
    res.status(400).json({msg:e.message});
  }
}