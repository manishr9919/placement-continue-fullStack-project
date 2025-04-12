const express = require("express");
const userRoute = express.Router();
const updateUserData = require("../controllers/updateUserData");

userRoute.patch("/update", updateUserData);

module.exports = userRoute;
