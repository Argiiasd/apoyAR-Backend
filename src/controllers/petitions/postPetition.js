const { petition } = require("../../db");
const { user } = require("../../db");

const postPetition = async (
  title,
  description,
  infoTransf,
  category,
  userId
) => {
  try {
    const userFound = user.findByPk(userId);

    if (!userFound) {
      return {
        success: false,
        message: "Usuario no encontrado",
      };
    }

    const newPetition = await petition.create({
      title: title,
      description: description,
      infoTransf: infoTransf,
      category: category,
    });

    const createdPetition = await petition.findOne({
      where: {
        id: newPetition.id,
      },
    });

    return {
      success: true,
      message: "Petición creada con éxito",
      data: createdPetition,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al crear la petición",
      messageError: error.message,
    };
  }
};

module.exports = postPetition;
