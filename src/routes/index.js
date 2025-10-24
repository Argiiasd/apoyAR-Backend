const { Router } = require("express");
const router = Router();
const tokenValidate = require("../middleware/tokenValidate");

const usersRouter = require("./users/usersRouter");
const petitionsRouter = require("./petitions/petitionsRouter");
const categoriesRouter = require("./categories/categoriesRouter");
const authRouter = require("./auth/authRouter");

router.use("/auth", authRouter);
router.use("/petitions", petitionsRouter);

//Middleware para verificar el token de jwt. A partir de acá todas las rutas requieren un token válido
router.use(tokenValidate);

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);

module.exports = router;
