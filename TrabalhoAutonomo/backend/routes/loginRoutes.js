const express = require('express');
const router = express.Router();;
const loginController = require ('../controllers/loginControler')

// Login route
router.post('/login', loginController.fazerlogin);
    
module.exports = router;