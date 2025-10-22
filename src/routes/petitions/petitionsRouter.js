const { Router } = require("express");
const router = Router();
const upload = require("../../middleware/upload");

const postPetitionHandler = require("../../handlers/petitions/postPetitionHandler");
const getAllPetitionsHandler = require("../../handlers/petitions/getAllPetitionsHandler");
const getPetitionByIdHandler = require("../../handlers/petitions/getPetitionByIdHandler");
const closePetitionHandler = require("../../handlers/petitions/closePetitionHandler");
const openPetitionHandler = require("../../handlers/petitions/openPetitionHandler");
const editPetitionHandler = require("../../handlers/petitions/editPetitionHandler");

router.post("/postPetition", upload.array("images", 3), postPetitionHandler);
router.get("/getAllPetitions", getAllPetitionsHandler);
router.get("/getPetitionById/:id", getPetitionByIdHandler);

router.put("/closePetition/:id", closePetitionHandler);
router.put("/openPetition/:id", openPetitionHandler);
router.put("/editPetition/:id", editPetitionHandler);

module.exports = router;
