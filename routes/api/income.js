const express = require('express')
const router = express.Router();
const incomeCtrl = require('../../controllers/api/income')

router.post('/addincome',incomeCtrl.addIncome)

module.exports = router;