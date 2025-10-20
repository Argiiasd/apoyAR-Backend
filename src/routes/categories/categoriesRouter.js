const { Router } = require("express");
const router = Router();

const postCategoryHandler = require("../../handlers/categories/postCategoryHandler");

router.post("/postCategory", postCategoryHandler);

module.exports = router;