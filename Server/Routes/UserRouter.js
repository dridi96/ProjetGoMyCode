const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/UserController')
const { UserValidation } = require('../Validation/UserValidation')
const {Authentification} = require('../Validation/authentification')


router.post('/register',UserValidation,UserController.Register)
router.post('/login',UserController.Login )
router.get('/',Authentification,UserController.GetDataUsers)
router.put('/:id',Authentification,UserController.UpdateDataUsers)
router.delete('/:id',Authentification,UserController.DeleteDataUSer)


module.exports  = router