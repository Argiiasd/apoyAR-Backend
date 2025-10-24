const { Router } = require("express");
const router = Router();
const upload = require("../../middleware/upload");
const tokenValidate = require("../../middleware/tokenValidate");

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");
const getAllPetitionsHandler = require("../../handlers/petitions/getAllPetitionsHandler");
const getPetitionByIdHandler = require("../../handlers/petitions/getPetitionByIdHandler");
const closePetitionHandler = require("../../handlers/petitions/closePetitionHandler");
const openPetitionHandler = require("../../handlers/petitions/openPetitionHandler");
const editPetitionHandler = require("../../handlers/petitions/editPetitionHandler");

router.post("/postPetition", upload.array("images", 3), postPetitionHandler);
router.get("/getAllPetitions", getAllPetitionsHandler);
router.get("/getPetitionById/:id", getPetitionByIdHandler);

router.put("/closePetition/:id", tokenValidate, closePetitionHandler);
router.put("/openPetition/:id", tokenValidate, openPetitionHandler);
router.put("/editPetition/:id", tokenValidate, editPetitionHandler);

module.exports = router;
