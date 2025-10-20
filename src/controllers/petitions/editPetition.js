const { petition } = require("../../db");

const editPetition = async (id, updates) => {
  try {
    const foundPetition = await petition.findByPk(id);
    if (!foundPetition) {
      return {
        success: false,
        message: "No se encontró la petición",
      };
    }

    Object.entries(updates).forEach(([key, value]) => {
      if (foundPetition.dataValues.hasOwnProperty(key)) {
        foundPetition[key] = value;
      }
    });

    await foundPetition.save();

    return {
      success: true,
      message: "Petición actualizada con éxito",
      data: foundPetition,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al modificar la petición",
    };
  }
};

module.exports = editPetition;
