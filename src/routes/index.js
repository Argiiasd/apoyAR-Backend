const { Router } = require("express");
const router = Router();

const usersRouter = require("./users/usersRoute");

router.use("/user", usersRouter);

module.exports = router;