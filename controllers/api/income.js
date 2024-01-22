const Income = require("../../models/income");
const user = require("../../models/user");
const {ObjectId} = require("mongodb");

module.exports = {
  addIncome,
  getIncomedata,
  delIncomedata,
  getDatedIncomedata
};

async function addIncome(req, res) {
  try {
    const income = await Income.create(req.body);

    res.status(200).json(income);
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

async function getIncomedata(req,res){
  try{
    
    const incomedata = await Income.getIncomedata(req.user._id);
    //incomedata.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    //console.log(incomedata)
    res.status(200).json(incomedata);
  }
  catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function getDatedIncomedata(req,res){
  try{
    
    const incomedata = await Income.getDatedIncomedata(req.user._id,req.params.month);
    //incomedata.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    //console.log(incomedata)
    res.status(200).json(incomedata);
  }
  catch(e){
    res.status(400).json({ msg: e.message });
  }
}


async function delIncomedata(req,res){
  try{
    //console.log("Inside controller delete function")
    const delincome = await Income.findByIdAndDelete({_id:req.params.id})
    res.status(200).json(delincome);
  }
  catch(e){
    res.status(400).json({msg:e.message});
  }
}