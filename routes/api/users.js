const express = require('express')
const router = express.Router()
const usersCtrlr = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/register',usersCtrlr.create)
router.post('/login',usersCtrlr.login)
router.get('/check-token',ensureLoggedIn,usersCtrlr.checktoken)
router.post('/resetpwd',usersCtrlr.resetpwd)

module.exports = router