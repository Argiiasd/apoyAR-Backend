const { petition } = require("../../db");

const getAllPetitions = async () => {
  try {
    const foundPetitions = await petition.findAll();

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
    };
  }
};

module.exports = getAllPetitions;