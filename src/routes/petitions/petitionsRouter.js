const { Router } = require("express");
const router = Router();

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");

router.post("/postPetition", postPetitionHandler);

module.exports = router;