const { Router } = require("express");
const router = Router();
const roleValidate = require("../../middleware/roleValidate");

const postCategoryHandler = require("../../handlers/categories/postCategoryHandler");
const getAllCategoriesHandler = require("../../handlers/categories/getAllCategories");

router.post("/postCategory", roleValidate("moderator"), postCategoryHandler);

router.get("/getAllCategories", getAllCategoriesHandler);

module.exports = router;