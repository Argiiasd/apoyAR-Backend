const { user } = require("../../db");
const bcrypt = require("bcrypt");

const postUser = async (username, email, password, role) => {
  try {
    const foundUsername = await user.findOne({
      where: {
        username: username,
      },
    });

    if (foundUsername) {
      return {
        success: false,
        message: "El usuario ya existe",
      };
    }

    const foundEmail = await user.findOne({
      where: {
        email: email,
      },
    });

    if (foundEmail) {
      return {
        success: false,
        message:
          "El email ya se encuentra registrado. Inicia sesión o recupera tu contraseña.",
      };
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      await user.create({
        username: username,
        email: email,
        password: hashedPassword,
        role: role || "user",
      });

      const createdUser = await user.findOne({
        where: {
          email: email,
        },
        attributes: ["id", "username", "email", "role"],
      });

      return {
        success: true,
        message: "Usuario creado con éxito",
        data: createdUser,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al crear el usuario",
      errorMessage: error.message,
    };
  }
};

module.exports = postUser;