const { Router } = require("express");
const router = Router();

const loginHandler = require("../../handlers/auth/loginHandler");

router.post("/login", loginHandler);

module.exports = router;