const { petition } = require("../../db");

const getPetitionById = async (id) => {
    try {
        const foundPetition = await petition.findByPk(id);

        if(!foundPetition){
            return {
                success: false,
                message: "No se encontró la petición"
            }
        } else {
            return {
                success: true,
                data: foundPetition
            }
        }
    } catch(error){
        return {
            success: false,
            message: "Error al buscar la petición",
        }
    }
}

module.exports = getPetitionById;