const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const authController = require("../controllers/auth");

router.post("/api/register", authController.postSignup);
router.post("/api/login", authController.postLogin);

module.exports = router;