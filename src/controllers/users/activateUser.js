const { user } = require("../../db");

const activateUser = async (id) => {
  try {
    const foundUser = await user.findByPk(id);

    if (foundUser) {
      if (foundUser && foundUser.role === "moderator") {
        return {
          success: false,
          message: "Usuario moderador no puede ser reactivado",
        };
      } else if (
        (foundUser && foundUser.role === "user") ||
        foundUser.role === "admin"
      ) {
        if (foundUser.isActive === true) {
          return {
            success: false,
            message: "El usuario ya está activado",
          };
        } else {
          foundUser.isActive = true;
          foundUser.save();
          return {
            success: true,
            message: "Usuario activado con éxito",
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
      message: "Error al activar el usuario",
    };
  }
};

module.exports = activateUser;
