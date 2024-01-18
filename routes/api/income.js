const express = require('express')
const router = express.Router();
const incomeCtrl = require('../../controllers/api/income')

console.log("Inside Routes")
router.post('/addincome',incomeCtrl.addIncome)
router.get('/getincomedata',incomeCtrl.getIncomedata)
router.post('/deleteincome/:id',incomeCtrl.delIncomedata)

module.exports = router;