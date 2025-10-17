const { Router } = require("express");
const router = Router();

const usersRouter = require("./users/usersRouter");
const petitionsRouter = require("./petitions/petitionsRouter");

router.use("/users", usersRouter);
router.use("/petitions", petitionsRouter);

module.exports = router;
