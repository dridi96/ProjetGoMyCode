const { body} = require('express-validator')

exports.UserValidation=[
    body('email','Invalid email').isEmail(),
    body('Password','Password must be between 6 and 10 characters').isLength({ min: 6, max: 10 }),
    body('Password','Password must contain at least one lowercase letter').matches(/^(.*[a-z].*)$/),
    body('Password','Password must contain at least one uppercase letter').matches(/^(.*[A-Z].*)$/),
]