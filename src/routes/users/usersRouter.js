const { Router } = require("express");
const router = Router();

const activateUserHandler = require("../../handlers/users/activateUserHandler");
const deactivateUserHandler = require("../../handlers/users/deactivateUserHandler");
const getAllUsersHandler = require("../../handlers/users/getAllUsersHandler");
const editUserHandler = require("../../handlers/users/editUserHandler");
const getUserByIdHandler = require("../../handlers/users/getUserByIdHandler");

router.put("/activateUser/:id", activateUserHandler);
router.put("/deactivateUser/:id", deactivateUserHandler);
router.put("/editUser/:id", editUserHandler);

router.get("/getAllUsers", getAllUsersHandler);
router.get("/getUserById/:id", getUserByIdHandler);

module.exports = router;
