const { Router } = require("express");
const router = Router();

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");
const getAllPetitionsHandler = require("../../handlers/petitions/getAllPetitionsHandler");

router.post("/postPetition", postPetitionHandler);
router.get("/getAllPetitions", getAllPetitionsHandler);

module.exports = router;
