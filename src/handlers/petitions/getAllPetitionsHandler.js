const getAllPetitionsController = require("../../controllers/petitions/getAllPetitions");

module.exports = async (req, res) => {
  try {
    const data = await getAllPetitionsController();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al recibir la lista de peticiones",
    });
  }
};
