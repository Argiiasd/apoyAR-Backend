const { user } = require("../../db");
const bcrypt = require("bcrypt");

//Este controlador se utiliza para postear administradores y moderadores

const createUser = async (username, email, password, role, profilePicture) => {
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

      const newUserData = {
        username,
        email,
        password: hashedPassword,
        role: role,
      };

      if (profilePicture) {
        newUserData.profilePicture = profilePicture;
      }

      const createdUser = await user.create(newUserData);

      return {
        success: true,
        message: "Usuario creado con éxito",
        data: {
          id: createdUser.id,
          username: createdUser.username,
          email: createdUser.email,
          role: createdUser.role,
          profilePicture: createdUser.profilePicture,
        },
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al crear el usuario",
    };
  }
};

module.exports = createUser;
