const Expense = require("../../models/income");
const user = require("../../models/user");
const {ObjectId} = require("mongodb");

module.exports = {
  addExpense,
  getExpensedata,
  delExpensedata
};

async function addExpense(req, res) {
  try {
    const expense = await Expense.create(req.body);

    res.status(200).json(expense);
  } catch (e) {
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