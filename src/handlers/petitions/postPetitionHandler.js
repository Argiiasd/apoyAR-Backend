const postPetitionController = require("../../controllers/petitions/postPetition");

module.exports = async (req, res) => {
  try {
    const { title, description, infoTransf, categories } = req.body;
    const userId = req.user.id;
    const data = await postPetitionController(
      title,
      description,
      infoTransf,
      categories,
      userId
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al recibir los datos para crear la petición",
    });
  }
};
