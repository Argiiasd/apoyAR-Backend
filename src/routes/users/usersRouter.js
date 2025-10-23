const { Router } = require("express");
const router = Router();
const roleValidate = require("../../middleware/roleValidate");

const activateUserHandler = require("../../handlers/users/activateUserHandler");
const deactivateUserHandler = require("../../handlers/users/deactivateUserHandler");
const getAllUsersHandler = require("../../handlers/users/getAllUsersHandler");
const editUserHandler = require("../../handlers/users/editUserHandler");
const getUserByIdHandler = require("../../handlers/users/getUserByIdHandler");

router.put("/activateUser/:id", roleValidate("admin", "moderator"), activateUserHandler);
router.put("/deactivateUser/:id", roleValidate("admin", "moderator"), deactivateUserHandler);
router.put("/editUser/:id", editUserHandler);

router.get("/getAllUsers", roleValidate("admin", "moderator"), getAllUsersHandler);
router.get("/getUserById/:id", getUserByIdHandler);

module.exports = router;
