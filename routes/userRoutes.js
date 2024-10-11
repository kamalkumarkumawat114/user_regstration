const express = require('express');
const { saveUser, getUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/', saveUser);
router.get('/', getUsers);

module.exports = router;
