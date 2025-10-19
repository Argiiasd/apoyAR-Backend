const { Router } = require("express");
const router = Router();

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");
const getAllPetitionsHandler = require("../../handlers/petitions/getAllPetitionsHandler");
const getPetitionByIdHandler = require("../../handlers/petitions/getPetitionById");

router.post("/postPetition", postPetitionHandler);
router.get("/getAllPetitions", getAllPetitionsHandler);
router.get("/getPetitionById/:id", getPetitionByIdHandler);

module.exports = router;
