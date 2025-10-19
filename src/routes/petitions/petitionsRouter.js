const { Router } = require("express");
const router = Router();

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");
const getAllPetitionsHandler = require("../../handlers/petitions/getAllPetitionsHandler");
const getPetitionByIdHandler = require("../../handlers/petitions/getPetitionById");
const closePetitionHandler = require("../../handlers/petitions/closePetitionHandler");
const openPetitionHandler = require("../../handlers/petitions/openPetitionHandler");

router.post("/postPetition", postPetitionHandler);
router.get("/getAllPetitions", getAllPetitionsHandler);
router.get("/getPetitionById/:id", getPetitionByIdHandler);

router.put("/closePetition/:id", closePetitionHandler);
router.put("/openPetition/:id", openPetitionHandler);

module.exports = router;
