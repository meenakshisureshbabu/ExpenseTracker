const Income = require('../../models/income');

module.exports = {
    addIncome
}

async function addIncome(req, res) {
    try{
      const income = await Income.create(req.body)
      console.log(income)
      res.status(200).json(income)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }  
}