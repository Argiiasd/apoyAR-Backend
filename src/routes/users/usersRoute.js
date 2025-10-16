const { Route } = require("express");
const router = Router();

const postUserHandler = require("../../handlers/users/postUserHandler");

router.post("/postUser", postUserHandler);
