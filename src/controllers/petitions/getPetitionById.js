const { petition, category, media, user } = require("../../db");

const getPetitionById = async (id) => {
  try {
    const foundPetition = await petition.findByPk(id, {
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
    });

    if (!foundPetition) {
      return {
        success: false,
        message: "No se encontró la petición",
      };
    } else {
      return {
        success: true,
        data: foundPetition,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al buscar la petición",
    };
  }
};

module.exports = getPetitionById;
