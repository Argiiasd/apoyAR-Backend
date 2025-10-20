const { Router } = require("express");
const router = Router();

const usersRouter = require("./users/usersRouter");
const petitionsRouter = require("./petitions/petitionsRouter");
const categoriesRouter = require("./categories/categoriesRouter");

router.use("/users", usersRouter);
router.use("/petitions", petitionsRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
