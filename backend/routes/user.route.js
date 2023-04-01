const express = require("express");
const userController =require("../controller/user.controller")
const router = express.Router();

router.post("/registration", userController.registration);

module.exports = router;
