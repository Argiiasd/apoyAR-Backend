const { user } = require("../../db");

const getUserById = async (id) => {
  try {
    const foundUser = await user.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!foundUser) {
      return {
        success: false,
        message: "No se encontró el usuario",
      };
    }

    return {
      success: true,
      data: foundUser,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error al buscar el usuario",
    };
  }
};

module.exports = getUserById;
