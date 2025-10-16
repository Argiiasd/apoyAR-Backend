const { Router } = require("express");
const router = Router();

const usersRouter = require("./users/usersRouter");

router.use("/users", usersRouter);

module.exports = router;