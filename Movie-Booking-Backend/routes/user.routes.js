// import user.Controller here
const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logoutUser} = require('../controllers/user.controller');

router.route("/auth/login").post(loginUser);
router.route("/auth/signup").post(registerUser);
 router.route("/auth/logout").post(logoutUser);

module.exports = router;