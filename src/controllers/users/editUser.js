const { user } = require("../../db");

const editUser = async (id, updates) => {
  try {
    const foundUser = await user.findByPk(id);
    if (!foundUser) {
      return {
        success: false,
        message: "No se encontró el usuario",
      };
    }

    Object.entries(updates).forEach(([key, value]) => {
      if (foundUser.dataValues.hasOwnProperty(key)) {
        foundUser[key] = value;
      }
    });

    await foundUser.save();

    return {
      success: true,
      message: "Usuario actualizado con éxito",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al modificar el usuario",
    };
  }
};

module.exports = editUser;
