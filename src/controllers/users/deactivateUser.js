const { user } = require("../../db");

const deactivateUser = async (id) => {
  try {
    const foundUser = await user.findByPk(id);

    if (foundUser) {
      if (foundUser && foundUser.role === "moderator") {
        return {
          success: false,
          message: "Usuario moderador no puede ser desactivado",
        };
      } else if (
        (foundUser && foundUser.role === "user") ||
        foundUser.role === "admin"
      ) {
        if (foundUser.isActive === false) {
          return {
            success: false,
            message: "El usuario ya está desactivado",
          };
        } else {
          foundUser.isActive = false;
          foundUser.save;
          return {
            success: true,
            message: "Usuario desactivado con éxito",
          };
        }
      }
    } else {
      return {
        success: false,
        message: "Usuario no encontrado",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al desactivar el usuario",
      messageError: error.message,
    };
  }
};

module.exports = deactivateUser;