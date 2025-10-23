const { Router } = require("express");
const router = Router();

const postCategoryHandler = require("../../handlers/categories/postCategoryHandler");
const getAllCategoriesHandler = require("../../handlers/categories/getAllCategories");

router.post("/postCategory", postCategoryHandler);

router.get("/getAllCategories", getAllCategoriesHandler);

module.exports = router;