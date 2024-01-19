const express = require('express')
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense')

console.log("Inside Routes")
router.post('/addexpense',expenseCtrl.addExpense)
router.get('/getexpensedata',expenseCtrl.getExpensedata)
router.post('/deleteexpense/:id',expenseCtrl.delExpensedata)
router.get('/getdatedexpensedata/:month',expenseCtrl.getDatedExpensedata)

module.exports = router;