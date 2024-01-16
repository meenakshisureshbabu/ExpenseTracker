const express = require('express')
const router = express.Router()
const usersCtrlr = require('../../controllers/api/users')


router.post('/register',usersCtrlr.create)
router.post('/login',usersCtrlr.login)

module.exports = router