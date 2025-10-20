const { Router } = require("express");
const router = Router();

const postUserHandler = require("../../handlers/users/postUserHandler");
const activateUserHandler = require("../../handlers/users/activateUserHandler");
const deactivateUserHandler = require("../../handlers/users/deactivateUserHandler");
const getAllUsersHandler = require("../../handlers/users/getAllUsersHandler");

router.post("/postUser", postUserHandler);

router.put("/activateUser/:id", activateUserHandler);
router.put("/deactivateUser/:id", deactivateUserHandler);

router.get("/getAllUsers", getAllUsersHandler);

module.exports = router;
