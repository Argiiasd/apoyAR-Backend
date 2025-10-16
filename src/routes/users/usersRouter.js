const { Router } = require("express");
const router = Router();

const postUserHandler = require("../../handlers/users/postUserHandler");

router.post("/postUser", postUserHandler);

//TODO: deactivateUser/:id, getAllUsers, getAllUsersDeactivated, getUserById/:userId, editUserInfo

module.exports = router;
