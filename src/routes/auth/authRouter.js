const { Router } = require("express");
const router = Router();
const upload = require("../../middleware/upload");

const loginHandler = require("../../handlers/auth/loginHandler");
const postUserHandler = require("../../handlers/users/postUserHandler");

router.post("/register", upload.single("image"), postUserHandler);
router.post("/login", loginHandler);

module.exports = router;