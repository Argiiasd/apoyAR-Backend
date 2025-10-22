const { petition, category, user, media } = require("../../db");

const getAllPetitions = async () => {
  try {
    const foundPetitions = await petition.findAll({
      include: [
        {
          model: category,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: media,
          attributes: ["id", "url", "type"],
        },
        {
          model: user,
          attributes: ["id", "username", "profilePicture"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    if (!foundPetitions || foundPetitions.length == 0) {
      return {
        success: false,
        message: "No se encontraron peticiones",
      };
    } else {
      return {
        success: true,
        data: foundPetitions,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al recopilar peticiones",
      messageError: error.message
    };
  }
};

module.exports = getAllPetitions;
