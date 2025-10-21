const { user } = require("../../db");

const getUserById = async (id) => {
    try {
        const foundUser = await user.findByPk(id);

        if(!foundUser){
            return {
                success: false,
                message: "No se encontró el usuario"
            }
        } else {
            return {
                success: true,
                data: foundUser
            }
        }
    } catch(error){
        return {
            success: false,
            message: "Error al buscar el usuario",
        }
    }
}

module.exports = getUserById;