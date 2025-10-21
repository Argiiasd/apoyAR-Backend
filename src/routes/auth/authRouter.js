const { Router } = require("express");
const router = Router();

const loginHandler = require("../../handlers/auth/loginHandler");
const postUserHandler = require("../../handlers/users/postUserHandler");

router.post("/postUser", postUserHandler);
router.post("/login", loginHandler);

module.exports = router;