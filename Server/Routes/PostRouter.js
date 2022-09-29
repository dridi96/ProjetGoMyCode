const express = require('express');
const {Authentification} = require('../Validation/authentification')
const PostCotroller = require('../Controllers/PostControllers');
const router = express.Router();


router.post('/',Authentification,PostCotroller.AddPost)

router.get('/',Authentification,PostCotroller.GetPost)

router.delete('/:id',Authentification,PostCotroller.DeletePost)

router.put('/:id',Authentification,PostCotroller.AddComment)

router.put('/',Authentification,PostCotroller.DeleteComment)


module.exports = router