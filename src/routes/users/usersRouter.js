const { Router } = require("express");
const router = Router();
const upload = require("../../middleware/upload");
const roleValidate = require("../../middleware/roleValidate");

const activateUserHandler = require("../../handlers/users/activateUserHandler");
const deactivateUserHandler = require("../../handlers/users/deactivateUserHandler");
const getAllUsersHandler = require("../../handlers/users/getAllUsersHandler");
const editUserHandler = require("../../handlers/users/editUserHandler");
const getUserByIdHandler = require("../../handlers/users/getUserByIdHandler");
const createUserHandler = require("../../handlers/users/createUserHandler");

router.put("/activateUser/:id", roleValidate("admin", "moderator"), activateUserHandler);
router.put("/deactivateUser/:id", roleValidate("admin", "moderator"), deactivateUserHandler);
router.put("/editUser/:id", editUserHandler);

router.get("/getAllUsers", roleValidate("admin", "moderator"), getAllUsersHandler);
router.get("/getUserById/:id", getUserByIdHandler);

router.post("/createUser", roleValidate("moderator"), upload.single("image"), createUserHandler);

module.exports = router;
