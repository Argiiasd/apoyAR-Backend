const openPetitionController = require("../../controllers/petitions/openPetition");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await openPetitionController(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al recibir el id de la petición",
    });
  }
};
