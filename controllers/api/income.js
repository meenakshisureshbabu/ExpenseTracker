const Income = require('../../models/income');

module.exports = {
    addIncome
}

async function addIncome(req, res) {
    try{
      const income = await Income.create(req.body)
      console.log("HERRRRRRREEEEEE",income)
      res.status(200).json(income)
    }catch(e){
        console.log("HHHHHHHHHHHHHHHHHHH")
      res.status(400).json({ msg: e.message });
    }  
}